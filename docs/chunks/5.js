(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{41:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=r(o(0));o(52),o(51);var i=r(o(33));function r(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),n(t,[{key:"render",value:function(){var e=this.props.bootstrap;return s.default.createElement("section",{className:i.default.commonSection},s.default.createElement("div",{className:e.container},s.default.createElement("div",{className:e.row},s.default.createElement("div",{className:e.col},s.default.createElement("h1",{className:i.default.h1},"Modal Insider"),s.default.createElement("p",{className:i.default.comment},"// under construction")))))}}]),t}();t.default=a},51:function(e,t,o){},52:function(e,t){!function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Users/andrejponomarenko/Projects/kit.modal/prod/",o(o.s=0)}([function(e,t){document.kit||(document.kit={}),document.kit.modal||(document.kit.modal={});let o=document.documentElement;function n(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function s(e){this.lockKeys.indexOf(e.keyCode)>=0&&n(e)}window.kit=document.kit,document.kit.modal.createModal=((e,t)=>{let i;document.kit.modal[e]=new class{constructor(e){this.id=e,this.modal=document.querySelector("[data-modal="+e+"]"),this.stage=document.querySelector("[data-modal="+e+"] .modal_stage"),this.scrollIsActive=!1,this.lockKeys=[32,33,34,35,36,37,38,39,40],this.elementsForScrollPadding=[],this.required=!1,this.preventDefault=!1,this.lockScroll=!0,this.absolute=!1,this.fixed=!1,this.storeInstances=!0,this.onShow=!1,this.onHide=!1,this.onTrigger=!1,this.stageIn="fadeInUp",this.stageOut="fadeOutDown"}show(e){this.modal.kitHasClass("kit_none")&&(this.modal.kitRemoveClass("kit_none"),this.stage.kitAddClass(this.stageIn),this.stage.focus(),this.modal.kitAddClass("kit_active"),this.lockScroll&&parseInt(window.getComputedStyle(o,null).height)>=window.innerHeight&&function(e){let t=o.offsetWidth;document.addEventListener("mousewheel",n),document.addEventListener("DOMMouseScroll",n),document.addEventListener("touchmove",n),document.addEventListener("scroll",n),document.addEventListener("keydown",s.bind(e)),o.kitAddClass("html_scroll_hide"),e.modal.kitAddClass("kit_dis_touch"),e.modal.kitAddClass("modal_scroll"),e.elementsForScrollPadding.forEach(o=>o.style.paddingRight=e.modal.offsetWidth-t+"px"),e.scrollIsActive=!0}(this),this.onShow&&this.onShow(e))}hide(){var e;this.modal.kitHasClass("kit_none")||(this.modal.kitRemoveClass("kit_active"),this.stage.kitAddClass(this.stageOut),this.scrollIsActive&&(e=this,document.removeEventListener("mousewheel",n),document.removeEventListener("DOMMouseScroll",n),document.removeEventListener("touchmove",n),document.removeEventListener("scroll",n),document.removeEventListener("keydown",s.bind(e)),e.elementsForScrollPadding.forEach(e=>e.style.paddingRight=""),o.kitRemoveClass("html_scroll_hide"),e.modal.kitRemoveClass("modal_scroll"),e.modal.kitRemoveClass("kit_dis_touch"),e.scrollIsActive=!1),this.onHide&&this.onHide())}becomeFixed(){this.modal.style.position="fixed"}becomeAbsolute(){this.modal.style.position="absolute",this.modal.parentElement.kitAddClass("kit_relative")}addTrigger(e){let t=e=>{e.modal=this,e.addEventListener("click",e=>{this.preventDefault&&n(e),this.onTrigger&&this.onTrigger(e),this.show(e)}),e.addEventListener("mousedown",e=>{1===e.button&&(this.preventDefault&&n(e),this.onTrigger&&this.onTrigger(e),this.show(e))}),e.addEventListener("keydown",e=>{32===e.keyCode&&13===e.keyCode&&(this.preventDefault&&n(e),this.onTrigger&&this.onTrigger(e),this.show(e))})};switch(typeof e){case"object":t(e);break;case"string":let o=document.querySelectorAll(e);Object.keys(o).forEach(e=>t(o[e]));break;default:console.error('[KitModal] addTrigger takes ".selector" or an element object')}return this}}(e),i=document.kit.modal[e],t&&Object.assign(i,t),i.modal.style.position=i.absolute?i.becomeAbsolute():i.becomeFixed(),i.storeInstances&&function(e){let t,o=e.id;(t="string"==typeof e.storeInstances?document.querySelectorAll(e.storeInstances):!!e.storeInstances&&document.querySelectorAll("[data-modal="+o+"] *"))&&Object.keys(t).forEach(e=>t[e].modal=document.kit.modal[o])}(i),function(e){let t=document.querySelectorAll(e.fixed);e.elementsForScrollPadding.push(o),e.fixed&&Object.keys(t).forEach(o=>e.elementsForScrollPadding.push(t[o]))}(i),i.stage.setAttribute("tabindex",0),function(e){let t,o=document.querySelectorAll("[data-trigger="+e.id+"]");(function(e,t){e.addEventListener("keydown",function(e){27!==e.keyCode||t.required||t.hide()})})(e.stage,e),function(e,t){e.addEventListener("animationend",function(){e.kitRemoveClass(t.stageIn),e.kitHasClass(t.stageOut)&&(e.kitRemoveClass(t.stageOut),t.modal.kitAddClass("kit_none"))})}(e.stage,e),Object.keys(o).forEach(t=>e.addTrigger(o[t],e)),e.modal.addEventListener("click",function(t){t.target===this&&e.hide()}),e.stage.addEventListener("blur",()=>{t=setTimeout(()=>{e.required||e.hide()},0)},!0),e.stage.addEventListener("focus",()=>clearTimeout(t),!0)}(i)}),Element.prototype.kitAddClass=function(e){return this.kitHasClass(e)||(this.className+=" "+e),this},Element.prototype.kitRemoveClass=function(e){return this.kitHasClass(e)&&(this.className=this.className.replace(new RegExp("[\\s]{0,1}\\b"+e+"\\b","g"),"")),this},Element.prototype.kitHasClass=function(e){return this.className.indexOf(e)>=0}}])}}]);