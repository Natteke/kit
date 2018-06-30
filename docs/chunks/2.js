(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{44:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=function(e){return e&&e.__esModule?e:{default:e}}(t(0));console.dir("INSTA");a.default=function(){return l.default.createElement("section",{id:"Installation",className:"info_section"},l.default.createElement("h2",null,"Installation"),l.default.createElement("h3",null,"Include CSS"),l.default.createElement("p",{className:"margin_v"},"First, include CSS file into your HTML head:"),l.default.createElement("div",{className:"code_example"},l.default.createElement("p",null,l.default.createElement("span",{className:"code_tag"},"<link "),l.default.createElement("span",{className:"code_attr"},"rel"),l.default.createElement("span",{className:"code_tag"},"="),l.default.createElement("span",{className:"code_inner"},'"stylesheet"'),l.default.createElement("span",{className:"code_attr"}," href"),l.default.createElement("span",{className:"code_tag"},"="),l.default.createElement("span",{className:"code_inner"},'"ui/kit.modal.min.css"'),l.default.createElement("span",{className:"code_tag"},">"))),l.default.createElement("div",{className:"section_disclamer"},l.default.createElement("p",null,l.default.createElement("code",null,"kit.modal.min.css")," file is required and should be included before any *.js files.")),l.default.createElement("h3",null,"Include JS"),l.default.createElement("p",{className:"margin_v"},"Next, include js file just before closing ",l.default.createElement("span",{className:"code_tag"},"</body>")," tag"),l.default.createElement("div",{className:"code_example"},l.default.createElement("p",null,l.default.createElement("span",null,l.default.createElement("span",{className:"code_tag"},"<script")," ",l.default.createElement("span",{className:"code_attr"},"src"),"=",l.default.createElement("span",{className:"code_inner"},'"ui/kit.modal.min.js"'),l.default.createElement("span",{className:"code_tag"},"><\/script>")))),l.default.createElement("h4",null,"Set HTML initiator"),l.default.createElement("p",null,"You can use any element as a initiator to summon the window."),l.default.createElement("p",null,"It also could be an external link ",l.default.createElement("a",{href:"/ui.kit/docs/kit_modal/Demos/external.htm"},"(see demo)"),", and you can just show/hide it by yourself, see methods."),l.default.createElement("div",{className:"code_example"},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("span",{className:"code_tag"},"<button")," ",l.default.createElement("span",{className:"code_attr"},"class="),l.default.createElement("span",{className:"code_inner code_highlight"},'"show_modal"')," ",l.default.createElement("span",{className:"code_attr"},"type="),l.default.createElement("span",{className:"code_inner"},'"button"'),l.default.createElement("span",{className:"code_tag"},">"),"SEND MY FORM",l.default.createElement("span",{className:"code_tag"},"</button>")))),l.default.createElement("h3",null,"Set HTML modal"),l.default.createElement("p",null,"Your markup should contain certain css classes, to let javascript do it's work."),l.default.createElement("p",null,"For beginners, i prepeared a little markup library, however if you feel yourself confident enough in HTML and CSS, you can create your own markup, using examples from library as a template."),l.default.createElement("p",{className:"margin_v"},"Example:"),l.default.createElement("div",{className:"code_example"},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("span",{className:"code_tag"},"<div")," ",l.default.createElement("span",{className:"code_attr"},"class="),l.default.createElement("span",{className:"code_inner"},'"kit_modal ',l.default.createElement("span",{className:"code_highlight"},"basic_modal"),'"'),l.default.createElement("span",{className:"code_tag"},">"),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("span",{className:"code_tag"},"<div")," ",l.default.createElement("span",{className:"code_attr"},"class="),l.default.createElement("span",{className:"code_inner"},'"modal_stage"'),l.default.createElement("span",{className:"code_tag"},">"),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("span",{className:"code_tag"},"<div")," ",l.default.createElement("span",{className:"code_attr"},"class="),l.default.createElement("span",{className:"code_inner"},'"modal_header"'),l.default.createElement("span",{className:"code_tag"},">"),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("span",{className:"code_tag"},"<p"),l.default.createElement("span",{className:"code_tag"},">"),"Your form was sent",l.default.createElement("span",{className:"code_tag"},"</p>"))),l.default.createElement("span",{className:"code_tag"},"</div"),l.default.createElement("span",{className:"code_tag"},">")),l.default.createElement("li",null,l.default.createElement("span",{className:"code_tag"},"<div")," ",l.default.createElement("span",{className:"code_attr"},"class="),l.default.createElement("span",{className:"code_inner"},'"modal_body"'),l.default.createElement("span",{className:"code_tag"},">"),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("span",{className:"code_tag"},"<p"),l.default.createElement("span",{className:"code_tag"},">"),"We will contact you as soon as possible.",l.default.createElement("span",{className:"code_tag"},"</p>"))),l.default.createElement("span",{className:"code_tag"},"</div"),l.default.createElement("span",{className:"code_tag"},">")),l.default.createElement("li",null,l.default.createElement("span",{className:"code_tag"},"<div")," ",l.default.createElement("span",{className:"code_attr"},"class="),l.default.createElement("span",{className:"code_inner"},'"modal_buttons"'),l.default.createElement("span",{className:"code_tag"},">"),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("span",{className:"code_tag"},"<button")," ",l.default.createElement("span",{className:"code_attr"},"class="),l.default.createElement("span",{className:"code_inner"},'"modal_button"')," ",l.default.createElement("span",{className:"code_attr"},"type="),l.default.createElement("span",{className:"code_inner"},'"button"'),l.default.createElement("span",{className:"code_tag"},">"),"CLOSE",l.default.createElement("span",{className:"code_tag"},"</button>"))),l.default.createElement("span",{className:"code_tag"},"</div"),l.default.createElement("span",{className:"code_tag"},">"))),l.default.createElement("span",{className:"code_tag"},"</div"),l.default.createElement("span",{className:"code_tag"},">"))),l.default.createElement("span",{className:"code_tag"},"</div"),l.default.createElement("span",{className:"code_tag"},">")))),l.default.createElement("h3",null,"Call the plugin"),l.default.createElement("p",null,"Almost done! Now we just need to initialize our plugin."))}}}]);