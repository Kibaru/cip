!function(MA,qt){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=MA.document?qt(MA,!0):function(ne){if(!ne.document)throw new Error("jQuery requires a window with a document");return qt(ne)}:qt(MA)}(typeof window<"u"?window:this,function(MA,qt){"use strict";var ne=[],zA=Object.getPrototypeOf,Y=ne.slice,D=ne.flat?function(a){return ne.flat.call(a)}:function(a){return ne.concat.apply([],a)},t=ne.push,B=ne.indexOf,r={},n=r.toString,o=r.hasOwnProperty,h=o.toString,l=h.call(Object),Q={},E=function(M){return"function"==typeof M&&"number"!=typeof M.nodeType&&"function"!=typeof M.item},c=function(M){return null!=M&&M===M.window},d=MA.document,f={type:!0,src:!0,nonce:!0,noModule:!0};function u(a,M,e){var g,v,p=(e=e||d).createElement("script");if(p.text=a,M)for(g in f)(v=M[g]||M.getAttribute&&M.getAttribute(g))&&p.setAttribute(g,v);e.head.appendChild(p).parentNode.removeChild(p)}function A(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?r[n.call(a)]||"object":typeof a}var s="3.6.3",i=function(a,M){return new i.fn.init(a,M)};function w(a){var M=!!a&&"length"in a&&a.length,e=A(a);return!E(a)&&!c(a)&&("array"===e||0===M||"number"==typeof M&&M>0&&M-1 in a)}i.fn=i.prototype={jquery:s,constructor:i,length:0,toArray:function(){return Y.call(this)},get:function(a){return null==a?Y.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var M=i.merge(this.constructor(),a);return M.prevObject=this,M},each:function(a){return i.each(this,a)},map:function(a){return this.pushStack(i.map(this,function(M,e){return a.call(M,e,M)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(i.grep(this,function(a,M){return(M+1)%2}))},odd:function(){return this.pushStack(i.grep(this,function(a,M){return M%2}))},eq:function(a){var M=this.length,e=+a+(a<0?M:0);return this.pushStack(e>=0&&e<M?[this[e]]:[])},end:function(){return this.prevObject||this.constructor()},push:t,sort:ne.sort,splice:ne.splice},i.extend=i.fn.extend=function(){var a,M,e,g,v,p,b=arguments[0]||{},O=1,X=arguments.length,nA=!1;for("boolean"==typeof b&&(nA=b,b=arguments[O]||{},O++),"object"!=typeof b&&!E(b)&&(b={}),O===X&&(b=this,O--);O<X;O++)if(null!=(a=arguments[O]))for(M in a)g=a[M],"__proto__"!==M&&b!==g&&(nA&&g&&(i.isPlainObject(g)||(v=Array.isArray(g)))?(e=b[M],p=v&&!Array.isArray(e)?[]:v||i.isPlainObject(e)?e:{},v=!1,b[M]=i.extend(nA,p,g)):void 0!==g&&(b[M]=g));return b},i.extend({expando:"jQuery"+(s+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var M,e;return!(!a||"[object Object]"!==n.call(a)||(M=zA(a))&&("function"!=typeof(e=o.call(M,"constructor")&&M.constructor)||h.call(e)!==l))},isEmptyObject:function(a){var M;for(M in a)return!1;return!0},globalEval:function(a,M,e){u(a,{nonce:M&&M.nonce},e)},each:function(a,M){var e,g=0;if(w(a))for(e=a.length;g<e&&!1!==M.call(a[g],g,a[g]);g++);else for(g in a)if(!1===M.call(a[g],g,a[g]))break;return a},makeArray:function(a,M){var e=M||[];return null!=a&&(w(Object(a))?i.merge(e,"string"==typeof a?[a]:a):t.call(e,a)),e},inArray:function(a,M,e){return null==M?-1:B.call(M,a,e)},merge:function(a,M){for(var e=+M.length,g=0,v=a.length;g<e;g++)a[v++]=M[g];return a.length=v,a},grep:function(a,M,e){for(var v=[],p=0,b=a.length,O=!e;p<b;p++)!M(a[p],p)!==O&&v.push(a[p]);return v},map:function(a,M,e){var g,v,p=0,b=[];if(w(a))for(g=a.length;p<g;p++)null!=(v=M(a[p],p,e))&&b.push(v);else for(p in a)null!=(v=M(a[p],p,e))&&b.push(v);return D(b)},guid:1,support:Q}),"function"==typeof Symbol&&(i.fn[Symbol.iterator]=ne[Symbol.iterator]),i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,M){r["[object "+M+"]"]=M.toLowerCase()});var y=
/*!
     * Sizzle CSS Selector Engine v2.3.9
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2022-12-19