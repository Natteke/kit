(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{57:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=r(a(0)),c=r(a(6)),o=r(a(78));function r(e){return e&&e.__esModule?e:{default:e}}a(77);var u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),l(t,[{key:"render",value:function(){var e=this.props.bootstrap;return n.default.createElement("section",{className:c.default.commonSection},n.default.createElement("div",{className:e.row},n.default.createElement("div",{className:e.col},n.default.createElement("h1",{className:c.default.h1},"Functions"),n.default.createElement("p",null,"List of methods and callbacks for Kit Modal"),n.default.createElement("h2",{className:c.default.h2},"Methods"),n.default.createElement("h3",{className:c.default.h3},".lock()"),n.default.createElement("p",null,"Lock page scroll",n.default.createElement("br",null),"Example:"),n.default.createElement("div",{className:c.default.codeContainer},n.default.createElement(o.default,{language:"javascript"},"kit.locker.lock();")),n.default.createElement("h3",{className:c.default.h3},".unlock()"),n.default.createElement("p",null,"Release page scroll",n.default.createElement("br",null),"Example:"),n.default.createElement("div",{className:c.default.codeContainer},n.default.createElement(o.default,{language:"javascript"},"kit.locker.unlock();")),n.default.createElement("h2",{className:c.default.h2},"Callbacks"),n.default.createElement("p",null,"List of callbacks, which allows you to pass a function, and activate it on locker event"),n.default.createElement("p",null,"Pass callbacks as a option like this:"),n.default.createElement("div",{className:c.default.codeContainer},n.default.createElement(o.default,{language:"javascript"},n.default.createElement("span",{className:c.default.codeLine},'function lockHandler(){\n console.log("Page locked!")\n});'),n.default.createElement("br",null),n.default.createElement("span",{className:c.default.codeLine},"kit.locker({\n onLock: lockHandler\n});"))),n.default.createElement("h3",{className:c.default.h3},"onLock()"),n.default.createElement("p",null,"Activates if scroll was locked."),n.default.createElement("h3",{className:c.default.h3},"onRelease()"),n.default.createElement("p",null,"Activates if scroll was unlocked."))))}}]),t}();t.default=u}}]);