#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$(cd "$(dirname "$0")" && pwd)"
SDK_ROOT="${ANDROID_SDK_ROOT:-${ANDROID_HOME:-}}"

if [[ -z "$SDK_ROOT" ]]; then
    echo "Set ANDROID_SDK_ROOT (or ANDROID_HOME) to an Android SDK containing platform 36 and build-tools." >&2
    exit 1
fi

ANDROID_JAR="$SDK_ROOT/platforms/android-36/android.jar"
BUILD_TOOLS="${ANDROID_BUILD_TOOLS:-$SDK_ROOT/build-tools/36.0.0}"
JAVAC="${JAVA_HOME:+$JAVA_HOME/bin/}javac"
JAVAP="${JAVA_HOME:+$JAVA_HOME/bin/}javap"

for required in "$ANDROID_JAR" "$BUILD_TOOLS/aapt2" "$BUILD_TOOLS/d8" \
        "$BUILD_TOOLS/zipalign" "$BUILD_TOOLS/apksigner"; do
    if [[ ! -e "$required" ]]; then
        echo "Missing build dependency: $required" >&2
        exit 1
    fi
done
if ! command -v "$JAVAC" >/dev/null 2>&1; then
    echo "javac not found. Set JAVA_HOME to a JDK 17 installation." >&2
    exit 1
fi

BUILD_DIR="$APP_DIR/build"
CLASS_DIR="$BUILD_DIR/classes"
DEX_DIR="$BUILD_DIR/dex"
RELEASE_DIR="$APP_DIR/releases"
UNSIGNED_APK="$BUILD_DIR/unsigned.apk"
ALIGNED_APK="$BUILD_DIR/aligned.apk"
OUTPUT_APK="$RELEASE_DIR/frida-java-crypto-spy-strict-test.apk"
KEYSTORE="$BUILD_DIR/test-debug.jks"

rm -rf "$BUILD_DIR"
mkdir -p "$CLASS_DIR" "$DEX_DIR" "$RELEASE_DIR"

mapfile -t SOURCES < <(find "$APP_DIR/src" -name '*.java' -type f | sort)
"$JAVAC" -source 8 -target 8 -Xlint:-options -encoding UTF-8 \
    -classpath "$ANDROID_JAR" \
    -d "$CLASS_DIR" \
    "${SOURCES[@]}"

BYTECODE="$($JAVAP -classpath "$CLASS_DIR" -c -p \
    com.qm4rs.fridacryptospytest.StrictCryptoMatrix)"
REQUIRED_CALLS=(
    'Cipher.init:(ILjava/security/Key;)V'
    'Cipher.init:(ILjava/security/Key;Ljava/security/SecureRandom;)V'
    'Cipher.init:(ILjava/security/Key;Ljava/security/spec/AlgorithmParameterSpec;)V'
    'Cipher.init:(ILjava/security/Key;Ljava/security/spec/AlgorithmParameterSpec;Ljava/security/SecureRandom;)V'
    'Cipher.init:(ILjava/security/Key;Ljava/security/AlgorithmParameters;)V'
    'Cipher.init:(ILjava/security/Key;Ljava/security/AlgorithmParameters;Ljava/security/SecureRandom;)V'
    'Cipher.update:([B)[B'
    'Cipher.update:([BII)[B'
    'Cipher.update:([BII[B)I'
    'Cipher.update:([BII[BI)I'
    'Cipher.update:(Ljava/nio/ByteBuffer;Ljava/nio/ByteBuffer;)I'
    'Cipher.doFinal:()[B'
    'Cipher.doFinal:([B)[B'
    'Cipher.doFinal:([BII)[B'
    'Cipher.doFinal:([BI)I'
    'Cipher.doFinal:([BII[B)I'
    'Cipher.doFinal:([BII[BI)I'
    'Cipher.doFinal:(Ljava/nio/ByteBuffer;Ljava/nio/ByteBuffer;)I'
    'Cipher.updateAAD:([B)V'
    'Cipher.updateAAD:([BII)V'
    'Cipher.updateAAD:(Ljava/nio/ByteBuffer;)V'
    'SecretKeySpec."<init>":([BLjava/lang/String;)V'
    'SecretKeySpec."<init>":([BIILjava/lang/String;)V'
)
for call in "${REQUIRED_CALLS[@]}"; do
    if ! grep -Fq "$call" <<<"$BYTECODE"; then
        echo "Missing required Cipher test call in bytecode: $call" >&2
        exit 1
    fi
done
echo "Verified ${#REQUIRED_CALLS[@]} required Cipher/SecretKeySpec call descriptors."

"$BUILD_TOOLS/aapt2" link \
    -I "$ANDROID_JAR" \
    --manifest "$APP_DIR/AndroidManifest.xml" \
    --min-sdk-version 23 \
    --target-sdk-version 36 \
    --version-code 2 \
    --version-name 2.0-strict \
    -o "$UNSIGNED_APK"

mapfile -t CLASSES < <(find "$CLASS_DIR" -name '*.class' -type f | sort)
"$BUILD_TOOLS/d8" \
    --lib "$ANDROID_JAR" \
    --min-api 23 \
    --output "$DEX_DIR" \
    "${CLASSES[@]}"

(cd "$DEX_DIR" && zip -q -j "$UNSIGNED_APK" classes.dex)
"$BUILD_TOOLS/zipalign" -f -p 4 "$UNSIGNED_APK" "$ALIGNED_APK"

"${JAVA_HOME:+$JAVA_HOME/bin/}keytool" -genkeypair -noprompt \
    -keystore "$KEYSTORE" \
    -storepass frida-test \
    -keypass frida-test \
    -alias strict-test \
    -keyalg RSA \
    -keysize 2048 \
    -validity 3650 \
    -dname "CN=Frida Crypto Spy Strict Test,OU=Authorized Research,O=QM4RS,C=CA" >/dev/null

"$BUILD_TOOLS/apksigner" sign \
    --ks "$KEYSTORE" \
    --ks-key-alias strict-test \
    --ks-pass pass:frida-test \
    --key-pass pass:frida-test \
    --out "$OUTPUT_APK" \
    "$ALIGNED_APK"

"$BUILD_TOOLS/apksigner" verify --verbose --print-certs "$OUTPUT_APK"
"$BUILD_TOOLS/aapt2" dump badging "$OUTPUT_APK" | sed -n '1,8p'
unzip -t "$OUTPUT_APK"

(cd "$RELEASE_DIR" && sha256sum "$(basename "$OUTPUT_APK")" > SHA256SUMS)
echo "Built: $OUTPUT_APK"
