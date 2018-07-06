(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{44:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=r(a(0));a(51),a(53),a(64);var s=r(a(62)),l=r(a(25)),i=r(a(59));function r(e){return e&&e.__esModule?e:{default:e}}a(58);var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClickModal=function(e){e.persist(),e.target.modal.hide()},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),n(t,[{key:"componentDidMount",value:function(){document.kit.modal.createModal("Basic",{fixed:"header"})}},{key:"render",value:function(){var e=this.props.bootstrap;return o.default.createElement("div",null,o.default.createElement("section",{className:l.default.commonSection},o.default.createElement("div",{className:e.row},o.default.createElement("div",{className:e.col},o.default.createElement("h1",{className:l.default.h1},"Modal Basic"),o.default.createElement("p",null,"Imagine that user filled your online form and send it.",o.default.createElement("br",null),"So, how to notify him about it?"),o.default.createElement("p",null,"Well, the answer is right in front of us."),o.default.createElement(s.default,{"data-trigger":"Basic"},"Front of us"),o.default.createElement("h2",{className:l.default.h2},"Pretty simple right?"),o.default.createElement("p",null,"This (as you may thought) is the most common way to use Kit Modal. Everything is default. Only some styles for text and button inside."),o.default.createElement("h2",{className:l.default.h2},"So here's the setup"),o.default.createElement("h3",{className:l.default.h3},"HTML Modal"),o.default.createElement("div",{className:l.default.codeContainer},o.default.createElement(i.default,{language:"html"},o.default.createElement("span",{className:l.default.codeLine},'<div data-modal="Basic" class="kit_modal basic">'),o.default.createElement("div",{className:l.default.code_levels},o.default.createElement("span",{className:l.default.codeLine},'<div class="modal_stage basic-stage">'),o.default.createElement("div",{className:l.default.code_levels},o.default.createElement("span",{className:l.default.codeLine},'<p class="basic-heading">This is a basic layout.</p>'),o.default.createElement("span",{className:l.default.codeLine},'<p class="basic-text">But it can be easily modified to your requirements.</p>'),o.default.createElement("span",{className:l.default.codeLine},'<div className="basic-container">'),o.default.createElement("div",{className:l.default.code_levels},o.default.createElement("span",{className:l.default.codeLine},'<button onClick="this.modal.hide()" class="basic-button" type="button">CLOSE</button>')),o.default.createElement("span",{className:l.default.codeLine},"</div>")),o.default.createElement("span",{className:l.default.codeLine},"</div>")),o.default.createElement("span",{className:l.default.codeLine},"</div>"))),o.default.createElement("h3",{className:l.default.h3},"HTML Trigger"),o.default.createElement("div",{className:l.default.codeContainer},o.default.createElement(i.default,{language:"html"},"<button data-trigger='Basic'>Front of us</button>")),o.default.createElement("h3",{className:l.default.h3},"JS"),o.default.createElement("div",{className:l.default.codeContainer},o.default.createElement(i.default,{language:"javascript"},o.default.createElement("span",{className:l.default.codeLine},"document.kit.modal.createModal('Basic');")))))),o.default.createElement("div",{"data-modal":"Basic",className:"kit_modal basic"},o.default.createElement("div",{className:"modal_stage basic-stage"},o.default.createElement("p",{className:"basic-heading"},"This is a basic layout."),o.default.createElement("p",{className:"basic-text"},"But it can be easily modified to your requirements."),o.default.createElement("div",{className:"basic-container"},o.default.createElement("button",{onClick:this.handleClickModal,className:"basic-button",type:"button"},"CLOSE")))))}}]),t}();t.default=d},51:function(e,t){!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/Users/andrejponomarenko/Projects/kit.modal/prod/",a(a.s=2)}([,function(e,t,a){},function(e,t,a){"use strict";a.r(t),a(1),document.kit||(document.kit={}),document.kit.modal||(document.kit.modal={});let n=document.documentElement;function o(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function s(e){this.lockKeys.indexOf(e.keyCode)>=0&&o(e)}window.kit=document.kit,document.kit.modal.createModal=((e,t)=>{let a;document.kit.modal[e]=new class{constructor(e){this.id=e,this.modal=document.querySelector("[data-modal="+e+"]"),this.stage=document.querySelector("[data-modal="+e+"] .modal_stage"),this.scrollIsActive=!1,this.lockKeys=[32,33,34,35,36,37,38,39,40],this.elementsForScrollPadding=[],this.required=!1,this.preventDefault=!1,this.lockScroll=!0,this.absolute=!1,this.fixed=!1,this.storeInstances=!0,this.onShow=!1,this.onHide=!1,this.onTrigger=!1,this.stageIn="fadeInUp",this.stageOut="fadeOutDown"}show(e){this.modal.kitHasClass("kit_none")&&(this.modal.kitRemoveClass("kit_none"),this.stage.kitAddClass(this.stageIn),this.stage.focus(),this.modal.kitAddClass("kit_active"),this.lockScroll&&parseInt(window.getComputedStyle(n,null).height)>=window.innerHeight&&function(e){let t=n.offsetWidth;document.addEventListener("mousewheel",o),document.addEventListener("DOMMouseScroll",o),document.addEventListener("touchmove",o),document.addEventListener("keydown",s.bind(e)),n.kitAddClass("kit_document-live"),e.modal.kitAddClass("kit_modal-live"),e.elementsForScrollPadding.forEach(a=>a.style.paddingRight=e.modal.offsetWidth-t+"px"),e.scrollIsActive=!0}(this),this.onShow&&this.onShow(e))}hide(){var e;this.modal.kitHasClass("kit_none")||(this.modal.kitRemoveClass("kit_active"),this.stage.kitAddClass(this.stageOut),this.scrollIsActive&&(e=this,document.removeEventListener("mousewheel",o),document.removeEventListener("DOMMouseScroll",o),document.removeEventListener("touchmove",o),document.removeEventListener("keydown",s.bind(e)),e.elementsForScrollPadding.forEach(e=>e.style.paddingRight=""),n.kitRemoveClass("kit_document-live"),e.modal.kitRemoveClass("kit_modal-live"),e.scrollIsActive=!1),this.onHide&&this.onHide())}becomeFixed(){this.modal.style.position="fixed"}becomeAbsolute(){this.modal.style.position="absolute",this.modal.parentElement.kitAddClass("kit_relative")}addTrigger(e){let t=e=>{e.modal=this,e.addEventListener("click",e=>{this.preventDefault&&o(e),this.onTrigger&&this.onTrigger(e),this.show(e)}),e.addEventListener("mousedown",e=>{1===e.button&&(this.preventDefault&&o(e),this.onTrigger&&this.onTrigger(e),this.show(e))}),e.addEventListener("keydown",e=>{32===e.keyCode&&13===e.keyCode&&(this.preventDefault&&o(e),this.onTrigger&&this.onTrigger(e),this.show(e))})};switch(typeof e){case"object":t(e);break;case"string":let a=document.querySelectorAll(e);Object.keys(a).forEach(e=>t(a[e]));break;default:console.error('[KitModal] addTrigger takes ".selector" or an element object')}return this}}(e),a=document.kit.modal[e],t&&Object.assign(a,t),a.modal.style.position=a.absolute?a.becomeAbsolute():a.becomeFixed(),a.storeInstances&&function(e){let t,a=e.id;(t="string"==typeof e.storeInstances?document.querySelectorAll(e.storeInstances):!!e.storeInstances&&document.querySelectorAll("[data-modal="+a+"] *"))&&Object.keys(t).forEach(e=>t[e].modal=document.kit.modal[a])}(a),function(e){let t=document.querySelectorAll(e.fixed);e.elementsForScrollPadding.push(n),e.fixed&&Object.keys(t).forEach(a=>e.elementsForScrollPadding.push(t[a]))}(a),a.stage.setAttribute("tabindex",0),a.modal.setAttribute("tabindex",0),a.modal.kitAddClass("kit_none"),function(e){let t,a=document.querySelectorAll("[data-trigger="+e.id+"]");(function(e,t){e.addEventListener("keydown",function(e){27!==e.keyCode||t.required||t.hide()})})(e.stage,e),function(e,t){e.addEventListener("animationend",function(){e.kitRemoveClass(t.stageIn),e.kitHasClass(t.stageOut)&&(e.kitRemoveClass(t.stageOut),t.modal.kitAddClass("kit_none"))})}(e.stage,e),Object.keys(a).forEach(t=>e.addTrigger(a[t],e)),e.stage.addEventListener("blur",()=>{t=setTimeout(()=>{e.required||e.hide()},0)},!0),e.stage.addEventListener("focus",()=>clearTimeout(t),!0)}(a)}),Element.prototype.kitAddClass=function(e){return this.kitHasClass(e)||(this.className+=" "+e),this},Element.prototype.kitRemoveClass=function(e){return this.kitHasClass(e)&&(this.className=this.className.replace(new RegExp("[\\s]{0,1}\\b"+e+"\\b","g"),"")),this},Element.prototype.kitHasClass=function(e){return this.className.indexOf(e)>=0}}])},53:function(e,t,a){},61:function(e,t,a){e.exports={"starBtn-container":"_1GzSr",starBtn:"_2cR01 t2d_m _2xyYr","move-space-bg":"_3xVNY"}},62:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(a(0)),o=s(a(61));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return n.default.createElement("div",{className:o.default["starBtn-container"]},n.default.createElement("button",{"data-trigger":e["data-trigger"],className:o.default.starBtn,onClick:e.onClick,onKeyDown:e.onKeyDown,onBlur:e.onBlur,onFocus:e.onFocus},e.children))}},64:function(e,t,a){}}]);