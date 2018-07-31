(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{51:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=r(n(0));n(61),n(65),n(71);var i=r(n(69)),s=r(n(6)),l=r(n(63));function r(t){return t&&t.__esModule?t:{default:t}}n(62);var d=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleClickModal=function(t){t.persist(),t.target.modal.hide()},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default.Component),o(e,[{key:"componentDidMount",value:function(){document.kit.modal.createModal("Basic",{fixed:"header"})}},{key:"render",value:function(){var t=this.props.bootstrap;return a.default.createElement("div",null,a.default.createElement("section",{className:s.default.commonSection},a.default.createElement("div",{className:t.row},a.default.createElement("div",{className:t.col},a.default.createElement("h1",{className:s.default.h1},"Modal Basic"),a.default.createElement("p",null,"Imagine that user filled your online form and send it.",a.default.createElement("br",null),"So, how to notify him about it?"),a.default.createElement("p",null,"Well, the answer is right in front of us."),a.default.createElement(i.default,{"data-trigger":"Basic"},"Front of us"),a.default.createElement("h2",{className:s.default.h2},"Pretty simple right?"),a.default.createElement("p",null,"This (as you may thought) is the most common way to use Kit Modal. Everything is default. Only some styles for text and button inside."),a.default.createElement("h2",{className:s.default.h2},"So here's the setup"),a.default.createElement("h3",{className:s.default.h3},"HTML Modal"),a.default.createElement("div",{className:s.default.codeContainer},a.default.createElement(l.default,{language:"html"},a.default.createElement("span",{className:s.default.codeLine},'<div data-modal="Basic" class="kit_modal basic">'),a.default.createElement("div",{className:s.default.code_levels},a.default.createElement("span",{className:s.default.codeLine},'<div class="modal_stage basic-stage">'),a.default.createElement("div",{className:s.default.code_levels},a.default.createElement("span",{className:s.default.codeLine},'<p class="basic-heading">This is a basic layout.</p>'),a.default.createElement("span",{className:s.default.codeLine},'<p class="basic-text">But it can be easily modified to your requirements.</p>'),a.default.createElement("span",{className:s.default.codeLine},'<div class="basic-container">'),a.default.createElement("div",{className:s.default.code_levels},a.default.createElement("span",{className:s.default.codeLine},'<button onClick="this.modal.hide()" class="basic-button" type="button">CLOSE</button>')),a.default.createElement("span",{className:s.default.codeLine},"</div>")),a.default.createElement("span",{className:s.default.codeLine},"</div>")),a.default.createElement("span",{className:s.default.codeLine},"</div>"))),a.default.createElement("h3",{className:s.default.h3},"HTML Trigger"),a.default.createElement("div",{className:s.default.codeContainer},a.default.createElement(l.default,{language:"html"},"<button data-trigger='Basic'>Front of us</button>")),a.default.createElement("h3",{className:s.default.h3},"JS"),a.default.createElement("div",{className:s.default.codeContainer},a.default.createElement(l.default,{language:"javascript"},a.default.createElement("span",{className:s.default.codeLine},"document.kit.modal.createModal('Basic');")))))),a.default.createElement("div",{"data-modal":"Basic",className:"kit_modal basic"},a.default.createElement("div",{className:"modal_stage basic-stage"},a.default.createElement("p",{className:"basic-heading"},"This is a basic layout."),a.default.createElement("p",{className:"basic-text"},"But it can be easily modified to your requirements."),a.default.createElement("div",{className:"basic-container"},a.default.createElement("button",{onClick:this.handleClickModal,className:"basic-button",type:"button"},"CLOSE")))))}}]),e}();e.default=d},61:function(module,exports){!function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Users/andrejponomarenko/Projects/kit.modal/dist/",n(n.s="./dev/kit.modal.js")}({"./dev/kit.modal.css":
/*!***************************!*\
  !*** ./dev/kit.modal.css ***!
  \***************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./dev/kit.modal.css?")},"./dev/kit.modal.js":
/*!**************************!*\
  !*** ./dev/kit.modal.js ***!
  \**************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! ./kit.modal.css */ \"./dev/kit.modal.css\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * UI Kit Modal v1.1.0\n * Copyright 2017-2019 Andrey Ponomarenko\n * Licensed under  ()\n */\n\n// ======================= MODEL ============================\n\nif (!document.kit) document.kit = {};\nif (!document.kit.modal) document.kit.modal = {};\nvar doc = document.documentElement;\nwindow.kit = document.kit;\n\n// == Инициализация ==\n//data-modal - айди\n//data-trigger - id привязка к модалке\n\n//== Опции ==\n// position (string) - fixed/Absolute (На весь экран / в блоке)\n// required (true/false) - закрыть модалку можно только по методом hide\n// preventDefault (true/false) - будет отменять дефолтное действие по нажатию на триггер (если это напр ссылка)\n// fixed ('.string') - внести в список, если элемент в позиции fixed и прижат к правому краю\n// storeInstances(true/false/.string) - В каких элементах хранить ссылку на модалку (по дефолту тру, хранит во всех чилдренах модалки)\n\n// == Методы окна ==\n// show() - показать окно\n// hide() - скрыть окно\n// addTrigger(element / '.selector') - добавить триггер\n// becomeFixed() - делает окно фиксированным\n// becomeAbsolute() - делает окно абсолютным\n\n// == Глобальные методы ==\n// createModal - создает модальное окно\n\n// == Коллбеки ==\n//onShow(event)\n// this - модальное окно\n// event - event\n\n//onHide()\n// this - модальное окно\n\n//onTrigger(event)\n// this - модальное окно\n// event - event\n\n// == Полезные параметры ==\n// this.id - идентификатор модального окна\n// this.modal - элемент модалка\n// this.stage - внутреннее окно\n//\n\n\nvar KitModal = function () {\n\tfunction KitModal(id) {\n\t\t_classCallCheck(this, KitModal);\n\n\t\tthis.id = id;\n\t\tthis.modal = document.querySelector('[data-modal=' + id + ']');\n\t\tthis.stage = document.querySelector('[data-modal=' + id + '] .modal_stage');\n\t\tthis.scrollIsActive = false;\n\t\tthis.lockKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];\n\t\tthis.elementsForScrollPadding = [];\n\n\t\tthis.required = false;\n\t\tthis.preventDefault = false;\n\t\tthis.lockScroll = true;\n\t\tthis.absolute = false;\n\t\tthis.fixed = false;\n\t\tthis.storeInstances = true;\n\n\t\t//Callbacks\n\t\tthis.onShow = false;\n\t\tthis.onHide = false;\n\t\tthis.onTrigger = false;\n\n\t\t//Animations\n\t\tthis.stageIn = \"fadeInUp\";\n\t\tthis.stageOut = \"fadeOutDown\";\n\t}\n\n\t_createClass(KitModal, [{\n\t\tkey: 'show',\n\t\tvalue: function show(e) {\n\t\t\tif (!this.modal.kitHasClass(\"kit_none\")) return;\n\t\t\tthis.modal.kitRemoveClass(\"kit_none\");\n\t\t\tthis.stage.kitAddClass(this.stageIn);\n\t\t\tthis.stage.focus();\n\t\t\tthis.modal.kitAddClass(\"kit_active\");\n\t\t\tif (this.lockScroll && isScroll()) lockScroll(this);\n\t\t\tif (this.onShow) this.onShow(e);\n\t\t}\n\t}, {\n\t\tkey: 'hide',\n\t\tvalue: function hide() {\n\t\t\tif (this.modal.kitHasClass(\"kit_none\")) return;\n\t\t\tthis.modal.kitRemoveClass(\"kit_active\");\n\t\t\tthis.stage.kitAddClass(this.stageOut);\n\t\t\tif (this.scrollIsActive) releaseScroll(this);\n\t\t\tif (this.onHide) this.onHide();\n\t\t}\n\t}, {\n\t\tkey: 'becomeFixed',\n\t\tvalue: function becomeFixed() {\n\t\t\tthis.modal.style.position = 'fixed';\n\t\t}\n\t}, {\n\t\tkey: 'becomeAbsolute',\n\t\tvalue: function becomeAbsolute() {\n\t\t\tthis.modal.style.position = 'absolute';\n\t\t\tthis.modal.parentElement.kitAddClass('kit_relative');\n\t\t}\n\t}, {\n\t\tkey: 'addTrigger',\n\t\tvalue: function addTrigger(input) {\n\t\t\tvar _this = this;\n\n\t\t\tvar set = function set(element) {\n\t\t\t\telement.modal = _this;\n\t\t\t\telement.addEventListener('click', function (e) {\n\t\t\t\t\tif (_this.preventDefault) preventDefault(e);\n\t\t\t\t\tif (_this.onTrigger) _this.onTrigger(e);\n\t\t\t\t\t_this.show(e);\n\t\t\t\t});\n\t\t\t\telement.addEventListener('mousedown', function (e) {\n\t\t\t\t\tif (e.button !== 1) return;\n\t\t\t\t\tif (_this.preventDefault) preventDefault(e);\n\t\t\t\t\tif (_this.onTrigger) _this.onTrigger(e);\n\t\t\t\t\t_this.show(e);\n\t\t\t\t});\n\t\t\t\telement.addEventListener('keydown', function (e) {\n\t\t\t\t\tif (e.keyCode !== 32 || e.keyCode !== 13) return;\n\t\t\t\t\tif (_this.preventDefault) preventDefault(e);\n\t\t\t\t\tif (_this.onTrigger) _this.onTrigger(e);\n\t\t\t\t\t_this.show(e);\n\t\t\t\t});\n\t\t\t};\n\t\t\tswitch (typeof input === 'undefined' ? 'undefined' : _typeof(input)) {\n\t\t\t\tcase 'object':\n\t\t\t\t\tset(input);\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'string':\n\t\t\t\t\tvar o = document.querySelectorAll(input);\n\t\t\t\t\tObject.keys(o).forEach(function (e) {\n\t\t\t\t\t\treturn set(o[e]);\n\t\t\t\t\t});\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\tconsole.error('[KitModal] addTrigger takes \".selector\" or an element object');\n\t\t\t}\n\t\t\treturn this;\n\t\t}\n\t}]);\n\n\treturn KitModal;\n}();\n\ndocument.kit.modal.createModal = function (id, params) {\n\tvar m = void 0;\n\tdocument.kit.modal[id] = new KitModal(id);\n\tm = document.kit.modal[id];\n\tif (params) Object.assign(m, params);\n\tm.modal.style.position = m.absolute ? m.becomeAbsolute() : m.becomeFixed();\n\tif (m.storeInstances) linkInstances(m);\n\tsetElementsForScrollPadding(m);\n\tm.stage.setAttribute('tabindex', 0);\n\tm.modal.setAttribute('tabindex', 0);\n\tm.modal.kitAddClass('kit_none');\n\tsetListeners(m);\n};\n\nfunction setElementsForScrollPadding(obj) {\n\tvar e = document.querySelectorAll(obj.fixed);\n\tobj.elementsForScrollPadding.push(doc);\n\tif (obj.fixed) Object.keys(e).forEach(function (i) {\n\t\treturn obj.elementsForScrollPadding.push(e[i]);\n\t});\n}\n\nfunction linkInstances(obj) {\n\tvar id = obj.id,\n\t    el = void 0;\n\tif (typeof obj.storeInstances === 'string') {\n\t\tel = document.querySelectorAll(obj.storeInstances);\n\t} else if (obj.storeInstances) {\n\t\tel = document.querySelectorAll('[data-modal=' + id + '] *');\n\t} else {\n\t\tel = false;\n\t}\n\tif (el) Object.keys(el).forEach(function (i) {\n\t\treturn el[i].modal = document.kit.modal[id];\n\t});\n}\n\nfunction setListeners(obj) {\n\tvar triggers = document.querySelectorAll('[data-trigger=' + obj.id + ']'),\n\t    timer = void 0;\n\tsetKeyDownListener(obj.stage, obj);\n\tsetAnimationEndListener(obj.stage, obj);\n\tObject.keys(triggers).forEach(function (e) {\n\t\treturn obj.addTrigger(triggers[e], obj);\n\t});\n\t//\n\t// obj.modal.addEventListener('click', function(e) {\n\t// \tif(e.target === this && !obj.required) obj.hide();\n\t// });\n\n\tobj.stage.addEventListener('blur', function () {\n\t\ttimer = setTimeout(function () {\n\t\t\tif (!obj.required) obj.hide();\n\t\t}, 0);\n\t}, true);\n\tobj.stage.addEventListener('focus', function () {\n\t\treturn clearTimeout(timer);\n\t}, true);\n}\n\nfunction setKeyDownListener(element, obj) {\n\telement.addEventListener('keydown', function (e) {\n\t\tvar k = e.keyCode;\n\t\tif (k === 27 && !obj.required) obj.hide();\n\t});\n}\n\nfunction setAnimationEndListener(element, obj) {\n\telement.addEventListener('animationend', function () {\n\t\telement.kitRemoveClass(obj.stageIn);\n\t\tif (element.kitHasClass(obj.stageOut)) {\n\t\t\telement.kitRemoveClass(obj.stageOut);\n\t\t\tobj.modal.kitAddClass(\"kit_none\");\n\t\t}\n\t});\n}\n\nfunction lockScroll(obj) {\n\t//important to save width in variable to determinate scroll, before applying 'scroll_hide' to document;\n\tvar width = doc.offsetWidth;\n\t// document.addEventListener('mousewheel', preventDefault);\n\t// document.addEventListener('DOMMouseScroll', preventDefault);\n\tdocument.addEventListener('touchmove', preventDefault, { passive: false });\n\tdocument.addEventListener('gesturechange', preventDefault);\n\tdocument.addEventListener('keydown', preventKeys.bind(obj));\n\tdoc.kitAddClass('kit_document-live');\n\tobj.modal.kitAddClass('kit_modal-live');\n\tobj.elementsForScrollPadding.forEach(function (t) {\n\t\treturn t.style.paddingRight = obj.modal.offsetWidth - width + 'px';\n\t});\n\tobj.scrollIsActive = true;\n}\n\nfunction releaseScroll(obj) {\n\t// document.removeEventListener('mousewheel', preventDefault);\n\t// document.removeEventListener('DOMMouseScroll', preventDefault);\n\tdocument.removeEventListener('touchmove', preventDefault, { passive: false });\n\tdocument.removeEventListener('gesturechange', preventDefault);\n\tdocument.removeEventListener('keydown', preventKeys.bind(obj));\n\tobj.elementsForScrollPadding.forEach(function (t) {\n\t\treturn t.style.paddingRight = '';\n\t});\n\tdoc.kitRemoveClass('kit_document-live');\n\tobj.modal.kitRemoveClass('kit_modal-live');\n\tobj.scrollIsActive = false;\n}\n\nfunction preventDefault(e) {\n\te.preventDefault ? e.preventDefault() : e.returnValue = false;\n}\n\nfunction isScroll() {\n\treturn parseInt(window.getComputedStyle(doc, null).height) >= window.innerHeight;\n}\nfunction preventKeys(e) {\n\tif (this.lockKeys.indexOf(e.keyCode) >= 0) {\n\t\tpreventDefault(e);\n\t}\n}\n\nElement.prototype.kitAddClass = function (classN) {\n\tif (!this.kitHasClass(classN)) this.className += \" \" + classN;\n\treturn this;\n};\n\nElement.prototype.kitRemoveClass = function (classN) {\n\tthis.kitHasClass(classN) ? this.className = this.className.replace(new RegExp('[\\\\s]{0,1}\\\\b' + classN + '\\\\b', \"g\"), \"\") : false;\n\treturn this;\n};\n\nElement.prototype.kitHasClass = function (classN) {\n\treturn this.className.indexOf(classN) >= 0;\n};\n\n//# sourceURL=webpack:///./dev/kit.modal.js?")}})},65:function(t,e,n){},68:function(t,e,n){t.exports={"starBtn-container":"_1GzSr",starBtn:"_2cR01 t2d_m _2xyYr","move-space-bg":"_3xVNY"}},69:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(0)),a=i(n(68));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){return o.default.createElement("div",{className:a.default["starBtn-container"]},o.default.createElement("button",{"data-trigger":t["data-trigger"],className:a.default.starBtn,onClick:t.onClick,onKeyDown:t.onKeyDown,onBlur:t.onBlur,onFocus:t.onFocus},t.children))}},71:function(t,e,n){}}]);