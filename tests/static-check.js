'use strict';

const fs = require('fs');
const path = require('path');

const script = fs.readFileSync(path.join(__dirname, '..', 'frida-java-crypto-spy.js'), 'utf8');

const requiredSignatures = [
    "signature === '[B'",
    "signature === '[B,int,int'",
    "signature === '[B,int,int,[B'",
    "signature === '[B,int,int,[B,int'",
    "signature === '[B,int'",
    "signature === 'java.nio.ByteBuffer,java.nio.ByteBuffer'",
    "signature === 'java.nio.ByteBuffer'",
    "signature !== '[B,java.lang.String'",
    "signature !== '[B,int,int,java.lang.String'"
];

for (const fragment of requiredSignatures) {
    if (!script.includes(fragment)) {
        throw new Error(`missing overload dispatch: ${fragment}`);
    }
}

const requiredSafetyFeatures = [
    'System.identityHashCode',
    'WeakReference',
    'duplicate()',
    'ReentrancyGuard',
    'throw originalError',
    'cipher.getIV()',
    'cipher.getParameters()',
    'cipher.getProvider()',
    'key.getEncoded()',
    'Classes.Cipher.updateAAD.overloads',
    'JavaApi.performNow'
];

for (const fragment of requiredSafetyFeatures) {
    if (!script.includes(fragment)) {
        throw new Error(`missing safety feature: ${fragment}`);
    }
}

if (script.includes('new WeakMap()')) {
    throw new Error('wrapper-identity WeakMap state tracking reintroduced');
}
if (script.includes('android.widget.Toast') || script.includes('java.io.FileOutputStream')) {
    throw new Error('unsafe default output sink reintroduced');
}

console.log('Static Frida hook coverage checks passed.');
