'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function overload(signature, original) {
    return {
        signature,
        argumentTypes: signature === '' ? [] : signature.split(',').map(className => ({ className })),
        implementation: null,
        apply(self, args) { return original.apply(self, Array.from(args)); }
    };
}

function method(entries) {
    return { overloads: entries.map(([signature, original]) => overload(signature, original)) };
}

class MockByteBuffer {
    constructor(bytes, position = 0, limit = bytes.length) {
        this.bytes = bytes;
        this.pos = position;
        this.lim = limit;
        this.savedMark = null;
    }

    duplicate() {
        const copy = new MockByteBuffer(this.bytes, this.pos, this.lim);
        copy.savedMark = this.savedMark;
        return copy;
    }

    position(value) {
        if (value === undefined) return this.pos;
        this.pos = value;
        if (this.savedMark !== null && this.savedMark > value) this.savedMark = null;
        return this;
    }

    limit(value) {
        if (value === undefined) return this.lim;
        this.lim = value;
        if (this.pos > value) this.pos = value;
        if (this.savedMark !== null && this.savedMark > value) this.savedMark = null;
        return this;
    }

    mark() {
        this.savedMark = this.pos;
        return this;
    }

    get(destination) {
        for (let i = 0; i < destination.length; i++) {
            destination[i] = this.bytes[this.pos++];
        }
        return this;
    }
}

const initMethod = method([
    ['int,java.security.Key', function () {}],
    ['int,java.security.Key,java.security.SecureRandom', function () {}],
    ['int,java.security.Key,java.security.spec.AlgorithmParameterSpec', function () {}],
    ['int,java.security.Key,java.security.spec.AlgorithmParameterSpec,java.security.SecureRandom', function () {}],
    ['int,java.security.Key,java.security.AlgorithmParameters', function () {}],
    ['int,java.security.Key,java.security.AlgorithmParameters,java.security.SecureRandom', function () {}]
]);

const uniqueFailure = new Error('provider failure');
const updateMethod = method([
    ['[B', function () { return [1, 2]; }],
    ['[B,int,int', function () { return [3]; }],
    ['[B,int,int,[B', function (_input, _off, _len, output) {
        output[0] = 0xaa;
        output[1] = 0xbb;
        return 2;
    }],
    ['[B,int,int,[B,int', function (_input, _off, _len, output, outputOffset) {
        output[outputOffset] = 0xcc;
        output[outputOffset + 1] = 0xdd;
        return 2;
    }],
    ['java.nio.ByteBuffer,java.nio.ByteBuffer', function (input, output) {
        const count = input.limit() - input.position();
        for (let i = 0; i < count; i++) {
            output.bytes[output.pos++] = input.bytes[input.pos++] ^ 0xff;
        }
        return count;
    }]
]);

const finalMethod = method([
    ['', function () { return [9]; }],
    ['[B', function () { return [8]; }],
    ['[B,int,int', function () { return [7]; }],
    ['[B,int', function (output, outputOffset) {
        output[outputOffset] = 0xee;
        output[outputOffset + 1] = 0xff;
        return 2;
    }],
    ['[B,int,int,[B', function (_input, _off, _len, output) {
        output[0] = 6;
        return 1;
    }],
    ['[B,int,int,[B,int', function (_input, _off, _len, output, outputOffset) {
        output[outputOffset] = 5;
        return 1;
    }],
    ['java.nio.ByteBuffer,java.nio.ByteBuffer', function (input, output) {
        const count = input.limit() - input.position();
        for (let i = 0; i < count; i++) {
            output.bytes[output.pos++] = input.bytes[input.pos++] + 1;
        }
        return count;
    }]
]);

const aadMethod = method([
    ['[B', function () {}],
    ['[B,int,int', function () {}],
    ['java.nio.ByteBuffer', function (input) { input.position(input.limit()); }]
]);

const cipherClass = {
    init: initMethod,
    update: updateMethod,
    doFinal: finalMethod,
    updateAAD: aadMethod
};

const keySpecClass = {
    $init: method([
        ['[B,java.lang.String', function () {}],
        ['[B,int,int,java.lang.String', function () {}]
    ])
};

function typeClass(name, predicate = () => false) {
    return {
        class: { isInstance: predicate },
        $new() { throw new Error(`${name} constructor not mocked`); }
    };
}

const weakReferenceClass = typeClass('WeakReference');
weakReferenceClass.$new = object => ({ get: () => object });

const systemClass = typeClass('System');
systemClass.identityHashCode = object => object.identity;

const stringClass = typeClass('String');
stringClass.$new = bytes => Buffer.from(bytes.map(value => value & 0xff)).toString('utf8');

const exceptionClass = typeClass('Exception');
exceptionClass.$new = () => ({ getStackTrace: () => [] });

const base64Class = typeClass('Base64');
base64Class.NO_WRAP = { value: 2 };
base64Class.encodeToString = bytes => Buffer.from(bytes.map(value => value & 0xff)).toString('base64');

const classes = {
    'javax.crypto.Cipher': cipherClass,
    'javax.crypto.spec.SecretKeySpec': keySpecClass,
    'java.lang.System': systemClass,
    'java.lang.ref.WeakReference': weakReferenceClass,
    'java.lang.String': stringClass,
    'java.lang.Exception': exceptionClass,
    'android.util.Base64': base64Class,
    'javax.crypto.SecretKey': typeClass('SecretKey', object => object.kind === 'secret'),
    'java.security.PublicKey': typeClass('PublicKey', object => object.kind === 'public'),
    'java.security.PrivateKey': typeClass('PrivateKey', object => object.kind === 'private'),
    'java.security.AlgorithmParameters': typeClass('AlgorithmParameters'),
    'java.security.SecureRandom': typeClass('SecureRandom'),
    'javax.crypto.spec.IvParameterSpec': typeClass('IvParameterSpec'),
    'javax.crypto.spec.GCMParameterSpec': typeClass('GCMParameterSpec'),
    'javax.crypto.spec.ChaCha20ParameterSpec': typeClass('ChaCha20ParameterSpec'),
    'javax.crypto.spec.OAEPParameterSpec': typeClass('OAEPParameterSpec')
};

const logs = [];
const sandbox = {
    Java: {
        performNow(callback) { callback(); },
        perform(callback) { callback(); },
        use(name) {
            if (!classes[name]) throw new Error(`unmocked Java.use(${name})`);
            return classes[name];
        },
        array(_type, values) { return Array.from(values); },
        cast(value) { return value; }
    },
    Process: { getCurrentThreadId() { return 11; } },
    console: { log(message) { logs.push(message); } },
    Buffer,
    Set,
    RegExp,
    Number,
    Object,
    Array,
    String,
    JSON,
    Error
};

const source = fs.readFileSync(path.join(__dirname, '..', 'frida-java-crypto-spy.js'), 'utf8');
vm.runInNewContext(source, sandbox, { filename: 'frida-java-crypto-spy.js' });

function implementation(methodObject, signature) {
    const entry = methodObject.overloads.find(candidate => candidate.signature === signature);
    if (!entry || typeof entry.implementation !== 'function') {
        throw new Error(`missing implementation for ${signature}`);
    }
    return entry.implementation;
}

const cipher = {
    identity: 123,
    getAlgorithm: () => 'AES/GCM/NoPadding',
    getIV: () => [0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b],
    getParameters: () => null,
    getProvider: () => ({ getName: () => 'MockProvider' }),
    equals(other) { return other && other.identity === this.identity; }
};

const key = {
    kind: 'secret',
    getEncoded: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    getAlgorithm: () => 'AES',
    getFormat: () => 'RAW',
    getClass: () => ({ getName: () => 'javax.crypto.spec.SecretKeySpec' })
};

implementation(initMethod, 'int,java.security.Key').call(cipher, 1, key);
logs.length = 0;

const destination = new Array(12).fill(0x44);
const written = implementation(updateMethod, '[B,int,int,[B,int')
    .call(cipher, [1, 2, 3, 4], 1, 2, destination, 5);
if (written !== 2 || destination[5] !== 0xcc || destination[6] !== 0xdd) {
    throw new Error('output-offset update behavior changed');
}
if (!logs.join('\n').match(/Input Hex\s+: 02 03/) ||
        !logs.join('\n').match(/Output Hex\s+: cc dd/)) {
    throw new Error('output-offset update logged the wrong range');
}

logs.length = 0;
const finalDestination = new Array(8).fill(0x22);
const finalWritten = implementation(finalMethod, '[B,int').call(cipher, finalDestination, 3);
if (finalWritten !== 2 || !logs.join('\n').match(/Output Hex\s+: ee ff/)) {
    throw new Error('doFinal(output, offset) logged the wrong range');
}

logs.length = 0;
const inputBuffer = new MockByteBuffer([0x01, 0x02, 0x03], 1, 3).mark();
const outputBuffer = new MockByteBuffer(new Array(10).fill(0), 4, 10).mark();
const bufferWritten = implementation(updateMethod, 'java.nio.ByteBuffer,java.nio.ByteBuffer')
    .call(cipher, inputBuffer, outputBuffer);
if (bufferWritten !== 2 || inputBuffer.position() !== 3 || outputBuffer.position() !== 6 ||
        inputBuffer.savedMark !== 1 || outputBuffer.savedMark !== 4) {
    throw new Error('ByteBuffer inspection changed application-visible position or mark semantics');
}
if (!logs.join('\n').match(/Input Hex\s+: 02 03/) ||
        !logs.join('\n').match(/Output Hex\s+: fd fc/)) {
    throw new Error('ByteBuffer input/output range was logged incorrectly');
}

const throwingOverload = updateMethod.overloads.find(entry => entry.signature === '[B');
throwingOverload.apply = () => { throw uniqueFailure; };
let observedFailure = null;
try {
    throwingOverload.implementation.call(cipher, [1]);
} catch (error) {
    observedFailure = error;
}
if (observedFailure !== uniqueFailure) {
    throw new Error('original provider exception identity was not preserved');
}

console.log('Mock runtime byte-range and behavior-preservation tests passed.');
