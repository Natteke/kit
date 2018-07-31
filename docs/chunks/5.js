(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{56:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=o(a(0)),u=(o(a(60)),o(a(6))),s=o(a(63));function o(e){return e&&e.__esModule?e:{default:e}}a(62);var r=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),l(t,[{key:"render",value:function(){var e=this.props.bootstrap;return n.default.createElement("section",{className:u.default.commonSection},n.default.createElement("div",{className:e.row},n.default.createElement("div",{className:e.col},n.default.createElement("h1",{className:u.default.h1},"Installation"),n.default.createElement("p",null,"Quick guide how you can easily setup your first kit.modal window"),n.default.createElement("h2",{className:u.default.h2},"Styles"),n.default.createElement("h3",{className:u.default.h3},"Important"),n.default.createElement("p",null,"First things first. Styles in head, or inline."),n.default.createElement("div",{className:u.default.codeContainer},n.default.createElement(s.default,{language:"html"},n.default.createElement("span",{className:u.default.codeLine},'<link rel="stylesheet" href="/styles/kit.modal.css">'))),n.default.createElement("h3",{className:u.default.h3},"Optional"),n.default.createElement("p",null,"It is optional, but if you want to use some of default styles, just connect them, or copy and paste styles from assets file into your stylesheet.",n.default.createElement("br",null),"Like Basic for example."),n.default.createElement("div",{className:u.default.codeContainer},n.default.createElement(s.default,{language:"html"},n.default.createElement("span",{className:u.default.codeLine},'<link rel="stylesheet" href="/styles/kit.modal.basic.css">'))),n.default.createElement("h2",{className:u.default.h2},"Markup"),n.default.createElement("h3",{className:u.default.h3},"Important"),n.default.createElement("p",null,"Put modal HTML into a body tag."),n.default.createElement("div",{className:u.default.codeContainer},n.default.createElement(s.default,{language:"html"},n.default.createElement("span",{className:u.default.codeLine},'<div data-modal="Name" class="kit_modal">'),n.default.createElement("div",{className:u.default.code_levels},n.default.createElement("span",{className:u.default.codeLine},'<div class="modal_stage">'),n.default.createElement("div",{className:u.default.code_levels},"\x3c!-- YOUR HTML CODE GOES HERE... --\x3e"),n.default.createElement("span",{className:u.default.codeLine},"</div>")),n.default.createElement("span",{className:u.default.codeLine},"</div>"))),n.default.createElement("h3",{className:u.default.h3},"Optional"),n.default.createElement("p",null,"It is optional to set an activator to your modal, it could be anything: button, link, image...",n.default.createElement("br",null),"Triggers are using to summon modal window after user's action, but you can show and hide modal window using show/hide methods"),n.default.createElement("div",{className:u.default.codeContainer},n.default.createElement(s.default,{language:"html"},"<button data-trigger='Name'>Show Modal</button>")),n.default.createElement("h3",{className:u.default.h3},"Note"),n.default.createElement("p",null,"You can play with markup as you want, but there always 2 conditions should be met"),n.default.createElement("ul",{className:u.default.list},n.default.createElement("li",null,"Outer container should has ",n.default.createElement("span",{className:u.default.highlight},'data-modal="NAME"')," attribute and ",n.default.createElement("span",{className:u.default.highlight},'"kit_modal"')," class name."),n.default.createElement("li",null,"Inner container should has ",n.default.createElement("span",{className:u.default.highlight},'"modal_stage"')," class name.")),n.default.createElement("h2",{className:u.default.h2},"Javascript"),n.default.createElement("p",null,"Connect source javascript just before yours script."),n.default.createElement("div",{className:u.default.codeContainer},n.default.createElement(s.default,{language:"html"},n.default.createElement("span",{className:u.default.codeLine},'<script src="/js/kit.modal.js"><\/script>'))))))}}]),t}();t.default=r},59:function(e,t,a){e.exports={noteContainer:"_1Dg1_",noteText:"GkbCj",noteAuthor:"_2BXvU"}},60:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(0)),n=u(a(59));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.author?l.default.createElement("p",{className:n.default.noteAuthor},"—",e.author):null;return l.default.createElement("div",{className:n.default.noteContainer},l.default.createElement("div",{className:n.default.noteText},e.children),t)}}}]);