(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./dev/modal/docs/items/Installation.js":
/*!**********************************************!*\
  !*** ./dev/modal/docs/items/Installation.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.dir('INSTA');\n\nvar News = function News() {\n\treturn _react2.default.createElement(\n\t\t'section',\n\t\t{ id: 'Installation', className: 'info_section' },\n\t\t_react2.default.createElement(\n\t\t\t'h2',\n\t\t\tnull,\n\t\t\t'Installation'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'h3',\n\t\t\tnull,\n\t\t\t'Include CSS'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\t{ className: 'margin_v' },\n\t\t\t'First, include CSS file into your HTML head:'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'code_example' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t'<link '\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'code_attr' },\n\t\t\t\t\t'rel'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{\n\t\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t\t'='\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'code_inner' },\n\t\t\t\t\t'\"stylesheet\"'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{\n\t\t\t\t\t\tclassName: 'code_attr' },\n\t\t\t\t\t' href'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t'='\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{\n\t\t\t\t\t\tclassName: 'code_inner' },\n\t\t\t\t\t'\"ui/kit.modal.min.css\"'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t'>'\n\t\t\t\t)\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'section_disclamer' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'code',\n\t\t\t\t\tnull,\n\t\t\t\t\t'kit.modal.min.css'\n\t\t\t\t),\n\t\t\t\t' file is required and should be included before any *.js files.'\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'h3',\n\t\t\tnull,\n\t\t\t'Include JS'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\t{ className: 'margin_v' },\n\t\t\t'Next, include js file just before closing ',\n\t\t\t_react2.default.createElement(\n\t\t\t\t'span',\n\t\t\t\t{\n\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t'</body>'\n\t\t\t),\n\t\t\t' tag'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'code_example' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t'<script'\n\t\t\t\t\t),\n\t\t\t\t\t' ',\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'code_attr' },\n\t\t\t\t\t\t'src'\n\t\t\t\t\t),\n\t\t\t\t\t'=',\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tclassName: 'code_inner' },\n\t\t\t\t\t\t'\"ui/kit.modal.min.js\"'\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t\t\t'></script>'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'h4',\n\t\t\tnull,\n\t\t\t'Set HTML initiator'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'You can use any element as a initiator to summon the window.'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'It also could be an external link ',\n\t\t\t_react2.default.createElement(\n\t\t\t\t'a',\n\t\t\t\t{ href: '/ui.kit/docs/kit_modal/Demos/external.htm' },\n\t\t\t\t'(see demo)'\n\t\t\t),\n\t\t\t', and you can just show/hide it by yourself, see methods.'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'code_example' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'ul',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t'<button'\n\t\t\t\t\t),\n\t\t\t\t\t' ',\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'code_attr' },\n\t\t\t\t\t\t'class='\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tclassName: 'code_inner code_highlight' },\n\t\t\t\t\t\t'\"show_modal\"'\n\t\t\t\t\t),\n\t\t\t\t\t' ',\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tclassName: 'code_attr' },\n\t\t\t\t\t\t'type='\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'code_inner' },\n\t\t\t\t\t\t'\"button\"'\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t\t\t'>'\n\t\t\t\t\t),\n\t\t\t\t\t'SEND MY FORM',\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t'</button>'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'h3',\n\t\t\tnull,\n\t\t\t'Set HTML modal'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'Your markup should contain certain css classes, to let javascript do it\\'s work.'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'For beginners, i prepeared a little markup library, however if you feel yourself confident enough in HTML and CSS, you can create your own markup, using examples from library as a template.'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\t{ className: 'margin_v' },\n\t\t\t'Example:'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'code_example' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'ul',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t'<div'\n\t\t\t\t\t),\n\t\t\t\t\t' ',\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'code_attr' },\n\t\t\t\t\t\t'class='\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tclassName: 'code_inner' },\n\t\t\t\t\t\t'\"kit_modal ',\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tclassName: 'code_highlight' },\n\t\t\t\t\t\t\t'basic_modal'\n\t\t\t\t\t\t),\n\t\t\t\t\t\t'\"'\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t'>'\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'ul',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t'<div'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t' ',\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t{ className: 'code_attr' },\n\t\t\t\t\t\t\t\t'class='\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tclassName: 'code_inner' },\n\t\t\t\t\t\t\t\t'\"modal_stage\"'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t'>'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'ul',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'<div'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t' ',\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_attr' },\n\t\t\t\t\t\t\t\t\t\t'class='\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_inner' },\n\t\t\t\t\t\t\t\t\t\t'\"modal_header\"'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'>'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'ul',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t\t\t'<p'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t\t\t'>'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t'Your form was sent',\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t\t\t'</p>'\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'</div'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'>'\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'<div'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t' ',\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_attr' },\n\t\t\t\t\t\t\t\t\t\t'class='\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_inner' },\n\t\t\t\t\t\t\t\t\t\t'\"modal_body\"'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'>'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'ul',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t\t\t'<p'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t\t\t'>'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t'We will contact you as soon as possible.',\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t\t\t'</p>'\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'</div'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'>'\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'<div'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t' ',\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_attr' },\n\t\t\t\t\t\t\t\t\t\t'class='\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_inner' },\n\t\t\t\t\t\t\t\t\t\t'\"modal_buttons\"'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'>'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'ul',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t\t\t'<button'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t' ',\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_attr' },\n\t\t\t\t\t\t\t\t\t\t\t\t'class='\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_inner' },\n\t\t\t\t\t\t\t\t\t\t\t\t'\"modal_button\"'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t' ',\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_attr' },\n\t\t\t\t\t\t\t\t\t\t\t\t'type='\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_inner' },\n\t\t\t\t\t\t\t\t\t\t\t\t'\"button\"'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t\t\t'>'\n\t\t\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t\t\t'CLOSE',\n\t\t\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t\t\t'</button>'\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'</div'\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t\t\t'>'\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t'</div'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t\t\t'>'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t'</div'\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ className: 'code_tag' },\n\t\t\t\t\t\t'>'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'h3',\n\t\t\tnull,\n\t\t\t'Call the plugin'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'Almost done! Now we just need to initialize our plugin.'\n\t\t)\n\t);\n};\n\nexports.default = News;\n\n//# sourceURL=webpack:///./dev/modal/docs/items/Installation.js?");

/***/ })

}]);