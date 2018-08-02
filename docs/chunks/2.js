(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{56:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=u(a(0)),o=u(a(6)),r=u(a(66));function u(e){return e&&e.__esModule?e:{default:e}}a(65);var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),l(t,[{key:"render",value:function(){var e=this.props.bootstrap;return n.default.createElement("section",{className:o.default.commonSection},n.default.createElement("div",{className:e.row},n.default.createElement("div",{className:e.col},n.default.createElement("h1",{className:o.default.h1},"Functions"),n.default.createElement("p",null,"List of methods and callbacks for Kit Modal"),n.default.createElement("h2",{className:o.default.h2},"Methods"),n.default.createElement("h3",{className:o.default.h3},".show()"),n.default.createElement("p",null,"Show selected modal window",n.default.createElement("br",null),"Example:"),n.default.createElement("div",{className:o.default.codeContainer},n.default.createElement(r.default,{language:"javascript"},"kit.modal.MyModalName.show();")),n.default.createElement("h3",{className:o.default.h3},".hide()"),n.default.createElement("p",null,"Hide selected modal window",n.default.createElement("br",null),"Example:"),n.default.createElement("div",{className:o.default.codeContainer},n.default.createElement(r.default,{language:"javascript"},"kit.modal.MyModalName.hide();")),n.default.createElement("p",null,"Or"),n.default.createElement("div",{className:o.default.codeContainer},n.default.createElement(r.default,{language:"html"},'<button onClick="this.modal.hide()">CLOSE</button>')),n.default.createElement("h3",{className:o.default.h3},".addTrigger(element / '.selector')"),n.default.createElement("p",null,"Takes a className, or DOM element, and set it's as a trigger, to show modal window.",n.default.createElement("br",null),"Useful when you making list of triggers with asynchronous way.",n.default.createElement("br",null),"Example:"),n.default.createElement("div",{className:o.default.codeContainer},n.default.createElement(r.default,{language:"javascript"},'kit.modal.MyModalName.addTrigger(".modal_trigger");')),n.default.createElement("h2",{className:o.default.h2},"Callbacks"),n.default.createElement("p",null,"List of callbacks, which allows you to pass a function, and activate in on modal event"),n.default.createElement("p",null,"Pass callbacks as a option like this:"),n.default.createElement("div",{className:o.default.codeContainer},n.default.createElement(r.default,{language:"javascript"},n.default.createElement("span",{className:o.default.codeLine},"function showHandler(event){\n console.log(event) \n console.log(this)\n});"),n.default.createElement("span",{className:o.default.codeLine},"kit.modal.createModal('Name',{\n    onShow: 'showHandler'\n});"))),n.default.createElement("h3",{className:o.default.h3},"onShow(event)"),n.default.createElement("p",null,"Activates when modal is shows up, also passing an event, if modal was summoned by user activated the trigger."),n.default.createElement("h3",{className:o.default.h3},"onHide()"),n.default.createElement("p",null,"Activates when modal was hided."),n.default.createElement("h3",{className:o.default.h3},"onTrigger()"),n.default.createElement("p",null,"Activates when user activates the trigger."))))}}]),t}();t.default=c}}]);