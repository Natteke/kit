(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{33:function(e,t,n){e.exports={wrapper:"AJrTg _2DRj3",commonSection:"uK9Nm",h1:"E9crs",h2:"_2sz5C",h3:"_4Ujha","main-flow":"_31zxN","btn-container":"_3DFcJ",codeContainer:"Tq6tu",codeLine:"_1Z3h3",code_levels:"_2THcj",highlight:"_2zQ4A",comment:"_2DzB8"}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=s(n(0));s(n(64)),s(n(61)),s(n(56));n(52),n(51),n(58);var i=s(n(33));s(n(66));function s(e){return e&&e.__esModule?e:{default:e}}n(65);var a=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.bootstrap;return r.default.createElement("section",{className:i.default.commonSection},r.default.createElement("div",{className:e.container},r.default.createElement("div",{className:e.row},r.default.createElement("div",{className:e.col},r.default.createElement("h1",null,"Welcome")))))}}]),t}();t.default=a},51:function(e,t,n){},52:function(e,t){!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/Users/andrejponomarenko/Projects/kit.modal/prod/",n(n.s=0)}([function(e,t){document.kit||(document.kit={}),document.kit.modal||(document.kit.modal={});let n=document.documentElement;function o(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function r(e){this.lockKeys.indexOf(e.keyCode)>=0&&o(e)}window.kit=document.kit,document.kit.modal.createModal=((e,t)=>{let i;document.kit.modal[e]=new class{constructor(e){this.id=e,this.modal=document.querySelector("[data-modal="+e+"]"),this.stage=document.querySelector("[data-modal="+e+"] .modal_stage"),this.scrollIsActive=!1,this.lockKeys=[32,33,34,35,36,37,38,39,40],this.elementsForScrollPadding=[],this.required=!1,this.preventDefault=!1,this.lockScroll=!0,this.absolute=!1,this.fixed=!1,this.storeInstances=!0,this.onShow=!1,this.onHide=!1,this.onTrigger=!1,this.stageIn="fadeInUp",this.stageOut="fadeOutDown"}show(e){this.modal.kitHasClass("kit_none")&&(this.modal.kitRemoveClass("kit_none"),this.stage.kitAddClass(this.stageIn),this.stage.focus(),this.modal.kitAddClass("kit_active"),this.lockScroll&&parseInt(window.getComputedStyle(n,null).height)>=window.innerHeight&&function(e){let t=n.offsetWidth;document.addEventListener("mousewheel",o),document.addEventListener("DOMMouseScroll",o),document.addEventListener("touchmove",o),document.addEventListener("scroll",o),document.addEventListener("gesturechange",o),document.addEventListener("keydown",r.bind(e)),n.kitAddClass("html_scroll_hide"),e.modal.kitAddClass("kit_dis_touch"),e.modal.kitAddClass("modal_scroll"),e.elementsForScrollPadding.forEach(n=>n.style.paddingRight=e.modal.offsetWidth-t+"px"),e.scrollIsActive=!0}(this),this.onShow&&this.onShow(e))}hide(){var e;this.modal.kitHasClass("kit_none")||(this.modal.kitRemoveClass("kit_active"),this.stage.kitAddClass(this.stageOut),this.scrollIsActive&&(e=this,document.removeEventListener("mousewheel",o),document.removeEventListener("DOMMouseScroll",o),document.removeEventListener("touchmove",o),document.removeEventListener("gesturechange",o),document.removeEventListener("scroll",o),document.removeEventListener("keydown",r.bind(e)),e.elementsForScrollPadding.forEach(e=>e.style.paddingRight=""),n.kitRemoveClass("html_scroll_hide"),e.modal.kitRemoveClass("modal_scroll"),e.modal.kitRemoveClass("kit_dis_touch"),e.scrollIsActive=!1),this.onHide&&this.onHide())}becomeFixed(){this.modal.style.position="fixed"}becomeAbsolute(){this.modal.style.position="absolute",this.modal.parentElement.kitAddClass("kit_relative")}addTrigger(e){let t=e=>{e.modal=this,e.addEventListener("click",e=>{this.preventDefault&&o(e),this.onTrigger&&this.onTrigger(e),this.show(e)}),e.addEventListener("mousedown",e=>{1===e.button&&(this.preventDefault&&o(e),this.onTrigger&&this.onTrigger(e),this.show(e))}),e.addEventListener("keydown",e=>{32===e.keyCode&&13===e.keyCode&&(this.preventDefault&&o(e),this.onTrigger&&this.onTrigger(e),this.show(e))})};switch(typeof e){case"object":t(e);break;case"string":let n=document.querySelectorAll(e);Object.keys(n).forEach(e=>t(n[e]));break;default:console.error('[KitModal] addTrigger takes ".selector" or an element object')}return this}}(e),i=document.kit.modal[e],t&&Object.assign(i,t),i.modal.style.position=i.absolute?i.becomeAbsolute():i.becomeFixed(),i.storeInstances&&function(e){let t,n=e.id;(t="string"==typeof e.storeInstances?document.querySelectorAll(e.storeInstances):!!e.storeInstances&&document.querySelectorAll("[data-modal="+n+"] *"))&&Object.keys(t).forEach(e=>t[e].modal=document.kit.modal[n])}(i),function(e){let t=document.querySelectorAll(e.fixed);e.elementsForScrollPadding.push(n),e.fixed&&Object.keys(t).forEach(n=>e.elementsForScrollPadding.push(t[n]))}(i),i.stage.setAttribute("tabindex",0),function(e){let t,n=document.querySelectorAll("[data-trigger="+e.id+"]");(function(e,t){e.addEventListener("keydown",function(e){27!==e.keyCode||t.required||t.hide()})})(e.stage,e),function(e,t){e.addEventListener("animationend",function(){e.kitRemoveClass(t.stageIn),e.kitHasClass(t.stageOut)&&(e.kitRemoveClass(t.stageOut),t.modal.kitAddClass("kit_none"))})}(e.stage,e),Object.keys(n).forEach(t=>e.addTrigger(n[t],e)),e.modal.addEventListener("click",function(t){t.target===this&&e.hide()}),e.stage.addEventListener("blur",()=>{t=setTimeout(()=>{e.required||e.hide()},0)},!0),e.stage.addEventListener("focus",()=>clearTimeout(t),!0)}(i)}),Element.prototype.kitAddClass=function(e){return this.kitHasClass(e)||(this.className+=" "+e),this},Element.prototype.kitRemoveClass=function(e){return this.kitHasClass(e)&&(this.className=this.className.replace(new RegExp("[\\s]{0,1}\\b"+e+"\\b","g"),"")),this},Element.prototype.kitHasClass=function(e){return this.className.indexOf(e)>=0}}])},55:function(e,t,n){e.exports={"starBtn-container":"_1GzSr",starBtn:"_2cR01 t2d_m _2xyYr","move-space-bg":"_3xVNY"}},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(0)),r=i(n(55));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement("div",{className:r.default["starBtn-container"]},o.default.createElement("button",{"data-trigger":e["data-trigger"],className:r.default.starBtn,onClick:e.onClick,onKeyDown:e.onKeyDown,onBlur:e.onBlur,onFocus:e.onFocus},e.children))}},58:function(e,t,n){},60:function(e,t,n){e.exports={button:"_2iO1P t2d_m _2xyYr"}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(0)),r=i(n(60));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement("button",{"data-trigger":e["data-trigger"],className:r.default.button,onClick:e.onClick,onKeyDown:e.onKeyDown,onBlur:e.onBlur,onFocus:e.onFocus},e.children)}},63:function(e,t,n){e.exports={noteContainer:"_1Dg1_",noteText:"GkbCj",noteAuthor:"_2BXvU"}},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(0)),r=i(n(63));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.author?o.default.createElement("p",{className:r.default.noteAuthor},"—",e.author):null;return o.default.createElement("div",{className:r.default.noteContainer},o.default.createElement("div",{className:r.default.noteText},e.children),t)}}}]);