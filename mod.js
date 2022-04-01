// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return n!=n},r=Math.floor,t=r;var o=function(n){return t(n)===n};var e=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var a=function(){return e&&"symbol"==typeof Symbol.toStringTag},i=Object.prototype.toString,u=i;var f=function(n){return u.call(n)},c=Object.prototype.hasOwnProperty;var y=function(n,r){return null!=n&&c.call(n,r)},l="function"==typeof Symbol?Symbol.toStringTag:"",v=y,p=l,A=i;var U=f,w=function(n){var r,t,o;if(null==n)return A.call(n);t=n[p],r=v(n,p);try{n[p]=void 0}catch(r){return A.call(n)}return o=A.call(n),r?n[p]=t:delete n[p],o},b=a()?w:U,m=b,N="function"==typeof Uint32Array;var d="function"==typeof Uint32Array?Uint32Array:null,h=function(n){return N&&n instanceof Uint32Array||"[object Uint32Array]"===m(n)},F=d;var I=function(){var n,r;if("function"!=typeof F)return!1;try{r=new F(r=[1,3.14,-3.14,4294967296,4294967297]),n=h(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var S="function"==typeof Uint32Array?Uint32Array:void 0,s=function(){throw new Error("not implemented")},E=I()?S:s,j=b,T="function"==typeof Float64Array;var g="function"==typeof Float64Array?Float64Array:null,O=function(n){return T&&n instanceof Float64Array||"[object Float64Array]"===j(n)},x=g;var P=function(){var n,r;if("function"!=typeof x)return!1;try{r=new x([1,3.14,-3.14,NaN]),n=O(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var V="function"==typeof Float64Array?Float64Array:void 0,Y=function(){throw new Error("not implemented")},_=P()?V:Y,G=b,M="function"==typeof Uint8Array;var k="function"==typeof Uint8Array?Uint8Array:null,q=function(n){return M&&n instanceof Uint8Array||"[object Uint8Array]"===G(n)},z=k;var B=function(){var n,r;if("function"!=typeof z)return!1;try{r=new z(r=[1,3.14,-3.14,256,257]),n=q(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var C="function"==typeof Uint8Array?Uint8Array:void 0,D=function(){throw new Error("not implemented")},H=B()?C:D,J=b,K="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null,Q=function(n){return K&&n instanceof Uint16Array||"[object Uint16Array]"===J(n)},R=L;var W=function(){var n,r;if("function"!=typeof R)return!1;try{r=new R(r=[1,3.14,-3.14,65536,65537]),n=Q(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var X,Z="function"==typeof Uint16Array?Uint16Array:void 0,$=function(){throw new Error("not implemented")},nn={uint16:W()?Z:$,uint8:H};(X=new nn.uint16(1))[0]=4660;var rn=52===new nn.uint8(X.buffer)[0],tn=E,on=!0===rn?1:0,en=new _(1),an=new tn(en.buffer);var un=function(n){return en[0]=n,an[on]},fn=E,cn=!0===rn?1:0,yn=new _(1),ln=new fn(yn.buffer);var vn=function(n,r){return yn[0]=n,ln[cn]=r>>>0,yn[0]},pn=vn,An=Number.NEGATIVE_INFINITY;var Un=un,wn=pn,bn=n,mn=An,Nn=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},dn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},hn=.6931471803691238,Fn=1.9082149292705877e-10;var In=function(n){var r,t,o,e,a,i,u,f,c,y,l;return 0===n?mn:bn(n)||n<0?NaN:(e=0,(t=Un(n))<1048576&&(e-=54,t=Un(n*=0x40000000000000)),t>=2146435072?n+n:(e+=(t>>20)-1023|0,e+=(u=(t&=1048575)+614244&1048576|0)>>20|0,i=(n=wn(n,t|1072693248^u))-1,(1048575&2+t)<3?0===i?0===e?0:e*hn+e*Fn:(a=i*i*(.5-.3333333333333333*i),0===e?i-a:e*hn-(a-e*Fn-i)):(u=t-398458|0,f=440401-t|0,o=(y=(l=(c=i/(2+i))*c)*l)*Nn(y),a=l*dn(y)+o,(u|=f)>0?(r=.5*i*i,0===e?i-(r-c*(r+a)):e*hn-(r-(c*(r+a)+e*Fn)-i)):0===e?i-c*(i-a):e*hn-(c*(i-a)-e*Fn-i))))},Sn=Number.POSITIVE_INFINITY,sn=n,En=o,jn=In,Tn=r,gn=Sn,On=jn(1.618033988749895);var xn=function(n){var r,t;return sn(n)||!1===En(n)||n<1||n===gn?NaN:(r=jn(2.23606797749979*(n+=1))/On,t=jn(2.23606797749979*(n+r)-5+3/n)/On,Tn(n+t-2))};export{xn as default};
//# sourceMappingURL=mod.js.map
