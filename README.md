# frida-java-crypto-spy

`frida-java-crypto-spy` is a defensive, generic Frida agent for observing Android
applications at the Java `javax.crypto.Cipher` boundary. It records initialization,
AAD, streaming input/output, and final input/output without changing the data passed
to the application.

The core is algorithm-agnostic. It can observe AES, RSA, DES/3DES, ChaCha20,
ChaCha20-Poly1305, and provider-specific transformations when they pass through
`javax.crypto.Cipher`.

> Use this tool only on software and devices you own or are authorized to test.
> Logs can contain plaintext, credentials, keys, and other sensitive data.

## Highlights

- Hooks all Android/Java `Cipher.init(...)` overloads and performs both pre-call and
  post-call inspection.
- Captures provider-generated IVs/nonces after successful initialization.
- Handles every standard `update(...)`, `doFinal(...)`, and `updateAAD(...)` overload,
  including methods that return a byte count instead of a `byte[]`.
- Extracts the exact destination-buffer range written by output-buffer overloads.
- Supports heap, direct, and read-only input `ByteBuffer` values via `duplicate()`;
  the logger does not call `array()` or change the original buffer's position, limit,
  or mark.
- Tracks concurrent `Cipher` objects with stable Java identity and weak references,
  rather than relying on Frida Java-wrapper identity.
- Records generic key metadata and exportable key bytes. Non-exportable
  AndroidKeyStore/TEE keys are reported without throwing.
- Hooks both `SecretKeySpec` constructors with bounded duplicate suppression.
- Logs AAD as a first-class event and keeps per-operation streaming byte totals.
- Provides UTF-8, spaced HEX, Base64, full lengths, and configurable truncation.
- Offers optional filtered Java backtraces in the same script—there is no duplicated
  “backtrace edition.”
- Uses console output only by default. No Toast, Logcat, or file writes are enabled.
- Preserves original exceptions and isolates all inspection/logging failures.

## Installation and usage

Install Frida on the workstation and run a matching `frida-server` on the authorized
test device, then spawn or attach:

```bash
frida -U -f com.example.target -l frida-java-crypto-spy.js
```

```bash
frida -U com.example.target -l frida-java-crypto-spy.js
```

Attaching after a `Cipher` was initialized still captures later calls, but key, mode,
IV, and parameter metadata from the missed `init(...)` may be unavailable.

## Configuration

Edit `CONFIG` at the top of `frida-java-crypto-spy.js` before loading it:

```javascript
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

    maxDumpBytes: 4096,

    includeAlgorithms: [],
    excludeAlgorithms: [],
    includePackages: [],
    excludePackages: []
};
```

Algorithm and package filters accept case-insensitive substring strings or regular
expressions. Package filtering requires a Java stack walk, so leave those lists empty
for the lowest hot-path overhead.

Examples:

```javascript
includeAlgorithms: ['AES/GCM', 'RSA/'],
excludeAlgorithms: ['DES'],
backtrace: true,
includePackages: ['com.target.'],
excludePackages: ['com.target.analytics.']
```

`maxDumpBytes` limits representation work and console volume; the original full byte
length is always shown. Set `showHex` or `showBase64` to `false` to avoid conversions
you do not need.

## Sample output

```text
[Cipher #12][AES/GCM/NoPadding][DECRYPT] INIT
  Overload            : int,java.security.Key,java.security.spec.AlgorithmParameterSpec
  Transformation      : AES/GCM/NoPadding
  Mode                : DECRYPT
  Key Algorithm       : AES
  Key Class           : javax.crypto.spec.SecretKeySpec
  Key Format          : RAW
  AES Key Size        : 256 bits
  GCM Tag             : 128 bits
  Key Length          : 32
  Key Hex             : 00 01 02 03 ...
  Key Base64          : AAECAwQF...
  IV Length           : 12
  IV Hex              : 20 21 22 23 ...
  IV Base64           : ICEiIyQlJicoKSor

[Cipher #12][AES/GCM/NoPadding][DECRYPT] AAD
  Overload            : java.nio.ByteBuffer
  AAD Chunk #         : 1
  AAD Total           : 31
  AAD Length          : 31
  AAD UTF-8           : "request-id=42;content-type=json"

[Cipher #12][AES/GCM/NoPadding][DECRYPT] UPDATE
  Overload            : [B,int,int,[B,int
  Update #            : 1
  Input Length        : 128
  Output Length       : 112

[Cipher #12][AES/GCM/NoPadding][DECRYPT] FINAL
  Overload            : [B
  Operation Input Total: 160
  Operation Output Total: 145
  AAD Total           : 31
  Input Length        : 32
  Output Length       : 33
  Output UTF-8        : "{\"status\":\"success\",...}"
  Call site:
    com.target.crypto.Crypto.decrypt (Crypto.java:94)
    com.target.network.ResponseParser.parse (ResponseParser.java:51)
```

### AES/GCM with AAD

No special setup is required. The agent associates these calls with the same logical
Cipher ID:

```java
Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
cipher.init(Cipher.DECRYPT_MODE, key, new GCMParameterSpec(128, nonce));
cipher.updateAAD(headers);
byte[] plaintext = cipher.doFinal(ciphertext);
```

An IV generated by `cipher.init(Cipher.ENCRYPT_MODE, key)` is read after the provider
returns, so it is included in the `INIT` event.

### ByteBuffer

The following is covered for heap and direct buffers:

```java
int updateBytes = cipher.update(inputBuffer, outputBuffer);
int finalBytes = cipher.doFinal(finalInputBuffer, outputBuffer);
```

Input is snapshotted from the original input position before the call. Actual consumed
length is calculated from the post-call position. Output is read from a duplicate over
the exact range `oldOutputPosition..newOutputPosition`. The target buffers are not read
through `array()` and are never repositioned by the logger.

### Non-AES example

```java
Cipher cipher = Cipher.getInstance("RSA/ECB/OAEPWithSHA-256AndMGF1Padding");
cipher.init(Cipher.DECRYPT_MODE, privateKey);
byte[] plaintext = cipher.doFinal(ciphertext);
```

For an exportable RSA key, format/encoded length and public/private implementation
class are displayed. For AndroidKeyStore private keys, `getEncoded()` commonly returns
`null`; the agent reports the key as non-exportable while still observing bytes that
cross the `Cipher` API.

## Covered API surface

### `Cipher.init`

- `init(int, Key)`
- `init(int, Key, SecureRandom)`
- `init(int, Key, AlgorithmParameterSpec)`
- `init(int, Key, AlgorithmParameterSpec, SecureRandom)`
- `init(int, Key, AlgorithmParameters)`
- `init(int, Key, AlgorithmParameters, SecureRandom)`

### `Cipher.update`

- `byte[] update(byte[])`
- `byte[] update(byte[], int, int)`
- `int update(byte[], int, int, byte[])`
- `int update(byte[], int, int, byte[], int)`
- `int update(ByteBuffer, ByteBuffer)`

### `Cipher.doFinal`

- `byte[] doFinal()`
- `byte[] doFinal(byte[])`
- `byte[] doFinal(byte[], int, int)`
- `int doFinal(byte[], int)`
- `int doFinal(byte[], int, int, byte[])`
- `int doFinal(byte[], int, int, byte[], int)`
- `int doFinal(ByteBuffer, ByteBuffer)`

### `Cipher.updateAAD`

- `updateAAD(byte[])`
- `updateAAD(byte[], int, int)`
- `updateAAD(ByteBuffer)`

### `SecretKeySpec`

- `SecretKeySpec(byte[], String)`
- `SecretKeySpec(byte[], int, int, String)`

## Before/after/reference matrix

The reference column describes the crypto-specific portion of the provided bundled
agent, not its bundled `frida-java-bridge`, Buffer/Base64 polyfills, runtime, or source
map.

| Capability | Old repository | Reference bundle | New agent |
|---|---:|---:|---:|
| All six `Cipher.init` overloads | Enumerated, pre-call only | Yes, AES-only | Yes, generic pre + post |
| Generated IV after init | No | Yes | Yes |
| Generic `Key` metadata/encoding | No | Partial | Yes, null-safe |
| `SecretKeySpec` constructors | No | Yes | Yes, bounded dedupe |
| `update` input | Partial/unsafe | No | Yes |
| `update` output | No | Yes | Yes |
| All output-buffer overloads | Broken/unsafe | Mostly | Yes, exact written range |
| `doFinal` input + output | Only byte-array returns | Output only | Yes |
| `updateAAD` all overloads | Enumerated but unsafe | No | Yes |
| Heap/direct `ByteBuffer` | No | Output only; repositions buffer | Yes, input + output via duplicate |
| AES/GCM tag and nonce | Explicit params only | Yes | Explicit/post-provider params |
| RSA/non-AES | Intended but fragile | No (AES filter) | Yes |
| Streaming association | Broken `WeakMap` | Wrapper properties | Stable ID + counters |
| Backtrace | Duplicated script, always on | No | Configurable and filtered |
| UTF-8 / HEX / Base64 / length | UTF-8 or Base64 | HEX or text | All configurable + truncation |
| Provider metadata | No | No | Optional |
| Original exception preserved | Not reliably | No explicit isolation | Yes |
| Default output sinks | Console | Toast + Logcat + file + console | Console only |

See [docs/technical-assessment.md](docs/technical-assessment.md) for the detailed audit.

## Testing

The repository includes a dependency-free Java harness covering CBC, GCM, ECB, RSA,
streaming, generated and explicit IVs, every AAD form, direct/read-only ByteBuffers,
and output offsets:

```bash
java tests/CryptoHarness.java
node tests/static-check.js
node tests/hook-install-smoke.js
node tests/runtime-mock.js
node --check frida-java-crypto-spy.js
```

`CryptoHarness.java` can also be copied into an Android instrumentation test source
set and run while the Frida agent is attached to compare logged ranges with the
harness assertions.

The mock-runtime test executes installed hook implementations, checks exact offset and
ByteBuffer log ranges, verifies that original buffer marks/positions retain provider
semantics, and confirms that the exact original exception object is rethrown.

### Strict Android APK

A signed, dependency-free Android test APK and its full source are available under
[`demo-app/`](demo-app/README.md). It runs an adversarial on-device matrix covering all
standard Cipher overloads, generated/explicit parameters, AndroidKeyStore,
ByteBuffers, failure paths, large streams, non-AES algorithms, and concurrency while
asserting actual results inside the app.

**[Download strict-test APK](demo-app/releases/frida-java-crypto-spy-strict-test.apk)** ·
[SHA-256](demo-app/releases/SHA256SUMS) ·
[test source](demo-app/src/com/qm4rs/fridacryptospytest/StrictCryptoMatrix.java)

```bash
adb install -r demo-app/releases/frida-java-crypto-spy-strict-test.apk
frida -U -f com.qm4rs.fridacryptospytest -l frida-java-crypto-spy.js
```

## Limitations

- Native crypto that bypasses Java `Cipher` (BoringSSL/OpenSSL JNI, custom native
  libraries, direct hardware APIs) is outside this agent's scope.
- Applications can use alternate class loaders, custom crypto APIs, or deliberate
  anti-instrumentation that require additional hooks.
- AndroidKeyStore, StrongBox, and TEE-backed keys are normally non-exportable. This is
  expected; plaintext/ciphertext at the Java `Cipher` boundary can still often be
  observed.
- `Cipher.wrap()` and `Cipher.unwrap()` are not hooked directly. `WRAP_MODE` and
  `UNWRAP_MODE` metadata is recognized, but key-object inputs/outputs to those two APIs
  are not currently logged.
- Enabling backtraces or dumping large buffers has measurable overhead. Start with
  default settings, filter algorithms/packages, and raise `maxDumpBytes` only when
  needed.
- The desktop harness validates Java cryptographic semantics and buffer ranges. Final
  compatibility should also be checked on the target Android API/provider/Frida
  combination.

## License

MIT — see [LICENSE](LICENSE).

## Author

Mehdi Karzari — [Telegram](https://t.me/QM4RS)
