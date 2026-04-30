"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=o(function(b,t){
var q=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-assert-is-integer/dist'),a=require('@stdlib/math-base-special-ln/dist'),f=require('@stdlib/math-base-special-floor/dist'),n=require('@stdlib/constants-float64-phi/dist'),I=require('@stdlib/constants-float64-pinf/dist'),u=2.23606797749979,v=a(n);function N(r){var e,i;return q(r)||c(r)===!1||r<1||r===I?NaN:(r+=1,e=a(r*u)/v,i=a(u*(r+e)-5+3/r)/v,f(r+i-2))}t.exports=N
});var l=s();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
