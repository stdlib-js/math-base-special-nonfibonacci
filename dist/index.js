"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var s=o(function(b,t){
var q=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-assert-is-integer/dist'),i=require('@stdlib/math-base-special-ln/dist'),f=require('@stdlib/math-base-special-floor/dist'),n=require('@stdlib/constants-float64-phi/dist'),I=require('@stdlib/constants-float64-pinf/dist'),u=2.23606797749979,v=i(n);function N(r){var e,a;return q(r)||c(r)===!1||r<1||r===I?NaN:(r+=1,e=i(r*u)/v,a=i(u*(r+e)-5+3/r)/v,f(r+a-2))}t.exports=N
});var l=s();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
