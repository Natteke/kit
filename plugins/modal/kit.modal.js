!function(e){var t={};function o(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(s,i,function(t){return e[t]}.bind(null,i));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Users/andrejponomarenko/Projects/kit.modal/prod/",o(o.s=0)}([function(e,t){document.kit||(document.kit={}),document.kit.modal||(document.kit.modal={});let o=document.documentElement;window.kit=document.kit;function s(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function i(e){this.lockKeys.indexOf(e.keyCode)>=0&&s(e)}document.kit.modal.createModal=((e,t)=>{let n;document.kit.modal[e]=new class{constructor(e){this.id=e,this.modal=document.querySelector("[data-modal="+e+"]"),this.stage=document.querySelector("[data-modal="+e+"] .modal_stage"),this.scrollIsActive=!1,this.lockKeys=[32,33,34,35,36,37,38,39,40],this.elementsForScrollPadding=[],this.required=!1,this.preventDefault=!1,this.lockScroll=!0,this.absolute=!1,this.fixed=!1,this.storeInstances=!0,this.onShow=!1,this.onHide=!1,this.onTrigger=!1,this.stageIn="fadeInUp",this.stageOut="fadeOutDown"}show(e){this.modal.kitHasClass("kit_none")&&(this.modal.kitRemoveClass("kit_none"),this.stage.kitAddClass(this.stageIn),this.stage.focus(),this.modal.kitAddClass("kit_active"),this.lockScroll&&parseInt(window.getComputedStyle(o,null).height)>=window.innerHeight&&function(e){let t=o.offsetWidth;document.addEventListener("mousewheel",s),document.addEventListener("DOMMouseScroll",s),document.addEventListener("touchmove",s),document.addEventListener("keydown",i.bind(e)),o.kitAddClass("kit_document-live"),e.modal.kitAddClass("kit_modal-live"),e.elementsForScrollPadding.forEach(o=>o.style.paddingRight=e.modal.offsetWidth-t+"px"),e.scrollIsActive=!0}(this),this.onShow&&this.onShow(e))}hide(){var e;this.modal.kitHasClass("kit_none")||(this.modal.kitRemoveClass("kit_active"),this.stage.kitAddClass(this.stageOut),this.scrollIsActive&&(e=this,document.removeEventListener("mousewheel",s),document.removeEventListener("DOMMouseScroll",s),document.removeEventListener("touchmove",s),document.removeEventListener("keydown",i.bind(e)),e.elementsForScrollPadding.forEach(e=>e.style.paddingRight=""),o.kitRemoveClass("kit_document-live"),e.modal.kitRemoveClass("kit_modal-live"),e.scrollIsActive=!1),this.onHide&&this.onHide())}becomeFixed(){this.modal.style.position="fixed"}becomeAbsolute(){this.modal.style.position="absolute",this.modal.parentElement.kitAddClass("kit_relative")}addTrigger(e){let t=e=>{e.modal=this,e.addEventListener("click",e=>{this.preventDefault&&s(e),this.onTrigger&&this.onTrigger(e),this.show(e)}),e.addEventListener("mousedown",e=>{1===e.button&&(this.preventDefault&&s(e),this.onTrigger&&this.onTrigger(e),this.show(e))}),e.addEventListener("keydown",e=>{32===e.keyCode&&13===e.keyCode&&(this.preventDefault&&s(e),this.onTrigger&&this.onTrigger(e),this.show(e))})};switch(typeof e){case"object":t(e);break;case"string":let o=document.querySelectorAll(e);Object.keys(o).forEach(e=>t(o[e]));break;default:console.error('[KitModal] addTrigger takes ".selector" or an element object')}return this}}(e),n=document.kit.modal[e],t&&Object.assign(n,t),n.modal.style.position=n.absolute?n.becomeAbsolute():n.becomeFixed(),n.storeInstances&&function(e){let t,o=e.id;t="string"==typeof e.storeInstances?document.querySelectorAll(e.storeInstances):!!e.storeInstances&&document.querySelectorAll("[data-modal="+o+"] *");t&&Object.keys(t).forEach(e=>t[e].modal=document.kit.modal[o])}(n),function(e){let t=document.querySelectorAll(e.fixed);e.elementsForScrollPadding.push(o),e.fixed&&Object.keys(t).forEach(o=>e.elementsForScrollPadding.push(t[o]))}(n),n.stage.setAttribute("tabindex",0),function(e){let t,o=document.querySelectorAll("[data-trigger="+e.id+"]");(function(e,t){e.addEventListener("keydown",function(e){let o=e.keyCode;27!==o||t.required||t.hide()})})(e.stage,e),function(e,t){e.addEventListener("animationend",function(){e.kitRemoveClass(t.stageIn),e.kitHasClass(t.stageOut)&&(e.kitRemoveClass(t.stageOut),t.modal.kitAddClass("kit_none"))})}(e.stage,e),Object.keys(o).forEach(t=>e.addTrigger(o[t],e)),e.modal.addEventListener("click",function(t){t.target===this&&e.hide()}),e.stage.addEventListener("blur",()=>{t=setTimeout(()=>{e.required||e.hide()},0)},!0),e.stage.addEventListener("focus",()=>clearTimeout(t),!0)}(n)}),Element.prototype.kitAddClass=function(e){return this.kitHasClass(e)||(this.className+=" "+e),this},Element.prototype.kitRemoveClass=function(e){return this.kitHasClass(e)&&(this.className=this.className.replace(new RegExp("[\\s]{0,1}\\b"+e+"\\b","g"),"")),this},Element.prototype.kitHasClass=function(e){return this.className.indexOf(e)>=0}}]);