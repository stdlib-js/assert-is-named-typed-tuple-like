// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return t&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;function o(t,r){return null!=t&&e.call(t,r)}var i="function"==typeof Symbol?Symbol.toStringTag:"";var a=r()?function(t){var r,e,a;if(null==t)return n.call(t);e=t[i],r=o(t,i);try{t[i]=void 0}catch(r){return n.call(t)}return a=n.call(t),r?t[i]=e:delete t[i],a}:function(t){return n.call(t)},f="function"==typeof Object.defineProperty?Object.defineProperty:null;var u,c=Object.defineProperty,y=Object.prototype,l=y.toString,p=y.__defineGetter__,v=y.__defineSetter__,A=y.__lookupGetter__,d=y.__lookupSetter__;u=function(){try{return f({},"x",{}),!0}catch(t){return!1}}()?c:function(t,r,n){var e,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===l.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(A.call(t,r)||d.call(t,r)?(e=t.__proto__,t.__proto__=y,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&p&&p.call(t,r,n.get),a&&v&&v.call(t,r,n.set),t};var s=u;function b(t,r,n){s(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function w(){return/^\s*function\s*([^(]*)/i}var m=/^\s*function\s*([^(]*)/i;b(w,"REGEXP",m);var j=Array.isArray?Array.isArray:function(t){return"[object Array]"===a(t)};function h(t){return null!==t&&"object"==typeof t}function _(t){var r,n,e,o;if(("Object"===(n=a(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=m.exec(e.toString()))return r[1]}return h(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}b(h,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!j(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(h));var U=/./;function I(t){return"boolean"==typeof t}var g=Boolean.prototype.toString;var F=r();function E(t){return"object"==typeof t&&(t instanceof Boolean||(F?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===a(t)))}function O(t){return I(t)||E(t)}function S(){return new Function("return this;")()}b(O,"isPrimitive",I),b(O,"isObject",E);var C="object"==typeof self?self:null,P="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof T?T:null;var N=function(t){if(arguments.length){if(!I(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(C)return C;if(P)return P;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),V=N.document&&N.document.childNodes,k=Int8Array;var x="function"==typeof U||"object"==typeof k||"function"==typeof V?function(t){return _(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?_(t).toLowerCase():r};function G(t){return"function"===x(t)}function L(){}var M="foo"===L.name;var R,X=Object.getPrototypeOf;R=G(Object.getPrototypeOf)?X:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===a(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Y=R;function q(t){return null==t?null:(t=Object(t),Y(t))}var z="function"==typeof Float64Array;var D="function"==typeof Float64Array?Float64Array:null;function H(){var t,r,n;if("function"!=typeof D)return!1;try{r=new D([1,3.14,-3.14,NaN]),n=r,t=(z&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}var J="function"==typeof Float64Array?Float64Array:void 0;var K=H()?J:function(){throw new Error("not implemented")},Q="function"==typeof Int8Array;var W="function"==typeof Int8Array?Int8Array:null;var Z="function"==typeof Int8Array?Int8Array:void 0;var $=function(){var t,r,n;if("function"!=typeof W)return!1;try{r=new W([1,3.14,-3.14,128]),n=r,t=(Q&&n instanceof Int8Array||"[object Int8Array]"===a(n))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){t=!1}return t}()?Z:function(){throw new Error("not implemented")},tt="function"==typeof Uint8Array;var rt="function"==typeof Uint8Array?Uint8Array:null;var nt="function"==typeof Uint8Array?Uint8Array:void 0;var et=function(){var t,r,n;if("function"!=typeof rt)return!1;try{r=new rt(r=[1,3.14,-3.14,256,257]),n=r,t=(tt&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?nt:function(){throw new Error("not implemented")},ot="function"==typeof Uint8ClampedArray;var it="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var at="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ft=function(){var t,r,n;if("function"!=typeof it)return!1;try{r=new it([-1,0,1,3.14,4.99,255,256]),n=r,t=(ot&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===a(n))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){t=!1}return t}()?at:function(){throw new Error("not implemented")},ut="function"==typeof Int16Array;var ct="function"==typeof Int16Array?Int16Array:null;var yt="function"==typeof Int16Array?Int16Array:void 0;var lt=function(){var t,r,n;if("function"!=typeof ct)return!1;try{r=new ct([1,3.14,-3.14,32768]),n=r,t=(ut&&n instanceof Int16Array||"[object Int16Array]"===a(n))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){t=!1}return t}()?yt:function(){throw new Error("not implemented")},pt="function"==typeof Uint16Array;var vt="function"==typeof Uint16Array?Uint16Array:null;var At="function"==typeof Uint16Array?Uint16Array:void 0;var dt=function(){var t,r,n;if("function"!=typeof vt)return!1;try{r=new vt(r=[1,3.14,-3.14,65536,65537]),n=r,t=(pt&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?At:function(){throw new Error("not implemented")},st="function"==typeof Int32Array;var bt="function"==typeof Int32Array?Int32Array:null;var wt="function"==typeof Int32Array?Int32Array:void 0;var mt=function(){var t,r,n;if("function"!=typeof bt)return!1;try{r=new bt([1,3.14,-3.14,2147483648]),n=r,t=(st&&n instanceof Int32Array||"[object Int32Array]"===a(n))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){t=!1}return t}()?wt:function(){throw new Error("not implemented")},jt="function"==typeof Uint32Array;var ht="function"==typeof Uint32Array?Uint32Array:null;var _t="function"==typeof Uint32Array?Uint32Array:void 0;var Ut=function(){var t,r,n;if("function"!=typeof ht)return!1;try{r=new ht(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(jt&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?_t:function(){throw new Error("not implemented")},It="function"==typeof Float32Array;var gt=Number.POSITIVE_INFINITY,Ft="function"==typeof Float32Array?Float32Array:null;var Et="function"==typeof Float32Array?Float32Array:void 0;var Ot=[K,function(){var t,r,n;if("function"!=typeof Ft)return!1;try{r=new Ft([1,3.14,-3.14,5e40]),n=r,t=(It&&n instanceof Float32Array||"[object Float32Array]"===a(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===gt}catch(r){t=!1}return t}()?Et:function(){throw new Error("not implemented")},mt,Ut,lt,dt,$,et,ft],St=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Ct=H()?q(K):Pt;function Pt(){}function Tt(t){return function(t){var r,n;if("object"!=typeof t||null===t)return!1;if(t instanceof Ct)return!0;for(n=0;n<Ot.length;n++)if(t instanceof Ot[n])return!0;for(;t;){for(r=_(t),n=0;n<St.length;n++)if(St[n]===r)return!0;t=q(t)}return!1}(t)&&"function"==typeof t.fieldOf&&"function"==typeof t.findField&&"function"==typeof t.ind2key&&"function"==typeof t.key2ind&&"function"==typeof t.lastFieldOf&&"function"==typeof t.subtuple&&o(t,"fields")&&o(t,"orderedFields")}Ct="TypedArray"===function(t){if(!1===G(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return M?t.name:m.exec(t.toString())[1]}(Ct)?Ct:Pt;export{Tt as default};
//# sourceMappingURL=mod.js.map
