(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{58:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=s(n(0));n(73),n(72);var i=s(n(6)),l=s(n(70));function s(t){return t&&t.__esModule?t:{default:t}}n(69);var r=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.modalClose=function(t){t.persist(),t.target.modal.hide()},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.Component),a(e,[{key:"componentDidMount",value:function(){var t=document.querySelector(".exit-link");document.kit.modal.createModal("External",{preventDefault:!0,required:!0,fixed:"header",onTrigger:function(e){t.href=e.target.href}})}},{key:"render",value:function(){var t=this.props.bootstrap;return o.default.createElement("div",null,o.default.createElement("section",{className:i.default.commonSection},o.default.createElement("div",{className:t.row},o.default.createElement("div",{className:t.col},o.default.createElement("h1",{className:i.default.h1},"Modal External"),o.default.createElement("p",null,"Click to proceed to external site ",o.default.createElement("a",{"data-trigger":"External",href:"http://stackoverflow.com/"},"here"),"."),o.default.createElement("h2",{className:i.default.h2},"And here's the setup"),o.default.createElement("div",{className:i.default.codeContainer},o.default.createElement(l.default,{language:"html"},o.default.createElement("span",{className:i.default.codeLine},'<link rel="stylesheet" href="/styles/kit.modal.css">'),o.default.createElement("span",{className:i.default.codeLine},'<link rel="stylesheet" href="/styles/kit.modal.basic.css">'))),o.default.createElement("h3",{className:i.default.h3},"HTML"),o.default.createElement("div",{className:i.default.codeContainer},o.default.createElement(l.default,{language:"html"},o.default.createElement("span",{className:i.default.codeLine},'<div data-modal="External" class="kit_modal modal_basic">'),o.default.createElement("div",{className:i.default.code_levels},o.default.createElement("span",{className:i.default.codeLine},'<div class="modal_stage basic-stage">'),o.default.createElement("div",{className:i.default.code_levels},o.default.createElement("span",{className:i.default.codeLine},'<p class="basic-heading">You are leaving our website.</p>'),o.default.createElement("span",{className:i.default.codeLine},'<p class="basic-text">Click «Continue» to proceed, or «Cancel» to stay on our site.</p>'),o.default.createElement("span",{className:i.default.codeLine},'<div class="basic-buttons-container">'),o.default.createElement("div",{className:i.default.code_levels},o.default.createElement("span",{className:i.default.codeLine},'<button onClick="this.modal.hide()" class="basic-button" type="button"> Cansel </button>'),o.default.createElement("span",{className:i.default.codeLine},'<a class="basic-button exit-link" href="#" target="_blank"> Continue </a>')),o.default.createElement("span",{className:i.default.codeLine},"</div>")),o.default.createElement("span",{className:i.default.codeLine},"</div>")),o.default.createElement("span",{className:i.default.codeLine},"</div>"))),o.default.createElement("h3",{className:i.default.h3},"JS"),o.default.createElement("div",{className:i.default.codeContainer},o.default.createElement(l.default,{language:"html"},o.default.createElement("span",{className:i.default.codeLine},'<script src="/js/kit.modal.js"><\/script>'))),o.default.createElement("h3",{className:i.default.h3},"Make a handler"),o.default.createElement("div",{className:i.default.codeContainer},o.default.createElement(l.default,{language:"javascript"},o.default.createElement("span",{className:i.default.codeLine},"let link = document.querySelector('.exit-link');\nfunction triggerHandler(event) {\n\tlink.href = event.target.href;\n}"))),o.default.createElement("h3",{className:i.default.h3},"Calling the plugin"),o.default.createElement("div",{className:i.default.codeContainer},o.default.createElement(l.default,{language:"javascript"},o.default.createElement("span",{className:i.default.codeLine},"document.kit.modal.createModal('External', {\n\tpreventDefault: true,\n\trequired: true,\n\tonTrigger : triggerHandler\n});")))))),o.default.createElement("div",{"data-modal":"External",className:"kit_modal basic"},o.default.createElement("div",{className:"modal_stage basic-stage"},o.default.createElement("p",{className:"basic-heading"},"You are leaving our website."),o.default.createElement("p",{className:"basic-text"},"Click «Continue» to proceed, or «Cancel» to stay on our site."),o.default.createElement("div",{className:"basic-container"},o.default.createElement("button",{onClick:this.modalClose,className:"basic-button",type:"button"},"Cancel"),o.default.createElement("a",{target:"_blank",className:"basic-button exit-link",href:"#"},"Continue")))))}}]),e}();e.default=r},72:function(t,e,n){},73:function(module,exports){!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Users/andrejponomarenko/Projects/kit.modal/dist/",n(n.s="./dev/kit.modal.js")}({"./dev/kit.modal.css":
/*!***************************!*\
  !*** ./dev/kit.modal.css ***!
  \***************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./dev/kit.modal.css?")},"./dev/kit.modal.js":
/*!**************************!*\
  !*** ./dev/kit.modal.js ***!
  \**************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! ./kit.modal.css */ \"./dev/kit.modal.css\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * UI Kit Modal v1.1.0\n * Copyright 2017-2019 Andrey Ponomarenko\n * Licensed under  ()\n */\n\n// ======================= MODEL ============================\n\nif (!document.kit) document.kit = {};\nif (!document.kit.modal) document.kit.modal = {};\nvar doc = document.documentElement;\nwindow.kit = document.kit;\n\n// == Инициализация ==\n//data-modal - айди\n//data-trigger - id привязка к модалке\n\n//== Опции ==\n// position (string) - fixed/Absolute (На весь экран / в блоке)\n// required (true/false) - закрыть модалку можно только по методом hide\n// preventDefault (true/false) - будет отменять дефолтное действие по нажатию на триггер (если это напр ссылка)\n// fixed ('.string') - внести в список, если элемент в позиции fixed и прижат к правому краю\n// storeInstances(true/false/.string) - В каких элементах хранить ссылку на модалку (по дефолту тру, хранит во всех чилдренах модалки)\n\n// == Методы окна ==\n// show() - показать окно\n// hide() - скрыть окно\n// addTrigger(element / '.selector') - добавить триггер\n// becomeFixed() - делает окно фиксированным\n// becomeAbsolute() - делает окно абсолютным\n\n// == Глобальные методы ==\n// createModal - создает модальное окно\n\n// == Коллбеки ==\n//onShow(event)\n// this - модальное окно\n// event - event\n\n//onHide()\n// this - модальное окно\n\n//onTrigger(event)\n// this - модальное окно\n// event - event\n\n// == Полезные параметры ==\n// this.id - идентификатор модального окна\n// this.modal - элемент модалка\n// this.stage - внутреннее окно\n//\n\n\nvar KitModal = function () {\n\tfunction KitModal(id) {\n\t\t_classCallCheck(this, KitModal);\n\n\t\tthis.id = id;\n\t\tthis.modal = document.querySelector('[data-modal=' + id + ']');\n\t\tthis.stage = document.querySelector('[data-modal=' + id + '] .modal_stage');\n\t\tthis.scrollIsActive = false;\n\t\tthis.lockKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];\n\t\tthis.elementsForScrollPadding = [];\n\n\t\tthis.required = false;\n\t\tthis.preventDefault = false;\n\t\tthis.lockScroll = true;\n\t\tthis.absolute = false;\n\t\tthis.fixed = false;\n\t\tthis.storeInstances = true;\n\n\t\t//Callbacks\n\t\tthis.onShow = false;\n\t\tthis.onHide = false;\n\t\tthis.onTrigger = false;\n\n\t\t//Animations\n\t\tthis.stageIn = \"fadeInUp\";\n\t\tthis.stageOut = \"fadeOutDown\";\n\t}\n\n\t_createClass(KitModal, [{\n\t\tkey: 'show',\n\t\tvalue: function show(e) {\n\t\t\tif (!this.modal.kitHasClass(\"kit_none\")) return;\n\t\t\tthis.modal.kitRemoveClass(\"kit_none\");\n\t\t\tthis.stage.kitAddClass(this.stageIn);\n\t\t\tthis.stage.focus();\n\t\t\tthis.modal.kitAddClass(\"kit_active\");\n\t\t\tif (this.lockScroll && isScroll()) lockScroll(this);\n\t\t\tif (this.onShow) this.onShow(e);\n\t\t}\n\t}, {\n\t\tkey: 'hide',\n\t\tvalue: function hide() {\n\t\t\tif (this.modal.kitHasClass(\"kit_none\")) return;\n\t\t\tthis.modal.kitRemoveClass(\"kit_active\");\n\t\t\tthis.stage.kitAddClass(this.stageOut);\n\t\t\tif (this.scrollIsActive) releaseScroll(this);\n\t\t\tif (this.onHide) this.onHide();\n\t\t}\n\t}, {\n\t\tkey: 'becomeFixed',\n\t\tvalue: function becomeFixed() {\n\t\t\tthis.modal.style.position = 'fixed';\n\t\t}\n\t}, {\n\t\tkey: 'becomeAbsolute',\n\t\tvalue: function becomeAbsolute() {\n\t\t\tthis.modal.style.position = 'absolute';\n\t\t\tthis.modal.parentElement.kitAddClass('kit_relative');\n\t\t}\n\t}, {\n\t\tkey: 'addTrigger',\n\t\tvalue: function addTrigger(input) {\n\t\t\tvar _this = this;\n\n\t\t\tvar set = function set(element) {\n\t\t\t\telement.modal = _this;\n\t\t\t\telement.addEventListener('click', function (e) {\n\t\t\t\t\tif (_this.preventDefault) preventDefault(e);\n\t\t\t\t\tif (_this.onTrigger) _this.onTrigger(e);\n\t\t\t\t\t_this.show(e);\n\t\t\t\t});\n\t\t\t\telement.addEventListener('mousedown', function (e) {\n\t\t\t\t\tif (e.button !== 1) return;\n\t\t\t\t\tif (_this.preventDefault) preventDefault(e);\n\t\t\t\t\tif (_this.onTrigger) _this.onTrigger(e);\n\t\t\t\t\t_this.show(e);\n\t\t\t\t});\n\t\t\t\telement.addEventListener('keydown', function (e) {\n\t\t\t\t\tif (e.keyCode !== 32 || e.keyCode !== 13) return;\n\t\t\t\t\tif (_this.preventDefault) preventDefault(e);\n\t\t\t\t\tif (_this.onTrigger) _this.onTrigger(e);\n\t\t\t\t\t_this.show(e);\n\t\t\t\t});\n\t\t\t};\n\t\t\tswitch (typeof input === 'undefined' ? 'undefined' : _typeof(input)) {\n\t\t\t\tcase 'object':\n\t\t\t\t\tset(input);\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'string':\n\t\t\t\t\tvar o = document.querySelectorAll(input);\n\t\t\t\t\tObject.keys(o).forEach(function (e) {\n\t\t\t\t\t\treturn set(o[e]);\n\t\t\t\t\t});\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\tconsole.error('[KitModal] addTrigger takes \".selector\" or an element object');\n\t\t\t}\n\t\t\treturn this;\n\t\t}\n\t}]);\n\n\treturn KitModal;\n}();\n\ndocument.kit.modal.createModal = function (id, params) {\n\tvar m = void 0;\n\tdocument.kit.modal[id] = new KitModal(id);\n\tm = document.kit.modal[id];\n\tif (params) Object.assign(m, params);\n\tm.modal.style.position = m.absolute ? m.becomeAbsolute() : m.becomeFixed();\n\tif (m.storeInstances) linkInstances(m);\n\tsetElementsForScrollPadding(m);\n\tm.stage.setAttribute('tabindex', 0);\n\tm.modal.setAttribute('tabindex', 0);\n\tm.modal.kitAddClass('kit_none');\n\tsetListeners(m);\n};\n\nfunction setElementsForScrollPadding(obj) {\n\tvar e = document.querySelectorAll(obj.fixed);\n\tobj.elementsForScrollPadding.push(doc);\n\tif (obj.fixed) Object.keys(e).forEach(function (i) {\n\t\treturn obj.elementsForScrollPadding.push(e[i]);\n\t});\n}\n\nfunction linkInstances(obj) {\n\tvar id = obj.id,\n\t    el = void 0;\n\tif (typeof obj.storeInstances === 'string') {\n\t\tel = document.querySelectorAll(obj.storeInstances);\n\t} else if (obj.storeInstances) {\n\t\tel = document.querySelectorAll('[data-modal=' + id + '] *');\n\t} else {\n\t\tel = false;\n\t}\n\tif (el) Object.keys(el).forEach(function (i) {\n\t\treturn el[i].modal = document.kit.modal[id];\n\t});\n}\n\nfunction setListeners(obj) {\n\tvar triggers = document.querySelectorAll('[data-trigger=' + obj.id + ']'),\n\t    timer = void 0;\n\tsetKeyDownListener(obj.stage, obj);\n\tsetAnimationEndListener(obj.stage, obj);\n\tObject.keys(triggers).forEach(function (e) {\n\t\treturn obj.addTrigger(triggers[e], obj);\n\t});\n\t//\n\t// obj.modal.addEventListener('click', function(e) {\n\t// \tif(e.target === this && !obj.required) obj.hide();\n\t// });\n\n\tobj.stage.addEventListener('blur', function () {\n\t\ttimer = setTimeout(function () {\n\t\t\tif (!obj.required) obj.hide();\n\t\t}, 0);\n\t}, true);\n\tobj.stage.addEventListener('focus', function () {\n\t\treturn clearTimeout(timer);\n\t}, true);\n}\n\nfunction setKeyDownListener(element, obj) {\n\telement.addEventListener('keydown', function (e) {\n\t\tvar k = e.keyCode;\n\t\tif (k === 27 && !obj.required) obj.hide();\n\t});\n}\n\nfunction setAnimationEndListener(element, obj) {\n\telement.addEventListener('animationend', function () {\n\t\telement.kitRemoveClass(obj.stageIn);\n\t\tif (element.kitHasClass(obj.stageOut)) {\n\t\t\telement.kitRemoveClass(obj.stageOut);\n\t\t\tobj.modal.kitAddClass(\"kit_none\");\n\t\t}\n\t});\n}\n\nfunction lockScroll(obj) {\n\t//important to save width in variable to determinate scroll, before applying 'scroll_hide' to document;\n\tvar width = doc.offsetWidth;\n\t// document.addEventListener('mousewheel', preventDefault);\n\t// document.addEventListener('DOMMouseScroll', preventDefault);\n\tdocument.addEventListener('touchmove', preventDefault, { passive: false });\n\tdocument.addEventListener('gesturechange', preventDefault);\n\tdocument.addEventListener('keydown', preventKeys.bind(obj));\n\tdoc.kitAddClass('kit_document-live');\n\tobj.modal.kitAddClass('kit_modal-live');\n\tobj.elementsForScrollPadding.forEach(function (t) {\n\t\treturn t.style.paddingRight = obj.modal.offsetWidth - width + 'px';\n\t});\n\tobj.scrollIsActive = true;\n}\n\nfunction releaseScroll(obj) {\n\t// document.removeEventListener('mousewheel', preventDefault);\n\t// document.removeEventListener('DOMMouseScroll', preventDefault);\n\tdocument.removeEventListener('touchmove', preventDefault, { passive: false });\n\tdocument.removeEventListener('gesturechange', preventDefault);\n\tdocument.removeEventListener('keydown', preventKeys.bind(obj));\n\tobj.elementsForScrollPadding.forEach(function (t) {\n\t\treturn t.style.paddingRight = '';\n\t});\n\tdoc.kitRemoveClass('kit_document-live');\n\tobj.modal.kitRemoveClass('kit_modal-live');\n\tobj.scrollIsActive = false;\n}\n\nfunction preventDefault(e) {\n\te.preventDefault ? e.preventDefault() : e.returnValue = false;\n}\n\nfunction isScroll() {\n\treturn parseInt(window.getComputedStyle(doc, null).height) >= window.innerHeight;\n}\nfunction preventKeys(e) {\n\tif (this.lockKeys.indexOf(e.keyCode) >= 0) {\n\t\tpreventDefault(e);\n\t}\n}\n\nElement.prototype.kitAddClass = function (classN) {\n\tif (!this.kitHasClass(classN)) this.className += \" \" + classN;\n\treturn this;\n};\n\nElement.prototype.kitRemoveClass = function (classN) {\n\tthis.kitHasClass(classN) ? this.className = this.className.replace(new RegExp('[\\\\s]{0,1}\\\\b' + classN + '\\\\b', \"g\"), \"\") : false;\n\treturn this;\n};\n\nElement.prototype.kitHasClass = function (classN) {\n\treturn this.className.indexOf(classN) >= 0;\n};\n\n//# sourceURL=webpack:///./dev/kit.modal.js?")}})}}]);