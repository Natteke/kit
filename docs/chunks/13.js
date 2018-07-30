(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{46:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),n=r(l(0)),u=r(l(23));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),a(t,[{key:"render",value:function(){var e=this.props.bootstrap;return n.default.createElement("section",{className:u.default.commonSection},n.default.createElement("div",{className:e.row},n.default.createElement("div",{className:e.col},n.default.createElement("h1",{className:u.default.h1},"Options"),n.default.createElement("p",null,"List of options for Kit Modal"),n.default.createElement("h3",{className:u.default["h3-border"]},"Required"),n.default.createElement("ul",{className:u.default.list},n.default.createElement("li",null,"Type: boolean"),n.default.createElement("li",null,"Default: false")),n.default.createElement("p",null,"Required window could be closed only using hide() method."),n.default.createElement("h3",{className:u.default["h3-border"]},"preventDefault"),n.default.createElement("ul",{className:u.default.list},n.default.createElement("li",null,"Type: boolean"),n.default.createElement("li",null,"Default: false")),n.default.createElement("p",null,"Prevent default action, when user clicks on trigger",n.default.createElement("br",null),"Link for example."),n.default.createElement("h3",{className:u.default["h3-border"]},"storeInstances"),n.default.createElement("ul",{className:u.default.list},n.default.createElement("li",null,"Type: boolean/string"),n.default.createElement("li",null,"Default: true"),n.default.createElement("li",null,"Options: true/false/string")),n.default.createElement("p",null,"Kit Modal stores link to it's instances within all elements inside '.kit_modal'.",n.default.createElement("br",null),"It's allows you easily to get Kit Modal from any inner elements, which is useful in creating buttons for example. (See Basic demo)."),n.default.createElement("p",null,"Pass false as an option to disable it, or pass the string '.className', to chose elements, where you want to store links."),n.default.createElement("h3",{className:u.default["h3-border"]},"Required"),n.default.createElement("ul",{className:u.default.list},n.default.createElement("li",null,"Type: boolean"),n.default.createElement("li",null,"Default: false")),n.default.createElement("p",null,"Required window could be closed only using show() method."),n.default.createElement("h3",{className:u.default["h3-border"]},"Position"),n.default.createElement("ul",{className:u.default.list},n.default.createElement("li",null,"Type: string"),n.default.createElement("li",null,"Default: fixed"),n.default.createElement("li",null,"Options: fixed/absolute")),n.default.createElement("p",null,"Allows you to put modal window inside container."),n.default.createElement("h3",{className:u.default["h3-border"]},"lockScroll"),n.default.createElement("ul",{className:u.default.list},n.default.createElement("li",null,"Type: boolean"),n.default.createElement("li",null,"Default: true")),n.default.createElement("p",null,"Allows you to lock scroll while modal is active"),n.default.createElement("h3",{className:u.default["h3-border"]},"Fixed"),n.default.createElement("ul",{className:u.default.list},n.default.createElement("li",null,"Type: string"),n.default.createElement("li",null,"Default: null")),n.default.createElement("p",null,"If you have another fixed element on the page, and you want to prevent user's scroll while Kit Modal is active, provide it's '.className' here, to prevent horizontal jumping"))))}}]),t}();t.default=o}}]);