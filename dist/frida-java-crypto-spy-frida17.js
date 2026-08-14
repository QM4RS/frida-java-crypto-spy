📦
254571 /.fjcs-agent-build/entry.js
✄
var _i=Object.defineProperty;var gi=(t,e)=>{for(var n in e)_i(t,n,{get:e[n],enumerable:!0})};var Ne=[],xe=[],Gt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(let t=0,e=Gt.length;t<e;++t)Ne[t]=Gt[t],xe[Gt.charCodeAt(t)]=t;xe[45]=62;xe[95]=63;function yi(t){let e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");let n=t.indexOf("=");n===-1&&(n=e);let r=n===e?0:4-n%4;return[n,r]}function bi(t,e,n){return(e+n)*3/4-n}function xr(t){let e=yi(t),n=e[0],r=e[1],o=new Uint8Array(bi(t,n,r)),i=0,s=r>0?n-4:n,l;for(l=0;l<s;l+=4){let a=xe[t.charCodeAt(l)]<<18|xe[t.charCodeAt(l+1)]<<12|xe[t.charCodeAt(l+2)]<<6|xe[t.charCodeAt(l+3)];o[i++]=a>>16&255,o[i++]=a>>8&255,o[i++]=a&255}if(r===2){let a=xe[t.charCodeAt(l)]<<2|xe[t.charCodeAt(l+1)]>>4;o[i++]=a&255}if(r===1){let a=xe[t.charCodeAt(l)]<<10|xe[t.charCodeAt(l+1)]<<4|xe[t.charCodeAt(l+2)]>>2;o[i++]=a>>8&255,o[i++]=a&255}return o}function Ei(t){return Ne[t>>18&63]+Ne[t>>12&63]+Ne[t>>6&63]+Ne[t&63]}function vi(t,e,n){let r=[];for(let o=e;o<n;o+=3){let i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255);r.push(Ei(i))}return r.join("")}function $t(t){let e=t.length,n=e%3,r=[],o=16383;for(let i=0,s=e-n;i<s;i+=o)r.push(vi(t,i,i+o>s?s:i+o));if(n===1){let i=t[e-1];r.push(Ne[i>>2]+Ne[i<<4&63]+"==")}else if(n===2){let i=(t[e-2]<<8)+t[e-1];r.push(Ne[i>>10]+Ne[i>>4&63]+Ne[i<<2&63]+"=")}return r.join("")}function tt(t,e,n,r,o){let i,s,l=o*8-r-1,a=(1<<l)-1,c=a>>1,d=-7,f=n?o-1:0,p=n?-1:1,u=t[e+f];for(f+=p,i=u&(1<<-d)-1,u>>=-d,d+=l;d>0;)i=i*256+t[e+f],f+=p,d-=8;for(s=i&(1<<-d)-1,i>>=-d,d+=r;d>0;)s=s*256+t[e+f],f+=p,d-=8;if(i===0)i=1-c;else{if(i===a)return s?NaN:(u?-1:1)*(1/0);s=s+Math.pow(2,r),i=i-c}return(u?-1:1)*s*Math.pow(2,i-r)}function Ht(t,e,n,r,o,i){let s,l,a,c=i*8-o-1,d=(1<<c)-1,f=d>>1,p=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=r?0:i-1,g=r?1:-1,m=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(l=isNaN(e)?1:0,s=d):(s=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-s))<1&&(s--,a*=2),s+f>=1?e+=p/a:e+=p*Math.pow(2,1-f),e*a>=2&&(s++,a/=2),s+f>=d?(l=0,s=d):s+f>=1?(l=(e*a-1)*Math.pow(2,o),s=s+f):(l=e*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;)t[n+u]=l&255,u+=g,l/=256,o-=8;for(s=s<<o|l,c+=o;c>0;)t[n+u]=s&255,u+=g,s/=256,c-=8;t[n+u-g]|=m*128}var Ii={INSPECT_MAX_BYTES:50},Zt=2147483647;v.TYPED_ARRAY_SUPPORT=!0;Object.defineProperty(v.prototype,"parent",{enumerable:!0,get:function(){if(v.isBuffer(this))return this.buffer}});Object.defineProperty(v.prototype,"offset",{enumerable:!0,get:function(){if(v.isBuffer(this))return this.byteOffset}});function Me(t){if(t>Zt)throw new RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,v.prototype),e}function v(t,e,n){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Qt(t)}return Nr(t,e,n)}v.poolSize=8192;function Nr(t,e,n){if(typeof t=="string")return Ci(t,e);if(ArrayBuffer.isView(t))return Ai(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(t instanceof ArrayBuffer||t&&t.buffer instanceof ArrayBuffer||t instanceof SharedArrayBuffer||t&&t.buffer instanceof SharedArrayBuffer)return Wt(t,e,n);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let r=t.valueOf&&t.valueOf();if(r!=null&&r!==t)return v.from(r,e,n);let o=Ti(t);if(o)return o;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return v.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}v.from=function(t,e,n){return Nr(t,e,n)};Object.setPrototypeOf(v.prototype,Uint8Array.prototype);Object.setPrototypeOf(v,Uint8Array);function Lr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function xi(t,e,n){return Lr(t),t<=0?Me(t):e!==void 0?typeof n=="string"?Me(t).fill(e,n):Me(t).fill(e):Me(t)}v.alloc=function(t,e,n){return xi(t,e,n)};function Qt(t){return Lr(t),Me(t<0?0:Yt(t)|0)}v.allocUnsafe=function(t){return Qt(t)};v.allocUnsafeSlow=function(t){return Qt(t)};function Ci(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!v.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let n=kr(t,e)|0,r=Me(n),o=r.write(t,e);return o!==n&&(r=r.slice(0,o)),r}function Kt(t){let e=t.length<0?0:Yt(t.length)|0,n=Me(e);for(let r=0;r<e;r+=1)n[r]=t[r]&255;return n}function Ai(t){if(t instanceof Uint8Array){let e=new Uint8Array(t);return Wt(e.buffer,e.byteOffset,e.byteLength)}return Kt(t)}function Wt(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return e===void 0&&n===void 0?r=new Uint8Array(t):n===void 0?r=new Uint8Array(t,e):r=new Uint8Array(t,e,n),Object.setPrototypeOf(r,v.prototype),r}function Ti(t){if(v.isBuffer(t)){let e=Yt(t.length)|0,n=Me(e);return n.length===0||t.copy(n,0,0,e),n}if(t.length!==void 0)return typeof t.length!="number"||Number.isNaN(t.length)?Me(0):Kt(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Kt(t.data)}function Yt(t){if(t>=Zt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Zt.toString(16)+" bytes");return t|0}v.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==v.prototype};v.compare=function(e,n){if(e instanceof Uint8Array&&(e=v.from(e,e.offset,e.byteLength)),n instanceof Uint8Array&&(n=v.from(n,n.offset,n.byteLength)),!v.isBuffer(e)||!v.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;let r=e.length,o=n.length;for(let i=0,s=Math.min(r,o);i<s;++i)if(e[i]!==n[i]){r=e[i],o=n[i];break}return r<o?-1:o<r?1:0};v.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};v.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return v.alloc(0);let r;if(n===void 0)for(n=0,r=0;r<e.length;++r)n+=e[r].length;let o=v.allocUnsafe(n),i=0;for(r=0;r<e.length;++r){let s=e[r];if(s instanceof Uint8Array)i+s.length>o.length?(v.isBuffer(s)||(s=v.from(s.buffer,s.byteOffset,s.byteLength)),s.copy(o,i)):Uint8Array.prototype.set.call(o,s,i);else if(v.isBuffer(s))s.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=s.length}return o};function kr(t,e){if(v.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return qt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Br(t).length;default:if(o)return r?-1:qt(t).length;e=(""+e).toLowerCase(),o=!0}}v.byteLength=kr;function Ni(t,e,n){let r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return Ui(this,e,n);case"utf8":case"utf-8":return jr(this,e,n);case"ascii":return Fi(this,e,n);case"latin1":case"binary":return Di(this,e,n);case"base64":return Pi(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bi(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}v.prototype._isBuffer=!0;function De(t,e,n){let r=t[e];t[e]=t[n],t[n]=r}v.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<e;n+=2)De(this,n,n+1);return this};v.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<e;n+=4)De(this,n,n+3),De(this,n+1,n+2);return this};v.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<e;n+=8)De(this,n,n+7),De(this,n+1,n+6),De(this,n+2,n+5),De(this,n+3,n+4);return this};v.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?jr(this,0,e):Ni.apply(this,arguments)};v.prototype.toLocaleString=v.prototype.toString;v.prototype.equals=function(e){if(!v.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:v.compare(this,e)===0};v.prototype.inspect=function(){let e="",n=Ii.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"};v.prototype[Symbol.for("nodejs.util.inspect.custom")]=v.prototype.inspect;v.prototype.compare=function(e,n,r,o,i){if(e instanceof Uint8Array&&(e=v.from(e,e.offset,e.byteLength)),!v.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),r===void 0&&(r=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),n<0||r>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&n>=r)return 0;if(o>=i)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,o>>>=0,i>>>=0,this===e)return 0;let s=i-o,l=r-n,a=Math.min(s,l),c=this.slice(o,i),d=e.slice(n,r);for(let f=0;f<a;++f)if(c[f]!==d[f]){s=c[f],l=d[f];break}return s<l?-1:l<s?1:0};function Mr(t,e,n,r,o){if(t.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Number.isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0)if(o)n=0;else return-1;if(typeof e=="string"&&(e=v.from(e,r)),v.isBuffer(e))return e.length===0?-1:Cr(t,e,n,r,o);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):Cr(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function Cr(t,e,n,r,o){let i=1,s=t.length,l=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(t.length<2||e.length<2)return-1;i=2,s/=2,l/=2,n/=2}function a(d,f){return i===1?d[f]:d.readUInt16BE(f*i)}let c;if(o){let d=-1;for(c=n;c<s;c++)if(a(t,c)===a(e,d===-1?0:c-d)){if(d===-1&&(d=c),c-d+1===l)return d*i}else d!==-1&&(c-=c-d),d=-1}else for(n+l>s&&(n=s-l),c=n;c>=0;c--){let d=!0;for(let f=0;f<l;f++)if(a(t,c+f)!==a(e,f)){d=!1;break}if(d)return c}return-1}v.prototype.includes=function(e,n,r){return this.indexOf(e,n,r)!==-1};v.prototype.indexOf=function(e,n,r){return Mr(this,e,n,r,!0)};v.prototype.lastIndexOf=function(e,n,r){return Mr(this,e,n,r,!1)};function Li(t,e,n,r){n=Number(n)||0;let o=t.length-n;r?(r=Number(r),r>o&&(r=o)):r=o;let i=e.length;r>i/2&&(r=i/2);let s;for(s=0;s<r;++s){let l=parseInt(e.substr(s*2,2),16);if(Number.isNaN(l))return s;t[n+s]=l}return s}function ki(t,e,n,r){return bt(qt(e,t.length-n),t,n,r)}function Mi(t,e,n,r){return bt(Gi(e),t,n,r)}function ji(t,e,n,r){return bt(Br(e),t,n,r)}function Oi(t,e,n,r){return bt($i(e,t.length-n),t,n,r)}v.prototype.write=function(e,n,r,o){if(n===void 0)o="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")o=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let i=this.length-n;if((r===void 0||r>i)&&(r=i),e.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let s=!1;for(;;)switch(o){case"hex":return Li(this,e,n,r);case"utf8":case"utf-8":return ki(this,e,n,r);case"ascii":case"latin1":case"binary":return Mi(this,e,n,r);case"base64":return ji(this,e,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Oi(this,e,n,r);default:if(s)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),s=!0}};v.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Pi(t,e,n){return e===0&&n===t.length?$t(t):$t(t.slice(e,n))}function jr(t,e,n){n=Math.min(t.length,n);let r=[],o=e;for(;o<n;){let i=t[o],s=null,l=i>239?4:i>223?3:i>191?2:1;if(o+l<=n){let a,c,d,f;switch(l){case 1:i<128&&(s=i);break;case 2:a=t[o+1],(a&192)===128&&(f=(i&31)<<6|a&63,f>127&&(s=f));break;case 3:a=t[o+1],c=t[o+2],(a&192)===128&&(c&192)===128&&(f=(i&15)<<12|(a&63)<<6|c&63,f>2047&&(f<55296||f>57343)&&(s=f));break;case 4:a=t[o+1],c=t[o+2],d=t[o+3],(a&192)===128&&(c&192)===128&&(d&192)===128&&(f=(i&15)<<18|(a&63)<<12|(c&63)<<6|d&63,f>65535&&f<1114112&&(s=f))}}s===null?(s=65533,l=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|s&1023),r.push(s),o+=l}return Ri(r)}var Ar=4096;function Ri(t){let e=t.length;if(e<=Ar)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=Ar));return n}function Fi(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(t[o]&127);return r}function Di(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function Ui(t,e,n){let r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let o="";for(let i=e;i<n;++i)o+=Hi[t[i]];return o}function Bi(t,e,n){let r=t.slice(e,n),o="";for(let i=0;i<r.length-1;i+=2)o+=String.fromCharCode(r[i]+r[i+1]*256);return o}v.prototype.slice=function(e,n){let r=this.length;e=~~e,n=n===void 0?r:~~n,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<e&&(n=e);let o=this.subarray(e,n);return Object.setPrototypeOf(o,v.prototype),o};function _e(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}v.prototype.readUintLE=v.prototype.readUIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=this[e],i=1,s=0;for(;++s<n&&(i*=256);)o+=this[e+s]*i;return o};v.prototype.readUintBE=v.prototype.readUIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=this[e+--n],i=1;for(;n>0&&(i*=256);)o+=this[e+--n]*i;return o};v.prototype.readUint8=v.prototype.readUInt8=function(e,n){return e=e>>>0,n||_e(e,1,this.length),this[e]};v.prototype.readUint16LE=v.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||_e(e,2,this.length),this[e]|this[e+1]<<8};v.prototype.readUint16BE=v.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||_e(e,2,this.length),this[e]<<8|this[e+1]};v.prototype.readUint32LE=v.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};v.prototype.readUint32BE=v.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};v.prototype.readBigUInt64LE=function(e){e=e>>>0,He(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&nt(e,this.length-8);let o=n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,i=this[++e]+this[++e]*2**8+this[++e]*2**16+r*2**24;return BigInt(o)+(BigInt(i)<<BigInt(32))};v.prototype.readBigUInt64BE=function(e){e=e>>>0,He(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&nt(e,this.length-8);let o=n*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],i=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r;return(BigInt(o)<<BigInt(32))+BigInt(i)};v.prototype.readIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=this[e],i=1,s=0;for(;++s<n&&(i*=256);)o+=this[e+s]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*n)),o};v.prototype.readIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=n,i=1,s=this[e+--o];for(;o>0&&(i*=256);)s+=this[e+--o]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*n)),s};v.prototype.readInt8=function(e,n){return e=e>>>0,n||_e(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};v.prototype.readInt16LE=function(e,n){e=e>>>0,n||_e(e,2,this.length);let r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};v.prototype.readInt16BE=function(e,n){e=e>>>0,n||_e(e,2,this.length);let r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};v.prototype.readInt32LE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};v.prototype.readInt32BE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};v.prototype.readBigInt64LE=function(e){e=e>>>0,He(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&nt(e,this.length-8);let o=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(r<<24);return(BigInt(o)<<BigInt(32))+BigInt(n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)};v.prototype.readBigInt64BE=function(e){e=e>>>0,He(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&nt(e,this.length-8);let o=(n<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(o)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r)};v.prototype.readFloatLE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),tt(this,e,!0,23,4)};v.prototype.readFloatBE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),tt(this,e,!1,23,4)};v.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||_e(e,8,this.length),tt(this,e,!0,52,8)};v.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||_e(e,8,this.length),tt(this,e,!1,52,8)};function Ee(t,e,n,r,o,i){if(!v.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}v.prototype.writeUintLE=v.prototype.writeUIntLE=function(e,n,r,o){if(e=+e,n=n>>>0,r=r>>>0,!o){let l=Math.pow(2,8*r)-1;Ee(this,e,n,r,l,0)}let i=1,s=0;for(this[n]=e&255;++s<r&&(i*=256);)this[n+s]=e/i&255;return n+r};v.prototype.writeUintBE=v.prototype.writeUIntBE=function(e,n,r,o){if(e=+e,n=n>>>0,r=r>>>0,!o){let l=Math.pow(2,8*r)-1;Ee(this,e,n,r,l,0)}let i=r-1,s=1;for(this[n+i]=e&255;--i>=0&&(s*=256);)this[n+i]=e/s&255;return n+r};v.prototype.writeUint8=v.prototype.writeUInt8=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,1,255,0),this[n]=e&255,n+1};v.prototype.writeUint16LE=v.prototype.writeUInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2};v.prototype.writeUint16BE=v.prototype.writeUInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2};v.prototype.writeUint32LE=v.prototype.writeUInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4};v.prototype.writeUint32BE=v.prototype.writeUInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function Or(t,e,n,r,o){Ur(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n++]=i,i=i>>8,t[n++]=i,i=i>>8,t[n++]=i,i=i>>8,t[n++]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=s,s=s>>8,t[n++]=s,s=s>>8,t[n++]=s,s=s>>8,t[n++]=s,n}function Pr(t,e,n,r,o){Ur(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n+7]=i,i=i>>8,t[n+6]=i,i=i>>8,t[n+5]=i,i=i>>8,t[n+4]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=s,s=s>>8,t[n+2]=s,s=s>>8,t[n+1]=s,s=s>>8,t[n]=s,n+8}v.prototype.writeBigUInt64LE=function(e,n=0){return Or(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))};v.prototype.writeBigUInt64BE=function(e,n=0){return Pr(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))};v.prototype.writeIntLE=function(e,n,r,o){if(e=+e,n=n>>>0,!o){let a=Math.pow(2,8*r-1);Ee(this,e,n,r,a-1,-a)}let i=0,s=1,l=0;for(this[n]=e&255;++i<r&&(s*=256);)e<0&&l===0&&this[n+i-1]!==0&&(l=1),this[n+i]=(e/s>>0)-l&255;return n+r};v.prototype.writeIntBE=function(e,n,r,o){if(e=+e,n=n>>>0,!o){let a=Math.pow(2,8*r-1);Ee(this,e,n,r,a-1,-a)}let i=r-1,s=1,l=0;for(this[n+i]=e&255;--i>=0&&(s*=256);)e<0&&l===0&&this[n+i+1]!==0&&(l=1),this[n+i]=(e/s>>0)-l&255;return n+r};v.prototype.writeInt8=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1};v.prototype.writeInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2};v.prototype.writeInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2};v.prototype.writeInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4};v.prototype.writeInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};v.prototype.writeBigInt64LE=function(e,n=0){return Or(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))};v.prototype.writeBigInt64BE=function(e,n=0){return Pr(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))};function Rr(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Fr(t,e,n,r,o){return e=+e,n=n>>>0,o||Rr(t,e,n,4,34028234663852886e22,-34028234663852886e22),Ht(t,e,n,r,23,4),n+4}v.prototype.writeFloatLE=function(e,n,r){return Fr(this,e,n,!0,r)};v.prototype.writeFloatBE=function(e,n,r){return Fr(this,e,n,!1,r)};function Dr(t,e,n,r,o){return e=+e,n=n>>>0,o||Rr(t,e,n,8,17976931348623157e292,-17976931348623157e292),Ht(t,e,n,r,52,8),n+8}v.prototype.writeDoubleLE=function(e,n,r){return Dr(this,e,n,!0,r)};v.prototype.writeDoubleBE=function(e,n,r){return Dr(this,e,n,!1,r)};v.prototype.copy=function(e,n,r,o){if(!v.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),n>=e.length&&(n=e.length),n||(n=0),o>0&&o<r&&(o=r),o===r||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-n<o-r&&(o=e.length-n+r);let i=o-r;return this===e?this.copyWithin(n,r,o):Uint8Array.prototype.set.call(e,this.subarray(r,o),n),i};v.prototype.fill=function(e,n,r,o){if(typeof e=="string"){if(typeof n=="string"?(o=n,n=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!v.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){let s=e.charCodeAt(0);(o==="utf8"&&s<128||o==="latin1")&&(e=s)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);let i;if(typeof e=="number")for(i=n;i<r;++i)this[i]=e;else{let s=v.isBuffer(e)?e:v.from(e,o),l=s.length;if(l===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-n;++i)this[i+n]=s[i%l]}return this};var $e={};function Xt(t,e,n){$e[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(o){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:o,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}Xt("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Xt("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError);Xt("ERR_OUT_OF_RANGE",function(t,e,n){let r=`The value of "${t}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>2**32?o=Tr(String(n)):typeof n=="bigint"&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=Tr(o)),o+="n"),r+=` It must be ${e}. Received ${o}`,r},RangeError);function Tr(t){let e="",n=t.length,r=t[0]==="-"?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function zi(t,e,n){He(e,"offset"),(t[e]===void 0||t[e+n]===void 0)&&nt(e,t.length-(n+1))}function Ur(t,e,n,r,o,i){if(t>n||t<e){let s=typeof e=="bigint"?"n":"",l;throw i>3?e===0||e===BigInt(0)?l=`>= 0${s} and < 2${s} ** ${(i+1)*8}${s}`:l=`>= -(2${s} ** ${(i+1)*8-1}${s}) and < 2 ** ${(i+1)*8-1}${s}`:l=`>= ${e}${s} and <= ${n}${s}`,new $e.ERR_OUT_OF_RANGE("value",l,t)}zi(r,o,i)}function He(t,e){if(typeof t!="number")throw new $e.ERR_INVALID_ARG_TYPE(e,"number",t)}function nt(t,e,n){throw Math.floor(t)!==t?(He(t,n),new $e.ERR_OUT_OF_RANGE(n||"offset","an integer",t)):e<0?new $e.ERR_BUFFER_OUT_OF_BOUNDS:new $e.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}var Vi=/[^+/0-9A-Za-z-_]/g;function Ji(t){if(t=t.split("=")[0],t=t.trim().replace(Vi,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function qt(t,e){e=e||1/0;let n,r=t.length,o=null,i=[];for(let s=0;s<r;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(s+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=(o-55296<<10|n-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return i}function Gi(t){let e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n)&255);return e}function $i(t,e){let n,r,o,i=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,o=n%256,i.push(o),i.push(r);return i}function Br(t){return xr(Ji(t))}function bt(t,e,n,r){let o;for(o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}var Hi=function(){let t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){let r=n*16;for(let o=0;o<16;++o)e[r+o]=t[n]+t[o]}return e}();var Dt={};gi(Dt,{ArtMethod:()=>Lt,ArtStackVisitor:()=>jn,DVM_JNI_ENV_OFFSET_SELF:()=>lo,HandleVector:()=>ct,VariableSizedHandleScope:()=>dt,backtrace:()=>Kn,deoptimizeBootImage:()=>Xn,deoptimizeEverything:()=>Yn,deoptimizeMethod:()=>Qn,ensureClassInitialized:()=>ml,getAndroidApiLevel:()=>pe,getAndroidVersion:()=>ut,getApi:()=>X,getArtApexVersion:()=>zn,getArtClassSpec:()=>Jn,getArtFieldSpec:()=>Rt,getArtMethodSpec:()=>Se,getArtThreadFromEnv:()=>Ft,getArtThreadSpec:()=>We,makeArtClassLoaderVisitor:()=>Zn,makeArtClassVisitor:()=>Hn,makeMethodMangler:()=>lc,makeObjectVisitorPredicate:()=>tr,revertGlobalPatches:()=>Wn,translateMethod:()=>cc,withAllArtThreadsSuspended:()=>$n,withRunnableArtThread:()=>Ce});var{pageSize:en,pointerSize:Zi}=Process,tn=class{constructor(e){this.sliceSize=e,this.slicesPerPage=en/e,this.pages=[],this.free=[]}allocateSlice(e,n){let r=e.near===void 0,o=n===1;if(r&&o){let i=this.free.pop();if(i!==void 0)return i}else if(n<en){let{free:i}=this,s=i.length,l=o?null:ptr(n-1);for(let a=0;a!==s;a++){let c=i[a],d=r||this._isSliceNear(c,e),f=o||c.and(l).isNull();if(d&&f)return i.splice(a,1)[0]}}return this._allocatePage(e)}_allocatePage(e){let n=Memory.alloc(en,e),{sliceSize:r,slicesPerPage:o}=this;for(let i=1;i!==o;i++){let s=n.add(i*r);this.free.push(s)}return this.pages.push(n),n}_isSliceNear(e,n){let r=e.add(this.sliceSize),{near:o,maxDistance:i}=n,s=zr(o.sub(e)),l=zr(o.sub(r));return s.compare(i)<=0&&l.compare(i)<=0}freeSlice(e){this.free.push(e)}};function zr(t){let e=Zi===4?31:63,n=ptr(1).shl(e).not();return t.and(n)}function nn(t){return new tn(t)}function ye(t,e){if(e!==0)throw new Error(t+" failed: "+e)}var Et={v1_0:805371904,v1_2:805372416},vt={canTagObjects:1},{pointerSize:Ki}=Process,Wi={exceptions:"propagate"};function je(t,e){this.handle=t,this.vm=e,this.vtable=t.readPointer()}je.prototype.deallocate=rt(47,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});je.prototype.getLoadedClasses=rt(78,"int32",["pointer","pointer","pointer"],function(t,e,n){let r=t(this.handle,e,n);ye("EnvJvmti::getLoadedClasses",r)});je.prototype.iterateOverInstancesOfClass=rt(112,"int32",["pointer","pointer","int","pointer","pointer"],function(t,e,n,r,o){let i=t(this.handle,e,n,r,o);ye("EnvJvmti::iterateOverInstancesOfClass",i)});je.prototype.getObjectsWithTags=rt(114,"int32",["pointer","int","pointer","pointer","pointer","pointer"],function(t,e,n,r,o,i){let s=t(this.handle,e,n,r,o,i);ye("EnvJvmti::getObjectsWithTags",s)});je.prototype.addCapabilities=rt(142,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});function rt(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction(this.vtable.add((t-1)*Ki).readPointer(),e,n,Wi));let i=[o];return i=i.concat.apply(i,arguments),r.apply(this,i)}}function Oe(t,e,{limit:n}){let r=t,o=null;for(let i=0;i!==n;i++){let s=Instruction.parse(r),l=e(s,o);if(l!==null)return l;r=s.next,o=s}return null}function ge(t){let e=null,n=!1;return function(...r){return n||(e=t(...r),n=!0),e}}function I(t,e){this.handle=t,this.vm=e}var St=Process.pointerSize,Re=2,qi=28,Qi=34,Yi=37,Xi=40,es=43,ts=46,ns=49,rs=52,os=55,is=58,ss=61,as=64,ls=67,cs=70,ds=73,us=76,fs=79,ps=82,hs=85,ms=88,_s=91,gs=114,ys=117,bs=120,Es=123,vs=126,Ss=129,ws=132,Is=135,xs=138,Cs=141,As=95,Ts=96,Ns=97,Ls=98,ks=99,Ms=100,js=101,Os=102,Ps=103,Rs=104,Fs=105,Ds=106,Us=107,Bs=108,zs=109,Vs=110,Js=111,Gs=112,$s=145,Hs=146,Zs=147,Ks=148,Ws=149,qs=150,Qs=151,Ys=152,Xs=153,ea=154,ta=155,na=156,ra=157,oa=158,ia=159,sa=160,aa=161,la=162,ca={pointer:Qi,uint8:Yi,int8:Xi,uint16:es,int16:ts,int32:ns,int64:rs,float:os,double:is,void:ss},da={pointer:as,uint8:ls,int8:cs,uint16:ds,int16:us,int32:fs,int64:ps,float:hs,double:ms,void:_s},ua={pointer:gs,uint8:ys,int8:bs,uint16:Es,int16:vs,int32:Ss,int64:ws,float:Is,double:xs,void:Cs},fa={pointer:As,uint8:Ts,int8:Ns,uint16:Ls,int16:ks,int32:Ms,int64:js,float:Os,double:Ps},pa={pointer:Rs,uint8:Fs,int8:Ds,uint16:Us,int16:Bs,int32:zs,int64:Vs,float:Js,double:Gs},ha={pointer:$s,uint8:Hs,int8:Zs,uint16:Ks,int16:Ws,int32:qs,int64:Qs,float:Ys,double:Xs},ma={pointer:ea,uint8:ta,int8:na,uint16:ra,int16:oa,int32:ia,int64:sa,float:aa,double:la},Jr={exceptions:"propagate"},rn=null,mn=[];I.dispose=function(t){mn.forEach(t.deleteGlobalRef,t),mn=[]};function Ue(t){return mn.push(t),t}function wt(t){return rn===null&&(rn=t.handle.readPointer()),rn}function P(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction(wt(this).add(t*St).readPointer(),e,n,Jr));let i=[o];return i=i.concat.apply(i,arguments),r.apply(this,i)}}I.prototype.getVersion=P(4,"int32",["pointer"],function(t){return t(this.handle)});I.prototype.findClass=P(6,"pointer",["pointer","pointer"],function(t,e){let n=t(this.handle,Memory.allocUtf8String(e));return this.throwIfExceptionPending(),n});I.prototype.throwIfExceptionPending=function(){let t=this.exceptionOccurred();if(t.isNull())return;this.exceptionClear();let e=this.newGlobalRef(t);this.deleteLocalRef(t);let n=this.vaMethod("pointer",[])(this.handle,e,this.javaLangObject().toString),r=this.stringFromJni(n);this.deleteLocalRef(n);let o=new Error(r);throw o.$h=e,Script.bindWeak(o,_a(this.vm,e)),o};function _a(t,e){return function(){t.perform(n=>{n.deleteGlobalRef(e)})}}I.prototype.fromReflectedMethod=P(7,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.fromReflectedField=P(8,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.toReflectedMethod=P(9,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});I.prototype.getSuperclass=P(10,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.isAssignableFrom=P(11,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});I.prototype.toReflectedField=P(12,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});I.prototype.throw=P(13,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.exceptionOccurred=P(15,"pointer",["pointer"],function(t){return t(this.handle)});I.prototype.exceptionDescribe=P(16,"void",["pointer"],function(t){t(this.handle)});I.prototype.exceptionClear=P(17,"void",["pointer"],function(t){t(this.handle)});I.prototype.pushLocalFrame=P(19,"int32",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.popLocalFrame=P(20,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.newGlobalRef=P(21,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.deleteGlobalRef=P(22,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});I.prototype.deleteLocalRef=P(23,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});I.prototype.isSameObject=P(24,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});I.prototype.newLocalRef=P(25,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.allocObject=P(27,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.getObjectClass=P(31,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.isInstanceOf=P(32,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});I.prototype.getMethodId=P(33,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});I.prototype.getFieldId=P(94,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});I.prototype.getIntField=P(100,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});I.prototype.getStaticMethodId=P(113,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});I.prototype.getStaticFieldId=P(144,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});I.prototype.getStaticIntField=P(150,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});I.prototype.getStringLength=P(164,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.getStringChars=P(165,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.releaseStringChars=P(166,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});I.prototype.newStringUtf=P(167,"pointer",["pointer","pointer"],function(t,e){let n=Memory.allocUtf8String(e);return t(this.handle,n)});I.prototype.getStringUtfChars=P(169,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.releaseStringUtfChars=P(170,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});I.prototype.getArrayLength=P(171,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.newObjectArray=P(172,"pointer",["pointer","int32","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,n,r)});I.prototype.getObjectArrayElement=P(173,"pointer",["pointer","pointer","int32"],function(t,e,n){return t(this.handle,e,n)});I.prototype.setObjectArrayElement=P(174,"void",["pointer","pointer","int32","pointer"],function(t,e,n,r){t(this.handle,e,n,r)});I.prototype.newBooleanArray=P(175,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newByteArray=P(176,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newCharArray=P(177,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newShortArray=P(178,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newIntArray=P(179,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newLongArray=P(180,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newFloatArray=P(181,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newDoubleArray=P(182,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.getBooleanArrayElements=P(183,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getByteArrayElements=P(184,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getCharArrayElements=P(185,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getShortArrayElements=P(186,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getIntArrayElements=P(187,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getLongArrayElements=P(188,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getFloatArrayElements=P(189,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getDoubleArrayElements=P(190,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.releaseBooleanArrayElements=P(191,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Re)});I.prototype.releaseByteArrayElements=P(192,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Re)});I.prototype.releaseCharArrayElements=P(193,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Re)});I.prototype.releaseShortArrayElements=P(194,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Re)});I.prototype.releaseIntArrayElements=P(195,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Re)});I.prototype.releaseLongArrayElements=P(196,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Re)});I.prototype.releaseFloatArrayElements=P(197,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Re)});I.prototype.releaseDoubleArrayElements=P(198,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,Re)});I.prototype.getByteArrayRegion=P(200,"void",["pointer","pointer","int","int","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setBooleanArrayRegion=P(207,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setByteArrayRegion=P(208,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setCharArrayRegion=P(209,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setShortArrayRegion=P(210,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setIntArrayRegion=P(211,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setLongArrayRegion=P(212,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setFloatArrayRegion=P(213,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setDoubleArrayRegion=P(214,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.registerNatives=P(215,"int32",["pointer","pointer","pointer","int32"],function(t,e,n,r){return t(this.handle,e,n,r)});I.prototype.monitorEnter=P(217,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.monitorExit=P(218,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.getDirectBufferAddress=P(230,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.getObjectRefType=P(232,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});var Vr=new Map;function It(t,e,n,r){return gn(this,"p",ya,t,e,n,r)}function _n(t,e,n,r){return gn(this,"v",ba,t,e,n,r)}function ga(t,e,n,r){return gn(this,"n",Ea,t,e,n,r)}function gn(t,e,n,r,o,i,s){if(s!==void 0)return n(t,r,o,i,s);let l=[r,e,o].concat(i).join("|"),a=Vr.get(l);return a===void 0&&(a=n(t,r,o,i,Jr),Vr.set(l,a)),a}function ya(t,e,n,r,o){return new NativeFunction(wt(t).add(e*St).readPointer(),n,["pointer","pointer","pointer"].concat(r),o)}function ba(t,e,n,r,o){return new NativeFunction(wt(t).add(e*St).readPointer(),n,["pointer","pointer","pointer","..."].concat(r),o)}function Ea(t,e,n,r,o){return new NativeFunction(wt(t).add(e*St).readPointer(),n,["pointer","pointer","pointer","pointer","..."].concat(r),o)}I.prototype.constructor=function(t,e){return _n.call(this,qi,"pointer",t,e)};I.prototype.vaMethod=function(t,e,n){let r=ca[t];if(r===void 0)throw new Error("Unsupported type: "+t);return _n.call(this,r,t,e,n)};I.prototype.nonvirtualVaMethod=function(t,e,n){let r=da[t];if(r===void 0)throw new Error("Unsupported type: "+t);return ga.call(this,r,t,e,n)};I.prototype.staticVaMethod=function(t,e,n){let r=ua[t];if(r===void 0)throw new Error("Unsupported type: "+t);return _n.call(this,r,t,e,n)};I.prototype.getField=function(t){let e=fa[t];if(e===void 0)throw new Error("Unsupported type: "+t);return It.call(this,e,t,[])};I.prototype.getStaticField=function(t){let e=ha[t];if(e===void 0)throw new Error("Unsupported type: "+t);return It.call(this,e,t,[])};I.prototype.setField=function(t){let e=pa[t];if(e===void 0)throw new Error("Unsupported type: "+t);return It.call(this,e,"void",[t])};I.prototype.setStaticField=function(t){let e=ma[t];if(e===void 0)throw new Error("Unsupported type: "+t);return It.call(this,e,"void",[t])};var on=null;I.prototype.javaLangClass=function(){if(on===null){let t=this.findClass("java/lang/Class");try{let e=this.getMethodId.bind(this,t);on={handle:Ue(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getSimpleName:e("getSimpleName","()Ljava/lang/String;"),getGenericSuperclass:e("getGenericSuperclass","()Ljava/lang/reflect/Type;"),getDeclaredConstructors:e("getDeclaredConstructors","()[Ljava/lang/reflect/Constructor;"),getDeclaredMethods:e("getDeclaredMethods","()[Ljava/lang/reflect/Method;"),getDeclaredFields:e("getDeclaredFields","()[Ljava/lang/reflect/Field;"),isArray:e("isArray","()Z"),isPrimitive:e("isPrimitive","()Z"),isInterface:e("isInterface","()Z"),getComponentType:e("getComponentType","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return on};var sn=null;I.prototype.javaLangObject=function(){if(sn===null){let t=this.findClass("java/lang/Object");try{let e=this.getMethodId.bind(this,t);sn={handle:Ue(this.newGlobalRef(t)),toString:e("toString","()Ljava/lang/String;"),getClass:e("getClass","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return sn};var an=null;I.prototype.javaLangReflectConstructor=function(){if(an===null){let t=this.findClass("java/lang/reflect/Constructor");try{an={getGenericParameterTypes:this.getMethodId(t,"getGenericParameterTypes","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return an};var ln=null;I.prototype.javaLangReflectMethod=function(){if(ln===null){let t=this.findClass("java/lang/reflect/Method");try{let e=this.getMethodId.bind(this,t);ln={getName:e("getName","()Ljava/lang/String;"),getGenericParameterTypes:e("getGenericParameterTypes","()[Ljava/lang/reflect/Type;"),getParameterTypes:e("getParameterTypes","()[Ljava/lang/Class;"),getGenericReturnType:e("getGenericReturnType","()Ljava/lang/reflect/Type;"),getGenericExceptionTypes:e("getGenericExceptionTypes","()[Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),isVarArgs:e("isVarArgs","()Z")}}finally{this.deleteLocalRef(t)}}return ln};var cn=null;I.prototype.javaLangReflectField=function(){if(cn===null){let t=this.findClass("java/lang/reflect/Field");try{let e=this.getMethodId.bind(this,t);cn={getName:e("getName","()Ljava/lang/String;"),getType:e("getType","()Ljava/lang/Class;"),getGenericType:e("getGenericType","()Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),toString:e("toString","()Ljava/lang/String;")}}finally{this.deleteLocalRef(t)}}return cn};var dn=null;I.prototype.javaLangReflectTypeVariable=function(){if(dn===null){let t=this.findClass("java/lang/reflect/TypeVariable");try{let e=this.getMethodId.bind(this,t);dn={handle:Ue(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getBounds:e("getBounds","()[Ljava/lang/reflect/Type;"),getGenericDeclaration:e("getGenericDeclaration","()Ljava/lang/reflect/GenericDeclaration;")}}finally{this.deleteLocalRef(t)}}return dn};var un=null;I.prototype.javaLangReflectWildcardType=function(){if(un===null){let t=this.findClass("java/lang/reflect/WildcardType");try{let e=this.getMethodId.bind(this,t);un={handle:Ue(this.newGlobalRef(t)),getLowerBounds:e("getLowerBounds","()[Ljava/lang/reflect/Type;"),getUpperBounds:e("getUpperBounds","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return un};var fn=null;I.prototype.javaLangReflectGenericArrayType=function(){if(fn===null){let t=this.findClass("java/lang/reflect/GenericArrayType");try{fn={handle:Ue(this.newGlobalRef(t)),getGenericComponentType:this.getMethodId(t,"getGenericComponentType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return fn};var pn=null;I.prototype.javaLangReflectParameterizedType=function(){if(pn===null){let t=this.findClass("java/lang/reflect/ParameterizedType");try{let e=this.getMethodId.bind(this,t);pn={handle:Ue(this.newGlobalRef(t)),getActualTypeArguments:e("getActualTypeArguments","()[Ljava/lang/reflect/Type;"),getRawType:e("getRawType","()Ljava/lang/reflect/Type;"),getOwnerType:e("getOwnerType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return pn};var hn=null;I.prototype.javaLangString=function(){if(hn===null){let t=this.findClass("java/lang/String");try{hn={handle:Ue(this.newGlobalRef(t))}}finally{this.deleteLocalRef(t)}}return hn};I.prototype.getClassName=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangClass().getName);try{return this.stringFromJni(e)}finally{this.deleteLocalRef(e)}};I.prototype.getObjectClassName=function(t){let e=this.getObjectClass(t);try{return this.getClassName(e)}finally{this.deleteLocalRef(e)}};I.prototype.getActualTypeArgument=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangReflectParameterizedType().getActualTypeArguments);if(this.throwIfExceptionPending(),!e.isNull())try{return this.getTypeNameFromFirstTypeElement(e)}finally{this.deleteLocalRef(e)}};I.prototype.getTypeNameFromFirstTypeElement=function(t){if(this.getArrayLength(t)>0){let n=this.getObjectArrayElement(t,0);try{return this.getTypeName(n)}finally{this.deleteLocalRef(n)}}else return"java.lang.Object"};I.prototype.getTypeName=function(t,e){let n=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle))return this.getArrayTypeName(t);if(this.isInstanceOf(t,this.javaLangReflectParameterizedType().handle)){let r=n(this.handle,t,this.javaLangReflectParameterizedType().getRawType);this.throwIfExceptionPending();let o;try{o=this.getTypeName(r)}finally{this.deleteLocalRef(r)}return e&&(o+="<"+this.getActualTypeArgument(t)+">"),o}else return this.isInstanceOf(t,this.javaLangReflectTypeVariable().handle)||this.isInstanceOf(t,this.javaLangReflectWildcardType().handle),"java.lang.Object"};I.prototype.getArrayTypeName=function(t){let e=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle)){let n=e(this.handle,t,this.javaLangReflectGenericArrayType().getGenericComponentType);this.throwIfExceptionPending();try{return"[L"+this.getTypeName(n)+";"}finally{this.deleteLocalRef(n)}}else return"[Ljava.lang.Object;"};I.prototype.stringFromJni=function(t){let e=this.getStringChars(t);if(e.isNull())throw new Error("Unable to access string");try{let n=this.getStringLength(t);return e.readUtf16String(n)}finally{this.releaseStringChars(t,e)}};var Gr=65542,Ze=Process.pointerSize,yn=Process.getCurrentThreadId(),Be=new Map,ot=new Map;function Le(t){let e=t.vm,n=null,r=null,o=null;function i(){let l=e.readPointer(),a={exceptions:"propagate"};n=new NativeFunction(l.add(4*Ze).readPointer(),"int32",["pointer","pointer","pointer"],a),r=new NativeFunction(l.add(5*Ze).readPointer(),"int32",["pointer"],a),o=new NativeFunction(l.add(6*Ze).readPointer(),"int32",["pointer","pointer","int32"],a)}this.handle=e,this.perform=function(l){let a=Process.getCurrentThreadId(),c=s(a);if(c!==null)return l(c);let d=this._tryGetEnv(),f=d!==null;f||(d=this.attachCurrentThread(),Be.set(a,!0)),this.link(a,d);try{return l(d)}finally{let p=a===yn;if(p||this.unlink(a),!f&&!p){let u=Be.get(a);Be.delete(a),u&&this.detachCurrentThread()}}},this.attachCurrentThread=function(){let l=Memory.alloc(Ze);return ye("VM::AttachCurrentThread",n(e,l,NULL)),new I(l.readPointer(),this)},this.detachCurrentThread=function(){ye("VM::DetachCurrentThread",r(e))},this.preventDetachDueToClassLoader=function(){let l=Process.getCurrentThreadId();Be.has(l)&&Be.set(l,!1)},this.getEnv=function(){let l=s(Process.getCurrentThreadId());if(l!==null)return l;let a=Memory.alloc(Ze),c=o(e,a,Gr);if(c===-2)throw new Error("Current thread is not attached to the Java VM; please move this code inside a Java.perform() callback");return ye("VM::GetEnv",c),new I(a.readPointer(),this)},this.tryGetEnv=function(){let l=s(Process.getCurrentThreadId());return l!==null?l:this._tryGetEnv()},this._tryGetEnv=function(){let l=this.tryGetEnvHandle(Gr);return l===null?null:new I(l,this)},this.tryGetEnvHandle=function(l){let a=Memory.alloc(Ze);return o(e,a,l)!==0?null:a.readPointer()},this.makeHandleDestructor=function(l){return()=>{this.perform(a=>{a.deleteGlobalRef(l)})}},this.link=function(l,a){let c=ot.get(l);c===void 0?ot.set(l,[a,1]):c[1]++},this.unlink=function(l){let a=ot.get(l);a[1]===1?ot.delete(l):a[1]--};function s(l){let a=ot.get(l);return a===void 0?null:a[0]}i.call(this)}Le.dispose=function(t){Be.get(yn)===!0&&(Be.delete(yn),t.detachCurrentThread())};var va=4,N=Process.pointerSize,{readU32:Sa,readPointer:wa,writeU32:Ia,writePointer:xa}=NativePointer.prototype,Ca=1,Aa=8,Ta=16,Tt=256,Na=524288,La=2097152,ao=1073741824,ka=524288,Ma=134217728,$r=1048576,ja=2097152,Oa=268435456,Pa=268435456,Ra=0,Nn=3,Ln=5,Bn=ptr(1).not(),Fa=2147467263,Da=4294963200,Pt=17*N,Ua=18*N,lo=12,Ba=112,za=116,Va=0,En=56,Hr=4,Ja=8,Ga=10,$a=12,Ha=14,Za=28,Ka=36,Wa=0,qa=1,Qa=2,Ya=3,Xa=4,el=5,tl=6,nl=7,Zr=2147483648,rl=28,lt=3*N,ol=3*N,il=1,sl=1,co=ge(gl),al=ge(Ll),Se=ge(Ml),We=ge(jl),ll=ge(Ol),cl=ge(Jl),ut=ge(Dl),uo=ge(Ul),pe=ge(Bl),zn=ge(zl),dl=ge(Zl),ul=Process.arch==="ia32"?jc:Mc,ae={exceptions:"propagate"},it={},vn=null,Sn=null,fo=null,me=null,Vn=[],Nt=new Map,po=[],wn=null,Kr=0,Wr=!1,qr=!1,st=null,fl=[],In=null,xt=null;function X(){return vn===null&&(vn=pl()),vn}function pl(){let t=Process.enumerateModules().filter(u=>/^lib(art|dvm).so$/.test(u.name)).filter(u=>!/\/system\/fake-libs/.test(u.path));if(t.length===0)return null;let e=t[0],n=e.name.indexOf("art")!==-1?"art":"dalvik",r=n==="art",o={module:e,find(u){let{module:g}=this,m=g.findExportByName(u);return m===null&&(m=g.findSymbolByName(u)),m},flavor:n,addLocalReference:null};o.isApiLevel34OrApexEquivalent=r&&(o.find("_ZN3art7AppInfo29GetPrimaryApkReferenceProfileEv")!==null||o.find("_ZN3art6Thread15RunFlipFunctionEPS0_")!==null);let i=r?{functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],artInterpreterToCompiledCodeBridge:function(u){this.artInterpreterToCompiledCodeBridge=u},_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art17ReaderWriterMutex13ExclusiveLockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveLock","void",["pointer","pointer"]],_ZN3art17ReaderWriterMutex15ExclusiveUnlockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveUnlock","void",["pointer","pointer"]],_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],ae)},_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],ae)},_ZN3art9JavaVMExt12DecodeGlobalEPv:function(u){let g;pe()>=26?g=ul(u,["pointer","pointer"]):g=new NativeFunction(u,"pointer",["pointer","pointer"],ae),this["art::JavaVMExt::DecodeGlobal"]=function(m,E,w){return g(m,w)}},_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv:["art::JavaVMExt::DecodeGlobal","pointer",["pointer","pointer","pointer"]],_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZNK3art6Thread13DecodeJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZN3art10ThreadList10SuspendAllEPKcb:["art::ThreadList::SuspendAll","void",["pointer","pointer","bool"]],_ZN3art10ThreadList10SuspendAllEv:function(u){let g=new NativeFunction(u,"void",["pointer"],ae);this["art::ThreadList::SuspendAll"]=function(m,E,w){return g(m)}},_ZN3art10ThreadList9ResumeAllEv:["art::ThreadList::ResumeAll","void",["pointer"]],_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE:["art::ClassLinker::VisitClasses","void",["pointer","pointer"]],_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_:function(u){let g=new NativeFunction(u,"void",["pointer","pointer","pointer"],ae);this["art::ClassLinker::VisitClasses"]=function(m,E){g(m,E,NULL)}},_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE:["art::ClassLinker::VisitClassLoaders","void",["pointer","pointer"]],_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_:["art::gc::Heap::VisitObjects","void",["pointer","pointer","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:["art::gc::Heap::GetInstances","void",["pointer","pointer","pointer","int","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:function(u){let g=new NativeFunction(u,"void",["pointer","pointer","pointer","bool","int","pointer"],ae);this["art::gc::Heap::GetInstances"]=function(m,E,w,x,k){g(m,E,w,0,x,k)}},_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","uint","bool"]],_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","size_t","bool"]],_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb:["art::StackVisitor::WalkStack","void",["pointer","bool"]],_ZNK3art12StackVisitor9GetMethodEv:["art::StackVisitor::GetMethod","pointer",["pointer"]],_ZNK3art12StackVisitor16DescribeLocationEv:function(u){this["art::StackVisitor::DescribeLocation"]=At(u,["pointer"])},_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv:function(u){this["art::StackVisitor::GetCurrentQuickFrameInfo"]=Hl(u)},_ZN3art7Context6CreateEv:["art::Context::Create","pointer",[]],_ZN3art6Thread18GetLongJumpContextEv:["art::Thread::GetLongJumpContext","pointer",["pointer"]],_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE:function(u){this["art::mirror::Class::GetDescriptor"]=u},_ZN3art6mirror5Class11GetLocationEv:function(u){this["art::mirror::Class::GetLocation"]=At(u,["pointer"])},_ZN3art9ArtMethod12PrettyMethodEb:function(u){this["art::ArtMethod::PrettyMethod"]=At(u,["pointer","bool"])},_ZN3art12PrettyMethodEPNS_9ArtMethodEb:function(u){this["art::ArtMethod::PrettyMethodNullSafe"]=At(u,["pointer","bool"])},_ZN3art6Thread14CurrentFromGdbEv:["art::Thread::CurrentFromGdb","pointer",[]],_ZN3art6mirror6Object5CloneEPNS_6ThreadE:function(u){this["art::mirror::Object::Clone"]=new NativeFunction(u,"pointer",["pointer","pointer"],ae)},_ZN3art6mirror6Object5CloneEPNS_6ThreadEm:function(u){let g=new NativeFunction(u,"pointer",["pointer","pointer","pointer"],ae);this["art::mirror::Object::Clone"]=function(m,E){let w=NULL;return g(m,E,w)}},_ZN3art6mirror6Object5CloneEPNS_6ThreadEj:function(u){let g=new NativeFunction(u,"pointer",["pointer","pointer","uint"],ae);this["art::mirror::Object::Clone"]=function(m,E){return g(m,E,0)}},_ZN3art3Dbg14SetJdwpAllowedEb:["art::Dbg::SetJdwpAllowed","void",["bool"]],_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE:["art::Dbg::ConfigureJdwp","void",["pointer"]],_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv:["art::InternalDebuggerControlCallback::StartDebugger","void",["pointer"]],_ZN3art3Dbg9StartJdwpEv:["art::Dbg::StartJdwp","void",[]],_ZN3art3Dbg8GoActiveEv:["art::Dbg::GoActive","void",[]],_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE:["art::Dbg::RequestDeoptimization","void",["pointer"]],_ZN3art3Dbg20ManageDeoptimizationEv:["art::Dbg::ManageDeoptimization","void",[]],_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv:["art::Instrumentation::EnableDeoptimization","void",["pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc:["art::Instrumentation::DeoptimizeEverything","void",["pointer","pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv:function(u){let g=new NativeFunction(u,"void",["pointer"],ae);this["art::Instrumentation::DeoptimizeEverything"]=function(m,E){g(m)}},_ZN3art7Runtime19DeoptimizeBootImageEv:["art::Runtime::DeoptimizeBootImage","void",["pointer"]],_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE:["art::Instrumentation::Deoptimize","void",["pointer","pointer"]],_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID:["art::jni::JniIdManager::DecodeMethodId","pointer",["pointer","pointer"]],_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID:["art::jni::JniIdManager::DecodeFieldId","pointer",["pointer","pointer"]],_ZN3art11interpreter18GetNterpEntryPointEv:["art::interpreter::GetNterpEntryPoint","pointer",[]],_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi:["art::Monitor::TranslateLocation","void",["pointer","uint32","pointer","pointer"]]},variables:{_ZN3art3Dbg9gRegistryE:function(u){this.isJdwpStarted=()=>!u.readPointer().isNull()},_ZN3art3Dbg15gDebuggerActiveE:function(u){this.isDebuggerActive=()=>!!u.readU8()}},optionals:new Set(["artInterpreterToCompiledCodeBridge","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE","_ZN3art9JavaVMExt12DecodeGlobalEPv","_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv","_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject","_ZNK3art6Thread13DecodeJObjectEP8_jobject","_ZN3art10ThreadList10SuspendAllEPKcb","_ZN3art10ThreadList10SuspendAllEv","_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE","_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_","_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE","_ZN3art6mirror6Object5CloneEPNS_6ThreadE","_ZN3art6mirror6Object5CloneEPNS_6ThreadEm","_ZN3art6mirror6Object5CloneEPNS_6ThreadEj","_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE","_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb","_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb","_ZNK3art12StackVisitor9GetMethodEv","_ZNK3art12StackVisitor16DescribeLocationEv","_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv","_ZN3art7Context6CreateEv","_ZN3art6Thread18GetLongJumpContextEv","_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE","_ZN3art6mirror5Class11GetLocationEv","_ZN3art9ArtMethod12PrettyMethodEb","_ZN3art12PrettyMethodEPNS_9ArtMethodEb","_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE","_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv","_ZN3art3Dbg15gDebuggerActiveE","_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv","_ZN3art7Runtime19DeoptimizeBootImageEv","_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE","_ZN3art3Dbg9StartJdwpEv","_ZN3art3Dbg8GoActiveEv","_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE","_ZN3art3Dbg20ManageDeoptimizationEv","_ZN3art3Dbg9gRegistryE","_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID","_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID","_ZN3art11interpreter18GetNterpEntryPointEv","_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi"])}:{functions:{_Z20dvmDecodeIndirectRefP6ThreadP8_jobject:["dvmDecodeIndirectRef","pointer",["pointer","pointer"]],_Z15dvmUseJNIBridgeP6MethodPv:["dvmUseJNIBridge","void",["pointer","pointer"]],_Z20dvmHeapSourceGetBasev:["dvmHeapSourceGetBase","pointer",[]],_Z21dvmHeapSourceGetLimitv:["dvmHeapSourceGetLimit","pointer",[]],_Z16dvmIsValidObjectPK6Object:["dvmIsValidObject","uint8",["pointer"]],JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]]},variables:{gDvmJni:function(u){this.gDvmJni=u},gDvm:function(u){this.gDvm=u}}},{functions:s={},variables:l={},optionals:a=new Set}=i,c=[];for(let[u,g]of Object.entries(s)){let m=o.find(u);m!==null?typeof g=="function"?g.call(o,m):o[g[0]]=new NativeFunction(m,g[1],g[2],ae):a.has(u)||c.push(u)}for(let[u,g]of Object.entries(l)){let m=o.find(u);m!==null?g.call(o,m):a.has(u)||c.push(u)}if(c.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+c.join(", "));let d=Memory.alloc(N),f=Memory.alloc(va);if(ye("JNI_GetCreatedJavaVMs",o.JNI_GetCreatedJavaVMs(d,1,f)),f.readInt()===0)return null;if(o.vm=d.readPointer(),r){let u=pe(),g;u>=27?g=33554432:u>=24?g=16777216:g=0,o.kAccCompileDontBother=g;let m=o.vm.add(N).readPointer();o.artRuntime=m;let E=co(o),w=E.offset,x=w.instrumentation;o.artInstrumentation=x!==null?m.add(x):null,zn()>=36e7&&o.artInstrumentation!=null&&(o.artInstrumentation=o.artInstrumentation.readPointer()),o.artHeap=m.add(w.heap).readPointer(),o.artThreadList=m.add(w.threadList).readPointer();let M=m.add(w.classLinker).readPointer(),U=kl(m,E).offset,z=M.add(U.quickResolutionTrampoline).readPointer(),R=M.add(U.quickImtConflictTrampoline).readPointer(),F=M.add(U.quickGenericJniTrampoline).readPointer(),A=M.add(U.quickToInterpreterBridgeTrampoline).readPointer();o.artClassLinker={address:M,quickResolutionTrampoline:z,quickImtConflictTrampoline:R,quickGenericJniTrampoline:F,quickToInterpreterBridgeTrampoline:A};let j=new Le(o);o.artQuickGenericJniTrampoline=xn(F,j),o.artQuickToInterpreterBridge=xn(A,j),o.artQuickResolutionTrampoline=xn(z,j),o["art::JavaVMExt::AddGlobalRef"]===void 0&&(o["art::JavaVMExt::AddGlobalRef"]=Cc(o)),o["art::JavaVMExt::DecodeGlobal"]===void 0&&(o["art::JavaVMExt::DecodeGlobal"]=Ac(o)),o["art::ArtMethod::PrettyMethod"]===void 0&&(o["art::ArtMethod::PrettyMethod"]=o["art::ArtMethod::PrettyMethodNullSafe"]),o["art::interpreter::GetNterpEntryPoint"]!==void 0?o.artNterpEntryPoint=o["art::interpreter::GetNterpEntryPoint"]():o.artNterpEntryPoint=o.find("ExecuteNterpImpl"),me=ql(o,j),kc(o);let B=null;Object.defineProperty(o,"jvmti",{get(){return B===null&&(B=[hl(j,this.artRuntime)]),B[0]}})}let p=e.enumerateImports().filter(u=>u.name.indexOf("_Z")===0).reduce((u,g)=>(u[g.name]=g.address,u),{});return o.$new=new NativeFunction(p._Znwm||p._Znwj,"pointer",["ulong"],ae),o.$delete=new NativeFunction(p._ZdlPv,"void",["pointer"],ae),fo=r?Rn:Fn,o}function hl(t,e){let n=null;return t.perform(()=>{let r=X().find("_ZN3art7Runtime18EnsurePluginLoadedEPKcPNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE");if(r===null)return;let o=new NativeFunction(r,"bool",["pointer","pointer","pointer"]),i=Memory.alloc(N);if(!o(e,Memory.allocUtf8String("libopenjdkjvmti.so"),i))return;let l=Et.v1_2|1073741824,a=t.tryGetEnvHandle(l);if(a===null)return;n=new je(a,t);let c=Memory.alloc(8);c.writeU64(vt.canTagObjects),n.addCapabilities(c)!==0&&(n=null)}),n}function ml(t,e){X().flavor==="art"&&t.getClassName(e)}function _l(t){return{offset:N===4?{globalsLock:32,globals:72}:{globalsLock:64,globals:112}}}function gl(t){let e=t.vm,n=t.artRuntime,r=N===4?200:384,o=r+100*N,i=pe(),s=uo(),{isApiLevel34OrApexEquivalent:l}=t,a=null;for(let d=r;d!==o;d+=N)if(n.add(d).readPointer().equals(e)){let p,u=null;i>=33||s==="Tiramisu"||l?(p=[d-4*N],u=d-N):i>=30||s==="R"?(p=[d-3*N,d-4*N],u=d-N):i>=29?p=[d-2*N]:i>=27?p=[d-lt-3*N]:p=[d-lt-2*N];for(let g of p){let m=g-N,E=m-N,w;l?w=E-9*N:i>=24?w=E-8*N:i>=23?w=E-7*N:w=E-4*N;let x={offset:{heap:w,threadList:E,internTable:m,classLinker:g,jniIdManager:u}};if(ho(n,x)!==null){a=x;break}}break}if(a===null)throw new Error("Unable to determine Runtime field offsets");let c=zn()>=36e7;return a.offset.instrumentation=c?wl(t):bl(t),a.offset.jniIdsIndirection=Al(t),a}var yl={ia32:Qr,x64:Qr,arm:El,arm64:vl};function bl(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:Oe(e,yl[Process.arch],{limit:30})}function Qr(t){if(t.mnemonic!=="lea")return null;let e=t.operands[1].value.disp;return e<256||e>1024?null:e}function El(t){if(t.mnemonic!=="add.w")return null;let e=t.operands;if(e.length!==3)return null;let n=e[2];return n.type!=="imm"?null:n.value}function vl(t){if(t.mnemonic!=="add")return null;let e=t.operands;if(e.length!==3||e[0].value==="sp"||e[1].value==="sp")return null;let n=e[2];if(n.type!=="imm")return null;let r=n.value.valueOf();return r<256||r>1024?null:r}var Sl={ia32:Yr,x64:Yr,arm:Il,arm64:xl};function wl(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:Oe(e,Sl[Process.arch],{limit:30})}function Yr(t){if(t.mnemonic!=="mov")return null;let e=t.operands;if(e[0].value!=="rax")return null;let r=e[1];if(r.type!=="mem")return null;let o=r.value;if(o.base!=="rdi")return null;let i=o.disp;return i<256||i>1024?null:i}function Il(t){return null}function xl(t){if(t.mnemonic!=="ldr")return null;let e=t.operands;if(e[0].value==="x0")return null;let n=e[1].value;if(n.base!=="x0")return null;let r=n.disp;return r<256||r>1024?null:r}var Cl={ia32:Xr,x64:Xr,arm:Tl,arm64:Nl};function Al(t){let e=t.find("_ZN3art7Runtime12SetJniIdTypeENS_9JniIdTypeE");if(e===null)return null;let n=Oe(e,Cl[Process.arch],{limit:20});if(n===null)throw new Error("Unable to determine Runtime.jni_ids_indirection_ offset");return n}function Xr(t){return t.mnemonic==="cmp"?t.operands[0].value.disp:null}function Tl(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function Nl(t,e){if(e===null)return null;let{mnemonic:n}=t,{mnemonic:r}=e;return n==="cmp"&&r==="ldr"||n==="bl"&&r==="str"?e.operands[1].value.disp:null}function Ll(){let e={"4-21":136,"4-22":136,"4-23":172,"4-24":196,"4-25":196,"4-26":196,"4-27":196,"4-28":212,"4-29":172,"4-30":180,"4-31":180,"8-21":224,"8-22":224,"8-23":296,"8-24":344,"8-25":344,"8-26":352,"8-27":352,"8-28":392,"8-29":328,"8-30":336,"8-31":336}[`${N}-${pe()}`];if(e===void 0)throw new Error("Unable to determine Instrumentation field offsets");return{offset:{forcedInterpretOnly:4,deoptimizationEnabled:e}}}function kl(t,e){let n=ho(t,e);if(n===null)throw new Error("Unable to determine ClassLinker field offsets");return n}function ho(t,e){if(Sn!==null)return Sn;let{classLinker:n,internTable:r}=e.offset,o=t.add(n).readPointer(),i=t.add(r).readPointer(),s=N===4?100:200,l=s+100*N,a=pe(),c=null;for(let d=s;d!==l;d+=N)if(o.add(d).readPointer().equals(i)){let p;a>=30||uo()==="R"?p=6:a>=29?p=4:a>=23?p=3:p=5;let u=d+p*N,g;a>=23?g=u-2*N:g=u-3*N,c={offset:{quickResolutionTrampoline:g,quickImtConflictTrampoline:u-N,quickGenericJniTrampoline:u,quickToInterpreterBridgeTrampoline:u+N}};break}return c!==null&&(Sn=c),c}function Jn(t){let n=null;return t.perform(r=>{let o=Rt(t),i=Se(t),s={artArrayLengthSize:4,artArrayEntrySize:o.size,artArrayMax:50},l={artArrayLengthSize:N,artArrayEntrySize:i.size,artArrayMax:100},a=(p,u,g)=>{let m=p.add(u).readPointer();if(m.isNull())return null;let E=g===4?m.readU32():m.readU64().valueOf();return E<=0?null:{length:E,data:m.add(g)}},c=(p,u,g,m)=>{try{let E=a(p,u,m.artArrayLengthSize);if(E===null)return!1;let w=Math.min(E.length,m.artArrayMax);for(let x=0;x!==w;x++)if(E.data.add(x*m.artArrayEntrySize).equals(g))return!0}catch{}return!1},d=r.findClass("java/lang/Thread"),f=r.newGlobalRef(d);try{let p;Ce(t,r,F=>{p=X()["art::JavaVMExt::DecodeGlobal"](t,F,f)});let u=no(r.getFieldId(f,"name","Ljava/lang/String;")),g=no(r.getStaticFieldId(f,"MAX_PRIORITY","I")),m=-1,E=-1;for(let F=0;F!==256;F+=4)m===-1&&c(p,F,g,s)&&(m=F),E===-1&&c(p,F,u,s)&&(E=F);if(E===-1||m===-1)throw new Error("Unable to find fields in java/lang/Thread; please file a bug");let w=E!==m?m:0,x=E,k=-1,M=qn(r.getMethodId(f,"getName","()Ljava/lang/String;"));for(let F=0;F!==256;F+=4)k===-1&&c(p,F,M,l)&&(k=F);if(k===-1)throw new Error("Unable to find methods in java/lang/Thread; please file a bug");let U=-1,R=a(p,k,l.artArrayLengthSize).length;for(let F=k;F!==256;F+=4)if(p.add(F).readU16()===R){U=F;break}if(U===-1)throw new Error("Unable to find copied methods in java/lang/Thread; please file a bug");n={offset:{ifields:x,methods:k,sfields:w,copiedMethodsOffset:U}}}finally{r.deleteLocalRef(d),r.deleteGlobalRef(f)}}),n}function Ml(t){let e=X(),n;return t.perform(r=>{let o=r.findClass("android/os/Process"),i=qn(r.getStaticMethodId(o,"getElapsedCpuTime","()J"));r.deleteLocalRef(o);let s=Process.getModuleByName("libandroid_runtime.so"),l=s.base,a=l.add(s.size),c=pe(),d=c<=21?8:N,f=Ca|Aa|Ta|Tt,p=~(ao|Oa|ja)>>>0,u=null,g=null,m=2;for(let x=0;x!==64&&m!==0;x+=4){let k=i.add(x);if(u===null){let M=k.readPointer();M.compare(l)>=0&&M.compare(a)<0&&(u=x,m--)}g===null&&(k.readU32()&p)===f&&(g=x,m--)}if(m!==0)throw new Error("Unable to determine ArtMethod field offsets");let E=u+d;n={size:c<=21?E+32:E+N,offset:{jniCode:u,quickCode:E,accessFlags:g}},"artInterpreterToCompiledCodeBridge"in e&&(n.offset.interpreterCode=u-d)}),n}function Rt(t){let e=pe();return e>=23?{size:16,offset:{accessFlags:4}}:e>=21?{size:24,offset:{accessFlags:12}}:null}function jl(t){let e=pe(),n;return t.perform(r=>{let o=Ft(r),i=r.handle,s=null,l=null,a=null,c=null,d=null,f=null;for(let p=144;p!==256;p+=N)if(o.add(p).readPointer().equals(i)){l=p-6*N,d=p-4*N,f=p+2*N,e<=22&&(l-=N,s=l-N-9*8-3*4,a=p+6*N,d-=N,f-=N),c=p+9*N,e<=22&&(c+=2*N+4,N===8&&(c+=4)),e>=23&&(c+=N);break}if(c===null)throw new Error("Unable to determine ArtThread field offsets");n={offset:{isExceptionReportedToInstrumentation:s,exception:l,throwLocation:a,topHandleScope:c,managedStack:d,self:f}}}),n}function Ol(){return pe()>=23?{offset:{topQuickFrame:0,link:N}}:{offset:{topQuickFrame:2*N,link:0}}}var Pl={ia32:eo,x64:eo,arm:Rl,arm64:Fl};function xn(t,e){let n;return e.perform(r=>{let o=Ft(r),i=Pl[Process.arch],s=Instruction.parse(t),l=i(s);l!==null?n=o.add(l).readPointer():n=t}),n}function eo(t){return t.mnemonic==="jmp"?t.operands[0].value.disp:null}function Rl(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function Fl(t){return t.mnemonic==="ldr"?t.operands[1].value.disp:null}function Ft(t){return t.handle.add(N).readPointer()}function Dl(){return Gn("ro.build.version.release")}function Ul(){return Gn("ro.build.version.codename")}function Bl(){return parseInt(Gn("ro.build.version.sdk"),10)}function zl(){try{let t=File.readAllText("/proc/self/mountinfo"),e=null,n=new Map;for(let o of t.trimEnd().split(`
`)){let i=o.split(" "),s=i[4];if(!s.startsWith("/apex/com.android.art"))continue;let l=i[10];s.includes("@")?n.set(l,s.split("@")[1]):e=l}let r=n.get(e);return r!==void 0?parseInt(r):to()}catch{return to()}}function to(){return pe()*1e7}var Cn=null,Vl=92;function Gn(t){Cn===null&&(Cn=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("__system_property_get"),"int",["pointer","pointer"],ae));let e=Memory.alloc(Vl);return Cn(Memory.allocUtf8String(t),e),e.readUtf8String()}function Ce(t,e,n){let r=cl(t,e),o=Ft(e).toString();if(it[o]=n,r(e.handle),it[o]!==void 0)throw delete it[o],new Error("Unable to perform state transition; please file a bug")}function Jl(t,e){let n=new NativeCallback(Gl,"void",["pointer"]);return go(t,e,n)}function Gl(t){let e=t.toString(),n=it[e];delete it[e],n(t)}function $n(t){let e=X(),n=e.artThreadList;e["art::ThreadList::SuspendAll"](n,Memory.allocUtf8String("frida"),!1?1:0);try{t()}finally{e["art::ThreadList::ResumeAll"](n)}}var kn=class{constructor(e){let n=Memory.alloc(4*N),r=n.add(N);n.writePointer(r);let o=new NativeCallback((i,s)=>e(s)===!0?1:0,"bool",["pointer","pointer"]);r.add(2*N).writePointer(o),this.handle=n,this._onVisit=o}};function Hn(t){return X()["art::ClassLinker::VisitClasses"]instanceof NativeFunction?new kn(t):new NativeCallback(n=>t(n)===!0?1:0,"bool",["pointer","pointer"])}var Mn=class{constructor(e){let n=Memory.alloc(4*N),r=n.add(N);n.writePointer(r);let o=new NativeCallback((i,s)=>{e(s)},"void",["pointer","pointer"]);r.add(2*N).writePointer(o),this.handle=n,this._onVisit=o}};function Zn(t){return new Mn(t)}var $l={"include-inlined-frames":0,"skip-inlined-frames":1},jn=class{constructor(e,n,r,o=0,i=!0){let s=X(),l=512,a=3*N,c=Memory.alloc(l+a);s["art::StackVisitor::StackVisitor"](c,e,n,$l[r],o,i?1:0);let d=c.add(l);c.writePointer(d);let f=new NativeCallback(this._visitFrame.bind(this),"bool",["pointer"]);d.add(2*N).writePointer(f),this.handle=c,this._onVisitFrame=f;let p=c.add(N===4?12:24);this._curShadowFrame=p,this._curQuickFrame=p.add(N),this._curQuickFramePc=p.add(2*N),this._curOatQuickMethodHeader=p.add(3*N),this._getMethodImpl=s["art::StackVisitor::GetMethod"],this._descLocImpl=s["art::StackVisitor::DescribeLocation"],this._getCQFIImpl=s["art::StackVisitor::GetCurrentQuickFrameInfo"]}walkStack(e=!1){X()["art::StackVisitor::WalkStack"](this.handle,e?1:0)}_visitFrame(){return this.visitFrame()?1:0}visitFrame(){throw new Error("Subclass must implement visitFrame")}getMethod(){let e=this._getMethodImpl(this.handle);return e.isNull()?null:new Lt(e)}getCurrentQuickFramePc(){return this._curQuickFramePc.readPointer()}getCurrentQuickFrame(){return this._curQuickFrame.readPointer()}getCurrentShadowFrame(){return this._curShadowFrame.readPointer()}describeLocation(){let e=new jt;return this._descLocImpl(e,this.handle),e.disposeToString()}getCurrentOatQuickMethodHeader(){return this._curOatQuickMethodHeader.readPointer()}getCurrentQuickFrameInfo(){return this._getCQFIImpl(this.handle)}},Lt=class{constructor(e){this.handle=e}prettyMethod(e=!0){let n=new jt;return X()["art::ArtMethod::PrettyMethod"](n,this.handle,e?1:0),n.disposeToString()}toString(){return`ArtMethod(handle=${this.handle})`}};function Hl(t){return function(e){let n=Memory.alloc(12);return dl(t)(n,e),{frameSizeInBytes:n.readU32(),coreSpillMask:n.add(4).readU32(),fpSpillMask:n.add(8).readU32()}}}function Zl(t){let e=NULL;switch(Process.arch){case"ia32":e=Ke(32,n=>{n.putMovRegRegOffsetPtr("ecx","esp",4),n.putMovRegRegOffsetPtr("edx","esp",8),n.putCallAddressWithArguments(t,["ecx","edx"]),n.putMovRegReg("esp","ebp"),n.putPopReg("ebp"),n.putRet()});break;case"x64":e=Ke(32,n=>{n.putPushReg("rdi"),n.putCallAddressWithArguments(t,["rsi"]),n.putPopReg("rdi"),n.putMovRegPtrReg("rdi","rax"),n.putMovRegOffsetPtrReg("rdi",8,"edx"),n.putRet()});break;case"arm":e=Ke(16,n=>{n.putCallAddressWithArguments(t,["r0","r1"]),n.putPopRegs(["r0","lr"]),n.putMovRegReg("pc","lr")});break;case"arm64":e=Ke(64,n=>{n.putPushRegReg("x0","lr"),n.putCallAddressWithArguments(t,["x1"]),n.putPopRegReg("x2","lr"),n.putStrRegRegOffset("x0","x2",0),n.putStrRegRegOffset("w1","x2",8),n.putRet()});break}return new NativeFunction(e,"void",["pointer","pointer"],ae)}var Kl={ia32:globalThis.X86Relocator,x64:globalThis.X86Relocator,arm:globalThis.ThumbRelocator,arm64:globalThis.Arm64Relocator},On={ia32:globalThis.X86Writer,x64:globalThis.X86Writer,arm:globalThis.ThumbWriter,arm64:globalThis.Arm64Writer};function Ke(t,e){wn===null&&(wn=Memory.alloc(Process.pageSize));let n=wn.add(Kr),r=Process.arch,o=On[r];return Memory.patchCode(n,t,i=>{let s=new o(i,{pc:n});if(e(s),s.flush(),s.offset>t)throw new Error(`Wrote ${s.offset}, exceeding maximum of ${t}`)}),Kr+=t,r==="arm"?n.or(1):n}function Wl(t,e){Ql(e),nc(e)}function ql(t,e){let n=We(e).offset,r=ll().offset,o=`
#include <gum/guminterceptor.h>

extern GMutex lock;
extern GHashTable * methods;
extern GHashTable * replacements;
extern gpointer last_seen_art_method;

extern gpointer get_oat_quick_method_header_impl (gpointer method, gpointer pc);

void
init (void)
{
  g_mutex_init (&lock);
  methods = g_hash_table_new_full (NULL, NULL, NULL, NULL);
  replacements = g_hash_table_new_full (NULL, NULL, NULL, NULL);
}

void
finalize (void)
{
  g_hash_table_unref (replacements);
  g_hash_table_unref (methods);
  g_mutex_clear (&lock);
}

gboolean
is_replacement_method (gpointer method)
{
  gboolean is_replacement;

  g_mutex_lock (&lock);

  is_replacement = g_hash_table_contains (replacements, method);

  g_mutex_unlock (&lock);

  return is_replacement;
}

gpointer
get_replacement_method (gpointer original_method)
{
  gpointer replacement_method;

  g_mutex_lock (&lock);

  replacement_method = g_hash_table_lookup (methods, original_method);

  g_mutex_unlock (&lock);

  return replacement_method;
}

void
set_replacement_method (gpointer original_method,
                        gpointer replacement_method)
{
  g_mutex_lock (&lock);

  g_hash_table_insert (methods, original_method, replacement_method);
  g_hash_table_insert (replacements, replacement_method, original_method);

  g_mutex_unlock (&lock);
}

void
synchronize_replacement_methods (guint quick_code_offset,
                                 void * nterp_entrypoint,
                                 void * quick_to_interpreter_bridge)
{
  GHashTableIter iter;
  gpointer hooked_method, replacement_method;

  g_mutex_lock (&lock);

  g_hash_table_iter_init (&iter, methods);
  while (g_hash_table_iter_next (&iter, &hooked_method, &replacement_method))
  {
    void ** quick_code;

    *((uint32_t *) replacement_method) = *((uint32_t *) hooked_method);

    quick_code = hooked_method + quick_code_offset;
    if (*quick_code == nterp_entrypoint)
      *quick_code = quick_to_interpreter_bridge;
  }

  g_mutex_unlock (&lock);
}

void
delete_replacement_method (gpointer original_method)
{
  gpointer replacement_method;

  g_mutex_lock (&lock);

  replacement_method = g_hash_table_lookup (methods, original_method);
  if (replacement_method != NULL)
  {
    g_hash_table_remove (methods, original_method);
    g_hash_table_remove (replacements, replacement_method);
  }

  g_mutex_unlock (&lock);
}

gpointer
translate_method (gpointer method)
{
  gpointer translated_method;

  g_mutex_lock (&lock);

  translated_method = g_hash_table_lookup (replacements, method);

  g_mutex_unlock (&lock);

  return (translated_method != NULL) ? translated_method : method;
}

gpointer
find_replacement_method_from_quick_code (gpointer method,
                                         gpointer thread)
{
  gpointer replacement_method;
  gpointer managed_stack;
  gpointer top_quick_frame;
  gpointer link_managed_stack;
  gpointer * link_top_quick_frame;

  replacement_method = get_replacement_method (method);
  if (replacement_method == NULL)
    return NULL;

  /*
   * Stack check.
   *
   * Return NULL to indicate that the original method should be invoked, otherwise
   * return a pointer to the replacement ArtMethod.
   *
   * If the caller is our own JNI replacement stub, then a stack transition must
   * have been pushed onto the current thread's linked list.
   *
   * Therefore, we invoke the original method if the following conditions are met:
   *   1- The current managed stack is empty.
   *   2- The ArtMethod * inside the linked managed stack's top quick frame is the
   *      same as our replacement.
   */
  managed_stack = thread + ${n.managedStack};
  top_quick_frame = *((gpointer *) (managed_stack + ${r.topQuickFrame}));
  if (top_quick_frame != NULL)
    return replacement_method;

  link_managed_stack = *((gpointer *) (managed_stack + ${r.link}));
  if (link_managed_stack == NULL)
    return replacement_method;

  link_top_quick_frame = GSIZE_TO_POINTER (*((gsize *) (link_managed_stack + ${r.topQuickFrame})) & ~((gsize) 1));
  if (link_top_quick_frame == NULL || *link_top_quick_frame != replacement_method)
    return replacement_method;

  return NULL;
}

void
on_interpreter_do_call (GumInvocationContext * ic)
{
  gpointer method, replacement_method;

  method = gum_invocation_context_get_nth_argument (ic, 0);

  replacement_method = get_replacement_method (method);
  if (replacement_method != NULL)
    gum_invocation_context_replace_nth_argument (ic, 0, replacement_method);
}

gpointer
on_art_method_get_oat_quick_method_header (gpointer method,
                                           gpointer pc)
{
  if (is_replacement_method (method))
    return NULL;

  return get_oat_quick_method_header_impl (method, pc);
}

void
on_art_method_pretty_method (GumInvocationContext * ic)
{
  const guint this_arg_index = ${Process.arch==="arm64"?0:1};
  gpointer method;

  method = gum_invocation_context_get_nth_argument (ic, this_arg_index);
  if (method == NULL)
    gum_invocation_context_replace_nth_argument (ic, this_arg_index, last_seen_art_method);
  else
    last_seen_art_method = method;
}

void
on_leave_gc_concurrent_copying_copying_phase (GumInvocationContext * ic)
{
  GHashTableIter iter;
  gpointer hooked_method, replacement_method;

  g_mutex_lock (&lock);

  g_hash_table_iter_init (&iter, methods);
  while (g_hash_table_iter_next (&iter, &hooked_method, &replacement_method))
    *((uint32_t *) replacement_method) = *((uint32_t *) hooked_method);

  g_mutex_unlock (&lock);
}
`,i=8,s=N,l=N,a=N,d=Memory.alloc(i+s+l+a),f=d.add(i),p=f.add(s),u=p.add(l),g=t.find(N===4?"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEj":"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEm"),m=new CModule(o,{lock:d,methods:f,replacements:p,last_seen_art_method:u,get_oat_quick_method_header_impl:g??ptr("0xdeadbeef")}),E={exceptions:"propagate",scheduling:"exclusive"};return{handle:m,replacedMethods:{isReplacement:new NativeFunction(m.is_replacement_method,"bool",["pointer"],E),get:new NativeFunction(m.get_replacement_method,"pointer",["pointer"],E),set:new NativeFunction(m.set_replacement_method,"void",["pointer","pointer"],E),synchronize:new NativeFunction(m.synchronize_replacement_methods,"void",["uint","pointer","pointer"],E),delete:new NativeFunction(m.delete_replacement_method,"void",["pointer"],E),translate:new NativeFunction(m.translate_method,"pointer",["pointer"],E),findReplacementFromQuickCode:m.find_replacement_method_from_quick_code},getOatQuickMethodHeaderImpl:g,hooks:{Interpreter:{doCall:m.on_interpreter_do_call},ArtMethod:{getOatQuickMethodHeader:m.on_art_method_get_oat_quick_method_header,prettyMethod:m.on_art_method_pretty_method},Gc:{copyingPhase:{onLeave:m.on_leave_gc_concurrent_copying_copying_phase},runFlip:{onEnter:m.on_leave_gc_concurrent_copying_copying_phase}}}}}function Ql(t){qr||(qr=!0,Yl(t),Xl(),ec(),tc())}function Yl(t){let e=X();[e.artQuickGenericJniTrampoline,e.artQuickToInterpreterBridge,e.artQuickResolutionTrampoline].forEach(r=>{Memory.protect(r,32,"rwx");let o=new Mt(r);o.activate(t),po.push(o)})}function Xl(){let t=X(),e=pe(),{isApiLevel34OrApexEquivalent:n}=t,r;if(e<=22)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_6mirror9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(e<=33&&!n)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(n)r=/^_ZN3art11interpreter6DoCallILb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtbPNS_6JValueE$/;else throw new Error("Unable to find method invocation in ART; please file a bug");let o=t.module,i=[...o.enumerateExports(),...o.enumerateSymbols()].filter(s=>r.test(s.name));if(i.length===0)throw new Error("Unable to find method invocation in ART; please file a bug");for(let s of i)Interceptor.attach(s.address,me.hooks.Interpreter.doCall)}function ec(){let t=X(),n=t.module.findSymbolByName("_ZN3art2gc4Heap22CollectGarbageInternalENS0_9collector6GcTypeENS0_7GcCauseEbj");if(n===null)return;let{artNterpEntryPoint:r,artQuickToInterpreterBridge:o}=t,i=Se(t.vm).offset.quickCode;Interceptor.attach(n,{onLeave(){me.replacedMethods.synchronize(i,r,o)}})}function tc(){let t=[["_ZN3art11ClassLinker26VisiblyInitializedCallback22MarkVisiblyInitializedEPNS_6ThreadE","e90340f8 : ff0ff0ff"],["_ZN3art11ClassLinker26VisiblyInitializedCallback29AdjustThreadVisibilityCounterEPNS_6ThreadEl","7f0f00f9 : 1ffcffff"]],e=X(),n=e.module;for(let[r,o]of t){let i=n.findSymbolByName(r);if(i===null)continue;let s=Memory.scanSync(i,8192,o);if(s.length===0)return;let{artNterpEntryPoint:l,artQuickToInterpreterBridge:a}=e,c=Se(e.vm).offset.quickCode;Interceptor.attach(s[0].address,function(){me.replacedMethods.synchronize(c,l,a)});return}}function nc(t){if(Wr)return;if(Wr=!0,!oc()){let{getOatQuickMethodHeaderImpl:i}=me;if(i===null)return;try{Interceptor.replace(i,me.hooks.ArtMethod.getOatQuickMethodHeader)}catch{}}let e=pe(),n=null,r=X();e>28?n=r.find("_ZN3art2gc9collector17ConcurrentCopying12CopyingPhaseEv"):e>22&&(n=r.find("_ZN3art2gc9collector17ConcurrentCopying12MarkingPhaseEv")),n!==null&&Interceptor.attach(n,me.hooks.Gc.copyingPhase);let o=null;o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_"),o===null&&(o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_b")),o!==null&&Interceptor.attach(o,me.hooks.Gc.runFlip)}var rc={arm:{signatures:[{pattern:["b0 68","01 30","0c d0","1b 98",":","c0 ff","c0 ff","00 ff","00 2f"],validateMatch:An},{pattern:["d8 f8 08 00","01 30","0c d0","1b 98",":","f0 ff ff 0f","ff ff","00 ff","00 2f"],validateMatch:An},{pattern:["b0 68","01 30","40 f0 c3 80","00 25",":","c0 ff","c0 ff","c0 fb 00 d0","ff f8"],validateMatch:An}],instrument:sc},arm64:{signatures:[{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","88 39 00 f0",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 00 00 9f"],offset:1,validateMatch:Tn},{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","00 0e 40 f9",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 fc ff ff"],offset:1,validateMatch:Tn},{pattern:["0a 40 b9","1f 05 00 31","01 34 00 54","e0 03 1f aa",":","fc ff ff","1f fc ff ff","1f 00 00 ff","e0 ff ff ff"],offset:1,validateMatch:Tn}],instrument:ac}};function An({address:t,size:e}){let n=Instruction.parse(t.or(1)),[r,o]=n.operands,i=o.value.base,s=r.value,l=Instruction.parse(n.next.add(2)),a=ptr(l.operands[0].value),c=l.address.add(l.size),d,f;return l.mnemonic==="beq"?(d=c,f=a):(d=a,f=c),Oe(d.or(1),p,{limit:3});function p(u){let{mnemonic:g}=u;if(!(g==="ldr"||g==="ldr.w"))return null;let{base:m,disp:E}=u.operands[1].value;return m===i&&E===20?{methodReg:i,scratchReg:s,target:{whenTrue:a,whenRegularMethod:d,whenRuntimeMethod:f}}:null}}function Tn({address:t,size:e}){let[n,r]=Instruction.parse(t).operands,o=r.value.base,i="x"+n.value.substring(1),s=Instruction.parse(t.add(8)),l=ptr(s.operands[0].value),a=t.add(12),c,d;return s.mnemonic==="b.eq"?(c=a,d=l):(c=l,d=a),Oe(c,f,{limit:3});function f(p){if(p.mnemonic!=="ldr")return null;let{base:u,disp:g}=p.operands[1].value;return u===o&&g===24?{methodReg:o,scratchReg:i,target:{whenTrue:l,whenRegularMethod:c,whenRuntimeMethod:d}}:null}}function oc(){if(pe()<31)return!1;let t=rc[Process.arch];if(t===void 0)return!1;let e=t.signatures.map(({pattern:r,offset:o=0,validateMatch:i=ic})=>({pattern:new MatchPattern(r.join("")),offset:o,validateMatch:i})),n=[];for(let{base:r,size:o}of X().module.enumerateRanges("--x"))for(let{pattern:i,offset:s,validateMatch:l}of e){let a=Memory.scanSync(r,o,i).map(({address:c,size:d})=>({address:c.sub(s),size:d+s})).filter(c=>{let d=l(c);return d===null?!1:(c.validationResult=d,!0)});n.push(...a)}return n.length===0?!1:(n.forEach(t.instrument),!0)}function ic(){return{}}var kt=class{constructor(e,n,r){this.address=e,this.size=n,this.originalCode=e.readByteArray(n),this.trampoline=r}revert(){Memory.patchCode(this.address,this.size,e=>{e.writeByteArray(this.originalCode)})}};function sc({address:t,size:e,validationResult:n}){let{methodReg:r,target:o}=n,i=Memory.alloc(Process.pageSize),s=e;Memory.patchCode(i,256,l=>{let a=new ThumbWriter(l,{pc:i}),c=new ThumbRelocator(t,a);for(let g=0;g!==2;g++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=[45,237,16,10];a.putBytes(d);let f=["r0","r1","r2","r3"];a.putPushRegs(f),a.putCallAddressWithArguments(me.replacedMethods.isReplacement,[r]),a.putCmpRegImm("r0",0),a.putPopRegs(f);let p=[189,236,16,10];a.putBytes(p),a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),c.readOne();let u=c.input.address.equals(o.whenRegularMethod);for(a.putLabel(u?"regular_method":"runtime_or_replacement_method"),c.writeOne();s<10;){let g=c.readOne();if(g===0){s=10;break}s=g}c.writeAll(),a.putBranchAddress(t.add(s+1)),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(o.whenTrue),a.flush()}),Vn.push(new kt(t,s,i)),Memory.patchCode(t,s,l=>{let a=new ThumbWriter(l,{pc:t});a.putLdrRegAddress("pc",i.or(1)),a.flush()})}function ac({address:t,size:e,validationResult:n}){let{methodReg:r,scratchReg:o,target:i}=n,s=Memory.alloc(Process.pageSize);Memory.patchCode(s,256,l=>{let a=new Arm64Writer(l,{pc:s}),c=new Arm64Relocator(t,a);for(let g=0;g!==2;g++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=["d0","d1","d2","d3","d4","d5","d6","d7","x0","x1","x2","x3","x4","x5","x6","x7","x8","x9","x10","x11","x12","x13","x14","x15","x16","x17"],f=d.length;for(let g=0;g!==f;g+=2)a.putPushRegReg(d[g],d[g+1]);a.putCallAddressWithArguments(me.replacedMethods.isReplacement,[r]),a.putCmpRegReg("x0","xzr");for(let g=f-2;g>=0;g-=2)a.putPopRegReg(d[g],d[g+1]);a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),c.readOne();let p=c.input,u=p.address.equals(i.whenRegularMethod);a.putLabel(u?"regular_method":"runtime_or_replacement_method"),c.writeOne(),a.putBranchAddress(p.next),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(i.whenTrue),a.flush()}),Vn.push(new kt(t,e,s)),Memory.patchCode(t,e,l=>{let a=new Arm64Writer(l,{pc:t});a.putLdrRegAddress(o,s),a.putBrReg(o),a.flush()})}function lc(t){return new fo(t)}function cc(t){return me.replacedMethods.translate(t)}function Kn(t,e={}){let{limit:n=16}=e,r=t.getEnv();return st===null&&(st=dc(t,r)),st.backtrace(r,n)}function dc(t,e){let n=X(),r=Memory.alloc(Process.pointerSize),o=new CModule(`
#include <glib.h>
#include <stdbool.h>
#include <string.h>
#include <gum/gumtls.h>
#include <json-glib/json-glib.h>

typedef struct _ArtBacktrace ArtBacktrace;
typedef struct _ArtStackFrame ArtStackFrame;

typedef struct _ArtStackVisitor ArtStackVisitor;
typedef struct _ArtStackVisitorVTable ArtStackVisitorVTable;

typedef struct _ArtClass ArtClass;
typedef struct _ArtMethod ArtMethod;
typedef struct _ArtThread ArtThread;
typedef struct _ArtContext ArtContext;

typedef struct _JNIEnv JNIEnv;

typedef struct _StdString StdString;
typedef struct _StdTinyString StdTinyString;
typedef struct _StdLargeString StdLargeString;

typedef enum {
  STACK_WALK_INCLUDE_INLINED_FRAMES,
  STACK_WALK_SKIP_INLINED_FRAMES,
} StackWalkKind;

struct _StdTinyString
{
  guint8 unused;
  gchar data[(3 * sizeof (gpointer)) - 1];
};

struct _StdLargeString
{
  gsize capacity;
  gsize size;
  gchar * data;
};

struct _StdString
{
  union
  {
    guint8 flags;
    StdTinyString tiny;
    StdLargeString large;
  };
};

struct _ArtBacktrace
{
  GChecksum * id;
  GArray * frames;
  gchar * frames_json;
};

struct _ArtStackFrame
{
  ArtMethod * method;
  gsize dexpc;
  StdString description;
};

struct _ArtStackVisitorVTable
{
  void (* unused1) (void);
  void (* unused2) (void);
  bool (* visit) (ArtStackVisitor * visitor);
};

struct _ArtStackVisitor
{
  ArtStackVisitorVTable * vtable;

  guint8 padding[512];

  ArtStackVisitorVTable vtable_storage;

  ArtBacktrace * backtrace;
};

struct _ArtMethod
{
  guint32 declaring_class;
  guint32 access_flags;
};

extern GumTlsKey current_backtrace;

extern void (* perform_art_thread_state_transition) (JNIEnv * env);

extern ArtContext * art_make_context (ArtThread * thread);

extern void art_stack_visitor_init (ArtStackVisitor * visitor, ArtThread * thread, void * context, StackWalkKind walk_kind,
    size_t num_frames, bool check_suspended);
extern void art_stack_visitor_walk_stack (ArtStackVisitor * visitor, bool include_transitions);
extern ArtMethod * art_stack_visitor_get_method (ArtStackVisitor * visitor);
extern void art_stack_visitor_describe_location (StdString * description, ArtStackVisitor * visitor);
extern ArtMethod * translate_method (ArtMethod * method);
extern void translate_location (ArtMethod * method, guint32 pc, const gchar ** source_file, gint32 * line_number);
extern void get_class_location (StdString * result, ArtClass * klass);
extern void cxx_delete (void * mem);
extern unsigned long strtoul (const char * str, char ** endptr, int base);

static bool visit_frame (ArtStackVisitor * visitor);
static void art_stack_frame_destroy (ArtStackFrame * frame);

static void append_jni_type_name (GString * s, const gchar * name, gsize length);

static void std_string_destroy (StdString * str);
static gchar * std_string_get_data (StdString * str);

void
init (void)
{
  current_backtrace = gum_tls_key_new ();
}

void
finalize (void)
{
  gum_tls_key_free (current_backtrace);
}

ArtBacktrace *
_create (JNIEnv * env,
         guint limit)
{
  ArtBacktrace * bt;

  bt = g_new (ArtBacktrace, 1);
  bt->id = g_checksum_new (G_CHECKSUM_SHA1);
  bt->frames = (limit != 0)
      ? g_array_sized_new (FALSE, FALSE, sizeof (ArtStackFrame), limit)
      : g_array_new (FALSE, FALSE, sizeof (ArtStackFrame));
  g_array_set_clear_func (bt->frames, (GDestroyNotify) art_stack_frame_destroy);
  bt->frames_json = NULL;

  gum_tls_key_set_value (current_backtrace, bt);

  perform_art_thread_state_transition (env);

  gum_tls_key_set_value (current_backtrace, NULL);

  return bt;
}

void
_on_thread_state_transition_complete (ArtThread * thread)
{
  ArtContext * context;
  ArtStackVisitor visitor = {
    .vtable_storage = {
      .visit = visit_frame,
    },
  };

  context = art_make_context (thread);

  art_stack_visitor_init (&visitor, thread, context, STACK_WALK_SKIP_INLINED_FRAMES, 0, true);
  visitor.vtable = &visitor.vtable_storage;
  visitor.backtrace = gum_tls_key_get_value (current_backtrace);

  art_stack_visitor_walk_stack (&visitor, false);

  cxx_delete (context);
}

static bool
visit_frame (ArtStackVisitor * visitor)
{
  ArtBacktrace * bt = visitor->backtrace;
  ArtStackFrame frame;
  const gchar * description, * dexpc_part;

  frame.method = art_stack_visitor_get_method (visitor);

  art_stack_visitor_describe_location (&frame.description, visitor);

  description = std_string_get_data (&frame.description);
  if (strstr (description, " '<") != NULL)
    goto skip;

  dexpc_part = strstr (description, " at dex PC 0x");
  if (dexpc_part == NULL)
    goto skip;
  frame.dexpc = strtoul (dexpc_part + 13, NULL, 16);

  g_array_append_val (bt->frames, frame);

  g_checksum_update (bt->id, (guchar *) &frame.method, sizeof (frame.method));
  g_checksum_update (bt->id, (guchar *) &frame.dexpc, sizeof (frame.dexpc));

  return true;

skip:
  std_string_destroy (&frame.description);
  return true;
}

static void
art_stack_frame_destroy (ArtStackFrame * frame)
{
  std_string_destroy (&frame->description);
}

void
_destroy (ArtBacktrace * backtrace)
{
  g_free (backtrace->frames_json);
  g_array_free (backtrace->frames, TRUE);
  g_checksum_free (backtrace->id);
  g_free (backtrace);
}

const gchar *
_get_id (ArtBacktrace * backtrace)
{
  return g_checksum_get_string (backtrace->id);
}

const gchar *
_get_frames (ArtBacktrace * backtrace)
{
  GArray * frames = backtrace->frames;
  JsonBuilder * b;
  guint i;
  JsonNode * root;

  if (backtrace->frames_json != NULL)
    return backtrace->frames_json;

  b = json_builder_new_immutable ();

  json_builder_begin_array (b);

  for (i = 0; i != frames->len; i++)
  {
    ArtStackFrame * frame = &g_array_index (frames, ArtStackFrame, i);
    gchar * description, * ret_type, * paren_open, * paren_close, * arg_types, * token, * method_name, * class_name;
    GString * signature;
    gchar * cursor;
    ArtMethod * translated_method;
    StdString location;
    gsize dexpc;
    const gchar * source_file;
    gint32 line_number;

    description = std_string_get_data (&frame->description);

    ret_type = strchr (description, '\\'') + 1;

    paren_open = strchr (ret_type, '(');
    paren_close = strchr (paren_open, ')');
    *paren_open = '\\0';
    *paren_close = '\\0';

    arg_types = paren_open + 1;

    token = strrchr (ret_type, '.');
    *token = '\\0';

    method_name = token + 1;

    token = strrchr (ret_type, ' ');
    *token = '\\0';

    class_name = token + 1;

    signature = g_string_sized_new (128);

    append_jni_type_name (signature, class_name, method_name - class_name - 1);
    g_string_append_c (signature, ',');
    g_string_append (signature, method_name);
    g_string_append (signature, ",(");

    if (arg_types != paren_close)
    {
      for (cursor = arg_types; cursor != NULL;)
      {
        gsize length;
        gchar * next;

        token = strstr (cursor, ", ");
        if (token != NULL)
        {
          length = token - cursor;
          next = token + 2;
        }
        else
        {
          length = paren_close - cursor;
          next = NULL;
        }

        append_jni_type_name (signature, cursor, length);

        cursor = next;
      }
    }

    g_string_append_c (signature, ')');

    append_jni_type_name (signature, ret_type, class_name - ret_type - 1);

    translated_method = translate_method (frame->method);
    dexpc = (translated_method == frame->method) ? frame->dexpc : 0;

    get_class_location (&location, GSIZE_TO_POINTER (translated_method->declaring_class));

    translate_location (translated_method, dexpc, &source_file, &line_number);

    json_builder_begin_object (b);

    json_builder_set_member_name (b, "signature");
    json_builder_add_string_value (b, signature->str);

    json_builder_set_member_name (b, "origin");
    json_builder_add_string_value (b, std_string_get_data (&location));

    json_builder_set_member_name (b, "className");
    json_builder_add_string_value (b, class_name);

    json_builder_set_member_name (b, "methodName");
    json_builder_add_string_value (b, method_name);

    json_builder_set_member_name (b, "methodFlags");
    json_builder_add_int_value (b, translated_method->access_flags);

    json_builder_set_member_name (b, "fileName");
    json_builder_add_string_value (b, source_file);

    json_builder_set_member_name (b, "lineNumber");
    json_builder_add_int_value (b, line_number);

    json_builder_end_object (b);

    std_string_destroy (&location);
    g_string_free (signature, TRUE);
  }

  json_builder_end_array (b);

  root = json_builder_get_root (b);
  backtrace->frames_json = json_to_string (root, FALSE);
  json_node_unref (root);

  return backtrace->frames_json;
}

static void
append_jni_type_name (GString * s,
                      const gchar * name,
                      gsize length)
{
  gchar shorty = '\\0';
  gsize i;

  switch (name[0])
  {
    case 'b':
      if (strncmp (name, "boolean", length) == 0)
        shorty = 'Z';
      else if (strncmp (name, "byte", length) == 0)
        shorty = 'B';
      break;
    case 'c':
      if (strncmp (name, "char", length) == 0)
        shorty = 'C';
      break;
    case 'd':
      if (strncmp (name, "double", length) == 0)
        shorty = 'D';
      break;
    case 'f':
      if (strncmp (name, "float", length) == 0)
        shorty = 'F';
      break;
    case 'i':
      if (strncmp (name, "int", length) == 0)
        shorty = 'I';
      break;
    case 'l':
      if (strncmp (name, "long", length) == 0)
        shorty = 'J';
      break;
    case 's':
      if (strncmp (name, "short", length) == 0)
        shorty = 'S';
      break;
    case 'v':
      if (strncmp (name, "void", length) == 0)
        shorty = 'V';
      break;
  }

  if (shorty != '\\0')
  {
    g_string_append_c (s, shorty);

    return;
  }

  if (length > 2 && name[length - 2] == '[' && name[length - 1] == ']')
  {
    g_string_append_c (s, '[');
    append_jni_type_name (s, name, length - 2);

    return;
  }

  g_string_append_c (s, 'L');

  for (i = 0; i != length; i++)
  {
    gchar ch = name[i];
    if (ch != '.')
      g_string_append_c (s, ch);
    else
      g_string_append_c (s, '/');
  }

  g_string_append_c (s, ';');
}

static void
std_string_destroy (StdString * str)
{
  bool is_large = (str->flags & 1) != 0;
  if (is_large)
    cxx_delete (str->large.data);
}

static gchar *
std_string_get_data (StdString * str)
{
  bool is_large = (str->flags & 1) != 0;
  return is_large ? str->large.data : str->tiny.data;
}
`,{current_backtrace:Memory.alloc(Process.pointerSize),perform_art_thread_state_transition:r,art_make_context:n["art::Thread::GetLongJumpContext"]??n["art::Context::Create"],art_stack_visitor_init:n["art::StackVisitor::StackVisitor"],art_stack_visitor_walk_stack:n["art::StackVisitor::WalkStack"],art_stack_visitor_get_method:n["art::StackVisitor::GetMethod"],art_stack_visitor_describe_location:n["art::StackVisitor::DescribeLocation"],translate_method:me.replacedMethods.translate,translate_location:n["art::Monitor::TranslateLocation"],get_class_location:n["art::mirror::Class::GetLocation"],cxx_delete:n.$delete,strtoul:Process.getModuleByName("libc.so").getExportByName("strtoul")}),i=new NativeFunction(o._create,"pointer",["pointer","uint"],ae),s=new NativeFunction(o._destroy,"void",["pointer"],ae),l={exceptions:"propagate",scheduling:"exclusive"},a=new NativeFunction(o._get_id,"pointer",["pointer"],l),c=new NativeFunction(o._get_frames,"pointer",["pointer"],l),d=go(t,e,o._on_thread_state_transition_complete);o._performData=d,r.writePointer(d),o.backtrace=(p,u)=>{let g=i(p,u),m=new Pn(g);return Script.bindWeak(m,f.bind(null,g)),m};function f(p){s(p)}return o.getId=p=>a(p).readUtf8String(),o.getFrames=p=>JSON.parse(c(p).readUtf8String()),o}var Pn=class{constructor(e){this.handle=e}get id(){return st.getId(this.handle)}get frames(){return st.getFrames(this.handle)}};function Wn(){Nt.forEach(t=>{t.vtablePtr.writePointer(t.vtable),t.vtableCountPtr.writeS32(t.vtableCount)}),Nt.clear();for(let t of po.splice(0))t.deactivate();for(let t of Vn.splice(0))t.revert()}function qn(t){return mo(t,"art::jni::JniIdManager::DecodeMethodId")}function no(t){return mo(t,"art::jni::JniIdManager::DecodeFieldId")}function mo(t,e){let n=X(),r=co(n).offset,o=r.jniIdManager,i=r.jniIdsIndirection;if(o!==null&&i!==null){let s=n.artRuntime;if(s.add(i).readInt()!==Ra){let a=s.add(o).readPointer();return n[e](a,t)}}return t}var uc={ia32:fc,x64:pc,arm:hc,arm64:mc};function fc(t,e,n,r,o){let i=We(o).offset,s=Se(o).offset,l;return Memory.patchCode(t,128,a=>{let c=new X86Writer(a,{pc:t}),d=new X86Relocator(e,c),f=[15,174,4,36],p=[15,174,12,36];c.putPushax(),c.putMovRegReg("ebp","esp"),c.putAndRegU32("esp",4294967280),c.putSubRegImm("esp",512),c.putBytes(f),c.putMovRegFsU32Ptr("ebx",i.self),c.putCallAddressWithAlignedArguments(me.replacedMethods.findReplacementFromQuickCode,["eax","ebx"]),c.putTestRegReg("eax","eax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("ebp",7*4,"eax"),c.putLabel("restore_registers"),c.putBytes(p),c.putMovRegReg("esp","ebp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putJmpAddress(e.add(l)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("eax",s.quickCode),c.flush()}),l}function pc(t,e,n,r,o){let i=We(o).offset,s=Se(o).offset,l;return Memory.patchCode(t,256,a=>{let c=new X86Writer(a,{pc:t}),d=new X86Relocator(e,c),f=[15,174,4,36],p=[15,174,12,36];c.putPushax(),c.putMovRegReg("rbp","rsp"),c.putAndRegU32("rsp",4294967280),c.putSubRegImm("rsp",512),c.putBytes(f),c.putMovRegGsU32Ptr("rbx",i.self),c.putCallAddressWithAlignedArguments(me.replacedMethods.findReplacementFromQuickCode,["rdi","rbx"]),c.putTestRegReg("rax","rax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("rbp",8*8,"rax"),c.putLabel("restore_registers"),c.putBytes(p),c.putMovRegReg("rsp","rbp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putJmpAddress(e.add(l)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("rdi",s.quickCode),c.flush()}),l}function hc(t,e,n,r,o){let i=Se(o).offset,s=e.and(Bn),l;return Memory.patchCode(t,128,a=>{let c=new ThumbWriter(a,{pc:t}),d=new ThumbRelocator(s,c),f=[45,237,16,10],p=[189,236,16,10];c.putPushRegs(["r1","r2","r3","r5","r6","r7","r8","r10","r11","lr"]),c.putBytes(f),c.putSubRegRegImm("sp","sp",8),c.putStrRegRegOffset("r0","sp",0),c.putCallAddressWithArguments(me.replacedMethods.findReplacementFromQuickCode,["r0","r9"]),c.putCmpRegImm("r0",0),c.putBCondLabel("eq","restore_registers"),c.putStrRegRegOffset("r0","sp",0),c.putLabel("restore_registers"),c.putLdrRegRegOffset("r0","sp",0),c.putAddRegRegImm("sp","sp",8),c.putBytes(p),c.putPopRegs(["lr","r11","r10","r8","r7","r6","r5","r3","r2","r1"]),c.putBCondLabel("ne","invoke_replacement");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putLdrRegAddress("pc",e.add(l)),c.putLabel("invoke_replacement"),c.putLdrRegRegOffset("pc","r0",i.quickCode),c.flush()}),l}function mc(t,e,n,{availableScratchRegs:r},o){let i=Se(o).offset,s;return Memory.patchCode(t,256,l=>{let a=new Arm64Writer(l,{pc:t}),c=new Arm64Relocator(e,a);a.putPushRegReg("d0","d1"),a.putPushRegReg("d2","d3"),a.putPushRegReg("d4","d5"),a.putPushRegReg("d6","d7"),a.putPushRegReg("x1","x2"),a.putPushRegReg("x3","x4"),a.putPushRegReg("x5","x6"),a.putPushRegReg("x7","x20"),a.putPushRegReg("x21","x22"),a.putPushRegReg("x23","x24"),a.putPushRegReg("x25","x26"),a.putPushRegReg("x27","x28"),a.putPushRegReg("x29","lr"),a.putSubRegRegImm("sp","sp",16),a.putStrRegRegOffset("x0","sp",0),a.putCallAddressWithArguments(me.replacedMethods.findReplacementFromQuickCode,["x0","x19"]),a.putCmpRegReg("x0","xzr"),a.putBCondLabel("eq","restore_registers"),a.putStrRegRegOffset("x0","sp",0),a.putLabel("restore_registers"),a.putLdrRegRegOffset("x0","sp",0),a.putAddRegRegImm("sp","sp",16),a.putPopRegReg("x29","lr"),a.putPopRegReg("x27","x28"),a.putPopRegReg("x25","x26"),a.putPopRegReg("x23","x24"),a.putPopRegReg("x21","x22"),a.putPopRegReg("x7","x20"),a.putPopRegReg("x5","x6"),a.putPopRegReg("x3","x4"),a.putPopRegReg("x1","x2"),a.putPopRegReg("d6","d7"),a.putPopRegReg("d4","d5"),a.putPopRegReg("d2","d3"),a.putPopRegReg("d0","d1"),a.putBCondLabel("ne","invoke_replacement");do s=c.readOne();while(s<n&&!c.eoi);if(c.writeAll(),!c.eoi){let d=Array.from(r)[0];a.putLdrRegAddress(d,e.add(s)),a.putBrReg(d)}a.putLabel("invoke_replacement"),a.putLdrRegRegOffset("x16","x0",i.quickCode),a.putBrReg("x16"),a.flush()}),s}var _c={ia32:ro,x64:ro,arm:gc,arm64:yc};function ro(t,e,n){Memory.patchCode(t,16,r=>{let o=new X86Writer(r,{pc:t});o.putJmpAddress(e),o.flush()})}function gc(t,e,n){let r=t.and(Bn);Memory.patchCode(r,16,o=>{let i=new ThumbWriter(o,{pc:r});i.putLdrRegAddress("pc",e.or(1)),i.flush()})}function yc(t,e,n){Memory.patchCode(t,16,r=>{let o=new Arm64Writer(r,{pc:t});n===16?o.putLdrRegAddress("x16",e):o.putAdrpRegAddress("x16",e),o.putBrReg("x16"),o.flush()})}var bc={ia32:5,x64:16,arm:8,arm64:16},Mt=class{constructor(e){this.quickCode=e,this.quickCodeAddress=Process.arch==="arm"?e.and(Bn):e,this.redirectSize=0,this.trampoline=null,this.overwrittenPrologue=null,this.overwrittenPrologueLength=0}_canRelocateCode(e,n){let r=On[Process.arch],o=Kl[Process.arch],{quickCodeAddress:i}=this,s=new r(i),l=new o(i,s),a;if(Process.arch==="arm64"){let c=new Set(["x16","x17"]);do{let d=l.readOne(),f=new Set(c),{read:p,written:u}=l.input.regsAccessed;for(let g of[p,u])for(let m of g){let E;m.startsWith("w")?E="x"+m.substring(1):E=m,f.delete(E)}if(f.size===0)break;a=d,c=f}while(a<e&&!l.eoi);n.availableScratchRegs=c}else do a=l.readOne();while(a<e&&!l.eoi);return a>=e}_allocateTrampoline(){xt===null&&(xt=nn(N===4?128:256));let e=bc[Process.arch],n,r,o=1,i={};if(N===4||this._canRelocateCode(e,i))n=e,r={};else{let s;Process.arch==="x64"?(n=5,s=Fa):Process.arch==="arm64"&&(n=8,s=Da,o=4096),r={near:this.quickCodeAddress,maxDistance:s}}return this.redirectSize=n,this.trampoline=xt.allocateSlice(r,o),i}_destroyTrampoline(){xt.freeSlice(this.trampoline)}activate(e){let n=this._allocateTrampoline(),{trampoline:r,quickCode:o,redirectSize:i}=this,s=uc[Process.arch],l=s(r,o,i,n,e);this.overwrittenPrologueLength=l,this.overwrittenPrologue=Memory.dup(this.quickCodeAddress,l);let a=_c[Process.arch];a(o,r,i)}deactivate(){let{quickCodeAddress:e,overwrittenPrologueLength:n}=this,r=On[Process.arch];Memory.patchCode(e,n,o=>{let i=new r(o,{pc:e}),{overwrittenPrologue:s}=this;i.putBytes(s.readByteArray(n)),i.flush()}),this._destroyTrampoline()}};function Ec(t){let e=X(),{module:n,artClassLinker:r}=e;return t.equals(r.quickGenericJniTrampoline)||t.equals(r.quickToInterpreterBridgeTrampoline)||t.equals(r.quickResolutionTrampoline)||t.equals(r.quickImtConflictTrampoline)||t.compare(n.base)>=0&&t.compare(n.base.add(n.size))<0}var Rn=class{constructor(e){let n=qn(e);this.methodId=n,this.originalMethod=null,this.hookedMethodId=n,this.replacementMethodId=null,this.interceptor=null}replace(e,n,r,o,i){let{kAccCompileDontBother:s,artNterpEntryPoint:l}=i;this.originalMethod=oo(this.methodId,o);let a=this.originalMethod.accessFlags;if((a&Pa)!==0&&vc()){let u=this.originalMethod.jniCode;this.hookedMethodId=u.add(2*N).readPointer(),this.originalMethod=oo(this.hookedMethodId,o)}let{hookedMethodId:c}=this,d=wc(c,o);this.replacementMethodId=d,Ct(d,{jniCode:e,accessFlags:(a&~(La|Na|$r)|Tt|s)>>>0,quickCode:i.artClassLinker.quickGenericJniTrampoline,interpreterCode:i.artInterpreterToCompiledCodeBridge},o);let f=ao|Ma|$r;(a&Tt)===0&&(f|=ka),Ct(c,{accessFlags:(a&~f|s)>>>0},o);let p=this.originalMethod.quickCode;if(l!==null&&p.equals(l)&&Ct(c,{quickCode:i.artQuickToInterpreterBridge},o),!Ec(p)){let u=new Mt(p);u.activate(o),this.interceptor=u}me.replacedMethods.set(c,d),Wl(c,o)}revert(e){let{hookedMethodId:n,interceptor:r}=this;Ct(n,this.originalMethod,e),me.replacedMethods.delete(n),r!==null&&(r.deactivate(),this.interceptor=null)}resolveTarget(e,n,r,o){return this.hookedMethodId}};function vc(){return pe()<28}function oo(t,e){let r=Se(e).offset;return["jniCode","accessFlags","quickCode","interpreterCode"].reduce((o,i)=>{let s=r[i];if(s===void 0)return o;let l=t.add(s),a=i==="accessFlags"?Sa:wa;return o[i]=a.call(l),o},{})}function Ct(t,e,n){let o=Se(n).offset;Object.keys(e).forEach(i=>{let s=o[i];if(s===void 0)return;let l=t.add(s);(i==="accessFlags"?Ia:xa).call(l,e[i])})}var Fn=class{constructor(e){this.methodId=e,this.originalMethod=null}replace(e,n,r,o,i){let{methodId:s}=this;this.originalMethod=Memory.dup(s,En);let l=r.reduce((p,u)=>p+u.size,0);n&&l++;let a=(s.add(Hr).readU32()|Tt)>>>0,c=l,d=0,f=l;s.add(Hr).writeU32(a),s.add(Ga).writeU16(c),s.add($a).writeU16(d),s.add(Ha).writeU16(f),s.add(Ka).writeU32(Sc(s)),i.dvmUseJNIBridge(s,e)}revert(e){Memory.copy(this.methodId,this.originalMethod,En)}resolveTarget(e,n,r,o){let i=r.handle.add(lo).readPointer(),s;if(n)s=o.dvmDecodeIndirectRef(i,e.$h);else{let p=e.$borrowClassHandle(r);s=o.dvmDecodeIndirectRef(i,p.value),p.unref(r)}let l;n?l=s.add(Va).readPointer():l=s;let a=l.toString(16),c=Nt.get(a);if(c===void 0){let p=l.add(za),u=l.add(Ba),g=p.readPointer(),m=u.readS32(),E=m*N,w=Memory.alloc(2*E);Memory.copy(w,g,E),p.writePointer(w),c={classObject:l,vtablePtr:p,vtableCountPtr:u,vtable:g,vtableCount:m,shadowVtable:w,shadowVtableCount:m,targetMethods:new Map},Nt.set(a,c)}let d=this.methodId.toString(16),f=c.targetMethods.get(d);if(f===void 0){f=Memory.dup(this.originalMethod,En);let p=c.shadowVtableCount++;c.shadowVtable.add(p*N).writePointer(f),f.add(Ja).writeU16(p),c.vtableCountPtr.writeS32(c.shadowVtableCount),c.targetMethods.set(d,f)}return f}};function Sc(t){if(Process.arch!=="ia32")return Zr;let e=t.add(Za).readPointer().readCString();if(e===null||e.length===0||e.length>65535)return Zr;let n;switch(e[0]){case"V":n=Wa;break;case"F":n=qa;break;case"D":n=Qa;break;case"J":n=Ya;break;case"Z":case"B":n=nl;break;case"C":n=tl;break;case"S":n=el;break;default:n=Xa;break}let r=0;for(let o=e.length-1;o>0;o--){let i=e[o];r+=i==="D"||i==="J"?2:1}return n<<rl|r}function wc(t,e){let n=X();if(pe()<23){let r=n["art::Thread::CurrentFromGdb"]();return n["art::mirror::Object::Clone"](t,r)}return Memory.dup(t,Se(e).size)}function Qn(t,e,n){_o(t,e,Ln,n)}function Yn(t,e){_o(t,e,Nn)}function Xn(t,e){let n=X();if(pe()<26)throw new Error("This API is only available on Android >= 8.0");Ce(t,e,r=>{n["art::Runtime::DeoptimizeBootImage"](n.artRuntime)})}function _o(t,e,n,r){let o=X();if(pe()<24)throw new Error("This API is only available on Android >= 7.0");Ce(t,e,i=>{if(pe()<30){if(!o.isJdwpStarted()){let l=Ic(o);fl.push(l)}o.isDebuggerActive()||o["art::Dbg::GoActive"]();let s=Memory.alloc(8+N);switch(s.writeU32(n),n){case Nn:break;case Ln:s.add(8).writePointer(r);break;default:throw new Error("Unsupported deoptimization kind")}o["art::Dbg::RequestDeoptimization"](s),o["art::Dbg::ManageDeoptimization"]()}else{let s=o.artInstrumentation;if(s===null)throw new Error("Unable to find Instrumentation class in ART; please file a bug");let l=o["art::Instrumentation::EnableDeoptimization"];switch(l!==void 0&&(s.add(al().offset.deoptimizationEnabled).readU8()||l(s)),n){case Nn:o["art::Instrumentation::DeoptimizeEverything"](s,Memory.allocUtf8String("frida"));break;case Ln:o["art::Instrumentation::Deoptimize"](s,r);break;default:throw new Error("Unsupported deoptimization kind")}}})}var Dn=class{constructor(){let e=Process.getModuleByName("libart.so"),n=e.getExportByName("_ZN3art4JDWP12JdwpAdbState6AcceptEv"),r=e.getExportByName("_ZN3art4JDWP12JdwpAdbState15ReceiveClientFdEv"),o=io(),i=io();this._controlFd=o[0],this._clientFd=i[0];let s=null;s=Interceptor.attach(n,function(l){let a=l[0];Memory.scanSync(a.add(8252),256,"00 ff ff ff ff 00")[0].address.add(1).writeS32(o[1]),s.detach()}),Interceptor.replace(r,new NativeCallback(function(l){return Interceptor.revert(r),i[1]},"int",["pointer"])),Interceptor.flush(),this._handshakeRequest=this._performHandshake()}async _performHandshake(){let e=new UnixInputStream(this._clientFd,{autoClose:!1}),n=new UnixOutputStream(this._clientFd,{autoClose:!1}),r=[74,68,87,80,45,72,97,110,100,115,104,97,107,101];try{await n.writeAll(r),await e.readAll(r.length)}catch{}}};function Ic(t){let e=new Dn;t["art::Dbg::SetJdwpAllowed"](1);let n=xc();t["art::Dbg::ConfigureJdwp"](n);let r=t["art::InternalDebuggerControlCallback::StartDebugger"];return r!==void 0?r(NULL):t["art::Dbg::StartJdwp"](),e}function xc(){let t=pe()<28?2:3,e=0,n=t,r=!0,o=!1,i=e,s=8+lt+2,l=Memory.alloc(s);return l.writeU32(n).add(4).writeU8(r?1:0).add(1).writeU8(o?1:0).add(1).add(lt).writeU16(i),l}function io(){In===null&&(In=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("socketpair"),"int",["int","int","int","pointer"]));let t=Memory.alloc(8);if(In(il,sl,0,t)===-1)throw new Error("Unable to create socketpair for JDWP");return[t.readS32(),t.add(4).readS32()]}function Cc(t){let e=_l().offset,n=t.vm.add(e.globalsLock),r=t.vm.add(e.globals),o=t["art::IndirectReferenceTable::Add"],i=t["art::ReaderWriterMutex::ExclusiveLock"],s=t["art::ReaderWriterMutex::ExclusiveUnlock"],l=0;return function(a,c,d){i(n,c);try{return o(r,l,d)}finally{s(n,c)}}}function Ac(t){let e=t["art::Thread::DecodeJObject"];if(e===void 0)throw new Error("art::Thread::DecodeJObject is not available; please file a bug");return function(n,r,o){return e(r,o)}}var Tc={ia32:so,x64:so,arm:Nc,arm64:Lc};function go(t,e,n){let r=X(),o=e.handle.readPointer(),i,s=r.find("_ZN3art3JNIILb1EE14ExceptionClearEP7_JNIEnv");s!==null?i=s:i=o.add(Pt).readPointer();let l,a=r.find("_ZN3art3JNIILb1EE10FatalErrorEP7_JNIEnvPKc");a!==null?l=a:l=o.add(Ua).readPointer();let c=Tc[Process.arch];if(c===void 0)throw new Error("Not yet implemented for "+Process.arch);let d=null,f=We(t).offset,p=f.exception,u=new Set,g=f.isExceptionReportedToInstrumentation;g!==null&&u.add(g);let m=f.throwLocation;m!==null&&(u.add(m),u.add(m+N),u.add(m+2*N));let E=65536,w=Memory.alloc(E);return Memory.patchCode(w,E,x=>{d=c(x,w,i,l,p,u,n)}),d._code=w,d._callback=n,d}function so(t,e,n,r,o,i,s){let l={},a=new Set,c=[n];for(;c.length>0;){let m=c.shift();if(Object.values(l).some(({begin:U,end:z})=>m.compare(U)>=0&&m.compare(z)<0))continue;let w=m.toString(),x={begin:m},k=null,M=!1;do{if(m.equals(r)){M=!0;break}let U=Instruction.parse(m);k=U;let z=l[U.address.toString()];if(z!==void 0){delete l[z.begin.toString()],l[w]=z,z.begin=x.begin,x=null;break}let R=null;switch(U.mnemonic){case"jmp":R=ptr(U.operands[0].value),M=!0;break;case"je":case"jg":case"jle":case"jne":case"js":R=ptr(U.operands[0].value);break;case"ret":M=!0;break}R!==null&&(a.add(R.toString()),c.push(R),c.sort((F,A)=>F.compare(A))),m=U.next}while(!M);x!==null&&(x.end=k.address.add(k.size),l[w]=x)}let d=Object.keys(l).map(m=>l[m]);d.sort((m,E)=>m.begin.compare(E.begin));let f=l[n.toString()];d.splice(d.indexOf(f),1),d.unshift(f);let p=new X86Writer(t,{pc:e}),u=!1,g=null;return d.forEach(m=>{let E=m.end.sub(m.begin).toInt32(),w=new X86Relocator(m.begin,p),x;for(;(x=w.readOne())!==0;){let k=w.input,{mnemonic:M}=k,U=k.address.toString();a.has(U)&&p.putLabel(U);let z=!0;switch(M){case"jmp":p.putJmpNearLabel(ve(k.operands[0])),z=!1;break;case"je":case"jg":case"jle":case"jne":case"js":p.putJccNearLabel(M,ve(k.operands[0]),"no-hint"),z=!1;break;case"mov":{let[R,F]=k.operands;if(R.type==="mem"&&F.type==="imm"){let A=R.value,j=A.disp;if(j===o&&F.value.valueOf()===0){if(g=A.base,p.putPushfx(),p.putPushax(),p.putMovRegReg("xbp","xsp"),N===4)p.putAndRegU32("esp",4294967280);else{let B=g!=="rdi"?"rdi":"rsi";p.putMovRegU64(B,uint64("0xfffffffffffffff0")),p.putAndRegReg("rsp",B)}p.putCallAddressWithAlignedArguments(s,[g]),p.putMovRegReg("xsp","xbp"),p.putPopax(),p.putPopfx(),u=!0,z=!1}else i.has(j)&&A.base===g&&(z=!1)}break}case"call":{let R=k.operands[0];R.type==="mem"&&R.value.disp===Pt&&(N===4?(p.putPopReg("eax"),p.putMovRegRegOffsetPtr("eax","eax",4),p.putPushReg("eax")):p.putMovRegRegOffsetPtr("rdi","rdi",8),p.putCallAddressWithArguments(s,[]),u=!0,z=!1);break}}if(z?w.writeAll():w.skipOne(),x===E)break}w.dispose()}),p.dispose(),u||er(),new NativeFunction(e,"void",["pointer"],ae)}function Nc(t,e,n,r,o,i,s){let l={},a=new Set,c=ptr(1).not(),d=[n];for(;d.length>0;){let w=d.shift();if(Object.values(l).some(({begin:j,end:B})=>w.compare(j)>=0&&w.compare(B)<0))continue;let k=w.and(c),M=k.toString(),U=w.and(1),z={begin:k},R=null,F=!1,A=0;do{if(w.equals(r)){F=!0;break}let j=Instruction.parse(w),{mnemonic:B}=j;R=j;let J=w.and(c).toString(),H=l[J];if(H!==void 0){delete l[H.begin.toString()],l[M]=H,H.begin=z.begin,z=null;break}let K=A===0,$=null;switch(B){case"b":$=ptr(j.operands[0].value),F=K;break;case"beq.w":case"beq":case"bne":case"bne.w":case"bgt":$=ptr(j.operands[0].value);break;case"cbz":case"cbnz":$=ptr(j.operands[1].value);break;case"pop.w":K&&(F=j.operands.filter(W=>W.value==="pc").length===1);break}switch(B){case"it":A=1;break;case"itt":A=2;break;case"ittt":A=3;break;case"itttt":A=4;break;default:A>0&&A--;break}$!==null&&(a.add($.toString()),d.push($.or(U)),d.sort((W,re)=>W.compare(re))),w=j.next}while(!F);z!==null&&(z.end=R.address.add(R.size),l[M]=z)}let f=Object.keys(l).map(w=>l[w]);f.sort((w,x)=>w.begin.compare(x.begin));let p=l[n.and(c).toString()];f.splice(f.indexOf(p),1),f.unshift(p);let u=new ThumbWriter(t,{pc:e}),g=!1,m=null,E=null;return f.forEach(w=>{let x=new ThumbRelocator(w.begin,u),k=w.begin,M=w.end,U=0;do{if(x.readOne()===0)throw new Error("Unexpected end of block");let R=x.input;k=R.address,U=R.size;let{mnemonic:F}=R,A=k.toString();a.has(A)&&u.putLabel(A);let j=!0;switch(F){case"b":u.putBLabel(ve(R.operands[0])),j=!1;break;case"beq.w":u.putBCondLabelWide("eq",ve(R.operands[0])),j=!1;break;case"bne.w":u.putBCondLabelWide("ne",ve(R.operands[0])),j=!1;break;case"beq":case"bne":case"bgt":u.putBCondLabelWide(F.substr(1),ve(R.operands[0])),j=!1;break;case"cbz":{let B=R.operands;u.putCbzRegLabel(B[0].value,ve(B[1])),j=!1;break}case"cbnz":{let B=R.operands;u.putCbnzRegLabel(B[0].value,ve(B[1])),j=!1;break}case"str":case"str.w":{let B=R.operands[1].value,T=B.disp;if(T===o){m=B.base;let J=m!=="r4"?"r4":"r5",H=["r0","r1","r2","r3",J,"r9","r12","lr"];u.putPushRegs(H),u.putMrsRegReg(J,"apsr-nzcvq"),u.putCallAddressWithArguments(s,[m]),u.putMsrRegReg("apsr-nzcvq",J),u.putPopRegs(H),g=!0,j=!1}else i.has(T)&&B.base===m&&(j=!1);break}case"ldr":{let[B,T]=R.operands;if(T.type==="mem"){let J=T.value;J.base[0]==="r"&&J.disp===Pt&&(E=B.value)}break}case"blx":R.operands[0].value===E&&(u.putLdrRegRegOffset("r0","r0",4),u.putCallAddressWithArguments(s,["r0"]),g=!0,E=null,j=!1);break}j?x.writeAll():x.skipOne()}while(!k.add(U).equals(M));x.dispose()}),u.dispose(),g||er(),new NativeFunction(e.or(1),"void",["pointer"],ae)}function Lc(t,e,n,r,o,i,s){let l={},a=new Set,c=[n];for(;c.length>0;){let w=c.shift();if(Object.values(l).some(({begin:R,end:F})=>w.compare(R)>=0&&w.compare(F)<0))continue;let k=w.toString(),M={begin:w},U=null,z=!1;do{if(w.equals(r)){z=!0;break}let R;try{R=Instruction.parse(w)}catch(j){if(w.readU32()===0){z=!0;break}else throw j}U=R;let F=l[R.address.toString()];if(F!==void 0){delete l[F.begin.toString()],l[k]=F,F.begin=M.begin,M=null;break}let A=null;switch(R.mnemonic){case"b":A=ptr(R.operands[0].value),z=!0;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":A=ptr(R.operands[0].value);break;case"cbz":case"cbnz":A=ptr(R.operands[1].value);break;case"tbz":case"tbnz":A=ptr(R.operands[2].value);break;case"ret":z=!0;break}A!==null&&(a.add(A.toString()),c.push(A),c.sort((j,B)=>j.compare(B))),w=R.next}while(!z);M!==null&&(M.end=U.address.add(U.size),l[k]=M)}let d=Object.keys(l).map(w=>l[w]);d.sort((w,x)=>w.begin.compare(x.begin));let f=l[n.toString()];d.splice(d.indexOf(f),1),d.unshift(f);let p=new Arm64Writer(t,{pc:e});p.putBLabel("performTransition");let u=e.add(p.offset);p.putPushAllXRegisters(),p.putCallAddressWithArguments(s,["x0"]),p.putPopAllXRegisters(),p.putRet(),p.putLabel("performTransition");let g=!1,m=null,E=null;return d.forEach(w=>{let x=w.end.sub(w.begin).toInt32(),k=new Arm64Relocator(w.begin,p),M;for(;(M=k.readOne())!==0;){let U=k.input,{mnemonic:z}=U,R=U.address.toString();a.has(R)&&p.putLabel(R);let F=!0;switch(z){case"b":p.putBLabel(ve(U.operands[0])),F=!1;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":p.putBCondLabel(z.substr(2),ve(U.operands[0])),F=!1;break;case"cbz":{let A=U.operands;p.putCbzRegLabel(A[0].value,ve(A[1])),F=!1;break}case"cbnz":{let A=U.operands;p.putCbnzRegLabel(A[0].value,ve(A[1])),F=!1;break}case"tbz":{let A=U.operands;p.putTbzRegImmLabel(A[0].value,A[1].value.valueOf(),ve(A[2])),F=!1;break}case"tbnz":{let A=U.operands;p.putTbnzRegImmLabel(A[0].value,A[1].value.valueOf(),ve(A[2])),F=!1;break}case"str":{let A=U.operands,j=A[0].value,B=A[1].value,T=B.disp;j==="xzr"&&T===o?(m=B.base,p.putPushRegReg("x0","lr"),p.putMovRegReg("x0",m),p.putBlImm(u),p.putPopRegReg("x0","lr"),g=!0,F=!1):i.has(T)&&B.base===m&&(F=!1);break}case"ldr":{let A=U.operands,j=A[1].value;j.base[0]==="x"&&j.disp===Pt&&(E=A[0].value);break}case"blr":U.operands[0].value===E&&(p.putLdrRegRegOffset("x0","x0",8),p.putCallAddressWithArguments(s,["x0"]),g=!0,E=null,F=!1);break}if(F?k.writeAll():k.skipOne(),M===x)break}k.dispose()}),p.dispose(),g||er(),new NativeFunction(e,"void",["pointer"],ae)}function er(){throw new Error("Unable to parse ART internals; please file a bug")}function kc(t){let e=t["art::ArtMethod::PrettyMethod"];e!==void 0&&(Interceptor.attach(e.impl,me.hooks.ArtMethod.prettyMethod),Interceptor.flush())}function ve(t){return ptr(t.value).toString()}function Mc(t,e){return new NativeFunction(t,"pointer",e,ae)}function jc(t,e){let n=new NativeFunction(t,"void",["pointer"].concat(e),ae);return function(){let r=Memory.alloc(N);return n(r,...arguments),r.readPointer()}}function At(t,e){let{arch:n}=Process;switch(n){case"ia32":case"arm64":{let r;n==="ia32"?r=Ke(64,s=>{let l=1+e.length,a=l*4;s.putSubRegImm("esp",a);for(let c=0;c!==l;c++){let d=c*4;s.putMovRegRegOffsetPtr("eax","esp",a+4+d),s.putMovRegOffsetPtrReg("esp",d,"eax")}s.putCallAddress(t),s.putAddRegImm("esp",a-4),s.putRet()}):r=Ke(32,s=>{s.putMovRegReg("x8","x0"),e.forEach((l,a)=>{s.putMovRegReg("x"+a,"x"+(a+1))}),s.putLdrRegAddress("x7",t),s.putBrReg("x7")});let o=new NativeFunction(r,"void",["pointer"].concat(e),ae),i=function(...s){o(...s)};return i.handle=r,i.impl=t,i}default:{let r=new NativeFunction(t,"void",["pointer"].concat(e),ae);return r.impl=t,r}}}var jt=class{constructor(){this.handle=Memory.alloc(lt)}dispose(){let[e,n]=this._getData();n||X().$delete(e)}disposeToString(){let e=this.toString();return this.dispose(),e}toString(){let[e]=this._getData();return e.readUtf8String()}_getData(){let e=this.handle,n=(e.readU8()&1)===0;return[n?e.add(1):e.add(2*N).readPointer(),n]}},Un=class{$delete(){this.dispose(),X().$delete(this)}constructor(e,n){this.handle=e,this._begin=e,this._end=e.add(N),this._storage=e.add(2*N),this._elementSize=n}init(){this.begin=NULL,this.end=NULL,this.storage=NULL}dispose(){X().$delete(this.begin)}get begin(){return this._begin.readPointer()}set begin(e){this._begin.writePointer(e)}get end(){return this._end.readPointer()}set end(e){this._end.writePointer(e)}get storage(){return this._storage.readPointer()}set storage(e){this._storage.writePointer(e)}get size(){return this.end.sub(this.begin).toInt32()/this._elementSize}},ct=class t extends Un{static $new(){let e=new t(X().$new(ol));return e.init(),e}constructor(e){super(e,N)}get handles(){let e=[],n=this.begin,r=this.end;for(;!n.equals(r);)e.push(n.readPointer()),n=n.add(N);return e}},Oc=0,yo=N,bo=yo+4,Pc=-1,Ot=class t{$delete(){this.dispose(),X().$delete(this)}constructor(e){this.handle=e,this._link=e.add(Oc),this._numberOfReferences=e.add(yo)}init(e,n){this.link=e,this.numberOfReferences=n}dispose(){}get link(){return new t(this._link.readPointer())}set link(e){this._link.writePointer(e)}get numberOfReferences(){return this._numberOfReferences.readS32()}set numberOfReferences(e){this._numberOfReferences.writeS32(e)}},Eo=Uc(bo),vo=Eo+N,Rc=vo+N,dt=class t extends Ot{static $new(e,n){let r=new t(X().$new(Rc));return r.init(e,n),r}constructor(e){super(e),this._self=e.add(Eo),this._currentScope=e.add(vo);let o=(64-N-4-4)/4;this._scopeLayout=at.layoutForCapacity(o),this._topHandleScopePtr=null}init(e,n){let r=e.add(We(n).offset.topHandleScope);this._topHandleScopePtr=r,super.init(r.readPointer(),Pc),this.self=e,this.currentScope=at.$new(this._scopeLayout),r.writePointer(this)}dispose(){this._topHandleScopePtr.writePointer(this.link);let e;for(;(e=this.currentScope)!==null;){let n=e.link;e.$delete(),this.currentScope=n}}get self(){return this._self.readPointer()}set self(e){this._self.writePointer(e)}get currentScope(){let e=this._currentScope.readPointer();return e.isNull()?null:new at(e,this._scopeLayout)}set currentScope(e){this._currentScope.writePointer(e)}newHandle(e){return this.currentScope.newHandle(e)}},at=class t extends Ot{static $new(e){let n=new t(X().$new(e.size),e);return n.init(),n}constructor(e,n){super(e);let{offset:r}=n;this._refsStorage=e.add(r.refsStorage),this._pos=e.add(r.pos),this._layout=n}init(){super.init(NULL,this._layout.numberOfReferences),this.pos=0}get pos(){return this._pos.readU32()}set pos(e){this._pos.writeU32(e)}newHandle(e){let n=this.pos,r=this._refsStorage.add(n*4);return r.writeS32(e.toInt32()),this.pos=n+1,r}static layoutForCapacity(e){let n=bo,r=n+e*4;return{size:r+4,numberOfReferences:e,offset:{refsStorage:n,pos:r}}}},Fc={arm:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let i=[26625,18947,17041,53505,19202,18200,18288,48896],s=i.length*2,l=s+4,a=l+4;return Memory.patchCode(r,a,function(c){i.forEach((d,f)=>{c.add(f*2).writeU16(d)}),c.add(s).writeS32(t),c.add(l).writePointer(o)}),r.or(1)},arm64:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let i=[3107979265,402653378,1795293247,1409286241,1476395139,3592355936,3596551104],s=i.length*4,l=s+4,a=l+8;return Memory.patchCode(r,a,function(c){i.forEach((d,f)=>{c.add(f*4).writeU32(d)}),c.add(s).writeS32(t),c.add(l).writePointer(o)}),r}};function tr(t,e){return(Fc[Process.arch]||Dc)(t,e)}function Dc(t,e){return new NativeCallback(n=>{n.readS32()===t&&e(n)},"void",["pointer","pointer"])}function Uc(t){let e=t%N;return e!==0?t+N-e:t}var Bc=4,{pointerSize:Y}=Process,zc=256,Vc=65536,Jc=131072,Gc=33554432,$c=67108864,Hc=134217728,ze={exceptions:"propagate"},xo=ge(id),Zc=ge(ad),Kc=ge(nd),nr=null,rr=!1,Ut=new Map,ft=new Map;function ke(){return nr===null&&(nr=Wc()),nr}function Wc(){let t=Process.enumerateModules().filter(a=>/jvm.(dll|dylib|so)$/.test(a.name));if(t.length===0)return null;let e=t[0],n={flavor:"jvm"},r=Process.platform==="windows"?[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]],"VMThread::execute":["VMThread::execute","void",["pointer"]],"Method::size":["Method::size","int",["int"]],"Method::set_native_function":["Method::set_native_function","void",["pointer","pointer","int"]],"Method::clear_native_function":["Method::clear_native_function","void",["pointer"]],"Method::jmethod_id":["Method::jmethod_id","pointer",["pointer"]],"ClassLoaderDataGraph::classes_do":["ClassLoaderDataGraph::classes_do","void",["pointer"]],"NMethodSweeper::sweep_code_cache":["NMethodSweeper::sweep_code_cache","void",[]],"OopMapCache::flush_obsolete_entries":["OopMapCache::flush_obsolete_entries","void",["pointer"]]},variables:{"VM_RedefineClasses::`vftable'":function(a){this.vtableRedefineClasses=a},"VM_RedefineClasses::doit":function(a){this.redefineClassesDoIt=a},"VM_RedefineClasses::doit_prologue":function(a){this.redefineClassesDoItPrologue=a},"VM_RedefineClasses::doit_epilogue":function(a){this.redefineClassesDoItEpilogue=a},"VM_RedefineClasses::allow_nested_vm_operations":function(a){this.redefineClassesAllow=a},"NMethodSweeper::_traversals":function(a){this.traversals=a},"NMethodSweeper::_should_sweep":function(a){this.shouldSweep=a}},optionals:[]}]:[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],_ZN6Method4sizeEb:["Method::size","int",["int"]],_ZN6Method19set_native_functionEPhb:["Method::set_native_function","void",["pointer","pointer","int"]],_ZN6Method21clear_native_functionEv:["Method::clear_native_function","void",["pointer"]],_ZN6Method24restore_unshareable_infoEP10JavaThread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method24restore_unshareable_infoEP6Thread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method11link_methodERK12methodHandleP10JavaThread:["Method::link_method","void",["pointer","pointer","pointer"]],_ZN6Method10jmethod_idEv:["Method::jmethod_id","pointer",["pointer"]],_ZN6Method10clear_codeEv:function(a){let c=new NativeFunction(a,"void",["pointer"],ze);this["Method::clear_code"]=function(d){c(d)}},_ZN6Method10clear_codeEb:function(a){let c=new NativeFunction(a,"void",["pointer","int"],ze),d=0;this["Method::clear_code"]=function(f){c(f,d)}},_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass:["VM_RedefineClasses::mark_dependent_code","void",["pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeEv:["VM_RedefineClasses::flush_dependent_code","void",[]],_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN19ResolvedMethodTable21adjust_method_entriesEPb:["ResolvedMethodTable::adjust_method_entries","void",["pointer"]],_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb:["MemberNameTable::adjust_method_entries","void",["pointer","pointer","pointer"]],_ZN17ConstantPoolCache21adjust_method_entriesEPb:function(a){let c=new NativeFunction(a,"void",["pointer","pointer"],ze);this["ConstantPoolCache::adjust_method_entries"]=function(d,f,p){c(d,p)}},_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb:function(a){let c=new NativeFunction(a,"void",["pointer","pointer","pointer"],ze);this["ConstantPoolCache::adjust_method_entries"]=function(d,f,p){c(d,f,p)}},_ZN20ClassLoaderDataGraph10classes_doEP12KlassClosure:["ClassLoaderDataGraph::classes_do","void",["pointer"]],_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb:["ClassLoaderDataGraph::clean_deallocate_lists","void",["int"]],_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_:["JavaThread::thread_from_jni_environment","pointer",["pointer"]],_ZN8VMThread7executeEP12VM_Operation:["VMThread::execute","void",["pointer"]],_ZN11OopMapCache22flush_obsolete_entriesEv:["OopMapCache::flush_obsolete_entries","void",["pointer"]],_ZN14NMethodSweeper11force_sweepEv:["NMethodSweeper::force_sweep","void",[]],_ZN14NMethodSweeper16sweep_code_cacheEv:["NMethodSweeper::sweep_code_cache","void",[]],_ZN14NMethodSweeper17sweep_in_progressEv:["NMethodSweeper::sweep_in_progress","bool",[]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]]},variables:{_ZN18VM_RedefineClasses14_the_class_oopE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses10_the_classE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass:function(a){this.doKlass=a},_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass:function(a){this.doKlass=a},_ZTV18VM_RedefineClasses:function(a){this.vtableRedefineClasses=a},_ZN18VM_RedefineClasses4doitEv:function(a){this.redefineClassesDoIt=a},_ZN18VM_RedefineClasses13doit_prologueEv:function(a){this.redefineClassesDoItPrologue=a},_ZN18VM_RedefineClasses13doit_epilogueEv:function(a){this.redefineClassesDoItEpilogue=a},_ZN18VM_RedefineClassesD0Ev:function(a){this.redefineClassesDispose0=a},_ZN18VM_RedefineClassesD1Ev:function(a){this.redefineClassesDispose1=a},_ZNK18VM_RedefineClasses26allow_nested_vm_operationsEv:function(a){this.redefineClassesAllow=a},_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream:function(a){this.redefineClassesOnError=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread:function(a){this.createNewDefaultVtableIndices=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread:function(a){this.createNewDefaultVtableIndices=a},_ZN19Abstract_VM_Version19jre_release_versionEv:function(a){let d=new NativeFunction(a,"pointer",[],ze)().readCString();this.version=d.startsWith("1.8")?8:d.startsWith("9.")?9:parseInt(d.slice(0,2),10),this.versionS=d},_ZN14NMethodSweeper11_traversalsE:function(a){this.traversals=a},_ZN14NMethodSweeper21_sweep_fractions_leftE:function(a){this.fractions=a},_ZN14NMethodSweeper13_should_sweepE:function(a){this.shouldSweep=a}},optionals:["_ZN6Method24restore_unshareable_infoEP10JavaThread","_ZN6Method24restore_unshareable_infoEP6Thread","_ZN6Method11link_methodERK12methodHandleP10JavaThread","_ZN6Method10clear_codeEv","_ZN6Method10clear_codeEb","_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass","_ZN18VM_RedefineClasses20flush_dependent_codeEv","_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread","_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread","_ZN19ResolvedMethodTable21adjust_method_entriesEPb","_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb","_ZN17ConstantPoolCache21adjust_method_entriesEPb","_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb","_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb","_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_","_ZN14NMethodSweeper11force_sweepEv","_ZN14NMethodSweeper17sweep_in_progressEv","_ZN18VM_RedefineClasses14_the_class_oopE","_ZN18VM_RedefineClasses10_the_classE","_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass","_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass","_ZN18VM_RedefineClassesD0Ev","_ZN18VM_RedefineClassesD1Ev","_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread","_ZN14NMethodSweeper21_sweep_fractions_leftE"]}],o=[];if(r.forEach(function(a){let c=a.module,d=a.functions||{},f=a.variables||{},p=new Set(a.optionals||[]),u=c.enumerateExports().reduce(function(m,E){return m[E.name]=E,m},{}),g=c.enumerateSymbols().reduce(function(m,E){return m[E.name]=E,m},u);Object.keys(d).forEach(function(m){let E=g[m];if(E!==void 0){let w=d[m];typeof w=="function"?w.call(n,E.address):n[w[0]]=new NativeFunction(E.address,w[1],w[2],ze)}else p.has(m)||o.push(m)}),Object.keys(f).forEach(function(m){let E=g[m];E!==void 0?f[m].call(n,E.address):p.has(m)||o.push(m)})}),o.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+o.join(", "));let i=Memory.alloc(Y),s=Memory.alloc(Bc);if(ye("JNI_GetCreatedJavaVMs",n.JNI_GetCreatedJavaVMs(i,1,s)),s.readInt()===0)return null;n.vm=i.readPointer();let l=Process.platform==="windows"?{$new:["??2@YAPEAX_K@Z","pointer",["ulong"]],$delete:["??3@YAXPEAX@Z","void",["pointer"]]}:{$new:["_Znwm","pointer",["ulong"]],$delete:["_ZdlPv","void",["pointer"]]};for(let[a,[c,d,f]]of Object.entries(l)){let p=Module.findGlobalExportByName(c);if(p===null&&(p=DebugSymbol.fromName(c).address,p.isNull()))throw new Error(`unable to find C++ allocator API, missing: '${c}'`);n[a]=new NativeFunction(p,d,f,ze)}return n.jvmti=qc(n),n["JavaThread::thread_from_jni_environment"]===void 0&&(n["JavaThread::thread_from_jni_environment"]=Yc(n)),n}function qc(t){let e=new Le(t),n;return e.perform(()=>{let r=e.tryGetEnvHandle(Et.v1_0);if(r===null)throw new Error("JVMTI not available");n=new je(r,e);let o=Memory.alloc(8);o.writeU64(vt.canTagObjects);let i=n.addCapabilities(o);ye("getEnvJvmti::AddCapabilities",i)}),n}var Qc={x64:Xc};function Yc(t){let e=null,n=Qc[Process.arch];if(n!==void 0){let o=new Le(t).perform(i=>i.handle.readPointer().add(6*Y).readPointer());e=Oe(o,n,{limit:11})}return e===null?()=>{throw new Error("Unable to make thread_from_jni_environment() helper for the current architecture")}:r=>r.add(e)}function Xc(t){if(t.mnemonic!=="lea")return null;let{base:e,disp:n}=t.operands[1].value;return e==="rdi"&&n<0?n:null}function Co(t,e){}var or=class{constructor(e){this.methodId=e,this.method=e.readPointer(),this.originalMethod=null,this.newMethod=null,this.resolved=null,this.impl=null,this.key=e.toString(16)}replace(e,n,r,o,i){let{key:s}=this,l=ft.get(s);l!==void 0&&(ft.delete(s),this.method=l.method,this.originalMethod=l.originalMethod,this.newMethod=l.newMethod,this.resolved=l.resolved),this.impl=e,Ut.set(s,this),So(o)}revert(e){let{key:n}=this;Ut.delete(n),ft.set(n,this),So(e)}resolveTarget(e,n,r,o){let{resolved:i,originalMethod:s,methodId:l}=this;if(i!==null)return i;if(s===null)return l;s.oldMethod.vtableIndexPtr.writeS32(-2);let c=Memory.alloc(Y);return c.writePointer(this.method),this.resolved=c,c}};function So(t){rr||(rr=!0,Script.nextTick(ed,t))}function ed(t){let e=new Map(Ut),n=new Map(ft);Ut.clear(),ft.clear(),rr=!1,t.perform(r=>{let o=ke(),i=o["JavaThread::thread_from_jni_environment"](r.handle),s=!1;Ao(()=>{e.forEach(l=>{let{method:a,originalMethod:c,impl:d,methodId:f,newMethod:p}=l;c===null?(l.originalMethod=No(a),l.newMethod=rd(a,d,i),wo(l.newMethod,f,i)):o["Method::set_native_function"](p.method,d,0)}),n.forEach(l=>{let{originalMethod:a,methodId:c,newMethod:d}=l;if(a!==null){od(a);let f=a.oldMethod;f.oldMethod=d,wo(f,c,i),s=!0}})}),s&&td(r.handle)})}function td(t){let{fractions:e,shouldSweep:n,traversals:r,"NMethodSweeper::sweep_code_cache":o,"NMethodSweeper::sweep_in_progress":i,"NMethodSweeper::force_sweep":s,JVM_Sleep:l}=ke();if(s!==void 0)Thread.sleep(.05),s(),Thread.sleep(.05),s();else{let a=r.readS64(),c=a+2;for(;c>a;)e.writeS32(1),l(t,NULL,50),i()||Ao(()=>{Thread.sleep(.05)}),n.readU8()===0&&(e.writeS32(1),o()),a=r.readS64()}}function Ao(t,e,n){let{execute:r,vtable:o,vtableSize:i,doItOffset:s,prologueOffset:l,epilogueOffset:a}=Kc(),c=Memory.dup(o,i),d=Memory.alloc(Y*25);d.writePointer(c);let f=new NativeCallback(t,"void",["pointer"]);c.add(s).writePointer(f);let p=null;e!==void 0&&(p=new NativeCallback(e,"int",["pointer"]),c.add(l).writePointer(p));let u=null;n!==void 0&&(u=new NativeCallback(n,"void",["pointer"]),c.add(a).writePointer(u)),r(d)}function nd(){let{vtableRedefineClasses:t,redefineClassesDoIt:e,redefineClassesDoItPrologue:n,redefineClassesDoItEpilogue:r,redefineClassesOnError:o,redefineClassesAllow:i,redefineClassesDispose0:s,redefineClassesDispose1:l,"VMThread::execute":a}=ke(),c=t.add(2*Y),d=15*Y,f=Memory.dup(c,d),p=new NativeCallback(()=>{},"void",["pointer"]),u,g,m;for(let E=0;E!==d;E+=Y){let w=f.add(E),x=w.readPointer();o!==void 0&&x.equals(o)||s!==void 0&&x.equals(s)||l!==void 0&&x.equals(l)?w.writePointer(p):x.equals(e)?u=E:x.equals(n)?(g=E,w.writePointer(i)):x.equals(r)&&(m=E,w.writePointer(p))}return{execute:a,emptyCallback:p,vtable:f,vtableSize:d,doItOffset:u,prologueOffset:g,epilogueOffset:m}}function To(t){return new or(t)}function wo(t,e,n){let{method:r,oldMethod:o}=t,i=ke();t.methodsArray.add(t.methodIndex*Y).writePointer(r),t.vtableIndex>=0&&t.vtable.add(t.vtableIndex*Y).writePointer(r),e.writePointer(r),o.accessFlagsPtr.writeU32((o.accessFlags|Vc|Jc)>>>0);let s=i["OopMapCache::flush_obsolete_entries"];if(s!==void 0){let{oopMapCache:g}=t;g.isNull()||s(g)}let l=i["VM_RedefineClasses::mark_dependent_code"],a=i["VM_RedefineClasses::flush_dependent_code"];l!==void 0?(l(NULL,t.instanceKlass),a()):a(NULL,t.instanceKlass,n);let c=Memory.alloc(1);c.writeU8(1),i["ConstantPoolCache::adjust_method_entries"](t.cache,t.instanceKlass,c);let d=Memory.alloc(3*Y),f=Memory.alloc(Y);f.writePointer(i.doKlass),d.writePointer(f),d.add(Y).writePointer(n),d.add(2*Y).writePointer(n),i.redefineClass!==void 0&&i.redefineClass.writePointer(t.instanceKlass),i["ClassLoaderDataGraph::classes_do"](d);let p=i["ResolvedMethodTable::adjust_method_entries"];if(p!==void 0)p(c);else{let{memberNames:g}=t;if(!g.isNull()){let m=i["MemberNameTable::adjust_method_entries"];m!==void 0&&m(g,t.instanceKlass,c)}}let u=i["ClassLoaderDataGraph::clean_deallocate_lists"];u!==void 0&&u(0)}function rd(t,e,n){let r=ke(),o=No(t);o.constPtr.writePointer(o.const);let i=(o.accessFlags|zc|Gc|$c|Hc)>>>0;if(o.accessFlagsPtr.writeU32(i),o.signatureHandler.writePointer(NULL),o.adapter.writePointer(NULL),o.i2iEntry.writePointer(NULL),r["Method::clear_code"](o.method),o.dataPtr.writePointer(NULL),o.countersPtr.writePointer(NULL),o.stackmapPtr.writePointer(NULL),r["Method::clear_native_function"](o.method),r["Method::set_native_function"](o.method,e,0),r["Method::restore_unshareable_info"](o.method,n),r.version>=17){let s=Memory.alloc(2*Y);s.writePointer(o.method),s.add(Y).writePointer(n),r["Method::link_method"](o.method,s,n)}return o}function No(t){let e=xo(),n=t.add(e.method.constMethodOffset).readPointer(),r=n.add(e.constMethod.sizeOffset).readS32()*Y,o=Memory.alloc(r+e.method.size);Memory.copy(o,n,r);let i=o.add(r);Memory.copy(i,t,e.method.size);let s=Io(i,o,r),l=Io(t,n,r);return s.oldMethod=l,s}function Io(t,e,n){let r=ke(),o=xo(),i=t.add(o.method.constMethodOffset),s=t.add(o.method.methodDataOffset),l=t.add(o.method.methodCountersOffset),a=t.add(o.method.accessFlagsOffset),c=a.readU32(),d=o.getAdapterPointer(t,e),f=t.add(o.method.i2iEntryOffset),p=t.add(o.method.signatureHandlerOffset),u=e.add(o.constMethod.constantPoolOffset).readPointer(),g=e.add(o.constMethod.stackmapDataOffset),m=u.add(o.constantPool.instanceKlassOffset).readPointer(),E=u.add(o.constantPool.cacheOffset).readPointer(),w=Zc(),x=m.add(w.methodsOffset).readPointer(),k=x.readS32(),M=x.add(Y),U=e.add(o.constMethod.methodIdnumOffset).readU16(),z=t.add(o.method.vtableIndexOffset),R=z.readS32(),F=m.add(w.vtableOffset),A=m.add(w.oopMapCacheOffset).readPointer(),j=r.version>=10?m.add(w.memberNamesOffset).readPointer():NULL;return{method:t,methodSize:o.method.size,const:e,constSize:n,constPtr:i,dataPtr:s,countersPtr:l,stackmapPtr:g,instanceKlass:m,methodsArray:M,methodsCount:k,methodIndex:U,vtableIndex:R,vtableIndexPtr:z,vtable:F,accessFlags:c,accessFlagsPtr:a,adapter:d,i2iEntry:f,signatureHandler:p,memberNames:j,cache:E,oopMapCache:A}}function od(t){let{oldMethod:e}=t;e.accessFlagsPtr.writeU32(e.accessFlags),e.vtableIndexPtr.writeS32(e.vtableIndex)}function id(){let t=ke(),{version:e}=t,n;e>=17?n="method:early":e>=9&&e<=16?n="const-method":n="method:late";let o=t["Method::size"](1)*Y,i=Y,s=2*Y,l=3*Y,a=4*Y,c=n==="method:early"?Y:0,d=a+c,f=d+4,p=f+4+8,u=p+Y,g=c!==0?a:u,m=o-2*Y,E=o-Y,w=8,x=w+Y,k=x+Y,M=n==="const-method"?Y:0,U=k+M,z=U+14,R=2*Y,F=3*Y;return{getAdapterPointer:M!==0?function(j,B){return B.add(k)}:function(j,B){return j.add(g)},method:{size:o,constMethodOffset:i,methodDataOffset:s,methodCountersOffset:l,accessFlagsOffset:d,vtableIndexOffset:f,i2iEntryOffset:p,nativeFunctionOffset:m,signatureHandlerOffset:E},constMethod:{constantPoolOffset:w,stackmapDataOffset:x,sizeOffset:U,methodIdnumOffset:z},constantPool:{cacheOffset:R,instanceKlassOffset:F}}}var sd={x64:ld};function ad(){let{version:t,createNewDefaultVtableIndices:e}=ke(),n=sd[Process.arch];if(n===void 0)throw new Error(`Missing vtable offset parser for ${Process.arch}`);let r=Oe(e,n,{limit:32});if(r===null)throw new Error("Unable to deduce vtable offset");let o=t>=10&&t<=11||t>=15?17:18,i=r-7*Y,s=r-17*Y,l=r-o*Y;return{vtableOffset:r,methodsOffset:i,memberNamesOffset:s,oopMapCacheOffset:l}}function ld(t){if(t.mnemonic!=="mov")return null;let e=t.operands[0];if(e.type!=="mem")return null;let{value:n}=e;if(n.scale!==1)return null;let{disp:r}=n;return r<256?null:r+16}var Lo=X;try{ut()}catch{Lo=ke}var pt=Lo;var cd=`#include <json-glib/json-glib.h>
#include <string.h>

#define kAccStatic 0x0008
#define kAccConstructor 0x00010000

typedef struct _Model Model;
typedef struct _EnumerateMethodsContext EnumerateMethodsContext;

typedef struct _JavaApi JavaApi;
typedef struct _JavaClassApi JavaClassApi;
typedef struct _JavaMethodApi JavaMethodApi;
typedef struct _JavaFieldApi JavaFieldApi;

typedef struct _JNIEnv JNIEnv;
typedef guint8 jboolean;
typedef gint32 jint;
typedef jint jsize;
typedef gpointer jobject;
typedef jobject jclass;
typedef jobject jstring;
typedef jobject jarray;
typedef jarray jobjectArray;
typedef gpointer jfieldID;
typedef gpointer jmethodID;

typedef struct _jvmtiEnv jvmtiEnv;
typedef enum
{
  JVMTI_ERROR_NONE = 0
} jvmtiError;

typedef struct _ArtApi ArtApi;
typedef guint32 ArtHeapReference;
typedef struct _ArtObject ArtObject;
typedef struct _ArtClass ArtClass;
typedef struct _ArtClassLinker ArtClassLinker;
typedef struct _ArtClassVisitor ArtClassVisitor;
typedef struct _ArtClassVisitorVTable ArtClassVisitorVTable;
typedef struct _ArtMethod ArtMethod;
typedef struct _ArtString ArtString;

typedef union _StdString StdString;
typedef struct _StdStringShort StdStringShort;
typedef struct _StdStringLong StdStringLong;

typedef void (* ArtVisitClassesFunc) (ArtClassLinker * linker, ArtClassVisitor * visitor);
typedef const char * (* ArtGetClassDescriptorFunc) (ArtClass * klass, StdString * storage);
typedef void (* ArtPrettyMethodFunc) (StdString * result, ArtMethod * method, jboolean with_signature);

struct _Model
{
  GHashTable * members;
};

struct _EnumerateMethodsContext
{
  GPatternSpec * class_query;
  GPatternSpec * method_query;
  jboolean include_signature;
  jboolean ignore_case;
  jboolean skip_system_classes;
  GHashTable * groups;
};

struct _JavaClassApi
{
  jmethodID get_declared_methods;
  jmethodID get_declared_fields;
};

struct _JavaMethodApi
{
  jmethodID get_name;
  jmethodID get_modifiers;
};

struct _JavaFieldApi
{
  jmethodID get_name;
  jmethodID get_modifiers;
};

struct _JavaApi
{
  jvmtiEnv * jvmti;
  JavaClassApi clazz;
  JavaMethodApi method;
  JavaFieldApi field;
};

struct _JNIEnv
{
  gpointer * functions;
};

struct _jvmtiEnv
{
  gpointer * functions;
};

struct _ArtApi
{
  gboolean available;

  guint class_offset_ifields;
  guint class_offset_methods;
  guint class_offset_sfields;
  guint class_offset_copied_methods_offset;

  guint method_size;
  guint method_offset_access_flags;

  guint field_size;
  guint field_offset_access_flags;

  guint alignment_padding;

  ArtClassLinker * linker;
  ArtVisitClassesFunc visit_classes;
  ArtGetClassDescriptorFunc get_class_descriptor;
  ArtPrettyMethodFunc pretty_method;

  void (* free) (gpointer mem);
};

struct _ArtObject
{
  ArtHeapReference klass;
  ArtHeapReference monitor;
};

struct _ArtClass
{
  ArtObject parent;

  ArtHeapReference class_loader;
};

struct _ArtClassVisitor
{
  ArtClassVisitorVTable * vtable;
  gpointer user_data;
};

struct _ArtClassVisitorVTable
{
  void (* reserved1) (ArtClassVisitor * self);
  void (* reserved2) (ArtClassVisitor * self);
  jboolean (* visit) (ArtClassVisitor * self, ArtClass * klass);
};

struct _ArtString
{
  ArtObject parent;

  gint32 count;
  guint32 hash_code;

  union
  {
    guint16 value[0];
    guint8 value_compressed[0];
  };
};

struct _StdStringShort
{
  guint8 size;
  gchar data[(3 * sizeof (gpointer)) - sizeof (guint8)];
};

struct _StdStringLong
{
  gsize capacity;
  gsize size;
  gchar * data;
};

union _StdString
{
  StdStringShort s;
  StdStringLong l;
};

static void model_add_method (Model * self, const gchar * name, jmethodID id, jint modifiers);
static void model_add_field (Model * self, const gchar * name, jfieldID id, jint modifiers);
static void model_free (Model * model);

static jboolean collect_matching_class_methods (ArtClassVisitor * self, ArtClass * klass);
static gchar * finalize_method_groups_to_json (GHashTable * groups);
static GPatternSpec * make_pattern_spec (const gchar * pattern, jboolean ignore_case);
static gchar * class_name_from_signature (const gchar * signature);
static gchar * format_method_signature (const gchar * name, const gchar * signature);
static void append_type (GString * output, const gchar ** type);

static gpointer read_art_array (gpointer object_base, guint field_offset, guint length_size, guint * length);

static void std_string_destroy (StdString * str);
static gchar * std_string_c_str (StdString * self);

extern GMutex lock;
extern GArray * models;
extern JavaApi java_api;
extern ArtApi art_api;

void
init (void)
{
  g_mutex_init (&lock);
  models = g_array_new (FALSE, FALSE, sizeof (Model *));
}

void
finalize (void)
{
  guint n, i;

  n = models->len;
  for (i = 0; i != n; i++)
  {
    Model * model = g_array_index (models, Model *, i);
    model_free (model);
  }

  g_array_unref (models);
  g_mutex_clear (&lock);
}

Model *
model_new (jclass class_handle,
           gpointer class_object,
           JNIEnv * env)
{
  Model * model;
  GHashTable * members;
  jvmtiEnv * jvmti = java_api.jvmti;
  gpointer * funcs = env->functions;
  jmethodID (* from_reflected_method) (JNIEnv *, jobject) = funcs[7];
  jfieldID (* from_reflected_field) (JNIEnv *, jobject) = funcs[8];
  jobject (* to_reflected_method) (JNIEnv *, jclass, jmethodID, jboolean) = funcs[9];
  jobject (* to_reflected_field) (JNIEnv *, jclass, jfieldID, jboolean) = funcs[12];
  void (* delete_local_ref) (JNIEnv *, jobject) = funcs[23];
  jobject (* call_object_method) (JNIEnv *, jobject, jmethodID, ...) = funcs[34];
  jint (* call_int_method) (JNIEnv *, jobject, jmethodID, ...) = funcs[49];
  const char * (* get_string_utf_chars) (JNIEnv *, jstring, jboolean *) = funcs[169];
  void (* release_string_utf_chars) (JNIEnv *, jstring, const char *) = funcs[170];
  jsize (* get_array_length) (JNIEnv *, jarray) = funcs[171];
  jobject (* get_object_array_element) (JNIEnv *, jobjectArray, jsize) = funcs[173];
  jsize n, i;

  model = g_new (Model, 1);

  members = g_hash_table_new_full (g_str_hash, g_str_equal, g_free, g_free);
  model->members = members;

  if (jvmti != NULL)
  {
    gpointer * jf = jvmti->functions - 1;
    jvmtiError (* deallocate) (jvmtiEnv *, void * mem) = jf[47];
    jvmtiError (* get_class_methods) (jvmtiEnv *, jclass, jint *, jmethodID **) = jf[52];
    jvmtiError (* get_class_fields) (jvmtiEnv *, jclass, jint *, jfieldID **) = jf[53];
    jvmtiError (* get_field_name) (jvmtiEnv *, jclass, jfieldID, char **, char **, char **) = jf[60];
    jvmtiError (* get_field_modifiers) (jvmtiEnv *, jclass, jfieldID, jint *) = jf[62];
    jvmtiError (* get_method_name) (jvmtiEnv *, jmethodID, char **, char **, char **) = jf[64];
    jvmtiError (* get_method_modifiers) (jvmtiEnv *, jmethodID, jint *) = jf[66];
    jint method_count;
    jmethodID * methods;
    jint field_count;
    jfieldID * fields;
    char * name;
    jint modifiers;

    get_class_methods (jvmti, class_handle, &method_count, &methods);
    for (i = 0; i != method_count; i++)
    {
      jmethodID method = methods[i];

      get_method_name (jvmti, method, &name, NULL, NULL);
      get_method_modifiers (jvmti, method, &modifiers);

      if (name[0] != '<')
        model_add_method (model, name, method, modifiers);

      deallocate (jvmti, name);
    }
    deallocate (jvmti, methods);

    get_class_fields (jvmti, class_handle, &field_count, &fields);
    for (i = 0; i != field_count; i++)
    {
      jfieldID field = fields[i];

      get_field_name (jvmti, class_handle, field, &name, NULL, NULL);
      get_field_modifiers (jvmti, class_handle, field, &modifiers);

      model_add_field (model, name, field, modifiers);

      deallocate (jvmti, name);
    }
    deallocate (jvmti, fields);
  }
  else if (art_api.available)
  {
    gpointer elements;
    guint n, i;
    const guint field_arrays[] = {
      art_api.class_offset_ifields,
      art_api.class_offset_sfields
    };
    guint field_array_cursor;
    gboolean merged_fields = art_api.class_offset_sfields == 0;

    elements = read_art_array (class_object, art_api.class_offset_methods, sizeof (gsize), NULL);
    n = *(guint16 *) (class_object + art_api.class_offset_copied_methods_offset);
    for (i = 0; i != n; i++)
    {
      jmethodID id;
      guint32 access_flags;
      jboolean is_static;
      jobject method, name;
      const char * name_str;
      jint modifiers;

      id = elements + (i * art_api.method_size);

      access_flags = *(guint32 *) (id + art_api.method_offset_access_flags);
      if ((access_flags & kAccConstructor) != 0)
        continue;
      is_static = (access_flags & kAccStatic) != 0;
      method = to_reflected_method (env, class_handle, id, is_static);
      name = call_object_method (env, method, java_api.method.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      modifiers = access_flags & 0xffff;

      model_add_method (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, method);
    }

    for (field_array_cursor = 0; field_array_cursor != G_N_ELEMENTS (field_arrays); field_array_cursor++)
    {
      jboolean is_static;

      if (field_arrays[field_array_cursor] == 0)
        continue;

      if (!merged_fields)
        is_static = field_array_cursor == 1;

      elements = read_art_array (class_object, field_arrays[field_array_cursor], sizeof (guint32), &n);
      for (i = 0; i != n; i++)
      {
        jfieldID id;
        guint32 access_flags;
        jobject field, name;
        const char * name_str;
        jint modifiers;

        id = elements + (i * art_api.field_size);

        access_flags = *(guint32 *) (id + art_api.field_offset_access_flags);
        if (merged_fields)
          is_static = (access_flags & kAccStatic) != 0;
        field = to_reflected_field (env, class_handle, id, is_static);
        name = call_object_method (env, field, java_api.field.get_name);
        name_str = get_string_utf_chars (env, name, NULL);
        modifiers = access_flags & 0xffff;

        model_add_field (model, name_str, id, modifiers);

        release_string_utf_chars (env, name, name_str);
        delete_local_ref (env, name);
        delete_local_ref (env, field);
      }
    }
  }
  else
  {
    jobject elements;

    elements = call_object_method (env, class_handle, java_api.clazz.get_declared_methods);
    n = get_array_length (env, elements);
    for (i = 0; i != n; i++)
    {
      jobject method, name;
      const char * name_str;
      jmethodID id;
      jint modifiers;

      method = get_object_array_element (env, elements, i);
      name = call_object_method (env, method, java_api.method.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      id = from_reflected_method (env, method);
      modifiers = call_int_method (env, method, java_api.method.get_modifiers);

      model_add_method (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, method);
    }
    delete_local_ref (env, elements);

    elements = call_object_method (env, class_handle, java_api.clazz.get_declared_fields);
    n = get_array_length (env, elements);
    for (i = 0; i != n; i++)
    {
      jobject field, name;
      const char * name_str;
      jfieldID id;
      jint modifiers;

      field = get_object_array_element (env, elements, i);
      name = call_object_method (env, field, java_api.field.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      id = from_reflected_field (env, field);
      modifiers = call_int_method (env, field, java_api.field.get_modifiers);

      model_add_field (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, field);
    }
    delete_local_ref (env, elements);
  }

  g_mutex_lock (&lock);
  g_array_append_val (models, model);
  g_mutex_unlock (&lock);

  return model;
}

static void
model_add_method (Model * self,
                  const gchar * name,
                  jmethodID id,
                  jint modifiers)
{
  GHashTable * members = self->members;
  gchar * key, type;
  const gchar * value;

  if (name[0] == '$')
    key = g_strdup_printf ("_%s", name);
  else
    key = g_strdup (name);

  type = (modifiers & kAccStatic) != 0 ? 's' : 'i';

  value = g_hash_table_lookup (members, key);
  if (value == NULL)
    g_hash_table_insert (members, key, g_strdup_printf ("m:%c0x%zx", type, id));
  else
    g_hash_table_insert (members, key, g_strdup_printf ("%s:%c0x%zx", value, type, id));
}

static void
model_add_field (Model * self,
                 const gchar * name,
                 jfieldID id,
                 jint modifiers)
{
  GHashTable * members = self->members;
  gchar * key, type;

  if (name[0] == '$')
    key = g_strdup_printf ("_%s", name);
  else
    key = g_strdup (name);
  while (g_hash_table_contains (members, key))
  {
    gchar * new_key = g_strdup_printf ("_%s", key);
    g_free (key);
    key = new_key;
  }

  type = (modifiers & kAccStatic) != 0 ? 's' : 'i';

  g_hash_table_insert (members, key, g_strdup_printf ("f:%c0x%zx", type, id));
}

static void
model_free (Model * model)
{
  g_hash_table_unref (model->members);

  g_free (model);
}

gboolean
model_has (Model * self,
           const gchar * member)
{
  return g_hash_table_contains (self->members, member);
}

const gchar *
model_find (Model * self,
            const gchar * member)
{
  return g_hash_table_lookup (self->members, member);
}

gchar *
model_list (Model * self)
{
  GString * result;
  GHashTableIter iter;
  guint i;
  const gchar * name;

  result = g_string_sized_new (128);

  g_string_append_c (result, '[');

  g_hash_table_iter_init (&iter, self->members);
  for (i = 0; g_hash_table_iter_next (&iter, (gpointer *) &name, NULL); i++)
  {
    if (i > 0)
      g_string_append_c (result, ',');

    g_string_append_c (result, '"');
    g_string_append (result, name);
    g_string_append_c (result, '"');
  }

  g_string_append_c (result, ']');

  return g_string_free (result, FALSE);
}

gchar *
enumerate_methods_art (const gchar * class_query,
                       const gchar * method_query,
                       jboolean include_signature,
                       jboolean ignore_case,
                       jboolean skip_system_classes)
{
  gchar * result;
  EnumerateMethodsContext ctx;
  ArtClassVisitor visitor;
  ArtClassVisitorVTable visitor_vtable = { NULL, };

  ctx.class_query = make_pattern_spec (class_query, ignore_case);
  ctx.method_query = make_pattern_spec (method_query, ignore_case);
  ctx.include_signature = include_signature;
  ctx.ignore_case = ignore_case;
  ctx.skip_system_classes = skip_system_classes;
  ctx.groups = g_hash_table_new_full (NULL, NULL, NULL, NULL);

  visitor.vtable = &visitor_vtable;
  visitor.user_data = &ctx;

  visitor_vtable.visit = collect_matching_class_methods;

  art_api.visit_classes (art_api.linker, &visitor);

  result = finalize_method_groups_to_json (ctx.groups);

  g_hash_table_unref (ctx.groups);
  g_pattern_spec_free (ctx.method_query);
  g_pattern_spec_free (ctx.class_query);

  return result;
}

static jboolean
collect_matching_class_methods (ArtClassVisitor * self,
                                ArtClass * klass)
{
  EnumerateMethodsContext * ctx = self->user_data;
  const char * descriptor;
  StdString descriptor_storage = { 0, };
  gchar * class_name = NULL;
  gchar * class_name_copy = NULL;
  const gchar * normalized_class_name;
  JsonBuilder * group;
  size_t class_name_length;
  GHashTable * seen_method_names;
  gpointer elements;
  guint n, i;

  if (ctx->skip_system_classes && klass->class_loader == 0)
    goto skip_class;

  descriptor = art_api.get_class_descriptor (klass, &descriptor_storage);
  if (descriptor[0] != 'L')
    goto skip_class;

  class_name = class_name_from_signature (descriptor);

  if (ctx->ignore_case)
  {
    class_name_copy = g_utf8_strdown (class_name, -1);
    normalized_class_name = class_name_copy;
  }
  else
  {
    normalized_class_name = class_name;
  }

  if (!g_pattern_match_string (ctx->class_query, normalized_class_name))
    goto skip_class;

  group = NULL;
  class_name_length = strlen (class_name);
  seen_method_names = ctx->include_signature ? NULL : g_hash_table_new_full (g_str_hash, g_str_equal, g_free, NULL);

  elements = read_art_array (klass, art_api.class_offset_methods, sizeof (gsize), NULL);
  n = *(guint16 *) ((gpointer) klass + art_api.class_offset_copied_methods_offset);
  for (i = 0; i != n; i++)
  {
    ArtMethod * method;
    guint32 access_flags;
    jboolean is_constructor;
    StdString method_name = { 0, };
    const gchar * bare_method_name;
    gchar * bare_method_name_copy = NULL;
    const gchar * normalized_method_name;
    gchar * normalized_method_name_copy = NULL;

    method = elements + (i * art_api.method_size);

    access_flags = *(guint32 *) ((gpointer) method + art_api.method_offset_access_flags);
    is_constructor = (access_flags & kAccConstructor) != 0;

    art_api.pretty_method (&method_name, method, ctx->include_signature);
    bare_method_name = std_string_c_str (&method_name);
    if (ctx->include_signature)
    {
      const gchar * return_type_end, * name_begin;
      GString * name;

      return_type_end = strchr (bare_method_name, ' ');
      name_begin = return_type_end + 1 + class_name_length + 1;
      if (is_constructor && g_str_has_prefix (name_begin, "<clinit>"))
        goto skip_method;

      name = g_string_sized_new (64);

      if (is_constructor)
      {
        g_string_append (name, "$init");
        g_string_append (name, strchr (name_begin, '>') + 1);
      }
      else
      {
        g_string_append (name, name_begin);
      }
      g_string_append (name, ": ");
      g_string_append_len (name, bare_method_name, return_type_end - bare_method_name);

      bare_method_name_copy = g_string_free (name, FALSE);
      bare_method_name = bare_method_name_copy;
    }
    else
    {
      const gchar * name_begin;

      name_begin = bare_method_name + class_name_length + 1;
      if (is_constructor && strcmp (name_begin, "<clinit>") == 0)
        goto skip_method;

      if (is_constructor)
        bare_method_name = "$init";
      else
        bare_method_name += class_name_length + 1;
    }

    if (seen_method_names != NULL && g_hash_table_contains (seen_method_names, bare_method_name))
      goto skip_method;

    if (ctx->ignore_case)
    {
      normalized_method_name_copy = g_utf8_strdown (bare_method_name, -1);
      normalized_method_name = normalized_method_name_copy;
    }
    else
    {
      normalized_method_name = bare_method_name;
    }

    if (!g_pattern_match_string (ctx->method_query, normalized_method_name))
      goto skip_method;

    if (group == NULL)
    {
      group = g_hash_table_lookup (ctx->groups, GUINT_TO_POINTER (klass->class_loader));
      if (group == NULL)
      {
        group = json_builder_new_immutable ();
        g_hash_table_insert (ctx->groups, GUINT_TO_POINTER (klass->class_loader), group);

        json_builder_begin_object (group);

        json_builder_set_member_name (group, "loader");
        json_builder_add_int_value (group, klass->class_loader);

        json_builder_set_member_name (group, "classes");
        json_builder_begin_array (group);
      }

      json_builder_begin_object (group);

      json_builder_set_member_name (group, "name");
      json_builder_add_string_value (group, class_name);

      json_builder_set_member_name (group, "methods");
      json_builder_begin_array (group);
    }

    json_builder_add_string_value (group, bare_method_name);

    if (seen_method_names != NULL)
      g_hash_table_add (seen_method_names, g_strdup (bare_method_name));

skip_method:
    g_free (normalized_method_name_copy);
    g_free (bare_method_name_copy);
    std_string_destroy (&method_name);
  }

  if (seen_method_names != NULL)
    g_hash_table_unref (seen_method_names);

  if (group == NULL)
    goto skip_class;

  json_builder_end_array (group);
  json_builder_end_object (group);

skip_class:
  g_free (class_name_copy);
  g_free (class_name);
  std_string_destroy (&descriptor_storage);

  return TRUE;
}

gchar *
enumerate_methods_jvm (const gchar * class_query,
                       const gchar * method_query,
                       jboolean include_signature,
                       jboolean ignore_case,
                       jboolean skip_system_classes,
                       JNIEnv * env)
{
  gchar * result;
  GPatternSpec * class_pattern, * method_pattern;
  GHashTable * groups;
  gpointer * ef = env->functions;
  jobject (* new_global_ref) (JNIEnv *, jobject) = ef[21];
  void (* delete_local_ref) (JNIEnv *, jobject) = ef[23];
  jboolean (* is_same_object) (JNIEnv *, jobject, jobject) = ef[24];
  jvmtiEnv * jvmti = java_api.jvmti;
  gpointer * jf = jvmti->functions - 1;
  jvmtiError (* deallocate) (jvmtiEnv *, void * mem) = jf[47];
  jvmtiError (* get_class_signature) (jvmtiEnv *, jclass, char **, char **) = jf[48];
  jvmtiError (* get_class_methods) (jvmtiEnv *, jclass, jint *, jmethodID **) = jf[52];
  jvmtiError (* get_class_loader) (jvmtiEnv *, jclass, jobject *) = jf[57];
  jvmtiError (* get_method_name) (jvmtiEnv *, jmethodID, char **, char **, char **) = jf[64];
  jvmtiError (* get_loaded_classes) (jvmtiEnv *, jint *, jclass **) = jf[78];
  jint class_count, class_index;
  jclass * classes;

  class_pattern = make_pattern_spec (class_query, ignore_case);
  method_pattern = make_pattern_spec (method_query, ignore_case);
  groups = g_hash_table_new_full (NULL, NULL, NULL, NULL);

  if (get_loaded_classes (jvmti, &class_count, &classes) != JVMTI_ERROR_NONE)
    goto emit_results;

  for (class_index = 0; class_index != class_count; class_index++)
  {
    jclass klass = classes[class_index];
    jobject loader = NULL;
    gboolean have_loader = FALSE;
    char * signature = NULL;
    gchar * class_name = NULL;
    gchar * class_name_copy = NULL;
    const gchar * normalized_class_name;
    jint method_count, method_index;
    jmethodID * methods = NULL;
    JsonBuilder * group = NULL;
    GHashTable * seen_method_names = NULL;

    if (skip_system_classes)
    {
      if (get_class_loader (jvmti, klass, &loader) != JVMTI_ERROR_NONE)
        goto skip_class;
      have_loader = TRUE;

      if (loader == NULL)
        goto skip_class;
    }

    if (get_class_signature (jvmti, klass, &signature, NULL) != JVMTI_ERROR_NONE)
      goto skip_class;

    class_name = class_name_from_signature (signature);

    if (ignore_case)
    {
      class_name_copy = g_utf8_strdown (class_name, -1);
      normalized_class_name = class_name_copy;
    }
    else
    {
      normalized_class_name = class_name;
    }

    if (!g_pattern_match_string (class_pattern, normalized_class_name))
      goto skip_class;

    if (get_class_methods (jvmti, klass, &method_count, &methods) != JVMTI_ERROR_NONE)
      goto skip_class;

    if (!include_signature)
      seen_method_names = g_hash_table_new_full (g_str_hash, g_str_equal, g_free, NULL);

    for (method_index = 0; method_index != method_count; method_index++)
    {
      jmethodID method = methods[method_index];
      const gchar * method_name;
      char * method_name_value = NULL;
      char * method_signature_value = NULL;
      gchar * method_name_copy = NULL;
      const gchar * normalized_method_name;
      gchar * normalized_method_name_copy = NULL;

      if (get_method_name (jvmti, method, &method_name_value, include_signature ? &method_signature_value : NULL, NULL) != JVMTI_ERROR_NONE)
        goto skip_method;
      method_name = method_name_value;

      if (method_name[0] == '<')
      {
        if (strcmp (method_name, "<init>") == 0)
          method_name = "$init";
        else if (strcmp (method_name, "<clinit>") == 0)
          goto skip_method;
      }

      if (include_signature)
      {
        method_name_copy = format_method_signature (method_name, method_signature_value);
        method_name = method_name_copy;
      }

      if (seen_method_names != NULL && g_hash_table_contains (seen_method_names, method_name))
        goto skip_method;

      if (ignore_case)
      {
        normalized_method_name_copy = g_utf8_strdown (method_name, -1);
        normalized_method_name = normalized_method_name_copy;
      }
      else
      {
        normalized_method_name = method_name;
      }

      if (!g_pattern_match_string (method_pattern, normalized_method_name))
        goto skip_method;

      if (group == NULL)
      {
        if (!have_loader && get_class_loader (jvmti, klass, &loader) != JVMTI_ERROR_NONE)
          goto skip_method;

        if (loader == NULL)
        {
          group = g_hash_table_lookup (groups, NULL);
        }
        else
        {
          GHashTableIter iter;
          jobject cur_loader;
          JsonBuilder * cur_group;

          g_hash_table_iter_init (&iter, groups);
          while (g_hash_table_iter_next (&iter, (gpointer *) &cur_loader, (gpointer *) &cur_group))
          {
            if (cur_loader != NULL && is_same_object (env, cur_loader, loader))
            {
              group = cur_group;
              break;
            }
          }
        }

        if (group == NULL)
        {
          jobject l;
          gchar * str;

          l = (loader != NULL) ? new_global_ref (env, loader) : NULL;

          group = json_builder_new_immutable ();
          g_hash_table_insert (groups, l, group);

          json_builder_begin_object (group);

          json_builder_set_member_name (group, "loader");
          str = g_strdup_printf ("0x%" G_GSIZE_MODIFIER "x", GPOINTER_TO_SIZE (l));
          json_builder_add_string_value (group, str);
          g_free (str);

          json_builder_set_member_name (group, "classes");
          json_builder_begin_array (group);
        }

        json_builder_begin_object (group);

        json_builder_set_member_name (group, "name");
        json_builder_add_string_value (group, class_name);

        json_builder_set_member_name (group, "methods");
        json_builder_begin_array (group);
      }

      json_builder_add_string_value (group, method_name);

      if (seen_method_names != NULL)
        g_hash_table_add (seen_method_names, g_strdup (method_name));

skip_method:
      g_free (normalized_method_name_copy);
      g_free (method_name_copy);
      deallocate (jvmti, method_signature_value);
      deallocate (jvmti, method_name_value);
    }

skip_class:
    if (group != NULL)
    {
      json_builder_end_array (group);
      json_builder_end_object (group);
    }

    if (seen_method_names != NULL)
      g_hash_table_unref (seen_method_names);

    deallocate (jvmti, methods);

    g_free (class_name_copy);
    g_free (class_name);
    deallocate (jvmti, signature);

    if (loader != NULL)
      delete_local_ref (env, loader);

    delete_local_ref (env, klass);
  }

  deallocate (jvmti, classes);

emit_results:
  result = finalize_method_groups_to_json (groups);

  g_hash_table_unref (groups);
  g_pattern_spec_free (method_pattern);
  g_pattern_spec_free (class_pattern);

  return result;
}

static gchar *
finalize_method_groups_to_json (GHashTable * groups)
{
  GString * result;
  GHashTableIter iter;
  guint i;
  JsonBuilder * group;

  result = g_string_sized_new (1024);

  g_string_append_c (result, '[');

  g_hash_table_iter_init (&iter, groups);
  for (i = 0; g_hash_table_iter_next (&iter, NULL, (gpointer *) &group); i++)
  {
    JsonNode * root;
    gchar * json;

    if (i > 0)
      g_string_append_c (result, ',');

    json_builder_end_array (group);
    json_builder_end_object (group);

    root = json_builder_get_root (group);
    json = json_to_string (root, FALSE);
    g_string_append (result, json);
    g_free (json);
    json_node_unref (root);

    g_object_unref (group);
  }

  g_string_append_c (result, ']');

  return g_string_free (result, FALSE);
}

static GPatternSpec *
make_pattern_spec (const gchar * pattern,
                   jboolean ignore_case)
{
  GPatternSpec * spec;

  if (ignore_case)
  {
    gchar * str = g_utf8_strdown (pattern, -1);
    spec = g_pattern_spec_new (str);
    g_free (str);
  }
  else
  {
    spec = g_pattern_spec_new (pattern);
  }

  return spec;
}

static gchar *
class_name_from_signature (const gchar * descriptor)
{
  gchar * result, * c;

  result = g_strdup (descriptor + 1);

  for (c = result; *c != '\\0'; c++)
  {
    if (*c == '/')
      *c = '.';
  }

  c[-1] = '\\0';

  return result;
}

static gchar *
format_method_signature (const gchar * name,
                         const gchar * signature)
{
  GString * sig;
  const gchar * cursor;
  gint arg_index;

  sig = g_string_sized_new (128);

  g_string_append (sig, name);

  cursor = signature;
  arg_index = -1;
  while (TRUE)
  {
    const gchar c = *cursor;

    if (c == '(')
    {
      g_string_append_c (sig, c);
      cursor++;
      arg_index = 0;
    }
    else if (c == ')')
    {
      g_string_append_c (sig, c);
      cursor++;
      break;
    }
    else
    {
      if (arg_index >= 1)
        g_string_append (sig, ", ");

      append_type (sig, &cursor);

      if (arg_index != -1)
        arg_index++;
    }
  }

  g_string_append (sig, ": ");
  append_type (sig, &cursor);

  return g_string_free (sig, FALSE);
}

static void
append_type (GString * output,
             const gchar ** type)
{
  const gchar * cursor = *type;

  switch (*cursor)
  {
    case 'Z':
      g_string_append (output, "boolean");
      cursor++;
      break;
    case 'B':
      g_string_append (output, "byte");
      cursor++;
      break;
    case 'C':
      g_string_append (output, "char");
      cursor++;
      break;
    case 'S':
      g_string_append (output, "short");
      cursor++;
      break;
    case 'I':
      g_string_append (output, "int");
      cursor++;
      break;
    case 'J':
      g_string_append (output, "long");
      cursor++;
      break;
    case 'F':
      g_string_append (output, "float");
      cursor++;
      break;
    case 'D':
      g_string_append (output, "double");
      cursor++;
      break;
    case 'V':
      g_string_append (output, "void");
      cursor++;
      break;
    case 'L':
    {
      gchar ch;

      cursor++;
      for (; (ch = *cursor) != ';'; cursor++)
      {
        g_string_append_c (output, (ch != '/') ? ch : '.');
      }
      cursor++;

      break;
    }
    case '[':
      *type = cursor + 1;
      append_type (output, type);
      g_string_append (output, "[]");
      return;
    default:
      g_string_append (output, "BUG");
      cursor++;
  }

  *type = cursor;
}

void
dealloc (gpointer mem)
{
  g_free (mem);
}

static gpointer
read_art_array (gpointer object_base,
                guint field_offset,
                guint length_size,
                guint * length)
{
  gpointer result, header;
  guint n;

  header = GSIZE_TO_POINTER (*(guint64 *) (object_base + field_offset));
  if (header != NULL)
  {
    result = header + length_size;
    if (length_size == sizeof (guint32))
      n = *(guint32 *) header;
    else
      n = *(guint64 *) header;
  }
  else
  {
    result = NULL;
    n = 0;
  }

  if (length != NULL)
    *length = n;

  return result;
}

static void
std_string_destroy (StdString * str)
{
  if ((str->l.capacity & 1) != 0)
    art_api.free (str->l.data);
}

static gchar *
std_string_c_str (StdString * self)
{
  if ((self->l.capacity & 1) != 0)
    return self->l.data;

  return self->s.data;
}
`,dd=/(.+)!([^/]+)\/?([isu]+)?/,Ae=null,Mo=null,Ve=class t{static build(e,n){return ko(n),Mo(e,n,r=>new t(Ae.new(e,r,n)))}static enumerateMethods(e,n,r){ko(r);let o=e.match(dd);if(o===null)throw new Error("Invalid query; format is: class!method -- see documentation of Java.enumerateMethods(query) for details");let i=Memory.allocUtf8String(o[1]),s=Memory.allocUtf8String(o[2]),l=!1,a=!1,c=!1,d=o[3];d!==void 0&&(l=d.indexOf("s")!==-1,a=d.indexOf("i")!==-1,c=d.indexOf("u")!==-1);let f;if(n.jvmti!==null){let p=Ae.enumerateMethodsJvm(i,s,qe(l),qe(a),qe(c),r);try{f=JSON.parse(p.readUtf8String()).map(u=>{let g=ptr(u.loader);return u.loader=g.isNull()?null:g,u})}finally{Ae.dealloc(p)}}else Ce(r.vm,r,p=>{let u=Ae.enumerateMethodsArt(i,s,qe(l),qe(a),qe(c));try{let g=n["art::JavaVMExt::AddGlobalRef"],{vm:m}=n;f=JSON.parse(u.readUtf8String()).map(E=>{let w=E.loader;return E.loader=w!==0?g(m,p,ptr(w)):null,E})}finally{Ae.dealloc(u)}});return f}constructor(e){this.handle=e}has(e){return Ae.has(this.handle,Memory.allocUtf8String(e))!==0}find(e){return Ae.find(this.handle,Memory.allocUtf8String(e)).readUtf8String()}list(){let e=Ae.list(this.handle);try{return JSON.parse(e.readUtf8String())}finally{Ae.dealloc(e)}}};function ko(t){Ae===null&&(Ae=ud(t),Mo=fd(Ae,t.vm))}function ud(t){let e=pt(),{jvmti:n=null}=e,{pointerSize:r}=Process,o=8,i=r,s=7*r,l=10*4+5*r,a=o+i+s+l,d=Memory.alloc(a),f=d.add(o),p=f.add(i),{getDeclaredMethods:u,getDeclaredFields:g}=t.javaLangClass(),m=t.javaLangReflectMethod(),E=t.javaLangReflectField(),w=p;[n!==null?n:NULL,u,g,m.getName,m.getModifiers,E.getName,E.getModifiers].forEach(R=>{w=w.writePointer(R).add(r)});let x=p.add(s),{vm:k}=t;if(e.flavor==="art"){let R;if(n!==null)R=[0,0,0,0];else{let B=Jn(k).offset;R=[B.ifields,B.methods,B.sfields,B.copiedMethodsOffset]}let F=Se(k),A=Rt(k),j=x;[1,...R,F.size,F.offset.accessFlags,A.size,A.offset.accessFlags,4294967295].forEach(B=>{j=j.writeUInt(B).add(4)}),[e.artClassLinker.address,e["art::ClassLinker::VisitClasses"],e["art::mirror::Class::GetDescriptor"],e["art::ArtMethod::PrettyMethod"],Process.getModuleByName("libc.so").getExportByName("free")].forEach((B,T)=>{B===void 0&&(B=NULL),j=j.writePointer(B).add(r)})}let M=new CModule(cd,{lock:d,models:f,java_api:p,art_api:x}),U={exceptions:"propagate"},z={exceptions:"propagate",scheduling:"exclusive"};return{handle:M,new:new NativeFunction(M.model_new,"pointer",["pointer","pointer","pointer"],U),has:new NativeFunction(M.model_has,"bool",["pointer","pointer"],z),find:new NativeFunction(M.model_find,"pointer",["pointer","pointer"],z),list:new NativeFunction(M.model_list,"pointer",["pointer"],z),enumerateMethodsArt:new NativeFunction(M.enumerate_methods_art,"pointer",["pointer","pointer","bool","bool","bool"],U),enumerateMethodsJvm:new NativeFunction(M.enumerate_methods_jvm,"pointer",["pointer","pointer","bool","bool","bool","pointer"],U),dealloc:new NativeFunction(M.dealloc,"void",["pointer"],z)}}function fd(t,e){let n=pt();if(n.flavor!=="art")return pd;let r=n["art::JavaVMExt::DecodeGlobal"];return function(o,i,s){let l;return Ce(e,i,a=>{let c=r(e,a,o);l=s(c)}),l}}function pd(t,e,n){return n(NULL)}function qe(t){return t?1:0}var ht=class{constructor(e,n){this.items=new Map,this.capacity=e,this.destroy=n}dispose(e){let{items:n,destroy:r}=this;n.forEach(o=>{r(o,e)}),n.clear()}get(e){let{items:n}=this,r=n.get(e);return r!==void 0&&(n.delete(e),n.set(e,r)),r}set(e,n,r){let{items:o}=this,i=o.get(e);if(i!==void 0)o.delete(e),this.destroy(i,r);else if(o.size===this.capacity){let s=o.keys().next().value,l=o.get(s);o.delete(s),this.destroy(l,r)}o.set(e,n)}};var mt=1,ar=256,jo=65536,hd=305419896,Oo=32,Po=12,Ro=8,Fo=8,Do=4,Uo=4,Bo=12,md=0,_d=1,gd=2,yd=3,bd=4,Ed=5,vd=6,Sd=4096,wd=4097,Id=4099,xd=8192,Cd=8193,Ad=8194,Td=8195,Nd=8196,Ld=8198,kd=24,Md=28,jd=2,Od=24,zo=v.from([3,0,7,14,0]),ir="Ldalvik/annotation/Throws;",Pd=v.from([0]);function Rd(t){let e=new lr,n=Object.assign({},t);return e.addClass(n),e.build()}var lr=class{constructor(){this.classes=[]}addClass(e){this.classes.push(e)}build(){let e=Ud(this.classes),{classes:n,interfaces:r,fields:o,methods:i,protos:s,parameters:l,annotationDirectories:a,annotationSets:c,throwsAnnotations:d,types:f,strings:p}=e,u=0,g=0,m=8,E=12,w=20,x=112;u+=x;let k=u,M=p.length*Uo;u+=M;let U=u,z=f.length*Do;u+=z;let R=u,F=s.length*Po;u+=F;let A=u,j=o.length*Ro;u+=j;let B=u,T=i.length*Fo;u+=T;let J=u,H=n.length*Oo;u+=H;let K=u,$=c.map(O=>{let G=u;return O.offset=G,u+=4+O.items.length*4,G}),W=n.reduce((O,G)=>(G.classData.constructorMethods.forEach(oe=>{let[,se,ie]=oe;(se&ar)===0&&ie>=0&&(oe.push(u),O.push({offset:u,superConstructor:ie}),u+=Od)}),O),[]);a.forEach(O=>{O.offset=u,u+=16+O.methods.length*8});let re=r.map(O=>{u=sr(u,4);let G=u;return O.offset=G,u+=4+2*O.types.length,G}),de=l.map(O=>{u=sr(u,4);let G=u;return O.offset=G,u+=4+2*O.types.length,G}),h=[],_=p.map(O=>{let G=u,Q=v.from(we(O.length)),oe=v.from(O,"utf8"),se=v.concat([Q,oe,Pd]);return h.push(se),u+=se.length,G}),b=W.map(O=>{let G=u;return u+=zo.length,G}),S=d.map(O=>{let G=Dd(O);return O.offset=u,u+=G.length,G}),y=n.map((O,G)=>{O.classData.offset=u;let Q=Fd(O);return u+=Q.length,Q}),C=0,V=0;u=sr(u,4);let D=u,ne=r.length+l.length,Z=4+(o.length>0?1:0)+2+c.length+W.length+a.length+(ne>0?1:0)+1+b.length+d.length+n.length+1,q=4+Z*Bo;u+=q;let ce=u-K,ue=u,L=v.alloc(ue);L.write(`dex
035`),L.writeUInt32LE(ue,32),L.writeUInt32LE(x,36),L.writeUInt32LE(hd,40),L.writeUInt32LE(C,44),L.writeUInt32LE(V,48),L.writeUInt32LE(D,52),L.writeUInt32LE(p.length,56),L.writeUInt32LE(k,60),L.writeUInt32LE(f.length,64),L.writeUInt32LE(U,68),L.writeUInt32LE(s.length,72),L.writeUInt32LE(R,76),L.writeUInt32LE(o.length,80),L.writeUInt32LE(o.length>0?A:0,84),L.writeUInt32LE(i.length,88),L.writeUInt32LE(B,92),L.writeUInt32LE(n.length,96),L.writeUInt32LE(J,100),L.writeUInt32LE(ce,104),L.writeUInt32LE(K,108),_.forEach((O,G)=>{L.writeUInt32LE(O,k+G*Uo)}),f.forEach((O,G)=>{L.writeUInt32LE(O,U+G*Do)}),s.forEach((O,G)=>{let[Q,oe,se]=O,ie=R+G*Po;L.writeUInt32LE(Q,ie),L.writeUInt32LE(oe,ie+4),L.writeUInt32LE(se!==null?se.offset:0,ie+8)}),o.forEach((O,G)=>{let[Q,oe,se]=O,ie=A+G*Ro;L.writeUInt16LE(Q,ie),L.writeUInt16LE(oe,ie+2),L.writeUInt32LE(se,ie+4)}),i.forEach((O,G)=>{let[Q,oe,se]=O,ie=B+G*Fo;L.writeUInt16LE(Q,ie),L.writeUInt16LE(oe,ie+2),L.writeUInt32LE(se,ie+4)}),n.forEach((O,G)=>{let{interfaces:Q,annotationsDirectory:oe}=O,se=Q!==null?Q.offset:0,ie=oe!==null?oe.offset:0,et=0,Ie=J+G*Oo;L.writeUInt32LE(O.index,Ie),L.writeUInt32LE(O.accessFlags,Ie+4),L.writeUInt32LE(O.superClassIndex,Ie+8),L.writeUInt32LE(se,Ie+12),L.writeUInt32LE(O.sourceFileIndex,Ie+16),L.writeUInt32LE(ie,Ie+20),L.writeUInt32LE(O.classData.offset,Ie+24),L.writeUInt32LE(et,Ie+28)}),c.forEach((O,G)=>{let{items:Q}=O,oe=$[G];L.writeUInt32LE(Q.length,oe),Q.forEach((se,ie)=>{L.writeUInt32LE(se.offset,oe+4+ie*4)})}),W.forEach((O,G)=>{let{offset:Q,superConstructor:oe}=O,se=1,ie=1,et=1,Ie=0,yt=4;L.writeUInt16LE(se,Q),L.writeUInt16LE(ie,Q+2),L.writeUInt16LE(et,Q+4),L.writeUInt16LE(Ie,Q+6),L.writeUInt32LE(b[G],Q+8),L.writeUInt32LE(yt,Q+12),L.writeUInt16LE(4208,Q+16),L.writeUInt16LE(oe,Q+18),L.writeUInt16LE(0,Q+20),L.writeUInt16LE(14,Q+22)}),a.forEach(O=>{let G=O.offset,Q=0,oe=0,se=O.methods.length,ie=0;L.writeUInt32LE(Q,G),L.writeUInt32LE(oe,G+4),L.writeUInt32LE(se,G+8),L.writeUInt32LE(ie,G+12),O.methods.forEach((et,Ie)=>{let yt=G+16+Ie*8,[hi,mi]=et;L.writeUInt32LE(hi,yt),L.writeUInt32LE(mi.offset,yt+4)})}),r.forEach((O,G)=>{let Q=re[G];L.writeUInt32LE(O.types.length,Q),O.types.forEach((oe,se)=>{L.writeUInt16LE(oe,Q+4+se*2)})}),l.forEach((O,G)=>{let Q=de[G];L.writeUInt32LE(O.types.length,Q),O.types.forEach((oe,se)=>{L.writeUInt16LE(oe,Q+4+se*2)})}),h.forEach((O,G)=>{O.copy(L,_[G])}),b.forEach(O=>{zo.copy(L,O)}),S.forEach((O,G)=>{O.copy(L,d[G].offset)}),y.forEach((O,G)=>{O.copy(L,n[G].classData.offset)}),L.writeUInt32LE(Z,D);let fe=[[md,1,g],[_d,p.length,k],[gd,f.length,U],[yd,s.length,R]];o.length>0&&fe.push([bd,o.length,A]),fe.push([Ed,i.length,B]),fe.push([vd,n.length,J]),c.forEach((O,G)=>{fe.push([Id,O.items.length,$[G]])}),W.forEach(O=>{fe.push([Cd,1,O.offset])}),a.forEach(O=>{fe.push([Ld,1,O.offset])}),ne>0&&fe.push([wd,ne,re.concat(de)[0]]),fe.push([Ad,p.length,_[0]]),b.forEach(O=>{fe.push([Td,1,O])}),d.forEach(O=>{fe.push([Nd,1,O.offset])}),n.forEach(O=>{fe.push([xd,1,O.classData.offset])}),fe.push([Sd,1,D]),fe.forEach((O,G)=>{let[Q,oe,se]=O,ie=D+4+G*Bo;L.writeUInt16LE(Q,ie),L.writeUInt32LE(oe,ie+4),L.writeUInt32LE(se,ie+8)});let Ir=new Checksum("sha1");return Ir.update(L.slice(E+w)),v.from(Ir.getDigest()).copy(L,E),L.writeUInt32LE($d(L,E),m),L}};function Fd(t){let{instanceFields:e,constructorMethods:n,virtualMethods:r}=t.classData;return v.from([0].concat(we(e.length)).concat(we(n.length)).concat(we(r.length)).concat(e.reduce((i,[s,l])=>i.concat(we(s)).concat(we(l)),[])).concat(n.reduce((i,[s,l,,a])=>i.concat(we(s)).concat(we(l)).concat(we(a||0)),[])).concat(r.reduce((i,[s,l])=>i.concat(we(s)).concat(we(l)).concat([0]),[])))}function Dd(t){let{thrownTypes:e}=t;return v.from([jd].concat(we(t.type)).concat([1]).concat(we(t.value)).concat([Md,e.length]).concat(e.reduce((n,r)=>(n.push(kd,r),n),[])))}function Ud(t){let e=new Set,n=new Set,r={},o=[],i=[],s={},l=new Set,a=new Set;t.forEach(T=>{let{name:J,superClass:H,sourceFileName:K}=T;e.add("this"),e.add(J),n.add(J),e.add(H),n.add(H),e.add(K),T.interfaces.forEach($=>{e.add($),n.add($)}),T.fields.forEach($=>{let[W,re]=$;e.add(W),e.add(re),n.add(re),o.push([T.name,re,W])}),T.methods.some(([$])=>$==="<init>")||(T.methods.unshift(["<init>","V",[]]),l.add(J)),T.methods.forEach($=>{let[W,re,de,h=[],_]=$;e.add(W);let b=c(re,de),S=null;if(h.length>0){let y=h.slice();y.sort(),S=y.join("|");let C=s[S];C===void 0&&(C={id:S,types:y},s[S]=C),e.add(ir),n.add(ir),h.forEach(V=>{e.add(V),n.add(V)}),e.add("value")}if(i.push([T.name,b,W,S,_]),W==="<init>"){a.add(J+"|"+b);let y=H+"|"+b;l.has(J)&&!a.has(y)&&(i.push([H,b,W,null,0]),a.add(y))}})});function c(T,J){let H=[T].concat(J),K=H.join("|");if(r[K]!==void 0)return K;e.add(T),n.add(T),J.forEach(W=>{e.add(W),n.add(W)});let $=H.map(Gd).join("");return e.add($),r[K]=[K,$,T,J],K}let d=Array.from(e);d.sort();let f=d.reduce((T,J,H)=>(T[J]=H,T),{}),p=Array.from(n).map(T=>f[T]);p.sort(Vo);let u=p.reduce((T,J,H)=>(T[d[J]]=H,T),{}),g=Object.keys(r).map(T=>r[T]);g.sort(zd);let m={},E=g.map(T=>{let[,J,H,K]=T,$;if(K.length>0){let W=K.join("|");$=m[W],$===void 0&&($={types:K.map(re=>u[re]),offset:-1},m[W]=$)}else $=null;return[f[J],u[H],$]}),w=g.reduce((T,J,H)=>{let[K]=J;return T[K]=H,T},{}),x=Object.keys(m).map(T=>m[T]),k=o.map(T=>{let[J,H,K]=T;return[u[J],u[H],f[K]]});k.sort(Vd);let M=i.map(T=>{let[J,H,K,$,W]=T;return[u[J],w[H],f[K],$,W]});M.sort(Jd);let U=Object.keys(s).map(T=>s[T]).map(T=>({id:T.id,type:u[ir],value:f.value,thrownTypes:T.types.map(J=>u[J]),offset:-1})),z=U.map(T=>({id:T.id,items:[T],offset:-1})),R=z.reduce((T,J,H)=>(T[J.id]=H,T),{}),F={},A=[],j=t.map(T=>{let J=u[T.name],H=mt,K=u[T.superClass],$,W=T.interfaces.map(D=>u[D]);if(W.length>0){W.sort(Vo);let D=W.join("|");$=F[D],$===void 0&&($={types:W,offset:-1},F[D]=$)}else $=null;let re=f[T.sourceFileName],de=M.reduce((D,ne,Z)=>{let[q,ce,ue,L,fe]=ne;return q===J&&D.push([Z,ue,L,ce,fe]),D},[]),h=null,_=de.filter(([,,D])=>D!==null).map(([D,,ne])=>[D,z[R[ne]]]);_.length>0&&(h={methods:_,offset:-1},A.push(h));let b=k.reduce((D,ne,Z)=>{let[q]=ne;return q===J&&D.push([Z>0?1:0,mt]),D},[]),S=f["<init>"],y=de.filter(([,D])=>D===S).map(([D,,,ne])=>{if(l.has(T.name)){let Z=-1,q=M.length;for(let ce=0;ce!==q;ce++){let[ue,L,fe]=M[ce];if(ue===K&&fe===S&&L===ne){Z=ce;break}}return[D,mt|jo,Z]}else return[D,mt|jo|ar,-1]}),C=Bd(de.filter(([,D])=>D!==S).map(([D,,,,ne])=>[D,ne|mt|ar]));return{index:J,accessFlags:H,superClassIndex:K,interfaces:$,sourceFileIndex:re,annotationsDirectory:h,classData:{instanceFields:b,constructorMethods:y,virtualMethods:C,offset:-1}}}),B=Object.keys(F).map(T=>F[T]);return{classes:j,interfaces:B,fields:k,methods:M,protos:E,parameters:x,annotationDirectories:A,annotationSets:z,throwsAnnotations:U,types:p,strings:d}}function Bd(t){let e=0;return t.map(([n,r],o)=>{let i;return o===0?i=[n,r]:i=[n-e,r],e=n,i})}function Vo(t,e){return t-e}function zd(t,e){let[,,n,r]=t,[,,o,i]=e;if(n<o)return-1;if(n>o)return 1;let s=r.join("|"),l=i.join("|");return s<l?-1:s>l?1:0}function Vd(t,e){let[n,r,o]=t,[i,s,l]=e;return n!==i?n-i:o!==l?o-l:r-s}function Jd(t,e){let[n,r,o]=t,[i,s,l]=e;return n!==i?n-i:o!==l?o-l:r-s}function Gd(t){let e=t[0];return e==="L"||e==="["?"L":t}function we(t){if(t<=127)return[t];let e=[],n=!1;do{let r=t&127;t>>=7,n=t!==0,n&&(r|=128),e.push(r)}while(n);return e}function sr(t,e){let n=t%e;return n===0?t:t+e-n}function $d(t,e){let n=1,r=0,o=t.length;for(let i=e;i<o;i++)n=(n+t[i])%65521,r=(r+n)%65521;return(r<<16|n)>>>0}var Jo=Rd;var Hd=1,cr=null,Go=null;function $o(t){cr=t}function dr(t,e,n){let r=Qe(t);return r===null&&(t.indexOf("[")===0?r=ur(t,e,n):(t[0]==="L"&&t[t.length-1]===";"&&(t=t.substring(1,t.length-1)),r=Kd(t,e,n))),Object.assign({className:t},r)}var Ho={boolean:{name:"Z",type:"uint8",size:1,byteSize:1,defaultValue:!1,isCompatible(t){return typeof t=="boolean"},fromJni(t){return!!t},toJni(t){return t?1:0},read(t){return t.readU8()},write(t,e){t.writeU8(e)},toString(){return this.name}},byte:{name:"B",type:"int8",size:1,byteSize:1,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-128&&t<=127},fromJni:Te,toJni:Te,read(t){return t.readS8()},write(t,e){t.writeS8(e)},toString(){return this.name}},char:{name:"C",type:"uint16",size:1,byteSize:2,defaultValue:0,isCompatible(t){if(typeof t!="string"||t.length!==1)return!1;let e=t.charCodeAt(0);return e>=0&&e<=65535},fromJni(t){return String.fromCharCode(t)},toJni(t){return t.charCodeAt(0)},read(t){return t.readU16()},write(t,e){t.writeU16(e)},toString(){return this.name}},short:{name:"S",type:"int16",size:1,byteSize:2,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-32768&&t<=32767},fromJni:Te,toJni:Te,read(t){return t.readS16()},write(t,e){t.writeS16(e)},toString(){return this.name}},int:{name:"I",type:"int32",size:1,byteSize:4,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-2147483648&&t<=2147483647},fromJni:Te,toJni:Te,read(t){return t.readS32()},write(t,e){t.writeS32(e)},toString(){return this.name}},long:{name:"J",type:"int64",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"||t instanceof Int64},fromJni:Te,toJni:Te,read(t){return t.readS64()},write(t,e){t.writeS64(e)},toString(){return this.name}},float:{name:"F",type:"float",size:1,byteSize:4,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:Te,toJni:Te,read(t){return t.readFloat()},write(t,e){t.writeFloat(e)},toString(){return this.name}},double:{name:"D",type:"double",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:Te,toJni:Te,read(t){return t.readDouble()},write(t,e){t.writeDouble(e)},toString(){return this.name}},void:{name:"V",type:"void",size:0,byteSize:0,defaultValue:void 0,isCompatible(t){return t===void 0},fromJni(){},toJni(){return NULL},toString(){return this.name}}},Zd=new Set(Object.values(Ho).map(t=>t.name));function Qe(t){let e=Ho[t];return e!==void 0?e:null}function Kd(t,e,n){let r=n._types[e?1:0],o=r[t];return o!==void 0||(t==="java.lang.Object"?o=Wd(n):o=qd(t,e,n),r[t]=o),o}function Wd(t){return{name:"Ljava/lang/Object;",type:"pointer",size:1,defaultValue:NULL,isCompatible(e){return e===null?!0:e===void 0?!1:e.$h instanceof NativePointer?!0:typeof e=="string"},fromJni(e,n,r){return e.isNull()?null:t.cast(e,t.use("java.lang.Object"),r)},toJni(e,n){return e===null?NULL:typeof e=="string"?n.newStringUtf(e):e.$h}}}function qd(t,e,n){let r=null,o=null,i=null;function s(){return r===null&&(r=n.use(t).class),r}function l(c){let d=s();return o===null&&(o=d.isInstance.overload("java.lang.Object")),o.call(d,c)}function a(){if(i===null){let c=s();i=n.use("java.lang.String").class.isAssignableFrom(c)}return i}return{name:Je(t),type:"pointer",size:1,defaultValue:NULL,isCompatible(c){return c===null?!0:c===void 0?!1:c.$h instanceof NativePointer?l(c):typeof c=="string"&&a()},fromJni(c,d,f){return c.isNull()?null:a()&&e?d.stringFromJni(c):n.cast(c,n.use(t),f)},toJni(c,d){return c===null?NULL:typeof c=="string"?d.newStringUtf(c):c.$h},toString(){return this.name}}}var Qd=[["Z","boolean"],["B","byte"],["C","char"],["D","double"],["F","float"],["I","int"],["J","long"],["S","short"]].reduce((t,[e,n])=>(t["["+e]=Yd("["+e,n),t),{});function Yd(t,e){let n=I.prototype,r=ru(e),o={typeName:e,newArray:n["new"+r+"Array"],setRegion:n["set"+r+"ArrayRegion"],getElements:n["get"+r+"ArrayElements"],releaseElements:n["release"+r+"ArrayElements"]};return{name:t,type:"pointer",size:1,defaultValue:NULL,isCompatible(i){return nu(i,e)},fromJni(i,s,l){return eu(i,o,s,l)},toJni(i,s){return tu(i,o,s)}}}function ur(t,e,n){let r=Qd[t];if(r!==void 0)return r;if(t.indexOf("[")!==0)throw new Error("Unsupported type: "+t);let o=t.substring(1),i=dr(o,e,n),s=0,l=o.length;for(;s!==l&&o[s]==="[";)s++;o=o.substring(s),o[0]==="L"&&o[o.length-1]===";"&&(o=o.substring(1,o.length-1));let a=o.replace(/\./g,"/");Zd.has(a)?a="[".repeat(s)+a:a="[".repeat(s)+"L"+a+";";let c="["+a;return o="[".repeat(s)+o,{name:t.replace(/\./g,"/"),type:"pointer",size:1,defaultValue:NULL,isCompatible(d){return d===null?!0:typeof d!="object"||d.length===void 0?!1:d.every(function(f){return i.isCompatible(f)})},fromJni(d,f,p){if(d.isNull())return null;let u=[],g=f.getArrayLength(d);for(let m=0;m!==g;m++){let E=f.getObjectArrayElement(d,m);try{u.push(i.fromJni(E,f))}finally{f.deleteLocalRef(E)}}try{u.$w=n.cast(d,n.use(c),p)}catch{n.use("java.lang.reflect.Array").newInstance(n.use(o).class,0),u.$w=n.cast(d,n.use(c),p)}return u.$dispose=Xd,u},toJni(d,f){if(d===null)return NULL;if(!(d instanceof Array))throw new Error("Expected an array");let p=d.$w;if(p!==void 0)return p.$h;let u=d.length,m=n.use(o).$borrowClassHandle(f);try{let E=f.newObjectArray(u,m.value,NULL);f.throwIfExceptionPending();for(let w=0;w!==u;w++){let x=i.toJni(d[w],f);try{f.setObjectArrayElement(E,w,x)}finally{i.type==="pointer"&&f.getObjectRefType(x)===Hd&&f.deleteLocalRef(x)}f.throwIfExceptionPending()}return E}finally{m.unref(f)}}}}function Xd(){let t=this.length;for(let e=0;e!==t;e++){let n=this[e];if(n===null)continue;let r=n.$dispose;if(r===void 0)break;r.call(n)}this.$w.$dispose()}function eu(t,e,n,r){if(t.isNull())return null;let o=Qe(e.typeName),i=n.getArrayLength(t);return new Bt(t,e,o,i,n,r)}function tu(t,e,n){if(t===null)return NULL;let r=t.$h;if(r!==void 0)return r;let o=t.length,i=Qe(e.typeName),s=e.newArray.call(n,o);if(s.isNull())throw new Error("Unable to construct array");if(o>0){let l=i.byteSize,a=i.write,c=i.toJni,d=Memory.alloc(o*i.byteSize);for(let f=0;f!==o;f++)a(d.add(f*l),c(t[f]));e.setRegion.call(n,s,0,o,d),n.throwIfExceptionPending()}return s}function nu(t,e){if(t===null)return!0;if(t instanceof Bt)return t.$s.typeName===e;if(!(typeof t=="object"&&t.length!==void 0))return!1;let r=Qe(e);return Array.prototype.every.call(t,o=>r.isCompatible(o))}function Bt(t,e,n,r,o,i=!0){if(i){let s=o.newGlobalRef(t);this.$h=s,this.$r=Script.bindWeak(this,o.vm.makeHandleDestructor(s))}else this.$h=t,this.$r=null;return this.$s=e,this.$t=n,this.length=r,new Proxy(this,Go)}Go={has(t,e){return e in t?!0:t.tryParseIndex(e)!==null},get(t,e,n){let r=t.tryParseIndex(e);return r===null?t[e]:t.readElement(r)},set(t,e,n,r){let o=t.tryParseIndex(e);return o===null?(t[e]=n,!0):(t.writeElement(o,n),!0)},ownKeys(t){let e=[],{length:n}=t;for(let r=0;r!==n;r++){let o=r.toString();e.push(o)}return e.push("length"),e},getOwnPropertyDescriptor(t,e){return t.tryParseIndex(e)!==null?{writable:!0,configurable:!0,enumerable:!0}:Object.getOwnPropertyDescriptor(t,e)}};Object.defineProperties(Bt.prototype,{$dispose:{enumerable:!0,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t))}},$clone:{value(t){return new Bt(this.$h,this.$s,this.$t,this.length,t)}},tryParseIndex:{value(t){if(typeof t=="symbol")return null;let e=parseInt(t);return isNaN(e)||e<0||e>=this.length?null:e}},readElement:{value(t){return this.withElements(e=>{let n=this.$t;return n.fromJni(n.read(e.add(t*n.byteSize)))})}},writeElement:{value(t,e){let{$h:n,$s:r,$t:o}=this,i=cr.getEnv(),s=Memory.alloc(o.byteSize);o.write(s,o.toJni(e)),r.setRegion.call(i,n,t,1,s)}},withElements:{value(t){let{$h:e,$s:n}=this,r=cr.getEnv(),o=n.getElements.call(r,e);if(o.isNull())throw new Error("Unable to get array elements");try{return t(o)}finally{n.releaseElements.call(r,e,o)}}},toJSON:{value(){let{length:t,$t:e}=this,{byteSize:n,fromJni:r,read:o}=e;return this.withElements(i=>{let s=[];for(let l=0;l!==t;l++){let a=r(o(i.add(l*n)));s.push(a)}return s})}},toString:{value(){return this.toJSON().toString()}}});function Je(t){return"L"+t.replace(/\./g,"/")+";"}function ru(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Te(t){return t}var ou=4,{ensureClassInitialized:Zo,makeMethodMangler:Xo}=Dt,iu=8,hr=1,gt=2,Pe=3,fr=1,mr=2,zt=1,ei=2,Ko=Symbol("PENDING_USE"),Wo="/data/local/tmp",{getCurrentThreadId:Jt,pointerSize:_t}=Process,be={state:"empty",factories:[],loaders:null,Integer:null},ee=null,le=null,ti=null,ni=null,ri=null,oi=null,ii=null,qo=null,pr=null,Xe=new Map,Fe=class t{static _initialize(e,n){ee=e,le=n,ti=n.flavor==="art",n.flavor==="jvm"&&(Zo=Co,Xo=To)}static _disposeAll(e){be.factories.forEach(n=>{n._dispose(e)})}static get(e){let n=xu(),r=n.factories[0];if(e===null)return r;let o=n.loaders.get(e);if(o!==null){let s=r.cast(o,n.Integer);return n.factories[s.intValue()]}let i=new t;return i.loader=e,i.cacheDir=r.cacheDir,yr(i,e),i}constructor(){this.cacheDir=Wo,this.codeCacheDir=Wo+"/dalvik-cache",this.tempFileNaming={prefix:"frida",suffix:""},this._classes={},this._classHandles=new ht(10,au),this._patchedMethods=new Set,this._loader=null,this._types=[{},{}],be.factories.push(this)}_dispose(e){Array.from(this._patchedMethods).forEach(n=>{n.implementation=null}),this._patchedMethods.clear(),Wn(),this._classHandles.dispose(e),this._classes={}}get loader(){return this._loader}set loader(e){let n=this._loader===null&&e!==null;this._loader=e,n&&be.state==="ready"&&this===be.factories[0]&&yr(this,e)}use(e,n={}){let r=n.cache!=="skip",o=r?this._getUsedClass(e):void 0;if(o===void 0)try{let i=ee.getEnv(),{_loader:s}=this,l=s!==null?cu(e,s,i):lu(e);o=this._make(e,l,i)}finally{r&&this._setUsedClass(e,o)}return o}_getUsedClass(e){let n;for(;(n=this._classes[e])===Ko;)Thread.sleep(.05);return n===void 0&&(this._classes[e]=Ko),n}_setUsedClass(e,n){n!==void 0?this._classes[e]=n:delete this._classes[e]}_make(e,n,r){let o=su(),i=Object.create(Er.prototype,{[Symbol.for("n")]:{value:e},$n:{get(){return this[Symbol.for("n")]}},[Symbol.for("C")]:{value:o},$C:{get(){return this[Symbol.for("C")]}},[Symbol.for("w")]:{value:null,writable:!0},$w:{get(){return this[Symbol.for("w")]},set(a){this[Symbol.for("w")]=a}},[Symbol.for("_s")]:{writable:!0},$_s:{get(){return this[Symbol.for("_s")]},set(a){this[Symbol.for("_s")]=a}},[Symbol.for("c")]:{value:[null]},$c:{get(){return this[Symbol.for("c")]}},[Symbol.for("m")]:{value:new Map},$m:{get(){return this[Symbol.for("m")]}},[Symbol.for("l")]:{value:null,writable:!0},$l:{get(){return this[Symbol.for("l")]},set(a){this[Symbol.for("l")]=a}},[Symbol.for("gch")]:{value:n},$gch:{get(){return this[Symbol.for("gch")]}},[Symbol.for("f")]:{value:this},$f:{get(){return this[Symbol.for("f")]}}});o.prototype=i;let s=new o(null);i[Symbol.for("w")]=s,i.$w=s;let l=s.$borrowClassHandle(r);try{let a=l.value;Zo(r,a),i.$l=Ve.build(a,r)}finally{l.unref(r)}return s}retain(e){let n=ee.getEnv();return e.$clone(n)}cast(e,n,r){let o=ee.getEnv(),i=e.$h;i===void 0&&(i=e);let s=n.$borrowClassHandle(o);try{if(!o.isInstanceOf(i,s.value))throw new Error(`Cast from '${o.getObjectClassName(i)}' to '${n.$n}' isn't possible`)}finally{s.unref(o)}let l=n.$C;return new l(i,zt,o,r)}wrap(e,n,r){let o=n.$C,i=new o(e,zt,r,!1);return i.$r=Script.bindWeak(i,ee.makeHandleDestructor(e)),i}array(e,n){let r=ee.getEnv(),o=Qe(e);o!==null&&(e=o.name);let i=ur("["+e,!1,this),s=i.toJni(n,r);return i.fromJni(s,r,!0)}registerClass(e){let n=ee.getEnv(),r=[];try{let o=this.use("java.lang.Class"),i=n.javaLangReflectMethod(),s=n.vaMethod("pointer",[]),l=e.name,a=e.implements||[],c=e.superClass||this.use("java.lang.Object"),d=[],f=[],p={name:Je(l),sourceFileName:Au(l),superClass:Je(c.$n),interfaces:a.map(A=>Je(A.$n)),fields:d,methods:f},u=a.slice();a.forEach(A=>{Array.prototype.slice.call(A.class.getInterfaces()).forEach(j=>{let B=this.cast(j,o).getCanonicalName();u.push(this.use(B))})});let g=e.fields||{};Object.getOwnPropertyNames(g).forEach(A=>{let j=this._getType(g[A]);d.push([A,j.name])});let m={},E={};u.forEach(A=>{let j=A.$borrowClassHandle(n);r.push(j);let B=j.value;A.$ownMembers.filter(T=>A[T].overloads!==void 0).forEach(T=>{let J=A[T],H=J.overloads,K=H.map($=>Qo(T,$.returnType,$.argumentTypes));m[T]=[J,K,B],H.forEach(($,W)=>{let re=K[W];E[re]=[$,B]})})});let w=e.methods||{},k=Object.keys(w).reduce((A,j)=>{let B=w[j],T=j==="$init"?"<init>":j;return B instanceof Array?A.push(...B.map(J=>[T,J])):A.push([T,B]),A},[]),M=[];k.forEach(([A,j])=>{let B=Pe,T,J,H=[],K;if(typeof j=="function"){let de=m[A];if(de!==void 0&&Array.isArray(de)){let[h,_,b]=de;if(_.length>1)throw new Error(`More than one overload matching '${A}': signature must be specified`);delete E[_[0]];let S=h.overloads[0];B=S.type,T=S.returnType,J=S.argumentTypes,K=j;let y=n.toReflectedMethod(b,S.handle,0),C=s(n.handle,y,i.getGenericExceptionTypes);H=br(n,C).map(Je),n.deleteLocalRef(C),n.deleteLocalRef(y)}else T=this._getType("void"),J=[],K=j}else{if(j.isStatic&&(B=gt),T=this._getType(j.returnType||"void"),J=(j.argumentTypes||[]).map(_=>this._getType(_)),K=j.implementation,typeof K!="function")throw new Error("Expected a function implementation for method: "+A);let de=Qo(A,T,J),h=E[de];if(h!==void 0){let[_,b]=h;delete E[de],B=_.type,T=_.returnType,J=_.argumentTypes;let S=n.toReflectedMethod(b,_.handle,0),y=s(n.handle,S,i.getGenericExceptionTypes);H=br(n,y).map(Je),n.deleteLocalRef(y),n.deleteLocalRef(S)}}let $=T.name,W=J.map(de=>de.name),re="("+W.join("")+")"+$;f.push([A,$,W,H,B===gt?iu:0]),M.push([A,re,B,T,J,K])});let U=Object.keys(E);if(U.length>0)throw new Error("Missing implementation for: "+U.join(", "));let z=Vt.fromBuffer(Jo(p),this);try{z.load()}finally{z.file.delete()}let R=this.use(e.name),F=k.length;if(F>0){let A=3*_t,j=Memory.alloc(F*A),B=[],T=[];M.forEach(([K,$,W,re,de,h],_)=>{let b=Memory.allocUtf8String(K),S=Memory.allocUtf8String($),y=si(K,R,W,re,de,h);j.add(_*A).writePointer(b),j.add(_*A+_t).writePointer(S),j.add(_*A+2*_t).writePointer(y),T.push(b,S),B.push(y)});let J=R.$borrowClassHandle(n);r.push(J);let H=J.value;n.registerNatives(H,j,F),n.throwIfExceptionPending(),R.$nativeMethods=B}return R}finally{r.forEach(o=>{o.unref(n)})}}choose(e,n){let r=ee.getEnv(),{flavor:o}=le;if(o==="jvm")this._chooseObjectsJvm(e,r,n);else if(o==="art"){let i=le["art::gc::Heap::VisitObjects"]===void 0;if(i&&le["art::gc::Heap::GetInstances"]===void 0)return this._chooseObjectsJvm(e,r,n);Ce(ee,r,s=>{i?this._chooseObjectsArtPreA12(e,r,s,n):this._chooseObjectsArtLegacy(e,r,s,n)})}else this._chooseObjectsDalvik(e,r,n)}_chooseObjectsJvm(e,n,r){let o=this.use(e),{jvmti:i}=le,s=1,l=3,a=o.$borrowClassHandle(n),c=int64(a.value.toString());try{let d=new NativeCallback((w,x,k,M)=>(k.writeS64(c),s),"int",["int64","int64","pointer","pointer"]);i.iterateOverInstancesOfClass(a.value,l,d,a.value);let f=Memory.alloc(8);f.writeS64(c);let p=Memory.alloc(ou),u=Memory.alloc(_t);i.getObjectsWithTags(1,f,p,u,NULL);let g=p.readS32(),m=u.readPointer(),E=[];for(let w=0;w!==g;w++)E.push(m.add(w*_t).readPointer());i.deallocate(m);try{for(let w of E){let x=this.cast(w,o);if(r.onMatch(x)==="stop")break}r.onComplete()}finally{E.forEach(w=>{n.deleteLocalRef(w)})}}finally{a.unref(n)}}_chooseObjectsArtPreA12(e,n,r,o){let i=this.use(e),s=dt.$new(r,ee),l,a=i.$borrowClassHandle(n);try{let p=le["art::JavaVMExt::DecodeGlobal"](le.vm,r,a.value);l=s.newHandle(p)}finally{a.unref(n)}let c=0,d=ct.$new();le["art::gc::Heap::GetInstances"](le.artHeap,s,l,c,d);let f=d.handles.map(p=>n.newGlobalRef(p));d.$delete(),s.$delete();try{for(let p of f){let u=this.cast(p,i);if(o.onMatch(u)==="stop")break}o.onComplete()}finally{f.forEach(p=>{n.deleteGlobalRef(p)})}}_chooseObjectsArtLegacy(e,n,r,o){let i=this.use(e),s=[],l=le["art::JavaVMExt::AddGlobalRef"],a=le.vm,c,d=i.$borrowClassHandle(n);try{c=le["art::JavaVMExt::DecodeGlobal"](a,r,d.value).toInt32()}finally{d.unref(n)}let f=tr(c,p=>{s.push(l(a,r,p))});le["art::gc::Heap::VisitObjects"](le.artHeap,f,NULL);try{for(let p of s){let u=this.cast(p,i);if(o.onMatch(u)==="stop")break}}finally{s.forEach(p=>{n.deleteGlobalRef(p)})}o.onComplete()}_chooseObjectsDalvik(e,n,r){let o=this.use(e);if(le.addLocalReference===null){let s=Process.getModuleByName("libdvm.so"),l;switch(Process.arch){case"arm":l="2d e9 f0 41 05 46 15 4e 0c 46 7e 44 11 b3 43 68";break;case"ia32":l="8d 64 24 d4 89 5c 24 1c 89 74 24 20 e8 ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? 85 d2";break}Memory.scan(s.base,s.size,l,{onMatch:(a,c)=>{let d;if(Process.arch==="arm")a=a.or(1),d=new NativeFunction(a,"pointer",["pointer","pointer"]);else{let f=Memory.alloc(Process.pageSize);Memory.patchCode(f,16,p=>{let u=new X86Writer(p,{pc:f});u.putMovRegRegOffsetPtr("eax","esp",4),u.putMovRegRegOffsetPtr("edx","esp",8),u.putJmpAddress(a),u.flush()}),d=new NativeFunction(f,"pointer",["pointer","pointer"]),d._thunk=f}return le.addLocalReference=d,ee.perform(f=>{i(this,f)}),"stop"},onError(a){},onComplete(){le.addLocalReference===null&&r.onComplete()}})}else i(this,n);function i(s,l){let{DVM_JNI_ENV_OFFSET_SELF:a}=Dt,c=l.handle.add(a).readPointer(),d,f=o.$borrowClassHandle(l);try{d=le.dvmDecodeIndirectRef(c,f.value)}finally{f.unref(l)}let p=d.toMatchPattern(),u=le.dvmHeapSourceGetBase(),m=le.dvmHeapSourceGetLimit().sub(u).toInt32();Memory.scan(u,m,p,{onMatch:(E,w)=>{le.dvmIsValidObject(E)&&ee.perform(x=>{let k=x.handle.add(a).readPointer(),M,U=le.addLocalReference(k,E);try{M=s.cast(U,o)}finally{x.deleteLocalRef(U)}if(r.onMatch(M)==="stop")return"stop"})},onError(E){},onComplete(){r.onComplete()}})}}openClassFile(e){return new Vt(e,null,this)}_getType(e,n=!0){return dr(e,n,this)}};function su(){return function(t,e,n,r){return Er.call(this,t,e,n,r)}}function Er(t,e,n,r=!0){if(t!==null)if(r){let o=n.newGlobalRef(t);this.$h=o,this.$r=Script.bindWeak(this,ee.makeHandleDestructor(o))}else this.$h=t,this.$r=null;else this.$h=null,this.$r=null;return this.$t=e,new Proxy(this,ni)}ni={has(t,e){return e in t?!0:t.$has(e)},get(t,e,n){if(typeof e!="string"||e.startsWith("$")||e==="class")return t[e];let r=t.$find(e);return r!==null?r(n):t[e]},set(t,e,n,r){return t[e]=n,!0},ownKeys(t){return t.$list()},getOwnPropertyDescriptor(t,e){return Object.prototype.hasOwnProperty.call(t,e)?Object.getOwnPropertyDescriptor(t,e):{writable:!1,configurable:!0,enumerable:!0}}};Object.defineProperties(Er.prototype,{[Symbol.for("new")]:{enumerable:!1,get(){return this.$getCtor("allocAndInit")}},$new:{enumerable:!0,get(){return this[Symbol.for("new")]}},[Symbol.for("alloc")]:{enumerable:!1,value(){let t=ee.getEnv(),e=this.$borrowClassHandle(t);try{let n=t.allocObject(e.value);return this.$f.cast(n,this)}finally{e.unref(t)}}},$alloc:{enumerable:!0,get(){return this[Symbol.for("alloc")]}},[Symbol.for("init")]:{enumerable:!1,get(){return this.$getCtor("initOnly")}},$init:{enumerable:!0,get(){return this[Symbol.for("init")]}},[Symbol.for("dispose")]:{enumerable:!1,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t)),this.$h!==null&&(this.$h=void 0)}},$dispose:{enumerable:!0,get(){return this[Symbol.for("dispose")]}},[Symbol.for("clone")]:{enumerable:!1,value(t){let e=this.$C;return new e(this.$h,this.$t,t)}},$clone:{value(t){return this[Symbol.for("clone")](t)}},[Symbol.for("class")]:{enumerable:!1,get(){let t=ee.getEnv(),e=this.$borrowClassHandle(t);try{let n=this.$f;return n.cast(e.value,n.use("java.lang.Class"))}finally{e.unref(t)}}},class:{enumerable:!0,get(){return this[Symbol.for("class")]}},[Symbol.for("className")]:{enumerable:!1,get(){let t=this.$h;return t===null?this.$n:ee.getEnv().getObjectClassName(t)}},$className:{enumerable:!0,get(){return this[Symbol.for("className")]}},[Symbol.for("ownMembers")]:{enumerable:!1,get(){return this.$l.list()}},$ownMembers:{enumerable:!0,get(){return this[Symbol.for("ownMembers")]}},[Symbol.for("super")]:{enumerable:!1,get(){let t=ee.getEnv(),e=this.$s.$C;return new e(this.$h,ei,t)}},$super:{enumerable:!0,get(){return this[Symbol.for("super")]}},[Symbol.for("s")]:{enumerable:!1,get(){let t=Object.getPrototypeOf(this),e=t.$_s;if(e===void 0){let n=ee.getEnv(),r=this.$borrowClassHandle(n);try{let o=n.getSuperclass(r.value);if(o.isNull())e=null;else try{let i=n.getClassName(o),s=t.$f;if(e=s._getUsedClass(i),e===void 0)try{let l=du(this);e=s._make(i,l,n)}finally{s._setUsedClass(i,e)}}finally{n.deleteLocalRef(o)}}finally{r.unref(n)}t.$_s=e}return e}},$s:{get(){return this[Symbol.for("s")]}},[Symbol.for("isSameObject")]:{enumerable:!1,value(t){return ee.getEnv().isSameObject(t.$h,this.$h)}},$isSameObject:{value(t){return this[Symbol.for("isSameObject")](t)}},[Symbol.for("getCtor")]:{enumerable:!1,value(t){let e=this.$c,n=e[0];if(n===null){let r=ee.getEnv(),o=this.$borrowClassHandle(r);try{n=uu(o.value,this.$w,r),e[0]=n}finally{o.unref(r)}}return n[t]}},$getCtor:{value(t){return this[Symbol.for("getCtor")](t)}},[Symbol.for("borrowClassHandle")]:{enumerable:!1,value(t){let e=this.$n,n=this.$f._classHandles,r=n.get(e);return r===void 0&&(r=new vr(this.$gch(t),t),n.set(e,r,t)),r.ref()}},$borrowClassHandle:{value(t){return this[Symbol.for("borrowClassHandle")](t)}},[Symbol.for("copyClassHandle")]:{enumerable:!1,value(t){let e=this.$borrowClassHandle(t);try{return t.newLocalRef(e.value)}finally{e.unref(t)}}},$copyClassHandle:{value(t){return this[Symbol.for("copyClassHandle")](t)}},[Symbol.for("getHandle")]:{enumerable:!1,value(t){let e=this.$h;if(e===void 0)throw new Error("Wrapper is disposed; perhaps it was borrowed from a hook instead of calling Java.retain() to make a long-lived wrapper?");return e}},$getHandle:{value(t){return this[Symbol.for("getHandle")](t)}},[Symbol.for("list")]:{enumerable:!1,value(){let t=this.$s,e=t!==null?t.$list():[],n=this.$l;return Array.from(new Set(e.concat(n.list())))}},$list:{get(){return this[Symbol.for("list")]}},[Symbol.for("has")]:{enumerable:!1,value(t){if(this.$m.has(t)||this.$l.has(t))return!0;let r=this.$s;return!!(r!==null&&r.$has(t))}},$has:{value(t){return this[Symbol.for("has")](t)}},[Symbol.for("find")]:{enumerable:!1,value(t){let e=this.$m,n=e.get(t);if(n!==void 0)return n;let o=this.$l.find(t);if(o!==null){let s=ee.getEnv(),l=this.$borrowClassHandle(s);try{n=fu(t,o,l.value,this.$w,s)}finally{l.unref(s)}return e.set(t,n),n}let i=this.$s;return i!==null?i.$find(t):null}},$find:{value(t){return this[Symbol.for("find")](t)}},[Symbol.for("toJSON")]:{enumerable:!1,value(){let t=this.$n;if(this.$h===null)return`<class: ${t}>`;let n=this.$className;return t===n?`<instance: ${t}>`:`<instance: ${t}, $className: ${n}>`}},toJSON:{get(){return this[Symbol.for("toJSON")]}}});function vr(t,e){this.value=e.newGlobalRef(t),e.deleteLocalRef(t),this.refs=1}vr.prototype.ref=function(){return this.refs++,this};vr.prototype.unref=function(t){--this.refs===0&&t.deleteGlobalRef(this.value)};function au(t,e){t.unref(e)}function lu(t){let e=t.replace(/\./g,"/");return function(n){let r=Jt();li(r);try{return n.findClass(e)}finally{ci(r)}}}function cu(t,e,n){return pr===null&&(qo=n.vaMethod("pointer",["pointer"]),pr=e.loadClass.overload("java.lang.String").handle),n=null,function(r){let o=r.newStringUtf(t),i=Jt();li(i);try{let s=qo(r.handle,e.$h,pr,o);return r.throwIfExceptionPending(),s}finally{ci(i),r.deleteLocalRef(o)}}}function du(t){return function(e){let n=t.$borrowClassHandle(e);try{return e.getSuperclass(n.value)}finally{n.unref(e)}}}function uu(t,e,n){let{$n:r,$f:o}=e,i=Cu(r),s=n.javaLangClass(),l=n.javaLangReflectConstructor(),a=n.vaMethod("pointer",[]),c=n.vaMethod("uint8",[]),d=[],f=[],p=o._getType(r,!1),u=o._getType("void",!1),g=a(n.handle,t,s.getDeclaredConstructors);try{let m=n.getArrayLength(g);if(m!==0)for(let E=0;E!==m;E++){let w,x,k=n.getObjectArrayElement(g,E);try{w=n.fromReflectedMethod(k),x=a(n.handle,k,l.getGenericParameterTypes)}finally{n.deleteLocalRef(k)}let M;try{M=br(n,x).map(U=>o._getType(U))}finally{n.deleteLocalRef(x)}d.push(Ye(i,e,hr,w,p,M,n)),f.push(Ye(i,e,Pe,w,u,M,n))}else{if(c(n.handle,t,s.isInterface))throw new Error("cannot instantiate an interface");let w=n.javaLangObject(),x=n.getMethodId(w,"<init>","()V");d.push(Ye(i,e,hr,x,p,[],n)),f.push(Ye(i,e,Pe,x,u,[],n))}}finally{n.deleteLocalRef(g)}if(f.length===0)throw new Error("no supported overloads");return{allocAndInit:_r(d),initOnly:_r(f)}}function fu(t,e,n,r,o){return e.startsWith("m")?pu(t,e,n,r,o):Su(t,e,n,r,o)}function pu(t,e,n,r,o){let{$f:i}=r,s=e.split(":").slice(1),l=o.javaLangReflectMethod(),a=o.vaMethod("pointer",[]),c=o.vaMethod("uint8",[]),d=s.map(p=>{let u=p[0]==="s"?gt:Pe,g=ptr(p.substr(1)),m,E=[],w=o.toReflectedMethod(n,g,u===gt?1:0);try{let x=!!c(o.handle,w,l.isVarArgs),k=a(o.handle,w,l.getGenericReturnType);o.throwIfExceptionPending();try{m=i._getType(o.getTypeName(k))}finally{o.deleteLocalRef(k)}let M=a(o.handle,w,l.getParameterTypes);try{let U=o.getArrayLength(M);for(let z=0;z!==U;z++){let R=o.getObjectArrayElement(M,z),F;try{F=x&&z===U-1?o.getArrayTypeName(R):o.getTypeName(R)}finally{o.deleteLocalRef(R)}let A=i._getType(F);E.push(A)}}finally{o.deleteLocalRef(M)}}catch{return null}finally{o.deleteLocalRef(w)}return Ye(t,r,u,g,m,E,o)}).filter(p=>p!==null);if(d.length===0)throw new Error("No supported overloads");t==="valueOf"&&bu(d);let f=_r(d);return function(p){return f}}function _r(t){let e=hu();return Object.setPrototypeOf(e,ri),e._o=t,e}function hu(){let t=function(){return t.invoke(this,arguments)};return t}ri=Object.create(Function.prototype,{overloads:{enumerable:!0,get(){return this._o}},overload:{value(...t){let e=this._o,n=t.length,r=t.join(":");for(let o=0;o!==e.length;o++){let i=e[o],{argumentTypes:s}=i;if(s.length!==n)continue;if(s.map(a=>a.className).join(":")===r)return i}gr(this.methodName,this.overloads,"specified argument types do not match any of:")}},methodName:{enumerable:!0,get(){return this._o[0].methodName}},holder:{enumerable:!0,get(){return this._o[0].holder}},type:{enumerable:!0,get(){return this._o[0].type}},handle:{enumerable:!0,get(){return Ge(this),this._o[0].handle}},implementation:{enumerable:!0,get(){return Ge(this),this._o[0].implementation},set(t){Ge(this),this._o[0].implementation=t}},returnType:{enumerable:!0,get(){return Ge(this),this._o[0].returnType}},argumentTypes:{enumerable:!0,get(){return Ge(this),this._o[0].argumentTypes}},canInvokeWith:{enumerable:!0,get(t){return Ge(this),this._o[0].canInvokeWith}},clone:{enumerable:!0,value(t){return Ge(this),this._o[0].clone(t)}},invoke:{value(t,e){let n=this._o,r=t.$h!==null;for(let o=0;o!==n.length;o++){let i=n[o];if(i.canInvokeWith(e)){if(i.type===Pe&&!r){let s=this.methodName;if(s==="toString")return`<class: ${t.$n}>`;throw new Error(s+": cannot call instance method without an instance")}return i.apply(t,e)}}if(this.methodName==="toString")return`<class: ${t.$n}>`;gr(this.methodName,this.overloads,"argument types do not match any of:")}}});function Qo(t,e,n){return`${e.className} ${t}(${n.map(r=>r.className).join(", ")})`}function Ge(t){let e=t._o;e.length>1&&gr(e[0].methodName,e,"has more than one overload, use .overload(<signature>) to choose from:")}function gr(t,e,n){let o=e.slice().sort((i,s)=>i.argumentTypes.length-s.argumentTypes.length).map(i=>i.argumentTypes.length>0?".overload('"+i.argumentTypes.map(l=>l.className).join("', '")+"')":".overload()");throw new Error(`${t}(): ${n}
	${o.join(`
	`)}`)}function Ye(t,e,n,r,o,i,s,l){let a=o.type,c=i.map(p=>p.type);s===null&&(s=ee.getEnv());let d,f;return n===Pe?(d=s.vaMethod(a,c,l),f=s.nonvirtualVaMethod(a,c,l)):n===gt?(d=s.staticVaMethod(a,c,l),f=d):(d=s.constructor(c,l),f=d),mu([t,e,n,r,o,i,d,f])}function mu(t){let e=_u();return Object.setPrototypeOf(e,oi),e._p=t,e}function _u(){let t=function(){return t.invoke(this,arguments)};return t}oi=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return this._p[0]}},holder:{enumerable:!0,get(){return this._p[1]}},type:{enumerable:!0,get(){return this._p[2]}},handle:{enumerable:!0,get(){return this._p[3]}},implementation:{enumerable:!0,get(){let t=this._r;return t!==void 0?t:null},set(t){let e=this._p,n=e[1];if(e[2]===hr)throw new Error("Reimplementing $new is not possible; replace implementation of $init instead");let o=this._r;if(o!==void 0&&(n.$f._patchedMethods.delete(this),o._m.revert(ee),this._r=void 0),t!==null){let[i,s,l,a,c,d]=e,f=si(i,s,l,c,d,t,this),p=Xo(a);f._m=p,this._r=f,p.replace(f,l===Pe,d,ee,le),n.$f._patchedMethods.add(this)}}},returnType:{enumerable:!0,get(){return this._p[4]}},argumentTypes:{enumerable:!0,get(){return this._p[5]}},canInvokeWith:{enumerable:!0,value(t){let e=this._p[5];return t.length!==e.length?!1:e.every((n,r)=>n.isCompatible(t[r]))}},clone:{enumerable:!0,value(t){let e=this._p.slice(0,6);return Ye(...e,null,t)}},invoke:{value(t,e){let n=ee.getEnv(),r=this._p,o=r[2],i=r[4],s=r[5],l=this._r,a=o===Pe,c=e.length,d=2+c;n.pushLocalFrame(d);let f=null;try{let p;a?p=t.$getHandle():(f=t.$borrowClassHandle(n),p=f.value);let u,g=t.$t;l===void 0?u=r[3]:(u=l._m.resolveTarget(t,a,n,le),ti&&l._c.has(Jt())&&(g=ei));let m=[n.handle,p,u];for(let x=0;x!==c;x++)m.push(s[x].toJni(e[x],n));let E;g===zt?E=r[6]:(E=r[7],a&&m.splice(2,0,t.$copyClassHandle(n)));let w=E.apply(null,m);return n.throwIfExceptionPending(),i.fromJni(w,n,!0)}finally{f!==null&&f.unref(n),n.popLocalFrame(NULL)}}},toString:{enumerable:!0,value(){return`function ${this.methodName}(${this.argumentTypes.map(t=>t.className).join(", ")}): ${this.returnType.className}`}}});function si(t,e,n,r,o,i,s=null){let l=new Set,a=gu([t,e,n,r,o,i,s,l]),c=new NativeCallback(a,r.type,["pointer","pointer"].concat(o.map(d=>d.type)));return c._c=l,c}function gu(t){return function(){return yu(arguments,t)}}function yu(t,e){let n=new I(t[0],ee),[r,o,i,s,l,a,c,d]=e,f=[],p;if(i===Pe){let m=o.$C;p=new m(t[1],zt,n,!1)}else p=o;let u=Jt();n.pushLocalFrame(3);let g=!0;ee.link(u,n);try{d.add(u);let m;c===null||!Xe.has(u)?m=a:m=c;let E=[],w=t.length-2;for(let M=0;M!==w;M++){let z=l[M].fromJni(t[2+M],n,!1);E.push(z),f.push(z)}let x=m.apply(p,E);if(!s.isCompatible(x))throw new Error(`Implementation for ${r} expected return value compatible with ${s.className}`);let k=s.toJni(x,n);return s.type==="pointer"&&(k=n.popLocalFrame(k),g=!1,f.push(x)),k}catch(m){let E=m.$h;return E!==void 0?n.throw(E):Script.nextTick(()=>{throw m}),s.defaultValue}finally{ee.unlink(u),g&&n.popLocalFrame(NULL),d.delete(u),f.forEach(m=>{if(m===null)return;let E=m.$dispose;E!==void 0&&E.call(m)})}}function bu(t){let{holder:e,type:n}=t[0];t.some(o=>o.type===n&&o.argumentTypes.length===0)||t.push(Eu([e,n]))}function Eu(t){let e=vu();return Object.setPrototypeOf(e,ii),e._p=t,e}function vu(){return function(){return this}}ii=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return"valueOf"}},holder:{enumerable:!0,get(){return this._p[0]}},type:{enumerable:!0,get(){return this._p[1]}},handle:{enumerable:!0,get(){return NULL}},implementation:{enumerable:!0,get(){return null},set(t){}},returnType:{enumerable:!0,get(){let t=this.holder;return t.$f.use(t.$n)}},argumentTypes:{enumerable:!0,get(){return[]}},canInvokeWith:{enumerable:!0,value(t){return t.length===0}},clone:{enumerable:!0,value(t){throw new Error("Invalid operation")}}});function Su(t,e,n,r,o){let i=e[2]==="s"?fr:mr,s=ptr(e.substr(3)),{$f:l}=r,a,c=o.toReflectedField(n,s,i===fr?1:0);try{a=o.vaMethod("pointer",[])(o.handle,c,o.javaLangReflectField().getGenericType),o.throwIfExceptionPending()}finally{o.deleteLocalRef(c)}let d;try{d=l._getType(o.getTypeName(a))}finally{o.deleteLocalRef(a)}let f,p,u=d.type;return i===fr?(f=o.getStaticField(u),p=o.setStaticField(u)):(f=o.getField(u),p=o.setField(u)),wu([i,d,s,f,p])}function wu(t){return function(e){return new ai([e].concat(t))}}function ai(t){this._p=t}Object.defineProperties(ai.prototype,{value:{enumerable:!0,get(){let[t,e,n,r,o]=this._p,i=ee.getEnv();i.pushLocalFrame(4);let s=null;try{let l;if(e===mr){if(l=t.$getHandle(),l===null)throw new Error("Cannot access an instance field without an instance")}else s=t.$borrowClassHandle(i),l=s.value;let a=o(i.handle,l,r);return i.throwIfExceptionPending(),n.fromJni(a,i,!0)}finally{s!==null&&s.unref(i),i.popLocalFrame(NULL)}},set(t){let[e,n,r,o,,i]=this._p,s=ee.getEnv();s.pushLocalFrame(4);let l=null;try{let a;if(n===mr){if(a=e.$getHandle(),a===null)throw new Error("Cannot access an instance field without an instance")}else l=e.$borrowClassHandle(s),a=l.value;if(!r.isCompatible(t))throw new Error(`Expected value compatible with ${r.className}`);let c=r.toJni(t,s);i(s.handle,a,o,c),s.throwIfExceptionPending()}finally{l!==null&&l.unref(s),s.popLocalFrame(NULL)}}},holder:{enumerable:!0,get(){return this._p[0]}},fieldType:{enumerable:!0,get(){return this._p[1]}},fieldReturnType:{enumerable:!0,get(){return this._p[2]}},toString:{enumerable:!0,value(){let t=`Java.Field{holder: ${this.holder}, fieldType: ${this.fieldType}, fieldReturnType: ${this.fieldReturnType}, value: ${this.value}}`;return t.length<200?t:`Java.Field{
	holder: ${this.holder},
	fieldType: ${this.fieldType},
	fieldReturnType: ${this.fieldReturnType},
	value: ${this.value},
}`.split(`
`).map(n=>n.length>200?n.slice(0,n.indexOf(" ")+1)+"...,":n).join(`
`)}}});var Vt=class t{static fromBuffer(e,n){let r=Yo(n),o=r.getCanonicalPath().toString(),i=new File(o,"w");return i.write(e.buffer),i.close(),Iu(o,n),new t(o,r,n)}constructor(e,n,r){this.path=e,this.file=n,this._factory=r}load(){let{_factory:e}=this,{codeCacheDir:n}=e,r=e.use("dalvik.system.DexClassLoader"),o=e.use("java.io.File"),i=this.file;if(i===null&&(i=e.use("java.io.File").$new(this.path)),!i.exists())throw new Error("File not found");o.$new(n).mkdirs(),e.loader=r.$new(i.getCanonicalPath(),n,null,e.loader),ee.preventDetachDueToClassLoader()}getClassNames(){let{_factory:e}=this,n=e.use("dalvik.system.DexFile"),r=Yo(e),o=n.loadDex(this.path,r.getCanonicalPath(),0),i=[],s=o.entries();for(;s.hasMoreElements();)i.push(s.nextElement().toString());return i}};function Yo(t){let{cacheDir:e,tempFileNaming:n}=t,r=t.use("java.io.File"),o=r.$new(e);return o.mkdirs(),r.createTempFile(n.prefix,n.suffix+".dex",o)}function Iu(t,e){e.use("java.io.File").$new(t).setWritable(!1,!1)}function xu(){switch(be.state){case"empty":{be.state="pending";let t=be.factories[0],e=t.use("java.util.HashMap"),n=t.use("java.lang.Integer");be.loaders=e.$new(),be.Integer=n;let r=t.loader;return r!==null&&yr(t,r),be.state="ready",be}case"pending":do Thread.sleep(.05);while(be.state==="pending");return be;case"ready":return be}}function yr(t,e){let{factories:n,loaders:r,Integer:o}=be,i=o.$new(n.indexOf(t));r.put(e,i);for(let s=e.getParent();s!==null&&!r.containsKey(s);s=s.getParent())r.put(s,i)}function li(t){let e=Xe.get(t);e===void 0&&(e=0),e++,Xe.set(t,e)}function ci(t){let e=Xe.get(t);if(e===void 0)throw new Error(`Thread ${t} is not ignored`);e--,e===0?Xe.delete(t):Xe.set(t,e)}function Cu(t){return t.slice(t.lastIndexOf(".")+1)}function br(t,e){let n=[],r=t.getArrayLength(e);for(let o=0;o!==r;o++){let i=t.getObjectArrayElement(e,o);try{n.push(t.getTypeName(i))}finally{t.deleteLocalRef(i)}}return n}function Au(t){let e=t.split(".");return e[e.length-1]+".java"}var Tu=4,di=Process.pointerSize,Sr=class{ACC_PUBLIC=1;ACC_PRIVATE=2;ACC_PROTECTED=4;ACC_STATIC=8;ACC_FINAL=16;ACC_SYNCHRONIZED=32;ACC_BRIDGE=64;ACC_VARARGS=128;ACC_NATIVE=256;ACC_ABSTRACT=1024;ACC_STRICT=2048;ACC_SYNTHETIC=4096;constructor(){this.classFactory=null,this.ClassFactory=Fe,this.vm=null,this.api=null,this._initialized=!1,this._apiError=null,this._wakeupHandler=null,this._pollListener=null,this._pendingMainOps=[],this._pendingVmOps=[],this._cachedIsAppProcess=null;try{this._tryInitialize()}catch{}}_tryInitialize(){if(this._initialized)return!0;if(this._apiError!==null)throw this._apiError;let e;try{e=pt(),this.api=e}catch(r){throw this._apiError=r,r}if(e===null)return!1;let n=new Le(e);return this.vm=n,$o(n),Fe._initialize(n,e),this.classFactory=new Fe,this._initialized=!0,!0}_dispose(){if(this.api===null)return;let{vm:e}=this;e.perform(n=>{Fe._disposeAll(n),I.dispose(n)}),Script.nextTick(()=>{Le.dispose(e)})}get available(){return this._tryInitialize()}get androidVersion(){return ut()}synchronized(e,n){let{$h:r=e}=e;if(!(r instanceof NativePointer))throw new Error("Java.synchronized: the first argument `obj` must be either a pointer or a Java instance");let o=this.vm.getEnv();ye("VM::MonitorEnter",o.monitorEnter(r));try{n()}finally{o.monitorExit(r)}}enumerateLoadedClasses(e){this._checkAvailable();let{flavor:n}=this.api;n==="jvm"?this._enumerateLoadedClassesJvm(e):n==="art"?this._enumerateLoadedClassesArt(e):this._enumerateLoadedClassesDalvik(e)}enumerateLoadedClassesSync(){let e=[];return this.enumerateLoadedClasses({onMatch(n){e.push(n)},onComplete(){}}),e}enumerateClassLoaders(e){this._checkAvailable();let{flavor:n}=this.api;if(n==="jvm")this._enumerateClassLoadersJvm(e);else if(n==="art")this._enumerateClassLoadersArt(e);else throw new Error("Enumerating class loaders is not supported on Dalvik")}enumerateClassLoadersSync(){let e=[];return this.enumerateClassLoaders({onMatch(n){e.push(n)},onComplete(){}}),e}_enumerateLoadedClassesJvm(e){let{api:n,vm:r}=this,{jvmti:o}=n,i=r.getEnv(),s=Memory.alloc(Tu),l=Memory.alloc(di);o.getLoadedClasses(s,l);let a=s.readS32(),c=l.readPointer(),d=[];for(let f=0;f!==a;f++)d.push(c.add(f*di).readPointer());o.deallocate(c);try{for(let f of d){let p=i.getClassName(f);e.onMatch(p,f)}e.onComplete()}finally{d.forEach(f=>{i.deleteLocalRef(f)})}}_enumerateClassLoadersJvm(e){this.choose("java.lang.ClassLoader",e)}_enumerateLoadedClassesArt(e){let{vm:n,api:r}=this,o=n.getEnv(),i=r["art::JavaVMExt::AddGlobalRef"],{vm:s}=r;Ce(n,o,l=>{let a=Hn(c=>{let d=i(s,l,c);try{let f=o.getClassName(d);e.onMatch(f,d)}finally{o.deleteGlobalRef(d)}return!0});r["art::ClassLinker::VisitClasses"](r.artClassLinker.address,a)}),e.onComplete()}_enumerateClassLoadersArt(e){let{classFactory:n,vm:r,api:o}=this,i=r.getEnv(),s=o["art::ClassLinker::VisitClassLoaders"];if(s===void 0)throw new Error("This API is only available on Android >= 7.0");let l=n.use("java.lang.ClassLoader"),a=[],c=o["art::JavaVMExt::AddGlobalRef"],{vm:d}=o;Ce(r,i,f=>{let p=Zn(u=>(a.push(c(d,f,u)),!0));$n(()=>{s(o.artClassLinker.address,p)})});try{a.forEach(f=>{let p=n.cast(f,l);e.onMatch(p)})}finally{a.forEach(f=>{i.deleteGlobalRef(f)})}e.onComplete()}_enumerateLoadedClassesDalvik(e){let{api:n}=this,r=ptr("0xcbcacccd"),o=172,i=8,l=n.gDvm.add(o).readPointer(),a=l.readS32(),d=l.add(12).readPointer(),f=a*i;for(let p=0;p<f;p+=i){let g=d.add(p).add(4).readPointer();if(g.isNull()||g.equals(r))continue;let E=g.add(24).readPointer().readUtf8String();if(E.startsWith("L")){let w=E.substring(1,E.length-1).replace(/\//g,".");e.onMatch(w)}}e.onComplete()}enumerateMethods(e){let{classFactory:n}=this,r=this.vm.getEnv(),o=n.use("java.lang.ClassLoader");return Ve.enumerateMethods(e,this.api,r).map(i=>{let s=i.loader;return i.loader=s!==null?n.wrap(s,o,r):null,i})}scheduleOnMainThread(e){this.performNow(()=>{this._pendingMainOps.push(e);let{_wakeupHandler:n}=this;if(n===null){let{classFactory:r}=this,o=r.use("android.os.Handler"),i=r.use("android.os.Looper");n=o.$new(i.getMainLooper()),this._wakeupHandler=n}this._pollListener===null&&(this._pollListener=Interceptor.attach(Process.getModuleByName("libc.so").getExportByName("epoll_wait"),this._makePollHook()),Interceptor.flush()),n.sendEmptyMessage(1)})}_makePollHook(){let e=Process.id,{_pendingMainOps:n}=this;return function(){if(this.threadId!==e)return;let r;for(;(r=n.shift())!==void 0;)try{r()}catch(o){Script.nextTick(()=>{throw o})}}}perform(e){if(this._checkAvailable(),!this._isAppProcess()||this.classFactory.loader!==null)try{this.vm.perform(e)}catch(n){Script.nextTick(()=>{throw n})}else this._pendingVmOps.push(e),this._pendingVmOps.length===1&&this._performPendingVmOpsWhenReady()}performNow(e){return this._checkAvailable(),this.vm.perform(()=>{let{classFactory:n}=this;if(this._isAppProcess()&&n.loader===null){let o=n.use("android.app.ActivityThread").currentApplication();o!==null&&ui(n,o)}return e()})}_performPendingVmOpsWhenReady(){this.vm.perform(()=>{let{classFactory:e}=this,n=e.use("android.app.ActivityThread"),r=n.currentApplication();if(r!==null){ui(e,r),this._performPendingVmOps();return}let o=this,i=!1,s="early",l=n.handleBindApplication;l.implementation=function(d){if(d.instrumentationName.value!==null){s="late";let p=e.use("android.app.LoadedApk").makeApplication;p.implementation=function(u,g){return i||(i=!0,fi(e,this),o._performPendingVmOps()),p.apply(this,arguments)}}l.apply(this,arguments)};let c=n.getPackageInfo.overloads.map(d=>[d.argumentTypes.length,d]).sort(([d],[f])=>f-d).map(([d,f])=>f)[0];c.implementation=function(...d){let f=c.call(this,...d);return!i&&s==="early"&&(i=!0,fi(e,f),o._performPendingVmOps()),f}})}_performPendingVmOps(){let{vm:e,_pendingVmOps:n}=this,r;for(;(r=n.shift())!==void 0;)try{e.perform(r)}catch(o){Script.nextTick(()=>{throw o})}}use(e,n){return this.classFactory.use(e,n)}openClassFile(e){return this.classFactory.openClassFile(e)}choose(e,n){this.classFactory.choose(e,n)}retain(e){return this.classFactory.retain(e)}cast(e,n){return this.classFactory.cast(e,n)}array(e,n){return this.classFactory.array(e,n)}backtrace(e){return Kn(this.vm,e)}isMainThread(){let e=this.classFactory.use("android.os.Looper"),n=e.getMainLooper(),r=e.myLooper();return r===null?!1:n.$isSameObject(r)}registerClass(e){return this.classFactory.registerClass(e)}deoptimizeEverything(){let{vm:e}=this;return Yn(e,e.getEnv())}deoptimizeBootImage(){let{vm:e}=this;return Xn(e,e.getEnv())}deoptimizeMethod(e){let{vm:n}=this;return Qn(n,n.getEnv(),e)}_checkAvailable(){if(!this.available)throw new Error("Java API not available")}_isAppProcess(){let e=this._cachedIsAppProcess;if(e===null){if(this.api.flavor==="jvm")return e=!1,this._cachedIsAppProcess=e,e;let n=new NativeFunction(Module.getGlobalExportByName("readlink"),"pointer",["pointer","pointer","pointer"],{exceptions:"propagate"}),r=Memory.allocUtf8String("/proc/self/exe"),o=1024,i=Memory.alloc(o),s=n(r,i,ptr(o)).toInt32();if(s!==-1){let l=i.readUtf8String(s);e=/^\/system\/bin\/app_process/.test(l)}else e=!0;this._cachedIsAppProcess=e}return e}};function ui(t,e){let n=t.use("android.os.Process");t.loader=e.getClassLoader(),n.myUid()===n.SYSTEM_UID.value?(t.cacheDir="/data/system",t.codeCacheDir="/data/dalvik-cache"):"getCodeCacheDir"in e?(t.cacheDir=e.getCacheDir().getCanonicalPath(),t.codeCacheDir=e.getCodeCacheDir().getCanonicalPath()):(t.cacheDir=e.getFilesDir().getCanonicalPath(),t.codeCacheDir=e.getCacheDir().getCanonicalPath())}function fi(t,e){let n=t.use("java.io.File");t.loader=e.getClassLoader();let r=n.$new(e.getDataDir()).getCanonicalPath();t.cacheDir=r,t.codeCacheDir=r+"/cache"}var wr=new Sr;Script.bindWeak(wr,()=>{wr._dispose()});var pi=wr;typeof globalThis.Java>"u"&&(globalThis.Java=pi);var te={logInit:!0,logUpdate:!0,logDoFinal:!0,logAAD:!0,logSecretKeySpec:!0,logErrors:!0,showUtf8:!0,showHex:!0,showBase64:!0,showKeys:!0,showIV:!0,showProvider:!1,backtrace:!1,backtraceDepth:12,excludeAndroidFramework:!0,excludedStackPrefixes:["java.","javax.crypto.","sun.","android.","com.android.internal."],maxDumpBytes:4096,maxRememberedKeys:512,includeAlgorithms:[],excludeAlgorithms:[],includePackages:[],excludePackages:[]};function Nu(t){function e(h){try{return t.use(h)}catch{return null}}let n={Cipher:t.use("javax.crypto.Cipher"),SecretKeySpec:t.use("javax.crypto.spec.SecretKeySpec"),IvParameterSpec:t.use("javax.crypto.spec.IvParameterSpec"),GCMParameterSpec:e("javax.crypto.spec.GCMParameterSpec"),ChaCha20ParameterSpec:e("javax.crypto.spec.ChaCha20ParameterSpec"),OAEPParameterSpec:e("javax.crypto.spec.OAEPParameterSpec"),AlgorithmParameters:t.use("java.security.AlgorithmParameters"),SecureRandom:t.use("java.security.SecureRandom"),SecretKey:t.use("javax.crypto.SecretKey"),PublicKey:t.use("java.security.PublicKey"),PrivateKey:t.use("java.security.PrivateKey"),String:t.use("java.lang.String"),System:t.use("java.lang.System"),WeakReference:t.use("java.lang.ref.WeakReference"),Exception:t.use("java.lang.Exception"),Base64:t.use("android.util.Base64")};function r(h,_){try{return h()}catch{return _}}function o(h){try{h()}catch{}}function i(h){return h==null?null:r(function(){return h.toString()},"<unavailable>")}function s(h){return Number(r(function(){return h.valueOf()},h))}function l(h){return h==null?null:r(function(){return h.getClass().getName().toString()},"<unknown>")}let a=function(){let h=Object.create(null);function _(){return String(Process.getCurrentThreadId())}return{active:function(){return(h[_()]||0)>0},enter:function(){let b=_();h[b]=(h[b]||0)+1},leave:function(){let b=_(),S=(h[b]||1)-1;S<=0?delete h[b]:h[b]=S}}}();function c(h){let _=0;for(;_<h.length;){let b=h[_++];if(b<=127)continue;let S,y,C;if(b>=194&&b<=223)S=1,y=b&31,C=128;else if(b>=224&&b<=239)S=2,y=b&15,C=2048;else if(b>=240&&b<=244)S=3,y=b&7,C=65536;else return!1;if(_+S>h.length)return!1;for(let V=0;V<S;V++){let D=h[_++];if((D&192)!==128)return!1;y=y<<6|D&63}if(y<C||y>1114111||y>=55296&&y<=57343)return!1}return!0}let d={snapshotArray:function(h,_,b){if(h==null)return null;let S=s(h.length),y=_===void 0?0:s(_),C=b===void 0?S-y:s(b);if(!Number.isFinite(y)||!Number.isFinite(C)||y<0||C<0||y+C>S)return null;let V=Math.min(C,Math.max(0,te.maxDumpBytes)),D=new Array(V);for(let ne=0;ne<V;ne++)D[ne]=s(h[y+ne])&255;return{bytes:D,length:C,truncated:V<C}},snapshotByteBuffer:function(h,_,b){if(h==null)return null;let S=s(_===void 0?h.position():_),y=s(b===void 0?h.limit():b);if(!Number.isFinite(S)||!Number.isFinite(y)||S<0||y<S)return null;let C=y-S,V=Math.min(C,Math.max(0,te.maxDumpBytes)),D=h.duplicate();D.position(S),D.limit(S+V);let ne=t.array("byte",new Array(V).fill(0));D.get(ne);let Z=d.snapshotArray(ne);return Z.length=C,Z.truncated=V<C,Z},trimSnapshot:function(h,_){if(h===null)return null;let b=Math.max(0,s(_));return{bytes:h.bytes.slice(0,Math.min(h.bytes.length,b)),length:b,truncated:h.bytes.length<b}},hex:function(h){let _=new Array(h.length);for(let b=0;b<h.length;b++)_[b]=h[b].toString(16).padStart(2,"0");return _.join(" ")},base64:function(h){let _=new Array(h.length);for(let b=0;b<h.length;b++)_[b]=h[b]>127?h[b]-256:h[b];return n.Base64.encodeToString(t.array("byte",_),n.Base64.NO_WRAP.value).toString()},printableUtf8:function(h){if(!c(h))return null;let _=new Array(h.length);for(let S=0;S<h.length;S++)_[S]=h[S]>127?h[S]-256:h[S];let b=n.String.$new(t.array("byte",_),"UTF-8").toString();for(let S=0;S<b.length;S++){let y=b.charCodeAt(S);if(y<32&&y!==9&&y!==10&&y!==13||y>=127&&y<=159)return null}return b}},f={frames:function(){let h=n.Exception.$new().getStackTrace(),_=[];for(let b=0;b<h.length;b++){let S=h[b],y=S.getClassName().toString();y!=="javax.crypto.Cipher"&&_.push({className:y,methodName:S.getMethodName().toString(),fileName:i(S.getFileName()),lineNumber:s(S.getLineNumber())})}return _},callSiteAllowed:function(h){return te.includePackages.length>0&&!h.some(function(_){return p(_.className,te.includePackages)})?!1:!h.some(function(_){return p(_.className,te.excludePackages)})},format:function(h){let _=[];for(let b=0;b<h.length&&_.length<te.backtraceDepth;b++){let S=h[b];if(te.excludeAndroidFramework&&te.excludedStackPrefixes.some(function(C){return S.className.indexOf(C)===0}))continue;let y=S.fileName===null?"":" ("+S.fileName+":"+S.lineNumber+")";_.push(S.className+"."+S.methodName+y)}return _}};function p(h,_){let b=h||"",S=b.toUpperCase();return _.some(function(y){return y instanceof RegExp?(y.lastIndex=0,y.test(b)):S.indexOf(String(y).toUpperCase())!==-1})}function u(h){return te.includeAlgorithms.length>0&&!p(h,te.includeAlgorithms)?!1:!p(h,te.excludeAlgorithms)}function g(h){if(!u(h))return{allowed:!1,frames:null};if(te.includePackages.length===0&&te.excludePackages.length===0&&!te.backtrace)return{allowed:!0,frames:null};let _=r(f.frames,[]);return{allowed:f.callSiteAllowed(_),frames:_}}let m=function(){let h=Object.create(null),_=1,b=0;function S(Z){return String(s(n.System.identityHashCode(Z)))}function y(Z,q){return r(function(){return Z.equals(q)},!1)===!0}function C(Z){let q=S(Z),ce=h[q];if(!ce)return D(),null;for(let ue=ce.length-1;ue>=0;ue--){let L=ce[ue].reference.get();if(L===null)ce.splice(ue,1);else if(y(L,Z))return D(),ce[ue].state}return ce.length===0&&delete h[q],D(),null}function V(Z,q){let ce=S(Z),ue=h[ce];ue||(ue=[],h[ce]=ue);for(let L=ue.length-1;L>=0;L--){let fe=ue[L].reference.get();if(fe===null)ue.splice(L,1);else if(y(fe,Z))return ue[L].state=q,D(),q}return ue.push({reference:n.WeakReference.$new(Z),state:q}),D(),q}function D(){b++,(b&255)===0&&Object.keys(h).forEach(function(Z){let q=h[Z].filter(function(ce){return ce.reference.get()!==null});q.length===0?delete h[Z]:h[Z]=q})}function ne(Z){return Object.assign({id:_++,inputBytes:0,outputBytes:0,updateCount:0,finalCount:0,aadBytes:0,aadCount:0},Z)}return{createAfterInit:function(Z,q){return V(Z,ne(q))},get:C,getOrDiscover:function(Z){let q=C(Z);return q!==null?q:V(Z,ne({transformation:r(function(){return Z.getAlgorithm().toString()},"<unknown>"),mode:"UNKNOWN (attached after init)"}))}}}();function E(h){return(h+"                    ").slice(0,20)}function w(h,_,b){if(b===null){h.push("  "+E(_+" Length")+": <null>");return}h.push("  "+E(_+" Length")+": "+b.length+(b.truncated?" (showing first "+b.bytes.length+")":""));let S=te.showUtf8?r(function(){return d.printableUtf8(b.bytes)},null):null;S!==null&&h.push("  "+E(_+" UTF-8")+": "+JSON.stringify(S)),te.showHex&&h.push("  "+E(_+" Hex")+": "+d.hex(b.bytes)),te.showBase64&&h.push("  "+E(_+" Base64")+": "+d.base64(b.bytes))}let x={event:function(h,_,b,S,y,C){let V=h&&h.transformation?h.transformation:"<unknown>",D=h&&h.mode?h.mode:"UNKNOWN",Z=["[Cipher #"+(h&&h.id?h.id:"?")+"]["+V+"]["+D+"] "+_];if((b||[]).forEach(function(q){q[1]!==null&&q[1]!==void 0&&Z.push("  "+E(q[0])+": "+q[1])}),(S||[]).forEach(function(q){w(Z,q[0],q[1])}),(y||[]).forEach(function(q){Z.push("  "+E("Warning")+": "+q)}),te.backtrace){let q=f.format(C||r(f.frames,[]));q.length>0&&(Z.push("  Call site:"),q.forEach(function(ce){Z.push("    "+ce)}))}o(function(){console.log(Z.join(`
`))})},error:function(h,_,b,S){te.logErrors&&x.event(h,_+" THREW",[["Exception",i(b)]],[],[],S)},secretKeySpec:function(h,_,b,S,y){let C=["[SecretKeySpec] CREATE","  "+E("Algorithm")+": "+_];C.push("  "+E("Constructor")+": "+h),S!==null&&C.push("  "+E("Source Range")+": offset "+S+", length "+y),w(C,"Key",b),o(function(){console.log(C.join(`
`))})}};function k(h){switch(s(h)){case 1:return"ENCRYPT";case 2:return"DECRYPT";case 3:return"WRAP";case 4:return"UNWRAP";default:return"UNKNOWN("+s(h)+")"}}function M(h){if(h==null)return{algorithm:null,format:null,className:null,role:null,encoded:null,sizeBits:null};let _=r(function(){return h.getEncoded()},null),b=_===null?null:d.snapshotArray(_),S="Key";return n.SecretKey.class.isInstance(h)?S="SecretKey":n.PublicKey.class.isInstance(h)?S="PublicKey":n.PrivateKey.class.isInstance(h)&&(S="PrivateKey"),{algorithm:r(function(){return h.getAlgorithm().toString()},"<unknown>"),format:r(function(){let y=h.getFormat();return y===null?"<non-exportable>":y.toString()},"<unavailable>"),className:l(h),role:S,encoded:b,sizeBits:b===null?null:b.length*8}}function U(h){let _={className:l(h),iv:null,gcmTagBits:null,chaChaCounter:null,details:null};if(h==null)return _;if(n.GCMParameterSpec!==null&&n.GCMParameterSpec.class.isInstance(h)){let b=t.cast(h,n.GCMParameterSpec);_.iv=d.snapshotArray(b.getIV()),_.gcmTagBits=s(b.getTLen())}else if(n.IvParameterSpec.class.isInstance(h))_.iv=d.snapshotArray(t.cast(h,n.IvParameterSpec).getIV());else if(n.ChaCha20ParameterSpec!==null&&n.ChaCha20ParameterSpec.class.isInstance(h)){let b=t.cast(h,n.ChaCha20ParameterSpec);_.iv=d.snapshotArray(b.getNonce()),_.chaChaCounter=s(b.getCounter())}else if(n.OAEPParameterSpec!==null&&n.OAEPParameterSpec.class.isInstance(h)){let b=t.cast(h,n.OAEPParameterSpec);_.details="digest="+b.getDigestAlgorithm()+", mgf="+b.getMGFAlgorithm()}else _.details=r(function(){return h.toString()},null);return _}function z(h){if(h==null)return null;let _={className:l(h),algorithm:r(function(){return h.getAlgorithm().toString()},null),encoded:null,spec:null,text:r(function(){return h.toString()},null)},b=r(function(){return h.getEncoded()},null);return _.encoded=b===null?null:d.snapshotArray(b),n.GCMParameterSpec!==null&&(_.spec=r(function(){return U(h.getParameterSpec(n.GCMParameterSpec.class))},null)),_.spec===null&&(_.spec=r(function(){return U(h.getParameterSpec(n.IvParameterSpec.class))},null)),_}function R(h){let _={opmode:s(h[0]),mode:k(h[0]),key:M(h[1]),explicitSpec:null,explicitParameters:null,secureRandom:null};for(let b=2;b<h.length;b++){let S=h[b];S!=null&&(n.AlgorithmParameters.class.isInstance(S)?_.explicitParameters=z(S):n.SecureRandom.class.isInstance(S)?_.secureRandom=l(S):_.explicitSpec=U(S))}return _}function F(h,_){let b=r(function(){return h.getIV()},null),S=z(r(function(){return h.getParameters()},null)),y=r(function(){let D=h.getProvider();return D===null?null:D.getName().toString()},null),C=_.explicitSpec,V=S&&S.spec?S.spec:null;return{transformation:r(function(){return h.getAlgorithm().toString()},"<unknown>"),mode:_.mode,opmode:_.opmode,key:_.key,explicitSpec:C,parameters:S||_.explicitParameters,provider:y,secureRandom:_.secureRandom,iv:b===null?C?C.iv:null:d.snapshotArray(b),gcmTagBits:C&&C.gcmTagBits!==null?C.gcmTagBits:V?V.gcmTagBits:null}}function A(h){let _=[],b=(h.transformation||"").toUpperCase();return(b.indexOf("/ECB/")!==-1||/(^|\/)ECB($|\/)/.test(b))&&_.push("ECB mode detected; identical blocks may reveal patterns"),h.key&&h.key.algorithm&&h.key.algorithm.toUpperCase()==="AES"&&h.key.sizeBits!==null&&[128,192,256].indexOf(h.key.sizeBits)===-1&&_.push("Unusual AES key length: "+h.key.sizeBits+" bits"),h.iv!==null&&(b.indexOf("GCM")!==-1&&h.iv.length!==12&&_.push("Non-typical GCM nonce length: "+h.iv.length+" bytes (commonly 12)"),b.indexOf("AES/CBC")!==-1&&h.iv.length!==16&&_.push("Unusual AES/CBC IV length: "+h.iv.length+" bytes")),_}function j(h,_){let b=h.key||{},S=b.algorithm&&b.algorithm.toUpperCase()==="AES"&&b.format==="RAW",y=[["Overload",h.initOverload],["Transformation",h.transformation],["Mode",h.mode],["Provider",te.showProvider?h.provider:null],["Key Algorithm",b.algorithm],["Key Role",b.role],["Key Class",b.className],["Key Format",b.format],[S?"AES Key Size":"Encoded Key Size",b.sizeBits===null||b.sizeBits===void 0?null:b.sizeBits+" bits"],["GCM Tag",h.gcmTagBits===null?null:h.gcmTagBits+" bits"],["Parameter Spec",h.explicitSpec?h.explicitSpec.className:null],["Parameter Details",h.explicitSpec?h.explicitSpec.details:null],["ChaCha Counter",h.explicitSpec?h.explicitSpec.chaChaCounter:null],["Parameters",h.parameters?h.parameters.algorithm||h.parameters.className:null],["SecureRandom",h.secureRandom]],C=[];te.showKeys&&C.push(["Key",b.encoded]),te.showIV&&h.iv!==null&&C.push(["IV",h.iv]),h.parameters&&h.parameters.encoded!==null&&C.push(["Parameters",h.parameters.encoded]),x.event(h,"INIT",y,C,A(h),_)}function B(h){return h.argumentTypes.map(function(_){return _.className}).join(",")}function T(h,_){h.implementation=function(){if(a.active())return h.apply(this,arguments);a.enter();let b=this,S=arguments,y=Array.prototype.slice.call(arguments),C=null;try{C=r(function(){return _.before?_.before(b,y):null},null);let V;try{V=h.apply(b,S)}catch(D){throw o(function(){_.error&&_.error(b,y,C,D)}),D}return o(function(){_.after&&_.after(b,y,C,V)}),V}finally{a.leave()}}}n.Cipher.init.overloads.forEach(function(h){let _=B(h);T(h,{before:function(b,S){return R(S)},after:function(b,S,y){let C=y||r(function(){return R(S)},null);if(C===null)return;let V=F(b,C);V.initOverload=_;let D=m.createAfterInit(b,V),ne=g(D.transformation);te.logInit&&ne.allowed&&j(D,ne.frames)},error:function(b,S,y,C){let V=m.get(b)||{id:"?",transformation:r(function(){return b.getAlgorithm().toString()},"<unknown>"),mode:y?y.mode:"UNKNOWN"},D=g(V.transformation);D.allowed&&x.error(V,"INIT",C,D.frames)}})});function J(h){return{inputPosition:s(h[0].position()),input:d.snapshotByteBuffer(h[0]),outputPosition:s(h[1].position())}}function H(h,_){return h==="[B"?{input:d.snapshotArray(_[0])}:h.indexOf("[B,int,int")===0?{input:d.snapshotArray(_[0],_[1],_[2])}:h==="java.nio.ByteBuffer,java.nio.ByteBuffer"?J(_):{input:null}}function K(h,_,b,S){return h==="[B"||h==="[B,int,int"?S===null?null:d.snapshotArray(S):h==="[B,int,int,[B"?d.snapshotArray(_[3],0,s(S)):h==="[B,int,int,[B,int"?d.snapshotArray(_[3],_[4],s(S)):h==="java.nio.ByteBuffer,java.nio.ByteBuffer"?d.snapshotByteBuffer(_[1],b.outputPosition,s(_[1].position())):null}n.Cipher.update.overloads.forEach(function(h){let _=B(h);T(h,{before:function(b,S){let y=m.getOrDiscover(b),C=g(y.transformation),V=te.logUpdate&&C.allowed?H(_,S):null;return{state:y,context:C,capture:V}},after:function(b,S,y,C){if(!y||!y.capture)return;let V=y.capture.input;_==="java.nio.ByteBuffer,java.nio.ByteBuffer"&&(V=d.trimSnapshot(V,s(S[0].position())-y.capture.inputPosition));let D=K(_,S,y.capture,C);y.state.inputBytes+=V===null?0:V.length,y.state.outputBytes+=D===null?0:D.length,y.state.updateCount++,x.event(y.state,"UPDATE",[["Overload",_],["Update #",y.state.updateCount],["Stream Input Total",y.state.inputBytes],["Stream Output Total",y.state.outputBytes]],[["Input",V],["Output",D]],[],y.context.frames)},error:function(b,S,y,C){let V=y&&y.state?y.state:m.getOrDiscover(b),D=y&&y.context?y.context:g(V.transformation);D.allowed&&x.error(V,"UPDATE",C,D.frames)}})});function $(h,_){return h===""?{input:null}:h==="[B"?{input:d.snapshotArray(_[0])}:h==="[B,int,int"||h.indexOf("[B,int,int,[B")===0?{input:d.snapshotArray(_[0],_[1],_[2])}:h==="[B,int"?{input:null}:h==="java.nio.ByteBuffer,java.nio.ByteBuffer"?J(_):{input:null}}function W(h,_,b,S){return h===""||h==="[B"||h==="[B,int,int"?S===null?null:d.snapshotArray(S):h==="[B,int"?d.snapshotArray(_[0],_[1],s(S)):h==="[B,int,int,[B"?d.snapshotArray(_[3],0,s(S)):h==="[B,int,int,[B,int"?d.snapshotArray(_[3],_[4],s(S)):h==="java.nio.ByteBuffer,java.nio.ByteBuffer"?d.snapshotByteBuffer(_[1],b.outputPosition,s(_[1].position())):null}n.Cipher.doFinal.overloads.forEach(function(h){let _=B(h);T(h,{before:function(b,S){let y=m.getOrDiscover(b),C=g(y.transformation),V=te.logDoFinal&&C.allowed?$(_,S):null;return{state:y,context:C,capture:V}},after:function(b,S,y,C){if(!y||!y.capture)return;let V=y.capture.input;_==="java.nio.ByteBuffer,java.nio.ByteBuffer"&&(V=d.trimSnapshot(V,s(S[0].position())-y.capture.inputPosition));let D=W(_,S,y.capture,C);y.state.inputBytes+=V===null?0:V.length,y.state.outputBytes+=D===null?0:D.length,y.state.finalCount++,x.event(y.state,"FINAL",[["Overload",_||"<no arguments>"],["Final #",y.state.finalCount],["Operation Input Total",y.state.inputBytes],["Operation Output Total",y.state.outputBytes],["AAD Total",y.state.aadBytes]],[["Input",V],["Output",D]],[],y.context.frames),y.state.inputBytes=0,y.state.outputBytes=0,y.state.updateCount=0,y.state.aadBytes=0,y.state.aadCount=0},error:function(b,S,y,C){let V=y&&y.state?y.state:m.getOrDiscover(b),D=y&&y.context?y.context:g(V.transformation);D.allowed&&x.error(V,"FINAL",C,D.frames)}})}),n.Cipher.updateAAD&&n.Cipher.updateAAD.overloads.forEach(function(h){let _=B(h);T(h,{before:function(b,S){let y=m.getOrDiscover(b),C=g(y.transformation);return!te.logAAD||!C.allowed?{state:y,context:C,enabled:!1}:_==="[B"?{state:y,context:C,enabled:!0,input:d.snapshotArray(S[0]),position:null}:_==="[B,int,int"?{state:y,context:C,enabled:!0,input:d.snapshotArray(S[0],S[1],S[2]),position:null}:_==="java.nio.ByteBuffer"?{state:y,context:C,enabled:!0,input:d.snapshotByteBuffer(S[0]),position:s(S[0].position())}:{state:y,context:C,enabled:!0,input:null,position:null}},after:function(b,S,y){if(!y||!y.enabled)return;let C=y.input;_==="java.nio.ByteBuffer"&&(C=d.trimSnapshot(C,s(S[0].position())-y.position)),y.state.aadBytes+=C===null?0:C.length,y.state.aadCount++,x.event(y.state,"AAD",[["Overload",_],["AAD Chunk #",y.state.aadCount],["AAD Total",y.state.aadBytes]],[["AAD",C]],[],y.context.frames)},error:function(b,S,y,C){let V=y&&y.state?y.state:m.getOrDiscover(b),D=y&&y.context?y.context:g(V.transformation);D.allowed&&x.error(V,"AAD",C,D.frames)}})});let re=new Set;function de(h){return re.has(h)?!1:(re.add(h),re.size>te.maxRememberedKeys&&re.delete(re.values().next().value),!0)}n.SecretKeySpec.$init.overloads.forEach(function(h){let _=B(h);_!=="[B,java.lang.String"&&_!=="[B,int,int,java.lang.String"||T(h,{before:function(b,S){let y=_==="[B,int,int,java.lang.String",C=y?s(S[1]):0,V=s(y?S[2]:S[0].length);return{algorithm:i(S[y?3:1]),key:d.snapshotArray(S[0],C,V),offset:y?C:null,length:V}},after:function(b,S,y){if(!te.logSecretKeySpec||!te.showKeys||y===null||y.key===null||!u(y.algorithm))return;let C=y.algorithm+":"+d.hex(y.key.bytes)+":"+y.key.length;de(C)&&x.secretKeySpec(_,y.algorithm,y.key,y.offset,y.length)},error:function(b,S,y,C){te.logErrors&&o(function(){console.log(`[SecretKeySpec] CREATE THREW
  `+E("Exception")+": "+i(C))})}})}),o(function(){console.log("[frida-java-crypto-spy] Generic Cipher hooks installed")})}(function(e){if(e==null){try{console.error("[frida-java-crypto-spy] Java bridge is unavailable. Frida 17 raw scripts must bundle frida-java-bridge.")}catch{}return}let n=typeof e.performNow=="function"?e.performNow:e.perform;try{console.log("[frida-java-crypto-spy] Agent evaluated; installing Java hooks"),n.call(e,function(){Nu(e)})}catch(r){try{console.error("[frida-java-crypto-spy] Hook installation failed: "+(r&&r.stack?r.stack:r))}catch{}}})(globalThis.Java);
