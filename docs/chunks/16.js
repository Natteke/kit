(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=r(n(0));n(81),n(80);var a=r(n(72)),u=r(n(6));r(n(66));function r(e){return e&&e.__esModule?e:{default:e}}n(65);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onScrollLock=function(){n.setState({buttonText:"Release Scroll"})},n.onScrollRelease=function(){n.setState({buttonText:"Lock Scroll"})},n.componentDidMount=function(){kit.locker.createLocker({onLock:n.onScrollLock,onRelease:n.onScrollRelease})},n.handleClick=function(){var e=kit.locker;e.instance.active?e.unlock():e.lock()},n.state={buttonText:"Lock Scroll"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),i(t,[{key:"render",value:function(){var e=this.props.bootstrap;return o.default.createElement("div",null,o.default.createElement("section",{className:u.default.commonSection},o.default.createElement("div",{className:e.row},o.default.createElement("div",{className:e.col},o.default.createElement("h1",{className:u.default.h1},"Locker Basic"),o.default.createElement("p",null,"Let's prevent your window from scrolling.",o.default.createElement("br",null)," Click the button."),o.default.createElement(a.default,{onClick:this.handleClick},this.state.buttonText),o.default.createElement("p",null,o.default.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur iure iusto laudantium maiores natus nesciunt nostrum nulla placeat quae quam quasi, quidem quo reiciendis. Amet at nam officia praesentium sed!"),o.default.createElement("span",null,"At doloremque error explicabo incidunt minima ratione totam voluptas. Alias, aut culpa debitis ea explicabo, hic impedit iure magnam minus mollitia nesciunt quod reiciendis temporibus ullam vitae! Animi atque, dolor?"),o.default.createElement("span",null,"Asperiores consectetur culpa delectus deleniti dolor dolore dolorem, ea eius eligendi harum iusto laudantium magnam maiores pariatur possimus repellendus voluptates! Corporis eos, fuga iure laudantium molestiae placeat sit velit veniam?"),o.default.createElement("span",null,"A aut commodi debitis doloremque eaque impedit, ipsa ipsum libero nihil officia quasi reiciendis sapiente, sequi, similique soluta totam voluptatibus! Debitis dolorum, ea eos ipsa modi nihil temporibus unde voluptate."),o.default.createElement("span",null,"Ad consequuntur dolorum, eligendi facilis fuga impedit in itaque molestias neque odit omnis quaerat sequi soluta. Expedita laborum unde vel veritatis voluptates. Distinctio doloribus laudantium quaerat similique totam vero voluptatibus.")),o.default.createElement(a.default,{onClick:this.handleClick},this.state.buttonText),o.default.createElement("p",null,o.default.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci architecto at consequatur corporis cupiditate debitis, distinctio dolorum excepturi explicabo, facere inventore molestiae mollitia nisi praesentium quam, quidem suscipit totam!"),o.default.createElement("span",null,"Accusantium aspernatur aut commodi corporis ex excepturi exercitationem illum laborum maiores molestias nesciunt nulla officiis porro possimus quam quis repellendus ut velit veritatis, voluptatem. Ad ea iusto obcaecati omnis similique."),o.default.createElement("span",null,"Ab assumenda fuga id iusto laborum laudantium nam natus odio qui, quis quo reprehenderit soluta ut voluptate voluptatum! Adipisci alias aperiam autem deserunt dicta fugit inventore neque provident sit temporibus!"),o.default.createElement("span",null,"Aliquam animi cumque deserunt dicta dolor earum esse est ex, in itaque officiis, porro quod ratione rerum, sapiente vero voluptatibus? A eveniet hic in libero omnis repellendus reprehenderit vel vero!"),o.default.createElement("span",null,"Aliquam, animi at culpa delectus deserunt dicta distinctio doloremque earum, ex expedita explicabo facilis hic iste, iure minima minus nam necessitatibus officia placeat porro praesentium quas quidem reprehenderit sunt voluptatum!")),o.default.createElement(a.default,{onClick:this.handleClick},this.state.buttonText)))))}}]),t}();t.default=l},71:function(e,t,n){e.exports={"starBtn-container":"_1GzSr",starBtn:"_2cR01 t2d_m _2xyYr","move-space-bg":"_3xVNY"}},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(0)),o=a(n(71));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return i.default.createElement("div",{className:o.default["starBtn-container"]},i.default.createElement("button",{"data-trigger":e["data-trigger"],className:o.default.starBtn,onClick:e.onClick,onKeyDown:e.onKeyDown,onBlur:e.onBlur,onFocus:e.onFocus},e.children))}},80:function(e,t,n){},81:function(e,t,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==(void 0===e?"undefined":i(e))&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/Users/andrejponomarenko/Projects/kit.locker/prod/",n(n.s=0)}([function(e,t,n){n(1),document.kit||(document.kit={}),document.kit.locker||(document.kit.locker={}),window.kit=document.kit;var i=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lock=function(){parseInt(window.getComputedStyle(document.documentElement,null).height)>=window.innerHeight&&function(e){var t=document.documentElement,n=t.offsetWidth;document.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("gesturechange",o),document.addEventListener("keydown",a.bind(e)),t.kitAddClass("kit-locker-document"),e.overlay.kitAddClass("kit-locker-overlay-scroll"),e.overlay.kitRemoveClass("kit-none");var i=t.offsetWidth-n+"px";t.style.paddingRight=i,Object.keys(e.fixed).forEach(function(t){e.fixed[t].style.paddingRight=i}),e.active=!0,e.onLock&&e.onLock()}(n)},this.unlock=function(){n.active&&function(e){var t=document.documentElement;document.removeEventListener("touchmove",o,{passive:!1}),document.removeEventListener("gesturechange",o),document.removeEventListener("keydown",a.bind(e)),t.style.paddingRight="",Object.keys(e.fixed).forEach(function(t){return e.fixed[t].style.paddingRight=""}),t.kitRemoveClass("kit-locker-document"),e.overlay.kitRemoveClass("kit-locker-overlay-scroll"),e.overlay.kitAddClass("kit-none"),e.active=!1,e.onRelease&&e.onRelease()}(n)},this.id=t,this.lockKeys=[32,33,34,35,36,37,38,39,40],this.active=!1,this.onLock=!1,this.onRelease=!1};function o(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function a(e){this.lockKeys.indexOf(e.keyCode)>=0&&o(e)}document.kit.locker.createLocker=function(e){if(document.kit.locker.instance)return new Error("Kit Locker already exist");var t=e?Object.assign(new i("locker"),e):new i("locker");document.kit.locker.instance=t,t.overlay=function(e){return document.body.insertAdjacentHTML("afterbegin",'<div class="'+e+' kit-none"></div>'),document.querySelector("."+e)}("kit-locker-overlay"),t.fixed=document.querySelectorAll(".kit-set-fixed"),document.kit.locker.lock=t.lock,document.kit.locker.unlock=t.unlock},Element.prototype.kitAddClass=function(e){return this.kitHasClass(e)||(this.className+=" "+e),this},Element.prototype.kitRemoveClass=function(e){return this.kitHasClass(e)&&(this.className=this.className.replace(new RegExp("[\\s]{0,1}\\b"+e+"\\b","g"),"")),this},Element.prototype.kitHasClass=function(e){return this.className.indexOf(e)>=0}},function(e,t,n){}])}}]);