(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{61:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=i(a(0));a(81),a(80),a(97);var l=i(a(6)),s=i(a(78));function i(e){return e&&e.__esModule?e:{default:e}}a(77);var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.modalClose=function(e){e.persist(),e.target.modal.hide()},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),n(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".exit-link");document.kit.modal.createModal("External",{preventDefault:!0,required:!0,fixed:"header",onTrigger:function(t){e.href=t.target.href}})}},{key:"render",value:function(){var e=this.props.bootstrap;return o.default.createElement("div",null,o.default.createElement("section",{className:l.default.commonSection},o.default.createElement("div",{className:e.row},o.default.createElement("div",{className:e.col},o.default.createElement("h1",{className:l.default.h1},"Modal External"),o.default.createElement("p",null,"Click to proceed to external site ",o.default.createElement("a",{"data-trigger":"External",href:"http://stackoverflow.com/"},"here"),"."),o.default.createElement("h2",{className:l.default.h2},"And here's the setup"),o.default.createElement("div",{className:l.default.codeContainer},o.default.createElement(s.default,{language:"html"},o.default.createElement("span",{className:l.default.codeLine},'<link rel="stylesheet" href="/styles/kit.modal.css">'),o.default.createElement("span",{className:l.default.codeLine},'<link rel="stylesheet" href="/styles/kit.modal.basic.css">'))),o.default.createElement("h3",{className:l.default.h3},"HTML"),o.default.createElement("div",{className:l.default.codeContainer},o.default.createElement(s.default,{language:"html"},o.default.createElement("span",{className:l.default.codeLine},'<div data-modal="External" class="kit_modal modal_basic">'),o.default.createElement("div",{className:l.default.code_levels},o.default.createElement("span",{className:l.default.codeLine},'<div class="modal_stage basic-stage">'),o.default.createElement("div",{className:l.default.code_levels},o.default.createElement("span",{className:l.default.codeLine},'<p class="basic-heading">You are leaving our website.</p>'),o.default.createElement("span",{className:l.default.codeLine},'<p class="basic-text">Click «Continue» to proceed, or «Cancel» to stay on our site.</p>'),o.default.createElement("span",{className:l.default.codeLine},'<div class="basic-buttons-container">'),o.default.createElement("div",{className:l.default.code_levels},o.default.createElement("span",{className:l.default.codeLine},'<button onClick="this.modal.hide()" class="basic-button" type="button"> Cansel </button>'),o.default.createElement("span",{className:l.default.codeLine},'<a class="basic-button exit-link" href="#" target="_blank"> Continue </a>')),o.default.createElement("span",{className:l.default.codeLine},"</div>")),o.default.createElement("span",{className:l.default.codeLine},"</div>")),o.default.createElement("span",{className:l.default.codeLine},"</div>"))),o.default.createElement("h3",{className:l.default.h3},"JS"),o.default.createElement("div",{className:l.default.codeContainer},o.default.createElement(s.default,{language:"html"},o.default.createElement("span",{className:l.default.codeLine},'<script src="/js/kit.modal.js"><\/script>'))),o.default.createElement("h3",{className:l.default.h3},"Make a handler"),o.default.createElement("div",{className:l.default.codeContainer},o.default.createElement(s.default,{language:"javascript"},o.default.createElement("span",{className:l.default.codeLine},"let link = document.querySelector('.exit-link');\nfunction triggerHandler(event) {\n\tlink.href = event.target.href;\n}"))),o.default.createElement("h3",{className:l.default.h3},"Calling the plugin"),o.default.createElement("div",{className:l.default.codeContainer},o.default.createElement(s.default,{language:"javascript"},o.default.createElement("span",{className:l.default.codeLine},"document.kit.modal.createModal('External', {\n\tpreventDefault: true,\n\trequired: true,\n\tonTrigger : triggerHandler\n});")))))),o.default.createElement("div",{"data-modal":"External",className:"kit_modal basic"},o.default.createElement("div",{className:"modal_stage basic-stage"},o.default.createElement("p",{className:"basic-heading"},"You are leaving our website."),o.default.createElement("p",{className:"basic-text"},"Click «Continue» to proceed, or «Cancel» to stay on our site."),o.default.createElement("div",{className:"basic-container"},o.default.createElement("button",{onClick:this.modalClose,className:"basic-button",type:"button"},"Cancel"),o.default.createElement("a",{target:"_blank",className:"basic-button exit-link",href:"#"},"Continue")))))}}]),t}();t.default=r},80:function(e,t,a){},81:function(e,t){!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/Users/andrejponomarenko/Projects/kit.modal/prod/",a(a.s=2)}([,function(e,t,a){},function(e,t,a){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(1),document.kit||(document.kit={}),document.kit.modal||(document.kit.modal={});var s=document.documentElement;window.kit=document.kit;var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t,this.modal=document.querySelector("[data-modal="+t+"]"),this.stage=document.querySelector("[data-modal="+t+"] .modal_stage"),this.scrollIsActive=!1,this.lockKeys=[32,33,34,35,36,37,38,39,40],this.elementsForScrollPadding=[],this.required=!1,this.preventDefault=!1,this.lockScroll=!0,this.absolute=!1,this.fixed=!1,this.focusStage=!0,this.storeInstances=!0,this.onShow=!1,this.onHide=!1,this.onTrigger=!1,this.stageIn="fadeInUp",this.stageOut="fadeOutDown"}return l(e,[{key:"show",value:function(e){var t,a;this.modal.kitHasClass("kit_none")&&(this.modal.kitRemoveClass("kit_none"),this.stage.kitAddClass(this.stageIn),this.focusStage&&this.stage.focus(),this.modal.kitAddClass("kit_active"),this.lockScroll&&parseInt(window.getComputedStyle(s,null).height)>=window.innerHeight&&(t=this,a=s.offsetWidth,document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("gesturechange",r),document.addEventListener("keydown",c.bind(t)),s.kitAddClass("kit_document-live"),t.modal.kitAddClass("kit_modal-live"),t.elementsForScrollPadding.forEach(function(e){return e.style.paddingRight=t.modal.offsetWidth-a+"px"}),t.scrollIsActive=!0),this.onShow&&this.onShow(e))}},{key:"hide",value:function(){var e;this.modal.kitHasClass("kit_none")||(this.modal.kitRemoveClass("kit_active"),this.stage.kitAddClass(this.stageOut),this.scrollIsActive&&(e=this,document.removeEventListener("touchmove",r,{passive:!1}),document.removeEventListener("gesturechange",r),document.removeEventListener("keydown",c.bind(e)),e.elementsForScrollPadding.forEach(function(e){return e.style.paddingRight=""}),s.kitRemoveClass("kit_document-live"),e.modal.kitRemoveClass("kit_modal-live"),e.scrollIsActive=!1),this.onHide&&this.onHide())}},{key:"becomeFixed",value:function(){this.modal.style.position="fixed"}},{key:"becomeAbsolute",value:function(){this.modal.style.position="absolute",this.modal.parentElement.kitAddClass("kit_relative")}},{key:"addTrigger",value:function(e){var t=this,a=function(e){e.modal=t,e.addEventListener("click",function(e){t.preventDefault&&r(e),t.onTrigger&&t.onTrigger(e),t.show(e)}),e.addEventListener("mousedown",function(e){1===e.button&&(t.preventDefault&&r(e),t.onTrigger&&t.onTrigger(e),t.show(e))}),e.addEventListener("keydown",function(e){32===e.keyCode&&13===e.keyCode&&(t.preventDefault&&r(e),t.onTrigger&&t.onTrigger(e),t.show(e))})};switch(void 0===e?"undefined":o(e)){case"object":a(e);break;case"string":var n=document.querySelectorAll(e);Object.keys(n).forEach(function(e){return a(n[e])});break;default:console.error('[KitModal] addTrigger takes ".selector" or an element object')}return this}}]),e}();function r(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function c(e){this.lockKeys.indexOf(e.keyCode)>=0&&r(e)}document.kit.modal.createModal=function(e,t){var a,o,l=void 0;document.kit.modal[e]=new i(e),l=document.kit.modal[e],t&&n(l,t),l.modal.style.position=l.absolute?l.becomeAbsolute():l.becomeFixed(),l.storeInstances&&function(e){var t=e.id,a=void 0;(a="string"==typeof e.storeInstances?document.querySelectorAll(e.storeInstances):!!e.storeInstances&&document.querySelectorAll("[data-modal="+t+"] *"))&&Object.keys(a).forEach(function(e){return a[e].modal=document.kit.modal[t]})}(l),a=l,o=document.querySelectorAll(a.fixed),a.elementsForScrollPadding.push(s),a.fixed&&Object.keys(o).forEach(function(e){return a.elementsForScrollPadding.push(o[e])}),l.stage.setAttribute("tabindex",0),l.modal.setAttribute("tabindex",0),l.modal.kitAddClass("kit_none"),function(e){var t=document.querySelectorAll("[data-trigger="+e.id+"]"),a=void 0;(function(e,t){e.addEventListener("keydown",function(e){27!==e.keyCode||t.required||t.hide()})})(e.stage,e),function(e,t){e.addEventListener("animationend",function(){e.kitRemoveClass(t.stageIn),e.kitHasClass(t.stageOut)&&(e.kitRemoveClass(t.stageOut),t.modal.kitAddClass("kit_none"))})}(e.stage,e),Object.keys(t).forEach(function(a){return e.addTrigger(t[a],e)}),e.stage.addEventListener("blur",function(){a=setTimeout(function(){e.required||e.hide()},0)},!0),e.stage.addEventListener("focus",function(){return clearTimeout(a)},!0)}(l)},Element.prototype.kitAddClass=function(e){return this.kitHasClass(e)||(this.className+=" "+e),this},Element.prototype.kitRemoveClass=function(e){return this.kitHasClass(e)&&(this.className=this.className.replace(new RegExp("[\\s]{0,1}\\b"+e+"\\b","g"),"")),this},Element.prototype.kitHasClass=function(e){return this.className.indexOf(e)>=0}}])},97:function(e,t,a){}}]);