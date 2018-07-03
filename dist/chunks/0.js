(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./dev/modal/demos/items/Basic.js":
/*!****************************************!*\
  !*** ./dev/modal/demos/items/Basic.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ../../../../plugins/modal/kit.modal.js */ \"./plugins/modal/kit.modal.js\");\n\n__webpack_require__(/*! ../../../../plugins/modal/kit.modal.css */ \"./plugins/modal/kit.modal.css\");\n\n__webpack_require__(/*! ../../../../plugins/modal/templates/basic/kit.modal.basic.css */ \"./plugins/modal/templates/basic/kit.modal.basic.css\");\n\nvar _StarButton = __webpack_require__(/*! ../../../components/btn/StarButton.js */ \"./dev/components/btn/StarButton.js\");\n\nvar _StarButton2 = _interopRequireDefault(_StarButton);\n\nvar _common = __webpack_require__(/*! ../../../styles/common.css */ \"./dev/styles/common.css\");\n\nvar _common2 = _interopRequireDefault(_common);\n\nvar _codeHighlight = __webpack_require__(/*! code-highlight */ \"./node_modules/code-highlight/lib/index.js\");\n\nvar _codeHighlight2 = _interopRequireDefault(_codeHighlight);\n\n__webpack_require__(/*! highlight.js/styles/arduino-ligh-custom.css */ \"./node_modules/highlight.js/styles/arduino-ligh-custom.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Basic = function (_React$Component) {\n\t_inherits(Basic, _React$Component);\n\n\tfunction Basic(props) {\n\t\t_classCallCheck(this, Basic);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).call(this, props));\n\n\t\t_this.handleClickModal = function (e) {\n\t\t\te.persist();\n\t\t\te.target.modal.hide();\n\t\t};\n\n\t\treturn _this;\n\t}\n\n\t_createClass(Basic, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tdocument.kit.modal.createModal('Basic', {\n\t\t\t\tfixed: 'header'\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar b = this.props.bootstrap;\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'section',\n\t\t\t\t\t{ className: _common2.default.commonSection },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: b.row },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: b.col },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'h1',\n\t\t\t\t\t\t\t\t{ className: _common2.default.h1 },\n\t\t\t\t\t\t\t\t'Modal Basic'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Imagine that user filled your online form and send it.',\n\t\t\t\t\t\t\t\t_react2.default.createElement('br', null),\n\t\t\t\t\t\t\t\t'So, how to notify him about it?'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'Well, the answer is right in front of us.'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t_StarButton2.default,\n\t\t\t\t\t\t\t\t{ 'data-trigger': 'Basic' },\n\t\t\t\t\t\t\t\t'Front of us'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'h2',\n\t\t\t\t\t\t\t\t{ className: _common2.default.h2 },\n\t\t\t\t\t\t\t\t'Pretty simple right?'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t'This (as you may thought) is the most common way to use Kit\\xA0Modal. Everything is default. Only some styles for text and button inside.'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'h2',\n\t\t\t\t\t\t\t\t{ className: _common2.default.h2 },\n\t\t\t\t\t\t\t\t'So here\\'s the setup'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'h3',\n\t\t\t\t\t\t\t\t{ className: _common2.default.h3 },\n\t\t\t\t\t\t\t\t'HTML Modal'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: _common2.default.codeContainer },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t_codeHighlight2.default,\n\t\t\t\t\t\t\t\t\t{ language: 'html' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.codeLine },\n\t\t\t\t\t\t\t\t\t\t'<div data-modal=\"Basic\" class=\"kit_modal basic\">'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.code_levels },\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.codeLine },\n\t\t\t\t\t\t\t\t\t\t\t'<div class=\"modal_stage basic-stage\">'\n\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.code_levels },\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.codeLine },\n\t\t\t\t\t\t\t\t\t\t\t\t'<p class=\"basic-heading\">This is a basic layout.</p>'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.codeLine },\n\t\t\t\t\t\t\t\t\t\t\t\t'<p class=\"basic-text\">But it can be easily modified to your requirements.</p>'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.codeLine },\n\t\t\t\t\t\t\t\t\t\t\t\t'<div className=\"basic-container\">'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.code_levels },\n\t\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.codeLine },\n\t\t\t\t\t\t\t\t\t\t\t\t\t'<button onClick=\"this.modal.hide()\" class=\"basic-button\" type=\"button\">CLOSE</button>'\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.codeLine },\n\t\t\t\t\t\t\t\t\t\t\t\t'</div>'\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.codeLine },\n\t\t\t\t\t\t\t\t\t\t\t'</div>'\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.codeLine },\n\t\t\t\t\t\t\t\t\t\t'</div>'\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'h3',\n\t\t\t\t\t\t\t\t{ className: _common2.default.h3 },\n\t\t\t\t\t\t\t\t'HTML Trigger'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: _common2.default.codeContainer },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t_codeHighlight2.default,\n\t\t\t\t\t\t\t\t\t{ language: 'html' },\n\t\t\t\t\t\t\t\t\t'<button data-trigger=\\'Basic\\'>Front of us</button>'\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'h3',\n\t\t\t\t\t\t\t\t{ className: _common2.default.h3 },\n\t\t\t\t\t\t\t\t'JS'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: _common2.default.codeContainer },\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t_codeHighlight2.default,\n\t\t\t\t\t\t\t\t\t{ language: 'javascript' },\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: _common2.default.codeLine },\n\t\t\t\t\t\t\t\t\t\t'document.kit.modal.createModal(\\'Basic\\');'\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ 'data-modal': 'Basic', className: 'kit_modal basic' },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'modal_stage basic-stage' },\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t{ className: 'basic-heading' },\n\t\t\t\t\t\t\t'This is a basic layout.'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'p',\n\t\t\t\t\t\t\t{ className: 'basic-text' },\n\t\t\t\t\t\t\t'But it\\xA0can be\\xA0easily modified to\\xA0your requirements.'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'basic-container' },\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'button',\n\t\t\t\t\t\t\t\t{ onClick: this.handleClickModal, className: 'basic-button', type: 'button' },\n\t\t\t\t\t\t\t\t'CLOSE'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Basic;\n}(_react2.default.Component);\n\nexports.default = Basic;\n\n//# sourceURL=webpack:///./dev/modal/demos/items/Basic.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./plugins/modal/templates/basic/kit.modal.basic.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./plugins/modal/templates/basic/kit.modal.basic.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".kit_modal * {\\n    font-family: sans-serif;\\n}\\n.kit_modal .basic-stage {\\n    background-color: #ffffff;\\n    padding: 20px 24px;\\n    width: 90%;\\n    border-radius: 7px;\\n    max-width: 500px;\\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\\n    line-height: 1;\\n}\\n.kit_modal .basic-heading {\\n    font-size: 28px;\\n    margin: 0 0 20px 0;\\n    padding: 0 8px;\\n    font-weight: 700;\\n    color: rgba(0,0,0, .87);\\n    user-select: none;\\n}\\n\\n.kit_modal .basic-text {\\n    margin-bottom: 20px;\\n    font-size: 20px;\\n    padding: 0 8px;\\n    color: rgba(0,0,0, .54);\\n    user-select: none;\\n}\\n\\n.basic-container {\\n    display: flex;\\n    justify-content: flex-end;\\n    flex-wrap: wrap;\\n}\\n\\n.kit_modal .basic-button:not(:first-child) {\\n    margin-left: 20px;\\n}\\n\\n.kit_modal .basic-button {\\n    display: block;\\n    border: 0;\\n    text-align: center;\\n    padding: 8px;\\n    cursor: pointer;\\n    background-color: transparent;\\n    font-size: 18px;\\n    color: rgb(33,150,243);\\n    font-weight: 700;\\n    border-radius: 2px;\\n    -webkit-touch-callout: none;\\n    -webkit-user-select: none;\\n    -khtml-user-select: none;\\n    -moz-user-select: none;\\n    -ms-user-select: none;\\n    user-select: none;\\n    text-decoration: none;\\n}\\n\\n.kit_modal .basic-button:hover,\\n.kit_modal .basic-button:focus {\\n    color: rgb(27,130,223);\\n}\\n\\n.kit_modal button::-moz-focus-inner {\\n    border: 0;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./plugins/modal/templates/basic/kit.modal.basic.css?./node_modules/css-loader");

/***/ }),

/***/ "./plugins/modal/templates/basic/kit.modal.basic.css":
/*!***********************************************************!*\
  !*** ./plugins/modal/templates/basic/kit.modal.basic.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!./kit.modal.basic.css */ \"./node_modules/css-loader/index.js!./plugins/modal/templates/basic/kit.modal.basic.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./plugins/modal/templates/basic/kit.modal.basic.css?");

/***/ })

}]);