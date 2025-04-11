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

### Using Backtrace 
```bash
[Cipher.init]
  transformation: AES/GCM/NoPadding
  mode: ENCRYPT
  key: oHeY9IH3/QHKXVu3BCTbWQ==

  iv: +koINuprs1G9C4ir

  tagLength: 128
📚 Backtrace (depth: 19) ↓↓↓
1. com.android.internal.os.ZygoteInit.main(ZygoteInit.java:861)
  2. com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:533)
    3. java.lang.reflect.Method.invoke(Method.java:-2)
      4. android.app.ActivityThread.main(ActivityThread.java:6669)
        5. android.os.Looper.loop(Looper.java:193)
          6. android.os.Handler.dispatchMessage(Handler.java:106)
            7. android.app.ActivityThread$H.handleMessage(ActivityThread.java:1808)
              8. android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:68)
                9. android.app.servertransaction.TransactionExecutor.executeCallbacks(TransactionExecutor.java:108)
                  10. android.app.servertransaction.LaunchActivityItem.execute(LaunchActivityItem.java:78)
                    11. android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:3048)
                      12. android.app.ActivityThread.performLaunchActivity(ActivityThread.java:2893)
                        13. android.app.Instrumentation.callActivityOnCreate(Instrumentation.java:1271)
                          14. android.app.Activity.performCreate(Activity.java:7137)
                            15. android.app.Activity.performCreate(Activity.java:7146)
                              16. com.mkv.aes.MainActivity.onCreate(MainActivity.kt:20)
                                17. com.mkv.aes.Test.runAllTests(Test.java:81)
                                  18. com.mkv.aes.AES.encryptGCMWithHMAC(AES.java:325)
                                    19. javax.crypto.Cipher.init(Cipher.java:-2)
📚 [End of Backtrace]


[Cipher.doFinal]
  input: This is Secret
  output: 9Ga6l966s++p4i9OACbn3nRp95I9uZSUnJGRzU0H

📚 Backtrace (depth: 19) ↓↓↓
1. com.android.internal.os.ZygoteInit.main(ZygoteInit.java:861)
  2. com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:533)
    3. java.lang.reflect.Method.invoke(Method.java:-2)
      4. android.app.ActivityThread.main(ActivityThread.java:6669)
        5. android.os.Looper.loop(Looper.java:193)
          6. android.os.Handler.dispatchMessage(Handler.java:106)
            7. android.app.ActivityThread$H.handleMessage(ActivityThread.java:1808)
              8. android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:68)
                9. android.app.servertransaction.TransactionExecutor.executeCallbacks(TransactionExecutor.java:108)
                  10. android.app.servertransaction.LaunchActivityItem.execute(LaunchActivityItem.java:78)
                    11. android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:3048)
                      12. android.app.ActivityThread.performLaunchActivity(ActivityThread.java:2893)
                        13. android.app.Instrumentation.callActivityOnCreate(Instrumentation.java:1271)
                          14. android.app.Activity.performCreate(Activity.java:7137)
                            15. android.app.Activity.performCreate(Activity.java:7146)
                              16. com.mkv.aes.MainActivity.onCreate(MainActivity.kt:20)
                                17. com.mkv.aes.Test.runAllTests(Test.java:81)
                                  18. com.mkv.aes.AES.encryptGCMWithHMAC(AES.java:326)
                                    19. javax.crypto.Cipher.doFinal(Cipher.java:-2)
📚 [End of Backtrace]
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
[Telegram (QM4RS)](https://t.me/QM4RS)
