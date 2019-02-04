(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){},114:function(e,t,a){},58:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=o(a(0)),s=o(a(76)),c=o(a(95)),r=o(a(90));a(81),a(80),a(114),a(112),a(110),a(108),a(106);var i=o(a(6)),d=o(a(78));function o(e){return e&&e.__esModule?e:{default:e}}a(77);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=function(e){e.persist(),setTimeout(function(){return e.target.modal.hide()},3e3)},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),l(t,[{key:"componentDidMount",value:function(){document.kit.modal.createModal("square",{required:!0,stageIn:"fadeIn",stageOut:"fadeOut",fixed:"header"}),document.kit.modal.createModal("rhombus",{required:!0,stageIn:"fadeIn",stageOut:"fadeOut",fixed:"header"}),document.kit.modal.createModal("stripes",{required:!0,stageIn:"fadeIn",stageOut:"fadeOut",fixed:"header"}),document.kit.modal.createModal("circles",{required:!0,stageIn:"fadeIn",stageOut:"fadeOut",fixed:"header"}),document.kit.modal.createModal("spinner",{required:!0,stageIn:"fadeIn",stageOut:"fadeOut",fixed:"header"})}},{key:"render",value:function(){var e=this.props.bootstrap;return n.default.createElement("div",null,n.default.createElement("section",{className:i.default.commonSection},n.default.createElement("div",{className:e.row},n.default.createElement("div",{className:e.col},n.default.createElement("h1",{className:i.default.h1},"Modal Loader"),n.default.createElement("p",null,"Let's pretend that we are requesting any data from the server. ",n.default.createElement("br",null)," Press the button!"),n.default.createElement("div",{className:i.default["btn-container"]},n.default.createElement(r.default,{onClick:this.handleClick,"data-trigger":"circles"},"To the stars!")),n.default.createElement("p",null,"Agree, it's nice to know that the site responded, and started doing something after clicking the button, right?"),n.default.createElement("h2",{className:i.default.h2},"Why this is so important?"),n.default.createElement("p",null,"Preloader is useful interface element that let visitors know that the website hasn’t crashed, it’s just processing some data.",n.default.createElement("br",null)," Do not underestimate it."),n.default.createElement("p",null,"Try some more of them"),n.default.createElement("div",{className:e.row},n.default.createElement("div",{className:e["col-6"]},n.default.createElement("div",{className:i.default["btn-container"]},n.default.createElement(c.default,{onClick:this.handleClick,"data-trigger":"rhombus"},"Rhombus"))),n.default.createElement("div",{className:e["col-6"]},n.default.createElement("div",{className:i.default["btn-container"]},n.default.createElement(c.default,{onClick:this.handleClick,"data-trigger":"stripes"},"Stripes"))),n.default.createElement("div",{className:e["col-6"]},n.default.createElement("div",{className:i.default["btn-container"]},n.default.createElement(c.default,{onClick:this.handleClick,"data-trigger":"square"},"Square"))),n.default.createElement("div",{className:e["col-6"]},n.default.createElement("div",{className:i.default["btn-container"]},n.default.createElement(c.default,{onClick:this.handleClick,"data-trigger":"spinner"},"Spinner")))),n.default.createElement("h2",{className:i.default.h2},"So how do we make one of them?"),n.default.createElement("p",null,"As an example i will use the first one, with circles. ",n.default.createElement("br",null)," Others connecting with the same way as this one, just select one(or many) of the styles, and copy html markup."),n.default.createElement(s.default,null,"Don't forget, nothing can stop you from making your own styles, markups and animations. ",n.default.createElement("br",null),"Just put your HTML inside of the modal_stage, and... you know what to do."),n.default.createElement("h3",{className:i.default.h3},"CSS"),n.default.createElement("div",{className:i.default.codeContainer},n.default.createElement(d.default,{language:"html"},n.default.createElement("span",{className:i.default.codeLine},'<link rel="stylesheet" href="/styles/kit.modal.css">'),n.default.createElement("span",{className:i.default.codeLine},'<link rel="stylesheet" href="/styles/kit.modal.loader-circles.css">'))),n.default.createElement("h3",{className:i.default.h3},"HTML"),n.default.createElement("div",{className:i.default.codeContainer},n.default.createElement(d.default,{language:"html"},n.default.createElement("span",{className:i.default.codeLine},'<div data-modal="circles" class="kit_modal circles">'),n.default.createElement("div",{className:i.default.code_levels},n.default.createElement("span",{className:i.default.codeLine},'<div class="modal_stage circles-stage">'),n.default.createElement("div",{className:i.default.code_levels},n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-fading-circle">'),n.default.createElement("div",{className:i.default.code_levels},n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle1 sk-circle"></div>'),n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle2 sk-circle"></div>'),n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle3 sk-circle"></div>'),n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle4 sk-circle"></div>'),n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle5 sk-circle"></div>'),n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle6 sk-circle"></div>'),n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle7 sk-circle"></div>'),n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle8 sk-circle"></div>'),n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle9 sk-circle"></div>'),n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle10 sk-circle"></div>'),n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle11 sk-circle"></div>'),n.default.createElement("span",{className:i.default.codeLine},'<div class="sk-circle12 sk-circle"></div>')),n.default.createElement("span",{className:i.default.codeLine},"</div>")),n.default.createElement("span",{className:i.default.codeLine},"</div>")),n.default.createElement("span",{className:i.default.codeLine},"</div>"))),n.default.createElement("h3",{className:i.default.h3},"JS"),n.default.createElement("div",{className:i.default.codeContainer},n.default.createElement(d.default,{language:"html"},n.default.createElement("span",{className:i.default.codeLine},'<script src="/js/kit.modal.js"><\/script>'))),n.default.createElement("h3",{className:i.default.h3},"Calling the plugin"),n.default.createElement("div",{className:i.default.codeContainer},n.default.createElement(d.default,{language:"javascript"},n.default.createElement("span",{className:i.default.codeLine},"document.kit.modal.createModal('circles',{\n    required: true,\n    stageIn: 'fadeIn',\n    stageOut: 'fadeOut'\n});"))),n.default.createElement("h2",{className:i.default.h2},"So what to do with it?"),n.default.createElement("p",null,"You set up everything you need to use KitModal as a preloader.",n.default.createElement("br",null),"Next time when you will load something from server, or calculate something heavy, just show modal when you starts, and hide it in the end.",n.default.createElement("br",null),"Like this:"),n.default.createElement("div",{className:i.default.codeContainer},n.default.createElement(d.default,{language:"javascript"},"let modal = document.kit.modal.circles; \n    modal.show();\n    // do some code \n    modal.hide();")),n.default.createElement(s.default,null,"All this wonderful animations for Kit Loader was provided by Tobi Ahlin.",n.default.createElement("br",null),"Subscribe Tobi on ",n.default.createElement("a",{href:"https://twitter.com/tobiasahlin"},"Twitter"),", or check for more animations on his ",n.default.createElement("a",{href:"http://tobiasahlin.com/spinkit/"},"site"),".")))),n.default.createElement("div",{"data-modal":"square",className:"kit_modal square"},n.default.createElement("div",{className:"modal_stage square-stage"},n.default.createElement("div",{className:"modal_stage square-inner"}))),n.default.createElement("div",{"data-modal":"rhombus",className:"kit_modal rhombus"},n.default.createElement("div",{className:"modal_stage rhombus-stage"},n.default.createElement("div",{className:"modal_stage rhombus-inner"},n.default.createElement("div",{className:"sk-cube1 sk-cube"}),n.default.createElement("div",{className:"sk-cube2 sk-cube"}),n.default.createElement("div",{className:"sk-cube4 sk-cube"}),n.default.createElement("div",{className:"sk-cube3 sk-cube"})))),n.default.createElement("div",{"data-modal":"stripes",className:"kit_modal stripes"},n.default.createElement("div",{className:"modal_stage stripes-stage"},n.default.createElement("div",{className:"modal_stage stripes-inner"},n.default.createElement("div",{className:"rect1"}),n.default.createElement("div",{className:"rect2"}),n.default.createElement("div",{className:"rect3"}),n.default.createElement("div",{className:"rect4"}),n.default.createElement("div",{className:"rect5"})))),n.default.createElement("div",{"data-modal":"circles",className:"kit_modal circles"},n.default.createElement("div",{className:"modal_stage circles-stage"},n.default.createElement("div",{className:"sk-fading-circle"},n.default.createElement("div",{className:"sk-circle1 sk-circle"}),n.default.createElement("div",{className:"sk-circle2 sk-circle"}),n.default.createElement("div",{className:"sk-circle3 sk-circle"}),n.default.createElement("div",{className:"sk-circle4 sk-circle"}),n.default.createElement("div",{className:"sk-circle5 sk-circle"}),n.default.createElement("div",{className:"sk-circle6 sk-circle"}),n.default.createElement("div",{className:"sk-circle7 sk-circle"}),n.default.createElement("div",{className:"sk-circle8 sk-circle"}),n.default.createElement("div",{className:"sk-circle9 sk-circle"}),n.default.createElement("div",{className:"sk-circle10 sk-circle"}),n.default.createElement("div",{className:"sk-circle11 sk-circle"}),n.default.createElement("div",{className:"sk-circle12 sk-circle"})))),n.default.createElement("div",{"data-modal":"spinner",className:"kit_modal stripes"},n.default.createElement("div",{className:"modal_stage stripes-stage"},n.default.createElement("div",{className:"spinner"},n.default.createElement("div",{className:"cube1"}),n.default.createElement("div",{className:"cube2"})))))}}]),t}();t.default=u},75:function(e,t,a){e.exports={noteHeading:"_16bKl",noteContainer:"_1Dg1_",noteAuthor:"_2BXvU"}},76:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a(0)),n=s(a(75));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.author?l.default.createElement("p",{className:n.default.noteAuthor},"—",e.author):null;return l.default.createElement("div",{className:n.default.noteContainer},!e.note&&l.default.createElement("div",{className:n.default.noteHeading},"Note"),l.default.createElement("div",{className:n.default.noteText},e.children),t)}},80:function(e,t,a){},81:function(e,t){!function(e){var t={};function a(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(l,n,function(t){return e[t]}.bind(null,n));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/Users/andrejponomarenko/Projects/kit.modal/prod/",a(a.s=2)}([,function(e,t,a){},function(e,t,a){"use strict";var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}();a(1),document.kit||(document.kit={}),document.kit.modal||(document.kit.modal={});var c=document.documentElement;window.kit=document.kit;var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t,this.modal=document.querySelector("[data-modal="+t+"]"),this.stage=document.querySelector("[data-modal="+t+"] .modal_stage"),this.scrollIsActive=!1,this.lockKeys=[32,33,34,35,36,37,38,39,40],this.elementsForScrollPadding=[],this.required=!1,this.preventDefault=!1,this.lockScroll=!0,this.absolute=!1,this.fixed=!1,this.focusStage=!0,this.storeInstances=!0,this.onShow=!1,this.onHide=!1,this.onTrigger=!1,this.stageIn="fadeInUp",this.stageOut="fadeOutDown"}return s(e,[{key:"show",value:function(e){var t,a;this.modal.kitHasClass("kit_none")&&(this.modal.kitRemoveClass("kit_none"),this.stage.kitAddClass(this.stageIn),this.focusStage&&this.stage.focus(),this.modal.kitAddClass("kit_active"),this.lockScroll&&parseInt(window.getComputedStyle(c,null).height)>=window.innerHeight&&(t=this,a=c.offsetWidth,document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("gesturechange",i),document.addEventListener("keydown",d.bind(t)),c.kitAddClass("kit_document-live"),t.modal.kitAddClass("kit_modal-live"),t.elementsForScrollPadding.forEach(function(e){return e.style.paddingRight=t.modal.offsetWidth-a+"px"}),t.scrollIsActive=!0),this.onShow&&this.onShow(e))}},{key:"hide",value:function(){var e;this.modal.kitHasClass("kit_none")||(this.modal.kitRemoveClass("kit_active"),this.stage.kitAddClass(this.stageOut),this.scrollIsActive&&(e=this,document.removeEventListener("touchmove",i,{passive:!1}),document.removeEventListener("gesturechange",i),document.removeEventListener("keydown",d.bind(e)),e.elementsForScrollPadding.forEach(function(e){return e.style.paddingRight=""}),c.kitRemoveClass("kit_document-live"),e.modal.kitRemoveClass("kit_modal-live"),e.scrollIsActive=!1),this.onHide&&this.onHide())}},{key:"becomeFixed",value:function(){this.modal.style.position="fixed"}},{key:"becomeAbsolute",value:function(){this.modal.style.position="absolute",this.modal.parentElement.kitAddClass("kit_relative")}},{key:"addTrigger",value:function(e){var t=this,a=function(e){e.modal=t,e.addEventListener("click",function(e){t.preventDefault&&i(e),t.onTrigger&&t.onTrigger(e),t.show(e)}),e.addEventListener("mousedown",function(e){1===e.button&&(t.preventDefault&&i(e),t.onTrigger&&t.onTrigger(e),t.show(e))}),e.addEventListener("keydown",function(e){32===e.keyCode&&13===e.keyCode&&(t.preventDefault&&i(e),t.onTrigger&&t.onTrigger(e),t.show(e))})};switch(void 0===e?"undefined":n(e)){case"object":a(e);break;case"string":var l=document.querySelectorAll(e);Object.keys(l).forEach(function(e){return a(l[e])});break;default:console.error('[KitModal] addTrigger takes ".selector" or an element object')}return this}}]),e}();function i(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function d(e){this.lockKeys.indexOf(e.keyCode)>=0&&i(e)}document.kit.modal.createModal=function(e,t){var a,n,s=void 0;document.kit.modal[e]=new r(e),s=document.kit.modal[e],t&&l(s,t),s.modal.style.position=s.absolute?s.becomeAbsolute():s.becomeFixed(),s.storeInstances&&function(e){var t=e.id,a=void 0;(a="string"==typeof e.storeInstances?document.querySelectorAll(e.storeInstances):!!e.storeInstances&&document.querySelectorAll("[data-modal="+t+"] *"))&&Object.keys(a).forEach(function(e){return a[e].modal=document.kit.modal[t]})}(s),a=s,n=document.querySelectorAll(a.fixed),a.elementsForScrollPadding.push(c),a.fixed&&Object.keys(n).forEach(function(e){return a.elementsForScrollPadding.push(n[e])}),s.stage.setAttribute("tabindex",0),s.modal.setAttribute("tabindex",0),s.modal.kitAddClass("kit_none"),function(e){var t=document.querySelectorAll("[data-trigger="+e.id+"]"),a=void 0;(function(e,t){e.addEventListener("keydown",function(e){27!==e.keyCode||t.required||t.hide()})})(e.stage,e),function(e,t){e.addEventListener("animationend",function(){e.kitRemoveClass(t.stageIn),e.kitHasClass(t.stageOut)&&(e.kitRemoveClass(t.stageOut),t.modal.kitAddClass("kit_none"))})}(e.stage,e),Object.keys(t).forEach(function(a){return e.addTrigger(t[a],e)}),e.stage.addEventListener("blur",function(){a=setTimeout(function(){e.required||e.hide()},0)},!0),e.stage.addEventListener("focus",function(){return clearTimeout(a)},!0)}(s)},Element.prototype.kitAddClass=function(e){return this.kitHasClass(e)||(this.className+=" "+e),this},Element.prototype.kitRemoveClass=function(e){return this.kitHasClass(e)&&(this.className=this.className.replace(new RegExp("[\\s]{0,1}\\b"+e+"\\b","g"),"")),this},Element.prototype.kitHasClass=function(e){return this.className.indexOf(e)>=0}}])},89:function(e,t,a){e.exports={"starBtn-container":"_1GzSr",starBtn:"_2cR01 t2d_m _2xyYr","move-space-bg":"_3xVNY"}},90:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a(0)),n=s(a(89));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return l.default.createElement("div",{className:n.default["starBtn-container"]},l.default.createElement("button",{"data-trigger":e["data-trigger"],className:n.default.starBtn,onClick:e.onClick,onKeyDown:e.onKeyDown,onBlur:e.onBlur,onFocus:e.onFocus},e.children))}},94:function(e,t,a){e.exports={button:"_2iO1P t2d_m _2xyYr"}},95:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a(0)),n=s(a(94));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return l.default.createElement("button",{"data-trigger":e["data-trigger"],className:n.default.button,onClick:e.onClick,onKeyDown:e.onKeyDown,onBlur:e.onBlur,onFocus:e.onFocus},e.children)}}}]);