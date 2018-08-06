(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{53:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=i(a(0)),o=i(a(61)),u=i(a(6)),r=i(a(63));function i(e){return e&&e.__esModule?e:{default:e}}a(62);var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),n(t,[{key:"render",value:function(){var e=this.props.bootstrap;return l.default.createElement("section",{className:u.default.commonSection},l.default.createElement("div",{className:e.row},l.default.createElement("div",{className:e.col},l.default.createElement("h1",{className:u.default.h1},"Activation"),l.default.createElement("p",null,"This a quick guide, how to initialize Kit Modal plugin"),l.default.createElement("h2",{className:u.default.h2},"Javascript"),l.default.createElement("p",null,"In your script after connecting source kit.modal.js, put the following",l.default.createElement("br",null),"like this:"),l.default.createElement("div",{className:u.default.codeContainer},l.default.createElement(r.default,{language:"javascript"},l.default.createElement("span",{className:u.default.codeLine},"kit.modal.createModal('Name');"))),l.default.createElement("p",null,"Or like this:"),l.default.createElement("div",{className:u.default.codeContainer},l.default.createElement(r.default,{language:"javascript"},l.default.createElement("span",{className:u.default.codeLine},"kit.modal.createModal('Name',{\n    option: 'value',\n    option: 'value',\n    option: 'value'\n});"))),l.default.createElement("p",null,"The second one allows you to pass additional parameters to the Kit Modal. Check out options tab, to learn more about adjusting Kit Modal up to your requirements."),l.default.createElement(o.default,{author:"Note"},"Names should be the same for each unique modal window.",l.default.createElement("ul",{className:u.default.list},l.default.createElement("li",null,"kit.modal.createModal(",l.default.createElement("span",{className:u.default.highlight},"'Name'"),")"),l.default.createElement("li",null,"<div data-modal=",l.default.createElement("span",{className:u.default.highlight},"'Name'"),' class="kit_modal">'),l.default.createElement("li",null,"<button data-trigger=",l.default.createElement("span",{className:u.default.highlight},"'Name'"),">Front of us</button>"))),l.default.createElement("p",null,"See example with 2 instances within one page in Demos."),l.default.createElement(o.default,{author:"Note"},"You can make unlimited different modals within one page, just like in pre-loader demo, there you can see 5 different instances in one screen."))))}}]),t}();t.default=c},60:function(e,t,a){e.exports={noteContainer:"_1Dg1_",noteText:"GkbCj",noteAuthor:"_2BXvU"}},61:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(0)),l=o(a(60));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.author?n.default.createElement("p",{className:l.default.noteAuthor},"—",e.author):null;return n.default.createElement("div",{className:l.default.noteContainer},n.default.createElement("div",{className:l.default.noteText},e.children),t)}}}]);