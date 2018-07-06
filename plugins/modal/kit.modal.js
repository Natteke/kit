/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/andrejponomarenko/Projects/kit.modal/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/kit.modal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/kit.modal.css":
/*!***************************!*\
  !*** ./dev/kit.modal.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./dev/kit.modal.css?");

/***/ }),

/***/ "./dev/kit.modal.js":
/*!**************************!*\
  !*** ./dev/kit.modal.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! ./kit.modal.css */ \"./dev/kit.modal.css\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * UI Kit Modal v1.1.0\n * Copyright 2017-2019 Andrey Ponomarenko\n * Licensed under  ()\n */\n\n// ======================= MODEL ============================\n\nif (!document.kit) document.kit = {};\nif (!document.kit.modal) document.kit.modal = {};\nvar doc = document.documentElement;\nwindow.kit = document.kit;\n\n// == Инициализация ==\n//data-modal - айди\n//data-trigger - id привязка к модалке\n\n//== Опции ==\n// position (string) - fixed/Absolute (На весь экран / в блоке)\n// required (true/false) - закрыть модалку можно только по методом hide\n// preventDefault (true/false) - будет отменять дефолтное действие по нажатию на триггер (если это напр ссылка)\n// fixed ('.string') - внести в список, если элемент в позиции fixed и прижат к правому краю\n// storeInstances(true/false/.string) - В каких элементах хранить ссылку на модалку (по дефолту тру, хранит во всех чилдренах модалки)\n\n// == Методы окна ==\n// show() - показать окно\n// hide() - скрыть окно\n// addTrigger(element / '.selector') - добавить триггер\n// becomeFixed() - делает окно фиксированным\n// becomeAbsolute() - делает окно абсолютным\n\n// == Глобальные методы ==\n// createModal - создает модальное окно\n\n// == Коллбеки ==\n//onShow(event)\n// this - модальное окно\n// event - event\n\n//onHide()\n// this - модальное окно\n\n//onTrigger(event)\n// this - модальное окно\n// event - event\n\n// == Полезные параметры ==\n// this.id - идентификатор модального окна\n// this.modal - элемент модалка\n// this.stage - внутреннее окно\n//\n\n\nvar KitModal = function () {\n\tfunction KitModal(id) {\n\t\t_classCallCheck(this, KitModal);\n\n\t\tthis.id = id;\n\t\tthis.modal = document.querySelector('[data-modal=' + id + ']');\n\t\tthis.stage = document.querySelector('[data-modal=' + id + '] .modal_stage');\n\t\tthis.scrollIsActive = false;\n\t\tthis.lockKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];\n\t\tthis.elementsForScrollPadding = [];\n\n\t\tthis.required = false;\n\t\tthis.preventDefault = false;\n\t\tthis.lockScroll = true;\n\t\tthis.absolute = false;\n\t\tthis.fixed = false;\n\t\tthis.storeInstances = true;\n\n\t\t//Callbacks\n\t\tthis.onShow = false;\n\t\tthis.onHide = false;\n\t\tthis.onTrigger = false;\n\n\t\t//Animations\n\t\tthis.stageIn = \"fadeInUp\";\n\t\tthis.stageOut = \"fadeOutDown\";\n\t}\n\n\t_createClass(KitModal, [{\n\t\tkey: 'show',\n\t\tvalue: function show(e) {\n\t\t\tif (!this.modal.kitHasClass(\"kit_none\")) return;\n\t\t\tthis.modal.kitRemoveClass(\"kit_none\");\n\t\t\tthis.stage.kitAddClass(this.stageIn);\n\t\t\tthis.stage.focus();\n\t\t\tthis.modal.kitAddClass(\"kit_active\");\n\t\t\tif (this.lockScroll && isScroll()) lockScroll(this);\n\t\t\tif (this.onShow) this.onShow(e);\n\t\t}\n\t}, {\n\t\tkey: 'hide',\n\t\tvalue: function hide() {\n\t\t\tif (this.modal.kitHasClass(\"kit_none\")) return;\n\t\t\tthis.modal.kitRemoveClass(\"kit_active\");\n\t\t\tthis.stage.kitAddClass(this.stageOut);\n\t\t\tif (this.scrollIsActive) releaseScroll(this);\n\t\t\tif (this.onHide) this.onHide();\n\t\t}\n\t}, {\n\t\tkey: 'becomeFixed',\n\t\tvalue: function becomeFixed() {\n\t\t\tthis.modal.style.position = 'fixed';\n\t\t}\n\t}, {\n\t\tkey: 'becomeAbsolute',\n\t\tvalue: function becomeAbsolute() {\n\t\t\tthis.modal.style.position = 'absolute';\n\t\t\tthis.modal.parentElement.kitAddClass('kit_relative');\n\t\t}\n\t}, {\n\t\tkey: 'addTrigger',\n\t\tvalue: function addTrigger(input) {\n\t\t\tvar _this = this;\n\n\t\t\tvar set = function set(element) {\n\t\t\t\telement.modal = _this;\n\t\t\t\telement.addEventListener('click', function (e) {\n\t\t\t\t\tif (_this.preventDefault) preventDefault(e);\n\t\t\t\t\tif (_this.onTrigger) _this.onTrigger(e);\n\t\t\t\t\t_this.show(e);\n\t\t\t\t});\n\t\t\t\telement.addEventListener('mousedown', function (e) {\n\t\t\t\t\tif (e.button !== 1) return;\n\t\t\t\t\tif (_this.preventDefault) preventDefault(e);\n\t\t\t\t\tif (_this.onTrigger) _this.onTrigger(e);\n\t\t\t\t\t_this.show(e);\n\t\t\t\t});\n\t\t\t\telement.addEventListener('keydown', function (e) {\n\t\t\t\t\tif (e.keyCode !== 32 || e.keyCode !== 13) return;\n\t\t\t\t\tif (_this.preventDefault) preventDefault(e);\n\t\t\t\t\tif (_this.onTrigger) _this.onTrigger(e);\n\t\t\t\t\t_this.show(e);\n\t\t\t\t});\n\t\t\t};\n\t\t\tswitch (typeof input === 'undefined' ? 'undefined' : _typeof(input)) {\n\t\t\t\tcase 'object':\n\t\t\t\t\tset(input);\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'string':\n\t\t\t\t\tvar o = document.querySelectorAll(input);\n\t\t\t\t\tObject.keys(o).forEach(function (e) {\n\t\t\t\t\t\treturn set(o[e]);\n\t\t\t\t\t});\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\tconsole.error('[KitModal] addTrigger takes \".selector\" or an element object');\n\t\t\t}\n\t\t\treturn this;\n\t\t}\n\t}]);\n\n\treturn KitModal;\n}();\n\ndocument.kit.modal.createModal = function (id, params) {\n\tvar m = void 0;\n\tdocument.kit.modal[id] = new KitModal(id);\n\tm = document.kit.modal[id];\n\tif (params) Object.assign(m, params);\n\tm.modal.style.position = m.absolute ? m.becomeAbsolute() : m.becomeFixed();\n\tif (m.storeInstances) linkInstances(m);\n\tsetElementsForScrollPadding(m);\n\tm.stage.setAttribute('tabindex', 0);\n\tm.modal.setAttribute('tabindex', 0);\n\tm.modal.kitAddClass('kit_none');\n\tsetListeners(m);\n};\n\nfunction setElementsForScrollPadding(obj) {\n\tvar e = document.querySelectorAll(obj.fixed);\n\tobj.elementsForScrollPadding.push(doc);\n\tif (obj.fixed) Object.keys(e).forEach(function (i) {\n\t\treturn obj.elementsForScrollPadding.push(e[i]);\n\t});\n}\n\nfunction linkInstances(obj) {\n\tvar id = obj.id,\n\t    el = void 0;\n\tif (typeof obj.storeInstances === 'string') {\n\t\tel = document.querySelectorAll(obj.storeInstances);\n\t} else if (obj.storeInstances) {\n\t\tel = document.querySelectorAll('[data-modal=' + id + '] *');\n\t} else {\n\t\tel = false;\n\t}\n\tif (el) Object.keys(el).forEach(function (i) {\n\t\treturn el[i].modal = document.kit.modal[id];\n\t});\n}\n\nfunction setListeners(obj) {\n\tvar triggers = document.querySelectorAll('[data-trigger=' + obj.id + ']'),\n\t    timer = void 0;\n\tsetKeyDownListener(obj.stage, obj);\n\tsetAnimationEndListener(obj.stage, obj);\n\tObject.keys(triggers).forEach(function (e) {\n\t\treturn obj.addTrigger(triggers[e], obj);\n\t});\n\t//\n\t// obj.modal.addEventListener('click', function(e) {\n\t// \tif(e.target === this && !obj.required) obj.hide();\n\t// });\n\n\tobj.stage.addEventListener('blur', function () {\n\t\ttimer = setTimeout(function () {\n\t\t\tif (!obj.required) obj.hide();\n\t\t}, 0);\n\t}, true);\n\tobj.stage.addEventListener('focus', function () {\n\t\treturn clearTimeout(timer);\n\t}, true);\n}\n\nfunction setKeyDownListener(element, obj) {\n\telement.addEventListener('keydown', function (e) {\n\t\tvar k = e.keyCode;\n\t\tif (k === 27 && !obj.required) obj.hide();\n\t});\n}\n\nfunction setAnimationEndListener(element, obj) {\n\telement.addEventListener('animationend', function () {\n\t\telement.kitRemoveClass(obj.stageIn);\n\t\tif (element.kitHasClass(obj.stageOut)) {\n\t\t\telement.kitRemoveClass(obj.stageOut);\n\t\t\tobj.modal.kitAddClass(\"kit_none\");\n\t\t}\n\t});\n}\n\nfunction lockScroll(obj) {\n\t//important to save width in variable to determinate scroll, before applying 'scroll_hide' to document;\n\tvar width = doc.offsetWidth;\n\t// document.addEventListener('mousewheel', preventDefault);\n\t// document.addEventListener('DOMMouseScroll', preventDefault);\n\tdocument.addEventListener('touchmove', preventDefault, { passive: false });\n\tdocument.addEventListener('gesturechange', preventDefault);\n\tdocument.addEventListener('keydown', preventKeys.bind(obj));\n\tdoc.kitAddClass('kit_document-live');\n\tobj.modal.kitAddClass('kit_modal-live');\n\tobj.elementsForScrollPadding.forEach(function (t) {\n\t\treturn t.style.paddingRight = obj.modal.offsetWidth - width + 'px';\n\t});\n\tobj.scrollIsActive = true;\n}\n\nfunction releaseScroll(obj) {\n\t// document.removeEventListener('mousewheel', preventDefault);\n\t// document.removeEventListener('DOMMouseScroll', preventDefault);\n\tdocument.removeEventListener('touchmove', preventDefault, { passive: false });\n\tdocument.removeEventListener('gesturechange', preventDefault);\n\tdocument.removeEventListener('keydown', preventKeys.bind(obj));\n\tobj.elementsForScrollPadding.forEach(function (t) {\n\t\treturn t.style.paddingRight = '';\n\t});\n\tdoc.kitRemoveClass('kit_document-live');\n\tobj.modal.kitRemoveClass('kit_modal-live');\n\tobj.scrollIsActive = false;\n}\n\nfunction preventDefault(e) {\n\te.preventDefault ? e.preventDefault() : e.returnValue = false;\n}\n\nfunction isScroll() {\n\treturn parseInt(window.getComputedStyle(doc, null).height) >= window.innerHeight;\n}\nfunction preventKeys(e) {\n\tif (this.lockKeys.indexOf(e.keyCode) >= 0) {\n\t\tpreventDefault(e);\n\t}\n}\n\nElement.prototype.kitAddClass = function (classN) {\n\tif (!this.kitHasClass(classN)) this.className += \" \" + classN;\n\treturn this;\n};\n\nElement.prototype.kitRemoveClass = function (classN) {\n\tthis.kitHasClass(classN) ? this.className = this.className.replace(new RegExp('[\\\\s]{0,1}\\\\b' + classN + '\\\\b', \"g\"), \"\") : false;\n\treturn this;\n};\n\nElement.prototype.kitHasClass = function (classN) {\n\treturn this.className.indexOf(classN) >= 0;\n};\n\n//# sourceURL=webpack:///./dev/kit.modal.js?");

/***/ })

/******/ });