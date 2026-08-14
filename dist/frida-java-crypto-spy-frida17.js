📦
252697 /.fjcs-agent-build/entry.js
✄
var _i=Object.defineProperty;var gi=(t,e)=>{for(var n in e)_i(t,n,{get:e[n],enumerable:!0})};var Ne=[],xe=[],Jt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(let t=0,e=Jt.length;t<e;++t)Ne[t]=Jt[t],xe[Jt.charCodeAt(t)]=t;xe[45]=62;xe[95]=63;function yi(t){let e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");let n=t.indexOf("=");n===-1&&(n=e);let r=n===e?0:4-n%4;return[n,r]}function bi(t,e,n){return(e+n)*3/4-n}function wr(t){let e=yi(t),n=e[0],r=e[1],o=new Uint8Array(bi(t,n,r)),i=0,s=r>0?n-4:n,c;for(c=0;c<s;c+=4){let a=xe[t.charCodeAt(c)]<<18|xe[t.charCodeAt(c+1)]<<12|xe[t.charCodeAt(c+2)]<<6|xe[t.charCodeAt(c+3)];o[i++]=a>>16&255,o[i++]=a>>8&255,o[i++]=a&255}if(r===2){let a=xe[t.charCodeAt(c)]<<2|xe[t.charCodeAt(c+1)]>>4;o[i++]=a&255}if(r===1){let a=xe[t.charCodeAt(c)]<<10|xe[t.charCodeAt(c+1)]<<4|xe[t.charCodeAt(c+2)]>>2;o[i++]=a>>8&255,o[i++]=a&255}return o}function Ei(t){return Ne[t>>18&63]+Ne[t>>12&63]+Ne[t>>6&63]+Ne[t&63]}function vi(t,e,n){let r=[];for(let o=e;o<n;o+=3){let i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255);r.push(Ei(i))}return r.join("")}function Gt(t){let e=t.length,n=e%3,r=[],o=16383;for(let i=0,s=e-n;i<s;i+=o)r.push(vi(t,i,i+o>s?s:i+o));if(n===1){let i=t[e-1];r.push(Ne[i>>2]+Ne[i<<4&63]+"==")}else if(n===2){let i=(t[e-2]<<8)+t[e-1];r.push(Ne[i>>10]+Ne[i>>4&63]+Ne[i<<2&63]+"=")}return r.join("")}function tt(t,e,n,r,o){let i,s,c=o*8-r-1,a=(1<<c)-1,l=a>>1,d=-7,p=n?o-1:0,f=n?-1:1,u=t[e+p];for(p+=f,i=u&(1<<-d)-1,u>>=-d,d+=c;d>0;)i=i*256+t[e+p],p+=f,d-=8;for(s=i&(1<<-d)-1,i>>=-d,d+=r;d>0;)s=s*256+t[e+p],p+=f,d-=8;if(i===0)i=1-l;else{if(i===a)return s?NaN:(u?-1:1)*(1/0);s=s+Math.pow(2,r),i=i-l}return(u?-1:1)*s*Math.pow(2,i-r)}function $t(t,e,n,r,o,i){let s,c,a,l=i*8-o-1,d=(1<<l)-1,p=d>>1,f=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,u=r?0:i-1,g=r?1:-1,m=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(c=isNaN(e)?1:0,s=d):(s=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-s))<1&&(s--,a*=2),s+p>=1?e+=f/a:e+=f*Math.pow(2,1-p),e*a>=2&&(s++,a/=2),s+p>=d?(c=0,s=d):s+p>=1?(c=(e*a-1)*Math.pow(2,o),s=s+p):(c=e*Math.pow(2,p-1)*Math.pow(2,o),s=0));o>=8;)t[n+u]=c&255,u+=g,c/=256,o-=8;for(s=s<<o|c,l+=o;l>0;)t[n+u]=s&255,u+=g,s/=256,l-=8;t[n+u-g]|=m*128}var Ii={INSPECT_MAX_BYTES:50},Ht=2147483647;v.TYPED_ARRAY_SUPPORT=!0;Object.defineProperty(v.prototype,"parent",{enumerable:!0,get:function(){if(v.isBuffer(this))return this.buffer}});Object.defineProperty(v.prototype,"offset",{enumerable:!0,get:function(){if(v.isBuffer(this))return this.byteOffset}});function Me(t){if(t>Ht)throw new RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(t);return Object.setPrototypeOf(e,v.prototype),e}function v(t,e,n){if(typeof t=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return qt(t)}return Ar(t,e,n)}v.poolSize=8192;function Ar(t,e,n){if(typeof t=="string")return Ci(t,e);if(ArrayBuffer.isView(t))return Ai(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(t instanceof ArrayBuffer||t&&t.buffer instanceof ArrayBuffer||t instanceof SharedArrayBuffer||t&&t.buffer instanceof SharedArrayBuffer)return Kt(t,e,n);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let r=t.valueOf&&t.valueOf();if(r!=null&&r!==t)return v.from(r,e,n);let o=Ti(t);if(o)return o;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return v.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}v.from=function(t,e,n){return Ar(t,e,n)};Object.setPrototypeOf(v.prototype,Uint8Array.prototype);Object.setPrototypeOf(v,Uint8Array);function Tr(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function xi(t,e,n){return Tr(t),t<=0?Me(t):e!==void 0?typeof n=="string"?Me(t).fill(e,n):Me(t).fill(e):Me(t)}v.alloc=function(t,e,n){return xi(t,e,n)};function qt(t){return Tr(t),Me(t<0?0:Qt(t)|0)}v.allocUnsafe=function(t){return qt(t)};v.allocUnsafeSlow=function(t){return qt(t)};function Ci(t,e){if((typeof e!="string"||e==="")&&(e="utf8"),!v.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let n=Nr(t,e)|0,r=Me(n),o=r.write(t,e);return o!==n&&(r=r.slice(0,o)),r}function Zt(t){let e=t.length<0?0:Qt(t.length)|0,n=Me(e);for(let r=0;r<e;r+=1)n[r]=t[r]&255;return n}function Ai(t){if(t instanceof Uint8Array){let e=new Uint8Array(t);return Kt(e.buffer,e.byteOffset,e.byteLength)}return Zt(t)}function Kt(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return e===void 0&&n===void 0?r=new Uint8Array(t):n===void 0?r=new Uint8Array(t,e):r=new Uint8Array(t,e,n),Object.setPrototypeOf(r,v.prototype),r}function Ti(t){if(v.isBuffer(t)){let e=Qt(t.length)|0,n=Me(e);return n.length===0||t.copy(n,0,0,e),n}if(t.length!==void 0)return typeof t.length!="number"||Number.isNaN(t.length)?Me(0):Zt(t);if(t.type==="Buffer"&&Array.isArray(t.data))return Zt(t.data)}function Qt(t){if(t>=Ht)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ht.toString(16)+" bytes");return t|0}v.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==v.prototype};v.compare=function(e,n){if(e instanceof Uint8Array&&(e=v.from(e,e.offset,e.byteLength)),n instanceof Uint8Array&&(n=v.from(n,n.offset,n.byteLength)),!v.isBuffer(e)||!v.isBuffer(n))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===n)return 0;let r=e.length,o=n.length;for(let i=0,s=Math.min(r,o);i<s;++i)if(e[i]!==n[i]){r=e[i],o=n[i];break}return r<o?-1:o<r?1:0};v.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};v.concat=function(e,n){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return v.alloc(0);let r;if(n===void 0)for(n=0,r=0;r<e.length;++r)n+=e[r].length;let o=v.allocUnsafe(n),i=0;for(r=0;r<e.length;++r){let s=e[r];if(s instanceof Uint8Array)i+s.length>o.length?(v.isBuffer(s)||(s=v.from(s.buffer,s.byteOffset,s.byteLength)),s.copy(o,i)):Uint8Array.prototype.set.call(o,s,i);else if(v.isBuffer(s))s.copy(o,i);else throw new TypeError('"list" argument must be an Array of Buffers');i+=s.length}return o};function Nr(t,e){if(v.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let n=t.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Wt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Dr(t).length;default:if(o)return r?-1:Wt(t).length;e=(""+e).toLowerCase(),o=!0}}v.byteLength=Nr;function Ni(t,e,n){let r=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,e>>>=0,n<=e))return"";for(t||(t="utf8");;)switch(t){case"hex":return Bi(this,e,n);case"utf8":case"utf-8":return Lr(this,e,n);case"ascii":return Fi(this,e,n);case"latin1":case"binary":return Di(this,e,n);case"base64":return Ri(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ui(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}v.prototype._isBuffer=!0;function De(t,e,n){let r=t[e];t[e]=t[n],t[n]=r}v.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let n=0;n<e;n+=2)De(this,n,n+1);return this};v.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let n=0;n<e;n+=4)De(this,n,n+3),De(this,n+1,n+2);return this};v.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let n=0;n<e;n+=8)De(this,n,n+7),De(this,n+1,n+6),De(this,n+2,n+5),De(this,n+3,n+4);return this};v.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?Lr(this,0,e):Ni.apply(this,arguments)};v.prototype.toLocaleString=v.prototype.toString;v.prototype.equals=function(e){if(!v.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:v.compare(this,e)===0};v.prototype.inspect=function(){let e="",n=Ii.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"};v.prototype[Symbol.for("nodejs.util.inspect.custom")]=v.prototype.inspect;v.prototype.compare=function(e,n,r,o,i){if(e instanceof Uint8Array&&(e=v.from(e,e.offset,e.byteLength)),!v.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(n===void 0&&(n=0),r===void 0&&(r=e?e.length:0),o===void 0&&(o=0),i===void 0&&(i=this.length),n<0||r>e.length||o<0||i>this.length)throw new RangeError("out of range index");if(o>=i&&n>=r)return 0;if(o>=i)return-1;if(n>=r)return 1;if(n>>>=0,r>>>=0,o>>>=0,i>>>=0,this===e)return 0;let s=i-o,c=r-n,a=Math.min(s,c),l=this.slice(o,i),d=e.slice(n,r);for(let p=0;p<a;++p)if(l[p]!==d[p]){s=l[p],c=d[p];break}return s<c?-1:c<s?1:0};function kr(t,e,n,r,o){if(t.length===0)return-1;if(typeof n=="string"?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Number.isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0)if(o)n=0;else return-1;if(typeof e=="string"&&(e=v.from(e,r)),v.isBuffer(e))return e.length===0?-1:Ir(t,e,n,r,o);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):Ir(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function Ir(t,e,n,r,o){let i=1,s=t.length,c=e.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(t.length<2||e.length<2)return-1;i=2,s/=2,c/=2,n/=2}function a(d,p){return i===1?d[p]:d.readUInt16BE(p*i)}let l;if(o){let d=-1;for(l=n;l<s;l++)if(a(t,l)===a(e,d===-1?0:l-d)){if(d===-1&&(d=l),l-d+1===c)return d*i}else d!==-1&&(l-=l-d),d=-1}else for(n+c>s&&(n=s-c),l=n;l>=0;l--){let d=!0;for(let p=0;p<c;p++)if(a(t,l+p)!==a(e,p)){d=!1;break}if(d)return l}return-1}v.prototype.includes=function(e,n,r){return this.indexOf(e,n,r)!==-1};v.prototype.indexOf=function(e,n,r){return kr(this,e,n,r,!0)};v.prototype.lastIndexOf=function(e,n,r){return kr(this,e,n,r,!1)};function ki(t,e,n,r){n=Number(n)||0;let o=t.length-n;r?(r=Number(r),r>o&&(r=o)):r=o;let i=e.length;r>i/2&&(r=i/2);let s;for(s=0;s<r;++s){let c=parseInt(e.substr(s*2,2),16);if(Number.isNaN(c))return s;t[n+s]=c}return s}function Li(t,e,n,r){return yt(Wt(e,t.length-n),t,n,r)}function Mi(t,e,n,r){return yt(Gi(e),t,n,r)}function Oi(t,e,n,r){return yt(Dr(e),t,n,r)}function Pi(t,e,n,r){return yt($i(e,t.length-n),t,n,r)}v.prototype.write=function(e,n,r,o){if(n===void 0)o="utf8",r=this.length,n=0;else if(r===void 0&&typeof n=="string")o=n,r=this.length,n=0;else if(isFinite(n))n=n>>>0,isFinite(r)?(r=r>>>0,o===void 0&&(o="utf8")):(o=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let i=this.length-n;if((r===void 0||r>i)&&(r=i),e.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let s=!1;for(;;)switch(o){case"hex":return ki(this,e,n,r);case"utf8":case"utf-8":return Li(this,e,n,r);case"ascii":case"latin1":case"binary":return Mi(this,e,n,r);case"base64":return Oi(this,e,n,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pi(this,e,n,r);default:if(s)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),s=!0}};v.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ri(t,e,n){return e===0&&n===t.length?Gt(t):Gt(t.slice(e,n))}function Lr(t,e,n){n=Math.min(t.length,n);let r=[],o=e;for(;o<n;){let i=t[o],s=null,c=i>239?4:i>223?3:i>191?2:1;if(o+c<=n){let a,l,d,p;switch(c){case 1:i<128&&(s=i);break;case 2:a=t[o+1],(a&192)===128&&(p=(i&31)<<6|a&63,p>127&&(s=p));break;case 3:a=t[o+1],l=t[o+2],(a&192)===128&&(l&192)===128&&(p=(i&15)<<12|(a&63)<<6|l&63,p>2047&&(p<55296||p>57343)&&(s=p));break;case 4:a=t[o+1],l=t[o+2],d=t[o+3],(a&192)===128&&(l&192)===128&&(d&192)===128&&(p=(i&15)<<18|(a&63)<<12|(l&63)<<6|d&63,p>65535&&p<1114112&&(s=p))}}s===null?(s=65533,c=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|s&1023),r.push(s),o+=c}return ji(r)}var xr=4096;function ji(t){let e=t.length;if(e<=xr)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=xr));return n}function Fi(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(t[o]&127);return r}function Di(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function Bi(t,e,n){let r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let o="";for(let i=e;i<n;++i)o+=Hi[t[i]];return o}function Ui(t,e,n){let r=t.slice(e,n),o="";for(let i=0;i<r.length-1;i+=2)o+=String.fromCharCode(r[i]+r[i+1]*256);return o}v.prototype.slice=function(e,n){let r=this.length;e=~~e,n=n===void 0?r:~~n,e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<e&&(n=e);let o=this.subarray(e,n);return Object.setPrototypeOf(o,v.prototype),o};function _e(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}v.prototype.readUintLE=v.prototype.readUIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=this[e],i=1,s=0;for(;++s<n&&(i*=256);)o+=this[e+s]*i;return o};v.prototype.readUintBE=v.prototype.readUIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=this[e+--n],i=1;for(;n>0&&(i*=256);)o+=this[e+--n]*i;return o};v.prototype.readUint8=v.prototype.readUInt8=function(e,n){return e=e>>>0,n||_e(e,1,this.length),this[e]};v.prototype.readUint16LE=v.prototype.readUInt16LE=function(e,n){return e=e>>>0,n||_e(e,2,this.length),this[e]|this[e+1]<<8};v.prototype.readUint16BE=v.prototype.readUInt16BE=function(e,n){return e=e>>>0,n||_e(e,2,this.length),this[e]<<8|this[e+1]};v.prototype.readUint32LE=v.prototype.readUInt32LE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};v.prototype.readUint32BE=v.prototype.readUInt32BE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};v.prototype.readBigUInt64LE=function(e){e=e>>>0,He(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&nt(e,this.length-8);let o=n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,i=this[++e]+this[++e]*2**8+this[++e]*2**16+r*2**24;return BigInt(o)+(BigInt(i)<<BigInt(32))};v.prototype.readBigUInt64BE=function(e){e=e>>>0,He(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&nt(e,this.length-8);let o=n*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],i=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r;return(BigInt(o)<<BigInt(32))+BigInt(i)};v.prototype.readIntLE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=this[e],i=1,s=0;for(;++s<n&&(i*=256);)o+=this[e+s]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*n)),o};v.prototype.readIntBE=function(e,n,r){e=e>>>0,n=n>>>0,r||_e(e,n,this.length);let o=n,i=1,s=this[e+--o];for(;o>0&&(i*=256);)s+=this[e+--o]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*n)),s};v.prototype.readInt8=function(e,n){return e=e>>>0,n||_e(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};v.prototype.readInt16LE=function(e,n){e=e>>>0,n||_e(e,2,this.length);let r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};v.prototype.readInt16BE=function(e,n){e=e>>>0,n||_e(e,2,this.length);let r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};v.prototype.readInt32LE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};v.prototype.readInt32BE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};v.prototype.readBigInt64LE=function(e){e=e>>>0,He(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&nt(e,this.length-8);let o=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(r<<24);return(BigInt(o)<<BigInt(32))+BigInt(n+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)};v.prototype.readBigInt64BE=function(e){e=e>>>0,He(e,"offset");let n=this[e],r=this[e+7];(n===void 0||r===void 0)&&nt(e,this.length-8);let o=(n<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(o)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r)};v.prototype.readFloatLE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),tt(this,e,!0,23,4)};v.prototype.readFloatBE=function(e,n){return e=e>>>0,n||_e(e,4,this.length),tt(this,e,!1,23,4)};v.prototype.readDoubleLE=function(e,n){return e=e>>>0,n||_e(e,8,this.length),tt(this,e,!0,52,8)};v.prototype.readDoubleBE=function(e,n){return e=e>>>0,n||_e(e,8,this.length),tt(this,e,!1,52,8)};function Ee(t,e,n,r,o,i){if(!v.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}v.prototype.writeUintLE=v.prototype.writeUIntLE=function(e,n,r,o){if(e=+e,n=n>>>0,r=r>>>0,!o){let c=Math.pow(2,8*r)-1;Ee(this,e,n,r,c,0)}let i=1,s=0;for(this[n]=e&255;++s<r&&(i*=256);)this[n+s]=e/i&255;return n+r};v.prototype.writeUintBE=v.prototype.writeUIntBE=function(e,n,r,o){if(e=+e,n=n>>>0,r=r>>>0,!o){let c=Math.pow(2,8*r)-1;Ee(this,e,n,r,c,0)}let i=r-1,s=1;for(this[n+i]=e&255;--i>=0&&(s*=256);)this[n+i]=e/s&255;return n+r};v.prototype.writeUint8=v.prototype.writeUInt8=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,1,255,0),this[n]=e&255,n+1};v.prototype.writeUint16LE=v.prototype.writeUInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,2,65535,0),this[n]=e&255,this[n+1]=e>>>8,n+2};v.prototype.writeUint16BE=v.prototype.writeUInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,2,65535,0),this[n]=e>>>8,this[n+1]=e&255,n+2};v.prototype.writeUint32LE=v.prototype.writeUInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,4,4294967295,0),this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e&255,n+4};v.prototype.writeUint32BE=v.prototype.writeUInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,4,4294967295,0),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};function Mr(t,e,n,r,o){Fr(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n++]=i,i=i>>8,t[n++]=i,i=i>>8,t[n++]=i,i=i>>8,t[n++]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=s,s=s>>8,t[n++]=s,s=s>>8,t[n++]=s,s=s>>8,t[n++]=s,n}function Or(t,e,n,r,o){Fr(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n+7]=i,i=i>>8,t[n+6]=i,i=i>>8,t[n+5]=i,i=i>>8,t[n+4]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=s,s=s>>8,t[n+2]=s,s=s>>8,t[n+1]=s,s=s>>8,t[n]=s,n+8}v.prototype.writeBigUInt64LE=function(e,n=0){return Mr(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))};v.prototype.writeBigUInt64BE=function(e,n=0){return Or(this,e,n,BigInt(0),BigInt("0xffffffffffffffff"))};v.prototype.writeIntLE=function(e,n,r,o){if(e=+e,n=n>>>0,!o){let a=Math.pow(2,8*r-1);Ee(this,e,n,r,a-1,-a)}let i=0,s=1,c=0;for(this[n]=e&255;++i<r&&(s*=256);)e<0&&c===0&&this[n+i-1]!==0&&(c=1),this[n+i]=(e/s>>0)-c&255;return n+r};v.prototype.writeIntBE=function(e,n,r,o){if(e=+e,n=n>>>0,!o){let a=Math.pow(2,8*r-1);Ee(this,e,n,r,a-1,-a)}let i=r-1,s=1,c=0;for(this[n+i]=e&255;--i>=0&&(s*=256);)e<0&&c===0&&this[n+i+1]!==0&&(c=1),this[n+i]=(e/s>>0)-c&255;return n+r};v.prototype.writeInt8=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,1,127,-128),e<0&&(e=255+e+1),this[n]=e&255,n+1};v.prototype.writeInt16LE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,2,32767,-32768),this[n]=e&255,this[n+1]=e>>>8,n+2};v.prototype.writeInt16BE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,2,32767,-32768),this[n]=e>>>8,this[n+1]=e&255,n+2};v.prototype.writeInt32LE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,4,2147483647,-2147483648),this[n]=e&255,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24,n+4};v.prototype.writeInt32BE=function(e,n,r){return e=+e,n=n>>>0,r||Ee(this,e,n,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e&255,n+4};v.prototype.writeBigInt64LE=function(e,n=0){return Mr(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))};v.prototype.writeBigInt64BE=function(e,n=0){return Or(this,e,n,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))};function Pr(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Rr(t,e,n,r,o){return e=+e,n=n>>>0,o||Pr(t,e,n,4,34028234663852886e22,-34028234663852886e22),$t(t,e,n,r,23,4),n+4}v.prototype.writeFloatLE=function(e,n,r){return Rr(this,e,n,!0,r)};v.prototype.writeFloatBE=function(e,n,r){return Rr(this,e,n,!1,r)};function jr(t,e,n,r,o){return e=+e,n=n>>>0,o||Pr(t,e,n,8,17976931348623157e292,-17976931348623157e292),$t(t,e,n,r,52,8),n+8}v.prototype.writeDoubleLE=function(e,n,r){return jr(this,e,n,!0,r)};v.prototype.writeDoubleBE=function(e,n,r){return jr(this,e,n,!1,r)};v.prototype.copy=function(e,n,r,o){if(!v.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),!o&&o!==0&&(o=this.length),n>=e.length&&(n=e.length),n||(n=0),o>0&&o<r&&(o=r),o===r||e.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-n<o-r&&(o=e.length-n+r);let i=o-r;return this===e?this.copyWithin(n,r,o):Uint8Array.prototype.set.call(e,this.subarray(r,o),n),i};v.prototype.fill=function(e,n,r,o){if(typeof e=="string"){if(typeof n=="string"?(o=n,n=0,r=this.length):typeof r=="string"&&(o=r,r=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!v.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){let s=e.charCodeAt(0);(o==="utf8"&&s<128||o==="latin1")&&(e=s)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,e||(e=0);let i;if(typeof e=="number")for(i=n;i<r;++i)this[i]=e;else{let s=v.isBuffer(e)?e:v.from(e,o),c=s.length;if(c===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-n;++i)this[i+n]=s[i%c]}return this};var $e={};function Yt(t,e,n){$e[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(o){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:o,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}Yt("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Yt("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError);Yt("ERR_OUT_OF_RANGE",function(t,e,n){let r=`The value of "${t}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>2**32?o=Cr(String(n)):typeof n=="bigint"&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=Cr(o)),o+="n"),r+=` It must be ${e}. Received ${o}`,r},RangeError);function Cr(t){let e="",n=t.length,r=t[0]==="-"?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function zi(t,e,n){He(e,"offset"),(t[e]===void 0||t[e+n]===void 0)&&nt(e,t.length-(n+1))}function Fr(t,e,n,r,o,i){if(t>n||t<e){let s=typeof e=="bigint"?"n":"",c;throw i>3?e===0||e===BigInt(0)?c=`>= 0${s} and < 2${s} ** ${(i+1)*8}${s}`:c=`>= -(2${s} ** ${(i+1)*8-1}${s}) and < 2 ** ${(i+1)*8-1}${s}`:c=`>= ${e}${s} and <= ${n}${s}`,new $e.ERR_OUT_OF_RANGE("value",c,t)}zi(r,o,i)}function He(t,e){if(typeof t!="number")throw new $e.ERR_INVALID_ARG_TYPE(e,"number",t)}function nt(t,e,n){throw Math.floor(t)!==t?(He(t,n),new $e.ERR_OUT_OF_RANGE(n||"offset","an integer",t)):e<0?new $e.ERR_BUFFER_OUT_OF_BOUNDS:new $e.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}var Vi=/[^+/0-9A-Za-z-_]/g;function Ji(t){if(t=t.split("=")[0],t=t.trim().replace(Vi,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function Wt(t,e){e=e||1/0;let n,r=t.length,o=null,i=[];for(let s=0;s<r;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}else if(s+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=(o-55296<<10|n-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,n&63|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return i}function Gi(t){let e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n)&255);return e}function $i(t,e){let n,r,o,i=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,o=n%256,i.push(o),i.push(r);return i}function Dr(t){return wr(Ji(t))}function yt(t,e,n,r){let o;for(o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}var Hi=function(){let t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){let r=n*16;for(let o=0;o<16;++o)e[r+o]=t[n]+t[o]}return e}();var Ft={};gi(Ft,{ArtMethod:()=>Nt,ArtStackVisitor:()=>Ln,DVM_JNI_ENV_OFFSET_SELF:()=>ao,HandleVector:()=>lt,VariableSizedHandleScope:()=>dt,backtrace:()=>Hn,deoptimizeBootImage:()=>Qn,deoptimizeEverything:()=>qn,deoptimizeMethod:()=>Wn,ensureClassInitialized:()=>mc,getAndroidApiLevel:()=>fe,getAndroidVersion:()=>ut,getApi:()=>Y,getArtApexVersion:()=>Bn,getArtClassSpec:()=>zn,getArtFieldSpec:()=>Rt,getArtMethodSpec:()=>Se,getArtThreadFromEnv:()=>jt,getArtThreadSpec:()=>We,makeArtClassLoaderVisitor:()=>$n,makeArtClassVisitor:()=>Gn,makeMethodMangler:()=>cl,makeObjectVisitorPredicate:()=>Xn,revertGlobalPatches:()=>Zn,translateMethod:()=>ll,withAllArtThreadsSuspended:()=>Jn,withRunnableArtThread:()=>Ce});var{pageSize:Xt,pointerSize:Zi}=Process,en=class{constructor(e){this.sliceSize=e,this.slicesPerPage=Xt/e,this.pages=[],this.free=[]}allocateSlice(e,n){let r=e.near===void 0,o=n===1;if(r&&o){let i=this.free.pop();if(i!==void 0)return i}else if(n<Xt){let{free:i}=this,s=i.length,c=o?null:ptr(n-1);for(let a=0;a!==s;a++){let l=i[a],d=r||this._isSliceNear(l,e),p=o||l.and(c).isNull();if(d&&p)return i.splice(a,1)[0]}}return this._allocatePage(e)}_allocatePage(e){let n=Memory.alloc(Xt,e),{sliceSize:r,slicesPerPage:o}=this;for(let i=1;i!==o;i++){let s=n.add(i*r);this.free.push(s)}return this.pages.push(n),n}_isSliceNear(e,n){let r=e.add(this.sliceSize),{near:o,maxDistance:i}=n,s=Br(o.sub(e)),c=Br(o.sub(r));return s.compare(i)<=0&&c.compare(i)<=0}freeSlice(e){this.free.push(e)}};function Br(t){let e=Zi===4?31:63,n=ptr(1).shl(e).not();return t.and(n)}function tn(t){return new en(t)}function ye(t,e){if(e!==0)throw new Error(t+" failed: "+e)}var bt={v1_0:805371904,v1_2:805372416},Et={canTagObjects:1},{pointerSize:Ki}=Process,Wi={exceptions:"propagate"};function Oe(t,e){this.handle=t,this.vm=e,this.vtable=t.readPointer()}Oe.prototype.deallocate=rt(47,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});Oe.prototype.getLoadedClasses=rt(78,"int32",["pointer","pointer","pointer"],function(t,e,n){let r=t(this.handle,e,n);ye("EnvJvmti::getLoadedClasses",r)});Oe.prototype.iterateOverInstancesOfClass=rt(112,"int32",["pointer","pointer","int","pointer","pointer"],function(t,e,n,r,o){let i=t(this.handle,e,n,r,o);ye("EnvJvmti::iterateOverInstancesOfClass",i)});Oe.prototype.getObjectsWithTags=rt(114,"int32",["pointer","int","pointer","pointer","pointer","pointer"],function(t,e,n,r,o,i){let s=t(this.handle,e,n,r,o,i);ye("EnvJvmti::getObjectsWithTags",s)});Oe.prototype.addCapabilities=rt(142,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});function rt(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction(this.vtable.add((t-1)*Ki).readPointer(),e,n,Wi));let i=[o];return i=i.concat.apply(i,arguments),r.apply(this,i)}}function Pe(t,e,{limit:n}){let r=t,o=null;for(let i=0;i!==n;i++){let s=Instruction.parse(r),c=e(s,o);if(c!==null)return c;r=s.next,o=s}return null}function ge(t){let e=null,n=!1;return function(...r){return n||(e=t(...r),n=!0),e}}function I(t,e){this.handle=t,this.vm=e}var vt=Process.pointerSize,je=2,qi=28,Qi=34,Yi=37,Xi=40,es=43,ts=46,ns=49,rs=52,os=55,is=58,ss=61,as=64,cs=67,ls=70,ds=73,us=76,ps=79,fs=82,hs=85,ms=88,_s=91,gs=114,ys=117,bs=120,Es=123,vs=126,Ss=129,ws=132,Is=135,xs=138,Cs=141,As=95,Ts=96,Ns=97,ks=98,Ls=99,Ms=100,Os=101,Ps=102,Rs=103,js=104,Fs=105,Ds=106,Bs=107,Us=108,zs=109,Vs=110,Js=111,Gs=112,$s=145,Hs=146,Zs=147,Ks=148,Ws=149,qs=150,Qs=151,Ys=152,Xs=153,ea=154,ta=155,na=156,ra=157,oa=158,ia=159,sa=160,aa=161,ca=162,la={pointer:Qi,uint8:Yi,int8:Xi,uint16:es,int16:ts,int32:ns,int64:rs,float:os,double:is,void:ss},da={pointer:as,uint8:cs,int8:ls,uint16:ds,int16:us,int32:ps,int64:fs,float:hs,double:ms,void:_s},ua={pointer:gs,uint8:ys,int8:bs,uint16:Es,int16:vs,int32:Ss,int64:ws,float:Is,double:xs,void:Cs},pa={pointer:As,uint8:Ts,int8:Ns,uint16:ks,int16:Ls,int32:Ms,int64:Os,float:Ps,double:Rs},fa={pointer:js,uint8:Fs,int8:Ds,uint16:Bs,int16:Us,int32:zs,int64:Vs,float:Js,double:Gs},ha={pointer:$s,uint8:Hs,int8:Zs,uint16:Ks,int16:Ws,int32:qs,int64:Qs,float:Ys,double:Xs},ma={pointer:ea,uint8:ta,int8:na,uint16:ra,int16:oa,int32:ia,int64:sa,float:aa,double:ca},zr={exceptions:"propagate"},nn=null,hn=[];I.dispose=function(t){hn.forEach(t.deleteGlobalRef,t),hn=[]};function Be(t){return hn.push(t),t}function St(t){return nn===null&&(nn=t.handle.readPointer()),nn}function P(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction(St(this).add(t*vt).readPointer(),e,n,zr));let i=[o];return i=i.concat.apply(i,arguments),r.apply(this,i)}}I.prototype.getVersion=P(4,"int32",["pointer"],function(t){return t(this.handle)});I.prototype.findClass=P(6,"pointer",["pointer","pointer"],function(t,e){let n=t(this.handle,Memory.allocUtf8String(e));return this.throwIfExceptionPending(),n});I.prototype.throwIfExceptionPending=function(){let t=this.exceptionOccurred();if(t.isNull())return;this.exceptionClear();let e=this.newGlobalRef(t);this.deleteLocalRef(t);let n=this.vaMethod("pointer",[])(this.handle,e,this.javaLangObject().toString),r=this.stringFromJni(n);this.deleteLocalRef(n);let o=new Error(r);throw o.$h=e,Script.bindWeak(o,_a(this.vm,e)),o};function _a(t,e){return function(){t.perform(n=>{n.deleteGlobalRef(e)})}}I.prototype.fromReflectedMethod=P(7,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.fromReflectedField=P(8,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.toReflectedMethod=P(9,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});I.prototype.getSuperclass=P(10,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.isAssignableFrom=P(11,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});I.prototype.toReflectedField=P(12,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});I.prototype.throw=P(13,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.exceptionOccurred=P(15,"pointer",["pointer"],function(t){return t(this.handle)});I.prototype.exceptionDescribe=P(16,"void",["pointer"],function(t){t(this.handle)});I.prototype.exceptionClear=P(17,"void",["pointer"],function(t){t(this.handle)});I.prototype.pushLocalFrame=P(19,"int32",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.popLocalFrame=P(20,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.newGlobalRef=P(21,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.deleteGlobalRef=P(22,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});I.prototype.deleteLocalRef=P(23,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});I.prototype.isSameObject=P(24,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});I.prototype.newLocalRef=P(25,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.allocObject=P(27,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.getObjectClass=P(31,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.isInstanceOf=P(32,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});I.prototype.getMethodId=P(33,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});I.prototype.getFieldId=P(94,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});I.prototype.getIntField=P(100,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});I.prototype.getStaticMethodId=P(113,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});I.prototype.getStaticFieldId=P(144,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});I.prototype.getStaticIntField=P(150,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});I.prototype.getStringLength=P(164,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.getStringChars=P(165,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.releaseStringChars=P(166,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});I.prototype.newStringUtf=P(167,"pointer",["pointer","pointer"],function(t,e){let n=Memory.allocUtf8String(e);return t(this.handle,n)});I.prototype.getStringUtfChars=P(169,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.releaseStringUtfChars=P(170,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});I.prototype.getArrayLength=P(171,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.newObjectArray=P(172,"pointer",["pointer","int32","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,n,r)});I.prototype.getObjectArrayElement=P(173,"pointer",["pointer","pointer","int32"],function(t,e,n){return t(this.handle,e,n)});I.prototype.setObjectArrayElement=P(174,"void",["pointer","pointer","int32","pointer"],function(t,e,n,r){t(this.handle,e,n,r)});I.prototype.newBooleanArray=P(175,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newByteArray=P(176,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newCharArray=P(177,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newShortArray=P(178,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newIntArray=P(179,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newLongArray=P(180,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newFloatArray=P(181,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.newDoubleArray=P(182,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});I.prototype.getBooleanArrayElements=P(183,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getByteArrayElements=P(184,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getCharArrayElements=P(185,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getShortArrayElements=P(186,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getIntArrayElements=P(187,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getLongArrayElements=P(188,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getFloatArrayElements=P(189,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.getDoubleArrayElements=P(190,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});I.prototype.releaseBooleanArrayElements=P(191,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,je)});I.prototype.releaseByteArrayElements=P(192,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,je)});I.prototype.releaseCharArrayElements=P(193,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,je)});I.prototype.releaseShortArrayElements=P(194,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,je)});I.prototype.releaseIntArrayElements=P(195,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,je)});I.prototype.releaseLongArrayElements=P(196,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,je)});I.prototype.releaseFloatArrayElements=P(197,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,je)});I.prototype.releaseDoubleArrayElements=P(198,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,je)});I.prototype.getByteArrayRegion=P(200,"void",["pointer","pointer","int","int","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setBooleanArrayRegion=P(207,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setByteArrayRegion=P(208,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setCharArrayRegion=P(209,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setShortArrayRegion=P(210,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setIntArrayRegion=P(211,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setLongArrayRegion=P(212,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setFloatArrayRegion=P(213,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.setDoubleArrayRegion=P(214,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});I.prototype.registerNatives=P(215,"int32",["pointer","pointer","pointer","int32"],function(t,e,n,r){return t(this.handle,e,n,r)});I.prototype.monitorEnter=P(217,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.monitorExit=P(218,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.getDirectBufferAddress=P(230,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});I.prototype.getObjectRefType=P(232,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});var Ur=new Map;function wt(t,e,n,r){return _n(this,"p",ya,t,e,n,r)}function mn(t,e,n,r){return _n(this,"v",ba,t,e,n,r)}function ga(t,e,n,r){return _n(this,"n",Ea,t,e,n,r)}function _n(t,e,n,r,o,i,s){if(s!==void 0)return n(t,r,o,i,s);let c=[r,e,o].concat(i).join("|"),a=Ur.get(c);return a===void 0&&(a=n(t,r,o,i,zr),Ur.set(c,a)),a}function ya(t,e,n,r,o){return new NativeFunction(St(t).add(e*vt).readPointer(),n,["pointer","pointer","pointer"].concat(r),o)}function ba(t,e,n,r,o){return new NativeFunction(St(t).add(e*vt).readPointer(),n,["pointer","pointer","pointer","..."].concat(r),o)}function Ea(t,e,n,r,o){return new NativeFunction(St(t).add(e*vt).readPointer(),n,["pointer","pointer","pointer","pointer","..."].concat(r),o)}I.prototype.constructor=function(t,e){return mn.call(this,qi,"pointer",t,e)};I.prototype.vaMethod=function(t,e,n){let r=la[t];if(r===void 0)throw new Error("Unsupported type: "+t);return mn.call(this,r,t,e,n)};I.prototype.nonvirtualVaMethod=function(t,e,n){let r=da[t];if(r===void 0)throw new Error("Unsupported type: "+t);return ga.call(this,r,t,e,n)};I.prototype.staticVaMethod=function(t,e,n){let r=ua[t];if(r===void 0)throw new Error("Unsupported type: "+t);return mn.call(this,r,t,e,n)};I.prototype.getField=function(t){let e=pa[t];if(e===void 0)throw new Error("Unsupported type: "+t);return wt.call(this,e,t,[])};I.prototype.getStaticField=function(t){let e=ha[t];if(e===void 0)throw new Error("Unsupported type: "+t);return wt.call(this,e,t,[])};I.prototype.setField=function(t){let e=fa[t];if(e===void 0)throw new Error("Unsupported type: "+t);return wt.call(this,e,"void",[t])};I.prototype.setStaticField=function(t){let e=ma[t];if(e===void 0)throw new Error("Unsupported type: "+t);return wt.call(this,e,"void",[t])};var rn=null;I.prototype.javaLangClass=function(){if(rn===null){let t=this.findClass("java/lang/Class");try{let e=this.getMethodId.bind(this,t);rn={handle:Be(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getSimpleName:e("getSimpleName","()Ljava/lang/String;"),getGenericSuperclass:e("getGenericSuperclass","()Ljava/lang/reflect/Type;"),getDeclaredConstructors:e("getDeclaredConstructors","()[Ljava/lang/reflect/Constructor;"),getDeclaredMethods:e("getDeclaredMethods","()[Ljava/lang/reflect/Method;"),getDeclaredFields:e("getDeclaredFields","()[Ljava/lang/reflect/Field;"),isArray:e("isArray","()Z"),isPrimitive:e("isPrimitive","()Z"),isInterface:e("isInterface","()Z"),getComponentType:e("getComponentType","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return rn};var on=null;I.prototype.javaLangObject=function(){if(on===null){let t=this.findClass("java/lang/Object");try{let e=this.getMethodId.bind(this,t);on={handle:Be(this.newGlobalRef(t)),toString:e("toString","()Ljava/lang/String;"),getClass:e("getClass","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return on};var sn=null;I.prototype.javaLangReflectConstructor=function(){if(sn===null){let t=this.findClass("java/lang/reflect/Constructor");try{sn={getGenericParameterTypes:this.getMethodId(t,"getGenericParameterTypes","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return sn};var an=null;I.prototype.javaLangReflectMethod=function(){if(an===null){let t=this.findClass("java/lang/reflect/Method");try{let e=this.getMethodId.bind(this,t);an={getName:e("getName","()Ljava/lang/String;"),getGenericParameterTypes:e("getGenericParameterTypes","()[Ljava/lang/reflect/Type;"),getParameterTypes:e("getParameterTypes","()[Ljava/lang/Class;"),getGenericReturnType:e("getGenericReturnType","()Ljava/lang/reflect/Type;"),getGenericExceptionTypes:e("getGenericExceptionTypes","()[Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),isVarArgs:e("isVarArgs","()Z")}}finally{this.deleteLocalRef(t)}}return an};var cn=null;I.prototype.javaLangReflectField=function(){if(cn===null){let t=this.findClass("java/lang/reflect/Field");try{let e=this.getMethodId.bind(this,t);cn={getName:e("getName","()Ljava/lang/String;"),getType:e("getType","()Ljava/lang/Class;"),getGenericType:e("getGenericType","()Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),toString:e("toString","()Ljava/lang/String;")}}finally{this.deleteLocalRef(t)}}return cn};var ln=null;I.prototype.javaLangReflectTypeVariable=function(){if(ln===null){let t=this.findClass("java/lang/reflect/TypeVariable");try{let e=this.getMethodId.bind(this,t);ln={handle:Be(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getBounds:e("getBounds","()[Ljava/lang/reflect/Type;"),getGenericDeclaration:e("getGenericDeclaration","()Ljava/lang/reflect/GenericDeclaration;")}}finally{this.deleteLocalRef(t)}}return ln};var dn=null;I.prototype.javaLangReflectWildcardType=function(){if(dn===null){let t=this.findClass("java/lang/reflect/WildcardType");try{let e=this.getMethodId.bind(this,t);dn={handle:Be(this.newGlobalRef(t)),getLowerBounds:e("getLowerBounds","()[Ljava/lang/reflect/Type;"),getUpperBounds:e("getUpperBounds","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return dn};var un=null;I.prototype.javaLangReflectGenericArrayType=function(){if(un===null){let t=this.findClass("java/lang/reflect/GenericArrayType");try{un={handle:Be(this.newGlobalRef(t)),getGenericComponentType:this.getMethodId(t,"getGenericComponentType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return un};var pn=null;I.prototype.javaLangReflectParameterizedType=function(){if(pn===null){let t=this.findClass("java/lang/reflect/ParameterizedType");try{let e=this.getMethodId.bind(this,t);pn={handle:Be(this.newGlobalRef(t)),getActualTypeArguments:e("getActualTypeArguments","()[Ljava/lang/reflect/Type;"),getRawType:e("getRawType","()Ljava/lang/reflect/Type;"),getOwnerType:e("getOwnerType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return pn};var fn=null;I.prototype.javaLangString=function(){if(fn===null){let t=this.findClass("java/lang/String");try{fn={handle:Be(this.newGlobalRef(t))}}finally{this.deleteLocalRef(t)}}return fn};I.prototype.getClassName=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangClass().getName);try{return this.stringFromJni(e)}finally{this.deleteLocalRef(e)}};I.prototype.getObjectClassName=function(t){let e=this.getObjectClass(t);try{return this.getClassName(e)}finally{this.deleteLocalRef(e)}};I.prototype.getActualTypeArgument=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangReflectParameterizedType().getActualTypeArguments);if(this.throwIfExceptionPending(),!e.isNull())try{return this.getTypeNameFromFirstTypeElement(e)}finally{this.deleteLocalRef(e)}};I.prototype.getTypeNameFromFirstTypeElement=function(t){if(this.getArrayLength(t)>0){let n=this.getObjectArrayElement(t,0);try{return this.getTypeName(n)}finally{this.deleteLocalRef(n)}}else return"java.lang.Object"};I.prototype.getTypeName=function(t,e){let n=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle))return this.getArrayTypeName(t);if(this.isInstanceOf(t,this.javaLangReflectParameterizedType().handle)){let r=n(this.handle,t,this.javaLangReflectParameterizedType().getRawType);this.throwIfExceptionPending();let o;try{o=this.getTypeName(r)}finally{this.deleteLocalRef(r)}return e&&(o+="<"+this.getActualTypeArgument(t)+">"),o}else return this.isInstanceOf(t,this.javaLangReflectTypeVariable().handle)||this.isInstanceOf(t,this.javaLangReflectWildcardType().handle),"java.lang.Object"};I.prototype.getArrayTypeName=function(t){let e=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle)){let n=e(this.handle,t,this.javaLangReflectGenericArrayType().getGenericComponentType);this.throwIfExceptionPending();try{return"[L"+this.getTypeName(n)+";"}finally{this.deleteLocalRef(n)}}else return"[Ljava.lang.Object;"};I.prototype.stringFromJni=function(t){let e=this.getStringChars(t);if(e.isNull())throw new Error("Unable to access string");try{let n=this.getStringLength(t);return e.readUtf16String(n)}finally{this.releaseStringChars(t,e)}};var Vr=65542,Ze=Process.pointerSize,gn=Process.getCurrentThreadId(),Ue=new Map,ot=new Map;function ke(t){let e=t.vm,n=null,r=null,o=null;function i(){let c=e.readPointer(),a={exceptions:"propagate"};n=new NativeFunction(c.add(4*Ze).readPointer(),"int32",["pointer","pointer","pointer"],a),r=new NativeFunction(c.add(5*Ze).readPointer(),"int32",["pointer"],a),o=new NativeFunction(c.add(6*Ze).readPointer(),"int32",["pointer","pointer","int32"],a)}this.handle=e,this.perform=function(c){let a=Process.getCurrentThreadId(),l=s(a);if(l!==null)return c(l);let d=this._tryGetEnv(),p=d!==null;p||(d=this.attachCurrentThread(),Ue.set(a,!0)),this.link(a,d);try{return c(d)}finally{let f=a===gn;if(f||this.unlink(a),!p&&!f){let u=Ue.get(a);Ue.delete(a),u&&this.detachCurrentThread()}}},this.attachCurrentThread=function(){let c=Memory.alloc(Ze);return ye("VM::AttachCurrentThread",n(e,c,NULL)),new I(c.readPointer(),this)},this.detachCurrentThread=function(){ye("VM::DetachCurrentThread",r(e))},this.preventDetachDueToClassLoader=function(){let c=Process.getCurrentThreadId();Ue.has(c)&&Ue.set(c,!1)},this.getEnv=function(){let c=s(Process.getCurrentThreadId());if(c!==null)return c;let a=Memory.alloc(Ze),l=o(e,a,Vr);if(l===-2)throw new Error("Current thread is not attached to the Java VM; please move this code inside a Java.perform() callback");return ye("VM::GetEnv",l),new I(a.readPointer(),this)},this.tryGetEnv=function(){let c=s(Process.getCurrentThreadId());return c!==null?c:this._tryGetEnv()},this._tryGetEnv=function(){let c=this.tryGetEnvHandle(Vr);return c===null?null:new I(c,this)},this.tryGetEnvHandle=function(c){let a=Memory.alloc(Ze);return o(e,a,c)!==0?null:a.readPointer()},this.makeHandleDestructor=function(c){return()=>{this.perform(a=>{a.deleteGlobalRef(c)})}},this.link=function(c,a){let l=ot.get(c);l===void 0?ot.set(c,[a,1]):l[1]++},this.unlink=function(c){let a=ot.get(c);a[1]===1?ot.delete(c):a[1]--};function s(c){let a=ot.get(c);return a===void 0?null:a[0]}i.call(this)}ke.dispose=function(t){Ue.get(gn)===!0&&(Ue.delete(gn),t.detachCurrentThread())};var va=4,N=Process.pointerSize,{readU32:Sa,readPointer:wa,writeU32:Ia,writePointer:xa}=NativePointer.prototype,Ca=1,Aa=8,Ta=16,At=256,Na=524288,ka=2097152,so=1073741824,La=524288,Ma=134217728,Jr=1048576,Oa=2097152,Pa=268435456,Ra=268435456,ja=0,An=3,Tn=5,Dn=ptr(1).not(),Fa=2147467263,Da=4294963200,Pt=17*N,Ba=18*N,ao=12,Ua=112,za=116,Va=0,bn=56,Gr=4,Ja=8,Ga=10,$a=12,Ha=14,Za=28,Ka=36,Wa=0,qa=1,Qa=2,Ya=3,Xa=4,ec=5,tc=6,nc=7,$r=2147483648,rc=28,ct=3*N,oc=3*N,ic=1,sc=1,co=ge(gc),ac=ge(kc),Se=ge(Mc),We=ge(Oc),cc=ge(Pc),lc=ge(Jc),ut=ge(Dc),lo=ge(Bc),fe=ge(Uc),Bn=ge(zc),dc=ge(Zc),uc=Process.arch==="ia32"?Ol:Ml,ae={exceptions:"propagate"},it={},En=null,vn=null,uo=null,me=null,Un=[],Tt=new Map,po=[],Sn=null,Hr=0,Zr=!1,Kr=!1,st=null,pc=[],wn=null,It=null;function Y(){return En===null&&(En=fc()),En}function fc(){let t=Process.enumerateModules().filter(u=>/^lib(art|dvm).so$/.test(u.name)).filter(u=>!/\/system\/fake-libs/.test(u.path));if(t.length===0)return null;let e=t[0],n=e.name.indexOf("art")!==-1?"art":"dalvik",r=n==="art",o={module:e,find(u){let{module:g}=this,m=g.findExportByName(u);return m===null&&(m=g.findSymbolByName(u)),m},flavor:n,addLocalReference:null};o.isApiLevel34OrApexEquivalent=r&&(o.find("_ZN3art7AppInfo29GetPrimaryApkReferenceProfileEv")!==null||o.find("_ZN3art6Thread15RunFlipFunctionEPS0_")!==null);let i=r?{functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],artInterpreterToCompiledCodeBridge:function(u){this.artInterpreterToCompiledCodeBridge=u},_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art17ReaderWriterMutex13ExclusiveLockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveLock","void",["pointer","pointer"]],_ZN3art17ReaderWriterMutex15ExclusiveUnlockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveUnlock","void",["pointer","pointer"]],_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],ae)},_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],ae)},_ZN3art9JavaVMExt12DecodeGlobalEPv:function(u){let g;fe()>=26?g=uc(u,["pointer","pointer"]):g=new NativeFunction(u,"pointer",["pointer","pointer"],ae),this["art::JavaVMExt::DecodeGlobal"]=function(m,E,w){return g(m,w)}},_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv:["art::JavaVMExt::DecodeGlobal","pointer",["pointer","pointer","pointer"]],_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZNK3art6Thread13DecodeJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZN3art10ThreadList10SuspendAllEPKcb:["art::ThreadList::SuspendAll","void",["pointer","pointer","bool"]],_ZN3art10ThreadList10SuspendAllEv:function(u){let g=new NativeFunction(u,"void",["pointer"],ae);this["art::ThreadList::SuspendAll"]=function(m,E,w){return g(m)}},_ZN3art10ThreadList9ResumeAllEv:["art::ThreadList::ResumeAll","void",["pointer"]],_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE:["art::ClassLinker::VisitClasses","void",["pointer","pointer"]],_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_:function(u){let g=new NativeFunction(u,"void",["pointer","pointer","pointer"],ae);this["art::ClassLinker::VisitClasses"]=function(m,E){g(m,E,NULL)}},_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE:["art::ClassLinker::VisitClassLoaders","void",["pointer","pointer"]],_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_:["art::gc::Heap::VisitObjects","void",["pointer","pointer","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:["art::gc::Heap::GetInstances","void",["pointer","pointer","pointer","int","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:function(u){let g=new NativeFunction(u,"void",["pointer","pointer","pointer","bool","int","pointer"],ae);this["art::gc::Heap::GetInstances"]=function(m,E,w,x,L){g(m,E,w,0,x,L)}},_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","uint","bool"]],_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","size_t","bool"]],_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb:["art::StackVisitor::WalkStack","void",["pointer","bool"]],_ZNK3art12StackVisitor9GetMethodEv:["art::StackVisitor::GetMethod","pointer",["pointer"]],_ZNK3art12StackVisitor16DescribeLocationEv:function(u){this["art::StackVisitor::DescribeLocation"]=Ct(u,["pointer"])},_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv:function(u){this["art::StackVisitor::GetCurrentQuickFrameInfo"]=Hc(u)},_ZN3art7Context6CreateEv:["art::Context::Create","pointer",[]],_ZN3art6Thread18GetLongJumpContextEv:["art::Thread::GetLongJumpContext","pointer",["pointer"]],_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE:function(u){this["art::mirror::Class::GetDescriptor"]=u},_ZN3art6mirror5Class11GetLocationEv:function(u){this["art::mirror::Class::GetLocation"]=Ct(u,["pointer"])},_ZN3art9ArtMethod12PrettyMethodEb:function(u){this["art::ArtMethod::PrettyMethod"]=Ct(u,["pointer","bool"])},_ZN3art12PrettyMethodEPNS_9ArtMethodEb:function(u){this["art::ArtMethod::PrettyMethodNullSafe"]=Ct(u,["pointer","bool"])},_ZN3art6Thread14CurrentFromGdbEv:["art::Thread::CurrentFromGdb","pointer",[]],_ZN3art6mirror6Object5CloneEPNS_6ThreadE:function(u){this["art::mirror::Object::Clone"]=new NativeFunction(u,"pointer",["pointer","pointer"],ae)},_ZN3art6mirror6Object5CloneEPNS_6ThreadEm:function(u){let g=new NativeFunction(u,"pointer",["pointer","pointer","pointer"],ae);this["art::mirror::Object::Clone"]=function(m,E){let w=NULL;return g(m,E,w)}},_ZN3art6mirror6Object5CloneEPNS_6ThreadEj:function(u){let g=new NativeFunction(u,"pointer",["pointer","pointer","uint"],ae);this["art::mirror::Object::Clone"]=function(m,E){return g(m,E,0)}},_ZN3art3Dbg14SetJdwpAllowedEb:["art::Dbg::SetJdwpAllowed","void",["bool"]],_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE:["art::Dbg::ConfigureJdwp","void",["pointer"]],_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv:["art::InternalDebuggerControlCallback::StartDebugger","void",["pointer"]],_ZN3art3Dbg9StartJdwpEv:["art::Dbg::StartJdwp","void",[]],_ZN3art3Dbg8GoActiveEv:["art::Dbg::GoActive","void",[]],_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE:["art::Dbg::RequestDeoptimization","void",["pointer"]],_ZN3art3Dbg20ManageDeoptimizationEv:["art::Dbg::ManageDeoptimization","void",[]],_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv:["art::Instrumentation::EnableDeoptimization","void",["pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc:["art::Instrumentation::DeoptimizeEverything","void",["pointer","pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv:function(u){let g=new NativeFunction(u,"void",["pointer"],ae);this["art::Instrumentation::DeoptimizeEverything"]=function(m,E){g(m)}},_ZN3art7Runtime19DeoptimizeBootImageEv:["art::Runtime::DeoptimizeBootImage","void",["pointer"]],_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE:["art::Instrumentation::Deoptimize","void",["pointer","pointer"]],_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID:["art::jni::JniIdManager::DecodeMethodId","pointer",["pointer","pointer"]],_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID:["art::jni::JniIdManager::DecodeFieldId","pointer",["pointer","pointer"]],_ZN3art11interpreter18GetNterpEntryPointEv:["art::interpreter::GetNterpEntryPoint","pointer",[]],_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi:["art::Monitor::TranslateLocation","void",["pointer","uint32","pointer","pointer"]]},variables:{_ZN3art3Dbg9gRegistryE:function(u){this.isJdwpStarted=()=>!u.readPointer().isNull()},_ZN3art3Dbg15gDebuggerActiveE:function(u){this.isDebuggerActive=()=>!!u.readU8()}},optionals:new Set(["artInterpreterToCompiledCodeBridge","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE","_ZN3art9JavaVMExt12DecodeGlobalEPv","_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv","_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject","_ZNK3art6Thread13DecodeJObjectEP8_jobject","_ZN3art10ThreadList10SuspendAllEPKcb","_ZN3art10ThreadList10SuspendAllEv","_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE","_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_","_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE","_ZN3art6mirror6Object5CloneEPNS_6ThreadE","_ZN3art6mirror6Object5CloneEPNS_6ThreadEm","_ZN3art6mirror6Object5CloneEPNS_6ThreadEj","_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE","_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb","_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb","_ZNK3art12StackVisitor9GetMethodEv","_ZNK3art12StackVisitor16DescribeLocationEv","_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv","_ZN3art7Context6CreateEv","_ZN3art6Thread18GetLongJumpContextEv","_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE","_ZN3art6mirror5Class11GetLocationEv","_ZN3art9ArtMethod12PrettyMethodEb","_ZN3art12PrettyMethodEPNS_9ArtMethodEb","_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE","_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv","_ZN3art3Dbg15gDebuggerActiveE","_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv","_ZN3art7Runtime19DeoptimizeBootImageEv","_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE","_ZN3art3Dbg9StartJdwpEv","_ZN3art3Dbg8GoActiveEv","_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE","_ZN3art3Dbg20ManageDeoptimizationEv","_ZN3art3Dbg9gRegistryE","_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID","_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID","_ZN3art11interpreter18GetNterpEntryPointEv","_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi"])}:{functions:{_Z20dvmDecodeIndirectRefP6ThreadP8_jobject:["dvmDecodeIndirectRef","pointer",["pointer","pointer"]],_Z15dvmUseJNIBridgeP6MethodPv:["dvmUseJNIBridge","void",["pointer","pointer"]],_Z20dvmHeapSourceGetBasev:["dvmHeapSourceGetBase","pointer",[]],_Z21dvmHeapSourceGetLimitv:["dvmHeapSourceGetLimit","pointer",[]],_Z16dvmIsValidObjectPK6Object:["dvmIsValidObject","uint8",["pointer"]],JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]]},variables:{gDvmJni:function(u){this.gDvmJni=u},gDvm:function(u){this.gDvm=u}}},{functions:s={},variables:c={},optionals:a=new Set}=i,l=[];for(let[u,g]of Object.entries(s)){let m=o.find(u);m!==null?typeof g=="function"?g.call(o,m):o[g[0]]=new NativeFunction(m,g[1],g[2],ae):a.has(u)||l.push(u)}for(let[u,g]of Object.entries(c)){let m=o.find(u);m!==null?g.call(o,m):a.has(u)||l.push(u)}if(l.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+l.join(", "));let d=Memory.alloc(N),p=Memory.alloc(va);if(ye("JNI_GetCreatedJavaVMs",o.JNI_GetCreatedJavaVMs(d,1,p)),p.readInt()===0)return null;if(o.vm=d.readPointer(),r){let u=fe(),g;u>=27?g=33554432:u>=24?g=16777216:g=0,o.kAccCompileDontBother=g;let m=o.vm.add(N).readPointer();o.artRuntime=m;let E=co(o),w=E.offset,x=w.instrumentation;o.artInstrumentation=x!==null?m.add(x):null,Bn()>=36e7&&o.artInstrumentation!=null&&(o.artInstrumentation=o.artInstrumentation.readPointer()),o.artHeap=m.add(w.heap).readPointer(),o.artThreadList=m.add(w.threadList).readPointer();let D=m.add(w.classLinker).readPointer(),F=Lc(m,E).offset,z=D.add(F.quickResolutionTrampoline).readPointer(),B=D.add(F.quickImtConflictTrampoline).readPointer(),R=D.add(F.quickGenericJniTrampoline).readPointer(),A=D.add(F.quickToInterpreterBridgeTrampoline).readPointer();o.artClassLinker={address:D,quickResolutionTrampoline:z,quickImtConflictTrampoline:B,quickGenericJniTrampoline:R,quickToInterpreterBridgeTrampoline:A};let M=new ke(o);o.artQuickGenericJniTrampoline=In(R,M),o.artQuickToInterpreterBridge=In(A,M),o.artQuickResolutionTrampoline=In(z,M),o["art::JavaVMExt::AddGlobalRef"]===void 0&&(o["art::JavaVMExt::AddGlobalRef"]=Cl(o)),o["art::JavaVMExt::DecodeGlobal"]===void 0&&(o["art::JavaVMExt::DecodeGlobal"]=Al(o)),o["art::ArtMethod::PrettyMethod"]===void 0&&(o["art::ArtMethod::PrettyMethod"]=o["art::ArtMethod::PrettyMethodNullSafe"]),o["art::interpreter::GetNterpEntryPoint"]!==void 0?o.artNterpEntryPoint=o["art::interpreter::GetNterpEntryPoint"]():o.artNterpEntryPoint=o.find("ExecuteNterpImpl"),me=qc(o,M),Ll(o);let U=null;Object.defineProperty(o,"jvmti",{get(){return U===null&&(U=[hc(M,this.artRuntime)]),U[0]}})}let f=e.enumerateImports().filter(u=>u.name.indexOf("_Z")===0).reduce((u,g)=>(u[g.name]=g.address,u),{});return o.$new=new NativeFunction(f._Znwm||f._Znwj,"pointer",["ulong"],ae),o.$delete=new NativeFunction(f._ZdlPv,"void",["pointer"],ae),uo=r?Pn:Rn,o}function hc(t,e){let n=null;return t.perform(()=>{let r=Y().find("_ZN3art7Runtime18EnsurePluginLoadedEPKcPNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE");if(r===null)return;let o=new NativeFunction(r,"bool",["pointer","pointer","pointer"]),i=Memory.alloc(N);if(!o(e,Memory.allocUtf8String("libopenjdkjvmti.so"),i))return;let c=bt.v1_2|1073741824,a=t.tryGetEnvHandle(c);if(a===null)return;n=new Oe(a,t);let l=Memory.alloc(8);l.writeU64(Et.canTagObjects),n.addCapabilities(l)!==0&&(n=null)}),n}function mc(t,e){Y().flavor==="art"&&(t.getFieldId(e,"x","Z"),t.exceptionClear())}function _c(t){return{offset:N===4?{globalsLock:32,globals:72}:{globalsLock:64,globals:112}}}function gc(t){let e=t.vm,n=t.artRuntime,r=N===4?200:384,o=r+100*N,i=fe(),s=lo(),{isApiLevel34OrApexEquivalent:c}=t,a=null;for(let d=r;d!==o;d+=N)if(n.add(d).readPointer().equals(e)){let f,u=null;i>=33||s==="Tiramisu"||c?(f=[d-4*N],u=d-N):i>=30||s==="R"?(f=[d-3*N,d-4*N],u=d-N):i>=29?f=[d-2*N]:i>=27?f=[d-ct-3*N]:f=[d-ct-2*N];for(let g of f){let m=g-N,E=m-N,w;c?w=E-9*N:i>=24?w=E-8*N:i>=23?w=E-7*N:w=E-4*N;let x={offset:{heap:w,threadList:E,internTable:m,classLinker:g,jniIdManager:u}};if(fo(n,x)!==null){a=x;break}}break}if(a===null)throw new Error("Unable to determine Runtime field offsets");let l=Bn()>=36e7;return a.offset.instrumentation=l?wc(t):bc(t),a.offset.jniIdsIndirection=Ac(t),a}var yc={ia32:Wr,x64:Wr,arm:Ec,arm64:vc};function bc(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:Pe(e,yc[Process.arch],{limit:30})}function Wr(t){if(t.mnemonic!=="lea")return null;let e=t.operands[1].value.disp;return e<256||e>1024?null:e}function Ec(t){if(t.mnemonic!=="add.w")return null;let e=t.operands;if(e.length!==3)return null;let n=e[2];return n.type!=="imm"?null:n.value}function vc(t){if(t.mnemonic!=="add")return null;let e=t.operands;if(e.length!==3||e[0].value==="sp"||e[1].value==="sp")return null;let n=e[2];if(n.type!=="imm")return null;let r=n.value.valueOf();return r<256||r>1024?null:r}var Sc={ia32:qr,x64:qr,arm:Ic,arm64:xc};function wc(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:Pe(e,Sc[Process.arch],{limit:30})}function qr(t){if(t.mnemonic!=="mov")return null;let e=t.operands;if(e[0].value!=="rax")return null;let r=e[1];if(r.type!=="mem")return null;let o=r.value;if(o.base!=="rdi")return null;let i=o.disp;return i<256||i>1024?null:i}function Ic(t){return null}function xc(t){if(t.mnemonic!=="ldr")return null;let e=t.operands;if(e[0].value==="x0")return null;let n=e[1].value;if(n.base!=="x0")return null;let r=n.disp;return r<256||r>1024?null:r}var Cc={ia32:Qr,x64:Qr,arm:Tc,arm64:Nc};function Ac(t){let e=t.find("_ZN3art7Runtime12SetJniIdTypeENS_9JniIdTypeE");if(e===null)return null;let n=Pe(e,Cc[Process.arch],{limit:20});if(n===null)throw new Error("Unable to determine Runtime.jni_ids_indirection_ offset");return n}function Qr(t){return t.mnemonic==="cmp"?t.operands[0].value.disp:null}function Tc(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function Nc(t,e){if(e===null)return null;let{mnemonic:n}=t,{mnemonic:r}=e;return n==="cmp"&&r==="ldr"||n==="bl"&&r==="str"?e.operands[1].value.disp:null}function kc(){let e={"4-21":136,"4-22":136,"4-23":172,"4-24":196,"4-25":196,"4-26":196,"4-27":196,"4-28":212,"4-29":172,"4-30":180,"4-31":180,"8-21":224,"8-22":224,"8-23":296,"8-24":344,"8-25":344,"8-26":352,"8-27":352,"8-28":392,"8-29":328,"8-30":336,"8-31":336}[`${N}-${fe()}`];if(e===void 0)throw new Error("Unable to determine Instrumentation field offsets");return{offset:{forcedInterpretOnly:4,deoptimizationEnabled:e}}}function Lc(t,e){let n=fo(t,e);if(n===null)throw new Error("Unable to determine ClassLinker field offsets");return n}function fo(t,e){if(vn!==null)return vn;let{classLinker:n,internTable:r}=e.offset,o=t.add(n).readPointer(),i=t.add(r).readPointer(),s=N===4?100:200,c=s+100*N,a=fe(),l=null;for(let d=s;d!==c;d+=N)if(o.add(d).readPointer().equals(i)){let f;a>=30||lo()==="R"?f=6:a>=29?f=4:a>=23?f=3:f=5;let u=d+f*N,g;a>=23?g=u-2*N:g=u-3*N,l={offset:{quickResolutionTrampoline:g,quickImtConflictTrampoline:u-N,quickGenericJniTrampoline:u,quickToInterpreterBridgeTrampoline:u+N}};break}return l!==null&&(vn=l),l}function zn(t){let n=null;return t.perform(r=>{let o=Rt(t),i=Se(t),s={artArrayLengthSize:4,artArrayEntrySize:o.size,artArrayMax:50},c={artArrayLengthSize:N,artArrayEntrySize:i.size,artArrayMax:100},a=(f,u,g)=>{let m=f.add(u).readPointer();if(m.isNull())return null;let E=g===4?m.readU32():m.readU64().valueOf();return E<=0?null:{length:E,data:m.add(g)}},l=(f,u,g,m)=>{try{let E=a(f,u,m.artArrayLengthSize);if(E===null)return!1;let w=Math.min(E.length,m.artArrayMax);for(let x=0;x!==w;x++)if(E.data.add(x*m.artArrayEntrySize).equals(g))return!0}catch{}return!1},d=r.findClass("java/lang/Thread"),p=r.newGlobalRef(d);try{let f;Ce(t,r,R=>{f=Y()["art::JavaVMExt::DecodeGlobal"](t,R,p)});let u=to(r.getFieldId(p,"name","Ljava/lang/String;")),g=to(r.getStaticFieldId(p,"MAX_PRIORITY","I")),m=-1,E=-1;for(let R=0;R!==256;R+=4)m===-1&&l(f,R,g,s)&&(m=R),E===-1&&l(f,R,u,s)&&(E=R);if(E===-1||m===-1)throw new Error("Unable to find fields in java/lang/Thread; please file a bug");let w=E!==m?m:0,x=E,L=-1,D=Kn(r.getMethodId(p,"getName","()Ljava/lang/String;"));for(let R=0;R!==256;R+=4)L===-1&&l(f,R,D,c)&&(L=R);if(L===-1)throw new Error("Unable to find methods in java/lang/Thread; please file a bug");let F=-1,B=a(f,L,c.artArrayLengthSize).length;for(let R=L;R!==256;R+=4)if(f.add(R).readU16()===B){F=R;break}if(F===-1)throw new Error("Unable to find copied methods in java/lang/Thread; please file a bug");n={offset:{ifields:x,methods:L,sfields:w,copiedMethodsOffset:F}}}finally{r.deleteLocalRef(d),r.deleteGlobalRef(p)}}),n}function Mc(t){let e=Y(),n;return t.perform(r=>{let o=r.findClass("android/os/Process"),i=Kn(r.getStaticMethodId(o,"getElapsedCpuTime","()J"));r.deleteLocalRef(o);let s=Process.getModuleByName("libandroid_runtime.so"),c=s.base,a=c.add(s.size),l=fe(),d=l<=21?8:N,p=Ca|Aa|Ta|At,f=~(so|Pa|Oa)>>>0,u=null,g=null,m=2;for(let x=0;x!==64&&m!==0;x+=4){let L=i.add(x);if(u===null){let D=L.readPointer();D.compare(c)>=0&&D.compare(a)<0&&(u=x,m--)}g===null&&(L.readU32()&f)===p&&(g=x,m--)}if(m!==0)throw new Error("Unable to determine ArtMethod field offsets");let E=u+d;n={size:l<=21?E+32:E+N,offset:{jniCode:u,quickCode:E,accessFlags:g}},"artInterpreterToCompiledCodeBridge"in e&&(n.offset.interpreterCode=u-d)}),n}function Rt(t){let e=fe();return e>=23?{size:16,offset:{accessFlags:4}}:e>=21?{size:24,offset:{accessFlags:12}}:null}function Oc(t){let e=fe(),n;return t.perform(r=>{let o=jt(r),i=r.handle,s=null,c=null,a=null,l=null,d=null,p=null;for(let f=144;f!==256;f+=N)if(o.add(f).readPointer().equals(i)){c=f-6*N,d=f-4*N,p=f+2*N,e<=22&&(c-=N,s=c-N-9*8-3*4,a=f+6*N,d-=N,p-=N),l=f+9*N,e<=22&&(l+=2*N+4,N===8&&(l+=4)),e>=23&&(l+=N);break}if(l===null)throw new Error("Unable to determine ArtThread field offsets");n={offset:{isExceptionReportedToInstrumentation:s,exception:c,throwLocation:a,topHandleScope:l,managedStack:d,self:p}}}),n}function Pc(){return fe()>=23?{offset:{topQuickFrame:0,link:N}}:{offset:{topQuickFrame:2*N,link:0}}}var Rc={ia32:Yr,x64:Yr,arm:jc,arm64:Fc};function In(t,e){let n;return e.perform(r=>{let o=jt(r),i=Rc[Process.arch],s=Instruction.parse(t),c=i(s);c!==null?n=o.add(c).readPointer():n=t}),n}function Yr(t){return t.mnemonic==="jmp"?t.operands[0].value.disp:null}function jc(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function Fc(t){return t.mnemonic==="ldr"?t.operands[1].value.disp:null}function jt(t){return t.handle.add(N).readPointer()}function Dc(){return Vn("ro.build.version.release")}function Bc(){return Vn("ro.build.version.codename")}function Uc(){return parseInt(Vn("ro.build.version.sdk"),10)}function zc(){try{let t=File.readAllText("/proc/self/mountinfo"),e=null,n=new Map;for(let o of t.trimEnd().split(`
`)){let i=o.split(" "),s=i[4];if(!s.startsWith("/apex/com.android.art"))continue;let c=i[10];s.includes("@")?n.set(c,s.split("@")[1]):e=c}let r=n.get(e);return r!==void 0?parseInt(r):Xr()}catch{return Xr()}}function Xr(){return fe()*1e7}var xn=null,Vc=92;function Vn(t){xn===null&&(xn=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("__system_property_get"),"int",["pointer","pointer"],ae));let e=Memory.alloc(Vc);return xn(Memory.allocUtf8String(t),e),e.readUtf8String()}function Ce(t,e,n){let r=lc(t,e),o=jt(e).toString();if(it[o]=n,r(e.handle),it[o]!==void 0)throw delete it[o],new Error("Unable to perform state transition; please file a bug")}function Jc(t,e){let n=new NativeCallback(Gc,"void",["pointer"]);return _o(t,e,n)}function Gc(t){let e=t.toString(),n=it[e];delete it[e],n(t)}function Jn(t){let e=Y(),n=e.artThreadList;e["art::ThreadList::SuspendAll"](n,Memory.allocUtf8String("frida"),!1?1:0);try{t()}finally{e["art::ThreadList::ResumeAll"](n)}}var Nn=class{constructor(e){let n=Memory.alloc(4*N),r=n.add(N);n.writePointer(r);let o=new NativeCallback((i,s)=>e(s)===!0?1:0,"bool",["pointer","pointer"]);r.add(2*N).writePointer(o),this.handle=n,this._onVisit=o}};function Gn(t){return Y()["art::ClassLinker::VisitClasses"]instanceof NativeFunction?new Nn(t):new NativeCallback(n=>t(n)===!0?1:0,"bool",["pointer","pointer"])}var kn=class{constructor(e){let n=Memory.alloc(4*N),r=n.add(N);n.writePointer(r);let o=new NativeCallback((i,s)=>{e(s)},"void",["pointer","pointer"]);r.add(2*N).writePointer(o),this.handle=n,this._onVisit=o}};function $n(t){return new kn(t)}var $c={"include-inlined-frames":0,"skip-inlined-frames":1},Ln=class{constructor(e,n,r,o=0,i=!0){let s=Y(),c=512,a=3*N,l=Memory.alloc(c+a);s["art::StackVisitor::StackVisitor"](l,e,n,$c[r],o,i?1:0);let d=l.add(c);l.writePointer(d);let p=new NativeCallback(this._visitFrame.bind(this),"bool",["pointer"]);d.add(2*N).writePointer(p),this.handle=l,this._onVisitFrame=p;let f=l.add(N===4?12:24);this._curShadowFrame=f,this._curQuickFrame=f.add(N),this._curQuickFramePc=f.add(2*N),this._curOatQuickMethodHeader=f.add(3*N),this._getMethodImpl=s["art::StackVisitor::GetMethod"],this._descLocImpl=s["art::StackVisitor::DescribeLocation"],this._getCQFIImpl=s["art::StackVisitor::GetCurrentQuickFrameInfo"]}walkStack(e=!1){Y()["art::StackVisitor::WalkStack"](this.handle,e?1:0)}_visitFrame(){return this.visitFrame()?1:0}visitFrame(){throw new Error("Subclass must implement visitFrame")}getMethod(){let e=this._getMethodImpl(this.handle);return e.isNull()?null:new Nt(e)}getCurrentQuickFramePc(){return this._curQuickFramePc.readPointer()}getCurrentQuickFrame(){return this._curQuickFrame.readPointer()}getCurrentShadowFrame(){return this._curShadowFrame.readPointer()}describeLocation(){let e=new Mt;return this._descLocImpl(e,this.handle),e.disposeToString()}getCurrentOatQuickMethodHeader(){return this._curOatQuickMethodHeader.readPointer()}getCurrentQuickFrameInfo(){return this._getCQFIImpl(this.handle)}},Nt=class{constructor(e){this.handle=e}prettyMethod(e=!0){let n=new Mt;return Y()["art::ArtMethod::PrettyMethod"](n,this.handle,e?1:0),n.disposeToString()}toString(){return`ArtMethod(handle=${this.handle})`}};function Hc(t){return function(e){let n=Memory.alloc(12);return dc(t)(n,e),{frameSizeInBytes:n.readU32(),coreSpillMask:n.add(4).readU32(),fpSpillMask:n.add(8).readU32()}}}function Zc(t){let e=NULL;switch(Process.arch){case"ia32":e=Ke(32,n=>{n.putMovRegRegOffsetPtr("ecx","esp",4),n.putMovRegRegOffsetPtr("edx","esp",8),n.putCallAddressWithArguments(t,["ecx","edx"]),n.putMovRegReg("esp","ebp"),n.putPopReg("ebp"),n.putRet()});break;case"x64":e=Ke(32,n=>{n.putPushReg("rdi"),n.putCallAddressWithArguments(t,["rsi"]),n.putPopReg("rdi"),n.putMovRegPtrReg("rdi","rax"),n.putMovRegOffsetPtrReg("rdi",8,"edx"),n.putRet()});break;case"arm":e=Ke(16,n=>{n.putCallAddressWithArguments(t,["r0","r1"]),n.putPopRegs(["r0","lr"]),n.putMovRegReg("pc","lr")});break;case"arm64":e=Ke(64,n=>{n.putPushRegReg("x0","lr"),n.putCallAddressWithArguments(t,["x1"]),n.putPopRegReg("x2","lr"),n.putStrRegRegOffset("x0","x2",0),n.putStrRegRegOffset("w1","x2",8),n.putRet()});break}return new NativeFunction(e,"void",["pointer","pointer"],ae)}var Kc={ia32:globalThis.X86Relocator,x64:globalThis.X86Relocator,arm:globalThis.ThumbRelocator,arm64:globalThis.Arm64Relocator},Mn={ia32:globalThis.X86Writer,x64:globalThis.X86Writer,arm:globalThis.ThumbWriter,arm64:globalThis.Arm64Writer};function Ke(t,e){Sn===null&&(Sn=Memory.alloc(Process.pageSize));let n=Sn.add(Hr),r=Process.arch,o=Mn[r];return Memory.patchCode(n,t,i=>{let s=new o(i,{pc:n});if(e(s),s.flush(),s.offset>t)throw new Error(`Wrote ${s.offset}, exceeding maximum of ${t}`)}),Hr+=t,r==="arm"?n.or(1):n}function Wc(t,e){Qc(e),nl(e)}function qc(t,e){let n=We(e).offset,r=cc().offset,o=`
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
`,i=8,s=N,c=N,a=N,d=Memory.alloc(i+s+c+a),p=d.add(i),f=p.add(s),u=f.add(c),g=t.find(N===4?"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEj":"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEm"),m=new CModule(o,{lock:d,methods:p,replacements:f,last_seen_art_method:u,get_oat_quick_method_header_impl:g??ptr("0xdeadbeef")}),E={exceptions:"propagate",scheduling:"exclusive"};return{handle:m,replacedMethods:{isReplacement:new NativeFunction(m.is_replacement_method,"bool",["pointer"],E),get:new NativeFunction(m.get_replacement_method,"pointer",["pointer"],E),set:new NativeFunction(m.set_replacement_method,"void",["pointer","pointer"],E),synchronize:new NativeFunction(m.synchronize_replacement_methods,"void",["uint","pointer","pointer"],E),delete:new NativeFunction(m.delete_replacement_method,"void",["pointer"],E),translate:new NativeFunction(m.translate_method,"pointer",["pointer"],E),findReplacementFromQuickCode:m.find_replacement_method_from_quick_code},getOatQuickMethodHeaderImpl:g,hooks:{Interpreter:{doCall:m.on_interpreter_do_call},ArtMethod:{getOatQuickMethodHeader:m.on_art_method_get_oat_quick_method_header,prettyMethod:m.on_art_method_pretty_method},Gc:{copyingPhase:{onLeave:m.on_leave_gc_concurrent_copying_copying_phase},runFlip:{onEnter:m.on_leave_gc_concurrent_copying_copying_phase}}}}}function Qc(t){Kr||(Kr=!0,Yc(t),Xc(),el(),tl())}function Yc(t){let e=Y();[e.artQuickGenericJniTrampoline,e.artQuickToInterpreterBridge,e.artQuickResolutionTrampoline].forEach(r=>{Memory.protect(r,32,"rwx");let o=new Lt(r);o.activate(t),po.push(o)})}function Xc(){let t=Y(),e=fe(),{isApiLevel34OrApexEquivalent:n}=t,r;if(e<=22)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_6mirror9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(e<=33&&!n)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(n)r=/^_ZN3art11interpreter6DoCallILb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtbPNS_6JValueE$/;else throw new Error("Unable to find method invocation in ART; please file a bug");let o=t.module,i=[...o.enumerateExports(),...o.enumerateSymbols()].filter(s=>r.test(s.name));if(i.length===0)throw new Error("Unable to find method invocation in ART; please file a bug");for(let s of i)Interceptor.attach(s.address,me.hooks.Interpreter.doCall)}function el(){let t=Y(),n=t.module.findSymbolByName("_ZN3art2gc4Heap22CollectGarbageInternalENS0_9collector6GcTypeENS0_7GcCauseEbj");if(n===null)return;let{artNterpEntryPoint:r,artQuickToInterpreterBridge:o}=t,i=Se(t.vm).offset.quickCode;Interceptor.attach(n,{onLeave(){me.replacedMethods.synchronize(i,r,o)}})}function tl(){let t=[["_ZN3art11ClassLinker26VisiblyInitializedCallback22MarkVisiblyInitializedEPNS_6ThreadE","e90340f8 : ff0ff0ff"],["_ZN3art11ClassLinker26VisiblyInitializedCallback29AdjustThreadVisibilityCounterEPNS_6ThreadEl","7f0f00f9 : 1ffcffff"]],e=Y(),n=e.module;for(let[r,o]of t){let i=n.findSymbolByName(r);if(i===null)continue;let s=Memory.scanSync(i,8192,o);if(s.length===0)return;let{artNterpEntryPoint:c,artQuickToInterpreterBridge:a}=e,l=Se(e.vm).offset.quickCode;Interceptor.attach(s[0].address,function(){me.replacedMethods.synchronize(l,c,a)});return}}function nl(t){if(Zr)return;if(Zr=!0,!ol()){let{getOatQuickMethodHeaderImpl:i}=me;if(i===null)return;try{Interceptor.replace(i,me.hooks.ArtMethod.getOatQuickMethodHeader)}catch{}}let e=fe(),n=null,r=Y();e>28?n=r.find("_ZN3art2gc9collector17ConcurrentCopying12CopyingPhaseEv"):e>22&&(n=r.find("_ZN3art2gc9collector17ConcurrentCopying12MarkingPhaseEv")),n!==null&&Interceptor.attach(n,me.hooks.Gc.copyingPhase);let o=null;o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_"),o===null&&(o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_b")),o!==null&&Interceptor.attach(o,me.hooks.Gc.runFlip)}var rl={arm:{signatures:[{pattern:["b0 68","01 30","0c d0","1b 98",":","c0 ff","c0 ff","00 ff","00 2f"],validateMatch:Cn},{pattern:["d8 f8 08 00","01 30","0c d0","1b 98",":","f0 ff ff 0f","ff ff","00 ff","00 2f"],validateMatch:Cn},{pattern:["b0 68","01 30","40 f0 c3 80","00 25",":","c0 ff","c0 ff","c0 fb 00 d0","ff f8"],validateMatch:Cn}],instrument:sl},arm64:{signatures:[{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","88 39 00 f0",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 00 00 9f"],offset:1,validateMatch:eo},{pattern:["0a 40 b9","1f 05 00 31","01 34 00 54","e0 03 1f aa",":","fc ff ff","1f fc ff ff","1f 00 00 ff","e0 ff ff ff"],offset:1,validateMatch:eo}],instrument:al}};function Cn({address:t,size:e}){let n=Instruction.parse(t.or(1)),[r,o]=n.operands,i=o.value.base,s=r.value,c=Instruction.parse(n.next.add(2)),a=ptr(c.operands[0].value),l=c.address.add(c.size),d,p;return c.mnemonic==="beq"?(d=l,p=a):(d=a,p=l),Pe(d.or(1),f,{limit:3});function f(u){let{mnemonic:g}=u;if(!(g==="ldr"||g==="ldr.w"))return null;let{base:m,disp:E}=u.operands[1].value;return m===i&&E===20?{methodReg:i,scratchReg:s,target:{whenTrue:a,whenRegularMethod:d,whenRuntimeMethod:p}}:null}}function eo({address:t,size:e}){let[n,r]=Instruction.parse(t).operands,o=r.value.base,i="x"+n.value.substring(1),s=Instruction.parse(t.add(8)),c=ptr(s.operands[0].value),a=t.add(12),l,d;return s.mnemonic==="b.eq"?(l=a,d=c):(l=c,d=a),Pe(l,p,{limit:3});function p(f){if(f.mnemonic!=="ldr")return null;let{base:u,disp:g}=f.operands[1].value;return u===o&&g===24?{methodReg:o,scratchReg:i,target:{whenTrue:c,whenRegularMethod:l,whenRuntimeMethod:d}}:null}}function ol(){if(fe()<31)return!1;let t=rl[Process.arch];if(t===void 0)return!1;let e=t.signatures.map(({pattern:r,offset:o=0,validateMatch:i=il})=>({pattern:new MatchPattern(r.join("")),offset:o,validateMatch:i})),n=[];for(let{base:r,size:o}of Y().module.enumerateRanges("--x"))for(let{pattern:i,offset:s,validateMatch:c}of e){let a=Memory.scanSync(r,o,i).map(({address:l,size:d})=>({address:l.sub(s),size:d+s})).filter(l=>{let d=c(l);return d===null?!1:(l.validationResult=d,!0)});n.push(...a)}return n.length===0?!1:(n.forEach(t.instrument),!0)}function il(){return{}}var kt=class{constructor(e,n,r){this.address=e,this.size=n,this.originalCode=e.readByteArray(n),this.trampoline=r}revert(){Memory.patchCode(this.address,this.size,e=>{e.writeByteArray(this.originalCode)})}};function sl({address:t,size:e,validationResult:n}){let{methodReg:r,target:o}=n,i=Memory.alloc(Process.pageSize),s=e;Memory.patchCode(i,256,c=>{let a=new ThumbWriter(c,{pc:i}),l=new ThumbRelocator(t,a);for(let g=0;g!==2;g++)l.readOne();l.writeAll(),l.readOne(),l.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=[45,237,16,10];a.putBytes(d);let p=["r0","r1","r2","r3"];a.putPushRegs(p),a.putCallAddressWithArguments(me.replacedMethods.isReplacement,[r]),a.putCmpRegImm("r0",0),a.putPopRegs(p);let f=[189,236,16,10];a.putBytes(f),a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),l.readOne();let u=l.input.address.equals(o.whenRegularMethod);for(a.putLabel(u?"regular_method":"runtime_or_replacement_method"),l.writeOne();s<10;){let g=l.readOne();if(g===0){s=10;break}s=g}l.writeAll(),a.putBranchAddress(t.add(s+1)),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(o.whenTrue),a.flush()}),Un.push(new kt(t,s,i)),Memory.patchCode(t,s,c=>{let a=new ThumbWriter(c,{pc:t});a.putLdrRegAddress("pc",i.or(1)),a.flush()})}function al({address:t,size:e,validationResult:n}){let{methodReg:r,scratchReg:o,target:i}=n,s=Memory.alloc(Process.pageSize);Memory.patchCode(s,256,c=>{let a=new Arm64Writer(c,{pc:s}),l=new Arm64Relocator(t,a);for(let g=0;g!==2;g++)l.readOne();l.writeAll(),l.readOne(),l.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=["d0","d1","d2","d3","d4","d5","d6","d7","x0","x1","x2","x3","x4","x5","x6","x7","x8","x9","x10","x11","x12","x13","x14","x15","x16","x17"],p=d.length;for(let g=0;g!==p;g+=2)a.putPushRegReg(d[g],d[g+1]);a.putCallAddressWithArguments(me.replacedMethods.isReplacement,[r]),a.putCmpRegReg("x0","xzr");for(let g=p-2;g>=0;g-=2)a.putPopRegReg(d[g],d[g+1]);a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),l.readOne();let f=l.input,u=f.address.equals(i.whenRegularMethod);a.putLabel(u?"regular_method":"runtime_or_replacement_method"),l.writeOne(),a.putBranchAddress(f.next),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(i.whenTrue),a.flush()}),Un.push(new kt(t,e,s)),Memory.patchCode(t,e,c=>{let a=new Arm64Writer(c,{pc:t});a.putLdrRegAddress(o,s),a.putBrReg(o),a.flush()})}function cl(t){return new uo(t)}function ll(t){return me.replacedMethods.translate(t)}function Hn(t,e={}){let{limit:n=16}=e,r=t.getEnv();return st===null&&(st=dl(t,r)),st.backtrace(r,n)}function dl(t,e){let n=Y(),r=Memory.alloc(Process.pointerSize),o=new CModule(`
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
`,{current_backtrace:Memory.alloc(Process.pointerSize),perform_art_thread_state_transition:r,art_make_context:n["art::Thread::GetLongJumpContext"]??n["art::Context::Create"],art_stack_visitor_init:n["art::StackVisitor::StackVisitor"],art_stack_visitor_walk_stack:n["art::StackVisitor::WalkStack"],art_stack_visitor_get_method:n["art::StackVisitor::GetMethod"],art_stack_visitor_describe_location:n["art::StackVisitor::DescribeLocation"],translate_method:me.replacedMethods.translate,translate_location:n["art::Monitor::TranslateLocation"],get_class_location:n["art::mirror::Class::GetLocation"],cxx_delete:n.$delete,strtoul:Process.getModuleByName("libc.so").getExportByName("strtoul")}),i=new NativeFunction(o._create,"pointer",["pointer","uint"],ae),s=new NativeFunction(o._destroy,"void",["pointer"],ae),c={exceptions:"propagate",scheduling:"exclusive"},a=new NativeFunction(o._get_id,"pointer",["pointer"],c),l=new NativeFunction(o._get_frames,"pointer",["pointer"],c),d=_o(t,e,o._on_thread_state_transition_complete);o._performData=d,r.writePointer(d),o.backtrace=(f,u)=>{let g=i(f,u),m=new On(g);return Script.bindWeak(m,p.bind(null,g)),m};function p(f){s(f)}return o.getId=f=>a(f).readUtf8String(),o.getFrames=f=>JSON.parse(l(f).readUtf8String()),o}var On=class{constructor(e){this.handle=e}get id(){return st.getId(this.handle)}get frames(){return st.getFrames(this.handle)}};function Zn(){Tt.forEach(t=>{t.vtablePtr.writePointer(t.vtable),t.vtableCountPtr.writeS32(t.vtableCount)}),Tt.clear();for(let t of po.splice(0))t.deactivate();for(let t of Un.splice(0))t.revert()}function Kn(t){return ho(t,"art::jni::JniIdManager::DecodeMethodId")}function to(t){return ho(t,"art::jni::JniIdManager::DecodeFieldId")}function ho(t,e){let n=Y(),r=co(n).offset,o=r.jniIdManager,i=r.jniIdsIndirection;if(o!==null&&i!==null){let s=n.artRuntime;if(s.add(i).readInt()!==ja){let a=s.add(o).readPointer();return n[e](a,t)}}return t}var ul={ia32:pl,x64:fl,arm:hl,arm64:ml};function pl(t,e,n,r,o){let i=We(o).offset,s=Se(o).offset,c;return Memory.patchCode(t,128,a=>{let l=new X86Writer(a,{pc:t}),d=new X86Relocator(e,l),p=[15,174,4,36],f=[15,174,12,36];l.putPushax(),l.putMovRegReg("ebp","esp"),l.putAndRegU32("esp",4294967280),l.putSubRegImm("esp",512),l.putBytes(p),l.putMovRegFsU32Ptr("ebx",i.self),l.putCallAddressWithAlignedArguments(me.replacedMethods.findReplacementFromQuickCode,["eax","ebx"]),l.putTestRegReg("eax","eax"),l.putJccShortLabel("je","restore_registers","no-hint"),l.putMovRegOffsetPtrReg("ebp",7*4,"eax"),l.putLabel("restore_registers"),l.putBytes(f),l.putMovRegReg("esp","ebp"),l.putPopax(),l.putJccShortLabel("jne","invoke_replacement","no-hint");do c=d.readOne();while(c<n&&!d.eoi);d.writeAll(),d.eoi||l.putJmpAddress(e.add(c)),l.putLabel("invoke_replacement"),l.putJmpRegOffsetPtr("eax",s.quickCode),l.flush()}),c}function fl(t,e,n,r,o){let i=We(o).offset,s=Se(o).offset,c;return Memory.patchCode(t,256,a=>{let l=new X86Writer(a,{pc:t}),d=new X86Relocator(e,l),p=[15,174,4,36],f=[15,174,12,36];l.putPushax(),l.putMovRegReg("rbp","rsp"),l.putAndRegU32("rsp",4294967280),l.putSubRegImm("rsp",512),l.putBytes(p),l.putMovRegGsU32Ptr("rbx",i.self),l.putCallAddressWithAlignedArguments(me.replacedMethods.findReplacementFromQuickCode,["rdi","rbx"]),l.putTestRegReg("rax","rax"),l.putJccShortLabel("je","restore_registers","no-hint"),l.putMovRegOffsetPtrReg("rbp",8*8,"rax"),l.putLabel("restore_registers"),l.putBytes(f),l.putMovRegReg("rsp","rbp"),l.putPopax(),l.putJccShortLabel("jne","invoke_replacement","no-hint");do c=d.readOne();while(c<n&&!d.eoi);d.writeAll(),d.eoi||l.putJmpAddress(e.add(c)),l.putLabel("invoke_replacement"),l.putJmpRegOffsetPtr("rdi",s.quickCode),l.flush()}),c}function hl(t,e,n,r,o){let i=Se(o).offset,s=e.and(Dn),c;return Memory.patchCode(t,128,a=>{let l=new ThumbWriter(a,{pc:t}),d=new ThumbRelocator(s,l),p=[45,237,16,10],f=[189,236,16,10];l.putPushRegs(["r1","r2","r3","r5","r6","r7","r8","r10","r11","lr"]),l.putBytes(p),l.putSubRegRegImm("sp","sp",8),l.putStrRegRegOffset("r0","sp",0),l.putCallAddressWithArguments(me.replacedMethods.findReplacementFromQuickCode,["r0","r9"]),l.putCmpRegImm("r0",0),l.putBCondLabel("eq","restore_registers"),l.putStrRegRegOffset("r0","sp",0),l.putLabel("restore_registers"),l.putLdrRegRegOffset("r0","sp",0),l.putAddRegRegImm("sp","sp",8),l.putBytes(f),l.putPopRegs(["lr","r11","r10","r8","r7","r6","r5","r3","r2","r1"]),l.putBCondLabel("ne","invoke_replacement");do c=d.readOne();while(c<n&&!d.eoi);d.writeAll(),d.eoi||l.putLdrRegAddress("pc",e.add(c)),l.putLabel("invoke_replacement"),l.putLdrRegRegOffset("pc","r0",i.quickCode),l.flush()}),c}function ml(t,e,n,{availableScratchRegs:r},o){let i=Se(o).offset,s;return Memory.patchCode(t,256,c=>{let a=new Arm64Writer(c,{pc:t}),l=new Arm64Relocator(e,a);a.putPushRegReg("d0","d1"),a.putPushRegReg("d2","d3"),a.putPushRegReg("d4","d5"),a.putPushRegReg("d6","d7"),a.putPushRegReg("x1","x2"),a.putPushRegReg("x3","x4"),a.putPushRegReg("x5","x6"),a.putPushRegReg("x7","x20"),a.putPushRegReg("x21","x22"),a.putPushRegReg("x23","x24"),a.putPushRegReg("x25","x26"),a.putPushRegReg("x27","x28"),a.putPushRegReg("x29","lr"),a.putSubRegRegImm("sp","sp",16),a.putStrRegRegOffset("x0","sp",0),a.putCallAddressWithArguments(me.replacedMethods.findReplacementFromQuickCode,["x0","x19"]),a.putCmpRegReg("x0","xzr"),a.putBCondLabel("eq","restore_registers"),a.putStrRegRegOffset("x0","sp",0),a.putLabel("restore_registers"),a.putLdrRegRegOffset("x0","sp",0),a.putAddRegRegImm("sp","sp",16),a.putPopRegReg("x29","lr"),a.putPopRegReg("x27","x28"),a.putPopRegReg("x25","x26"),a.putPopRegReg("x23","x24"),a.putPopRegReg("x21","x22"),a.putPopRegReg("x7","x20"),a.putPopRegReg("x5","x6"),a.putPopRegReg("x3","x4"),a.putPopRegReg("x1","x2"),a.putPopRegReg("d6","d7"),a.putPopRegReg("d4","d5"),a.putPopRegReg("d2","d3"),a.putPopRegReg("d0","d1"),a.putBCondLabel("ne","invoke_replacement");do s=l.readOne();while(s<n&&!l.eoi);if(l.writeAll(),!l.eoi){let d=Array.from(r)[0];a.putLdrRegAddress(d,e.add(s)),a.putBrReg(d)}a.putLabel("invoke_replacement"),a.putLdrRegRegOffset("x16","x0",i.quickCode),a.putBrReg("x16"),a.flush()}),s}var _l={ia32:no,x64:no,arm:gl,arm64:yl};function no(t,e,n){Memory.patchCode(t,16,r=>{let o=new X86Writer(r,{pc:t});o.putJmpAddress(e),o.flush()})}function gl(t,e,n){let r=t.and(Dn);Memory.patchCode(r,16,o=>{let i=new ThumbWriter(o,{pc:r});i.putLdrRegAddress("pc",e.or(1)),i.flush()})}function yl(t,e,n){Memory.patchCode(t,16,r=>{let o=new Arm64Writer(r,{pc:t});n===16?o.putLdrRegAddress("x16",e):o.putAdrpRegAddress("x16",e),o.putBrReg("x16"),o.flush()})}var bl={ia32:5,x64:16,arm:8,arm64:16},Lt=class{constructor(e){this.quickCode=e,this.quickCodeAddress=Process.arch==="arm"?e.and(Dn):e,this.redirectSize=0,this.trampoline=null,this.overwrittenPrologue=null,this.overwrittenPrologueLength=0}_canRelocateCode(e,n){let r=Mn[Process.arch],o=Kc[Process.arch],{quickCodeAddress:i}=this,s=new r(i),c=new o(i,s),a;if(Process.arch==="arm64"){let l=new Set(["x16","x17"]);do{let d=c.readOne(),p=new Set(l),{read:f,written:u}=c.input.regsAccessed;for(let g of[f,u])for(let m of g){let E;m.startsWith("w")?E="x"+m.substring(1):E=m,p.delete(E)}if(p.size===0)break;a=d,l=p}while(a<e&&!c.eoi);n.availableScratchRegs=l}else do a=c.readOne();while(a<e&&!c.eoi);return a>=e}_allocateTrampoline(){It===null&&(It=tn(N===4?128:256));let e=bl[Process.arch],n,r,o=1,i={};if(N===4||this._canRelocateCode(e,i))n=e,r={};else{let s;Process.arch==="x64"?(n=5,s=Fa):Process.arch==="arm64"&&(n=8,s=Da,o=4096),r={near:this.quickCodeAddress,maxDistance:s}}return this.redirectSize=n,this.trampoline=It.allocateSlice(r,o),i}_destroyTrampoline(){It.freeSlice(this.trampoline)}activate(e){let n=this._allocateTrampoline(),{trampoline:r,quickCode:o,redirectSize:i}=this,s=ul[Process.arch],c=s(r,o,i,n,e);this.overwrittenPrologueLength=c,this.overwrittenPrologue=Memory.dup(this.quickCodeAddress,c);let a=_l[Process.arch];a(o,r,i)}deactivate(){let{quickCodeAddress:e,overwrittenPrologueLength:n}=this,r=Mn[Process.arch];Memory.patchCode(e,n,o=>{let i=new r(o,{pc:e}),{overwrittenPrologue:s}=this;i.putBytes(s.readByteArray(n)),i.flush()}),this._destroyTrampoline()}};function El(t){let e=Y(),{module:n,artClassLinker:r}=e;return t.equals(r.quickGenericJniTrampoline)||t.equals(r.quickToInterpreterBridgeTrampoline)||t.equals(r.quickResolutionTrampoline)||t.equals(r.quickImtConflictTrampoline)||t.compare(n.base)>=0&&t.compare(n.base.add(n.size))<0}var Pn=class{constructor(e){let n=Kn(e);this.methodId=n,this.originalMethod=null,this.hookedMethodId=n,this.replacementMethodId=null,this.interceptor=null}replace(e,n,r,o,i){let{kAccCompileDontBother:s,artNterpEntryPoint:c}=i;this.originalMethod=ro(this.methodId,o);let a=this.originalMethod.accessFlags;if((a&Ra)!==0&&vl()){let u=this.originalMethod.jniCode;this.hookedMethodId=u.add(2*N).readPointer(),this.originalMethod=ro(this.hookedMethodId,o)}let{hookedMethodId:l}=this,d=wl(l,o);this.replacementMethodId=d,xt(d,{jniCode:e,accessFlags:(a&~(ka|Na|Jr)|At|s)>>>0,quickCode:i.artClassLinker.quickGenericJniTrampoline,interpreterCode:i.artInterpreterToCompiledCodeBridge},o);let p=so|Ma|Jr;(a&At)===0&&(p|=La),xt(l,{accessFlags:(a&~p|s)>>>0},o);let f=this.originalMethod.quickCode;if(c!==null&&f.equals(c)&&xt(l,{quickCode:i.artQuickToInterpreterBridge},o),!El(f)){let u=new Lt(f);u.activate(o),this.interceptor=u}me.replacedMethods.set(l,d),Wc(l,o)}revert(e){let{hookedMethodId:n,interceptor:r}=this;xt(n,this.originalMethod,e),me.replacedMethods.delete(n),r!==null&&(r.deactivate(),this.interceptor=null)}resolveTarget(e,n,r,o){return this.hookedMethodId}};function vl(){return fe()<28}function ro(t,e){let r=Se(e).offset;return["jniCode","accessFlags","quickCode","interpreterCode"].reduce((o,i)=>{let s=r[i];if(s===void 0)return o;let c=t.add(s),a=i==="accessFlags"?Sa:wa;return o[i]=a.call(c),o},{})}function xt(t,e,n){let o=Se(n).offset;Object.keys(e).forEach(i=>{let s=o[i];if(s===void 0)return;let c=t.add(s);(i==="accessFlags"?Ia:xa).call(c,e[i])})}var Rn=class{constructor(e){this.methodId=e,this.originalMethod=null}replace(e,n,r,o,i){let{methodId:s}=this;this.originalMethod=Memory.dup(s,bn);let c=r.reduce((f,u)=>f+u.size,0);n&&c++;let a=(s.add(Gr).readU32()|At)>>>0,l=c,d=0,p=c;s.add(Gr).writeU32(a),s.add(Ga).writeU16(l),s.add($a).writeU16(d),s.add(Ha).writeU16(p),s.add(Ka).writeU32(Sl(s)),i.dvmUseJNIBridge(s,e)}revert(e){Memory.copy(this.methodId,this.originalMethod,bn)}resolveTarget(e,n,r,o){let i=r.handle.add(ao).readPointer(),s;if(n)s=o.dvmDecodeIndirectRef(i,e.$h);else{let f=e.$borrowClassHandle(r);s=o.dvmDecodeIndirectRef(i,f.value),f.unref(r)}let c;n?c=s.add(Va).readPointer():c=s;let a=c.toString(16),l=Tt.get(a);if(l===void 0){let f=c.add(za),u=c.add(Ua),g=f.readPointer(),m=u.readS32(),E=m*N,w=Memory.alloc(2*E);Memory.copy(w,g,E),f.writePointer(w),l={classObject:c,vtablePtr:f,vtableCountPtr:u,vtable:g,vtableCount:m,shadowVtable:w,shadowVtableCount:m,targetMethods:new Map},Tt.set(a,l)}let d=this.methodId.toString(16),p=l.targetMethods.get(d);if(p===void 0){p=Memory.dup(this.originalMethod,bn);let f=l.shadowVtableCount++;l.shadowVtable.add(f*N).writePointer(p),p.add(Ja).writeU16(f),l.vtableCountPtr.writeS32(l.shadowVtableCount),l.targetMethods.set(d,p)}return p}};function Sl(t){if(Process.arch!=="ia32")return $r;let e=t.add(Za).readPointer().readCString();if(e===null||e.length===0||e.length>65535)return $r;let n;switch(e[0]){case"V":n=Wa;break;case"F":n=qa;break;case"D":n=Qa;break;case"J":n=Ya;break;case"Z":case"B":n=nc;break;case"C":n=tc;break;case"S":n=ec;break;default:n=Xa;break}let r=0;for(let o=e.length-1;o>0;o--){let i=e[o];r+=i==="D"||i==="J"?2:1}return n<<rc|r}function wl(t,e){let n=Y();if(fe()<23){let r=n["art::Thread::CurrentFromGdb"]();return n["art::mirror::Object::Clone"](t,r)}return Memory.dup(t,Se(e).size)}function Wn(t,e,n){mo(t,e,Tn,n)}function qn(t,e){mo(t,e,An)}function Qn(t,e){let n=Y();if(fe()<26)throw new Error("This API is only available on Android >= 8.0");Ce(t,e,r=>{n["art::Runtime::DeoptimizeBootImage"](n.artRuntime)})}function mo(t,e,n,r){let o=Y();if(fe()<24)throw new Error("This API is only available on Android >= 7.0");Ce(t,e,i=>{if(fe()<30){if(!o.isJdwpStarted()){let c=Il(o);pc.push(c)}o.isDebuggerActive()||o["art::Dbg::GoActive"]();let s=Memory.alloc(8+N);switch(s.writeU32(n),n){case An:break;case Tn:s.add(8).writePointer(r);break;default:throw new Error("Unsupported deoptimization kind")}o["art::Dbg::RequestDeoptimization"](s),o["art::Dbg::ManageDeoptimization"]()}else{let s=o.artInstrumentation;if(s===null)throw new Error("Unable to find Instrumentation class in ART; please file a bug");let c=o["art::Instrumentation::EnableDeoptimization"];switch(c!==void 0&&(s.add(ac().offset.deoptimizationEnabled).readU8()||c(s)),n){case An:o["art::Instrumentation::DeoptimizeEverything"](s,Memory.allocUtf8String("frida"));break;case Tn:o["art::Instrumentation::Deoptimize"](s,r);break;default:throw new Error("Unsupported deoptimization kind")}}})}var jn=class{constructor(){let e=Process.getModuleByName("libart.so"),n=e.getExportByName("_ZN3art4JDWP12JdwpAdbState6AcceptEv"),r=e.getExportByName("_ZN3art4JDWP12JdwpAdbState15ReceiveClientFdEv"),o=oo(),i=oo();this._controlFd=o[0],this._clientFd=i[0];let s=null;s=Interceptor.attach(n,function(c){let a=c[0];Memory.scanSync(a.add(8252),256,"00 ff ff ff ff 00")[0].address.add(1).writeS32(o[1]),s.detach()}),Interceptor.replace(r,new NativeCallback(function(c){return Interceptor.revert(r),i[1]},"int",["pointer"])),Interceptor.flush(),this._handshakeRequest=this._performHandshake()}async _performHandshake(){let e=new UnixInputStream(this._clientFd,{autoClose:!1}),n=new UnixOutputStream(this._clientFd,{autoClose:!1}),r=[74,68,87,80,45,72,97,110,100,115,104,97,107,101];try{await n.writeAll(r),await e.readAll(r.length)}catch{}}};function Il(t){let e=new jn;t["art::Dbg::SetJdwpAllowed"](1);let n=xl();t["art::Dbg::ConfigureJdwp"](n);let r=t["art::InternalDebuggerControlCallback::StartDebugger"];return r!==void 0?r(NULL):t["art::Dbg::StartJdwp"](),e}function xl(){let t=fe()<28?2:3,e=0,n=t,r=!0,o=!1,i=e,s=8+ct+2,c=Memory.alloc(s);return c.writeU32(n).add(4).writeU8(r?1:0).add(1).writeU8(o?1:0).add(1).add(ct).writeU16(i),c}function oo(){wn===null&&(wn=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("socketpair"),"int",["int","int","int","pointer"]));let t=Memory.alloc(8);if(wn(ic,sc,0,t)===-1)throw new Error("Unable to create socketpair for JDWP");return[t.readS32(),t.add(4).readS32()]}function Cl(t){let e=_c().offset,n=t.vm.add(e.globalsLock),r=t.vm.add(e.globals),o=t["art::IndirectReferenceTable::Add"],i=t["art::ReaderWriterMutex::ExclusiveLock"],s=t["art::ReaderWriterMutex::ExclusiveUnlock"],c=0;return function(a,l,d){i(n,l);try{return o(r,c,d)}finally{s(n,l)}}}function Al(t){let e=t["art::Thread::DecodeJObject"];if(e===void 0)throw new Error("art::Thread::DecodeJObject is not available; please file a bug");return function(n,r,o){return e(r,o)}}var Tl={ia32:io,x64:io,arm:Nl,arm64:kl};function _o(t,e,n){let r=Y(),o=e.handle.readPointer(),i,s=r.find("_ZN3art3JNIILb1EE14ExceptionClearEP7_JNIEnv");s!==null?i=s:i=o.add(Pt).readPointer();let c,a=r.find("_ZN3art3JNIILb1EE10FatalErrorEP7_JNIEnvPKc");a!==null?c=a:c=o.add(Ba).readPointer();let l=Tl[Process.arch];if(l===void 0)throw new Error("Not yet implemented for "+Process.arch);let d=null,p=We(t).offset,f=p.exception,u=new Set,g=p.isExceptionReportedToInstrumentation;g!==null&&u.add(g);let m=p.throwLocation;m!==null&&(u.add(m),u.add(m+N),u.add(m+2*N));let E=65536,w=Memory.alloc(E);return Memory.patchCode(w,E,x=>{d=l(x,w,i,c,f,u,n)}),d._code=w,d._callback=n,d}function io(t,e,n,r,o,i,s){let c={},a=new Set,l=[n];for(;l.length>0;){let m=l.shift();if(Object.values(c).some(({begin:F,end:z})=>m.compare(F)>=0&&m.compare(z)<0))continue;let w=m.toString(),x={begin:m},L=null,D=!1;do{if(m.equals(r)){D=!0;break}let F=Instruction.parse(m);L=F;let z=c[F.address.toString()];if(z!==void 0){delete c[z.begin.toString()],c[w]=z,z.begin=x.begin,x=null;break}let B=null;switch(F.mnemonic){case"jmp":B=ptr(F.operands[0].value),D=!0;break;case"je":case"jg":case"jle":case"jne":case"js":B=ptr(F.operands[0].value);break;case"ret":D=!0;break}B!==null&&(a.add(B.toString()),l.push(B),l.sort((R,A)=>R.compare(A))),m=F.next}while(!D);x!==null&&(x.end=L.address.add(L.size),c[w]=x)}let d=Object.keys(c).map(m=>c[m]);d.sort((m,E)=>m.begin.compare(E.begin));let p=c[n.toString()];d.splice(d.indexOf(p),1),d.unshift(p);let f=new X86Writer(t,{pc:e}),u=!1,g=null;return d.forEach(m=>{let E=m.end.sub(m.begin).toInt32(),w=new X86Relocator(m.begin,f),x;for(;(x=w.readOne())!==0;){let L=w.input,{mnemonic:D}=L,F=L.address.toString();a.has(F)&&f.putLabel(F);let z=!0;switch(D){case"jmp":f.putJmpNearLabel(ve(L.operands[0])),z=!1;break;case"je":case"jg":case"jle":case"jne":case"js":f.putJccNearLabel(D,ve(L.operands[0]),"no-hint"),z=!1;break;case"mov":{let[B,R]=L.operands;if(B.type==="mem"&&R.type==="imm"){let A=B.value,M=A.disp;if(M===o&&R.value.valueOf()===0){if(g=A.base,f.putPushfx(),f.putPushax(),f.putMovRegReg("xbp","xsp"),N===4)f.putAndRegU32("esp",4294967280);else{let U=g!=="rdi"?"rdi":"rsi";f.putMovRegU64(U,uint64("0xfffffffffffffff0")),f.putAndRegReg("rsp",U)}f.putCallAddressWithAlignedArguments(s,[g]),f.putMovRegReg("xsp","xbp"),f.putPopax(),f.putPopfx(),u=!0,z=!1}else i.has(M)&&A.base===g&&(z=!1)}break}case"call":{let B=L.operands[0];B.type==="mem"&&B.value.disp===Pt&&(N===4?(f.putPopReg("eax"),f.putMovRegRegOffsetPtr("eax","eax",4),f.putPushReg("eax")):f.putMovRegRegOffsetPtr("rdi","rdi",8),f.putCallAddressWithArguments(s,[]),u=!0,z=!1);break}}if(z?w.writeAll():w.skipOne(),x===E)break}w.dispose()}),f.dispose(),u||Yn(),new NativeFunction(e,"void",["pointer"],ae)}function Nl(t,e,n,r,o,i,s){let c={},a=new Set,l=ptr(1).not(),d=[n];for(;d.length>0;){let w=d.shift();if(Object.values(c).some(({begin:M,end:U})=>w.compare(M)>=0&&w.compare(U)<0))continue;let L=w.and(l),D=L.toString(),F=w.and(1),z={begin:L},B=null,R=!1,A=0;do{if(w.equals(r)){R=!0;break}let M=Instruction.parse(w),{mnemonic:U}=M;B=M;let J=w.and(l).toString(),H=c[J];if(H!==void 0){delete c[H.begin.toString()],c[D]=H,H.begin=z.begin,z=null;break}let K=A===0,$=null;switch(U){case"b":$=ptr(M.operands[0].value),R=K;break;case"beq.w":case"beq":case"bne":case"bne.w":case"bgt":$=ptr(M.operands[0].value);break;case"cbz":case"cbnz":$=ptr(M.operands[1].value);break;case"pop.w":K&&(R=M.operands.filter(W=>W.value==="pc").length===1);break}switch(U){case"it":A=1;break;case"itt":A=2;break;case"ittt":A=3;break;case"itttt":A=4;break;default:A>0&&A--;break}$!==null&&(a.add($.toString()),d.push($.or(F)),d.sort((W,re)=>W.compare(re))),w=M.next}while(!R);z!==null&&(z.end=B.address.add(B.size),c[D]=z)}let p=Object.keys(c).map(w=>c[w]);p.sort((w,x)=>w.begin.compare(x.begin));let f=c[n.and(l).toString()];p.splice(p.indexOf(f),1),p.unshift(f);let u=new ThumbWriter(t,{pc:e}),g=!1,m=null,E=null;return p.forEach(w=>{let x=new ThumbRelocator(w.begin,u),L=w.begin,D=w.end,F=0;do{if(x.readOne()===0)throw new Error("Unexpected end of block");let B=x.input;L=B.address,F=B.size;let{mnemonic:R}=B,A=L.toString();a.has(A)&&u.putLabel(A);let M=!0;switch(R){case"b":u.putBLabel(ve(B.operands[0])),M=!1;break;case"beq.w":u.putBCondLabelWide("eq",ve(B.operands[0])),M=!1;break;case"bne.w":u.putBCondLabelWide("ne",ve(B.operands[0])),M=!1;break;case"beq":case"bne":case"bgt":u.putBCondLabelWide(R.substr(1),ve(B.operands[0])),M=!1;break;case"cbz":{let U=B.operands;u.putCbzRegLabel(U[0].value,ve(U[1])),M=!1;break}case"cbnz":{let U=B.operands;u.putCbnzRegLabel(U[0].value,ve(U[1])),M=!1;break}case"str":case"str.w":{let U=B.operands[1].value,T=U.disp;if(T===o){m=U.base;let J=m!=="r4"?"r4":"r5",H=["r0","r1","r2","r3",J,"r9","r12","lr"];u.putPushRegs(H),u.putMrsRegReg(J,"apsr-nzcvq"),u.putCallAddressWithArguments(s,[m]),u.putMsrRegReg("apsr-nzcvq",J),u.putPopRegs(H),g=!0,M=!1}else i.has(T)&&U.base===m&&(M=!1);break}case"ldr":{let[U,T]=B.operands;if(T.type==="mem"){let J=T.value;J.base[0]==="r"&&J.disp===Pt&&(E=U.value)}break}case"blx":B.operands[0].value===E&&(u.putLdrRegRegOffset("r0","r0",4),u.putCallAddressWithArguments(s,["r0"]),g=!0,E=null,M=!1);break}M?x.writeAll():x.skipOne()}while(!L.add(F).equals(D));x.dispose()}),u.dispose(),g||Yn(),new NativeFunction(e.or(1),"void",["pointer"],ae)}function kl(t,e,n,r,o,i,s){let c={},a=new Set,l=[n];for(;l.length>0;){let w=l.shift();if(Object.values(c).some(({begin:B,end:R})=>w.compare(B)>=0&&w.compare(R)<0))continue;let L=w.toString(),D={begin:w},F=null,z=!1;do{if(w.equals(r)){z=!0;break}let B;try{B=Instruction.parse(w)}catch(M){if(w.readU32()===0){z=!0;break}else throw M}F=B;let R=c[B.address.toString()];if(R!==void 0){delete c[R.begin.toString()],c[L]=R,R.begin=D.begin,D=null;break}let A=null;switch(B.mnemonic){case"b":A=ptr(B.operands[0].value),z=!0;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":A=ptr(B.operands[0].value);break;case"cbz":case"cbnz":A=ptr(B.operands[1].value);break;case"tbz":case"tbnz":A=ptr(B.operands[2].value);break;case"ret":z=!0;break}A!==null&&(a.add(A.toString()),l.push(A),l.sort((M,U)=>M.compare(U))),w=B.next}while(!z);D!==null&&(D.end=F.address.add(F.size),c[L]=D)}let d=Object.keys(c).map(w=>c[w]);d.sort((w,x)=>w.begin.compare(x.begin));let p=c[n.toString()];d.splice(d.indexOf(p),1),d.unshift(p);let f=new Arm64Writer(t,{pc:e});f.putBLabel("performTransition");let u=e.add(f.offset);f.putPushAllXRegisters(),f.putCallAddressWithArguments(s,["x0"]),f.putPopAllXRegisters(),f.putRet(),f.putLabel("performTransition");let g=!1,m=null,E=null;return d.forEach(w=>{let x=w.end.sub(w.begin).toInt32(),L=new Arm64Relocator(w.begin,f),D;for(;(D=L.readOne())!==0;){let F=L.input,{mnemonic:z}=F,B=F.address.toString();a.has(B)&&f.putLabel(B);let R=!0;switch(z){case"b":f.putBLabel(ve(F.operands[0])),R=!1;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":f.putBCondLabel(z.substr(2),ve(F.operands[0])),R=!1;break;case"cbz":{let A=F.operands;f.putCbzRegLabel(A[0].value,ve(A[1])),R=!1;break}case"cbnz":{let A=F.operands;f.putCbnzRegLabel(A[0].value,ve(A[1])),R=!1;break}case"tbz":{let A=F.operands;f.putTbzRegImmLabel(A[0].value,A[1].value.valueOf(),ve(A[2])),R=!1;break}case"tbnz":{let A=F.operands;f.putTbnzRegImmLabel(A[0].value,A[1].value.valueOf(),ve(A[2])),R=!1;break}case"str":{let A=F.operands,M=A[0].value,U=A[1].value,T=U.disp;M==="xzr"&&T===o?(m=U.base,f.putPushRegReg("x0","lr"),f.putMovRegReg("x0",m),f.putBlImm(u),f.putPopRegReg("x0","lr"),g=!0,R=!1):i.has(T)&&U.base===m&&(R=!1);break}case"ldr":{let A=F.operands,M=A[1].value;M.base[0]==="x"&&M.disp===Pt&&(E=A[0].value);break}case"blr":F.operands[0].value===E&&(f.putLdrRegRegOffset("x0","x0",8),f.putCallAddressWithArguments(s,["x0"]),g=!0,E=null,R=!1);break}if(R?L.writeAll():L.skipOne(),D===x)break}L.dispose()}),f.dispose(),g||Yn(),new NativeFunction(e,"void",["pointer"],ae)}function Yn(){throw new Error("Unable to parse ART internals; please file a bug")}function Ll(t){let e=t["art::ArtMethod::PrettyMethod"];e!==void 0&&(Interceptor.attach(e.impl,me.hooks.ArtMethod.prettyMethod),Interceptor.flush())}function ve(t){return ptr(t.value).toString()}function Ml(t,e){return new NativeFunction(t,"pointer",e,ae)}function Ol(t,e){let n=new NativeFunction(t,"void",["pointer"].concat(e),ae);return function(){let r=Memory.alloc(N);return n(r,...arguments),r.readPointer()}}function Ct(t,e){let{arch:n}=Process;switch(n){case"ia32":case"arm64":{let r;n==="ia32"?r=Ke(64,s=>{let c=1+e.length,a=c*4;s.putSubRegImm("esp",a);for(let l=0;l!==c;l++){let d=l*4;s.putMovRegRegOffsetPtr("eax","esp",a+4+d),s.putMovRegOffsetPtrReg("esp",d,"eax")}s.putCallAddress(t),s.putAddRegImm("esp",a-4),s.putRet()}):r=Ke(32,s=>{s.putMovRegReg("x8","x0"),e.forEach((c,a)=>{s.putMovRegReg("x"+a,"x"+(a+1))}),s.putLdrRegAddress("x7",t),s.putBrReg("x7")});let o=new NativeFunction(r,"void",["pointer"].concat(e),ae),i=function(...s){o(...s)};return i.handle=r,i.impl=t,i}default:{let r=new NativeFunction(t,"void",["pointer"].concat(e),ae);return r.impl=t,r}}}var Mt=class{constructor(){this.handle=Memory.alloc(ct)}dispose(){let[e,n]=this._getData();n||Y().$delete(e)}disposeToString(){let e=this.toString();return this.dispose(),e}toString(){let[e]=this._getData();return e.readUtf8String()}_getData(){let e=this.handle,n=(e.readU8()&1)===0;return[n?e.add(1):e.add(2*N).readPointer(),n]}},Fn=class{$delete(){this.dispose(),Y().$delete(this)}constructor(e,n){this.handle=e,this._begin=e,this._end=e.add(N),this._storage=e.add(2*N),this._elementSize=n}init(){this.begin=NULL,this.end=NULL,this.storage=NULL}dispose(){Y().$delete(this.begin)}get begin(){return this._begin.readPointer()}set begin(e){this._begin.writePointer(e)}get end(){return this._end.readPointer()}set end(e){this._end.writePointer(e)}get storage(){return this._storage.readPointer()}set storage(e){this._storage.writePointer(e)}get size(){return this.end.sub(this.begin).toInt32()/this._elementSize}},lt=class t extends Fn{static $new(){let e=new t(Y().$new(oc));return e.init(),e}constructor(e){super(e,N)}get handles(){let e=[],n=this.begin,r=this.end;for(;!n.equals(r);)e.push(n.readPointer()),n=n.add(N);return e}},Pl=0,go=N,yo=go+4,Rl=-1,Ot=class t{$delete(){this.dispose(),Y().$delete(this)}constructor(e){this.handle=e,this._link=e.add(Pl),this._numberOfReferences=e.add(go)}init(e,n){this.link=e,this.numberOfReferences=n}dispose(){}get link(){return new t(this._link.readPointer())}set link(e){this._link.writePointer(e)}get numberOfReferences(){return this._numberOfReferences.readS32()}set numberOfReferences(e){this._numberOfReferences.writeS32(e)}},bo=Bl(yo),Eo=bo+N,jl=Eo+N,dt=class t extends Ot{static $new(e,n){let r=new t(Y().$new(jl));return r.init(e,n),r}constructor(e){super(e),this._self=e.add(bo),this._currentScope=e.add(Eo);let o=(64-N-4-4)/4;this._scopeLayout=at.layoutForCapacity(o),this._topHandleScopePtr=null}init(e,n){let r=e.add(We(n).offset.topHandleScope);this._topHandleScopePtr=r,super.init(r.readPointer(),Rl),this.self=e,this.currentScope=at.$new(this._scopeLayout),r.writePointer(this)}dispose(){this._topHandleScopePtr.writePointer(this.link);let e;for(;(e=this.currentScope)!==null;){let n=e.link;e.$delete(),this.currentScope=n}}get self(){return this._self.readPointer()}set self(e){this._self.writePointer(e)}get currentScope(){let e=this._currentScope.readPointer();return e.isNull()?null:new at(e,this._scopeLayout)}set currentScope(e){this._currentScope.writePointer(e)}newHandle(e){return this.currentScope.newHandle(e)}},at=class t extends Ot{static $new(e){let n=new t(Y().$new(e.size),e);return n.init(),n}constructor(e,n){super(e);let{offset:r}=n;this._refsStorage=e.add(r.refsStorage),this._pos=e.add(r.pos),this._layout=n}init(){super.init(NULL,this._layout.numberOfReferences),this.pos=0}get pos(){return this._pos.readU32()}set pos(e){this._pos.writeU32(e)}newHandle(e){let n=this.pos,r=this._refsStorage.add(n*4);return r.writeS32(e.toInt32()),this.pos=n+1,r}static layoutForCapacity(e){let n=yo,r=n+e*4;return{size:r+4,numberOfReferences:e,offset:{refsStorage:n,pos:r}}}},Fl={arm:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let i=[26625,18947,17041,53505,19202,18200,18288,48896],s=i.length*2,c=s+4,a=c+4;return Memory.patchCode(r,a,function(l){i.forEach((d,p)=>{l.add(p*2).writeU16(d)}),l.add(s).writeS32(t),l.add(c).writePointer(o)}),r.or(1)},arm64:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let i=[3107979265,402653378,1795293247,1409286241,1476395139,3592355936,3596551104],s=i.length*4,c=s+4,a=c+8;return Memory.patchCode(r,a,function(l){i.forEach((d,p)=>{l.add(p*4).writeU32(d)}),l.add(s).writeS32(t),l.add(c).writePointer(o)}),r}};function Xn(t,e){return(Fl[Process.arch]||Dl)(t,e)}function Dl(t,e){return new NativeCallback(n=>{n.readS32()===t&&e(n)},"void",["pointer","pointer"])}function Bl(t){let e=t%N;return e!==0?t+N-e:t}var Ul=4,{pointerSize:X}=Process,zl=256,Vl=65536,Jl=131072,Gl=33554432,$l=67108864,Hl=134217728,ze={exceptions:"propagate"},Io=ge(id),Zl=ge(ad),Kl=ge(nd),er=null,tr=!1,Dt=new Map,pt=new Map;function Le(){return er===null&&(er=Wl()),er}function Wl(){let t=Process.enumerateModules().filter(a=>/jvm.(dll|dylib|so)$/.test(a.name));if(t.length===0)return null;let e=t[0],n={flavor:"jvm"},r=Process.platform==="windows"?[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]],"VMThread::execute":["VMThread::execute","void",["pointer"]],"Method::size":["Method::size","int",["int"]],"Method::set_native_function":["Method::set_native_function","void",["pointer","pointer","int"]],"Method::clear_native_function":["Method::clear_native_function","void",["pointer"]],"Method::jmethod_id":["Method::jmethod_id","pointer",["pointer"]],"ClassLoaderDataGraph::classes_do":["ClassLoaderDataGraph::classes_do","void",["pointer"]],"NMethodSweeper::sweep_code_cache":["NMethodSweeper::sweep_code_cache","void",[]],"OopMapCache::flush_obsolete_entries":["OopMapCache::flush_obsolete_entries","void",["pointer"]]},variables:{"VM_RedefineClasses::`vftable'":function(a){this.vtableRedefineClasses=a},"VM_RedefineClasses::doit":function(a){this.redefineClassesDoIt=a},"VM_RedefineClasses::doit_prologue":function(a){this.redefineClassesDoItPrologue=a},"VM_RedefineClasses::doit_epilogue":function(a){this.redefineClassesDoItEpilogue=a},"VM_RedefineClasses::allow_nested_vm_operations":function(a){this.redefineClassesAllow=a},"NMethodSweeper::_traversals":function(a){this.traversals=a},"NMethodSweeper::_should_sweep":function(a){this.shouldSweep=a}},optionals:[]}]:[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],_ZN6Method4sizeEb:["Method::size","int",["int"]],_ZN6Method19set_native_functionEPhb:["Method::set_native_function","void",["pointer","pointer","int"]],_ZN6Method21clear_native_functionEv:["Method::clear_native_function","void",["pointer"]],_ZN6Method24restore_unshareable_infoEP10JavaThread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method24restore_unshareable_infoEP6Thread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method11link_methodERK12methodHandleP10JavaThread:["Method::link_method","void",["pointer","pointer","pointer"]],_ZN6Method10jmethod_idEv:["Method::jmethod_id","pointer",["pointer"]],_ZN6Method10clear_codeEv:function(a){let l=new NativeFunction(a,"void",["pointer"],ze);this["Method::clear_code"]=function(d){l(d)}},_ZN6Method10clear_codeEb:function(a){let l=new NativeFunction(a,"void",["pointer","int"],ze),d=0;this["Method::clear_code"]=function(p){l(p,d)}},_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass:["VM_RedefineClasses::mark_dependent_code","void",["pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeEv:["VM_RedefineClasses::flush_dependent_code","void",[]],_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN19ResolvedMethodTable21adjust_method_entriesEPb:["ResolvedMethodTable::adjust_method_entries","void",["pointer"]],_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb:["MemberNameTable::adjust_method_entries","void",["pointer","pointer","pointer"]],_ZN17ConstantPoolCache21adjust_method_entriesEPb:function(a){let l=new NativeFunction(a,"void",["pointer","pointer"],ze);this["ConstantPoolCache::adjust_method_entries"]=function(d,p,f){l(d,f)}},_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb:function(a){let l=new NativeFunction(a,"void",["pointer","pointer","pointer"],ze);this["ConstantPoolCache::adjust_method_entries"]=function(d,p,f){l(d,p,f)}},_ZN20ClassLoaderDataGraph10classes_doEP12KlassClosure:["ClassLoaderDataGraph::classes_do","void",["pointer"]],_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb:["ClassLoaderDataGraph::clean_deallocate_lists","void",["int"]],_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_:["JavaThread::thread_from_jni_environment","pointer",["pointer"]],_ZN8VMThread7executeEP12VM_Operation:["VMThread::execute","void",["pointer"]],_ZN11OopMapCache22flush_obsolete_entriesEv:["OopMapCache::flush_obsolete_entries","void",["pointer"]],_ZN14NMethodSweeper11force_sweepEv:["NMethodSweeper::force_sweep","void",[]],_ZN14NMethodSweeper16sweep_code_cacheEv:["NMethodSweeper::sweep_code_cache","void",[]],_ZN14NMethodSweeper17sweep_in_progressEv:["NMethodSweeper::sweep_in_progress","bool",[]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]]},variables:{_ZN18VM_RedefineClasses14_the_class_oopE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses10_the_classE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass:function(a){this.doKlass=a},_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass:function(a){this.doKlass=a},_ZTV18VM_RedefineClasses:function(a){this.vtableRedefineClasses=a},_ZN18VM_RedefineClasses4doitEv:function(a){this.redefineClassesDoIt=a},_ZN18VM_RedefineClasses13doit_prologueEv:function(a){this.redefineClassesDoItPrologue=a},_ZN18VM_RedefineClasses13doit_epilogueEv:function(a){this.redefineClassesDoItEpilogue=a},_ZN18VM_RedefineClassesD0Ev:function(a){this.redefineClassesDispose0=a},_ZN18VM_RedefineClassesD1Ev:function(a){this.redefineClassesDispose1=a},_ZNK18VM_RedefineClasses26allow_nested_vm_operationsEv:function(a){this.redefineClassesAllow=a},_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream:function(a){this.redefineClassesOnError=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread:function(a){this.createNewDefaultVtableIndices=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread:function(a){this.createNewDefaultVtableIndices=a},_ZN19Abstract_VM_Version19jre_release_versionEv:function(a){let d=new NativeFunction(a,"pointer",[],ze)().readCString();this.version=d.startsWith("1.8")?8:d.startsWith("9.")?9:parseInt(d.slice(0,2),10),this.versionS=d},_ZN14NMethodSweeper11_traversalsE:function(a){this.traversals=a},_ZN14NMethodSweeper21_sweep_fractions_leftE:function(a){this.fractions=a},_ZN14NMethodSweeper13_should_sweepE:function(a){this.shouldSweep=a}},optionals:["_ZN6Method24restore_unshareable_infoEP10JavaThread","_ZN6Method24restore_unshareable_infoEP6Thread","_ZN6Method11link_methodERK12methodHandleP10JavaThread","_ZN6Method10clear_codeEv","_ZN6Method10clear_codeEb","_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass","_ZN18VM_RedefineClasses20flush_dependent_codeEv","_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread","_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread","_ZN19ResolvedMethodTable21adjust_method_entriesEPb","_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb","_ZN17ConstantPoolCache21adjust_method_entriesEPb","_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb","_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb","_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_","_ZN14NMethodSweeper11force_sweepEv","_ZN14NMethodSweeper17sweep_in_progressEv","_ZN18VM_RedefineClasses14_the_class_oopE","_ZN18VM_RedefineClasses10_the_classE","_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass","_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass","_ZN18VM_RedefineClassesD0Ev","_ZN18VM_RedefineClassesD1Ev","_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread","_ZN14NMethodSweeper21_sweep_fractions_leftE"]}],o=[];if(r.forEach(function(a){let l=a.module,d=a.functions||{},p=a.variables||{},f=new Set(a.optionals||[]),u=l.enumerateExports().reduce(function(m,E){return m[E.name]=E,m},{}),g=l.enumerateSymbols().reduce(function(m,E){return m[E.name]=E,m},u);Object.keys(d).forEach(function(m){let E=g[m];if(E!==void 0){let w=d[m];typeof w=="function"?w.call(n,E.address):n[w[0]]=new NativeFunction(E.address,w[1],w[2],ze)}else f.has(m)||o.push(m)}),Object.keys(p).forEach(function(m){let E=g[m];E!==void 0?p[m].call(n,E.address):f.has(m)||o.push(m)})}),o.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+o.join(", "));let i=Memory.alloc(X),s=Memory.alloc(Ul);if(ye("JNI_GetCreatedJavaVMs",n.JNI_GetCreatedJavaVMs(i,1,s)),s.readInt()===0)return null;n.vm=i.readPointer();let c=Process.platform==="windows"?{$new:["??2@YAPEAX_K@Z","pointer",["ulong"]],$delete:["??3@YAXPEAX@Z","void",["pointer"]]}:{$new:["_Znwm","pointer",["ulong"]],$delete:["_ZdlPv","void",["pointer"]]};for(let[a,[l,d,p]]of Object.entries(c)){let f=Module.findGlobalExportByName(l);if(f===null&&(f=DebugSymbol.fromName(l).address,f.isNull()))throw new Error(`unable to find C++ allocator API, missing: '${l}'`);n[a]=new NativeFunction(f,d,p,ze)}return n.jvmti=ql(n),n["JavaThread::thread_from_jni_environment"]===void 0&&(n["JavaThread::thread_from_jni_environment"]=Yl(n)),n}function ql(t){let e=new ke(t),n;return e.perform(()=>{let r=e.tryGetEnvHandle(bt.v1_0);if(r===null)throw new Error("JVMTI not available");n=new Oe(r,e);let o=Memory.alloc(8);o.writeU64(Et.canTagObjects);let i=n.addCapabilities(o);ye("getEnvJvmti::AddCapabilities",i)}),n}var Ql={x64:Xl};function Yl(t){let e=null,n=Ql[Process.arch];if(n!==void 0){let o=new ke(t).perform(i=>i.handle.readPointer().add(6*X).readPointer());e=Pe(o,n,{limit:11})}return e===null?()=>{throw new Error("Unable to make thread_from_jni_environment() helper for the current architecture")}:r=>r.add(e)}function Xl(t){if(t.mnemonic!=="lea")return null;let{base:e,disp:n}=t.operands[1].value;return e==="rdi"&&n<0?n:null}function xo(t,e){}var nr=class{constructor(e){this.methodId=e,this.method=e.readPointer(),this.originalMethod=null,this.newMethod=null,this.resolved=null,this.impl=null,this.key=e.toString(16)}replace(e,n,r,o,i){let{key:s}=this,c=pt.get(s);c!==void 0&&(pt.delete(s),this.method=c.method,this.originalMethod=c.originalMethod,this.newMethod=c.newMethod,this.resolved=c.resolved),this.impl=e,Dt.set(s,this),vo(o)}revert(e){let{key:n}=this;Dt.delete(n),pt.set(n,this),vo(e)}resolveTarget(e,n,r,o){let{resolved:i,originalMethod:s,methodId:c}=this;if(i!==null)return i;if(s===null)return c;s.oldMethod.vtableIndexPtr.writeS32(-2);let l=Memory.alloc(X);return l.writePointer(this.method),this.resolved=l,l}};function vo(t){tr||(tr=!0,Script.nextTick(ed,t))}function ed(t){let e=new Map(Dt),n=new Map(pt);Dt.clear(),pt.clear(),tr=!1,t.perform(r=>{let o=Le(),i=o["JavaThread::thread_from_jni_environment"](r.handle),s=!1;Co(()=>{e.forEach(c=>{let{method:a,originalMethod:l,impl:d,methodId:p,newMethod:f}=c;l===null?(c.originalMethod=To(a),c.newMethod=rd(a,d,i),So(c.newMethod,p,i)):o["Method::set_native_function"](f.method,d,0)}),n.forEach(c=>{let{originalMethod:a,methodId:l,newMethod:d}=c;if(a!==null){od(a);let p=a.oldMethod;p.oldMethod=d,So(p,l,i),s=!0}})}),s&&td(r.handle)})}function td(t){let{fractions:e,shouldSweep:n,traversals:r,"NMethodSweeper::sweep_code_cache":o,"NMethodSweeper::sweep_in_progress":i,"NMethodSweeper::force_sweep":s,JVM_Sleep:c}=Le();if(s!==void 0)Thread.sleep(.05),s(),Thread.sleep(.05),s();else{let a=r.readS64(),l=a+2;for(;l>a;)e.writeS32(1),c(t,NULL,50),i()||Co(()=>{Thread.sleep(.05)}),n.readU8()===0&&(e.writeS32(1),o()),a=r.readS64()}}function Co(t,e,n){let{execute:r,vtable:o,vtableSize:i,doItOffset:s,prologueOffset:c,epilogueOffset:a}=Kl(),l=Memory.dup(o,i),d=Memory.alloc(X*25);d.writePointer(l);let p=new NativeCallback(t,"void",["pointer"]);l.add(s).writePointer(p);let f=null;e!==void 0&&(f=new NativeCallback(e,"int",["pointer"]),l.add(c).writePointer(f));let u=null;n!==void 0&&(u=new NativeCallback(n,"void",["pointer"]),l.add(a).writePointer(u)),r(d)}function nd(){let{vtableRedefineClasses:t,redefineClassesDoIt:e,redefineClassesDoItPrologue:n,redefineClassesDoItEpilogue:r,redefineClassesOnError:o,redefineClassesAllow:i,redefineClassesDispose0:s,redefineClassesDispose1:c,"VMThread::execute":a}=Le(),l=t.add(2*X),d=15*X,p=Memory.dup(l,d),f=new NativeCallback(()=>{},"void",["pointer"]),u,g,m;for(let E=0;E!==d;E+=X){let w=p.add(E),x=w.readPointer();o!==void 0&&x.equals(o)||s!==void 0&&x.equals(s)||c!==void 0&&x.equals(c)?w.writePointer(f):x.equals(e)?u=E:x.equals(n)?(g=E,w.writePointer(i)):x.equals(r)&&(m=E,w.writePointer(f))}return{execute:a,emptyCallback:f,vtable:p,vtableSize:d,doItOffset:u,prologueOffset:g,epilogueOffset:m}}function Ao(t){return new nr(t)}function So(t,e,n){let{method:r,oldMethod:o}=t,i=Le();t.methodsArray.add(t.methodIndex*X).writePointer(r),t.vtableIndex>=0&&t.vtable.add(t.vtableIndex*X).writePointer(r),e.writePointer(r),o.accessFlagsPtr.writeU32((o.accessFlags|Vl|Jl)>>>0);let s=i["OopMapCache::flush_obsolete_entries"];if(s!==void 0){let{oopMapCache:g}=t;g.isNull()||s(g)}let c=i["VM_RedefineClasses::mark_dependent_code"],a=i["VM_RedefineClasses::flush_dependent_code"];c!==void 0?(c(NULL,t.instanceKlass),a()):a(NULL,t.instanceKlass,n);let l=Memory.alloc(1);l.writeU8(1),i["ConstantPoolCache::adjust_method_entries"](t.cache,t.instanceKlass,l);let d=Memory.alloc(3*X),p=Memory.alloc(X);p.writePointer(i.doKlass),d.writePointer(p),d.add(X).writePointer(n),d.add(2*X).writePointer(n),i.redefineClass!==void 0&&i.redefineClass.writePointer(t.instanceKlass),i["ClassLoaderDataGraph::classes_do"](d);let f=i["ResolvedMethodTable::adjust_method_entries"];if(f!==void 0)f(l);else{let{memberNames:g}=t;if(!g.isNull()){let m=i["MemberNameTable::adjust_method_entries"];m!==void 0&&m(g,t.instanceKlass,l)}}let u=i["ClassLoaderDataGraph::clean_deallocate_lists"];u!==void 0&&u(0)}function rd(t,e,n){let r=Le(),o=To(t);o.constPtr.writePointer(o.const);let i=(o.accessFlags|zl|Gl|$l|Hl)>>>0;if(o.accessFlagsPtr.writeU32(i),o.signatureHandler.writePointer(NULL),o.adapter.writePointer(NULL),o.i2iEntry.writePointer(NULL),r["Method::clear_code"](o.method),o.dataPtr.writePointer(NULL),o.countersPtr.writePointer(NULL),o.stackmapPtr.writePointer(NULL),r["Method::clear_native_function"](o.method),r["Method::set_native_function"](o.method,e,0),r["Method::restore_unshareable_info"](o.method,n),r.version>=17){let s=Memory.alloc(2*X);s.writePointer(o.method),s.add(X).writePointer(n),r["Method::link_method"](o.method,s,n)}return o}function To(t){let e=Io(),n=t.add(e.method.constMethodOffset).readPointer(),r=n.add(e.constMethod.sizeOffset).readS32()*X,o=Memory.alloc(r+e.method.size);Memory.copy(o,n,r);let i=o.add(r);Memory.copy(i,t,e.method.size);let s=wo(i,o,r),c=wo(t,n,r);return s.oldMethod=c,s}function wo(t,e,n){let r=Le(),o=Io(),i=t.add(o.method.constMethodOffset),s=t.add(o.method.methodDataOffset),c=t.add(o.method.methodCountersOffset),a=t.add(o.method.accessFlagsOffset),l=a.readU32(),d=o.getAdapterPointer(t,e),p=t.add(o.method.i2iEntryOffset),f=t.add(o.method.signatureHandlerOffset),u=e.add(o.constMethod.constantPoolOffset).readPointer(),g=e.add(o.constMethod.stackmapDataOffset),m=u.add(o.constantPool.instanceKlassOffset).readPointer(),E=u.add(o.constantPool.cacheOffset).readPointer(),w=Zl(),x=m.add(w.methodsOffset).readPointer(),L=x.readS32(),D=x.add(X),F=e.add(o.constMethod.methodIdnumOffset).readU16(),z=t.add(o.method.vtableIndexOffset),B=z.readS32(),R=m.add(w.vtableOffset),A=m.add(w.oopMapCacheOffset).readPointer(),M=r.version>=10?m.add(w.memberNamesOffset).readPointer():NULL;return{method:t,methodSize:o.method.size,const:e,constSize:n,constPtr:i,dataPtr:s,countersPtr:c,stackmapPtr:g,instanceKlass:m,methodsArray:D,methodsCount:L,methodIndex:F,vtableIndex:B,vtableIndexPtr:z,vtable:R,accessFlags:l,accessFlagsPtr:a,adapter:d,i2iEntry:p,signatureHandler:f,memberNames:M,cache:E,oopMapCache:A}}function od(t){let{oldMethod:e}=t;e.accessFlagsPtr.writeU32(e.accessFlags),e.vtableIndexPtr.writeS32(e.vtableIndex)}function id(){let t=Le(),{version:e}=t,n;e>=17?n="method:early":e>=9&&e<=16?n="const-method":n="method:late";let o=t["Method::size"](1)*X,i=X,s=2*X,c=3*X,a=4*X,l=n==="method:early"?X:0,d=a+l,p=d+4,f=p+4+8,u=f+X,g=l!==0?a:u,m=o-2*X,E=o-X,w=8,x=w+X,L=x+X,D=n==="const-method"?X:0,F=L+D,z=F+14,B=2*X,R=3*X;return{getAdapterPointer:D!==0?function(M,U){return U.add(L)}:function(M,U){return M.add(g)},method:{size:o,constMethodOffset:i,methodDataOffset:s,methodCountersOffset:c,accessFlagsOffset:d,vtableIndexOffset:p,i2iEntryOffset:f,nativeFunctionOffset:m,signatureHandlerOffset:E},constMethod:{constantPoolOffset:w,stackmapDataOffset:x,sizeOffset:F,methodIdnumOffset:z},constantPool:{cacheOffset:B,instanceKlassOffset:R}}}var sd={x64:cd};function ad(){let{version:t,createNewDefaultVtableIndices:e}=Le(),n=sd[Process.arch];if(n===void 0)throw new Error(`Missing vtable offset parser for ${Process.arch}`);let r=Pe(e,n,{limit:32});if(r===null)throw new Error("Unable to deduce vtable offset");let o=t>=10&&t<=11||t>=15?17:18,i=r-7*X,s=r-17*X,c=r-o*X;return{vtableOffset:r,methodsOffset:i,memberNamesOffset:s,oopMapCacheOffset:c}}function cd(t){if(t.mnemonic!=="mov")return null;let e=t.operands[0];if(e.type!=="mem")return null;let{value:n}=e;if(n.scale!==1)return null;let{disp:r}=n;return r<256?null:r+16}var No=Y;try{ut()}catch{No=Le}var ko=No;var ld=`#include <json-glib/json-glib.h>
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

  if (art_api.available)
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
                       JNIEnv * env,
                       jvmtiEnv * jvmti)
{
  gchar * result;
  GPatternSpec * class_pattern, * method_pattern;
  GHashTable * groups;
  gpointer * ef = env->functions;
  jobject (* new_global_ref) (JNIEnv *, jobject) = ef[21];
  void (* delete_local_ref) (JNIEnv *, jobject) = ef[23];
  jboolean (* is_same_object) (JNIEnv *, jobject, jobject) = ef[24];
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
`,dd=/(.+)!([^/]+)\/?([isu]+)?/,Ae=null,Mo=null,Ve=class t{static build(e,n){return Lo(n),Mo(e,n,r=>new t(Ae.new(e,r,n)))}static enumerateMethods(e,n,r){Lo(r);let o=e.match(dd);if(o===null)throw new Error("Invalid query; format is: class!method -- see documentation of Java.enumerateMethods(query) for details");let i=Memory.allocUtf8String(o[1]),s=Memory.allocUtf8String(o[2]),c=!1,a=!1,l=!1,d=o[3];d!==void 0&&(c=d.indexOf("s")!==-1,a=d.indexOf("i")!==-1,l=d.indexOf("u")!==-1);let p;if(n.flavor==="jvm"){let f=Ae.enumerateMethodsJvm(i,s,qe(c),qe(a),qe(l),r,n.jvmti);try{p=JSON.parse(f.readUtf8String()).map(u=>{let g=ptr(u.loader);return u.loader=g.isNull()?null:g,u})}finally{Ae.dealloc(f)}}else Ce(r.vm,r,f=>{let u=Ae.enumerateMethodsArt(i,s,qe(c),qe(a),qe(l));try{let g=n["art::JavaVMExt::AddGlobalRef"],{vm:m}=n;p=JSON.parse(u.readUtf8String()).map(E=>{let w=E.loader;return E.loader=w!==0?g(m,f,ptr(w)):null,E})}finally{Ae.dealloc(u)}});return p}constructor(e){this.handle=e}has(e){return Ae.has(this.handle,Memory.allocUtf8String(e))!==0}find(e){return Ae.find(this.handle,Memory.allocUtf8String(e)).readUtf8String()}list(){let e=Ae.list(this.handle);try{return JSON.parse(e.readUtf8String())}finally{Ae.dealloc(e)}}};function Lo(t){Ae===null&&(Ae=ud(t),Mo=pd(Ae,t.vm))}function ud(t){let{pointerSize:e}=Process,n=8,r=e,o=6*e,i=10*4+5*e,s=n+r+o+i,a=Memory.alloc(s),l=a.add(n),d=l.add(r),{getDeclaredMethods:p,getDeclaredFields:f}=t.javaLangClass(),u=t.javaLangReflectMethod(),g=t.javaLangReflectField(),m=d;[p,f,u.getName,u.getModifiers,g.getName,g.getModifiers].forEach(z=>{m=m.writePointer(z).add(e)});let E=d.add(o),{vm:w}=t,x=zn(w);if(x!==null){let z=x.offset,B=Se(w),R=Rt(w),A=E;[1,z.ifields,z.methods,z.sfields,z.copiedMethodsOffset,B.size,B.offset.accessFlags,R.size,R.offset.accessFlags,4294967295].forEach(U=>{A=A.writeUInt(U).add(4)});let M=Y();[M.artClassLinker.address,M["art::ClassLinker::VisitClasses"],M["art::mirror::Class::GetDescriptor"],M["art::ArtMethod::PrettyMethod"],Process.getModuleByName("libc.so").getExportByName("free")].forEach((U,T)=>{U===void 0&&(U=NULL),A=A.writePointer(U).add(e)})}let L=new CModule(ld,{lock:a,models:l,java_api:d,art_api:E}),D={exceptions:"propagate"},F={exceptions:"propagate",scheduling:"exclusive"};return{handle:L,mode:x!==null?"full":"basic",new:new NativeFunction(L.model_new,"pointer",["pointer","pointer","pointer"],D),has:new NativeFunction(L.model_has,"bool",["pointer","pointer"],F),find:new NativeFunction(L.model_find,"pointer",["pointer","pointer"],F),list:new NativeFunction(L.model_list,"pointer",["pointer"],F),enumerateMethodsArt:new NativeFunction(L.enumerate_methods_art,"pointer",["pointer","pointer","bool","bool","bool"],D),enumerateMethodsJvm:new NativeFunction(L.enumerate_methods_jvm,"pointer",["pointer","pointer","bool","bool","bool","pointer","pointer"],D),dealloc:new NativeFunction(L.dealloc,"void",["pointer"],F)}}function pd(t,e){if(t.mode==="basic")return fd;let n=Y()["art::JavaVMExt::DecodeGlobal"];return function(r,o,i){let s;return Ce(e,o,c=>{let a=n(e,c,r);s=i(a)}),s}}function fd(t,e,n){return n(NULL)}function qe(t){return t?1:0}var ft=class{constructor(e,n){this.items=new Map,this.capacity=e,this.destroy=n}dispose(e){let{items:n,destroy:r}=this;n.forEach(o=>{r(o,e)}),n.clear()}get(e){let{items:n}=this,r=n.get(e);return r!==void 0&&(n.delete(e),n.set(e,r)),r}set(e,n,r){let{items:o}=this,i=o.get(e);if(i!==void 0)o.delete(e),this.destroy(i,r);else if(o.size===this.capacity){let s=o.keys().next().value,c=o.get(s);o.delete(s),this.destroy(c,r)}o.set(e,n)}};var ht=1,ir=256,Oo=65536,hd=305419896,Po=32,Ro=12,jo=8,Fo=8,Do=4,Bo=4,Uo=12,md=0,_d=1,gd=2,yd=3,bd=4,Ed=5,vd=6,Sd=4096,wd=4097,Id=4099,xd=8192,Cd=8193,Ad=8194,Td=8195,Nd=8196,kd=8198,Ld=24,Md=28,Od=2,Pd=24,zo=v.from([3,0,7,14,0]),rr="Ldalvik/annotation/Throws;",Rd=v.from([0]);function jd(t){let e=new sr,n=Object.assign({},t);return e.addClass(n),e.build()}var sr=class{constructor(){this.classes=[]}addClass(e){this.classes.push(e)}build(){let e=Bd(this.classes),{classes:n,interfaces:r,fields:o,methods:i,protos:s,parameters:c,annotationDirectories:a,annotationSets:l,throwsAnnotations:d,types:p,strings:f}=e,u=0,g=0,m=8,E=12,w=20,x=112;u+=x;let L=u,D=f.length*Bo;u+=D;let F=u,z=p.length*Do;u+=z;let B=u,R=s.length*Ro;u+=R;let A=u,M=o.length*jo;u+=M;let U=u,T=i.length*Fo;u+=T;let J=u,H=n.length*Po;u+=H;let K=u,$=l.map(O=>{let G=u;return O.offset=G,u+=4+O.items.length*4,G}),W=n.reduce((O,G)=>(G.classData.constructorMethods.forEach(oe=>{let[,se,ie]=oe;(se&ir)===0&&ie>=0&&(oe.push(u),O.push({offset:u,superConstructor:ie}),u+=Pd)}),O),[]);a.forEach(O=>{O.offset=u,u+=16+O.methods.length*8});let re=r.map(O=>{u=or(u,4);let G=u;return O.offset=G,u+=4+2*O.types.length,G}),de=c.map(O=>{u=or(u,4);let G=u;return O.offset=G,u+=4+2*O.types.length,G}),h=[],_=f.map(O=>{let G=u,Q=v.from(we(O.length)),oe=v.from(O,"utf8"),se=v.concat([Q,oe,Rd]);return h.push(se),u+=se.length,G}),b=W.map(O=>{let G=u;return u+=zo.length,G}),S=d.map(O=>{let G=Dd(O);return O.offset=u,u+=G.length,G}),y=n.map((O,G)=>{O.classData.offset=u;let Q=Fd(O);return u+=Q.length,Q}),C=0,V=0;u=or(u,4);let j=u,ne=r.length+c.length,Z=4+(o.length>0?1:0)+2+l.length+W.length+a.length+(ne>0?1:0)+1+b.length+d.length+n.length+1,q=4+Z*Uo;u+=q;let le=u-K,ue=u,k=v.alloc(ue);k.write(`dex
035`),k.writeUInt32LE(ue,32),k.writeUInt32LE(x,36),k.writeUInt32LE(hd,40),k.writeUInt32LE(C,44),k.writeUInt32LE(V,48),k.writeUInt32LE(j,52),k.writeUInt32LE(f.length,56),k.writeUInt32LE(L,60),k.writeUInt32LE(p.length,64),k.writeUInt32LE(F,68),k.writeUInt32LE(s.length,72),k.writeUInt32LE(B,76),k.writeUInt32LE(o.length,80),k.writeUInt32LE(o.length>0?A:0,84),k.writeUInt32LE(i.length,88),k.writeUInt32LE(U,92),k.writeUInt32LE(n.length,96),k.writeUInt32LE(J,100),k.writeUInt32LE(le,104),k.writeUInt32LE(K,108),_.forEach((O,G)=>{k.writeUInt32LE(O,L+G*Bo)}),p.forEach((O,G)=>{k.writeUInt32LE(O,F+G*Do)}),s.forEach((O,G)=>{let[Q,oe,se]=O,ie=B+G*Ro;k.writeUInt32LE(Q,ie),k.writeUInt32LE(oe,ie+4),k.writeUInt32LE(se!==null?se.offset:0,ie+8)}),o.forEach((O,G)=>{let[Q,oe,se]=O,ie=A+G*jo;k.writeUInt16LE(Q,ie),k.writeUInt16LE(oe,ie+2),k.writeUInt32LE(se,ie+4)}),i.forEach((O,G)=>{let[Q,oe,se]=O,ie=U+G*Fo;k.writeUInt16LE(Q,ie),k.writeUInt16LE(oe,ie+2),k.writeUInt32LE(se,ie+4)}),n.forEach((O,G)=>{let{interfaces:Q,annotationsDirectory:oe}=O,se=Q!==null?Q.offset:0,ie=oe!==null?oe.offset:0,et=0,Ie=J+G*Po;k.writeUInt32LE(O.index,Ie),k.writeUInt32LE(O.accessFlags,Ie+4),k.writeUInt32LE(O.superClassIndex,Ie+8),k.writeUInt32LE(se,Ie+12),k.writeUInt32LE(O.sourceFileIndex,Ie+16),k.writeUInt32LE(ie,Ie+20),k.writeUInt32LE(O.classData.offset,Ie+24),k.writeUInt32LE(et,Ie+28)}),l.forEach((O,G)=>{let{items:Q}=O,oe=$[G];k.writeUInt32LE(Q.length,oe),Q.forEach((se,ie)=>{k.writeUInt32LE(se.offset,oe+4+ie*4)})}),W.forEach((O,G)=>{let{offset:Q,superConstructor:oe}=O,se=1,ie=1,et=1,Ie=0,gt=4;k.writeUInt16LE(se,Q),k.writeUInt16LE(ie,Q+2),k.writeUInt16LE(et,Q+4),k.writeUInt16LE(Ie,Q+6),k.writeUInt32LE(b[G],Q+8),k.writeUInt32LE(gt,Q+12),k.writeUInt16LE(4208,Q+16),k.writeUInt16LE(oe,Q+18),k.writeUInt16LE(0,Q+20),k.writeUInt16LE(14,Q+22)}),a.forEach(O=>{let G=O.offset,Q=0,oe=0,se=O.methods.length,ie=0;k.writeUInt32LE(Q,G),k.writeUInt32LE(oe,G+4),k.writeUInt32LE(se,G+8),k.writeUInt32LE(ie,G+12),O.methods.forEach((et,Ie)=>{let gt=G+16+Ie*8,[hi,mi]=et;k.writeUInt32LE(hi,gt),k.writeUInt32LE(mi.offset,gt+4)})}),r.forEach((O,G)=>{let Q=re[G];k.writeUInt32LE(O.types.length,Q),O.types.forEach((oe,se)=>{k.writeUInt16LE(oe,Q+4+se*2)})}),c.forEach((O,G)=>{let Q=de[G];k.writeUInt32LE(O.types.length,Q),O.types.forEach((oe,se)=>{k.writeUInt16LE(oe,Q+4+se*2)})}),h.forEach((O,G)=>{O.copy(k,_[G])}),b.forEach(O=>{zo.copy(k,O)}),S.forEach((O,G)=>{O.copy(k,d[G].offset)}),y.forEach((O,G)=>{O.copy(k,n[G].classData.offset)}),k.writeUInt32LE(Z,j);let pe=[[md,1,g],[_d,f.length,L],[gd,p.length,F],[yd,s.length,B]];o.length>0&&pe.push([bd,o.length,A]),pe.push([Ed,i.length,U]),pe.push([vd,n.length,J]),l.forEach((O,G)=>{pe.push([Id,O.items.length,$[G]])}),W.forEach(O=>{pe.push([Cd,1,O.offset])}),a.forEach(O=>{pe.push([kd,1,O.offset])}),ne>0&&pe.push([wd,ne,re.concat(de)[0]]),pe.push([Ad,f.length,_[0]]),b.forEach(O=>{pe.push([Td,1,O])}),d.forEach(O=>{pe.push([Nd,1,O.offset])}),n.forEach(O=>{pe.push([xd,1,O.classData.offset])}),pe.push([Sd,1,j]),pe.forEach((O,G)=>{let[Q,oe,se]=O,ie=j+4+G*Uo;k.writeUInt16LE(Q,ie),k.writeUInt32LE(oe,ie+4),k.writeUInt32LE(se,ie+8)});let Sr=new Checksum("sha1");return Sr.update(k.slice(E+w)),v.from(Sr.getDigest()).copy(k,E),k.writeUInt32LE($d(k,E),m),k}};function Fd(t){let{instanceFields:e,constructorMethods:n,virtualMethods:r}=t.classData;return v.from([0].concat(we(e.length)).concat(we(n.length)).concat(we(r.length)).concat(e.reduce((i,[s,c])=>i.concat(we(s)).concat(we(c)),[])).concat(n.reduce((i,[s,c,,a])=>i.concat(we(s)).concat(we(c)).concat(we(a||0)),[])).concat(r.reduce((i,[s,c])=>i.concat(we(s)).concat(we(c)).concat([0]),[])))}function Dd(t){let{thrownTypes:e}=t;return v.from([Od].concat(we(t.type)).concat([1]).concat(we(t.value)).concat([Md,e.length]).concat(e.reduce((n,r)=>(n.push(Ld,r),n),[])))}function Bd(t){let e=new Set,n=new Set,r={},o=[],i=[],s={},c=new Set,a=new Set;t.forEach(T=>{let{name:J,superClass:H,sourceFileName:K}=T;e.add("this"),e.add(J),n.add(J),e.add(H),n.add(H),e.add(K),T.interfaces.forEach($=>{e.add($),n.add($)}),T.fields.forEach($=>{let[W,re]=$;e.add(W),e.add(re),n.add(re),o.push([T.name,re,W])}),T.methods.some(([$])=>$==="<init>")||(T.methods.unshift(["<init>","V",[]]),c.add(J)),T.methods.forEach($=>{let[W,re,de,h=[],_]=$;e.add(W);let b=l(re,de),S=null;if(h.length>0){let y=h.slice();y.sort(),S=y.join("|");let C=s[S];C===void 0&&(C={id:S,types:y},s[S]=C),e.add(rr),n.add(rr),h.forEach(V=>{e.add(V),n.add(V)}),e.add("value")}if(i.push([T.name,b,W,S,_]),W==="<init>"){a.add(J+"|"+b);let y=H+"|"+b;c.has(J)&&!a.has(y)&&(i.push([H,b,W,null,0]),a.add(y))}})});function l(T,J){let H=[T].concat(J),K=H.join("|");if(r[K]!==void 0)return K;e.add(T),n.add(T),J.forEach(W=>{e.add(W),n.add(W)});let $=H.map(Gd).join("");return e.add($),r[K]=[K,$,T,J],K}let d=Array.from(e);d.sort();let p=d.reduce((T,J,H)=>(T[J]=H,T),{}),f=Array.from(n).map(T=>p[T]);f.sort(Vo);let u=f.reduce((T,J,H)=>(T[d[J]]=H,T),{}),g=Object.keys(r).map(T=>r[T]);g.sort(zd);let m={},E=g.map(T=>{let[,J,H,K]=T,$;if(K.length>0){let W=K.join("|");$=m[W],$===void 0&&($={types:K.map(re=>u[re]),offset:-1},m[W]=$)}else $=null;return[p[J],u[H],$]}),w=g.reduce((T,J,H)=>{let[K]=J;return T[K]=H,T},{}),x=Object.keys(m).map(T=>m[T]),L=o.map(T=>{let[J,H,K]=T;return[u[J],u[H],p[K]]});L.sort(Vd);let D=i.map(T=>{let[J,H,K,$,W]=T;return[u[J],w[H],p[K],$,W]});D.sort(Jd);let F=Object.keys(s).map(T=>s[T]).map(T=>({id:T.id,type:u[rr],value:p.value,thrownTypes:T.types.map(J=>u[J]),offset:-1})),z=F.map(T=>({id:T.id,items:[T],offset:-1})),B=z.reduce((T,J,H)=>(T[J.id]=H,T),{}),R={},A=[],M=t.map(T=>{let J=u[T.name],H=ht,K=u[T.superClass],$,W=T.interfaces.map(j=>u[j]);if(W.length>0){W.sort(Vo);let j=W.join("|");$=R[j],$===void 0&&($={types:W,offset:-1},R[j]=$)}else $=null;let re=p[T.sourceFileName],de=D.reduce((j,ne,Z)=>{let[q,le,ue,k,pe]=ne;return q===J&&j.push([Z,ue,k,le,pe]),j},[]),h=null,_=de.filter(([,,j])=>j!==null).map(([j,,ne])=>[j,z[B[ne]]]);_.length>0&&(h={methods:_,offset:-1},A.push(h));let b=L.reduce((j,ne,Z)=>{let[q]=ne;return q===J&&j.push([Z>0?1:0,ht]),j},[]),S=p["<init>"],y=de.filter(([,j])=>j===S).map(([j,,,ne])=>{if(c.has(T.name)){let Z=-1,q=D.length;for(let le=0;le!==q;le++){let[ue,k,pe]=D[le];if(ue===K&&pe===S&&k===ne){Z=le;break}}return[j,ht|Oo,Z]}else return[j,ht|Oo|ir,-1]}),C=Ud(de.filter(([,j])=>j!==S).map(([j,,,,ne])=>[j,ne|ht|ir]));return{index:J,accessFlags:H,superClassIndex:K,interfaces:$,sourceFileIndex:re,annotationsDirectory:h,classData:{instanceFields:b,constructorMethods:y,virtualMethods:C,offset:-1}}}),U=Object.keys(R).map(T=>R[T]);return{classes:M,interfaces:U,fields:L,methods:D,protos:E,parameters:x,annotationDirectories:A,annotationSets:z,throwsAnnotations:F,types:f,strings:d}}function Ud(t){let e=0;return t.map(([n,r],o)=>{let i;return o===0?i=[n,r]:i=[n-e,r],e=n,i})}function Vo(t,e){return t-e}function zd(t,e){let[,,n,r]=t,[,,o,i]=e;if(n<o)return-1;if(n>o)return 1;let s=r.join("|"),c=i.join("|");return s<c?-1:s>c?1:0}function Vd(t,e){let[n,r,o]=t,[i,s,c]=e;return n!==i?n-i:o!==c?o-c:r-s}function Jd(t,e){let[n,r,o]=t,[i,s,c]=e;return n!==i?n-i:o!==c?o-c:r-s}function Gd(t){let e=t[0];return e==="L"||e==="["?"L":t}function we(t){if(t<=127)return[t];let e=[],n=!1;do{let r=t&127;t>>=7,n=t!==0,n&&(r|=128),e.push(r)}while(n);return e}function or(t,e){let n=t%e;return n===0?t:t+e-n}function $d(t,e){let n=1,r=0,o=t.length;for(let i=e;i<o;i++)n=(n+t[i])%65521,r=(r+n)%65521;return(r<<16|n)>>>0}var Jo=jd;var Hd=1,ar=null,Go=null;function $o(t){ar=t}function cr(t,e,n){let r=Qe(t);return r===null&&(t.indexOf("[")===0?r=lr(t,e,n):(t[0]==="L"&&t[t.length-1]===";"&&(t=t.substring(1,t.length-1)),r=Kd(t,e,n))),Object.assign({className:t},r)}var Ho={boolean:{name:"Z",type:"uint8",size:1,byteSize:1,defaultValue:!1,isCompatible(t){return typeof t=="boolean"},fromJni(t){return!!t},toJni(t){return t?1:0},read(t){return t.readU8()},write(t,e){t.writeU8(e)},toString(){return this.name}},byte:{name:"B",type:"int8",size:1,byteSize:1,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-128&&t<=127},fromJni:Te,toJni:Te,read(t){return t.readS8()},write(t,e){t.writeS8(e)},toString(){return this.name}},char:{name:"C",type:"uint16",size:1,byteSize:2,defaultValue:0,isCompatible(t){if(typeof t!="string"||t.length!==1)return!1;let e=t.charCodeAt(0);return e>=0&&e<=65535},fromJni(t){return String.fromCharCode(t)},toJni(t){return t.charCodeAt(0)},read(t){return t.readU16()},write(t,e){t.writeU16(e)},toString(){return this.name}},short:{name:"S",type:"int16",size:1,byteSize:2,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-32768&&t<=32767},fromJni:Te,toJni:Te,read(t){return t.readS16()},write(t,e){t.writeS16(e)},toString(){return this.name}},int:{name:"I",type:"int32",size:1,byteSize:4,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-2147483648&&t<=2147483647},fromJni:Te,toJni:Te,read(t){return t.readS32()},write(t,e){t.writeS32(e)},toString(){return this.name}},long:{name:"J",type:"int64",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"||t instanceof Int64},fromJni:Te,toJni:Te,read(t){return t.readS64()},write(t,e){t.writeS64(e)},toString(){return this.name}},float:{name:"F",type:"float",size:1,byteSize:4,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:Te,toJni:Te,read(t){return t.readFloat()},write(t,e){t.writeFloat(e)},toString(){return this.name}},double:{name:"D",type:"double",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:Te,toJni:Te,read(t){return t.readDouble()},write(t,e){t.writeDouble(e)},toString(){return this.name}},void:{name:"V",type:"void",size:0,byteSize:0,defaultValue:void 0,isCompatible(t){return t===void 0},fromJni(){},toJni(){return NULL},toString(){return this.name}}},Zd=new Set(Object.values(Ho).map(t=>t.name));function Qe(t){let e=Ho[t];return e!==void 0?e:null}function Kd(t,e,n){let r=n._types[e?1:0],o=r[t];return o!==void 0||(t==="java.lang.Object"?o=Wd(n):o=qd(t,e,n),r[t]=o),o}function Wd(t){return{name:"Ljava/lang/Object;",type:"pointer",size:1,defaultValue:NULL,isCompatible(e){return e===null?!0:e===void 0?!1:e.$h instanceof NativePointer?!0:typeof e=="string"},fromJni(e,n,r){return e.isNull()?null:t.cast(e,t.use("java.lang.Object"),r)},toJni(e,n){return e===null?NULL:typeof e=="string"?n.newStringUtf(e):e.$h}}}function qd(t,e,n){let r=null,o=null,i=null;function s(){return r===null&&(r=n.use(t).class),r}function c(l){let d=s();return o===null&&(o=d.isInstance.overload("java.lang.Object")),o.call(d,l)}function a(){if(i===null){let l=s();i=n.use("java.lang.String").class.isAssignableFrom(l)}return i}return{name:Je(t),type:"pointer",size:1,defaultValue:NULL,isCompatible(l){return l===null?!0:l===void 0?!1:l.$h instanceof NativePointer?c(l):typeof l=="string"&&a()},fromJni(l,d,p){return l.isNull()?null:a()&&e?d.stringFromJni(l):n.cast(l,n.use(t),p)},toJni(l,d){return l===null?NULL:typeof l=="string"?d.newStringUtf(l):l.$h},toString(){return this.name}}}var Qd=[["Z","boolean"],["B","byte"],["C","char"],["D","double"],["F","float"],["I","int"],["J","long"],["S","short"]].reduce((t,[e,n])=>(t["["+e]=Yd("["+e,n),t),{});function Yd(t,e){let n=I.prototype,r=ru(e),o={typeName:e,newArray:n["new"+r+"Array"],setRegion:n["set"+r+"ArrayRegion"],getElements:n["get"+r+"ArrayElements"],releaseElements:n["release"+r+"ArrayElements"]};return{name:t,type:"pointer",size:1,defaultValue:NULL,isCompatible(i){return nu(i,e)},fromJni(i,s,c){return eu(i,o,s,c)},toJni(i,s){return tu(i,o,s)}}}function lr(t,e,n){let r=Qd[t];if(r!==void 0)return r;if(t.indexOf("[")!==0)throw new Error("Unsupported type: "+t);let o=t.substring(1),i=cr(o,e,n),s=0,c=o.length;for(;s!==c&&o[s]==="[";)s++;o=o.substring(s),o[0]==="L"&&o[o.length-1]===";"&&(o=o.substring(1,o.length-1));let a=o.replace(/\./g,"/");Zd.has(a)?a="[".repeat(s)+a:a="[".repeat(s)+"L"+a+";";let l="["+a;return o="[".repeat(s)+o,{name:t.replace(/\./g,"/"),type:"pointer",size:1,defaultValue:NULL,isCompatible(d){return d===null?!0:typeof d!="object"||d.length===void 0?!1:d.every(function(p){return i.isCompatible(p)})},fromJni(d,p,f){if(d.isNull())return null;let u=[],g=p.getArrayLength(d);for(let m=0;m!==g;m++){let E=p.getObjectArrayElement(d,m);try{u.push(i.fromJni(E,p))}finally{p.deleteLocalRef(E)}}try{u.$w=n.cast(d,n.use(l),f)}catch{n.use("java.lang.reflect.Array").newInstance(n.use(o).class,0),u.$w=n.cast(d,n.use(l),f)}return u.$dispose=Xd,u},toJni(d,p){if(d===null)return NULL;if(!(d instanceof Array))throw new Error("Expected an array");let f=d.$w;if(f!==void 0)return f.$h;let u=d.length,m=n.use(o).$borrowClassHandle(p);try{let E=p.newObjectArray(u,m.value,NULL);p.throwIfExceptionPending();for(let w=0;w!==u;w++){let x=i.toJni(d[w],p);try{p.setObjectArrayElement(E,w,x)}finally{i.type==="pointer"&&p.getObjectRefType(x)===Hd&&p.deleteLocalRef(x)}p.throwIfExceptionPending()}return E}finally{m.unref(p)}}}}function Xd(){let t=this.length;for(let e=0;e!==t;e++){let n=this[e];if(n===null)continue;let r=n.$dispose;if(r===void 0)break;r.call(n)}this.$w.$dispose()}function eu(t,e,n,r){if(t.isNull())return null;let o=Qe(e.typeName),i=n.getArrayLength(t);return new Bt(t,e,o,i,n,r)}function tu(t,e,n){if(t===null)return NULL;let r=t.$h;if(r!==void 0)return r;let o=t.length,i=Qe(e.typeName),s=e.newArray.call(n,o);if(s.isNull())throw new Error("Unable to construct array");if(o>0){let c=i.byteSize,a=i.write,l=i.toJni,d=Memory.alloc(o*i.byteSize);for(let p=0;p!==o;p++)a(d.add(p*c),l(t[p]));e.setRegion.call(n,s,0,o,d),n.throwIfExceptionPending()}return s}function nu(t,e){if(t===null)return!0;if(t instanceof Bt)return t.$s.typeName===e;if(!(typeof t=="object"&&t.length!==void 0))return!1;let r=Qe(e);return Array.prototype.every.call(t,o=>r.isCompatible(o))}function Bt(t,e,n,r,o,i=!0){if(i){let s=o.newGlobalRef(t);this.$h=s,this.$r=Script.bindWeak(this,o.vm.makeHandleDestructor(s))}else this.$h=t,this.$r=null;return this.$s=e,this.$t=n,this.length=r,new Proxy(this,Go)}Go={has(t,e){return e in t?!0:t.tryParseIndex(e)!==null},get(t,e,n){let r=t.tryParseIndex(e);return r===null?t[e]:t.readElement(r)},set(t,e,n,r){let o=t.tryParseIndex(e);return o===null?(t[e]=n,!0):(t.writeElement(o,n),!0)},ownKeys(t){let e=[],{length:n}=t;for(let r=0;r!==n;r++){let o=r.toString();e.push(o)}return e.push("length"),e},getOwnPropertyDescriptor(t,e){return t.tryParseIndex(e)!==null?{writable:!0,configurable:!0,enumerable:!0}:Object.getOwnPropertyDescriptor(t,e)}};Object.defineProperties(Bt.prototype,{$dispose:{enumerable:!0,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t))}},$clone:{value(t){return new Bt(this.$h,this.$s,this.$t,this.length,t)}},tryParseIndex:{value(t){if(typeof t=="symbol")return null;let e=parseInt(t);return isNaN(e)||e<0||e>=this.length?null:e}},readElement:{value(t){return this.withElements(e=>{let n=this.$t;return n.fromJni(n.read(e.add(t*n.byteSize)))})}},writeElement:{value(t,e){let{$h:n,$s:r,$t:o}=this,i=ar.getEnv(),s=Memory.alloc(o.byteSize);o.write(s,o.toJni(e)),r.setRegion.call(i,n,t,1,s)}},withElements:{value(t){let{$h:e,$s:n}=this,r=ar.getEnv(),o=n.getElements.call(r,e);if(o.isNull())throw new Error("Unable to get array elements");try{return t(o)}finally{n.releaseElements.call(r,e,o)}}},toJSON:{value(){let{length:t,$t:e}=this,{byteSize:n,fromJni:r,read:o}=e;return this.withElements(i=>{let s=[];for(let c=0;c!==t;c++){let a=r(o(i.add(c*n)));s.push(a)}return s})}},toString:{value(){return this.toJSON().toString()}}});function Je(t){return"L"+t.replace(/\./g,"/")+";"}function ru(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Te(t){return t}var ou=4,{ensureClassInitialized:Zo,makeMethodMangler:Xo}=Ft,iu=8,pr=1,_t=2,Re=3,dr=1,fr=2,Ut=1,ei=2,Ko=Symbol("PENDING_USE"),Wo="/data/local/tmp",{getCurrentThreadId:Vt,pointerSize:mt}=Process,be={state:"empty",factories:[],loaders:null,Integer:null},ee=null,ce=null,ti=null,ni=null,ri=null,oi=null,ii=null,qo=null,ur=null,Xe=new Map,Fe=class t{static _initialize(e,n){ee=e,ce=n,ti=n.flavor==="art",n.flavor==="jvm"&&(Zo=xo,Xo=Ao)}static _disposeAll(e){be.factories.forEach(n=>{n._dispose(e)})}static get(e){let n=xu(),r=n.factories[0];if(e===null)return r;let o=n.loaders.get(e);if(o!==null){let s=r.cast(o,n.Integer);return n.factories[s.intValue()]}let i=new t;return i.loader=e,i.cacheDir=r.cacheDir,_r(i,e),i}constructor(){this.cacheDir=Wo,this.codeCacheDir=Wo+"/dalvik-cache",this.tempFileNaming={prefix:"frida",suffix:""},this._classes={},this._classHandles=new ft(10,au),this._patchedMethods=new Set,this._loader=null,this._types=[{},{}],be.factories.push(this)}_dispose(e){Array.from(this._patchedMethods).forEach(n=>{n.implementation=null}),this._patchedMethods.clear(),Zn(),this._classHandles.dispose(e),this._classes={}}get loader(){return this._loader}set loader(e){let n=this._loader===null&&e!==null;this._loader=e,n&&be.state==="ready"&&this===be.factories[0]&&_r(this,e)}use(e,n={}){let r=n.cache!=="skip",o=r?this._getUsedClass(e):void 0;if(o===void 0)try{let i=ee.getEnv(),{_loader:s}=this,c=s!==null?lu(e,s,i):cu(e);o=this._make(e,c,i)}finally{r&&this._setUsedClass(e,o)}return o}_getUsedClass(e){let n;for(;(n=this._classes[e])===Ko;)Thread.sleep(.05);return n===void 0&&(this._classes[e]=Ko),n}_setUsedClass(e,n){n!==void 0?this._classes[e]=n:delete this._classes[e]}_make(e,n,r){let o=su(),i=Object.create(yr.prototype,{[Symbol.for("n")]:{value:e},$n:{get(){return this[Symbol.for("n")]}},[Symbol.for("C")]:{value:o},$C:{get(){return this[Symbol.for("C")]}},[Symbol.for("w")]:{value:null,writable:!0},$w:{get(){return this[Symbol.for("w")]},set(a){this[Symbol.for("w")]=a}},[Symbol.for("_s")]:{writable:!0},$_s:{get(){return this[Symbol.for("_s")]},set(a){this[Symbol.for("_s")]=a}},[Symbol.for("c")]:{value:[null]},$c:{get(){return this[Symbol.for("c")]}},[Symbol.for("m")]:{value:new Map},$m:{get(){return this[Symbol.for("m")]}},[Symbol.for("l")]:{value:null,writable:!0},$l:{get(){return this[Symbol.for("l")]},set(a){this[Symbol.for("l")]=a}},[Symbol.for("gch")]:{value:n},$gch:{get(){return this[Symbol.for("gch")]}},[Symbol.for("f")]:{value:this},$f:{get(){return this[Symbol.for("f")]}}});o.prototype=i;let s=new o(null);i[Symbol.for("w")]=s,i.$w=s;let c=s.$borrowClassHandle(r);try{let a=c.value;Zo(r,a),i.$l=Ve.build(a,r)}finally{c.unref(r)}return s}retain(e){let n=ee.getEnv();return e.$clone(n)}cast(e,n,r){let o=ee.getEnv(),i=e.$h;i===void 0&&(i=e);let s=n.$borrowClassHandle(o);try{if(!o.isInstanceOf(i,s.value))throw new Error(`Cast from '${o.getObjectClassName(i)}' to '${n.$n}' isn't possible`)}finally{s.unref(o)}let c=n.$C;return new c(i,Ut,o,r)}wrap(e,n,r){let o=n.$C,i=new o(e,Ut,r,!1);return i.$r=Script.bindWeak(i,ee.makeHandleDestructor(e)),i}array(e,n){let r=ee.getEnv(),o=Qe(e);o!==null&&(e=o.name);let i=lr("["+e,!1,this),s=i.toJni(n,r);return i.fromJni(s,r,!0)}registerClass(e){let n=ee.getEnv(),r=[];try{let o=this.use("java.lang.Class"),i=n.javaLangReflectMethod(),s=n.vaMethod("pointer",[]),c=e.name,a=e.implements||[],l=e.superClass||this.use("java.lang.Object"),d=[],p=[],f={name:Je(c),sourceFileName:Au(c),superClass:Je(l.$n),interfaces:a.map(A=>Je(A.$n)),fields:d,methods:p},u=a.slice();a.forEach(A=>{Array.prototype.slice.call(A.class.getInterfaces()).forEach(M=>{let U=this.cast(M,o).getCanonicalName();u.push(this.use(U))})});let g=e.fields||{};Object.getOwnPropertyNames(g).forEach(A=>{let M=this._getType(g[A]);d.push([A,M.name])});let m={},E={};u.forEach(A=>{let M=A.$borrowClassHandle(n);r.push(M);let U=M.value;A.$ownMembers.filter(T=>A[T].overloads!==void 0).forEach(T=>{let J=A[T],H=J.overloads,K=H.map($=>Qo(T,$.returnType,$.argumentTypes));m[T]=[J,K,U],H.forEach(($,W)=>{let re=K[W];E[re]=[$,U]})})});let w=e.methods||{},L=Object.keys(w).reduce((A,M)=>{let U=w[M],T=M==="$init"?"<init>":M;return U instanceof Array?A.push(...U.map(J=>[T,J])):A.push([T,U]),A},[]),D=[];L.forEach(([A,M])=>{let U=Re,T,J,H=[],K;if(typeof M=="function"){let de=m[A];if(de!==void 0&&Array.isArray(de)){let[h,_,b]=de;if(_.length>1)throw new Error(`More than one overload matching '${A}': signature must be specified`);delete E[_[0]];let S=h.overloads[0];U=S.type,T=S.returnType,J=S.argumentTypes,K=M;let y=n.toReflectedMethod(b,S.handle,0),C=s(n.handle,y,i.getGenericExceptionTypes);H=gr(n,C).map(Je),n.deleteLocalRef(C),n.deleteLocalRef(y)}else T=this._getType("void"),J=[],K=M}else{if(M.isStatic&&(U=_t),T=this._getType(M.returnType||"void"),J=(M.argumentTypes||[]).map(_=>this._getType(_)),K=M.implementation,typeof K!="function")throw new Error("Expected a function implementation for method: "+A);let de=Qo(A,T,J),h=E[de];if(h!==void 0){let[_,b]=h;delete E[de],U=_.type,T=_.returnType,J=_.argumentTypes;let S=n.toReflectedMethod(b,_.handle,0),y=s(n.handle,S,i.getGenericExceptionTypes);H=gr(n,y).map(Je),n.deleteLocalRef(y),n.deleteLocalRef(S)}}let $=T.name,W=J.map(de=>de.name),re="("+W.join("")+")"+$;p.push([A,$,W,H,U===_t?iu:0]),D.push([A,re,U,T,J,K])});let F=Object.keys(E);if(F.length>0)throw new Error("Missing implementation for: "+F.join(", "));let z=zt.fromBuffer(Jo(f),this);try{z.load()}finally{z.file.delete()}let B=this.use(e.name),R=L.length;if(R>0){let A=3*mt,M=Memory.alloc(R*A),U=[],T=[];D.forEach(([K,$,W,re,de,h],_)=>{let b=Memory.allocUtf8String(K),S=Memory.allocUtf8String($),y=si(K,B,W,re,de,h);M.add(_*A).writePointer(b),M.add(_*A+mt).writePointer(S),M.add(_*A+2*mt).writePointer(y),T.push(b,S),U.push(y)});let J=B.$borrowClassHandle(n);r.push(J);let H=J.value;n.registerNatives(H,M,R),n.throwIfExceptionPending(),B.$nativeMethods=U}return B}finally{r.forEach(o=>{o.unref(n)})}}choose(e,n){let r=ee.getEnv(),{flavor:o}=ce;if(o==="jvm")this._chooseObjectsJvm(e,r,n);else if(o==="art"){let i=ce["art::gc::Heap::VisitObjects"]===void 0;if(i&&ce["art::gc::Heap::GetInstances"]===void 0)return this._chooseObjectsJvm(e,r,n);Ce(ee,r,s=>{i?this._chooseObjectsArtPreA12(e,r,s,n):this._chooseObjectsArtLegacy(e,r,s,n)})}else this._chooseObjectsDalvik(e,r,n)}_chooseObjectsJvm(e,n,r){let o=this.use(e),{jvmti:i}=ce,s=1,c=3,a=o.$borrowClassHandle(n),l=int64(a.value.toString());try{let d=new NativeCallback((w,x,L,D)=>(L.writeS64(l),s),"int",["int64","int64","pointer","pointer"]);i.iterateOverInstancesOfClass(a.value,c,d,a.value);let p=Memory.alloc(8);p.writeS64(l);let f=Memory.alloc(ou),u=Memory.alloc(mt);i.getObjectsWithTags(1,p,f,u,NULL);let g=f.readS32(),m=u.readPointer(),E=[];for(let w=0;w!==g;w++)E.push(m.add(w*mt).readPointer());i.deallocate(m);try{for(let w of E){let x=this.cast(w,o);if(r.onMatch(x)==="stop")break}r.onComplete()}finally{E.forEach(w=>{n.deleteLocalRef(w)})}}finally{a.unref(n)}}_chooseObjectsArtPreA12(e,n,r,o){let i=this.use(e),s=dt.$new(r,ee),c,a=i.$borrowClassHandle(n);try{let f=ce["art::JavaVMExt::DecodeGlobal"](ce.vm,r,a.value);c=s.newHandle(f)}finally{a.unref(n)}let l=0,d=lt.$new();ce["art::gc::Heap::GetInstances"](ce.artHeap,s,c,l,d);let p=d.handles.map(f=>n.newGlobalRef(f));d.$delete(),s.$delete();try{for(let f of p){let u=this.cast(f,i);if(o.onMatch(u)==="stop")break}o.onComplete()}finally{p.forEach(f=>{n.deleteGlobalRef(f)})}}_chooseObjectsArtLegacy(e,n,r,o){let i=this.use(e),s=[],c=ce["art::JavaVMExt::AddGlobalRef"],a=ce.vm,l,d=i.$borrowClassHandle(n);try{l=ce["art::JavaVMExt::DecodeGlobal"](a,r,d.value).toInt32()}finally{d.unref(n)}let p=Xn(l,f=>{s.push(c(a,r,f))});ce["art::gc::Heap::VisitObjects"](ce.artHeap,p,NULL);try{for(let f of s){let u=this.cast(f,i);if(o.onMatch(u)==="stop")break}}finally{s.forEach(f=>{n.deleteGlobalRef(f)})}o.onComplete()}_chooseObjectsDalvik(e,n,r){let o=this.use(e);if(ce.addLocalReference===null){let s=Process.getModuleByName("libdvm.so"),c;switch(Process.arch){case"arm":c="2d e9 f0 41 05 46 15 4e 0c 46 7e 44 11 b3 43 68";break;case"ia32":c="8d 64 24 d4 89 5c 24 1c 89 74 24 20 e8 ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? 85 d2";break}Memory.scan(s.base,s.size,c,{onMatch:(a,l)=>{let d;if(Process.arch==="arm")a=a.or(1),d=new NativeFunction(a,"pointer",["pointer","pointer"]);else{let p=Memory.alloc(Process.pageSize);Memory.patchCode(p,16,f=>{let u=new X86Writer(f,{pc:p});u.putMovRegRegOffsetPtr("eax","esp",4),u.putMovRegRegOffsetPtr("edx","esp",8),u.putJmpAddress(a),u.flush()}),d=new NativeFunction(p,"pointer",["pointer","pointer"]),d._thunk=p}return ce.addLocalReference=d,ee.perform(p=>{i(this,p)}),"stop"},onError(a){},onComplete(){ce.addLocalReference===null&&r.onComplete()}})}else i(this,n);function i(s,c){let{DVM_JNI_ENV_OFFSET_SELF:a}=Ft,l=c.handle.add(a).readPointer(),d,p=o.$borrowClassHandle(c);try{d=ce.dvmDecodeIndirectRef(l,p.value)}finally{p.unref(c)}let f=d.toMatchPattern(),u=ce.dvmHeapSourceGetBase(),m=ce.dvmHeapSourceGetLimit().sub(u).toInt32();Memory.scan(u,m,f,{onMatch:(E,w)=>{ce.dvmIsValidObject(E)&&ee.perform(x=>{let L=x.handle.add(a).readPointer(),D,F=ce.addLocalReference(L,E);try{D=s.cast(F,o)}finally{x.deleteLocalRef(F)}if(r.onMatch(D)==="stop")return"stop"})},onError(E){},onComplete(){r.onComplete()}})}}openClassFile(e){return new zt(e,null,this)}_getType(e,n=!0){return cr(e,n,this)}};function su(){return function(t,e,n,r){return yr.call(this,t,e,n,r)}}function yr(t,e,n,r=!0){if(t!==null)if(r){let o=n.newGlobalRef(t);this.$h=o,this.$r=Script.bindWeak(this,ee.makeHandleDestructor(o))}else this.$h=t,this.$r=null;else this.$h=null,this.$r=null;return this.$t=e,new Proxy(this,ni)}ni={has(t,e){return e in t?!0:t.$has(e)},get(t,e,n){if(typeof e!="string"||e.startsWith("$")||e==="class")return t[e];let r=t.$find(e);return r!==null?r(n):t[e]},set(t,e,n,r){return t[e]=n,!0},ownKeys(t){return t.$list()},getOwnPropertyDescriptor(t,e){return Object.prototype.hasOwnProperty.call(t,e)?Object.getOwnPropertyDescriptor(t,e):{writable:!1,configurable:!0,enumerable:!0}}};Object.defineProperties(yr.prototype,{[Symbol.for("new")]:{enumerable:!1,get(){return this.$getCtor("allocAndInit")}},$new:{enumerable:!0,get(){return this[Symbol.for("new")]}},[Symbol.for("alloc")]:{enumerable:!1,value(){let t=ee.getEnv(),e=this.$borrowClassHandle(t);try{let n=t.allocObject(e.value);return this.$f.cast(n,this)}finally{e.unref(t)}}},$alloc:{enumerable:!0,get(){return this[Symbol.for("alloc")]}},[Symbol.for("init")]:{enumerable:!1,get(){return this.$getCtor("initOnly")}},$init:{enumerable:!0,get(){return this[Symbol.for("init")]}},[Symbol.for("dispose")]:{enumerable:!1,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t)),this.$h!==null&&(this.$h=void 0)}},$dispose:{enumerable:!0,get(){return this[Symbol.for("dispose")]}},[Symbol.for("clone")]:{enumerable:!1,value(t){let e=this.$C;return new e(this.$h,this.$t,t)}},$clone:{value(t){return this[Symbol.for("clone")](t)}},[Symbol.for("class")]:{enumerable:!1,get(){let t=ee.getEnv(),e=this.$borrowClassHandle(t);try{let n=this.$f;return n.cast(e.value,n.use("java.lang.Class"))}finally{e.unref(t)}}},class:{enumerable:!0,get(){return this[Symbol.for("class")]}},[Symbol.for("className")]:{enumerable:!1,get(){let t=this.$h;return t===null?this.$n:ee.getEnv().getObjectClassName(t)}},$className:{enumerable:!0,get(){return this[Symbol.for("className")]}},[Symbol.for("ownMembers")]:{enumerable:!1,get(){return this.$l.list()}},$ownMembers:{enumerable:!0,get(){return this[Symbol.for("ownMembers")]}},[Symbol.for("super")]:{enumerable:!1,get(){let t=ee.getEnv(),e=this.$s.$C;return new e(this.$h,ei,t)}},$super:{enumerable:!0,get(){return this[Symbol.for("super")]}},[Symbol.for("s")]:{enumerable:!1,get(){let t=Object.getPrototypeOf(this),e=t.$_s;if(e===void 0){let n=ee.getEnv(),r=this.$borrowClassHandle(n);try{let o=n.getSuperclass(r.value);if(o.isNull())e=null;else try{let i=n.getClassName(o),s=t.$f;if(e=s._getUsedClass(i),e===void 0)try{let c=du(this);e=s._make(i,c,n)}finally{s._setUsedClass(i,e)}}finally{n.deleteLocalRef(o)}}finally{r.unref(n)}t.$_s=e}return e}},$s:{get(){return this[Symbol.for("s")]}},[Symbol.for("isSameObject")]:{enumerable:!1,value(t){return ee.getEnv().isSameObject(t.$h,this.$h)}},$isSameObject:{value(t){return this[Symbol.for("isSameObject")](t)}},[Symbol.for("getCtor")]:{enumerable:!1,value(t){let e=this.$c,n=e[0];if(n===null){let r=ee.getEnv(),o=this.$borrowClassHandle(r);try{n=uu(o.value,this.$w,r),e[0]=n}finally{o.unref(r)}}return n[t]}},$getCtor:{value(t){return this[Symbol.for("getCtor")](t)}},[Symbol.for("borrowClassHandle")]:{enumerable:!1,value(t){let e=this.$n,n=this.$f._classHandles,r=n.get(e);return r===void 0&&(r=new br(this.$gch(t),t),n.set(e,r,t)),r.ref()}},$borrowClassHandle:{value(t){return this[Symbol.for("borrowClassHandle")](t)}},[Symbol.for("copyClassHandle")]:{enumerable:!1,value(t){let e=this.$borrowClassHandle(t);try{return t.newLocalRef(e.value)}finally{e.unref(t)}}},$copyClassHandle:{value(t){return this[Symbol.for("copyClassHandle")](t)}},[Symbol.for("getHandle")]:{enumerable:!1,value(t){let e=this.$h;if(e===void 0)throw new Error("Wrapper is disposed; perhaps it was borrowed from a hook instead of calling Java.retain() to make a long-lived wrapper?");return e}},$getHandle:{value(t){return this[Symbol.for("getHandle")](t)}},[Symbol.for("list")]:{enumerable:!1,value(){let t=this.$s,e=t!==null?t.$list():[],n=this.$l;return Array.from(new Set(e.concat(n.list())))}},$list:{get(){return this[Symbol.for("list")]}},[Symbol.for("has")]:{enumerable:!1,value(t){if(this.$m.has(t)||this.$l.has(t))return!0;let r=this.$s;return!!(r!==null&&r.$has(t))}},$has:{value(t){return this[Symbol.for("has")](t)}},[Symbol.for("find")]:{enumerable:!1,value(t){let e=this.$m,n=e.get(t);if(n!==void 0)return n;let o=this.$l.find(t);if(o!==null){let s=ee.getEnv(),c=this.$borrowClassHandle(s);try{n=pu(t,o,c.value,this.$w,s)}finally{c.unref(s)}return e.set(t,n),n}let i=this.$s;return i!==null?i.$find(t):null}},$find:{value(t){return this[Symbol.for("find")](t)}},[Symbol.for("toJSON")]:{enumerable:!1,value(){let t=this.$n;if(this.$h===null)return`<class: ${t}>`;let n=this.$className;return t===n?`<instance: ${t}>`:`<instance: ${t}, $className: ${n}>`}},toJSON:{get(){return this[Symbol.for("toJSON")]}}});function br(t,e){this.value=e.newGlobalRef(t),e.deleteLocalRef(t),this.refs=1}br.prototype.ref=function(){return this.refs++,this};br.prototype.unref=function(t){--this.refs===0&&t.deleteGlobalRef(this.value)};function au(t,e){t.unref(e)}function cu(t){let e=t.replace(/\./g,"/");return function(n){let r=Vt();ci(r);try{return n.findClass(e)}finally{li(r)}}}function lu(t,e,n){return ur===null&&(qo=n.vaMethod("pointer",["pointer"]),ur=e.loadClass.overload("java.lang.String").handle),n=null,function(r){let o=r.newStringUtf(t),i=Vt();ci(i);try{let s=qo(r.handle,e.$h,ur,o);return r.throwIfExceptionPending(),s}finally{li(i),r.deleteLocalRef(o)}}}function du(t){return function(e){let n=t.$borrowClassHandle(e);try{return e.getSuperclass(n.value)}finally{n.unref(e)}}}function uu(t,e,n){let{$n:r,$f:o}=e,i=Cu(r),s=n.javaLangClass(),c=n.javaLangReflectConstructor(),a=n.vaMethod("pointer",[]),l=n.vaMethod("uint8",[]),d=[],p=[],f=o._getType(r,!1),u=o._getType("void",!1),g=a(n.handle,t,s.getDeclaredConstructors);try{let m=n.getArrayLength(g);if(m!==0)for(let E=0;E!==m;E++){let w,x,L=n.getObjectArrayElement(g,E);try{w=n.fromReflectedMethod(L),x=a(n.handle,L,c.getGenericParameterTypes)}finally{n.deleteLocalRef(L)}let D;try{D=gr(n,x).map(F=>o._getType(F))}finally{n.deleteLocalRef(x)}d.push(Ye(i,e,pr,w,f,D,n)),p.push(Ye(i,e,Re,w,u,D,n))}else{if(l(n.handle,t,s.isInterface))throw new Error("cannot instantiate an interface");let w=n.javaLangObject(),x=n.getMethodId(w,"<init>","()V");d.push(Ye(i,e,pr,x,f,[],n)),p.push(Ye(i,e,Re,x,u,[],n))}}finally{n.deleteLocalRef(g)}if(p.length===0)throw new Error("no supported overloads");return{allocAndInit:hr(d),initOnly:hr(p)}}function pu(t,e,n,r,o){return e.startsWith("m")?fu(t,e,n,r,o):Su(t,e,n,r,o)}function fu(t,e,n,r,o){let{$f:i}=r,s=e.split(":").slice(1),c=o.javaLangReflectMethod(),a=o.vaMethod("pointer",[]),l=o.vaMethod("uint8",[]),d=s.map(f=>{let u=f[0]==="s"?_t:Re,g=ptr(f.substr(1)),m,E=[],w=o.toReflectedMethod(n,g,u===_t?1:0);try{let x=!!l(o.handle,w,c.isVarArgs),L=a(o.handle,w,c.getGenericReturnType);o.throwIfExceptionPending();try{m=i._getType(o.getTypeName(L))}finally{o.deleteLocalRef(L)}let D=a(o.handle,w,c.getParameterTypes);try{let F=o.getArrayLength(D);for(let z=0;z!==F;z++){let B=o.getObjectArrayElement(D,z),R;try{R=x&&z===F-1?o.getArrayTypeName(B):o.getTypeName(B)}finally{o.deleteLocalRef(B)}let A=i._getType(R);E.push(A)}}finally{o.deleteLocalRef(D)}}catch{return null}finally{o.deleteLocalRef(w)}return Ye(t,r,u,g,m,E,o)}).filter(f=>f!==null);if(d.length===0)throw new Error("No supported overloads");t==="valueOf"&&bu(d);let p=hr(d);return function(f){return p}}function hr(t){let e=hu();return Object.setPrototypeOf(e,ri),e._o=t,e}function hu(){let t=function(){return t.invoke(this,arguments)};return t}ri=Object.create(Function.prototype,{overloads:{enumerable:!0,get(){return this._o}},overload:{value(...t){let e=this._o,n=t.length,r=t.join(":");for(let o=0;o!==e.length;o++){let i=e[o],{argumentTypes:s}=i;if(s.length!==n)continue;if(s.map(a=>a.className).join(":")===r)return i}mr(this.methodName,this.overloads,"specified argument types do not match any of:")}},methodName:{enumerable:!0,get(){return this._o[0].methodName}},holder:{enumerable:!0,get(){return this._o[0].holder}},type:{enumerable:!0,get(){return this._o[0].type}},handle:{enumerable:!0,get(){return Ge(this),this._o[0].handle}},implementation:{enumerable:!0,get(){return Ge(this),this._o[0].implementation},set(t){Ge(this),this._o[0].implementation=t}},returnType:{enumerable:!0,get(){return Ge(this),this._o[0].returnType}},argumentTypes:{enumerable:!0,get(){return Ge(this),this._o[0].argumentTypes}},canInvokeWith:{enumerable:!0,get(t){return Ge(this),this._o[0].canInvokeWith}},clone:{enumerable:!0,value(t){return Ge(this),this._o[0].clone(t)}},invoke:{value(t,e){let n=this._o,r=t.$h!==null;for(let o=0;o!==n.length;o++){let i=n[o];if(i.canInvokeWith(e)){if(i.type===Re&&!r){let s=this.methodName;if(s==="toString")return`<class: ${t.$n}>`;throw new Error(s+": cannot call instance method without an instance")}return i.apply(t,e)}}if(this.methodName==="toString")return`<class: ${t.$n}>`;mr(this.methodName,this.overloads,"argument types do not match any of:")}}});function Qo(t,e,n){return`${e.className} ${t}(${n.map(r=>r.className).join(", ")})`}function Ge(t){let e=t._o;e.length>1&&mr(e[0].methodName,e,"has more than one overload, use .overload(<signature>) to choose from:")}function mr(t,e,n){let o=e.slice().sort((i,s)=>i.argumentTypes.length-s.argumentTypes.length).map(i=>i.argumentTypes.length>0?".overload('"+i.argumentTypes.map(c=>c.className).join("', '")+"')":".overload()");throw new Error(`${t}(): ${n}
	${o.join(`
	`)}`)}function Ye(t,e,n,r,o,i,s,c){let a=o.type,l=i.map(f=>f.type);s===null&&(s=ee.getEnv());let d,p;return n===Re?(d=s.vaMethod(a,l,c),p=s.nonvirtualVaMethod(a,l,c)):n===_t?(d=s.staticVaMethod(a,l,c),p=d):(d=s.constructor(l,c),p=d),mu([t,e,n,r,o,i,d,p])}function mu(t){let e=_u();return Object.setPrototypeOf(e,oi),e._p=t,e}function _u(){let t=function(){return t.invoke(this,arguments)};return t}oi=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return this._p[0]}},holder:{enumerable:!0,get(){return this._p[1]}},type:{enumerable:!0,get(){return this._p[2]}},handle:{enumerable:!0,get(){return this._p[3]}},implementation:{enumerable:!0,get(){let t=this._r;return t!==void 0?t:null},set(t){let e=this._p,n=e[1];if(e[2]===pr)throw new Error("Reimplementing $new is not possible; replace implementation of $init instead");let o=this._r;if(o!==void 0&&(n.$f._patchedMethods.delete(this),o._m.revert(ee),this._r=void 0),t!==null){let[i,s,c,a,l,d]=e,p=si(i,s,c,l,d,t,this),f=Xo(a);p._m=f,this._r=p,f.replace(p,c===Re,d,ee,ce),n.$f._patchedMethods.add(this)}}},returnType:{enumerable:!0,get(){return this._p[4]}},argumentTypes:{enumerable:!0,get(){return this._p[5]}},canInvokeWith:{enumerable:!0,value(t){let e=this._p[5];return t.length!==e.length?!1:e.every((n,r)=>n.isCompatible(t[r]))}},clone:{enumerable:!0,value(t){let e=this._p.slice(0,6);return Ye(...e,null,t)}},invoke:{value(t,e){let n=ee.getEnv(),r=this._p,o=r[2],i=r[4],s=r[5],c=this._r,a=o===Re,l=e.length,d=2+l;n.pushLocalFrame(d);let p=null;try{let f;a?f=t.$getHandle():(p=t.$borrowClassHandle(n),f=p.value);let u,g=t.$t;c===void 0?u=r[3]:(u=c._m.resolveTarget(t,a,n,ce),ti&&c._c.has(Vt())&&(g=ei));let m=[n.handle,f,u];for(let x=0;x!==l;x++)m.push(s[x].toJni(e[x],n));let E;g===Ut?E=r[6]:(E=r[7],a&&m.splice(2,0,t.$copyClassHandle(n)));let w=E.apply(null,m);return n.throwIfExceptionPending(),i.fromJni(w,n,!0)}finally{p!==null&&p.unref(n),n.popLocalFrame(NULL)}}},toString:{enumerable:!0,value(){return`function ${this.methodName}(${this.argumentTypes.map(t=>t.className).join(", ")}): ${this.returnType.className}`}}});function si(t,e,n,r,o,i,s=null){let c=new Set,a=gu([t,e,n,r,o,i,s,c]),l=new NativeCallback(a,r.type,["pointer","pointer"].concat(o.map(d=>d.type)));return l._c=c,l}function gu(t){return function(){return yu(arguments,t)}}function yu(t,e){let n=new I(t[0],ee),[r,o,i,s,c,a,l,d]=e,p=[],f;if(i===Re){let m=o.$C;f=new m(t[1],Ut,n,!1)}else f=o;let u=Vt();n.pushLocalFrame(3);let g=!0;ee.link(u,n);try{d.add(u);let m;l===null||!Xe.has(u)?m=a:m=l;let E=[],w=t.length-2;for(let D=0;D!==w;D++){let z=c[D].fromJni(t[2+D],n,!1);E.push(z),p.push(z)}let x=m.apply(f,E);if(!s.isCompatible(x))throw new Error(`Implementation for ${r} expected return value compatible with ${s.className}`);let L=s.toJni(x,n);return s.type==="pointer"&&(L=n.popLocalFrame(L),g=!1,p.push(x)),L}catch(m){let E=m.$h;return E!==void 0?n.throw(E):Script.nextTick(()=>{throw m}),s.defaultValue}finally{ee.unlink(u),g&&n.popLocalFrame(NULL),d.delete(u),p.forEach(m=>{if(m===null)return;let E=m.$dispose;E!==void 0&&E.call(m)})}}function bu(t){let{holder:e,type:n}=t[0];t.some(o=>o.type===n&&o.argumentTypes.length===0)||t.push(Eu([e,n]))}function Eu(t){let e=vu();return Object.setPrototypeOf(e,ii),e._p=t,e}function vu(){return function(){return this}}ii=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return"valueOf"}},holder:{enumerable:!0,get(){return this._p[0]}},type:{enumerable:!0,get(){return this._p[1]}},handle:{enumerable:!0,get(){return NULL}},implementation:{enumerable:!0,get(){return null},set(t){}},returnType:{enumerable:!0,get(){let t=this.holder;return t.$f.use(t.$n)}},argumentTypes:{enumerable:!0,get(){return[]}},canInvokeWith:{enumerable:!0,value(t){return t.length===0}},clone:{enumerable:!0,value(t){throw new Error("Invalid operation")}}});function Su(t,e,n,r,o){let i=e[2]==="s"?dr:fr,s=ptr(e.substr(3)),{$f:c}=r,a,l=o.toReflectedField(n,s,i===dr?1:0);try{a=o.vaMethod("pointer",[])(o.handle,l,o.javaLangReflectField().getGenericType),o.throwIfExceptionPending()}finally{o.deleteLocalRef(l)}let d;try{d=c._getType(o.getTypeName(a))}finally{o.deleteLocalRef(a)}let p,f,u=d.type;return i===dr?(p=o.getStaticField(u),f=o.setStaticField(u)):(p=o.getField(u),f=o.setField(u)),wu([i,d,s,p,f])}function wu(t){return function(e){return new ai([e].concat(t))}}function ai(t){this._p=t}Object.defineProperties(ai.prototype,{value:{enumerable:!0,get(){let[t,e,n,r,o]=this._p,i=ee.getEnv();i.pushLocalFrame(4);let s=null;try{let c;if(e===fr){if(c=t.$getHandle(),c===null)throw new Error("Cannot access an instance field without an instance")}else s=t.$borrowClassHandle(i),c=s.value;let a=o(i.handle,c,r);return i.throwIfExceptionPending(),n.fromJni(a,i,!0)}finally{s!==null&&s.unref(i),i.popLocalFrame(NULL)}},set(t){let[e,n,r,o,,i]=this._p,s=ee.getEnv();s.pushLocalFrame(4);let c=null;try{let a;if(n===fr){if(a=e.$getHandle(),a===null)throw new Error("Cannot access an instance field without an instance")}else c=e.$borrowClassHandle(s),a=c.value;if(!r.isCompatible(t))throw new Error(`Expected value compatible with ${r.className}`);let l=r.toJni(t,s);i(s.handle,a,o,l),s.throwIfExceptionPending()}finally{c!==null&&c.unref(s),s.popLocalFrame(NULL)}}},holder:{enumerable:!0,get(){return this._p[0]}},fieldType:{enumerable:!0,get(){return this._p[1]}},fieldReturnType:{enumerable:!0,get(){return this._p[2]}},toString:{enumerable:!0,value(){let t=`Java.Field{holder: ${this.holder}, fieldType: ${this.fieldType}, fieldReturnType: ${this.fieldReturnType}, value: ${this.value}}`;return t.length<200?t:`Java.Field{
	holder: ${this.holder},
	fieldType: ${this.fieldType},
	fieldReturnType: ${this.fieldReturnType},
	value: ${this.value},
}`.split(`
`).map(n=>n.length>200?n.slice(0,n.indexOf(" ")+1)+"...,":n).join(`
`)}}});var zt=class t{static fromBuffer(e,n){let r=Yo(n),o=r.getCanonicalPath().toString(),i=new File(o,"w");return i.write(e.buffer),i.close(),Iu(o,n),new t(o,r,n)}constructor(e,n,r){this.path=e,this.file=n,this._factory=r}load(){let{_factory:e}=this,{codeCacheDir:n}=e,r=e.use("dalvik.system.DexClassLoader"),o=e.use("java.io.File"),i=this.file;if(i===null&&(i=e.use("java.io.File").$new(this.path)),!i.exists())throw new Error("File not found");o.$new(n).mkdirs(),e.loader=r.$new(i.getCanonicalPath(),n,null,e.loader),ee.preventDetachDueToClassLoader()}getClassNames(){let{_factory:e}=this,n=e.use("dalvik.system.DexFile"),r=Yo(e),o=n.loadDex(this.path,r.getCanonicalPath(),0),i=[],s=o.entries();for(;s.hasMoreElements();)i.push(s.nextElement().toString());return i}};function Yo(t){let{cacheDir:e,tempFileNaming:n}=t,r=t.use("java.io.File"),o=r.$new(e);return o.mkdirs(),r.createTempFile(n.prefix,n.suffix+".dex",o)}function Iu(t,e){e.use("java.io.File").$new(t).setWritable(!1,!1)}function xu(){switch(be.state){case"empty":{be.state="pending";let t=be.factories[0],e=t.use("java.util.HashMap"),n=t.use("java.lang.Integer");be.loaders=e.$new(),be.Integer=n;let r=t.loader;return r!==null&&_r(t,r),be.state="ready",be}case"pending":do Thread.sleep(.05);while(be.state==="pending");return be;case"ready":return be}}function _r(t,e){let{factories:n,loaders:r,Integer:o}=be,i=o.$new(n.indexOf(t));r.put(e,i);for(let s=e.getParent();s!==null&&!r.containsKey(s);s=s.getParent())r.put(s,i)}function ci(t){let e=Xe.get(t);e===void 0&&(e=0),e++,Xe.set(t,e)}function li(t){let e=Xe.get(t);if(e===void 0)throw new Error(`Thread ${t} is not ignored`);e--,e===0?Xe.delete(t):Xe.set(t,e)}function Cu(t){return t.slice(t.lastIndexOf(".")+1)}function gr(t,e){let n=[],r=t.getArrayLength(e);for(let o=0;o!==r;o++){let i=t.getObjectArrayElement(e,o);try{n.push(t.getTypeName(i))}finally{t.deleteLocalRef(i)}}return n}function Au(t){let e=t.split(".");return e[e.length-1]+".java"}var Tu=4,di=Process.pointerSize,Er=class{ACC_PUBLIC=1;ACC_PRIVATE=2;ACC_PROTECTED=4;ACC_STATIC=8;ACC_FINAL=16;ACC_SYNCHRONIZED=32;ACC_BRIDGE=64;ACC_VARARGS=128;ACC_NATIVE=256;ACC_ABSTRACT=1024;ACC_STRICT=2048;ACC_SYNTHETIC=4096;constructor(){this.classFactory=null,this.ClassFactory=Fe,this.vm=null,this.api=null,this._initialized=!1,this._apiError=null,this._wakeupHandler=null,this._pollListener=null,this._pendingMainOps=[],this._pendingVmOps=[],this._cachedIsAppProcess=null;try{this._tryInitialize()}catch{}}_tryInitialize(){if(this._initialized)return!0;if(this._apiError!==null)throw this._apiError;let e;try{e=ko(),this.api=e}catch(r){throw this._apiError=r,r}if(e===null)return!1;let n=new ke(e);return this.vm=n,$o(n),Fe._initialize(n,e),this.classFactory=new Fe,this._initialized=!0,!0}_dispose(){if(this.api===null)return;let{vm:e}=this;e.perform(n=>{Fe._disposeAll(n),I.dispose(n)}),Script.nextTick(()=>{ke.dispose(e)})}get available(){return this._tryInitialize()}get androidVersion(){return ut()}synchronized(e,n){let{$h:r=e}=e;if(!(r instanceof NativePointer))throw new Error("Java.synchronized: the first argument `obj` must be either a pointer or a Java instance");let o=this.vm.getEnv();ye("VM::MonitorEnter",o.monitorEnter(r));try{n()}finally{o.monitorExit(r)}}enumerateLoadedClasses(e){this._checkAvailable();let{flavor:n}=this.api;n==="jvm"?this._enumerateLoadedClassesJvm(e):n==="art"?this._enumerateLoadedClassesArt(e):this._enumerateLoadedClassesDalvik(e)}enumerateLoadedClassesSync(){let e=[];return this.enumerateLoadedClasses({onMatch(n){e.push(n)},onComplete(){}}),e}enumerateClassLoaders(e){this._checkAvailable();let{flavor:n}=this.api;if(n==="jvm")this._enumerateClassLoadersJvm(e);else if(n==="art")this._enumerateClassLoadersArt(e);else throw new Error("Enumerating class loaders is not supported on Dalvik")}enumerateClassLoadersSync(){let e=[];return this.enumerateClassLoaders({onMatch(n){e.push(n)},onComplete(){}}),e}_enumerateLoadedClassesJvm(e){let{api:n,vm:r}=this,{jvmti:o}=n,i=r.getEnv(),s=Memory.alloc(Tu),c=Memory.alloc(di);o.getLoadedClasses(s,c);let a=s.readS32(),l=c.readPointer(),d=[];for(let p=0;p!==a;p++)d.push(l.add(p*di).readPointer());o.deallocate(l);try{for(let p of d){let f=i.getClassName(p);e.onMatch(f,p)}e.onComplete()}finally{d.forEach(p=>{i.deleteLocalRef(p)})}}_enumerateClassLoadersJvm(e){this.choose("java.lang.ClassLoader",e)}_enumerateLoadedClassesArt(e){let{vm:n,api:r}=this,o=n.getEnv(),i=r["art::JavaVMExt::AddGlobalRef"],{vm:s}=r;Ce(n,o,c=>{let a=Gn(l=>{let d=i(s,c,l);try{let p=o.getClassName(d);e.onMatch(p,d)}finally{o.deleteGlobalRef(d)}return!0});r["art::ClassLinker::VisitClasses"](r.artClassLinker.address,a)}),e.onComplete()}_enumerateClassLoadersArt(e){let{classFactory:n,vm:r,api:o}=this,i=r.getEnv(),s=o["art::ClassLinker::VisitClassLoaders"];if(s===void 0)throw new Error("This API is only available on Android >= 7.0");let c=n.use("java.lang.ClassLoader"),a=[],l=o["art::JavaVMExt::AddGlobalRef"],{vm:d}=o;Ce(r,i,p=>{let f=$n(u=>(a.push(l(d,p,u)),!0));Jn(()=>{s(o.artClassLinker.address,f)})});try{a.forEach(p=>{let f=n.cast(p,c);e.onMatch(f)})}finally{a.forEach(p=>{i.deleteGlobalRef(p)})}e.onComplete()}_enumerateLoadedClassesDalvik(e){let{api:n}=this,r=ptr("0xcbcacccd"),o=172,i=8,c=n.gDvm.add(o).readPointer(),a=c.readS32(),d=c.add(12).readPointer(),p=a*i;for(let f=0;f<p;f+=i){let g=d.add(f).add(4).readPointer();if(g.isNull()||g.equals(r))continue;let E=g.add(24).readPointer().readUtf8String();if(E.startsWith("L")){let w=E.substring(1,E.length-1).replace(/\//g,".");e.onMatch(w)}}e.onComplete()}enumerateMethods(e){let{classFactory:n}=this,r=this.vm.getEnv(),o=n.use("java.lang.ClassLoader");return Ve.enumerateMethods(e,this.api,r).map(i=>{let s=i.loader;return i.loader=s!==null?n.wrap(s,o,r):null,i})}scheduleOnMainThread(e){this.performNow(()=>{this._pendingMainOps.push(e);let{_wakeupHandler:n}=this;if(n===null){let{classFactory:r}=this,o=r.use("android.os.Handler"),i=r.use("android.os.Looper");n=o.$new(i.getMainLooper()),this._wakeupHandler=n}this._pollListener===null&&(this._pollListener=Interceptor.attach(Process.getModuleByName("libc.so").getExportByName("epoll_wait"),this._makePollHook()),Interceptor.flush()),n.sendEmptyMessage(1)})}_makePollHook(){let e=Process.id,{_pendingMainOps:n}=this;return function(){if(this.threadId!==e)return;let r;for(;(r=n.shift())!==void 0;)try{r()}catch(o){Script.nextTick(()=>{throw o})}}}perform(e){if(this._checkAvailable(),!this._isAppProcess()||this.classFactory.loader!==null)try{this.vm.perform(e)}catch(n){Script.nextTick(()=>{throw n})}else this._pendingVmOps.push(e),this._pendingVmOps.length===1&&this._performPendingVmOpsWhenReady()}performNow(e){return this._checkAvailable(),this.vm.perform(()=>{let{classFactory:n}=this;if(this._isAppProcess()&&n.loader===null){let o=n.use("android.app.ActivityThread").currentApplication();o!==null&&ui(n,o)}return e()})}_performPendingVmOpsWhenReady(){this.vm.perform(()=>{let{classFactory:e}=this,n=e.use("android.app.ActivityThread"),r=n.currentApplication();if(r!==null){ui(e,r),this._performPendingVmOps();return}let o=this,i=!1,s="early",c=n.handleBindApplication;c.implementation=function(d){if(d.instrumentationName.value!==null){s="late";let f=e.use("android.app.LoadedApk").makeApplication;f.implementation=function(u,g){return i||(i=!0,pi(e,this),o._performPendingVmOps()),f.apply(this,arguments)}}c.apply(this,arguments)};let l=n.getPackageInfo.overloads.map(d=>[d.argumentTypes.length,d]).sort(([d],[p])=>p-d).map(([d,p])=>p)[0];l.implementation=function(...d){let p=l.call(this,...d);return!i&&s==="early"&&(i=!0,pi(e,p),o._performPendingVmOps()),p}})}_performPendingVmOps(){let{vm:e,_pendingVmOps:n}=this,r;for(;(r=n.shift())!==void 0;)try{e.perform(r)}catch(o){Script.nextTick(()=>{throw o})}}use(e,n){return this.classFactory.use(e,n)}openClassFile(e){return this.classFactory.openClassFile(e)}choose(e,n){this.classFactory.choose(e,n)}retain(e){return this.classFactory.retain(e)}cast(e,n){return this.classFactory.cast(e,n)}array(e,n){return this.classFactory.array(e,n)}backtrace(e){return Hn(this.vm,e)}isMainThread(){let e=this.classFactory.use("android.os.Looper"),n=e.getMainLooper(),r=e.myLooper();return r===null?!1:n.$isSameObject(r)}registerClass(e){return this.classFactory.registerClass(e)}deoptimizeEverything(){let{vm:e}=this;return qn(e,e.getEnv())}deoptimizeBootImage(){let{vm:e}=this;return Qn(e,e.getEnv())}deoptimizeMethod(e){let{vm:n}=this;return Wn(n,n.getEnv(),e)}_checkAvailable(){if(!this.available)throw new Error("Java API not available")}_isAppProcess(){let e=this._cachedIsAppProcess;if(e===null){if(this.api.flavor==="jvm")return e=!1,this._cachedIsAppProcess=e,e;let n=new NativeFunction(Module.getGlobalExportByName("readlink"),"pointer",["pointer","pointer","pointer"],{exceptions:"propagate"}),r=Memory.allocUtf8String("/proc/self/exe"),o=1024,i=Memory.alloc(o),s=n(r,i,ptr(o)).toInt32();if(s!==-1){let c=i.readUtf8String(s);e=/^\/system\/bin\/app_process/.test(c)}else e=!0;this._cachedIsAppProcess=e}return e}};function ui(t,e){let n=t.use("android.os.Process");t.loader=e.getClassLoader(),n.myUid()===n.SYSTEM_UID.value?(t.cacheDir="/data/system",t.codeCacheDir="/data/dalvik-cache"):"getCodeCacheDir"in e?(t.cacheDir=e.getCacheDir().getCanonicalPath(),t.codeCacheDir=e.getCodeCacheDir().getCanonicalPath()):(t.cacheDir=e.getFilesDir().getCanonicalPath(),t.codeCacheDir=e.getCacheDir().getCanonicalPath())}function pi(t,e){let n=t.use("java.io.File");t.loader=e.getClassLoader();let r=n.$new(e.getDataDir()).getCanonicalPath();t.cacheDir=r,t.codeCacheDir=r+"/cache"}var vr=new Er;Script.bindWeak(vr,()=>{vr._dispose()});var fi=vr;typeof globalThis.Java>"u"&&(globalThis.Java=fi);var te={logInit:!0,logUpdate:!0,logDoFinal:!0,logAAD:!0,logSecretKeySpec:!0,logErrors:!0,showUtf8:!0,showHex:!0,showBase64:!0,showKeys:!0,showIV:!0,showProvider:!1,backtrace:!1,backtraceDepth:12,excludeAndroidFramework:!0,excludedStackPrefixes:["java.","javax.crypto.","sun.","android.","com.android.internal."],maxDumpBytes:4096,maxRememberedKeys:512,includeAlgorithms:[],excludeAlgorithms:[],includePackages:[],excludePackages:[]};function Nu(t){function e(h){try{return t.use(h)}catch{return null}}let n={Cipher:t.use("javax.crypto.Cipher"),SecretKeySpec:t.use("javax.crypto.spec.SecretKeySpec"),IvParameterSpec:t.use("javax.crypto.spec.IvParameterSpec"),GCMParameterSpec:e("javax.crypto.spec.GCMParameterSpec"),ChaCha20ParameterSpec:e("javax.crypto.spec.ChaCha20ParameterSpec"),OAEPParameterSpec:e("javax.crypto.spec.OAEPParameterSpec"),AlgorithmParameters:t.use("java.security.AlgorithmParameters"),SecureRandom:t.use("java.security.SecureRandom"),SecretKey:t.use("javax.crypto.SecretKey"),PublicKey:t.use("java.security.PublicKey"),PrivateKey:t.use("java.security.PrivateKey"),String:t.use("java.lang.String"),System:t.use("java.lang.System"),WeakReference:t.use("java.lang.ref.WeakReference"),Exception:t.use("java.lang.Exception"),Base64:t.use("android.util.Base64")};function r(h,_){try{return h()}catch{return _}}function o(h){try{h()}catch{}}function i(h){return h==null?null:r(function(){return h.toString()},"<unavailable>")}function s(h){return Number(r(function(){return h.valueOf()},h))}function c(h){return h==null?null:r(function(){return h.getClass().getName().toString()},"<unknown>")}let a=function(){let h=Object.create(null);function _(){return String(Process.getCurrentThreadId())}return{active:function(){return(h[_()]||0)>0},enter:function(){let b=_();h[b]=(h[b]||0)+1},leave:function(){let b=_(),S=(h[b]||1)-1;S<=0?delete h[b]:h[b]=S}}}();function l(h){let _=0;for(;_<h.length;){let b=h[_++];if(b<=127)continue;let S,y,C;if(b>=194&&b<=223)S=1,y=b&31,C=128;else if(b>=224&&b<=239)S=2,y=b&15,C=2048;else if(b>=240&&b<=244)S=3,y=b&7,C=65536;else return!1;if(_+S>h.length)return!1;for(let V=0;V<S;V++){let j=h[_++];if((j&192)!==128)return!1;y=y<<6|j&63}if(y<C||y>1114111||y>=55296&&y<=57343)return!1}return!0}let d={snapshotArray:function(h,_,b){if(h==null)return null;let S=s(h.length),y=_===void 0?0:s(_),C=b===void 0?S-y:s(b);if(!Number.isFinite(y)||!Number.isFinite(C)||y<0||C<0||y+C>S)return null;let V=Math.min(C,Math.max(0,te.maxDumpBytes)),j=new Array(V);for(let ne=0;ne<V;ne++)j[ne]=s(h[y+ne])&255;return{bytes:j,length:C,truncated:V<C}},snapshotByteBuffer:function(h,_,b){if(h==null)return null;let S=s(_===void 0?h.position():_),y=s(b===void 0?h.limit():b);if(!Number.isFinite(S)||!Number.isFinite(y)||S<0||y<S)return null;let C=y-S,V=Math.min(C,Math.max(0,te.maxDumpBytes)),j=h.duplicate();j.position(S),j.limit(S+V);let ne=t.array("byte",new Array(V).fill(0));j.get(ne);let Z=d.snapshotArray(ne);return Z.length=C,Z.truncated=V<C,Z},trimSnapshot:function(h,_){if(h===null)return null;let b=Math.max(0,s(_));return{bytes:h.bytes.slice(0,Math.min(h.bytes.length,b)),length:b,truncated:h.bytes.length<b}},hex:function(h){let _=new Array(h.length);for(let b=0;b<h.length;b++)_[b]=h[b].toString(16).padStart(2,"0");return _.join(" ")},base64:function(h){let _=new Array(h.length);for(let b=0;b<h.length;b++)_[b]=h[b]>127?h[b]-256:h[b];return n.Base64.encodeToString(t.array("byte",_),n.Base64.NO_WRAP.value).toString()},printableUtf8:function(h){if(!l(h))return null;let _=new Array(h.length);for(let S=0;S<h.length;S++)_[S]=h[S]>127?h[S]-256:h[S];let b=n.String.$new(t.array("byte",_),"UTF-8").toString();for(let S=0;S<b.length;S++){let y=b.charCodeAt(S);if(y<32&&y!==9&&y!==10&&y!==13||y>=127&&y<=159)return null}return b}},p={frames:function(){let h=n.Exception.$new().getStackTrace(),_=[];for(let b=0;b<h.length;b++){let S=h[b],y=S.getClassName().toString();y!=="javax.crypto.Cipher"&&_.push({className:y,methodName:S.getMethodName().toString(),fileName:i(S.getFileName()),lineNumber:s(S.getLineNumber())})}return _},callSiteAllowed:function(h){return te.includePackages.length>0&&!h.some(function(_){return f(_.className,te.includePackages)})?!1:!h.some(function(_){return f(_.className,te.excludePackages)})},format:function(h){let _=[];for(let b=0;b<h.length&&_.length<te.backtraceDepth;b++){let S=h[b];if(te.excludeAndroidFramework&&te.excludedStackPrefixes.some(function(C){return S.className.indexOf(C)===0}))continue;let y=S.fileName===null?"":" ("+S.fileName+":"+S.lineNumber+")";_.push(S.className+"."+S.methodName+y)}return _}};function f(h,_){let b=h||"",S=b.toUpperCase();return _.some(function(y){return y instanceof RegExp?(y.lastIndex=0,y.test(b)):S.indexOf(String(y).toUpperCase())!==-1})}function u(h){return te.includeAlgorithms.length>0&&!f(h,te.includeAlgorithms)?!1:!f(h,te.excludeAlgorithms)}function g(h){if(!u(h))return{allowed:!1,frames:null};if(te.includePackages.length===0&&te.excludePackages.length===0&&!te.backtrace)return{allowed:!0,frames:null};let _=r(p.frames,[]);return{allowed:p.callSiteAllowed(_),frames:_}}let m=function(){let h=Object.create(null),_=1,b=0;function S(Z){return String(s(n.System.identityHashCode(Z)))}function y(Z,q){return r(function(){return Z.equals(q)},!1)===!0}function C(Z){let q=S(Z),le=h[q];if(!le)return j(),null;for(let ue=le.length-1;ue>=0;ue--){let k=le[ue].reference.get();if(k===null)le.splice(ue,1);else if(y(k,Z))return j(),le[ue].state}return le.length===0&&delete h[q],j(),null}function V(Z,q){let le=S(Z),ue=h[le];ue||(ue=[],h[le]=ue);for(let k=ue.length-1;k>=0;k--){let pe=ue[k].reference.get();if(pe===null)ue.splice(k,1);else if(y(pe,Z))return ue[k].state=q,j(),q}return ue.push({reference:n.WeakReference.$new(Z),state:q}),j(),q}function j(){b++,(b&255)===0&&Object.keys(h).forEach(function(Z){let q=h[Z].filter(function(le){return le.reference.get()!==null});q.length===0?delete h[Z]:h[Z]=q})}function ne(Z){return Object.assign({id:_++,inputBytes:0,outputBytes:0,updateCount:0,finalCount:0,aadBytes:0,aadCount:0},Z)}return{createAfterInit:function(Z,q){return V(Z,ne(q))},get:C,getOrDiscover:function(Z){let q=C(Z);return q!==null?q:V(Z,ne({transformation:r(function(){return Z.getAlgorithm().toString()},"<unknown>"),mode:"UNKNOWN (attached after init)"}))}}}();function E(h){return(h+"                    ").slice(0,20)}function w(h,_,b){if(b===null){h.push("  "+E(_+" Length")+": <null>");return}h.push("  "+E(_+" Length")+": "+b.length+(b.truncated?" (showing first "+b.bytes.length+")":""));let S=te.showUtf8?r(function(){return d.printableUtf8(b.bytes)},null):null;S!==null&&h.push("  "+E(_+" UTF-8")+": "+JSON.stringify(S)),te.showHex&&h.push("  "+E(_+" Hex")+": "+d.hex(b.bytes)),te.showBase64&&h.push("  "+E(_+" Base64")+": "+d.base64(b.bytes))}let x={event:function(h,_,b,S,y,C){let V=h&&h.transformation?h.transformation:"<unknown>",j=h&&h.mode?h.mode:"UNKNOWN",Z=["[Cipher #"+(h&&h.id?h.id:"?")+"]["+V+"]["+j+"] "+_];if((b||[]).forEach(function(q){q[1]!==null&&q[1]!==void 0&&Z.push("  "+E(q[0])+": "+q[1])}),(S||[]).forEach(function(q){w(Z,q[0],q[1])}),(y||[]).forEach(function(q){Z.push("  "+E("Warning")+": "+q)}),te.backtrace){let q=p.format(C||r(p.frames,[]));q.length>0&&(Z.push("  Call site:"),q.forEach(function(le){Z.push("    "+le)}))}o(function(){console.log(Z.join(`
`))})},error:function(h,_,b,S){te.logErrors&&x.event(h,_+" THREW",[["Exception",i(b)]],[],[],S)},secretKeySpec:function(h,_,b,S,y){let C=["[SecretKeySpec] CREATE","  "+E("Algorithm")+": "+_];C.push("  "+E("Constructor")+": "+h),S!==null&&C.push("  "+E("Source Range")+": offset "+S+", length "+y),w(C,"Key",b),o(function(){console.log(C.join(`
`))})}};function L(h){switch(s(h)){case 1:return"ENCRYPT";case 2:return"DECRYPT";case 3:return"WRAP";case 4:return"UNWRAP";default:return"UNKNOWN("+s(h)+")"}}function D(h){if(h==null)return{algorithm:null,format:null,className:null,role:null,encoded:null,sizeBits:null};let _=r(function(){return h.getEncoded()},null),b=_===null?null:d.snapshotArray(_),S="Key";return n.SecretKey.class.isInstance(h)?S="SecretKey":n.PublicKey.class.isInstance(h)?S="PublicKey":n.PrivateKey.class.isInstance(h)&&(S="PrivateKey"),{algorithm:r(function(){return h.getAlgorithm().toString()},"<unknown>"),format:r(function(){let y=h.getFormat();return y===null?"<non-exportable>":y.toString()},"<unavailable>"),className:c(h),role:S,encoded:b,sizeBits:b===null?null:b.length*8}}function F(h){let _={className:c(h),iv:null,gcmTagBits:null,chaChaCounter:null,details:null};if(h==null)return _;if(n.GCMParameterSpec!==null&&n.GCMParameterSpec.class.isInstance(h)){let b=t.cast(h,n.GCMParameterSpec);_.iv=d.snapshotArray(b.getIV()),_.gcmTagBits=s(b.getTLen())}else if(n.IvParameterSpec.class.isInstance(h))_.iv=d.snapshotArray(t.cast(h,n.IvParameterSpec).getIV());else if(n.ChaCha20ParameterSpec!==null&&n.ChaCha20ParameterSpec.class.isInstance(h)){let b=t.cast(h,n.ChaCha20ParameterSpec);_.iv=d.snapshotArray(b.getNonce()),_.chaChaCounter=s(b.getCounter())}else if(n.OAEPParameterSpec!==null&&n.OAEPParameterSpec.class.isInstance(h)){let b=t.cast(h,n.OAEPParameterSpec);_.details="digest="+b.getDigestAlgorithm()+", mgf="+b.getMGFAlgorithm()}else _.details=r(function(){return h.toString()},null);return _}function z(h){if(h==null)return null;let _={className:c(h),algorithm:r(function(){return h.getAlgorithm().toString()},null),encoded:null,spec:null,text:r(function(){return h.toString()},null)},b=r(function(){return h.getEncoded()},null);return _.encoded=b===null?null:d.snapshotArray(b),n.GCMParameterSpec!==null&&(_.spec=r(function(){return F(h.getParameterSpec(n.GCMParameterSpec.class))},null)),_.spec===null&&(_.spec=r(function(){return F(h.getParameterSpec(n.IvParameterSpec.class))},null)),_}function B(h){let _={opmode:s(h[0]),mode:L(h[0]),key:D(h[1]),explicitSpec:null,explicitParameters:null,secureRandom:null};for(let b=2;b<h.length;b++){let S=h[b];S!=null&&(n.AlgorithmParameters.class.isInstance(S)?_.explicitParameters=z(S):n.SecureRandom.class.isInstance(S)?_.secureRandom=c(S):_.explicitSpec=F(S))}return _}function R(h,_){let b=r(function(){return h.getIV()},null),S=z(r(function(){return h.getParameters()},null)),y=r(function(){let j=h.getProvider();return j===null?null:j.getName().toString()},null),C=_.explicitSpec,V=S&&S.spec?S.spec:null;return{transformation:r(function(){return h.getAlgorithm().toString()},"<unknown>"),mode:_.mode,opmode:_.opmode,key:_.key,explicitSpec:C,parameters:S||_.explicitParameters,provider:y,secureRandom:_.secureRandom,iv:b===null?C?C.iv:null:d.snapshotArray(b),gcmTagBits:C&&C.gcmTagBits!==null?C.gcmTagBits:V?V.gcmTagBits:null}}function A(h){let _=[],b=(h.transformation||"").toUpperCase();return(b.indexOf("/ECB/")!==-1||/(^|\/)ECB($|\/)/.test(b))&&_.push("ECB mode detected; identical blocks may reveal patterns"),h.key&&h.key.algorithm&&h.key.algorithm.toUpperCase()==="AES"&&h.key.sizeBits!==null&&[128,192,256].indexOf(h.key.sizeBits)===-1&&_.push("Unusual AES key length: "+h.key.sizeBits+" bits"),h.iv!==null&&(b.indexOf("GCM")!==-1&&h.iv.length!==12&&_.push("Non-typical GCM nonce length: "+h.iv.length+" bytes (commonly 12)"),b.indexOf("AES/CBC")!==-1&&h.iv.length!==16&&_.push("Unusual AES/CBC IV length: "+h.iv.length+" bytes")),_}function M(h,_){let b=h.key||{},S=b.algorithm&&b.algorithm.toUpperCase()==="AES"&&b.format==="RAW",y=[["Overload",h.initOverload],["Transformation",h.transformation],["Mode",h.mode],["Provider",te.showProvider?h.provider:null],["Key Algorithm",b.algorithm],["Key Role",b.role],["Key Class",b.className],["Key Format",b.format],[S?"AES Key Size":"Encoded Key Size",b.sizeBits===null||b.sizeBits===void 0?null:b.sizeBits+" bits"],["GCM Tag",h.gcmTagBits===null?null:h.gcmTagBits+" bits"],["Parameter Spec",h.explicitSpec?h.explicitSpec.className:null],["Parameter Details",h.explicitSpec?h.explicitSpec.details:null],["ChaCha Counter",h.explicitSpec?h.explicitSpec.chaChaCounter:null],["Parameters",h.parameters?h.parameters.algorithm||h.parameters.className:null],["SecureRandom",h.secureRandom]],C=[];te.showKeys&&C.push(["Key",b.encoded]),te.showIV&&h.iv!==null&&C.push(["IV",h.iv]),h.parameters&&h.parameters.encoded!==null&&C.push(["Parameters",h.parameters.encoded]),x.event(h,"INIT",y,C,A(h),_)}function U(h){return h.argumentTypes.map(function(_){return _.className}).join(",")}function T(h,_){h.implementation=function(){if(a.active())return h.apply(this,arguments);a.enter();let b=this,S=arguments,y=Array.prototype.slice.call(arguments),C=null;try{C=r(function(){return _.before?_.before(b,y):null},null);let V;try{V=h.apply(b,S)}catch(j){throw o(function(){_.error&&_.error(b,y,C,j)}),j}return o(function(){_.after&&_.after(b,y,C,V)}),V}finally{a.leave()}}}n.Cipher.init.overloads.forEach(function(h){let _=U(h);T(h,{before:function(b,S){return B(S)},after:function(b,S,y){let C=y||r(function(){return B(S)},null);if(C===null)return;let V=R(b,C);V.initOverload=_;let j=m.createAfterInit(b,V),ne=g(j.transformation);te.logInit&&ne.allowed&&M(j,ne.frames)},error:function(b,S,y,C){let V=m.get(b)||{id:"?",transformation:r(function(){return b.getAlgorithm().toString()},"<unknown>"),mode:y?y.mode:"UNKNOWN"},j=g(V.transformation);j.allowed&&x.error(V,"INIT",C,j.frames)}})});function J(h){return{inputPosition:s(h[0].position()),input:d.snapshotByteBuffer(h[0]),outputPosition:s(h[1].position())}}function H(h,_){return h==="[B"?{input:d.snapshotArray(_[0])}:h.indexOf("[B,int,int")===0?{input:d.snapshotArray(_[0],_[1],_[2])}:h==="java.nio.ByteBuffer,java.nio.ByteBuffer"?J(_):{input:null}}function K(h,_,b,S){return h==="[B"||h==="[B,int,int"?S===null?null:d.snapshotArray(S):h==="[B,int,int,[B"?d.snapshotArray(_[3],0,s(S)):h==="[B,int,int,[B,int"?d.snapshotArray(_[3],_[4],s(S)):h==="java.nio.ByteBuffer,java.nio.ByteBuffer"?d.snapshotByteBuffer(_[1],b.outputPosition,s(_[1].position())):null}n.Cipher.update.overloads.forEach(function(h){let _=U(h);T(h,{before:function(b,S){let y=m.getOrDiscover(b),C=g(y.transformation),V=te.logUpdate&&C.allowed?H(_,S):null;return{state:y,context:C,capture:V}},after:function(b,S,y,C){if(!y||!y.capture)return;let V=y.capture.input;_==="java.nio.ByteBuffer,java.nio.ByteBuffer"&&(V=d.trimSnapshot(V,s(S[0].position())-y.capture.inputPosition));let j=K(_,S,y.capture,C);y.state.inputBytes+=V===null?0:V.length,y.state.outputBytes+=j===null?0:j.length,y.state.updateCount++,x.event(y.state,"UPDATE",[["Overload",_],["Update #",y.state.updateCount],["Stream Input Total",y.state.inputBytes],["Stream Output Total",y.state.outputBytes]],[["Input",V],["Output",j]],[],y.context.frames)},error:function(b,S,y,C){let V=y&&y.state?y.state:m.getOrDiscover(b),j=y&&y.context?y.context:g(V.transformation);j.allowed&&x.error(V,"UPDATE",C,j.frames)}})});function $(h,_){return h===""?{input:null}:h==="[B"?{input:d.snapshotArray(_[0])}:h==="[B,int,int"||h.indexOf("[B,int,int,[B")===0?{input:d.snapshotArray(_[0],_[1],_[2])}:h==="[B,int"?{input:null}:h==="java.nio.ByteBuffer,java.nio.ByteBuffer"?J(_):{input:null}}function W(h,_,b,S){return h===""||h==="[B"||h==="[B,int,int"?S===null?null:d.snapshotArray(S):h==="[B,int"?d.snapshotArray(_[0],_[1],s(S)):h==="[B,int,int,[B"?d.snapshotArray(_[3],0,s(S)):h==="[B,int,int,[B,int"?d.snapshotArray(_[3],_[4],s(S)):h==="java.nio.ByteBuffer,java.nio.ByteBuffer"?d.snapshotByteBuffer(_[1],b.outputPosition,s(_[1].position())):null}n.Cipher.doFinal.overloads.forEach(function(h){let _=U(h);T(h,{before:function(b,S){let y=m.getOrDiscover(b),C=g(y.transformation),V=te.logDoFinal&&C.allowed?$(_,S):null;return{state:y,context:C,capture:V}},after:function(b,S,y,C){if(!y||!y.capture)return;let V=y.capture.input;_==="java.nio.ByteBuffer,java.nio.ByteBuffer"&&(V=d.trimSnapshot(V,s(S[0].position())-y.capture.inputPosition));let j=W(_,S,y.capture,C);y.state.inputBytes+=V===null?0:V.length,y.state.outputBytes+=j===null?0:j.length,y.state.finalCount++,x.event(y.state,"FINAL",[["Overload",_||"<no arguments>"],["Final #",y.state.finalCount],["Operation Input Total",y.state.inputBytes],["Operation Output Total",y.state.outputBytes],["AAD Total",y.state.aadBytes]],[["Input",V],["Output",j]],[],y.context.frames),y.state.inputBytes=0,y.state.outputBytes=0,y.state.updateCount=0,y.state.aadBytes=0,y.state.aadCount=0},error:function(b,S,y,C){let V=y&&y.state?y.state:m.getOrDiscover(b),j=y&&y.context?y.context:g(V.transformation);j.allowed&&x.error(V,"FINAL",C,j.frames)}})}),n.Cipher.updateAAD&&n.Cipher.updateAAD.overloads.forEach(function(h){let _=U(h);T(h,{before:function(b,S){let y=m.getOrDiscover(b),C=g(y.transformation);return!te.logAAD||!C.allowed?{state:y,context:C,enabled:!1}:_==="[B"?{state:y,context:C,enabled:!0,input:d.snapshotArray(S[0]),position:null}:_==="[B,int,int"?{state:y,context:C,enabled:!0,input:d.snapshotArray(S[0],S[1],S[2]),position:null}:_==="java.nio.ByteBuffer"?{state:y,context:C,enabled:!0,input:d.snapshotByteBuffer(S[0]),position:s(S[0].position())}:{state:y,context:C,enabled:!0,input:null,position:null}},after:function(b,S,y){if(!y||!y.enabled)return;let C=y.input;_==="java.nio.ByteBuffer"&&(C=d.trimSnapshot(C,s(S[0].position())-y.position)),y.state.aadBytes+=C===null?0:C.length,y.state.aadCount++,x.event(y.state,"AAD",[["Overload",_],["AAD Chunk #",y.state.aadCount],["AAD Total",y.state.aadBytes]],[["AAD",C]],[],y.context.frames)},error:function(b,S,y,C){let V=y&&y.state?y.state:m.getOrDiscover(b),j=y&&y.context?y.context:g(V.transformation);j.allowed&&x.error(V,"AAD",C,j.frames)}})});let re=new Set;function de(h){return re.has(h)?!1:(re.add(h),re.size>te.maxRememberedKeys&&re.delete(re.values().next().value),!0)}n.SecretKeySpec.$init.overloads.forEach(function(h){let _=U(h);_!=="[B,java.lang.String"&&_!=="[B,int,int,java.lang.String"||T(h,{before:function(b,S){let y=_==="[B,int,int,java.lang.String",C=y?s(S[1]):0,V=s(y?S[2]:S[0].length);return{algorithm:i(S[y?3:1]),key:d.snapshotArray(S[0],C,V),offset:y?C:null,length:V}},after:function(b,S,y){if(!te.logSecretKeySpec||!te.showKeys||y===null||y.key===null||!u(y.algorithm))return;let C=y.algorithm+":"+d.hex(y.key.bytes)+":"+y.key.length;de(C)&&x.secretKeySpec(_,y.algorithm,y.key,y.offset,y.length)},error:function(b,S,y,C){te.logErrors&&o(function(){console.log(`[SecretKeySpec] CREATE THREW
  `+E("Exception")+": "+i(C))})}})}),o(function(){console.log("[frida-java-crypto-spy] Generic Cipher hooks installed")})}(function(e){if(e==null){try{console.error("[frida-java-crypto-spy] Java bridge is unavailable. Frida 17 raw scripts must bundle frida-java-bridge.")}catch{}return}let n=typeof e.performNow=="function"?e.performNow:e.perform;try{console.log("[frida-java-crypto-spy] Agent evaluated; installing Java hooks"),n.call(e,function(){Nu(e)})}catch(r){try{console.error("[frida-java-crypto-spy] Hook installation failed: "+(r&&r.stack?r.stack:r))}catch{}}})(globalThis.Java);
