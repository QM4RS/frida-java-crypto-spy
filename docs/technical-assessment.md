# Technical assessment

## Original repository

The original agent enumerated all runtime overloads for `Cipher.init`, `update`,
`doFinal`, and `updateAAD`, but its shared handler assumed far more uniform method
semantics than the Java API provides.

Key findings:

1. `const ctx = new WeakMap()` was read from `update`, `doFinal`, and `updateAAD` but
   never populated. Transformation and mode context were therefore absent.
2. Even if populated, a Frida Java wrapper is not guaranteed to be the same JavaScript
   object on every callback. A wrapper-keyed `WeakMap` is not reliable Java identity.
3. Every `doFinal` result was passed to a byte-array encoder. Five relevant overloads
   return an `int` byte count or have other argument semantics; those paths could throw
   in the logger after the real crypto call and break the target application.
4. `update` never logged output. Its generic input extractor also treated ByteBuffer
   and destination arrays as if they were simple input byte arrays.
5. `updateAAD(ByteBuffer)` was passed to a byte-array encoder and was unsafe.
6. `init` logged before the provider call, so failed initialization appeared successful
   and provider-generated IVs/parameters were missed.
7. Key extraction assumed `SecretKeySpec`; public, private, AndroidKeyStore, and other
   `Key` implementations were not handled generically.
8. `AlgorithmParameters`, provider metadata, output offsets, direct buffers, null
   update results, truncation, and streaming totals were absent.
9. Stack construction was used as an overload-recursion detector on every `init`, and
   the backtrace edition duplicated the full script and always paid stack-walk cost.
10. Logging/conversion failures were not consistently isolated from original behavior.

The original runtime API surface was:

- all runtime `Cipher.init.overloads` (six standard overloads),
- all runtime `Cipher.update.overloads` (five standard overloads),
- all runtime `Cipher.doFinal.overloads` (seven standard overloads), and
- all runtime `Cipher.updateAAD.overloads` (three standard overloads).

Enumeration looked complete, but correct semantic support was limited to byte-array
returning `update`/`doFinal` calls and byte-array AAD.

## Reference bundle

`libsecure-env.script.so` is Frida's packaged-script container, not a native ELF shared
object. Its header contains a minified `/agent/index.js` and source map. The bundle's
large size comes primarily from:

- `frida-java-bridge`,
- Node Buffer, Base64, and IEEE754 shims,
- Frida bundler/runtime support, and
- source-map names/mappings.

The application-specific crypto agent is only the small final module. It:

- filters transformations to AES,
- hooks two `SecretKeySpec` constructors,
- hooks six `Cipher.init` overloads,
- performs a post-init `getIV()` lookup,
- logs AES keys, IVs, GCM tag size, ECB/nonce warnings,
- handles destination-array ranges for update/final,
- attempts ByteBuffer output extraction, and
- logs to console, Logcat, a file, and a startup Toast.

Useful ideas retained and generalized:

- explicit `SecretKeySpec` constructor visibility,
- post-provider IV capture,
- correct use of `bytesWritten` and output offset for array destinations,
- lightweight ECB/key-size/nonce metadata.

Reference limitations not carried forward:

- AES-only filtering,
- no input logging for update/final,
- no AAD hooks,
- Java state attached as ad-hoc properties on a Frida wrapper,
- ByteBuffer output inspection that repositions the original buffer (and can invalidate
  its mark),
- no generic/non-exportable key metadata,
- no filtered backtrace,
- unsafe/noisy default Toast, file, and Logcat sinks,
- no uniform instrumentation-failure isolation.

No source from the bundled module was copied. Its behavior was treated as design input
and independently reimplemented around the generic `Cipher` contract.

## New architecture

- **CONFIG** controls event categories, representations, filters, limits, provider
  visibility, and optional backtraces.
- **Class cache** resolves Java wrappers once during `Java.perform`.
- **ByteUtils** snapshots signed Java bytes, arrays, and ByteBuffers; formats strict
  printable UTF-8, HEX, and Base64; and carries full length separately from preview.
- **CipherState** uses `System.identityHashCode` buckets plus Java equality and
  `WeakReference`. Dead objects are swept periodically.
- **Logger** is the only normal output path and is console-only.
- **Backtrace** pays stack-walk cost only when enabled or required by package filters.
- **ReentrancyGuard** is per native thread and prevents overloaded delegation/helper
  activity from producing recursive duplicate hooks.
- **Hook adapters** dispatch on the actual Java signature, snapshot inputs before the
  provider call, inspect exact outputs after it, preserve original exceptions, and
  isolate every logging failure.

This remains one standalone script and intentionally avoids a build step or runtime
dependency.
