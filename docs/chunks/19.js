(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=f(n(0));n(80);var r=f(n(6)),i=f(n(79)),l=f(n(67)),s=f(n(77)),c=f(n(76)),u=f(n(75)),d=f(n(74));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"componentDidMount",value:function(){kit.createLazy({delay:2e3})}},{key:"render",value:function(){var e=this.props.bootstrap;return o.default.createElement("div",null,o.default.createElement("section",{className:r.default.commonSection},o.default.createElement("div",{className:e.row},o.default.createElement("div",{className:e.col},o.default.createElement("h1",{className:r.default.h1},"Lazy Load"),o.default.createElement("h2",{className:r.default.h2},"Tag images"),o.default.createElement(l.default,null,"In this demo-load was delayed for a 2 seconds so you can see the result, loader has no delay by default, but you can set it with options."),o.default.createElement("img",{className:[i.default.image,"kit-lazy"].join(" "),src:c.default,"data-src":s.default,alt:""}),o.default.createElement("img",{className:[i.default.image,"kit-lazy"].join(" "),src:d.default,"data-src":u.default,alt:""})))))}}]),t}();t.default=p},66:function(e,t,n){e.exports={noteHeading:"_16bKl",noteContainer:"_1Dg1_",noteAuthor:"_2BXvU"}},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),o=r(n(66));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.author?a.default.createElement("p",{className:o.default.noteAuthor},"—",e.author):null;return a.default.createElement("div",{className:o.default.noteContainer},a.default.createElement("div",{className:o.default.noteHeading},"Note"),a.default.createElement("div",{className:o.default.noteText},e.children),t)}},74:function(e,t){e.exports="/kit/images/highway-placeholder.jpg"},75:function(e,t){e.exports="/kit/images/highway.jpg"},76:function(e,t){e.exports="/kit/images/mountains-placeholder.jpg"},77:function(e,t){e.exports="/kit/images/mountains.jpg"},79:function(e,t,n){e.exports={image:"_30koY",image_mountains:"_2tUQo",image_highway:"_2v_E2",loaded:"_1hOwx"}},80:function(e,t){!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/Users/andrejponomarenko/Projects/kit.lazy/prod/",n(n.s=0)}([function(e,t,n){"use strict";n(1),document.kit||(document.kit={}),window.kit||(window.kit=document.kit);var a=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.serve=function(){!1===t.active&&(t.active=!0,setTimeout(function(){for(var e=t.toBeLoad,n=0;n<e.length;n++){var a=e[n],r=a.getBoundingClientRect();if(r.top<=window.innerHeight&&r.bottom>=0&&"none"!==getComputedStyle(a).display&&!a.lazyLoaded){if("IMG"===a.tagName){if(!a.dataset.src)throw new Error("Replaceable image should contain data-src attribute, with link to another image");a.src=a.dataset.src,a.lazyLoaded=!0}else a.kitAddClass(t.success),a.lazyLoaded=!0;a.kitRemoveClass(t.searchClass),t.onReplace&&t.onReplace(a),t.loaded=t.loaded.concat(e.splice(n,1)),n--,0===t.toBeLoad.length&&o(!1)}}t.active=!1},t.delay))},this.load=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.searchClass,n=[].slice.call(document.querySelectorAll("."+e));t.toBeLoad=t.toBeLoad.concat(n),t.toBeLoad.length>0&&o()},this.delay=0,this.active=!1,this.success="loaded",this.searchClass="kit-lazy",this.onReplace=!1,this.toBeLoad=[].slice.call(document.querySelectorAll("."+this.searchClass)),this.loaded=[]};function o(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];kit.lazy.serve(),e?(document.addEventListener("scroll",kit.lazy.serve),window.addEventListener("resize",kit.lazy.serve),window.addEventListener("orientationchange",kit.lazy.serve)):(document.removeEventListener("scroll",kit.lazy.serve),window.removeEventListener("resize",kit.lazy.serve),window.removeEventListener("orientationchange",kit.lazy.serve))}kit.createLazy=function(e){kit.lazy?(e&&Object.assign(kit.lazy,e),kit.lazy.load()):(kit.lazy=e?Object.assign(new a,e):new a,o())}},function(e,t,n){"use strict";Element.prototype.kitAddClass=function(e){return this.kitHasClass(e)||(this.className+=" "+e),this},Element.prototype.kitRemoveClass=function(e){return this.kitHasClass(e)&&(this.className=this.className.replace(new RegExp("[\\s]{0,1}\\b"+e+"\\b","g"),"")),this},Element.prototype.kitHasClass=function(e){return this.className.indexOf(e)>=0}}])}}]);