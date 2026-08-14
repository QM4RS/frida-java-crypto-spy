package com.qm4rs.fridacryptospytest;

import android.os.Build;
import android.security.keystore.KeyGenParameterSpec;
import android.security.keystore.KeyProperties;

import java.io.ByteArrayOutputStream;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.security.AlgorithmParameters;
import java.security.GeneralSecurityException;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.KeyStore;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import javax.crypto.AEADBadTagException;
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.ShortBufferException;
import javax.crypto.SecretKey;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

final class StrictCryptoMatrix {
    private static final byte[] AES_256 = hex(
            "000102030405060708090a0b0c0d0e0f" +
            "101112131415161718191a1b1c1d1e1f");
    private static final byte[] AES_128 = Arrays.copyOf(AES_256, 16);
    private static final byte[] CBC_IV = hex("101112131415161718191a1b1c1d1e1f");
    private static final byte[] GCM_IV = hex("202122232425262728292a2b");

    private final StringBuilder report = new StringBuilder();
    private int passed;
    private int failed;
    private int skipped;

    static String runAll() {
        StrictCryptoMatrix matrix = new StrictCryptoMatrix();
        matrix.run();
        return matrix.report.toString();
    }

    private void run() {
        report.append("FRIDA JAVA CRYPTO SPY — STRICT MATRIX\n")
                .append("Device: ").append(Build.MANUFACTURER).append(' ')
                .append(Build.MODEL).append(" / Android ").append(Build.VERSION.RELEASE)
                .append(" (API ").append(Build.VERSION.SDK_INT).append(")\n")
                .append("Every payload starts with FJCS|<case>| for log correlation.\n\n");

        test("SecretKeySpec: both constructors + source range", new CaseBody() {
            @Override public void run() throws Exception { testSecretKeySpecConstructors(); }
        });
        test("Cipher.init: all six overloads + generated IV", new CaseBody() {
            @Override public void run() throws Exception { testAllInitOverloads(); }
        });
        test("Returned arrays: update/doFinal/no-input final", new CaseBody() {
            @Override public void run() throws Exception { testReturnedArrayOverloads(); }
        });
        test("Output arrays: every int-returning offset form", new CaseBody() {
            @Override public void run() throws Exception { testOutputArrayOverloads(); }
        });
        test("ByteBuffer: heap/read-only/direct + marks/sentinels", new CaseBody() {
            @Override public void run() throws Exception { testByteBufferOverloads(); }
        });
        test("GCM AAD: byte[], ranged byte[], ByteBuffer chunks", new CaseBody() {
            @Override public void run() throws Exception { testAllAadOverloads(); }
        });
        test("GCM provider-generated IV round trip", new CaseBody() {
            @Override public void run() throws Exception { testGeneratedGcmIv(); }
        });
        optional("GCM unusual 16-byte nonce + 96-bit tag", new CaseBody() {
            @Override public void run() throws Exception { testUnusualGcmParameters(); }
        });
        test("Failure preservation: invalid IV, bad tag, short buffer", new CaseBody() {
            @Override public void run() throws Exception { testExpectedProviderFailures(); }
        });
        test("Generic algorithms: AES/ECB, DESede, RSA OAEP", new CaseBody() {
            @Override public void run() throws Exception { testGenericAlgorithms(); }
        });
        optional("Generic algorithm: ChaCha20-Poly1305", new CaseBody() {
            @Override public void run() throws Exception { testChaCha20Poly1305(); }
        });
        test("AndroidKeyStore: non-exportable AES/GCM key", new CaseBody() {
            @Override public void run() throws Exception { testAndroidKeyStore(); }
        });
        test("Large binary stream: truncation + cumulative totals", new CaseBody() {
            @Override public void run() throws Exception { testLargeStreamingPayload(); }
        });
        test("Printable UTF-8, empty input, null/empty update", new CaseBody() {
            @Override public void run() throws Exception { testEncodingAndEmptyEdges(); }
        });
        test("Concurrent Ciphers: 4 threads × 8 round trips", new CaseBody() {
            @Override public void run() throws Exception { testConcurrency(); }
        });

        report.append("\nHOOK COVERAGE EXPECTED IN FRIDA OUTPUT\n")
                .append("  Cipher.init      : 6/6 overload families\n")
                .append("  Cipher.update    : 5/5 overloads\n")
                .append("  Cipher.doFinal   : 7/7 overloads\n")
                .append("  Cipher.updateAAD : 3/3 overloads\n")
                .append("  SecretKeySpec    : 2/2 constructors\n")
                .append("  Error events     : INIT / FINAL / UPDATE THREW\n")
                .append("  Algorithms       : AES CBC/GCM/ECB/CTR, DESede, RSA")
                .append("; ChaCha when provider supports it\n")
                .append("  Key classes      : RAW secret, RSA public/private, AndroidKeyStore\n\n")
                .append("SUMMARY: ").append(passed).append(" passed, ")
                .append(failed).append(" failed, ").append(skipped).append(" skipped\n")
                .append(failed == 0 ? "RESULT: PASS" : "RESULT: FAIL").append('\n');
    }

    private void testSecretKeySpecConstructors() {
        SecretKeySpec full = new SecretKeySpec(AES_256, "AES");
        byte[] padded = concat(new byte[] { 99, 98, 97 }, AES_128, new byte[] { 96, 95 });
        SecretKeySpec ranged = new SecretKeySpec(padded, 3, 16, "AES");
        assertArrayEquals(AES_256, full.getEncoded(), "full key");
        assertArrayEquals(AES_128, ranged.getEncoded(), "ranged key");
    }

    private void testAllInitOverloads() throws Exception {
        SecretKeySpec key = new SecretKeySpec(AES_256, "AES");
        byte[] payload = marker("init-overloads", 47);

        Cipher initKey = Cipher.getInstance("AES/GCM/NoPadding");
        initKey.init(Cipher.ENCRYPT_MODE, key);
        assertGeneratedIv(initKey);
        initKey.doFinal(payload);

        Cipher initKeyRandom = Cipher.getInstance("AES/GCM/NoPadding");
        initKeyRandom.init(Cipher.ENCRYPT_MODE, key, seededRandom(2));
        assertGeneratedIv(initKeyRandom);
        initKeyRandom.doFinal(payload);

        IvParameterSpec iv = new IvParameterSpec(CBC_IV);
        Cipher initSpec = Cipher.getInstance("AES/CBC/PKCS5Padding");
        initSpec.init(Cipher.ENCRYPT_MODE, key, iv);
        initSpec.doFinal(payload);

        Cipher initSpecRandom = Cipher.getInstance("AES/CBC/PKCS5Padding");
        initSpecRandom.init(Cipher.ENCRYPT_MODE, key, iv, seededRandom(3));
        initSpecRandom.doFinal(payload);

        AlgorithmParameters parameters = AlgorithmParameters.getInstance("AES");
        parameters.init(iv);
        Cipher initParameters = Cipher.getInstance("AES/CBC/PKCS5Padding");
        initParameters.init(Cipher.ENCRYPT_MODE, key, parameters);
        initParameters.doFinal(payload);

        Cipher initParametersRandom = Cipher.getInstance("AES/CBC/PKCS5Padding");
        initParametersRandom.init(Cipher.ENCRYPT_MODE, key, parameters, seededRandom(4));
        initParametersRandom.doFinal(payload);
    }

    private void testReturnedArrayOverloads() throws Exception {
        byte[] message = marker("returned-arrays", 91);
        byte[] expected = encryptCbc(message);
        SecretKeySpec key = aesKey();

        Cipher first = newCbcEncrypt(key);
        byte[] a = first.update(Arrays.copyOfRange(message, 0, 32));
        byte[] b = first.doFinal(Arrays.copyOfRange(message, 32, message.length));
        assertArrayEquals(expected, concatNullable(a, b), "update(byte[]) + doFinal(byte[])");

        byte[] padded = concat(new byte[] { 7, 7, 7 }, message, new byte[] { 6, 6 });
        Cipher second = newCbcEncrypt(key);
        byte[] c = second.update(padded, 3, 35);
        byte[] d = second.doFinal(padded, 38, message.length - 35);
        assertArrayEquals(expected, concatNullable(c, d), "ranged update/final");

        Cipher noInputFinal = newCbcEncrypt(key);
        byte[] e = noInputFinal.update(message);
        byte[] f = noInputFinal.doFinal();
        assertArrayEquals(expected, concatNullable(e, f), "doFinal()");

        Cipher oneCall = newCbcEncrypt(key);
        assertArrayEquals(expected, oneCall.doFinal(message), "doFinal(byte[])");

        Cipher oneCallRange = newCbcEncrypt(key);
        assertArrayEquals(expected, oneCallRange.doFinal(padded, 3, message.length),
                "doFinal(byte[],off,len)");
    }

    private void testOutputArrayOverloads() throws Exception {
        byte[] message = marker("output-offsets", 113);
        byte[] expected = encryptCbc(message);
        SecretKeySpec key = aesKey();

        Cipher updateZeroOffset = newCbcEncrypt(key);
        byte[] updateOut = filled(expected.length + 19, (byte) 0x4a);
        int updateZeroWritten = updateZeroOffset.update(message, 0, 48, updateOut);
        Cipher updateReference = newCbcEncrypt(key);
        byte[] expectedUpdate = updateReference.update(message, 0, 48);
        assertArrayEquals(expectedUpdate == null ? new byte[0] : expectedUpdate,
                Arrays.copyOfRange(updateOut, 0, updateZeroWritten),
                "update(input,off,len,output)");

        Cipher finalZeroOffset = newCbcEncrypt(key);
        byte[] finalZeroOut = filled(expected.length + 19, (byte) 0x4b);
        int finalZeroWritten = finalZeroOffset.doFinal(
                message, 0, message.length, finalZeroOut);
        assertArrayEquals(expected, Arrays.copyOfRange(finalZeroOut, 0, finalZeroWritten),
                "doFinal(input,off,len,output)");

        Cipher offset = newCbcEncrypt(key);
        byte[] out = filled(expected.length + 23, (byte) 0x55);
        int start = 7;
        int updateWritten = offset.update(message, 0, 64, out, start);
        int finalWritten = offset.doFinal(
                message, 64, message.length - 64, out, start + updateWritten);
        assertArrayEquals(expected, Arrays.copyOfRange(
                out, start, start + updateWritten + finalWritten), "offset output");
        assertSentinel(out, 0, start, (byte) 0x55, "offset prefix");
        assertSentinel(out, start + updateWritten + finalWritten, out.length,
                (byte) 0x55, "offset suffix");

        Cipher outputOnlyFinal = newCbcEncrypt(key);
        byte[] prefix = outputOnlyFinal.update(message);
        byte[] finalOut = filled(64, (byte) 0x33);
        int finalOffset = 9;
        int count = outputOnlyFinal.doFinal(finalOut, finalOffset);
        assertArrayEquals(expected, concatNullable(prefix,
                Arrays.copyOfRange(finalOut, finalOffset, finalOffset + count)),
                "doFinal(output,off)");

        // Same Java array for input and output, but non-overlapping regions.
        Cipher sameArray = newCbcEncrypt(key);
        byte[] shared = filled(message.length + expected.length + 32, (byte) 0x66);
        System.arraycopy(message, 0, shared, 0, message.length);
        int sharedOffset = message.length + 8;
        int sharedCount = sameArray.doFinal(shared, 0, message.length, shared, sharedOffset);
        assertArrayEquals(expected, Arrays.copyOfRange(
                shared, sharedOffset, sharedOffset + sharedCount), "same-array output");
    }

    private void testByteBufferOverloads() throws Exception {
        byte[] message = marker("bytebuffer-direct", 101);
        byte[] expected = encryptCbc(message);
        Cipher cipher = newCbcEncrypt(aesKey());

        byte[] firstBacking = filled(56, (byte) 0x71);
        System.arraycopy(message, 0, firstBacking, 3, 48);
        ByteBuffer firstInput = ByteBuffer.wrap(firstBacking);
        firstInput.position(3);
        firstInput.limit(51);
        firstInput.mark();

        ByteBuffer lastMutable = ByteBuffer.allocateDirect(message.length - 48 + 4);
        lastMutable.position(2);
        lastMutable.put(message, 48, message.length - 48);
        lastMutable.limit(lastMutable.position());
        lastMutable.position(2);
        ByteBuffer lastInput = lastMutable.asReadOnlyBuffer();
        lastInput.mark();

        ByteBuffer output = ByteBuffer.allocateDirect(expected.length + 17);
        for (int i = 0; i < output.capacity(); i++) output.put(i, (byte) 0x5c);
        output.position(5);
        output.limit(output.capacity() - 4);
        output.mark();

        int updateWritten = cipher.update(firstInput, output);
        int finalWritten = cipher.doFinal(lastInput, output);
        int outputEnd = output.position();

        assertEquals(firstInput.limit(), firstInput.position(), "heap input consumed");
        assertEquals(lastInput.limit(), lastInput.position(), "read-only direct input consumed");
        assertEquals(5 + updateWritten + finalWritten, outputEnd, "direct output position");
        assertArrayEquals(expected, readRange(output, 5, outputEnd), "direct output bytes");
        assertEquals((byte) 0x5c, output.get(4), "direct prefix untouched");
        assertEquals((byte) 0x5c, output.get(outputEnd), "direct suffix untouched");

        firstInput.reset();
        lastInput.reset();
        output.reset();
        assertEquals(3, firstInput.position(), "input mark preserved");
        assertEquals(2, lastInput.position(), "read-only mark preserved");
        assertEquals(5, output.position(), "output mark preserved");
    }

    private void testAllAadOverloads() throws Exception {
        SecretKeySpec key = aesKey();
        byte[] message = marker("aad-all-overloads", 73);
        byte[] aad1 = "FJCS|aad-byte-array|".getBytes(StandardCharsets.UTF_8);
        byte[] aad2 = "FJCS|aad-ranged-array|".getBytes(StandardCharsets.UTF_8);
        byte[] aad3 = "FJCS|aad-bytebuffer|".getBytes(StandardCharsets.UTF_8);
        byte[] paddedAad2 = concat(new byte[] { 1, 2 }, aad2, new byte[] { 3 });
        byte[] paddedAad3 = concat(new byte[] { 4, 5, 6 }, aad3, new byte[] { 7 });

        Cipher encrypt = Cipher.getInstance("AES/GCM/NoPadding");
        encrypt.init(Cipher.ENCRYPT_MODE, key, new GCMParameterSpec(128, GCM_IV));
        encrypt.updateAAD(aad1);
        encrypt.updateAAD(paddedAad2, 2, aad2.length);
        ByteBuffer aadBuffer = ByteBuffer.wrap(paddedAad3);
        aadBuffer.position(3);
        aadBuffer.limit(3 + aad3.length);
        encrypt.updateAAD(aadBuffer);
        assertEquals(aadBuffer.limit(), aadBuffer.position(), "AAD ByteBuffer consumed");
        byte[] ciphertext = encrypt.doFinal(message);

        Cipher decrypt = Cipher.getInstance("AES/GCM/NoPadding");
        decrypt.init(Cipher.DECRYPT_MODE, key, new GCMParameterSpec(128, GCM_IV));
        decrypt.updateAAD(concat(aad1, aad2, aad3));
        assertArrayEquals(message, decrypt.doFinal(ciphertext), "multi-AAD plaintext");
    }

    private void testGeneratedGcmIv() throws Exception {
        SecretKeySpec key = aesKey();
        byte[] message = marker("generated-gcm-iv", 67);
        byte[] aad = "FJCS|generated-iv-aad|".getBytes(StandardCharsets.UTF_8);

        Cipher encrypt = Cipher.getInstance("AES/GCM/NoPadding");
        encrypt.init(Cipher.ENCRYPT_MODE, key);
        byte[] iv = encrypt.getIV();
        assertTrue(iv != null && iv.length > 0, "generated IV available");
        encrypt.updateAAD(aad);
        byte[] ciphertext = encrypt.doFinal(message);

        Cipher decrypt = Cipher.getInstance("AES/GCM/NoPadding");
        decrypt.init(Cipher.DECRYPT_MODE, key, new GCMParameterSpec(128, iv));
        decrypt.updateAAD(aad);
        assertArrayEquals(message, decrypt.doFinal(ciphertext), "generated IV plaintext");
    }

    private void testUnusualGcmParameters() throws Exception {
        byte[] iv16 = hex("303132333435363738393a3b3c3d3e3f");
        GCMParameterSpec spec = new GCMParameterSpec(96, iv16);
        byte[] message = marker("gcm-unusual-params", 59);

        Cipher encrypt = Cipher.getInstance("AES/GCM/NoPadding");
        encrypt.init(Cipher.ENCRYPT_MODE, aesKey(), spec);
        byte[] ciphertext = encrypt.doFinal(message);
        Cipher decrypt = Cipher.getInstance("AES/GCM/NoPadding");
        decrypt.init(Cipher.DECRYPT_MODE, aesKey(), spec);
        assertArrayEquals(message, decrypt.doFinal(ciphertext), "unusual GCM round trip");
    }

    private void testExpectedProviderFailures() throws Exception {
        boolean invalidIvThrown = false;
        try {
            Cipher invalid = Cipher.getInstance("AES/CBC/PKCS5Padding");
            invalid.init(Cipher.ENCRYPT_MODE, aesKey(), new IvParameterSpec(new byte[15]));
        } catch (GeneralSecurityException expected) {
            invalidIvThrown = true;
        }
        assertTrue(invalidIvThrown, "invalid CBC IV rejected");

        byte[] message = marker("bad-gcm-tag", 48);
        Cipher encrypt = Cipher.getInstance("AES/GCM/NoPadding");
        encrypt.init(Cipher.ENCRYPT_MODE, aesKey(), new GCMParameterSpec(128, GCM_IV));
        byte[] ciphertext = encrypt.doFinal(message);
        ciphertext[ciphertext.length - 1] ^= 0x40;
        Cipher decrypt = Cipher.getInstance("AES/GCM/NoPadding");
        decrypt.init(Cipher.DECRYPT_MODE, aesKey(), new GCMParameterSpec(128, GCM_IV));
        boolean badTagThrown = false;
        try {
            decrypt.doFinal(ciphertext);
        } catch (AEADBadTagException expected) {
            badTagThrown = true;
        } catch (GeneralSecurityException expected) {
            badTagThrown = true;
        }
        assertTrue(badTagThrown, "tampered GCM tag rejected");

        Cipher shortBufferCipher = newCbcEncrypt(aesKey());
        ByteBuffer input = ByteBuffer.wrap(marker("short-buffer", 64));
        ByteBuffer output = ByteBuffer.allocate(1);
        int inputPosition = input.position();
        int outputPosition = output.position();
        boolean shortBufferThrown = false;
        try {
            shortBufferCipher.update(input, output);
        } catch (ShortBufferException expected) {
            shortBufferThrown = true;
        }
        assertTrue(shortBufferThrown, "short output rejected");
        assertEquals(inputPosition, input.position(), "short-buffer input unchanged");
        assertEquals(outputPosition, output.position(), "short-buffer output unchanged");
    }

    private void testGenericAlgorithms() throws Exception {
        byte[] message = marker("generic-algorithms", 45);

        Cipher ecbEncrypt = Cipher.getInstance("AES/ECB/PKCS5Padding");
        ecbEncrypt.init(Cipher.ENCRYPT_MODE, aesKey());
        byte[] ecbCiphertext = ecbEncrypt.doFinal(message);
        assertTrue(ecbEncrypt.getIV() == null, "ECB has no IV");
        Cipher ecbDecrypt = Cipher.getInstance("AES/ECB/PKCS5Padding");
        ecbDecrypt.init(Cipher.DECRYPT_MODE, aesKey());
        assertArrayEquals(message, ecbDecrypt.doFinal(ecbCiphertext), "ECB plaintext");

        byte[] desKeyBytes = hex("0123456789abcdeffedcba98765432100123456789abcdef");
        SecretKeySpec desKey = new SecretKeySpec(desKeyBytes, "DESede");
        IvParameterSpec desIv = new IvParameterSpec(hex("0102030405060708"));
        Cipher desEncrypt = Cipher.getInstance("DESede/CBC/PKCS5Padding");
        desEncrypt.init(Cipher.ENCRYPT_MODE, desKey, desIv);
        byte[] desCiphertext = desEncrypt.doFinal(message);
        Cipher desDecrypt = Cipher.getInstance("DESede/CBC/PKCS5Padding");
        desDecrypt.init(Cipher.DECRYPT_MODE, desKey, desIv);
        assertArrayEquals(message, desDecrypt.doFinal(desCiphertext), "DESede plaintext");

        KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
        generator.initialize(2048);
        KeyPair pair = generator.generateKeyPair();
        byte[] rsaMessage = marker("rsa-oaep", 42);
        Cipher rsaEncrypt = Cipher.getInstance("RSA/ECB/OAEPWithSHA-256AndMGF1Padding");
        rsaEncrypt.init(Cipher.ENCRYPT_MODE, pair.getPublic());
        byte[] rsaCiphertext = rsaEncrypt.doFinal(rsaMessage);
        Cipher rsaDecrypt = Cipher.getInstance("RSA/ECB/OAEPWithSHA-256AndMGF1Padding");
        rsaDecrypt.init(Cipher.DECRYPT_MODE, pair.getPrivate());
        assertArrayEquals(rsaMessage, rsaDecrypt.doFinal(rsaCiphertext), "RSA plaintext");
    }

    private void testChaCha20Poly1305() throws Exception {
        byte[] keyBytes = hex(
                "000102030405060708090a0b0c0d0e0f" +
                "101112131415161718191a1b1c1d1e1f");
        SecretKeySpec key = new SecretKeySpec(keyBytes, "ChaCha20");
        IvParameterSpec nonce = new IvParameterSpec(hex("404142434445464748494a4b"));
        byte[] aad = "FJCS|chacha-aad|".getBytes(StandardCharsets.UTF_8);
        byte[] message = marker("chacha20-poly1305", 57);

        Cipher encrypt = Cipher.getInstance("ChaCha20-Poly1305");
        encrypt.init(Cipher.ENCRYPT_MODE, key, nonce);
        encrypt.updateAAD(aad);
        byte[] ciphertext = encrypt.doFinal(message);
        Cipher decrypt = Cipher.getInstance("ChaCha20-Poly1305");
        decrypt.init(Cipher.DECRYPT_MODE, key, nonce);
        decrypt.updateAAD(aad);
        assertArrayEquals(message, decrypt.doFinal(ciphertext), "ChaCha plaintext");
    }

    private void testAndroidKeyStore() throws Exception {
        final String alias = "frida_crypto_spy_strict_test";
        KeyStore store = KeyStore.getInstance("AndroidKeyStore");
        store.load(null);
        if (store.containsAlias(alias)) store.deleteEntry(alias);
        try {
            KeyGenerator generator = KeyGenerator.getInstance(
                    KeyProperties.KEY_ALGORITHM_AES, "AndroidKeyStore");
            generator.init(new KeyGenParameterSpec.Builder(alias,
                    KeyProperties.PURPOSE_ENCRYPT | KeyProperties.PURPOSE_DECRYPT)
                    .setBlockModes(KeyProperties.BLOCK_MODE_GCM)
                    .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
                    .setKeySize(256)
                    .build());
            SecretKey key = generator.generateKey();
            assertTrue(key.getEncoded() == null, "keystore key is non-exportable");

            byte[] aad = "FJCS|android-keystore-aad|".getBytes(StandardCharsets.UTF_8);
            byte[] message = marker("android-keystore", 64);
            Cipher encrypt = Cipher.getInstance("AES/GCM/NoPadding");
            encrypt.init(Cipher.ENCRYPT_MODE, key);
            byte[] iv = encrypt.getIV();
            encrypt.updateAAD(aad);
            byte[] ciphertext = encrypt.doFinal(message);

            Cipher decrypt = Cipher.getInstance("AES/GCM/NoPadding");
            decrypt.init(Cipher.DECRYPT_MODE, key, new GCMParameterSpec(128, iv));
            decrypt.updateAAD(aad);
            assertArrayEquals(message, decrypt.doFinal(ciphertext), "keystore plaintext");
        } finally {
            if (store.containsAlias(alias)) store.deleteEntry(alias);
        }
    }

    private void testLargeStreamingPayload() throws Exception {
        byte[] message = marker("large-binary-truncation", 12_289);
        SecretKeySpec key = aesKey();
        IvParameterSpec iv = new IvParameterSpec(CBC_IV);
        Cipher encrypt = Cipher.getInstance("AES/CTR/NoPadding");
        encrypt.init(Cipher.ENCRYPT_MODE, key, iv);
        ByteArrayOutputStream encrypted = new ByteArrayOutputStream();
        int offset = 0;
        int[] chunks = { 1, 15, 16, 31, 4097, 2048, 7, 3000 };
        for (int chunk : chunks) {
            if (offset >= message.length) break;
            int length = Math.min(chunk, message.length - offset);
            write(encrypted, encrypt.update(message, offset, length));
            offset += length;
        }
        write(encrypted, encrypt.doFinal(message, offset, message.length - offset));
        byte[] ciphertext = encrypted.toByteArray();
        assertEquals(message.length, ciphertext.length, "CTR ciphertext length");

        Cipher decrypt = Cipher.getInstance("AES/CTR/NoPadding");
        decrypt.init(Cipher.DECRYPT_MODE, key, iv);
        assertArrayEquals(message, decrypt.doFinal(ciphertext), "large CTR plaintext");
    }

    private void testEncodingAndEmptyEdges() throws Exception {
        String json = "{\"case\":\"FJCS|unicode-utf8|\",\"message\":\"سلام مهدی — crypto ✓\"}";
        byte[] utf8 = json.getBytes(StandardCharsets.UTF_8);
        byte[] encrypted = encryptCbc(utf8);
        Cipher decrypt = Cipher.getInstance("AES/CBC/PKCS5Padding");
        decrypt.init(Cipher.DECRYPT_MODE, aesKey(), new IvParameterSpec(CBC_IV));
        assertArrayEquals(utf8, decrypt.doFinal(encrypted), "printable UTF-8");

        Cipher emptyEncrypt = newCbcEncrypt(aesKey());
        byte[] emptyCiphertext = emptyEncrypt.doFinal(new byte[0]);
        Cipher emptyDecrypt = Cipher.getInstance("AES/CBC/PKCS5Padding");
        emptyDecrypt.init(Cipher.DECRYPT_MODE, aesKey(), new IvParameterSpec(CBC_IV));
        assertEquals(0, emptyDecrypt.doFinal(emptyCiphertext).length, "empty plaintext");

        Cipher buffered = newCbcEncrypt(aesKey());
        byte[] shortUpdate = buffered.update("FJCS|NU".getBytes(StandardCharsets.UTF_8));
        assertTrue(shortUpdate == null || shortUpdate.length == 0,
                "short CBC update is null or empty");
        buffered.doFinal();
    }

    private void testConcurrency() throws Exception {
        final int threads = 4;
        final int iterations = 8;
        final CountDownLatch start = new CountDownLatch(1);
        ExecutorService pool = Executors.newFixedThreadPool(threads);
        List<Future<Boolean>> futures = new ArrayList<Future<Boolean>>();
        for (int thread = 0; thread < threads; thread++) {
            final int threadId = thread;
            futures.add(pool.submit(new java.util.concurrent.Callable<Boolean>() {
                @Override public Boolean call() throws Exception {
                    start.await();
                    for (int iteration = 0; iteration < iterations; iteration++) {
                        byte[] iv = Arrays.copyOf(CBC_IV, CBC_IV.length);
                        iv[14] = (byte) threadId;
                        iv[15] = (byte) iteration;
                        byte[] message = marker("concurrent-" + threadId + '-' + iteration,
                                49 + iteration);
                        Cipher encrypt = Cipher.getInstance("AES/CBC/PKCS5Padding");
                        encrypt.init(Cipher.ENCRYPT_MODE, aesKey(), new IvParameterSpec(iv));
                        byte[] first = encrypt.update(message, 0, Math.min(17, message.length));
                        byte[] last = encrypt.doFinal(message, Math.min(17, message.length),
                                Math.max(0, message.length - 17));
                        byte[] ciphertext = concatNullable(first, last);
                        Cipher decrypt = Cipher.getInstance("AES/CBC/PKCS5Padding");
                        decrypt.init(Cipher.DECRYPT_MODE, aesKey(), new IvParameterSpec(iv));
                        if (!Arrays.equals(message, decrypt.doFinal(ciphertext))) return false;
                    }
                    return true;
                }
            }));
        }
        start.countDown();
        for (Future<Boolean> future : futures) {
            assertTrue(future.get(), "concurrent round trip");
        }
        pool.shutdown();
    }

    private void test(String name, CaseBody body) {
        long started = System.nanoTime();
        try {
            body.run();
            passed++;
            report.append("[PASS] ").append(name).append(duration(started)).append('\n');
        } catch (Throwable error) {
            failed++;
            report.append("[FAIL] ").append(name).append(duration(started)).append('\n')
                    .append("       ").append(error.getClass().getName()).append(": ")
                    .append(error.getMessage()).append('\n');
        }
    }

    private void optional(String name, CaseBody body) {
        long started = System.nanoTime();
        try {
            body.run();
            passed++;
            report.append("[PASS] ").append(name).append(duration(started)).append('\n');
        } catch (GeneralSecurityException unsupported) {
            skipped++;
            report.append("[SKIP] ").append(name).append(" — provider: ")
                    .append(unsupported.getClass().getSimpleName()).append(": ")
                    .append(unsupported.getMessage()).append('\n');
        } catch (Throwable error) {
            failed++;
            report.append("[FAIL] ").append(name).append(duration(started)).append('\n')
                    .append("       ").append(error.getClass().getName()).append(": ")
                    .append(error.getMessage()).append('\n');
        }
    }

    private static String duration(long started) {
        return " (" + ((System.nanoTime() - started) / 1_000_000L) + " ms)";
    }

    private static SecretKeySpec aesKey() {
        return new SecretKeySpec(AES_256, "AES");
    }

    private static Cipher newCbcEncrypt(SecretKeySpec key) throws Exception {
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        cipher.init(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(CBC_IV));
        return cipher;
    }

    private static byte[] encryptCbc(byte[] input) throws Exception {
        return newCbcEncrypt(aesKey()).doFinal(input);
    }

    private static void assertGeneratedIv(Cipher cipher) {
        byte[] iv = cipher.getIV();
        assertTrue(iv != null && iv.length > 0, "provider-generated IV missing");
    }

    private static SecureRandom seededRandom(int seed) {
        return new SecureRandom(new byte[] { (byte) seed, 2, 3, 4, 5, 6, 7, 8 });
    }

    private static byte[] marker(String caseId, int length) {
        byte[] prefix = ("FJCS|" + caseId + "|").getBytes(StandardCharsets.UTF_8);
        int actualLength = Math.max(length, prefix.length);
        byte[] result = new byte[actualLength];
        for (int i = 0; i < result.length; i++) result[i] = (byte) (31 * i + 17);
        System.arraycopy(prefix, 0, result, 0, prefix.length);
        return result;
    }

    private static byte[] readRange(ByteBuffer buffer, int start, int end) {
        ByteBuffer copy = buffer.duplicate();
        copy.position(start);
        copy.limit(end);
        byte[] result = new byte[copy.remaining()];
        copy.get(result);
        return result;
    }

    private static void write(ByteArrayOutputStream output, byte[] bytes) {
        if (bytes != null && bytes.length > 0) output.write(bytes, 0, bytes.length);
    }

    private static byte[] concatNullable(byte[]... arrays) {
        return concat(arrays);
    }

    private static byte[] concat(byte[]... arrays) {
        int length = 0;
        for (byte[] array : arrays) if (array != null) length += array.length;
        byte[] result = new byte[length];
        int offset = 0;
        for (byte[] array : arrays) {
            if (array == null) continue;
            System.arraycopy(array, 0, result, offset, array.length);
            offset += array.length;
        }
        return result;
    }

    private static byte[] filled(int length, byte value) {
        byte[] result = new byte[length];
        Arrays.fill(result, value);
        return result;
    }

    private static byte[] hex(String value) {
        byte[] result = new byte[value.length() / 2];
        for (int i = 0; i < result.length; i++) {
            result[i] = (byte) Integer.parseInt(value.substring(i * 2, i * 2 + 2), 16);
        }
        return result;
    }

    private static void assertSentinel(byte[] array, int start, int end, byte value, String label) {
        for (int i = start; i < end; i++) {
            if (array[i] != value) throw new AssertionError(label + " changed at " + i);
        }
    }

    private static void assertArrayEquals(byte[] expected, byte[] actual, String label) {
        if (!Arrays.equals(expected, actual)) {
            throw new AssertionError(label + " mismatch: expected=" + expected.length +
                    " bytes, actual=" + (actual == null ? "null" : actual.length));
        }
    }

    private static void assertTrue(boolean condition, String label) {
        if (!condition) throw new AssertionError(label);
    }

    private static void assertEquals(int expected, int actual, String label) {
        if (expected != actual) {
            throw new AssertionError(label + ": expected=" + expected + ", actual=" + actual);
        }
    }

    private static void assertEquals(byte expected, byte actual, String label) {
        if (expected != actual) {
            throw new AssertionError(label + ": expected=" + expected + ", actual=" + actual);
        }
    }

    private interface CaseBody {
        void run() throws Exception;
    }
}
