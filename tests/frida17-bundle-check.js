'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const bundlePath = path.join(root, 'dist', 'frida-java-crypto-spy-frida17.js');
const bundle = fs.readFileSync(bundlePath);
const text = bundle.toString('utf8');
const header = text.match(/^📦\n(\d+) ([^\n]+)\n✄\n/);
if (header === null) throw new Error('invalid frida-compile bundle header');

const bodyOffset = Buffer.byteLength(header[0], 'utf8');
if (Number(header[1]) !== bundle.length - bodyOffset) {
    throw new Error('frida-compile module length does not match the bundle body');
}
for (const fragment of [
    "if (name[0] != '<')",
    '[frida-java-crypto-spy] Agent evaluated; installing Java hooks',
    '[frida-java-crypto-spy] Generic Cipher hooks installed',
    'performNow'
]) {
    if (!text.includes(fragment)) throw new Error(`missing bundled feature: ${fragment}`);
}

const packageJson = require(path.join(root, 'package.json'));
if (packageJson.dependencies['frida-java-bridge'] !== '7.0.13') {
    throw new Error('Frida 17 bundle must pin the reviewed bridge version 7.0.13');
}

const expected = fs.readFileSync(path.join(root, 'dist', 'SHA256SUMS'), 'utf8')
    .trim().split(/\s+/)[0];
const actual = crypto.createHash('sha256').update(bundle).digest('hex');
if (actual !== expected) throw new Error('Frida 17 bundle checksum mismatch');

console.log('Patched Frida 17 bundle integrity checks passed.');
