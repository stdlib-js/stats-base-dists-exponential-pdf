// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function a(r,t,e){var a=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,a&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=a(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=a(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function A(r){var t,n,a=parseFloat(r.arg);if(!isFinite(a)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);a=r.arg}switch(r.specifier){case"e":case"E":n=a.toExponential(r.precision);break;case"f":case"F":n=a.toFixed(r.precision);break;case"g":case"G":f(a)<1e-4?((t=r.precision)>0&&(t-=1),n=a.toExponential(t)):n=a.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,w,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,v,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,d,"$1.e")),a>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function F(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var E=String.fromCharCode,_=isNaN,I=Array.isArray;function N(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,e,n,i,o,f,l,p,s;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(u(n=r[p]))f+=n;else{if(t=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!_(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=F(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function k(r){var t,e,n,a;for(e=[],a=0,n=S.exec(r);n;)(t=r.slice(a,S.lastIndex-n[0].length)).length&&e.push(t),e.push(j(n)),a=S.lastIndex,n=S.exec(r);return(t=r.slice(a)).length&&e.push(t),e}function x(r){return"string"==typeof r}function T(r){var t,e;if(!x(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[k(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return U.apply(null,t)}var O=Object.prototype,V=O.toString,G=O.__defineGetter__,H=O.__defineSetter__,W=O.__lookupGetter__,$=O.__lookupSetter__;var L=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((a="value"in e)&&(W.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=O,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,o="set"in e,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),o&&H&&H.call(r,t,e.set),r};function C(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function P(r){return r!=r}var R=Math.floor,Z=Math.ceil;function M(r){return r<0?Z(r):R(r)}var Y=Number,X=Y.NEGATIVE_INFINITY,z=Number.POSITIVE_INFINITY,q=Y.NEGATIVE_INFINITY,B=Y.NEGATIVE_INFINITY;function D(r){return r===z||r===B}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;var rr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof rr?rr.toStringTag:"";var er=J&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,a,i;if(null==r)return K.call(r);e=r[tr],i=tr,t=null!=(a=r)&&Q.call(a,i);try{r[tr]=void 0}catch(t){return K.call(r)}return n=K.call(r),t?r[tr]=e:delete r[tr],n}:function(r){return K.call(r)},nr="function"==typeof Uint32Array;var ar="function"==typeof Uint32Array?Uint32Array:null;var ir,or="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,t,e;if("function"!=typeof ar)return!1;try{t=new ar(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(nr&&e instanceof Uint32Array||"[object Uint32Array]"===er(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr=ir,ur="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var lr,pr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,t,e;if("function"!=typeof fr)return!1;try{t=new fr([1,3.14,-3.14,NaN]),e=t,r=(ur&&e instanceof Float64Array||"[object Float64Array]"===er(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=lr,yr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var gr,dr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,t,e;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,256,257]),e=t,r=(yr&&e instanceof Uint8Array||"[object Uint8Array]"===er(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr=gr,wr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var Ar,mr="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,t,e;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,65536,65537]),e=t,r=(wr&&e instanceof Uint16Array||"[object Uint16Array]"===er(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Fr,Er={uint16:Ar,uint8:hr};(Fr=new Er.uint16(1))[0]=4660;var _r,Ir,Nr=52===new Er.uint8(Fr.buffer)[0];!0===Nr?(_r=1,Ir=0):(_r=0,Ir=1);var Ur={HIGH:_r,LOW:Ir},Sr=new sr(1),jr=new cr(Sr.buffer),kr=Ur.HIGH,xr=Ur.LOW;function Tr(r,t,e,n){return Sr[0]=r,t[n]=jr[kr],t[n+e]=jr[xr],t}function Or(r){return Tr(r,[0,0],1,0)}C(Or,"assign",Tr);var Vr="function"==typeof Float64Array;var Gr="function"==typeof Float64Array?Float64Array:null;var Hr,Wr="function"==typeof Float64Array?Float64Array:void 0;Hr=function(){var r,t,e;if("function"!=typeof Gr)return!1;try{t=new Gr([1,3.14,-3.14,NaN]),e=t,r=(Vr&&e instanceof Float64Array||"[object Float64Array]"===er(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var $r=!0===Nr?1:0,Lr=new Hr(1),Cr=new cr(Lr.buffer);function Pr(r){return Lr[0]=r,Cr[$r]}var Rr="function"==typeof Float64Array;var Zr="function"==typeof Float64Array?Float64Array:null;var Mr,Yr,Xr,zr="function"==typeof Float64Array?Float64Array:void 0;Mr=function(){var r,t,e;if("function"!=typeof Zr)return!1;try{t=new Zr([1,3.14,-3.14,NaN]),e=t,r=(Rr&&e instanceof Float64Array||"[object Float64Array]"===er(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?zr:function(){throw new Error("not implemented")},!0===Nr?(Yr=1,Xr=0):(Yr=0,Xr=1);var qr={HIGH:Yr,LOW:Xr},Br=new Mr(1),Dr=new cr(Br.buffer),Jr=qr.HIGH,Kr=qr.LOW;function Qr(r,t){return Dr[Jr]=r,Dr[Kr]=t,Br[0]}var rt=[0,0];function tt(r,t,e,n){return P(r)||D(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}C((function(r){return tt(r,[0,0],1,0)}),"assign",tt);var et="function"==typeof Float64Array;var nt="function"==typeof Float64Array?Float64Array:null;var at,it,ot,ct="function"==typeof Float64Array?Float64Array:void 0;at=function(){var r,t,e;if("function"!=typeof nt)return!1;try{t=new nt([1,3.14,-3.14,NaN]),e=t,r=(et&&e instanceof Float64Array||"[object Float64Array]"===er(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ct:function(){throw new Error("not implemented")},!0===Nr?(it=1,ot=0):(it=0,ot=1);var ut={HIGH:it,LOW:ot},ft=new at(1),lt=new cr(ft.buffer),pt=ut.HIGH,st=ut.LOW;function yt(r,t,e,n){return ft[0]=r,t[n]=lt[pt],t[n+e]=lt[st],t}function vt(r){return yt(r,[0,0],1,0)}C(vt,"assign",yt);var gt=[0,0],dt=[0,0];function ht(r,t){var e,n,a,i,o,c;return 0===t||0===r||P(r)||D(r)?r:(tt(r,gt,1,0),t+=gt[1],t+=function(r){var t=Pr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=gt[0]),t<-1074?(a=0,i=r,Or.assign(a,rt,1,0),o=rt[0],o&=2147483647,c=Pr(i),Qr(o|=c&=2147483648,rt[1])):t>1023?r<0?q:z:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,vt.assign(r,dt,1,0),e=dt[0],e&=2148532223,n*Qr(e|=t+1023<<20,dt[1])))}function wt(r){var t;return P(r)||r===z?r:r===X?0:r>709.782712893384?z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,e){var n,a,i,o;return ht(1-(t-(n=r-t)*(i=n-(a=n*n)*(0===(o=a)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-.6931471803691238*(t=M(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function bt(r,t){var e;return P(r)||P(t)||t<0||t===z?NaN:r<0?0:wt(-r/(e=1/t))/e}function At(r){var t,e;return P(r)||r<0||r===z?(e=NaN,function(){return e}):(t=1/r,function(r){if(P(r))return NaN;if(r<0)return 0;return wt(-r/t)/t})}C(bt,"factory",At);export{bt as default,At as factory};
//# sourceMappingURL=mod.js.map
