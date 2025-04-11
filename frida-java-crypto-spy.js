Java.perform(() => {
  const Cipher = Java.use("javax.crypto.Cipher");
  const SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");
  const IvParameterSpec = Java.use("javax.crypto.spec.IvParameterSpec");
  const GCMParameterSpec = Java.use("javax.crypto.spec.GCMParameterSpec");
  const Base64 = Java.use("android.util.Base64");
  const Arrays = Java.use("java.util.Arrays");

  function encodeBytes(bytes) {
      try {
          const jsStr = Java.use("java.lang.String").$new(bytes, "UTF-8") + "";
          return /^[\x20-\x7E\r\n\t]*$/.test(jsStr)
              ? jsStr
              : Base64.encodeToString(bytes, 0).toString();
      } catch (_) {
          return Base64.encodeToString(bytes, 0).toString();
      }
  }

  function logObj(title, obj) {
      const green = "\x1b[32m", blue = "\x1b[34m", yellow = "\x1b[33m", reset = "\x1b[0m";
      console.log(`${yellow}[${title}]${reset}`);
      for (const [key, val] of Object.entries(obj)) {
          if (val != null)
              console.log(`  ${blue}${key}${reset}: ${green}${val}${reset}`);
      }
      console.log('');
  }

  function isNestedInit() {
    const ExceptionCls = Java.use("java.lang.Exception");
    const frames = ExceptionCls.$new().getStackTrace();
    let hits = 0;
    for (let i = 0; i < frames.length; i++) {
      if (frames[i].getClassName() === "javax.crypto.Cipher" &&
          frames[i].getMethodName() === "init") {
        if (++hits > 1) return true;
      }
    }
    return false;
  }

  const ctx = new WeakMap();

  Cipher.init.overloads.forEach(o => {
    o.implementation = function () {

      // اگه کال داخلیه، لاگ نگیر
      if (isNestedInit())
        return o.apply(this, arguments);

      // ----- لاگ‌گیری عادی -----
      const op = arguments[0].valueOf();
      const mode = op === Cipher.ENCRYPT_MODE.value ? "ENCRYPT"
                : op === Cipher.DECRYPT_MODE.value ? "DECRYPT" : op;

      let keyStr;
      try {
        keyStr = encodeBytes(Java.cast(arguments[1], SecretKeySpec).getEncoded());
      } catch (_) {
        keyStr = arguments[1].getAlgorithm() + " (non‑SecretKeySpec)";
      }

      let iv = null, tagLength = null;
      for (let i = 2; i < arguments.length; i++) {
        const p = arguments[i];
        if (!p) continue;
        if (GCMParameterSpec.class.isInstance(p)) {
          const g = Java.cast(p, GCMParameterSpec);
          iv = encodeBytes(g.getIV());
          tagLength = g.getTLen();
        } else if (IvParameterSpec.class.isInstance(p)) {
          iv = encodeBytes(Java.cast(p, IvParameterSpec).getIV());
        }
      }

      logObj("Cipher.init", {
        transformation: this.getAlgorithm(),
        mode,
        key: keyStr,
        iv,
        tagLength
      });

      return o.apply(this, arguments);
    };
  });

  function grabBytes(args, idx) {
      if (args.length <= idx || !args[idx]) return null;
      if (args.length >= idx + 3 &&
          typeof args[idx + 1] === "number" &&
          typeof args[idx + 2] === "number") {
          return encodeBytes(Arrays.copyOfRange(args[idx], args[idx + 1], args[idx + 1] + args[idx + 2]));
      }
      return encodeBytes(args[idx]);
  }

  Cipher.update.overloads.forEach(o => {
      o.implementation = function () {
          const out = o.apply(this, arguments);
          const c = ctx.get(this) || {};
          logObj("Cipher.update", {
              transformation: c.transformation,
              mode: c.mode,
              input: grabBytes(arguments, 0)
          });
          return out;
      };
  });

  Cipher.doFinal.overloads.forEach(o => {
      o.implementation = function () {
          const result = o.apply(this, arguments);
          const c = ctx.get(this) || {};
          logObj("Cipher.doFinal", {
              transformation: c.transformation,
              mode: c.mode,
              input: grabBytes(arguments, 0),
              output: encodeBytes(result)
          });
          return result;
      };
  });

  if (Cipher.updateAAD) {
      Cipher.updateAAD.overloads.forEach(o => {
          o.implementation = function () {
              const c = ctx.get(this) || {};
              logObj("Cipher.updateAAD", {
                  transformation: c.transformation,
                  mode: c.mode,
                  aad: grabBytes(arguments, 0)
              });
              return o.apply(this, arguments);
          };
      });
  }
});
