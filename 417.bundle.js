"use strict";(self.webpackChunkmfe4=self.webpackChunkmfe4||[]).push([[417],{417:(t,e,n)=>{n.r(e);var r,o,i=n(271),a=n.n(i),u=n(650),c=n.n(u),s=n(817),l=n.n(s),f=function(){return(f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},p=(0,s.createContext)(void 0),d="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",h="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js";const y=function(t){var e=t.config,n=void 0===(n=t.version)?3:n,i=void 0===(i=t.src)?2===n?d:h:i,a=t.onStartup,u=t.onLoad,c=t.onError,y=t.typesettingOptions,v=void 0===(v=t.renderMode)?"post":v,m=t.hideUntilTypeset;if(t=t.children,void 0!==(null==(b=(0,s.useContext)(p))?void 0:b.version)&&(null==b?void 0:b.version)!==n)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(2===n&&void 0!==o||3===n&&void 0!==r)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var b,w=(0,s.useRef)(b);if(null===(b=(0,s.useRef)((null==b?void 0:b.version)||null)).current)b.current=n;else if(b.current!==n)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var x=i||(2===n?d:h);function g(t,n){e&&(window.MathJax=e);var r=document.createElement("script");r.type="text/javascript",r.src=x,r.async=!1,r.addEventListener("load",(function(){var e=window.MathJax;a&&a(e),t(e),u&&u()})),r.addEventListener("error",(function(t){return n(t)})),document.getElementsByTagName("head")[0].appendChild(r)}return void 0===w.current&&(b={typesettingOptions:y,renderMode:v,hideUntilTypeset:m},2===n?void 0===r&&("undefined"!=typeof window?(r=new Promise(g)).catch((function(t){if(!c)throw Error("Failed to download MathJax version 2 from '".concat(x,"' due to: ").concat(t));c(t)})):(r=Promise.reject()).catch((function(t){}))):void 0===o&&("undefined"!=typeof window?(o=new Promise(g)).catch((function(t){if(!c)throw Error("Failed to download MathJax version 3 from '".concat(x,"' due to: ").concat(t));c(t)})):(o=Promise.reject()).catch((function(t){}))),w.current=f(f({},b),2===n?{version:2,promise:r}:{version:3,promise:o})),l().createElement(p.Provider,{value:w.current},t)};var v=function(){return(v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},m=function(t){return"Typesetting failed: ".concat(void 0!==t.message?t.message:t.toString())};const b=function(t){function e(){var t;"every"===x&&E&&"post"===g&&null!==b.current&&(b.current.style.visibility=null!=(t=null==(t=h.style)?void 0:t.visibility)?t:"visible"),M.current||("first"===x&&null!==b.current&&(b.current.style.visibility="visible"),o&&o(),M.current=!0),i&&i(),j.current=!1}var n=void 0!==(r=t.inline)&&r,r=t.hideUntilTypeset,o=t.onInitTypeset,i=t.onTypeset,a=t.text,u=t.dynamic,c=t.typesettingOptions,f=t.renderMode,d=t.children,h=function(t,e){var n={};for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]]);return n}(t,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),y=(0,s.useRef)(""),b=(0,s.useRef)(null),w=(0,s.useContext)(p),x=null!=r?r:null==w?void 0:w.hideUntilTypeset,g=null!=f?f:null==w?void 0:w.renderMode,O=null!=c?c:null==w?void 0:w.typesettingOptions,E=!1!==u&&(u||!1),M=(0,s.useRef)(!1),j=(0,s.useRef)(!1);return!j.current&&null!==b.current&&E&&"every"===x&&"post"===g&&(b.current.style.visibility="hidden"),("undefined"!=typeof window?s.useLayoutEffect:s.useEffect)((function(){if((E||!M.current)&&null!==b.current){if(!w)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if("pre"===g){if(!("string"==typeof(t=a)&&0<t.length))throw Error("Render mode 'pre' requires text prop to be set and non-empty, which was currently \"".concat(a,'"'));if(!c||!c.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(2===w.version)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}"post"!==g&&a===y.current||j.current||(j.current=!0,3===w.version?w.promise.then((function(t){var r;"pre"===g?(r=function(n){y.current=a,t.startup.document.clear(),t.startup.document.updateDocument(),null!==b.current&&(b.current.innerHTML=n.outerHTML),e()},c.fn.endsWith("Promise")?t.startup.promise.then((function(){return t[O.fn](a,v(v({},(null==O?void 0:O.options)||{}),{display:!n}))})).then(r).catch((function(t){throw e(),Error(m(t))})):t.startup.promise.then((function(){var e=t[O.fn](a,v(v({},(null==O?void 0:O.options)||{}),{display:!n}));r(e)})).catch((function(t){throw e(),Error(m(t))}))):t.startup.promise.then((function(){return t.typesetClear([b.current]),t.typesetPromise([b.current])})).then(e).catch((function(t){throw e(),Error(m(t))}))})).catch((function(t){throw e(),Error(m(t))})):w.promise.then((function(t){t.Hub.Queue(["Typeset",t.Hub,b.current]),t.Hub.Queue(e)})).catch((function(t){throw e(),Error(m(t))})))}var t})),l().createElement("span",v({},h,{style:v(v({display:n?"inline":"block"},h.style),{visibility:x?"hidden":null==(t=h.style)?void 0:t.visibility}),ref:b}),d)};function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function g(t){var e=function(t,e){if("object"!=w(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==w(e)?e:String(e)}function O(t){var e="function"==typeof Map?new Map:void 0;return O=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(E())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var o=new(t.bind.apply(t,r));return n&&M(o,n.prototype),o}(t,arguments,j(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),M(n,t)},O(t)}function E(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(E=function(){return!!t})()}function M(t,e){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},M(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var S=function(t){var e=t.data;return t.onUpdateData,n(147).HO.Ym,console.log(e),a().createElement("div",null,e.component.ui.showDescription?a().createElement("div",{dangerouslySetInnerHTML:{__html:e.component.content.description}}):a().createElement("div",null),a().createElement(y,{config:{loader:{load:["input/asciimath"]},asciimath:{displaystyle:!0,delimiters:[["$","$"],["`","`"]]}}},a().createElement(b,null,e.component.content.equation)))},J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e)}(u,t);var e,n,r,o,i=(r=u,o=E(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this)).dataState=null,t}return e=u,(n=[{key:"getDataState",value:function(){return this.dataState}},{key:"setDataState",value:function(t){this.dataState=t,console.log("react component set DataState:"),console.log(this.dataState)}},{key:"connectedCallback",value:function(){var t=this.getAttribute("data"),e=JSON.parse(t);console.log("react component input data"),console.log(e),c().render(a().createElement(S,{data:e,onUpdateData:this.setDataState}),this)}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(O(HTMLElement));customElements.define("react-component660394d5be361e17e019bbb9430bc6cd22c84e6cb4998e0add5529f2",J)},147:t=>{t.exports=JSON.parse('{"HO":{"Ym":"^17.0.1"}}')}}]);