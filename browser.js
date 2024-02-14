// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return t!=t}var n=Math.floor;function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var o=r(),e=Object.prototype.toString,i=Object.prototype.hasOwnProperty;function f(t,n){return null!=t&&i.call(t,n)}var u,a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"",y=o&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return e.call(t);r=t[c],n=f(t,c);try{t[c]=void 0}catch(n){return e.call(t)}return o=e.call(t),n?t[c]=r:delete t[c],o}:function(t){return e.call(t)},l="function"==typeof Uint32Array,p="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var t,n,r;if("function"!=typeof p)return!1;try{n=new p(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(l&&r instanceof Uint32Array||"[object Uint32Array]"===y(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?b:function(){throw new Error("not implemented")};var v,m=u,d=r(),A=Object.prototype.toString,S="function"==typeof Symbol?Symbol:void 0,g="function"==typeof S?S.toStringTag:"",U=d&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return A.call(t);r=t[g],n=f(t,g);try{t[g]=void 0}catch(n){return A.call(t)}return o=A.call(t),n?t[g]=r:delete t[g],o}:function(t){return A.call(t)},w="function"==typeof Float64Array,s="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;v=function(){var t,n,r;if("function"!=typeof s)return!1;try{n=new s([1,3.14,-3.14,NaN]),r=n,t=(w&&r instanceof Float64Array||"[object Float64Array]"===U(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?h:function(){throw new Error("not implemented")};var T,N=v,j=r(),F=Object.prototype.toString,I="function"==typeof Symbol?Symbol:void 0,E="function"==typeof I?I.toStringTag:"",O=j&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return F.call(t);r=t[E],n=f(t,E);try{t[E]=void 0}catch(n){return F.call(t)}return o=F.call(t),n?t[E]=r:delete t[E],o}:function(t){return F.call(t)},x="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var t,n,r;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=n,t=(x&&r instanceof Uint8Array||"[object Uint8Array]"===O(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?V:function(){throw new Error("not implemented")};var Y,_=T,G=r(),M=Object.prototype.toString,k="function"==typeof Symbol?Symbol:void 0,q="function"==typeof k?k.toStringTag:"",z=G&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return M.call(t);r=t[q],n=f(t,q);try{t[q]=void 0}catch(n){return M.call(t)}return o=M.call(t),n?t[q]=r:delete t[q],o}:function(t){return M.call(t)},B="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,D="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var t,n,r;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),r=n,t=(B&&r instanceof Uint16Array||"[object Uint16Array]"===z(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?D:function(){throw new Error("not implemented")};var H,J={uint16:Y,uint8:_};(H=new J.uint16(1))[0]=4660;var K=52===new J.uint8(H.buffer)[0],L=!0===K?1:0,Q=new N(1),R=new m(Q.buffer);function W(t){return Q[0]=t,R[L]}var X=!0===K?1:0,Z=new N(1),$=new m(Z.buffer),tt=Number.NEGATIVE_INFINITY,nt=.6931471803691238,rt=1.9082149292705877e-10,ot=1048575;function et(n){var r,o,e,i,f,u,a,c,y,l,p,b;return 0===n?tt:t(n)||n<0?NaN:(f=0,(o=W(n))<1048576&&(f-=54,o=W(n*=0x40000000000000)),o>=2146435072?n+n:(f+=(o>>20)-1023|0,f+=(c=614244+(o&=ot)&1048576|0)>>20|0,a=(n=function(t,n){return Z[0]=t,$[X]=n>>>0,Z[0]}(n,o|1072693248^c))-1,(ot&2+o)<3?0===a?0===f?0:f*nt+f*rt:(u=a*a*(.5-.3333333333333333*a),0===f?a-u:f*nt-(u-f*rt-a)):(c=o-398458|0,y=440401-o|0,i=(p=(b=(l=a/(2+a))*l)*b)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=b*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),u=e+i,(c|=y)>0?(r=.5*a*a,0===f?a-(r-l*(r+u)):f*nt-(r-(l*(r+u)+f*rt)-a)):0===f?a-l*(a-u):f*nt-(l*(a-u)-f*rt-a))))}var it=Number.POSITIVE_INFINITY,ft=2.23606797749979,ut=et(1.618033988749895);return function(r){var o,e,i;return t(r)||0==(n(i=r)===i)||r<1||r===it?NaN:(o=et((r+=1)*ft)/ut,e=et(ft*(r+o)-5+3/r)/ut,n(r+e-2))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).nonfibonacci=n();
//# sourceMappingURL=browser.js.map
