import fs from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = path.join(root, 'frida-java-crypto-spy.js');
const outputDirectory = path.join(root, 'dist');
const outputPath = path.join(outputDirectory, 'frida-java-crypto-spy-frida17.js');
const temporaryDirectory = path.join(root, '.fjcs-agent-build');
const entryPath = path.join(temporaryDirectory, 'entry.js');
const compiler = path.join(root, 'node_modules', '.bin',
    process.platform === 'win32' ? 'frida-compile.cmd' : 'frida-compile');

try {
    fs.rmSync(temporaryDirectory, { recursive: true, force: true });
    fs.mkdirSync(temporaryDirectory);
    const source = fs.readFileSync(sourcePath, 'utf8');
    const entry = [
        "import JavaBridge from 'frida-java-bridge';",
        "if (typeof globalThis.Java === 'undefined') globalThis.Java = JavaBridge;",
        source
    ].join('\n');

    fs.mkdirSync(outputDirectory, { recursive: true });
    fs.writeFileSync(entryPath, entry, 'utf8');
    const result = spawnSync(compiler, [entryPath, '-o', outputPath, '-S', '-c'], {
        cwd: root,
        encoding: 'utf8'
    });
    if (result.status !== 0) {
        process.stderr.write(result.stdout || '');
        process.stderr.write(result.stderr || '');
        process.exit(result.status ?? 1);
    }
    const digest = createHash('sha256').update(fs.readFileSync(outputPath)).digest('hex');
    fs.writeFileSync(path.join(outputDirectory, 'SHA256SUMS'),
        `${digest}  ${path.relative(root, outputPath).replaceAll(path.sep, '/')}\n`, 'utf8');
    process.stdout.write(`Built ${path.relative(root, outputPath)}\n`);
} finally {
    fs.rmSync(temporaryDirectory, { recursive: true, force: true });
}
