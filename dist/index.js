"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=u(function(g,s){
var n=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-exp/dist'),N=require('@stdlib/constants-float64-pinf/dist');function p(e,r){var t;return n(e)||n(r)||r<0||r===N?NaN:e<0?0:(t=1/r,q(-e/t)/t)}s.exports=p
});var v=u(function(h,f){
var y=require('@stdlib/utils-constant-function/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-exp/dist'),I=require('@stdlib/constants-float64-pinf/dist');function P(e){var r;if(c(e)||e<0||e===I)return y(NaN);return r=1/e,t;function t(i){return c(i)?NaN:i<0?0:F(-i/r)/r}}f.exports=P
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=a(),O=v();x(o,"factory",O);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
