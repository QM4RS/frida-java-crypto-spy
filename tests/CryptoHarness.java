import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.SecureRandom;
import java.util.Arrays;
import javax.crypto.Cipher;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

/**
 * Dependency-free Cipher exercise harness. It runs on a desktop JDK and can be
 * copied unchanged into an Android instrumentation test source set.
 */
public final class CryptoHarness {
    private static final byte[] AES_KEY = hex(
            "000102030405060708090a0b0c0d0e0f" +
            "101112131415161718191a1b1c1d1e1f");
    private static final byte[] CBC_IV = hex("101112131415161718191a1b1c1d1e1f");
    private static final byte[] GCM_IV = hex("202122232425262728292a2b");
    private static final byte[] MESSAGE = (
            "streaming Cipher input: plaintext crosses several block boundaries")
            .getBytes(StandardCharsets.UTF_8);
    private static final byte[] AAD = "request-id=42;content-type=json"
            .getBytes(StandardCharsets.UTF_8);

    public static void main(String[] args) throws Exception {
        run("AES/CBC streaming + returned arrays", CryptoHarness::testCbcStreaming);
        run("AES/CBC output offsets", CryptoHarness::testOutputOffsets);
        run("AES/CBC ByteBuffer (direct output)", CryptoHarness::testByteBuffers);
        run("AES/GCM explicit IV + all AAD forms", CryptoHarness::testGcmExplicitIvAndAad);
        run("AES/GCM provider-generated IV", CryptoHarness::testGcmGeneratedIv);
        run("AES/ECB encrypt/decrypt", CryptoHarness::testEcb);
        run("RSA OAEP SHA-256", CryptoHarness::testRsaOaep);
        System.out.println("All Cipher harness tests passed.");
    }

    private static void testCbcStreaming() throws Exception {
        SecretKeySpec key = new SecretKeySpec(AES_KEY, 0, 32, "AES");
        Cipher oneShot = Cipher.getInstance("AES/CBC/PKCS5Padding");
        oneShot.init(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(CBC_IV));
        byte[] expected = oneShot.doFinal(MESSAGE);

        Cipher encrypt = Cipher.getInstance("AES/CBC/PKCS5Padding");
        encrypt.init(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(CBC_IV), deterministicRandom());
        byte[] first = encrypt.update(MESSAGE, 0, 23);
        byte[] second = encrypt.update(Arrays.copyOfRange(MESSAGE, 23, 41));
        byte[] third = encrypt.doFinal(MESSAGE, 41, MESSAGE.length - 41);
        byte[] actual = concat(first, second, third);
        assertArrayEquals(expected, actual, "CBC streamed ciphertext");

        Cipher decrypt = Cipher.getInstance("AES/CBC/PKCS5Padding");
        decrypt.init(Cipher.DECRYPT_MODE, key, new IvParameterSpec(CBC_IV));
        byte[] plainFirst = decrypt.update(actual, 0, 32);
        byte[] plainLast = decrypt.doFinal(actual, 32, actual.length - 32);
        assertArrayEquals(MESSAGE, concat(plainFirst, plainLast), "CBC streamed plaintext");
    }

    private static void testOutputOffsets() throws Exception {
        SecretKeySpec key = new SecretKeySpec(AES_KEY, "AES");
        Cipher expectedCipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        expectedCipher.init(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(CBC_IV));
        byte[] expected = expectedCipher.doFinal(MESSAGE);

        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        cipher.init(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(CBC_IV));
        byte[] output = filled(expected.length + 19, (byte) 0x55);
        int outputOffset = 7;
        int updateWritten = cipher.update(MESSAGE, 0, 32, output, outputOffset);
        int finalWritten = cipher.doFinal(
                MESSAGE, 32, MESSAGE.length - 32, output, outputOffset + updateWritten);
        assertArrayEquals(expected,
                Arrays.copyOfRange(output, outputOffset, outputOffset + updateWritten + finalWritten),
                "offset output range");
        assertEquals((byte) 0x55, output[outputOffset - 1], "prefix untouched");

        Cipher noInputFinal = Cipher.getInstance("AES/CBC/PKCS5Padding");
        noInputFinal.init(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(CBC_IV));
        byte[] secondOutput = filled(expected.length + 13, (byte) 0x33);
        int firstWritten = noInputFinal.update(MESSAGE, 0, MESSAGE.length, secondOutput, 3);
        int lastWritten = noInputFinal.doFinal(secondOutput, 3 + firstWritten);
        assertArrayEquals(expected, Arrays.copyOfRange(
                secondOutput, 3, 3 + firstWritten + lastWritten), "doFinal(output, offset)");
    }

    private static void testByteBuffers() throws Exception {
        SecretKeySpec key = new SecretKeySpec(AES_KEY, "AES");
        Cipher expectedCipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        expectedCipher.init(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(CBC_IV));
        byte[] expected = expectedCipher.doFinal(MESSAGE);

        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        cipher.init(Cipher.ENCRYPT_MODE, key, new IvParameterSpec(CBC_IV));
        ByteBuffer firstInput = ByteBuffer.wrap(MESSAGE, 0, 32).slice();
        ByteBuffer finalInput = ByteBuffer.wrap(
                MESSAGE, 32, MESSAGE.length - 32).slice().asReadOnlyBuffer();
        ByteBuffer output = ByteBuffer.allocateDirect(expected.length + 8);
        output.position(4);
        int updateWritten = cipher.update(firstInput, output);
        int finalWritten = cipher.doFinal(finalInput, output);
        assertEquals(firstInput.limit(), firstInput.position(), "update input consumed");
        assertEquals(finalInput.limit(), finalInput.position(), "final input consumed");
        assertEquals(4 + updateWritten + finalWritten, output.position(), "output position");

        ByteBuffer copy = output.duplicate();
        copy.position(4);
        copy.limit(output.position());
        byte[] actual = new byte[copy.remaining()];
        copy.get(actual);
        assertArrayEquals(expected, actual, "ByteBuffer output bytes");
    }

    private static void testGcmExplicitIvAndAad() throws Exception {
        SecretKeySpec key = new SecretKeySpec(AES_KEY, "AES");
        GCMParameterSpec spec = new GCMParameterSpec(128, GCM_IV);

        Cipher encrypt = Cipher.getInstance("AES/GCM/NoPadding");
        encrypt.init(Cipher.ENCRYPT_MODE, key, spec);
        encrypt.updateAAD(AAD);
        byte[] ciphertext = encrypt.doFinal(MESSAGE);

        Cipher decryptOffsetAad = Cipher.getInstance("AES/GCM/NoPadding");
        decryptOffsetAad.init(Cipher.DECRYPT_MODE, key, spec, deterministicRandom());
        byte[] paddedAad = concat(new byte[] { 9, 9 }, AAD, new byte[] { 8 });
        decryptOffsetAad.updateAAD(paddedAad, 2, AAD.length);
        assertArrayEquals(MESSAGE, decryptOffsetAad.doFinal(ciphertext), "GCM offset AAD");

        Cipher decryptBufferAad = Cipher.getInstance("AES/GCM/NoPadding");
        decryptBufferAad.init(Cipher.DECRYPT_MODE, key, spec);
        ByteBuffer aadBuffer = ByteBuffer.wrap(AAD).asReadOnlyBuffer();
        decryptBufferAad.updateAAD(aadBuffer);
        assertEquals(aadBuffer.limit(), aadBuffer.position(), "AAD ByteBuffer consumed");
        assertArrayEquals(MESSAGE, decryptBufferAad.doFinal(ciphertext), "GCM ByteBuffer AAD");
    }

    private static void testGcmGeneratedIv() throws Exception {
        SecretKeySpec key = new SecretKeySpec(AES_KEY, "AES");
        Cipher encrypt = Cipher.getInstance("AES/GCM/NoPadding");
        encrypt.init(Cipher.ENCRYPT_MODE, key);
        byte[] generatedIv = encrypt.getIV();
        if (generatedIv == null || generatedIv.length == 0) {
            throw new AssertionError("provider did not generate a GCM IV");
        }
        encrypt.updateAAD(ByteBuffer.wrap(AAD));
        byte[] ciphertext = encrypt.doFinal(MESSAGE);

        Cipher decrypt = Cipher.getInstance("AES/GCM/NoPadding");
        decrypt.init(Cipher.DECRYPT_MODE, key, new GCMParameterSpec(128, generatedIv));
        decrypt.updateAAD(AAD);
        assertArrayEquals(MESSAGE, decrypt.doFinal(ciphertext), "generated-IV GCM plaintext");
    }

    private static void testEcb() throws Exception {
        SecretKeySpec key = new SecretKeySpec(AES_KEY, "AES");
        Cipher encrypt = Cipher.getInstance("AES/ECB/PKCS5Padding");
        encrypt.init(Cipher.ENCRYPT_MODE, key, deterministicRandom());
        byte[] ciphertext = encrypt.doFinal(MESSAGE);
        if (encrypt.getIV() != null) {
            throw new AssertionError("ECB unexpectedly exposed an IV");
        }

        Cipher decrypt = Cipher.getInstance("AES/ECB/PKCS5Padding");
        decrypt.init(Cipher.DECRYPT_MODE, key);
        assertArrayEquals(MESSAGE, decrypt.doFinal(ciphertext), "ECB plaintext");
    }

    private static void testRsaOaep() throws Exception {
        KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
        generator.initialize(2048);
        KeyPair pair = generator.generateKeyPair();
        byte[] message = "non-AES Cipher boundary".getBytes(StandardCharsets.UTF_8);

        Cipher encrypt = Cipher.getInstance("RSA/ECB/OAEPWithSHA-256AndMGF1Padding");
        encrypt.init(Cipher.ENCRYPT_MODE, pair.getPublic());
        byte[] ciphertext = encrypt.doFinal(message);

        Cipher decrypt = Cipher.getInstance("RSA/ECB/OAEPWithSHA-256AndMGF1Padding");
        decrypt.init(Cipher.DECRYPT_MODE, pair.getPrivate());
        assertArrayEquals(message, decrypt.doFinal(ciphertext), "RSA OAEP plaintext");
    }

    private static SecureRandom deterministicRandom() throws Exception {
        SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
        random.setSeed(hex("112233445566778899aabbccddeeff00"));
        return random;
    }

    private static byte[] concat(byte[]... arrays) {
        int length = 0;
        for (byte[] array : arrays) {
            if (array != null) length += array.length;
        }
        byte[] result = new byte[length];
        int offset = 0;
        for (byte[] array : arrays) {
            if (array == null) continue;
            System.arraycopy(array, 0, result, offset, array.length);
            offset += array.length;
        }
        return result;
    }

    private static byte[] hex(String value) {
        byte[] result = new byte[value.length() / 2];
        for (int i = 0; i < result.length; i++) {
            result[i] = (byte) Integer.parseInt(value.substring(i * 2, i * 2 + 2), 16);
        }
        return result;
    }

    private static byte[] filled(int length, byte value) {
        byte[] result = new byte[length];
        Arrays.fill(result, value);
        return result;
    }

    private static void assertArrayEquals(byte[] expected, byte[] actual, String label) {
        if (!Arrays.equals(expected, actual)) {
            throw new AssertionError(label + " mismatch");
        }
    }

    private static void assertEquals(int expected, int actual, String label) {
        if (expected != actual) {
            throw new AssertionError(label + ": expected " + expected + ", got " + actual);
        }
    }

    private static void run(String name, ThrowingRunnable test) throws Exception {
        test.run();
        System.out.println("[PASS] " + name);
    }

    @FunctionalInterface
    private interface ThrowingRunnable {
        void run() throws Exception;
    }
}
