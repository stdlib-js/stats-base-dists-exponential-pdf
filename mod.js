// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,i=n.__lookupGetter__,u=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(r,t)||u.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,f.get),v&&a&&a.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return r!=r}var y=Math.floor,v=Math.ceil;function p(r){return r<0?v(r):y(r)}var b=Number.NEGATIVE_INFINITY,A=Number.POSITIVE_INFINITY;function _(r){return r===A||r===b}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var s=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var U=w&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return s.call(r);n=r[d],a=d,t=null!=(o=r)&&m.call(o,a);try{r[d]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[d]=n:delete r[d],e}:function(r){return s.call(r)},h="function"==typeof Uint32Array;var g="function"==typeof Uint32Array?Uint32Array:null;var j,N="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var r,t,n;if("function"!=typeof g)return!1;try{t=new g(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(h&&n instanceof Uint32Array||"[object Uint32Array]"===U(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?N:function(){throw new Error("not implemented")};var I=j,O="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null;var E,F="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,t,n;if("function"!=typeof S)return!1;try{t=new S([1,3.14,-3.14,NaN]),n=t,r=(O&&n instanceof Float64Array||"[object Float64Array]"===U(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=E,T="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var P,L="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,256,257]),n=t,r=(T&&n instanceof Uint8Array||"[object Uint8Array]"===U(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V=P,W="function"==typeof Uint16Array;var M="function"==typeof Uint16Array?Uint16Array:null;var k,x="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,t,n;if("function"!=typeof M)return!1;try{t=new M(t=[1,3.14,-3.14,65536,65537]),n=t,r=(W&&n instanceof Uint16Array||"[object Uint16Array]"===U(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?x:function(){throw new Error("not implemented")};var Y,C={uint16:k,uint8:V};(Y=new C.uint16(1))[0]=4660;var q,z,B=52===new C.uint8(Y.buffer)[0];!0===B?(q=1,z=0):(q=0,z=1);var D={HIGH:q,LOW:z},J=new H(1),K=new I(J.buffer),Q=D.HIGH,R=D.LOW;function X(r,t,n,e){return J[0]=r,t[e]=K[Q],t[e+n]=K[R],t}function Z(r){return X(r,[0,0],1,0)}c(Z,"assign",X);var $,rr,tr=!0===B?1:0,nr=new H(1),er=new I(nr.buffer);function or(r){return nr[0]=r,er[tr]}!0===B?($=1,rr=0):($=0,rr=1);var ar={HIGH:$,LOW:rr},ir=new H(1),ur=new I(ir.buffer),fr=ar.HIGH,cr=ar.LOW;function lr(r,t){return ur[fr]=r,ur[cr]=t,ir[0]}var yr=[0,0];function vr(r,t,n,e){return l(r)||_(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}c((function(r){return vr(r,[0,0],1,0)}),"assign",vr);var pr=[0,0],br=[0,0];function Ar(r,t){var n,e,o,a,i,u;return 0===t||0===r||l(r)||_(r)?r:(vr(r,pr,1,0),t+=pr[1],t+=function(r){var t=or(r);return(t=(2146435072&t)>>>20)-1023|0}(r=pr[0]),t<-1074?(o=0,a=r,Z.assign(o,yr,1,0),i=yr[0],i&=2147483647,u=or(a),lr(i|=u&=2147483648,yr[1])):t>1023?r<0?b:A:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Z.assign(r,br,1,0),n=br[0],n&=2148532223,e*lr(n|=t+1023<<20,br[1])))}function _r(r){var t;return l(r)||r===A?r:r===b?0:r>709.782712893384?A:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,a,i;return Ar(1-(t-(e=r-t)*(a=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=p(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function wr(r,t){var n;return l(r)||l(t)||t<0||t===A?NaN:r<0?0:_r(-r/(n=1/t))/n}function sr(r){var t,n;return l(r)||r<0||r===A?(n=NaN,function(){return n}):(t=1/r,function(r){if(l(r))return NaN;if(r<0)return 0;return _r(-r/t)/t})}c(wr,"factory",sr);export{wr as default,sr as factory};
//# sourceMappingURL=mod.js.map
