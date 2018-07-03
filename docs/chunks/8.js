(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{42:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),s=o(a(0)),n=o(a(54)),c=o(a(64)),d=o(a(57));a(50),a(49),a(74),a(72),a(70),a(68),a(66);var i=o(a(24)),r=o(a(59));function o(e){return e&&e.__esModule?e:{default:e}}a(58);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=function(e){e.persist(),setTimeout(function(){return e.target.modal.hide()},3e3)},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),l(t,[{key:"componentDidMount",value:function(){document.kit.modal.createModal("square",{required:!0,stageIn:"fadeIn",stageOut:"fadeOut",fixed:"header"}),document.kit.modal.createModal("rhombus",{required:!0,stageIn:"fadeIn",stageOut:"fadeOut",fixed:"header"}),document.kit.modal.createModal("stripes",{required:!0,stageIn:"fadeIn",stageOut:"fadeOut",fixed:"header"}),document.kit.modal.createModal("circles",{required:!0,stageIn:"fadeIn",stageOut:"fadeOut",fixed:"header"}),document.kit.modal.createModal("spinner",{required:!0,stageIn:"fadeIn",stageOut:"fadeOut",fixed:"header"})}},{key:"render",value:function(){var e=this.props.bootstrap;return s.default.createElement("section",{className:i.default.commonSection},s.default.createElement("div",{className:e.container},s.default.createElement("div",{className:e.row},s.default.createElement("div",{className:e.col},s.default.createElement("h1",{className:i.default.h1},"Modal Loader"),s.default.createElement("p",null,"Let's pretend that we are requesting any data from the server. ",s.default.createElement("br",null)," Press the button!"),s.default.createElement("div",{className:i.default["btn-container"]},s.default.createElement(d.default,{onClick:this.handleClick,"data-trigger":"circles"},"To the stars!")),s.default.createElement("p",null,"Agree, it's nice to know that the site responded, and started doing something after clicking the button, right?"),s.default.createElement("h2",{className:i.default.h2},"Why this is so important?"),s.default.createElement("p",null,"Preloader is useful interface element that let visitors know that the website hasn’t crashed, it’s just processing some data.",s.default.createElement("br",null)," Do not underestimate it."),s.default.createElement("p",null,"Try some more of them"),s.default.createElement("div",{className:e.row},s.default.createElement("div",{className:e["col-6"]},s.default.createElement("div",{className:i.default["btn-container"]},s.default.createElement(c.default,{onClick:this.handleClick,"data-trigger":"rhombus"},"Rhombus"))),s.default.createElement("div",{className:e["col-6"]},s.default.createElement("div",{className:i.default["btn-container"]},s.default.createElement(c.default,{onClick:this.handleClick,"data-trigger":"stripes"},"Stripes"))),s.default.createElement("div",{className:e["col-6"]},s.default.createElement("div",{className:i.default["btn-container"]},s.default.createElement(c.default,{onClick:this.handleClick,"data-trigger":"square"},"Square"))),s.default.createElement("div",{className:e["col-6"]},s.default.createElement("div",{className:i.default["btn-container"]},s.default.createElement(c.default,{onClick:this.handleClick,"data-trigger":"spinner"},"Spinner")))),s.default.createElement("h2",{className:i.default.h2},"So how do we make one of them?"),s.default.createElement("p",null,"As an example i will use the first one, with circles. ",s.default.createElement("br",null)," Others connecting with the same way as this one, just select one(or many) of the styles, and copy html markup."),s.default.createElement(n.default,null,"Don't forget, nothing can stop you from making your own styles, markups and animations. ",s.default.createElement("br",null),"Just put your HTML inside of the modal_stage, and... you know what to do."),s.default.createElement("h3",{className:i.default.h3},"CSS"),s.default.createElement("div",{className:i.default.codeContainer},s.default.createElement(r.default,{language:"html"},s.default.createElement("span",{className:i.default.codeLine},'<link rel="stylesheet" href="/styles/kit.modal.css">'),s.default.createElement("span",{className:i.default.codeLine},'<link rel="stylesheet" href="/styles/kit.modal.loader-circles.css">'))),s.default.createElement("h3",{className:i.default.h3},"HTML"),s.default.createElement("div",{className:i.default.codeContainer},s.default.createElement(r.default,{language:"html"},s.default.createElement("span",{className:i.default.codeLine},'<div data-modal="circles" class="kit_modal circles">'),s.default.createElement("div",{className:i.default.code_levels},s.default.createElement("span",{className:i.default.codeLine},'<div class="modal_stage circles-stage">'),s.default.createElement("div",{className:i.default.code_levels},s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-fading-circle">'),s.default.createElement("div",{className:i.default.code_levels},s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle1 sk-circle"></div>'),s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle2 sk-circle"></div>'),s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle3 sk-circle"></div>'),s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle4 sk-circle"></div>'),s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle5 sk-circle"></div>'),s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle6 sk-circle"></div>'),s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle7 sk-circle"></div>'),s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle8 sk-circle"></div>'),s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle9 sk-circle"></div>'),s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle10 sk-circle"></div>'),s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle11 sk-circle"></div>'),s.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle12 sk-circle"></div>')),s.default.createElement("span",{className:i.default.codeLine},"</div>")),s.default.createElement("span",{className:i.default.codeLine},"</div>")),s.default.createElement("span",{className:i.default.codeLine},"</div>"))),s.default.createElement("h3",{className:i.default.h3},"JS"),s.default.createElement("div",{className:i.default.codeContainer},s.default.createElement(r.default,{language:"html"},s.default.createElement("span",{className:i.default.codeLine},'<script src="/js/kit.modal.js"><\/script>'))),s.default.createElement("h3",{className:i.default.h3},"Calling the plugin"),s.default.createElement("div",{className:i.default.codeContainer},s.default.createElement(r.default,{language:"javascript"},s.default.createElement("span",{className:i.default.codeLine},"document.kit.modal.createModal('circles',{\n    required: true,\n    stageIn: 'fadeIn',\n    stageOut: 'fadeOut'\n});"))),s.default.createElement("h2",{className:i.default.h2},"So what to do with it?"),s.default.createElement("p",null,"You set up everything you need to use KitModal as a preloader.",s.default.createElement("br",null),"Next time when you will load something from server, or calculate something heavy, just show modal when you starts, and hide it in the end.",s.default.createElement("br",null),"Like this:"),s.default.createElement("div",{className:i.default.codeContainer},s.default.createElement(r.default,{language:"javascript"},"let modal = document.kit.modal.circles; \n    modal.show();\n    // do some code \n    modal.hide();")),s.default.createElement(n.default,{author:"Note"},"All this wonderful animations for Kit Loader was provided by Tobi Ahlin.",s.default.createElement("br",null),"Subscribe Tobi on ",s.default.createElement("a",{href:"https://twitter.com/tobiasahlin"},"Twitter"),", or check for more animations on his ",s.default.createElement("a",{href:"http://tobiasahlin.com/spinkit/"},"site"),".")))),s.default.createElement("div",{"data-modal":"square",className:"kit_modal square"},s.default.createElement("div",{className:"modal_stage square-stage"},s.default.createElement("div",{className:"modal_stage square-inner"}))),s.default.createElement("div",{"data-modal":"rhombus",className:"kit_modal rhombus"},s.default.createElement("div",{className:"modal_stage rhombus-stage"},s.default.createElement("div",{className:"modal_stage rhombus-inner"},s.default.createElement("div",{className:"sk-cube1 sk-cube"}),s.default.createElement("div",{className:"sk-cube2 sk-cube"}),s.default.createElement("div",{className:"sk-cube4 sk-cube"}),s.default.createElement("div",{className:"sk-cube3 sk-cube"})))),s.default.createElement("div",{"data-modal":"stripes",className:"kit_modal stripes"},s.default.createElement("div",{className:"modal_stage stripes-stage"},s.default.createElement("div",{className:"modal_stage stripes-inner"},s.default.createElement("div",{className:"rect1"}),s.default.createElement("div",{className:"rect2"}),s.default.createElement("div",{className:"rect3"}),s.default.createElement("div",{className:"rect4"}),s.default.createElement("div",{className:"rect5"})))),s.default.createElement("div",{"data-modal":"circles",className:"kit_modal circles"},s.default.createElement("div",{className:"modal_stage circles-stage"},s.default.createElement("div",{className:"sk-fading-circle"},s.default.createElement("div",{className:"sk-circle1 sk-circle"}),s.default.createElement("div",{className:"sk-circle2 sk-circle"}),s.default.createElement("div",{className:"sk-circle3 sk-circle"}),s.default.createElement("div",{className:"sk-circle4 sk-circle"}),s.default.createElement("div",{className:"sk-circle5 sk-circle"}),s.default.createElement("div",{className:"sk-circle6 sk-circle"}),s.default.createElement("div",{className:"sk-circle7 sk-circle"}),s.default.createElement("div",{className:"sk-circle8 sk-circle"}),s.default.createElement("div",{className:"sk-circle9 sk-circle"}),s.default.createElement("div",{className:"sk-circle10 sk-circle"}),s.default.createElement("div",{className:"sk-circle11 sk-circle"}),s.default.createElement("div",{className:"sk-circle12 sk-circle"})))),s.default.createElement("div",{"data-modal":"spinner",className:"kit_modal stripes"},s.default.createElement("div",{className:"modal_stage stripes-stage"},s.default.createElement("div",{className:"spinner"},s.default.createElement("div",{className:"cube1"}),s.default.createElement("div",{className:"cube2"})))))}}]),t}();t.default=u},49:function(e,t,a){},50:function(e,t){!function(e){var t={};function a(l){if(t[l])return t[l].exports;var s=t[l]={i:l,l:!1,exports:{}};return e[l].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(l,s,function(t){return e[t]}.bind(null,s));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/Users/andrejponomarenko/Projects/kit.modal/prod/",a(a.s=0)}([function(e,t){document.kit||(document.kit={}),document.kit.modal||(document.kit.modal={});let a=document.documentElement;function l(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function s(e){this.lockKeys.indexOf(e.keyCode)>=0&&l(e)}window.kit=document.kit,document.kit.modal.createModal=((e,t)=>{let n;document.kit.modal[e]=new class{constructor(e){this.id=e,this.modal=document.querySelector("[data-modal="+e+"]"),this.stage=document.querySelector("[data-modal="+e+"] .modal_stage"),this.scrollIsActive=!1,this.lockKeys=[32,33,34,35,36,37,38,39,40],this.elementsForScrollPadding=[],this.required=!1,this.preventDefault=!1,this.lockScroll=!0,this.absolute=!1,this.fixed=!1,this.storeInstances=!0,this.onShow=!1,this.onHide=!1,this.onTrigger=!1,this.stageIn="fadeInUp",this.stageOut="fadeOutDown"}show(e){this.modal.kitHasClass("kit_none")&&(this.modal.kitRemoveClass("kit_none"),this.stage.kitAddClass(this.stageIn),this.stage.focus(),this.modal.kitAddClass("kit_active"),this.lockScroll&&parseInt(window.getComputedStyle(a,null).height)>=window.innerHeight&&function(e){let t=a.offsetWidth;document.addEventListener("mousewheel",l),document.addEventListener("DOMMouseScroll",l),document.addEventListener("touchmove",l),document.addEventListener("keydown",s.bind(e)),a.kitAddClass("kit_document-live"),e.modal.kitAddClass("kit_modal-live"),e.elementsForScrollPadding.forEach(a=>a.style.paddingRight=e.modal.offsetWidth-t+"px"),e.scrollIsActive=!0}(this),this.onShow&&this.onShow(e))}hide(){var e;this.modal.kitHasClass("kit_none")||(this.modal.kitRemoveClass("kit_active"),this.stage.kitAddClass(this.stageOut),this.scrollIsActive&&(e=this,document.removeEventListener("mousewheel",l),document.removeEventListener("DOMMouseScroll",l),document.removeEventListener("touchmove",l),document.removeEventListener("keydown",s.bind(e)),e.elementsForScrollPadding.forEach(e=>e.style.paddingRight=""),a.kitRemoveClass("kit_document-live"),e.modal.kitRemoveClass("kit_modal-live"),e.scrollIsActive=!1),this.onHide&&this.onHide())}becomeFixed(){this.modal.style.position="fixed"}becomeAbsolute(){this.modal.style.position="absolute",this.modal.parentElement.kitAddClass("kit_relative")}addTrigger(e){let t=e=>{e.modal=this,e.addEventListener("click",e=>{this.preventDefault&&l(e),this.onTrigger&&this.onTrigger(e),this.show(e)}),e.addEventListener("mousedown",e=>{1===e.button&&(this.preventDefault&&l(e),this.onTrigger&&this.onTrigger(e),this.show(e))}),e.addEventListener("keydown",e=>{32===e.keyCode&&13===e.keyCode&&(this.preventDefault&&l(e),this.onTrigger&&this.onTrigger(e),this.show(e))})};switch(typeof e){case"object":t(e);break;case"string":let a=document.querySelectorAll(e);Object.keys(a).forEach(e=>t(a[e]));break;default:console.error('[KitModal] addTrigger takes ".selector" or an element object')}return this}}(e),n=document.kit.modal[e],t&&Object.assign(n,t),n.modal.style.position=n.absolute?n.becomeAbsolute():n.becomeFixed(),n.storeInstances&&function(e){let t,a=e.id;(t="string"==typeof e.storeInstances?document.querySelectorAll(e.storeInstances):!!e.storeInstances&&document.querySelectorAll("[data-modal="+a+"] *"))&&Object.keys(t).forEach(e=>t[e].modal=document.kit.modal[a])}(n),function(e){let t=document.querySelectorAll(e.fixed);e.elementsForScrollPadding.push(a),e.fixed&&Object.keys(t).forEach(a=>e.elementsForScrollPadding.push(t[a]))}(n),n.stage.setAttribute("tabindex",0),n.modal.setAttribute("tabindex",0),n.modal.kitAddClass("kit_none"),function(e){let t,a=document.querySelectorAll("[data-trigger="+e.id+"]");(function(e,t){e.addEventListener("keydown",function(e){27!==e.keyCode||t.required||t.hide()})})(e.stage,e),function(e,t){e.addEventListener("animationend",function(){e.kitRemoveClass(t.stageIn),e.kitHasClass(t.stageOut)&&(e.kitRemoveClass(t.stageOut),t.modal.kitAddClass("kit_none"))})}(e.stage,e),Object.keys(a).forEach(t=>e.addTrigger(a[t],e)),e.stage.addEventListener("blur",()=>{t=setTimeout(()=>{e.required||e.hide()},0)},!0),e.stage.addEventListener("focus",()=>clearTimeout(t),!0)}(n)}),Element.prototype.kitAddClass=function(e){return this.kitHasClass(e)||(this.className+=" "+e),this},Element.prototype.kitRemoveClass=function(e){return this.kitHasClass(e)&&(this.className=this.className.replace(new RegExp("[\\s]{0,1}\\b"+e+"\\b","g"),"")),this},Element.prototype.kitHasClass=function(e){return this.className.indexOf(e)>=0}}])},53:function(e,t,a){e.exports={noteContainer:"_1Dg1_",noteText:"GkbCj",noteAuthor:"_2BXvU"}},54:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(0)),s=n(a(53));function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.author?l.default.createElement("p",{className:s.default.noteAuthor},"—",e.author):null;return l.default.createElement("div",{className:s.default.noteContainer},l.default.createElement("div",{className:s.default.noteText},e.children),t)}},56:function(e,t,a){e.exports={"starBtn-container":"_1GzSr",starBtn:"_2cR01 t2d_m _2xyYr","move-space-bg":"_3xVNY"}},57:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(0)),s=n(a(56));function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return l.default.createElement("div",{className:s.default["starBtn-container"]},l.default.createElement("button",{"data-trigger":e["data-trigger"],className:s.default.starBtn,onClick:e.onClick,onKeyDown:e.onKeyDown,onBlur:e.onBlur,onFocus:e.onFocus},e.children))}},63:function(e,t,a){e.exports={button:"_2iO1P t2d_m _2xyYr"}},64:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(0)),s=n(a(63));function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return l.default.createElement("button",{"data-trigger":e["data-trigger"],className:s.default.button,onClick:e.onClick,onKeyDown:e.onKeyDown,onBlur:e.onBlur,onFocus:e.onFocus},e.children)}},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){}}]);