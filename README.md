# 🕵️‍♂️ frida-java-crypto-spy

`frida-java-crypto-spy` is a powerful [Frida](https://frida.re) script that hooks into Java's `javax.crypto.Cipher` class on Android apps and logs detailed encryption/decryption operations.

It supports a wide variety of cipher modes, including:
- AES/ECB
- AES/CBC
- AES/GCM
- and others...

Logs include transformation type, operation mode, key material, IV, AAD, tag length, and the actual input/output data (Base64 or UTF-8 if printable).

---

## ⚙️ Features

- 🔍 Logs `Cipher.init`, `update`, `doFinal`, and `updateAAD`
- 🔑 Extracts and displays keys (if `SecretKeySpec`)
- 📦 Logs plaintext/ciphertext input/output
- 🧊 Handles different cipher modes (`CBC`, `GCM`, etc.)
- 🎯 Designed for reverse engineering and dynamic analysis

---

## 🚀 Example Usage

```bash
frida -U -f target.app.package -l frida-java-crypto-spy.js
```

---

## 📄 Sample Output

### 🧊 AES/CBC/PKCS5Padding

```bash
[Cipher.init]
  transformation: AES/CBC/PKCS5Padding
  mode: ENCRYPT
  key: oOej3ieYR1DYWnubZmjIXg==

  iv: odaCWSCFyF7C+9xclJdIDw==

[Cipher.doFinal]
  input: This is Secret
  output: uU0F7JMrbFUGoYoXBCOLiQ==

[Cipher.init]
  transformation: AES/CBC/PKCS5Padding
  mode: DECRYPT
  key: oOej3ieYR1DYWnubZmjIXg==

  iv: odaCWSCFyF7C+9xclJdIDw==

[Cipher.doFinal]
  input: uU0F7JMrbFUGoYoXBCOLiQ==

  output: This is Secret
```

---

### 🔐 AES/GCM/NoPadding

```bash
[Cipher.init]
  transformation: AES/GCM/NoPadding
  mode: ENCRYPT
  key: MKL7TlaJcbgvLu7OHkUBig==

  iv: c+t6p4Wo/vyeZfmP

  tagLength: 128

[Cipher.doFinal]
  input: This is Secret
  output: LzJv+cF4guZKLlaon+9zIDOSUxq5DR/rTiGNghis

[Cipher.init]
  transformation: AES/GCM/NoPadding
  mode: DECRYPT
  key: MKL7TlaJcbgvLu7OHkUBig==

  iv: c+t6p4Wo/vyeZfmP

  tagLength: 128

[Cipher.doFinal]
  input: LzJv+cF4guZKLlaon+9zIDOSUxq5DR/rTiGNghis

  output: This is Secret
```

---

## 📌 Notes

- `key` is only available if the algorithm uses `SecretKeySpec`
- `iv` is shown when using modes like CBC, GCM, etc.
- `tagLength` only applies to GCM or AEAD modes
- Inputs and outputs are shown in UTF-8 if printable, otherwise Base64

---

## 📜 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more details.

---

## 🤝 Contribution

Feel free to open issues or submit pull requests if you have improvements or want to support more cipher modes.

---

## 🔥 Author

**Mehdi Karzari**  
[Telegram (QM4RS](https://t.me/QM4RS)
