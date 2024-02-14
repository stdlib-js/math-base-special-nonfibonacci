// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return t!=t}var r=Math.floor;function n(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var o=n();var e=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;function i(t,r){return null!=t&&a.call(t,r)}var u="function"==typeof Symbol?Symbol:void 0,f="function"==typeof u?u.toStringTag:"";var c=o&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return e.call(t);n=t[f],r=i(t,f);try{t[f]=void 0}catch(r){return e.call(t)}return o=e.call(t),r?t[f]=n:delete t[f],o}:function(t){return e.call(t)},y="function"==typeof Uint32Array;var l="function"==typeof Uint32Array?Uint32Array:null;var v,p="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(y&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?p:function(){throw new Error("not implemented")};var b=v,m=n();var A=Object.prototype.toString;var S="function"==typeof Symbol?Symbol:void 0,d="function"==typeof S?S.toStringTag:"";var U=m&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return A.call(t);n=t[d],r=i(t,d);try{t[d]=void 0}catch(r){return A.call(t)}return o=A.call(t),r?t[d]=n:delete t[d],o}:function(t){return A.call(t)},g="function"==typeof Float64Array;var w="function"==typeof Float64Array?Float64Array:null;var h,N="function"==typeof Float64Array?Float64Array:void 0;h=function(){var t,r,n;if("function"!=typeof w)return!1;try{r=new w([1,3.14,-3.14,NaN]),n=r,t=(g&&n instanceof Float64Array||"[object Float64Array]"===U(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?N:function(){throw new Error("not implemented")};var T=h,s=n();var j=Object.prototype.toString;var F="function"==typeof Symbol?Symbol:void 0,I="function"==typeof F?F.toStringTag:"";var E=s&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return j.call(t);n=t[I],r=i(t,I);try{t[I]=void 0}catch(r){return j.call(t)}return o=j.call(t),r?t[I]=n:delete t[I],o}:function(t){return j.call(t)},O="function"==typeof Uint8Array;var x="function"==typeof Uint8Array?Uint8Array:null;var P,V="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var t,r,n;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,256,257]),n=r,t=(O&&n instanceof Uint8Array||"[object Uint8Array]"===E(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?V:function(){throw new Error("not implemented")};var Y=P,_=n();var G=Object.prototype.toString;var M="function"==typeof Symbol?Symbol:void 0,k="function"==typeof M?M.toStringTag:"";var q=_&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o;if(null==t)return G.call(t);n=t[k],r=i(t,k);try{t[k]=void 0}catch(r){return G.call(t)}return o=G.call(t),r?t[k]=n:delete t[k],o}:function(t){return G.call(t)},z="function"==typeof Uint16Array;var B="function"==typeof Uint16Array?Uint16Array:null;var C,D="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var t,r,n;if("function"!=typeof B)return!1;try{r=new B(r=[1,3.14,-3.14,65536,65537]),n=r,t=(z&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?D:function(){throw new Error("not implemented")};var H,J={uint16:C,uint8:Y};(H=new J.uint16(1))[0]=4660;var K=52===new J.uint8(H.buffer)[0],L=!0===K?1:0,Q=new T(1),R=new b(Q.buffer);function W(t){return Q[0]=t,R[L]}var X=!0===K?1:0,Z=new T(1),$=new b(Z.buffer);var tt=Number.NEGATIVE_INFINITY;var rt=.6931471803691238,nt=1.9082149292705877e-10;function ot(r){var n,o,e,a,i,u,f,c,y,l,v,p;return 0===r?tt:t(r)||r<0?NaN:(i=0,(o=W(r))<1048576&&(i-=54,o=W(r*=0x40000000000000)),o>=2146435072?r+r:(i+=(o>>20)-1023|0,i+=(c=(o&=1048575)+614244&1048576|0)>>20|0,f=(r=function(t,r){return Z[0]=t,$[X]=r>>>0,Z[0]}(r,o|1072693248^c))-1,(1048575&2+o)<3?0===f?0===i?0:i*rt+i*nt:(u=f*f*(.5-.3333333333333333*f),0===i?f-u:i*rt-(u-i*nt-f)):(c=o-398458|0,y=440401-o|0,a=(v=(p=(l=f/(2+f))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(v),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(v),u=e+a,(c|=y)>0?(n=.5*f*f,0===i?f-(n-l*(n+u)):i*rt-(n-(l*(n+u)+i*nt)-f)):0===i?f-l*(f-u):i*rt-(l*(f-u)-i*nt-f))))}var et=Number.POSITIVE_INFINITY,at=ot(1.618033988749895);function it(n){var o,e,a;return t(n)||!1==(r(a=n)===a)||n<1||n===et?NaN:(o=ot(2.23606797749979*(n+=1))/at,e=ot(2.23606797749979*(n+o)-5+3/n)/at,r(n+e-2))}export{it as default};
//# sourceMappingURL=mod.js.map
