(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{53:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=c(a(0)),o=c(a(6)),r=c(a(72));function c(e){return e&&e.__esModule?e:{default:e}}a(71);var u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),n(t,[{key:"render",value:function(){var e=this.props.bootstrap;return l.default.createElement("section",{className:o.default.commonSection},l.default.createElement("div",{className:e.row},l.default.createElement("div",{className:e.col},l.default.createElement("h1",{className:o.default.h1},"Functions"),l.default.createElement("p",null,"List of methods and callbacks for Kit Lazy"),l.default.createElement("h2",{className:o.default.h2},"Methods"),l.default.createElement("h3",{className:o.default.h3},".load()"),l.default.createElement("p",null,"Updates working list with the new images, if they were generated",l.default.createElement("br",null),"Example:"),l.default.createElement("div",{className:o.default.codeContainer},l.default.createElement(r.default,{language:"javascript"},"kit.lazy.load();")),l.default.createElement("h2",{className:o.default.h2},"Callbacks"),l.default.createElement("p",null,"List of callbacks, which allows you to pass a function, and activate it on some event"),l.default.createElement("p",null,"Pass callbacks as a option like this:"),l.default.createElement("div",{className:o.default.codeContainer},l.default.createElement(r.default,{language:"javascript"},l.default.createElement("span",{className:o.default.codeLine},"function showHandler(image){\n\t console.log(image) \n});\n\n"),l.default.createElement("span",{className:o.default.codeLine},"kit.createLazy({\n\tonReplace: showHandler\n});"))),l.default.createElement("h3",{className:o.default.h3},"onReplase(event)"),l.default.createElement("p",null,"Fires when image were replaced, and pass the image-element as an argument."))))}}]),t}();t.default=u}}]);