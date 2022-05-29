// ==UserScript==
// @name        netangels-userscript
// @version     1.1.0
// @author      Vitalij Ryndin
// @description netangels-userscript
// @homepage    https://crashmax-dev.github.io/netangels-userscript/
// @updateURL   https://crashmax-dev.github.io/netangels-userscript/netangels-userscript.meta.js
// @downloadURL https://crashmax-dev.github.io/netangels-userscript/netangels-userscript.user.js
// @include     /^(http|https)://(panel.netangels.ru).*$/
// ==/UserScript==

!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var i=n(2),r=n.n(i)()((function(e){return e[1]}));r.push([e.i,".spoiler,.virtualhost_dbms-access__info{filter:blur(6px);transition:filter .5s ease-in}.spoiler:hover,.virtualhost_dbms-access__info:hover{filter:none}",""]),t.a=r},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],u=n[s]||0,c="".concat(s," ").concat(u);n[s]=u+1;var f=l(c),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:c,updater:_(d,t),references:1}),i.push(c)}return i}function u(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,f=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function v(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,p=0;function _(e,t){var n,i,r;if(t.singleton){var o=p++;n=h||(h=u(t)),i=d.bind(null,n,o,!1),r=d.bind(null,n,o,!0)}else n=u(t),i=v.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=l(n[i]);a[r].references--}for(var o=s(e,t),u=0;u<n.length;u++){var c=l(n[u]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);i&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";function i(e,t){var n=function(e){for(var t=e.split(/([#.])/),n="",i="",r=[],o=0;o<t.length;o++){var a=t[o];"#"===a?i=t[++o]:"."===a?r.push(t[++o]):a.length&&(n=a)}return{tag:n||"div",id:i,className:r.join(" ")}}(e),i=n.tag,r=n.id,o=n.className,a=t?document.createElementNS(t,i):document.createElement(i);return r&&(a.id=r),o&&(t?a.setAttribute("class",o):a.className=o),a}function r(e,t){var n=y(e),i=y(t);return t===i&&i.__redom_view&&(t=i.__redom_view),i.parentNode&&(o(t,i,n),n.removeChild(i)),t}function o(e,t,n){var i=t.__redom_lifecycle;if(a(i))t.__redom_lifecycle={};else{var r=n;for(t.__redom_mounted&&c(t,"onunmount");r;){var o=r.__redom_lifecycle||{};for(var l in i)o[l]&&(o[l]-=i[l]);a(o)&&(r.__redom_lifecycle=null),r=r.parentNode}}}function a(e){if(null==e)return!0;for(var t in e)if(e[t])return!1;return!0}n.r(t);var l=["onmount","onremount","onunmount"],s="undefined"!=typeof window&&"ShadowRoot"in window;function u(e,t,n,i){var r=y(e),a=y(t);t===a&&a.__redom_view&&(t=a.__redom_view),t!==a&&(a.__redom_view=t);var u=a.__redom_mounted,f=a.parentNode;return u&&f!==r&&o(0,a,f),null!=n?i?r.replaceChild(a,y(n)):r.insertBefore(a,y(n)):r.appendChild(a),function(e,t,n,i){for(var r=t.__redom_lifecycle||(t.__redom_lifecycle={}),o=n===i,a=!1,u=0,f=l;u<f.length;u+=1){var d=f[u];o||e!==t&&d in e&&(r[d]=(r[d]||0)+1),r[d]&&(a=!0)}if(!a)return void(t.__redom_lifecycle={});var v=n,h=!1;(o||v&&v.__redom_mounted)&&(c(t,o?"onremount":"onmount"),h=!0);for(;v;){var p=v.parentNode,_=v.__redom_lifecycle||(v.__redom_lifecycle={});for(var m in r)_[m]=(_[m]||0)+r[m];if(h)break;(v.nodeType===Node.DOCUMENT_NODE||s&&v instanceof ShadowRoot||p&&p.__redom_mounted)&&(c(v,o?"onremount":"onmount"),h=!0),v=p}}(t,a,r,f),t}function c(e,t){"onmount"===t||"onremount"===t?e.__redom_mounted=!0:"onunmount"===t&&(e.__redom_mounted=!1);var n=e.__redom_lifecycle;if(n){var i=e.__redom_view,r=0;for(var o in i&&i[t]&&i[t](),n)o&&r++;if(r)for(var a=e.firstChild;a;){var l=a.nextSibling;c(a,t),a=l}}}function f(e,t,n){e.style[t]=null==n?"":n}var d="http://www.w3.org/1999/xlink";function v(e,t,n,i){var r=y(e);if("object"==typeof t)for(var o in t)v(r,o,t[o],i);else{var a=r instanceof SVGElement,l="function"==typeof n;if("style"===t&&"object"==typeof n)!function(e,t,n){var i=y(e);if("object"==typeof t)for(var r in t)f(i,r,t[r]);else f(i,t,n)}(r,n);else if(a&&l)r[t]=n;else if("dataset"===t)p(r,n);else if(a||!(t in r)&&!l||"list"===t){if(a&&"xlink"===t)return void h(r,n);i&&"class"===t&&(n=r.className+" "+n),null==n?r.removeAttribute(t):r.setAttribute(t,n)}else r[t]=n}}function h(e,t,n){if("object"==typeof t)for(var i in t)h(e,i,t[i]);else null!=n?e.setAttributeNS(d,t,n):e.removeAttributeNS(d,t,n)}function p(e,t,n){if("object"==typeof t)for(var i in t)p(e,i,t[i]);else null!=n?e.dataset[t]=n:delete e.dataset[t]}function _(e){return document.createTextNode(null!=e?e:"")}function m(e,t,n){for(var i=0,r=t;i<r.length;i+=1){var o=r[i];if(0===o||o){var a=typeof o;"function"===a?o(e):"string"===a||"number"===a?e.appendChild(_(o)):b(y(o))?u(e,o):o.length?m(e,o,n):"object"===a&&v(e,o,null,n)}}}function w(e){return"string"==typeof e?S(e):y(e)}function y(e){return e.nodeType&&e||!e.el&&e||y(e.el)}function b(e){return e&&e.nodeType}var g={};function S(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];var r=typeof e;if("string"===r)t=x(e).cloneNode(!1);else if(b(e))t=e.cloneNode(!1);else{if("function"!==r)throw new Error("At least one argument required");var o=e;t=new(Function.prototype.bind.apply(o,[null].concat(n)))}return m(y(t),n,!0),t}var N=S;function x(e){return g[e]||(g[e]=i(e))}function j(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];for(var i=y(e),o=C(e,t,i.firstChild);o;){var a=o.nextSibling;r(e,o),o=a}}function C(e,t,n){for(var i=n,r=new Array(t.length),o=0;o<t.length;o++)r[o]=t[o]&&y(t[o]);for(var a=0;a<t.length;a++){var l=t[a];if(l){var s=r[a];if(s!==i)if(b(s)){var c=i&&i.nextSibling,f=null!=l.__redom_index&&c===r[a+1];u(e,l,i,f),f&&(i=c)}else null!=l.length&&(i=C(e,l,i));else i=i.nextSibling}}return i}S.extend=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var i=x(e);return S.bind.apply(S,[this,i].concat(t))};var k=function(e,t,n){this.View=e,this.initData=n,this.oldLookup={},this.lookup={},this.oldViews=[],this.views=[],null!=t&&(this.key="function"==typeof t?t:function(e){return function(t){return t[e]}}(t))};k.prototype.update=function(e,t){for(var n=this,i=n.View,r=n.key,o=n.initData,a=null!=r,l=this.lookup,s={},u=new Array(e.length),c=this.views,f=0;f<e.length;f++){var d=e[f],v=void 0;if(a){var h=r(d);v=l[h]||new i(o,d,f,e),s[h]=v,v.__redom_id=h}else v=c[f]||new i(o,d,f,e);v.update&&v.update(d,f,e,t),y(v.el).__redom_view=v,u[f]=v}this.oldViews=c,this.views=u,this.oldLookup=l,this.lookup=s};var A=function(e,t,n,i){this.View=t,this.initData=i,this.views=[],this.pool=new k(t,n,i),this.el=w(e),this.keySet=null!=n};A.prototype.update=function(e,t){void 0===e&&(e=[]);var n=this.keySet,i=this.views;this.pool.update(e,t);var o=this.pool,a=o.views,l=o.lookup;if(n)for(var s=0;s<i.length;s++){var u=i[s];null==l[u.__redom_id]&&(u.__redom_index=null,r(this,u))}for(var c=0;c<a.length;c++){a[c].__redom_index=c}j(this,a),n&&(this.lookup=l),this.views=a},A.extend=function(e,t,n,i){return A.bind(A,e,t,n,i)},A.extend;var T=function(e,t){this.el=_(""),this.visible=!1,this.view=null,this._placeholder=this.el,e instanceof Node?this._el=e:e.el instanceof Node?(this._el=e,this.view=e):this._View=e,this._initData=t};T.prototype.update=function(e,t){var n=this._placeholder,i=this.el.parentNode;if(e){if(!this.visible)if(this._el)u(i,this._el,n),r(i,n),this.el=y(this._el),this.visible=e;else{var o=new(0,this._View)(this._initData);this.el=y(o),this.view=o,u(i,o,n),r(i,n)}this.view&&this.view.update&&this.view.update(t)}else if(this.visible){if(this._el)return u(i,n,this._el),r(i,this._el),this.el=n,void(this.visible=e);u(i,n,this.view),r(i,this.view),this.el=n,this.view=null}this.visible=e};var M=function(e,t,n){this.el=w(e),this.Views=t,this.initData=n};M.prototype.update=function(e,t){if(e!==this.route){var n=this.Views[e];this.route=e,n&&(n instanceof Node||n.el instanceof Node)?this.view=n:this.view=n&&new n(this.initData,t),j(this.el,[this.view])}this.view&&this.view.update&&this.view.update(t,e)};var E="http://www.w3.org/2000/svg",O={};function D(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];var r=typeof e;if("string"===r)t=V(e).cloneNode(!1);else if(b(e))t=e.cloneNode(!1);else{if("function"!==r)throw new Error("At least one argument required");var o=e;t=new(Function.prototype.bind.apply(o,[null].concat(n)))}return m(y(t),n,!0),t}function V(e){return O[e]||(O[e]=i(e,E))}D.extend=function(e){var t=V(e);return D.bind(this,t)},D.ns=E;var L=n(1),q=n.n(L),P=n(0),B={insert:"head",singleton:!1};q()(P.a,B),P.a.locals;window.addEventListener("load",(()=>{var e,t,n=(e=e=>{var t=e.target.querySelectorAll(".vh_directive");t&&function(e){for(var t of e){if(t.querySelector("spoiler"))return;var n=t.querySelector("span"),[,i,r]=n.textContent.match(/(.+)=(.+)/),o=N("span",{className:"spoiler"},r);n.innerHTML="".concat(i,"=").concat(o.outerHTML)}}(t)},t=new MutationObserver((t=>{for(var n of t)e(n)})),()=>{var e=document.querySelector("#app");e&&t.observe(e,{childList:!0,subtree:!0})}),{history:i}=window,{pushState:r,replaceState:o}=i;i.pushState=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];r.apply(i,t),n()},i.replaceState=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];o.apply(i,t),n()},n()}))}]);