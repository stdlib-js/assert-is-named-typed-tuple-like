// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var n=function(){return t&&"symbol"==typeof Symbol.toStringTag},e=Object.prototype.toString,o=e;var i=function(r){return o.call(r)},a=Object.prototype.hasOwnProperty;var u=function(r,t){return null!=r&&a.call(r,t)},f="function"==typeof Symbol?Symbol.toStringTag:"",c=u,y=f,l=e;var p=i,v=function(r){var t,n,e;if(null==r)return l.call(r);n=r[y],t=c(r,y);try{r[y]=void 0}catch(t){return l.call(r)}return e=l.call(r),t?r[y]=n:delete r[y],e},A=n()?v:p,d="function"==typeof Object.defineProperty?Object.defineProperty:null;var s=function(){try{return d({},"x",{}),!0}catch(r){return!1}},b=Object.defineProperty,m=Object.prototype,w=m.toString,j=m.__defineGetter__,_=m.__defineSetter__,h=m.__lookupGetter__,U=m.__lookupSetter__;var g=function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===w.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===w.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(h.call(r,t)||U.call(r,t)?(e=r.__proto__,r.__proto__=m,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&j&&j.call(r,t,n.get),a&&_&&_.call(r,t,n.set),r},I=b,O=g,E=s()?I:O;var F=function(r,t,n){E(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},P=F;var S=function(){return/^\s*function\s*([^(]*)/i},C=S;P(C,"REGEXP",S());var T=C,B=A;var k=Array.isArray?Array.isArray:function(r){return"[object Array]"===B(r)};var N=function(r){return null!==r&&"object"==typeof r};P(N,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!k(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(N));var V=N;var x=A,G=T.REGEXP,M=function(r){return V(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var L=function(r){var t,n,e;if(("Object"===(n=x(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=G.exec(e.toString()))return t[1]}return M(r)?"Buffer":n},R=L,X=/./;var z=function(r){return"boolean"==typeof r},D=Boolean.prototype.toString;var Y=A,q=function(r){try{return D.call(r),!0}catch(r){return!1}},H=n();var J=function(r){return"object"==typeof r&&(r instanceof Boolean||(H?q(r):"[object Boolean]"===Y(r)))},K=z,Q=J;var W=P,Z=function(r){return K(r)||Q(r)},$=J;W(Z,"isPrimitive",z),W(Z,"isObject",$);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,nr=Z.isPrimitive,er=function(){return new Function("return this;")()},or=rr,ir=tr,ar=r(Object.freeze({__proto__:null}));var ur=function(r){if(arguments.length){if(!nr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return er()}if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")},fr=ur(),cr=fr.document&&fr.document.childNodes,yr=Int8Array,lr=X,pr=cr,vr=yr;var Ar=R;var dr=R;var sr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ar(r).toLowerCase():t},br=function(r){return dr(r).toLowerCase()},mr=function(){return"function"==typeof lr||"object"==typeof vr||"function"==typeof pr}()?br:sr;var wr=function(r){return"function"===mr(r)};var jr=function(){};var _r=wr,hr=T.REGEXP,Ur=function(){return"foo"===jr.name}();var gr=function(r){if(!1===_r(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return Ur?r.name:hr.exec(r.toString())[1]},Ir=Object.getPrototypeOf;var Or=function(r){return r.__proto__},Er=A,Fr=Or;var Pr=function(r){var t=Fr(r);return t||null===t?t:"[object Function]"===Er(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Sr=Ir,Cr=Pr,Tr=wr(Object.getPrototypeOf)?Sr:Cr;var Br=function(r){return null==r?null:(r=Object(r),Tr(r))},kr=A,Nr="function"==typeof Float64Array;var Vr="function"==typeof Float64Array?Float64Array:null,xr=function(r){return Nr&&r instanceof Float64Array||"[object Float64Array]"===kr(r)},Gr=Vr;var Mr=function(){var r,t;if("function"!=typeof Gr)return!1;try{t=new Gr([1,3.14,-3.14,NaN]),r=xr(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Lr="function"==typeof Float64Array?Float64Array:void 0,Rr=function(){throw new Error("not implemented")},Xr=Mr()?Lr:Rr,zr=A,Dr="function"==typeof Int8Array;var Yr="function"==typeof Int8Array?Int8Array:null,qr=function(r){return Dr&&r instanceof Int8Array||"[object Int8Array]"===zr(r)},Hr=Yr;var Jr="function"==typeof Int8Array?Int8Array:void 0,Kr=function(){throw new Error("not implemented")},Qr=function(){var r,t;if("function"!=typeof Hr)return!1;try{t=new Hr([1,3.14,-3.14,128]),r=qr(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Jr:Kr,Wr=A,Zr="function"==typeof Uint8Array;var $r="function"==typeof Uint8Array?Uint8Array:null,rt=function(r){return Zr&&r instanceof Uint8Array||"[object Uint8Array]"===Wr(r)},tt=$r;var nt="function"==typeof Uint8Array?Uint8Array:void 0,et=function(){throw new Error("not implemented")},ot=function(){var r,t;if("function"!=typeof tt)return!1;try{t=new tt(t=[1,3.14,-3.14,256,257]),r=rt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nt:et,it=A,at="function"==typeof Uint8ClampedArray;var ut="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,ft=function(r){return at&&r instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===it(r)},ct=ut;var yt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,lt=function(){throw new Error("not implemented")},pt=function(){var r,t;if("function"!=typeof ct)return!1;try{t=new ct([-1,0,1,3.14,4.99,255,256]),r=ft(t)&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?yt:lt,vt=A,At="function"==typeof Int16Array;var dt="function"==typeof Int16Array?Int16Array:null,st=function(r){return At&&r instanceof Int16Array||"[object Int16Array]"===vt(r)},bt=dt;var mt="function"==typeof Int16Array?Int16Array:void 0,wt=function(){throw new Error("not implemented")},jt=function(){var r,t;if("function"!=typeof bt)return!1;try{t=new bt([1,3.14,-3.14,32768]),r=st(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?mt:wt,_t=A,ht="function"==typeof Uint16Array;var Ut="function"==typeof Uint16Array?Uint16Array:null,gt=function(r){return ht&&r instanceof Uint16Array||"[object Uint16Array]"===_t(r)},It=Ut;var Ot="function"==typeof Uint16Array?Uint16Array:void 0,Et=function(){throw new Error("not implemented")},Ft=function(){var r,t;if("function"!=typeof It)return!1;try{t=new It(t=[1,3.14,-3.14,65536,65537]),r=gt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ot:Et,Pt=A,St="function"==typeof Int32Array;var Ct="function"==typeof Int32Array?Int32Array:null,Tt=function(r){return St&&r instanceof Int32Array||"[object Int32Array]"===Pt(r)},Bt=Ct;var kt="function"==typeof Int32Array?Int32Array:void 0,Nt=function(){throw new Error("not implemented")},Vt=function(){var r,t;if("function"!=typeof Bt)return!1;try{t=new Bt([1,3.14,-3.14,2147483648]),r=Tt(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?kt:Nt,xt=A,Gt="function"==typeof Uint32Array;var Mt="function"==typeof Uint32Array?Uint32Array:null,Lt=function(r){return Gt&&r instanceof Uint32Array||"[object Uint32Array]"===xt(r)},Rt=Mt;var Xt="function"==typeof Uint32Array?Uint32Array:void 0,zt=function(){throw new Error("not implemented")},Dt=function(){var r,t;if("function"!=typeof Rt)return!1;try{t=new Rt(t=[1,3.14,-3.14,4294967296,4294967297]),r=Lt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xt:zt,Yt=A,qt="function"==typeof Float32Array;var Ht=function(r){return qt&&r instanceof Float32Array||"[object Float32Array]"===Yt(r)},Jt=Number.POSITIVE_INFINITY,Kt="function"==typeof Float32Array?Float32Array:null,Qt=Ht,Wt=Jt,Zt=Kt;var $t,rn="function"==typeof Float32Array?Float32Array:void 0,tn=function(){throw new Error("not implemented")};$t=function(){var r,t;if("function"!=typeof Zt)return!1;try{t=new Zt([1,3.14,-3.14,5e40]),r=Qt(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===Wt}catch(t){r=!1}return r}()?rn:tn;var nn=R,en=gr,on=Br,an=Xr,un=[Xr,$t,Vt,Dt,jt,Ft,Qr,ot,pt],fn=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],cn=Mr()?on(an):yn;function yn(){}cn="TypedArray"===en(cn)?cn:yn;var ln=function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof cn)return!0;for(n=0;n<un.length;n++)if(r instanceof un[n])return!0;for(;r;){for(t=nn(r),n=0;n<fn.length;n++)if(fn[n]===t)return!0;r=on(r)}return!1},pn=u;var vn=function(r){return ln(r)&&"function"==typeof r.fieldOf&&"function"==typeof r.findField&&"function"==typeof r.ind2key&&"function"==typeof r.key2ind&&"function"==typeof r.lastFieldOf&&"function"==typeof r.subtuple&&pn(r,"fields")&&pn(r,"orderedFields")};export{vn as default};
//# sourceMappingURL=mod.js.map
