# Strict Android validation APK

This deliberately noisy test application exercises the Java Cipher boundary while
asserting the application's real cryptographic results. Its package name is:

```text
com.qm4rs.fridacryptospytest
```

The app is debuggable, performs no network access, requests no permissions, and uses
only platform cryptography. It automatically runs once after launch and has a **Run
strict matrix** button for testing an agent attached after startup.

- [Download the signed strict-test APK](releases/frida-java-crypto-spy-strict-test.apk)
- [Verify its SHA-256 checksum](releases/SHA256SUMS)
- [Load the Frida agent](../frida-java-crypto-spy.js)

## Install and run with Frida

```bash
adb install -r demo-app/releases/frida-java-crypto-spy-strict-test.apk
frida -U -f com.qm4rs.fridacryptospytest -l frida-java-crypto-spy.js
```

Each input or AAD value begins with `FJCS|<case-id>|` where possible, making app cases
easy to correlate with agent output. The in-app report must finish with `RESULT: PASS`.
Optional provider-specific cases can show `SKIP`; any `FAIL` is a regression or a
device/provider incompatibility that needs inspection.

Expected hook coverage:

- 6/6 `Cipher.init` overload families
- 5/5 `Cipher.update` overloads
- 7/7 `Cipher.doFinal` overloads
- 3/3 `Cipher.updateAAD` overloads
- 2/2 `SecretKeySpec` constructors
- failure logging and exact rethrow for invalid IV, bad GCM tag, and short ByteBuffer
- AES CBC/GCM/ECB/CTR, DESede, RSA OAEP, optional ChaCha20-Poly1305
- exportable symmetric keys, RSA public/private keys, and a non-exportable
  AndroidKeyStore AES key
- generated IVs, unusual GCM parameters, direct/read-only buffers, same-array
  input/output, large/truncated data, printable Unicode, empty input, short updates,
  and four concurrent worker threads

## Reproducible local build

Requirements:

- JDK 17 (`JAVA_HOME`)
- Android SDK Platform 36
- Android Build Tools 36.0.0
- `zip`

```bash
export JAVA_HOME=/path/to/jdk-17
export ANDROID_SDK_ROOT=/path/to/android-sdk
./demo-app/build.sh
```

The script builds without Gradle or external app dependencies, runs `zipalign`, signs
with an ephemeral test-only key under the ignored `demo-app/build/` directory, verifies
the APK signature, dumps package metadata, and updates `demo-app/releases/SHA256SUMS`.

The committed APK is a test artifact, not a production release. Never reuse its
certificate for another application.
