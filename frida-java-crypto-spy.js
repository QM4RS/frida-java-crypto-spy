/*
 * frida-java-crypto-spy
 * Generic javax.crypto.Cipher instrumentation for Android.
 *
 * Edit CONFIG before loading. Logging is intentionally console-only.
 */

'use strict';

const CONFIG = {
    logInit: true,
    logUpdate: true,
    logDoFinal: true,
    logAAD: true,
    logSecretKeySpec: true,
    logErrors: true,

    showUtf8: true,
    showHex: true,
    showBase64: true,
    showKeys: true,
    showIV: true,
    showProvider: false,

    backtrace: false,
    backtraceDepth: 12,
    excludeAndroidFramework: true,
    excludedStackPrefixes: [
        'java.',
        'javax.crypto.',
        'sun.',
        'android.',
        'com.android.internal.'
    ],

    maxDumpBytes: 4096,
    maxRememberedKeys: 512,

    // Strings are case-insensitive substrings. RegExp values also work.
    includeAlgorithms: [],
    excludeAlgorithms: [],

    // Stack package filters are evaluated only when either list is non-empty.
    includePackages: [],
    excludePackages: []
};

Java.perform(function () {
    function tryUse(className) {
        try {
            return Java.use(className);
        } catch (_) {
            return null;
        }
    }

    const Classes = {
        Cipher: Java.use('javax.crypto.Cipher'),
        SecretKeySpec: Java.use('javax.crypto.spec.SecretKeySpec'),
        IvParameterSpec: Java.use('javax.crypto.spec.IvParameterSpec'),
        GCMParameterSpec: tryUse('javax.crypto.spec.GCMParameterSpec'),
        ChaCha20ParameterSpec: tryUse('javax.crypto.spec.ChaCha20ParameterSpec'),
        OAEPParameterSpec: tryUse('javax.crypto.spec.OAEPParameterSpec'),
        AlgorithmParameters: Java.use('java.security.AlgorithmParameters'),
        SecureRandom: Java.use('java.security.SecureRandom'),
        SecretKey: Java.use('javax.crypto.SecretKey'),
        PublicKey: Java.use('java.security.PublicKey'),
        PrivateKey: Java.use('java.security.PrivateKey'),
        String: Java.use('java.lang.String'),
        System: Java.use('java.lang.System'),
        WeakReference: Java.use('java.lang.ref.WeakReference'),
        Exception: Java.use('java.lang.Exception'),
        Base64: Java.use('android.util.Base64')
    };

    function safeValue(callback, fallback) {
        try {
            return callback();
        } catch (_) {
            return fallback;
        }
    }

    function safeRun(callback) {
        try {
            callback();
        } catch (_) {
            // Target correctness always wins over logging.
        }
    }

    function toJsString(value) {
        if (value === null || value === undefined) {
            return null;
        }
        return safeValue(function () { return value.toString(); }, '<unavailable>');
    }

    function toNumber(value) {
        return Number(safeValue(function () { return value.valueOf(); }, value));
    }

    function classNameOf(object) {
        if (object === null || object === undefined) {
            return null;
        }
        return safeValue(function () { return object.getClass().getName().toString(); }, '<unknown>');
    }

    const ReentrancyGuard = (function () {
        const depthByThread = Object.create(null);

        function key() {
            return String(Process.getCurrentThreadId());
        }

        return {
            active: function () {
                return (depthByThread[key()] || 0) > 0;
            },
            enter: function () {
                const thread = key();
                depthByThread[thread] = (depthByThread[thread] || 0) + 1;
            },
            leave: function () {
                const thread = key();
                const next = (depthByThread[thread] || 1) - 1;
                if (next <= 0) {
                    delete depthByThread[thread];
                } else {
                    depthByThread[thread] = next;
                }
            }
        };
    }());

    function isValidUtf8(bytes) {
        let index = 0;
        while (index < bytes.length) {
            const first = bytes[index++];
            if (first <= 0x7f) {
                continue;
            }

            let remaining;
            let codePoint;
            let minimum;
            if (first >= 0xc2 && first <= 0xdf) {
                remaining = 1;
                codePoint = first & 0x1f;
                minimum = 0x80;
            } else if (first >= 0xe0 && first <= 0xef) {
                remaining = 2;
                codePoint = first & 0x0f;
                minimum = 0x800;
            } else if (first >= 0xf0 && first <= 0xf4) {
                remaining = 3;
                codePoint = first & 0x07;
                minimum = 0x10000;
            } else {
                return false;
            }

            if (index + remaining > bytes.length) {
                return false;
            }
            for (let i = 0; i < remaining; i++) {
                const next = bytes[index++];
                if ((next & 0xc0) !== 0x80) {
                    return false;
                }
                codePoint = (codePoint << 6) | (next & 0x3f);
            }
            if (codePoint < minimum || codePoint > 0x10ffff ||
                    (codePoint >= 0xd800 && codePoint <= 0xdfff)) {
                return false;
            }
        }
        return true;
    }

    const ByteUtils = {
        snapshotArray: function (array, offset, length) {
            if (array === null || array === undefined) {
                return null;
            }

            const arrayLength = toNumber(array.length);
            const start = offset === undefined ? 0 : toNumber(offset);
            const fullLength = length === undefined ? arrayLength - start : toNumber(length);
            if (!Number.isFinite(start) || !Number.isFinite(fullLength) ||
                    start < 0 || fullLength < 0 || start + fullLength > arrayLength) {
                return null;
            }

            const previewLength = Math.min(fullLength, Math.max(0, CONFIG.maxDumpBytes));
            const bytes = new Array(previewLength);
            for (let i = 0; i < previewLength; i++) {
                bytes[i] = toNumber(array[start + i]) & 0xff;
            }
            return {
                bytes: bytes,
                length: fullLength,
                truncated: previewLength < fullLength
            };
        },

        snapshotByteBuffer: function (buffer, startPosition, endPosition) {
            if (buffer === null || buffer === undefined) {
                return null;
            }

            const start = startPosition === undefined ? toNumber(buffer.position()) : toNumber(startPosition);
            const end = endPosition === undefined ? toNumber(buffer.limit()) : toNumber(endPosition);
            if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end < start) {
                return null;
            }

            const fullLength = end - start;
            const previewLength = Math.min(fullLength, Math.max(0, CONFIG.maxDumpBytes));
            const duplicate = buffer.duplicate();
            duplicate.position(start);
            duplicate.limit(start + previewLength);
            const javaBytes = Java.array('byte', new Array(previewLength).fill(0));
            duplicate.get(javaBytes);
            const snapshot = ByteUtils.snapshotArray(javaBytes);
            snapshot.length = fullLength;
            snapshot.truncated = previewLength < fullLength;
            return snapshot;
        },

        trimSnapshot: function (snapshot, length) {
            if (snapshot === null) {
                return null;
            }
            const fullLength = Math.max(0, toNumber(length));
            return {
                bytes: snapshot.bytes.slice(0, Math.min(snapshot.bytes.length, fullLength)),
                length: fullLength,
                truncated: snapshot.bytes.length < fullLength
            };
        },

        hex: function (bytes) {
            const parts = new Array(bytes.length);
            for (let i = 0; i < bytes.length; i++) {
                parts[i] = bytes[i].toString(16).padStart(2, '0');
            }
            return parts.join(' ');
        },

        base64: function (bytes) {
            const signed = new Array(bytes.length);
            for (let i = 0; i < bytes.length; i++) {
                signed[i] = bytes[i] > 127 ? bytes[i] - 256 : bytes[i];
            }
            return Classes.Base64.encodeToString(
                Java.array('byte', signed), Classes.Base64.NO_WRAP.value).toString();
        },

        printableUtf8: function (bytes) {
            if (!isValidUtf8(bytes)) {
                return null;
            }
            const signed = new Array(bytes.length);
            for (let i = 0; i < bytes.length; i++) {
                signed[i] = bytes[i] > 127 ? bytes[i] - 256 : bytes[i];
            }
            const text = Classes.String.$new(Java.array('byte', signed), 'UTF-8').toString();
            for (let i = 0; i < text.length; i++) {
                const code = text.charCodeAt(i);
                if ((code < 0x20 && code !== 0x09 && code !== 0x0a && code !== 0x0d) ||
                        (code >= 0x7f && code <= 0x9f)) {
                    return null;
                }
            }
            return text;
        }
    };

    const Backtrace = {
        frames: function () {
            const stack = Classes.Exception.$new().getStackTrace();
            const frames = [];
            for (let i = 0; i < stack.length; i++) {
                const frame = stack[i];
                const className = frame.getClassName().toString();
                if (className === 'javax.crypto.Cipher') {
                    continue;
                }
                frames.push({
                    className: className,
                    methodName: frame.getMethodName().toString(),
                    fileName: toJsString(frame.getFileName()),
                    lineNumber: toNumber(frame.getLineNumber())
                });
            }
            return frames;
        },

        callSiteAllowed: function (frames) {
            if (CONFIG.includePackages.length > 0 && !frames.some(function (frame) {
                return matchesAny(frame.className, CONFIG.includePackages);
            })) {
                return false;
            }
            return !frames.some(function (frame) {
                return matchesAny(frame.className, CONFIG.excludePackages);
            });
        },

        format: function (frames) {
            const result = [];
            for (let i = 0; i < frames.length && result.length < CONFIG.backtraceDepth; i++) {
                const frame = frames[i];
                if (CONFIG.excludeAndroidFramework && CONFIG.excludedStackPrefixes.some(function (prefix) {
                    return frame.className.indexOf(prefix) === 0;
                })) {
                    continue;
                }
                const location = frame.fileName === null ? '' :
                    ' (' + frame.fileName + ':' + frame.lineNumber + ')';
                result.push(frame.className + '.' + frame.methodName + location);
            }
            return result;
        }
    };

    function matchesAny(value, patterns) {
        const candidate = value || '';
        const upper = candidate.toUpperCase();
        return patterns.some(function (pattern) {
            if (pattern instanceof RegExp) {
                pattern.lastIndex = 0;
                return pattern.test(candidate);
            }
            return upper.indexOf(String(pattern).toUpperCase()) !== -1;
        });
    }

    function algorithmAllowed(transformation) {
        if (CONFIG.includeAlgorithms.length > 0 &&
                !matchesAny(transformation, CONFIG.includeAlgorithms)) {
            return false;
        }
        return !matchesAny(transformation, CONFIG.excludeAlgorithms);
    }

    function loggingContext(transformation) {
        if (!algorithmAllowed(transformation)) {
            return { allowed: false, frames: null };
        }
        if (CONFIG.includePackages.length === 0 && CONFIG.excludePackages.length === 0 && !CONFIG.backtrace) {
            return { allowed: true, frames: null };
        }
        const frames = safeValue(Backtrace.frames, []);
        return { allowed: Backtrace.callSiteAllowed(frames), frames: frames };
    }

    const CipherState = (function () {
        // Frida may create a fresh JS wrapper for the same Java object. WeakMap(this)
        // is therefore not a sound identity store. identityHashCode selects a bucket,
        // Java Object.equals resolves rare collisions, and WeakReference avoids leaks.
        const buckets = Object.create(null);
        let nextId = 1;
        let accesses = 0;

        function identity(cipher) {
            return String(toNumber(Classes.System.identityHashCode(cipher)));
        }

        function sameObject(left, right) {
            return safeValue(function () { return left.equals(right); }, false) === true;
        }

        function find(cipher) {
            const key = identity(cipher);
            const bucket = buckets[key];
            if (!bucket) {
                sweepSometimes();
                return null;
            }
            for (let i = bucket.length - 1; i >= 0; i--) {
                const object = bucket[i].reference.get();
                if (object === null) {
                    bucket.splice(i, 1);
                } else if (sameObject(object, cipher)) {
                    sweepSometimes();
                    return bucket[i].state;
                }
            }
            if (bucket.length === 0) {
                delete buckets[key];
            }
            sweepSometimes();
            return null;
        }

        function put(cipher, state) {
            const key = identity(cipher);
            let bucket = buckets[key];
            if (!bucket) {
                bucket = [];
                buckets[key] = bucket;
            }
            for (let i = bucket.length - 1; i >= 0; i--) {
                const object = bucket[i].reference.get();
                if (object === null) {
                    bucket.splice(i, 1);
                } else if (sameObject(object, cipher)) {
                    bucket[i].state = state;
                    sweepSometimes();
                    return state;
                }
            }
            bucket.push({ reference: Classes.WeakReference.$new(cipher), state: state });
            sweepSometimes();
            return state;
        }

        function sweepSometimes() {
            accesses++;
            if ((accesses & 0xff) !== 0) {
                return;
            }
            Object.keys(buckets).forEach(function (key) {
                const live = buckets[key].filter(function (entry) {
                    return entry.reference.get() !== null;
                });
                if (live.length === 0) {
                    delete buckets[key];
                } else {
                    buckets[key] = live;
                }
            });
        }

        function baseState(metadata) {
            return Object.assign({
                id: nextId++,
                inputBytes: 0,
                outputBytes: 0,
                updateCount: 0,
                finalCount: 0,
                aadBytes: 0,
                aadCount: 0
            }, metadata);
        }

        return {
            createAfterInit: function (cipher, metadata) {
                return put(cipher, baseState(metadata));
            },
            get: find,
            getOrDiscover: function (cipher) {
                const existing = find(cipher);
                if (existing !== null) {
                    return existing;
                }
                return put(cipher, baseState({
                    transformation: safeValue(function () {
                        return cipher.getAlgorithm().toString();
                    }, '<unknown>'),
                    mode: 'UNKNOWN (attached after init)'
                }));
            }
        };
    }());

    function padLabel(label) {
        return (label + '                    ').slice(0, 20);
    }

    function appendDump(lines, label, snapshot) {
        if (snapshot === null) {
            lines.push('  ' + padLabel(label + ' Length') + ': <null>');
            return;
        }
        lines.push('  ' + padLabel(label + ' Length') + ': ' + snapshot.length +
            (snapshot.truncated ? ' (showing first ' + snapshot.bytes.length + ')' : ''));
        const text = CONFIG.showUtf8 ? safeValue(function () {
            return ByteUtils.printableUtf8(snapshot.bytes);
        }, null) : null;
        if (text !== null) {
            lines.push('  ' + padLabel(label + ' UTF-8') + ': ' + JSON.stringify(text));
        }
        if (CONFIG.showHex) {
            lines.push('  ' + padLabel(label + ' Hex') + ': ' + ByteUtils.hex(snapshot.bytes));
        }
        if (CONFIG.showBase64) {
            lines.push('  ' + padLabel(label + ' Base64') + ': ' + ByteUtils.base64(snapshot.bytes));
        }
    }

    const Logger = {
        event: function (state, eventName, fields, dumps, warnings, frames) {
            const transformation = state && state.transformation ? state.transformation : '<unknown>';
            const mode = state && state.mode ? state.mode : 'UNKNOWN';
            const id = state && state.id ? state.id : '?';
            const lines = ['[Cipher #' + id + '][' + transformation + '][' + mode + '] ' + eventName];
            (fields || []).forEach(function (field) {
                if (field[1] !== null && field[1] !== undefined) {
                    lines.push('  ' + padLabel(field[0]) + ': ' + field[1]);
                }
            });
            (dumps || []).forEach(function (dump) {
                appendDump(lines, dump[0], dump[1]);
            });
            (warnings || []).forEach(function (warning) {
                lines.push('  ' + padLabel('Warning') + ': ' + warning);
            });
            if (CONFIG.backtrace) {
                const formatted = Backtrace.format(frames || safeValue(Backtrace.frames, []));
                if (formatted.length > 0) {
                    lines.push('  Call site:');
                    formatted.forEach(function (frame) { lines.push('    ' + frame); });
                }
            }
            safeRun(function () { console.log(lines.join('\n')); });
        },

        error: function (state, eventName, error, frames) {
            if (CONFIG.logErrors) {
                Logger.event(state, eventName + ' THREW', [
                    ['Exception', toJsString(error)]
                ], [], [], frames);
            }
        },

        secretKeySpec: function (signature, algorithm, snapshot, offset, length) {
            const lines = ['[SecretKeySpec] CREATE', '  ' + padLabel('Algorithm') + ': ' + algorithm];
            lines.push('  ' + padLabel('Constructor') + ': ' + signature);
            if (offset !== null) {
                lines.push('  ' + padLabel('Source Range') + ': offset ' + offset + ', length ' + length);
            }
            appendDump(lines, 'Key', snapshot);
            safeRun(function () { console.log(lines.join('\n')); });
        }
    };

    function opmodeName(opmode) {
        switch (toNumber(opmode)) {
            case 1: return 'ENCRYPT';
            case 2: return 'DECRYPT';
            case 3: return 'WRAP';
            case 4: return 'UNWRAP';
            default: return 'UNKNOWN(' + toNumber(opmode) + ')';
        }
    }

    function inspectKey(key) {
        if (key === null || key === undefined) {
            return { algorithm: null, format: null, className: null, role: null, encoded: null, sizeBits: null };
        }
        const encodedArray = safeValue(function () { return key.getEncoded(); }, null);
        const encoded = encodedArray === null ? null : ByteUtils.snapshotArray(encodedArray);
        let role = 'Key';
        if (Classes.SecretKey.class.isInstance(key)) {
            role = 'SecretKey';
        } else if (Classes.PublicKey.class.isInstance(key)) {
            role = 'PublicKey';
        } else if (Classes.PrivateKey.class.isInstance(key)) {
            role = 'PrivateKey';
        }
        return {
            algorithm: safeValue(function () { return key.getAlgorithm().toString(); }, '<unknown>'),
            format: safeValue(function () {
                const format = key.getFormat();
                return format === null ? '<non-exportable>' : format.toString();
            }, '<unavailable>'),
            className: classNameOf(key),
            role: role,
            encoded: encoded,
            sizeBits: encoded === null ? null : encoded.length * 8
        };
    }

    function inspectParameterSpec(spec) {
        const result = {
            className: classNameOf(spec),
            iv: null,
            gcmTagBits: null,
            chaChaCounter: null,
            details: null
        };
        if (spec === null || spec === undefined) {
            return result;
        }
        if (Classes.GCMParameterSpec !== null && Classes.GCMParameterSpec.class.isInstance(spec)) {
            const gcm = Java.cast(spec, Classes.GCMParameterSpec);
            result.iv = ByteUtils.snapshotArray(gcm.getIV());
            result.gcmTagBits = toNumber(gcm.getTLen());
        } else if (Classes.IvParameterSpec.class.isInstance(spec)) {
            result.iv = ByteUtils.snapshotArray(Java.cast(spec, Classes.IvParameterSpec).getIV());
        } else if (Classes.ChaCha20ParameterSpec !== null &&
                Classes.ChaCha20ParameterSpec.class.isInstance(spec)) {
            const chaCha = Java.cast(spec, Classes.ChaCha20ParameterSpec);
            result.iv = ByteUtils.snapshotArray(chaCha.getNonce());
            result.chaChaCounter = toNumber(chaCha.getCounter());
        } else if (Classes.OAEPParameterSpec !== null &&
                Classes.OAEPParameterSpec.class.isInstance(spec)) {
            const oaep = Java.cast(spec, Classes.OAEPParameterSpec);
            result.details = 'digest=' + oaep.getDigestAlgorithm() + ', mgf=' + oaep.getMGFAlgorithm();
        } else {
            result.details = safeValue(function () { return spec.toString(); }, null);
        }
        return result;
    }

    function inspectAlgorithmParameters(parameters) {
        if (parameters === null || parameters === undefined) {
            return null;
        }
        const result = {
            className: classNameOf(parameters),
            algorithm: safeValue(function () { return parameters.getAlgorithm().toString(); }, null),
            encoded: null,
            spec: null,
            text: safeValue(function () { return parameters.toString(); }, null)
        };
        const encoded = safeValue(function () { return parameters.getEncoded(); }, null);
        result.encoded = encoded === null ? null : ByteUtils.snapshotArray(encoded);
        if (Classes.GCMParameterSpec !== null) {
            result.spec = safeValue(function () {
                return inspectParameterSpec(parameters.getParameterSpec(Classes.GCMParameterSpec.class));
            }, null);
        }
        if (result.spec === null) {
            result.spec = safeValue(function () {
                return inspectParameterSpec(parameters.getParameterSpec(Classes.IvParameterSpec.class));
            }, null);
        }
        return result;
    }

    function preInit(args) {
        const metadata = {
            opmode: toNumber(args[0]),
            mode: opmodeName(args[0]),
            key: inspectKey(args[1]),
            explicitSpec: null,
            explicitParameters: null,
            secureRandom: null
        };
        for (let i = 2; i < args.length; i++) {
            const argument = args[i];
            if (argument === null || argument === undefined) {
                continue;
            }
            if (Classes.AlgorithmParameters.class.isInstance(argument)) {
                metadata.explicitParameters = inspectAlgorithmParameters(argument);
            } else if (Classes.SecureRandom.class.isInstance(argument)) {
                metadata.secureRandom = classNameOf(argument);
            } else {
                metadata.explicitSpec = inspectParameterSpec(argument);
            }
        }
        return metadata;
    }

    function postInit(cipher, before) {
        const ivArray = safeValue(function () { return cipher.getIV(); }, null);
        const parameters = inspectAlgorithmParameters(
            safeValue(function () { return cipher.getParameters(); }, null));
        const provider = safeValue(function () {
            const value = cipher.getProvider();
            return value === null ? null : value.getName().toString();
        }, null);
        const explicitSpec = before.explicitSpec;
        const postSpec = parameters && parameters.spec ? parameters.spec : null;
        return {
            transformation: safeValue(function () { return cipher.getAlgorithm().toString(); }, '<unknown>'),
            mode: before.mode,
            opmode: before.opmode,
            key: before.key,
            explicitSpec: explicitSpec,
            parameters: parameters || before.explicitParameters,
            provider: provider,
            secureRandom: before.secureRandom,
            iv: ivArray === null ? (explicitSpec ? explicitSpec.iv : null) : ByteUtils.snapshotArray(ivArray),
            gcmTagBits: explicitSpec && explicitSpec.gcmTagBits !== null ?
                explicitSpec.gcmTagBits : (postSpec ? postSpec.gcmTagBits : null)
        };
    }

    function cryptoWarnings(state) {
        const warnings = [];
        const transformation = (state.transformation || '').toUpperCase();
        if (transformation.indexOf('/ECB/') !== -1 || /(^|\/)ECB($|\/)/.test(transformation)) {
            warnings.push('ECB mode detected; identical blocks may reveal patterns');
        }
        if (state.key && state.key.algorithm && state.key.algorithm.toUpperCase() === 'AES' &&
                state.key.sizeBits !== null && [128, 192, 256].indexOf(state.key.sizeBits) === -1) {
            warnings.push('Unusual AES key length: ' + state.key.sizeBits + ' bits');
        }
        if (state.iv !== null) {
            if (transformation.indexOf('GCM') !== -1 && state.iv.length !== 12) {
                warnings.push('Non-typical GCM nonce length: ' + state.iv.length + ' bytes (commonly 12)');
            }
            if (transformation.indexOf('AES/CBC') !== -1 && state.iv.length !== 16) {
                warnings.push('Unusual AES/CBC IV length: ' + state.iv.length + ' bytes');
            }
        }
        return warnings;
    }

    function logInit(state, frames) {
        const key = state.key || {};
        const isAesRawKey = key.algorithm && key.algorithm.toUpperCase() === 'AES' && key.format === 'RAW';
        const fields = [
            ['Overload', state.initOverload],
            ['Transformation', state.transformation],
            ['Mode', state.mode],
            ['Provider', CONFIG.showProvider ? state.provider : null],
            ['Key Algorithm', key.algorithm],
            ['Key Role', key.role],
            ['Key Class', key.className],
            ['Key Format', key.format],
            [isAesRawKey ? 'AES Key Size' : 'Encoded Key Size',
                key.sizeBits === null || key.sizeBits === undefined ? null : key.sizeBits + ' bits'],
            ['GCM Tag', state.gcmTagBits === null ? null : state.gcmTagBits + ' bits'],
            ['Parameter Spec', state.explicitSpec ? state.explicitSpec.className : null],
            ['Parameter Details', state.explicitSpec ? state.explicitSpec.details : null],
            ['ChaCha Counter', state.explicitSpec ? state.explicitSpec.chaChaCounter : null],
            ['Parameters', state.parameters ? (state.parameters.algorithm || state.parameters.className) : null],
            ['SecureRandom', state.secureRandom]
        ];
        const dumps = [];
        if (CONFIG.showKeys) {
            dumps.push(['Key', key.encoded]);
        }
        if (CONFIG.showIV && state.iv !== null) {
            dumps.push(['IV', state.iv]);
        }
        if (state.parameters && state.parameters.encoded !== null) {
            dumps.push(['Parameters', state.parameters.encoded]);
        }
        Logger.event(state, 'INIT', fields, dumps, cryptoWarnings(state), frames);
    }

    function methodSignature(overload) {
        return overload.argumentTypes.map(function (type) { return type.className; }).join(',');
    }

    function installSafeHook(overload, handlers) {
        overload.implementation = function () {
            if (ReentrancyGuard.active()) {
                return overload.apply(this, arguments);
            }
            ReentrancyGuard.enter();
            const self = this;
            const originalArguments = arguments;
            const args = Array.prototype.slice.call(arguments);
            let before = null;
            try {
                before = safeValue(function () {
                    return handlers.before ? handlers.before(self, args) : null;
                }, null);
                let result;
                try {
                    result = overload.apply(self, originalArguments);
                } catch (originalError) {
                    safeRun(function () {
                        if (handlers.error) {
                            handlers.error(self, args, before, originalError);
                        }
                    });
                    throw originalError;
                }
                safeRun(function () {
                    if (handlers.after) {
                        handlers.after(self, args, before, result);
                    }
                });
                return result;
            } finally {
                ReentrancyGuard.leave();
            }
        };
    }

    Classes.Cipher.init.overloads.forEach(function (overload) {
        const signature = methodSignature(overload);
        installSafeHook(overload, {
            before: function (_cipher, args) {
                return preInit(args);
            },
            after: function (cipher, args, before) {
                const pre = before || safeValue(function () { return preInit(args); }, null);
                if (pre === null) {
                    return;
                }
                const metadata = postInit(cipher, pre);
                metadata.initOverload = signature;
                const state = CipherState.createAfterInit(cipher, metadata);
                const context = loggingContext(state.transformation);
                if (CONFIG.logInit && context.allowed) {
                    logInit(state, context.frames);
                }
            },
            error: function (cipher, _args, before, error) {
                const state = CipherState.get(cipher) || {
                    id: '?',
                    transformation: safeValue(function () { return cipher.getAlgorithm().toString(); }, '<unknown>'),
                    mode: before ? before.mode : 'UNKNOWN'
                };
                const context = loggingContext(state.transformation);
                if (context.allowed) {
                    Logger.error(state, 'INIT', error, context.frames);
                }
            }
        });
    });

    function captureBufferCall(args) {
        return {
            inputPosition: toNumber(args[0].position()),
            input: ByteUtils.snapshotByteBuffer(args[0]),
            outputPosition: toNumber(args[1].position())
        };
    }

    function captureUpdateInput(signature, args) {
        if (signature === '[B') {
            return { input: ByteUtils.snapshotArray(args[0]) };
        }
        if (signature.indexOf('[B,int,int') === 0) {
            return { input: ByteUtils.snapshotArray(args[0], args[1], args[2]) };
        }
        if (signature === 'java.nio.ByteBuffer,java.nio.ByteBuffer') {
            return captureBufferCall(args);
        }
        return { input: null };
    }

    function captureUpdateOutput(signature, args, before, result) {
        if (signature === '[B' || signature === '[B,int,int') {
            return result === null ? null : ByteUtils.snapshotArray(result);
        }
        if (signature === '[B,int,int,[B') {
            return ByteUtils.snapshotArray(args[3], 0, toNumber(result));
        }
        if (signature === '[B,int,int,[B,int') {
            return ByteUtils.snapshotArray(args[3], args[4], toNumber(result));
        }
        if (signature === 'java.nio.ByteBuffer,java.nio.ByteBuffer') {
            return ByteUtils.snapshotByteBuffer(args[1], before.outputPosition, toNumber(args[1].position()));
        }
        return null;
    }

    Classes.Cipher.update.overloads.forEach(function (overload) {
        const signature = methodSignature(overload);
        installSafeHook(overload, {
            before: function (cipher, args) {
                const state = CipherState.getOrDiscover(cipher);
                const context = loggingContext(state.transformation);
                const capture = CONFIG.logUpdate && context.allowed ? captureUpdateInput(signature, args) : null;
                return { state: state, context: context, capture: capture };
            },
            after: function (_cipher, args, before, result) {
                if (!before || !before.capture) {
                    return;
                }
                let input = before.capture.input;
                if (signature === 'java.nio.ByteBuffer,java.nio.ByteBuffer') {
                    input = ByteUtils.trimSnapshot(input,
                        toNumber(args[0].position()) - before.capture.inputPosition);
                }
                const output = captureUpdateOutput(signature, args, before.capture, result);
                before.state.inputBytes += input === null ? 0 : input.length;
                before.state.outputBytes += output === null ? 0 : output.length;
                before.state.updateCount++;
                Logger.event(before.state, 'UPDATE', [
                    ['Overload', signature],
                    ['Update #', before.state.updateCount],
                    ['Stream Input Total', before.state.inputBytes],
                    ['Stream Output Total', before.state.outputBytes]
                ], [['Input', input], ['Output', output]], [], before.context.frames);
            },
            error: function (cipher, _args, before, error) {
                const state = before && before.state ? before.state : CipherState.getOrDiscover(cipher);
                const context = before && before.context ? before.context : loggingContext(state.transformation);
                if (context.allowed) {
                    Logger.error(state, 'UPDATE', error, context.frames);
                }
            }
        });
    });

    function captureFinalInput(signature, args) {
        if (signature === '') {
            return { input: null };
        }
        if (signature === '[B') {
            return { input: ByteUtils.snapshotArray(args[0]) };
        }
        if (signature === '[B,int,int' || signature.indexOf('[B,int,int,[B') === 0) {
            return { input: ByteUtils.snapshotArray(args[0], args[1], args[2]) };
        }
        if (signature === '[B,int') {
            return { input: null };
        }
        if (signature === 'java.nio.ByteBuffer,java.nio.ByteBuffer') {
            return captureBufferCall(args);
        }
        return { input: null };
    }

    function captureFinalOutput(signature, args, before, result) {
        if (signature === '' || signature === '[B' || signature === '[B,int,int') {
            return result === null ? null : ByteUtils.snapshotArray(result);
        }
        if (signature === '[B,int') {
            return ByteUtils.snapshotArray(args[0], args[1], toNumber(result));
        }
        if (signature === '[B,int,int,[B') {
            return ByteUtils.snapshotArray(args[3], 0, toNumber(result));
        }
        if (signature === '[B,int,int,[B,int') {
            return ByteUtils.snapshotArray(args[3], args[4], toNumber(result));
        }
        if (signature === 'java.nio.ByteBuffer,java.nio.ByteBuffer') {
            return ByteUtils.snapshotByteBuffer(args[1], before.outputPosition, toNumber(args[1].position()));
        }
        return null;
    }

    Classes.Cipher.doFinal.overloads.forEach(function (overload) {
        const signature = methodSignature(overload);
        installSafeHook(overload, {
            before: function (cipher, args) {
                const state = CipherState.getOrDiscover(cipher);
                const context = loggingContext(state.transformation);
                const capture = CONFIG.logDoFinal && context.allowed ? captureFinalInput(signature, args) : null;
                return { state: state, context: context, capture: capture };
            },
            after: function (_cipher, args, before, result) {
                if (!before || !before.capture) {
                    return;
                }
                let input = before.capture.input;
                if (signature === 'java.nio.ByteBuffer,java.nio.ByteBuffer') {
                    input = ByteUtils.trimSnapshot(input,
                        toNumber(args[0].position()) - before.capture.inputPosition);
                }
                const output = captureFinalOutput(signature, args, before.capture, result);
                before.state.inputBytes += input === null ? 0 : input.length;
                before.state.outputBytes += output === null ? 0 : output.length;
                before.state.finalCount++;
                Logger.event(before.state, 'FINAL', [
                    ['Overload', signature || '<no arguments>'],
                    ['Final #', before.state.finalCount],
                    ['Operation Input Total', before.state.inputBytes],
                    ['Operation Output Total', before.state.outputBytes],
                    ['AAD Total', before.state.aadBytes]
                ], [['Input', input], ['Output', output]], [], before.context.frames);

                // doFinal resets Cipher to its post-init state. Keep metadata while
                // resetting logical stream counters for a possible next operation.
                before.state.inputBytes = 0;
                before.state.outputBytes = 0;
                before.state.updateCount = 0;
                before.state.aadBytes = 0;
                before.state.aadCount = 0;
            },
            error: function (cipher, _args, before, error) {
                const state = before && before.state ? before.state : CipherState.getOrDiscover(cipher);
                const context = before && before.context ? before.context : loggingContext(state.transformation);
                if (context.allowed) {
                    Logger.error(state, 'FINAL', error, context.frames);
                }
            }
        });
    });

    if (Classes.Cipher.updateAAD) {
        Classes.Cipher.updateAAD.overloads.forEach(function (overload) {
            const signature = methodSignature(overload);
            installSafeHook(overload, {
                before: function (cipher, args) {
                    const state = CipherState.getOrDiscover(cipher);
                    const context = loggingContext(state.transformation);
                    if (!CONFIG.logAAD || !context.allowed) {
                        return { state: state, context: context, enabled: false };
                    }
                    if (signature === '[B') {
                        return { state: state, context: context, enabled: true,
                            input: ByteUtils.snapshotArray(args[0]), position: null };
                    }
                    if (signature === '[B,int,int') {
                        return { state: state, context: context, enabled: true,
                            input: ByteUtils.snapshotArray(args[0], args[1], args[2]), position: null };
                    }
                    if (signature === 'java.nio.ByteBuffer') {
                        return { state: state, context: context, enabled: true,
                            input: ByteUtils.snapshotByteBuffer(args[0]), position: toNumber(args[0].position()) };
                    }
                    return { state: state, context: context, enabled: true, input: null, position: null };
                },
                after: function (_cipher, args, before) {
                    if (!before || !before.enabled) {
                        return;
                    }
                    let aad = before.input;
                    if (signature === 'java.nio.ByteBuffer') {
                        aad = ByteUtils.trimSnapshot(aad, toNumber(args[0].position()) - before.position);
                    }
                    before.state.aadBytes += aad === null ? 0 : aad.length;
                    before.state.aadCount++;
                    Logger.event(before.state, 'AAD', [
                        ['Overload', signature],
                        ['AAD Chunk #', before.state.aadCount],
                        ['AAD Total', before.state.aadBytes]
                    ], [['AAD', aad]], [], before.context.frames);
                },
                error: function (cipher, _args, before, error) {
                    const state = before && before.state ? before.state : CipherState.getOrDiscover(cipher);
                    const context = before && before.context ? before.context : loggingContext(state.transformation);
                    if (context.allowed) {
                        Logger.error(state, 'AAD', error, context.frames);
                    }
                }
            });
        });
    }

    const rememberedKeys = new Set();

    function rememberKey(fingerprint) {
        if (rememberedKeys.has(fingerprint)) {
            return false;
        }
        rememberedKeys.add(fingerprint);
        if (rememberedKeys.size > CONFIG.maxRememberedKeys) {
            rememberedKeys.delete(rememberedKeys.values().next().value);
        }
        return true;
    }

    Classes.SecretKeySpec.$init.overloads.forEach(function (overload) {
        const signature = methodSignature(overload);
        if (signature !== '[B,java.lang.String' && signature !== '[B,int,int,java.lang.String') {
            return;
        }
        installSafeHook(overload, {
            before: function (_self, args) {
                const ranged = signature === '[B,int,int,java.lang.String';
                const offset = ranged ? toNumber(args[1]) : 0;
                const length = ranged ? toNumber(args[2]) : toNumber(args[0].length);
                return {
                    algorithm: toJsString(args[ranged ? 3 : 1]),
                    key: ByteUtils.snapshotArray(args[0], offset, length),
                    offset: ranged ? offset : null,
                    length: length
                };
            },
            after: function (_self, _args, before) {
                if (!CONFIG.logSecretKeySpec || !CONFIG.showKeys || before === null || before.key === null ||
                        !algorithmAllowed(before.algorithm)) {
                    return;
                }
                const fingerprint = before.algorithm + ':' + ByteUtils.hex(before.key.bytes) + ':' + before.key.length;
                if (rememberKey(fingerprint)) {
                    Logger.secretKeySpec(signature, before.algorithm, before.key,
                        before.offset, before.length);
                }
            },
            error: function (_self, _args, _before, error) {
                if (CONFIG.logErrors) {
                    safeRun(function () {
                        console.log('[SecretKeySpec] CREATE THREW\n  ' +
                            padLabel('Exception') + ': ' + toJsString(error));
                    });
                }
            }
        });
    });

    safeRun(function () {
        console.log('[frida-java-crypto-spy] Generic Cipher hooks installed');
    });
});
