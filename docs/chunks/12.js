(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{54:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=u(a(0)),o=u(a(68)),r=u(a(6)),c=u(a(70));function u(e){return e&&e.__esModule?e:{default:e}}a(69);var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),l(t,[{key:"render",value:function(){var e=this.props.bootstrap;return n.default.createElement("section",{className:r.default.commonSection},n.default.createElement("div",{className:e.row},n.default.createElement("div",{className:e.col},n.default.createElement("h1",{className:r.default.h1},"Installation"),n.default.createElement("p",null,"Quick guide how to setup Kit.Locker"),n.default.createElement(o.default,null,"If you have any ",n.default.createElement("b",null,"fixed elements")," on page, please add them 'kit-set-fixed' class, to prevent them from jumping on scroll lock. Im not searching for fixed elements automatically for performance reasons."),n.default.createElement("h2",{className:r.default.h2},"Styles"),n.default.createElement("p",null,"First things first. Styles in head, or inline."),n.default.createElement("div",{className:r.default.codeContainer},n.default.createElement(c.default,{language:"html"},n.default.createElement("span",{className:r.default.codeLine},'<link rel="stylesheet" href="/styles/kit.locker.min.css">'))),n.default.createElement("h2",{className:r.default.h2},"Javascript"),n.default.createElement("p",null,"Connect source javascript just before yours script."),n.default.createElement("div",{className:r.default.codeContainer},n.default.createElement(c.default,{language:"html"},n.default.createElement("span",{className:r.default.codeLine},'<script src="/js/kit.locker.js"><\/script>'))),n.default.createElement("p",null,"Init a plugin"),n.default.createElement("div",{className:r.default.codeContainer},n.default.createElement(c.default,{language:"html"},n.default.createElement("span",{className:r.default.codeLine},"kit.locker.createLocker();"))),n.default.createElement("p",null,"Or init and pass callbacks"),n.default.createElement("div",{className:r.default.codeContainer},n.default.createElement(c.default,{language:"javascript"},n.default.createElement("span",{className:r.default.codeLine},"kit.locker.createLocker({\n\tonLock: onScrollLock,\n\tonRelease: onScrollRelease,\n});"))),n.default.createElement(o.default,null,"Note that if page have no scroll, plugin will not be activated (Hello Cap), so callbacks also will not be triggered.",n.default.createElement("br",null)," First, it allows you to do some logic only if window actually was locked, and also you don't need to check scroll existence manually."),n.default.createElement("p",null,"Activate or deactivate plugin as desired"),n.default.createElement("div",{className:r.default.codeContainer},n.default.createElement(c.default,{language:"javascript"},n.default.createElement("span",{className:r.default.codeLine},"\tkit.locker.lock();\n\tkit.locker.unlock();\n"))))))}}]),t}();t.default=s},67:function(e,t,a){e.exports={noteHeading:"_16bKl",noteContainer:"_1Dg1_",noteAuthor:"_2BXvU"}},68:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(a(0)),n=o(a(67));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.author?l.default.createElement("p",{className:n.default.noteAuthor},"—",e.author):null;return l.default.createElement("div",{className:n.default.noteContainer},l.default.createElement("div",{className:n.default.noteHeading},"Note"),l.default.createElement("div",{className:n.default.noteText},e.children),t)}}}]);