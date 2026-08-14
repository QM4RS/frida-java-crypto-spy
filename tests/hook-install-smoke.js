'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function overload(signature) {
    return {
        argumentTypes: signature === '' ? [] : signature.split(',').map(className => ({ className })),
        implementation: null,
        apply() { return null; }
    };
}

function method(signatures) {
    return { overloads: signatures.map(overload) };
}

const cipher = {
    init: method([
        'int,java.security.Key',
        'int,java.security.Key,java.security.SecureRandom',
        'int,java.security.Key,java.security.spec.AlgorithmParameterSpec',
        'int,java.security.Key,java.security.spec.AlgorithmParameterSpec,java.security.SecureRandom',
        'int,java.security.Key,java.security.AlgorithmParameters',
        'int,java.security.Key,java.security.AlgorithmParameters,java.security.SecureRandom'
    ]),
    update: method([
        '[B',
        '[B,int,int',
        '[B,int,int,[B',
        '[B,int,int,[B,int',
        'java.nio.ByteBuffer,java.nio.ByteBuffer'
    ]),
    doFinal: method([
        '',
        '[B',
        '[B,int,int',
        '[B,int',
        '[B,int,int,[B',
        '[B,int,int,[B,int',
        'java.nio.ByteBuffer,java.nio.ByteBuffer'
    ]),
    updateAAD: method(['[B', '[B,int,int', 'java.nio.ByteBuffer'])
};

const keySpec = {
    $init: method(['[B,java.lang.String', '[B,int,int,java.lang.String'])
};

const genericClass = {
    class: { isInstance() { return false; } },
    $new() { return {}; }
};

const sandbox = {
    Java: {
        perform(callback) { callback(); },
        use(name) {
            if (name === 'javax.crypto.Cipher') return cipher;
            if (name === 'javax.crypto.spec.SecretKeySpec') return keySpec;
            if (name === 'android.util.Base64') {
                return Object.assign({}, genericClass, { NO_WRAP: { value: 2 } });
            }
            return genericClass;
        },
        array(_type, values) { return values; },
        cast(value) { return value; }
    },
    Process: { getCurrentThreadId() { return 1; } },
    console: { log() {} },
    Set,
    RegExp,
    Number,
    Object,
    Array,
    String,
    JSON
};

const source = fs.readFileSync(path.join(__dirname, '..', 'frida-java-crypto-spy.js'), 'utf8');
vm.runInNewContext(source, sandbox, { filename: 'frida-java-crypto-spy.js' });

for (const [name, hookedMethod] of Object.entries({
    init: cipher.init,
    update: cipher.update,
    doFinal: cipher.doFinal,
    updateAAD: cipher.updateAAD,
    SecretKeySpec: keySpec.$init
})) {
    for (const entry of hookedMethod.overloads) {
        if (typeof entry.implementation !== 'function') {
            throw new Error(`${name} overload was not hooked`);
        }
    }
}

console.log('Frida hook installation smoke test passed.');
