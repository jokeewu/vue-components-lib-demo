!function(n){function t(t){for(var o,s,r=t[0],c=t[1],l=t[2],h=0,u=[];h<r.length;h++)s=r[h],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&u.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);for(d&&d(t);u.length;)u.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],o=!0,r=1;r<e.length;r++){var c=e[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),n=s(s.s=e[0]))}return n}var o={},a={1:0},i=[];function s(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=n,s.c=o,s.d=function(n,t,e){s.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,t){if(1&t&&(n=s(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)s.d(e,o,function(t){return n[t]}.bind(null,o));return e},s.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(t,"a",t),t},s.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},s.p="/vue-components-lib-demo/";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;i.push([26,0]),e()}([,,,,,,,function(n,t,e){var o=e(1),a=e(28);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},s=(o(a,i),a.locals?a.locals:{});n.exports=s},function(n,t,e){var o=e(1),a=e(30);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},s=(o(a,i),a.locals?a.locals:{});n.exports=s},function(n,t,e){var o=e(1),a=e(32);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},s=(o(a,i),a.locals?a.locals:{});n.exports=s},function(n,t,e){var o=e(1),a=e(34);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},s=(o(a,i),a.locals?a.locals:{});n.exports=s},function(n,t,e){var o=e(1),a=e(36);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},s=(o(a,i),a.locals?a.locals:{});n.exports=s},function(n,t,e){var o=e(1),a=e(38);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},s=(o(a,i),a.locals?a.locals:{});n.exports=s},function(n,t,e){var o=e(1),a=e(40);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},s=(o(a,i),a.locals?a.locals:{});n.exports=s},function(n,t,e){var o=e(1),a=e(42);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1},s=(o(a,i),a.locals?a.locals:{});n.exports=s},,,,,,,,,,function(n,t){n.exports={name:"vue-components-lib-demo",build:{css:{preprocessor:"less"},site:{publicPath:"/vue-components-lib-demo/"}},site:{title:"vue-components-lib-demo",logo:"https://img.yzcdn.cn/vant/logo.png",nav:[{title:"开发指南",items:[{path:"home",title:"介绍"},{path:"quickstart",title:"快速上手"}]},{title:"基础组件",items:[{path:"demo-button",title:"DemoButton 按钮"},{path:"response-img",title:"ResponseImg"}]},{title:"Utils",items:[{path:"utils",title:"Utils"}]}]}}},,function(n,t,e){n.exports=e(66)},function(n,t,e){"use strict";var o=e(7);e.n(o).a},function(n,t,e){(t=e(2)(!1)).push([n.i,".van-doc-nav {\n  position: fixed;\n  top: 60px;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  min-width: 220px;\n  max-width: 220px;\n  padding: 24px 0 72px;\n  overflow-y: scroll;\n  background-color: #fff;\n  box-shadow: 0 8px 12px #ebedf0;\n}\n@media (min-width: 1680px) {\n.van-doc-nav {\n    left: 50%;\n    margin-left: -840px;\n}\n}\n.van-doc-nav::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background-color: transparent;\n}\n.van-doc-nav::-webkit-scrollbar-thumb {\n  background-color: transparent;\n  border-radius: 6px;\n}\n.van-doc-nav:hover::-webkit-scrollbar-thumb {\n  background-color: rgba(69, 90, 100, 0.2);\n}\n.van-doc-nav__group {\n  margin-bottom: 16px;\n}\n.van-doc-nav__title {\n  padding: 8px 0 8px 30px;\n  color: #455a64;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 28px;\n}\n.van-doc-nav__item a {\n  display: block;\n  margin: 0;\n  padding: 8px 0 8px 30px;\n  color: #455a64;\n  font-size: 14px;\n  line-height: 28px;\n  -webkit-transition: color 0.2s;\n  transition: color 0.2s;\n}\n.van-doc-nav__item a:hover,\n.van-doc-nav__item a.active {\n  color: #4fc08d;\n}\n.van-doc-nav__item a.active {\n  -webkit-font-smoothing: auto;\n}\n.van-doc-nav__item a span {\n  font-size: 13px;\n}\n@media (max-width: 1300px) {\n.van-doc-nav__item a {\n    font-size: 13px;\n}\n.van-doc-nav__item:active {\n    font-size: 14px;\n}\n}\n",""]),n.exports=t},function(n,t,e){"use strict";var o=e(8);e.n(o).a},function(n,t,e){(t=e(2)(!1)).push([n.i,".van-doc-search {\n  width: 200px;\n  height: 60px;\n  margin-left: 140px;\n  color: #fff;\n  font-size: 14px;\n  background-color: transparent;\n  border: none;\n}\n.van-doc-search:focus {\n  outline: none;\n}\n.van-doc-search::-webkit-input-placeholder {\n  color: #fff;\n  opacity: 0.7;\n}\n.van-doc-search::placeholder {\n  color: #fff;\n  opacity: 0.7;\n}\n.ds-dropdown-menu {\n  line-height: 1.8;\n}\n.algolia-autocomplete .algolia-docsearch-suggestion--highlight {\n  color: #1989fa;\n  background-color: transparent;\n}\n.algolia-autocomplete .algolia-docsearch-suggestion--title {\n  font-weight: 500;\n}\n.algolia-autocomplete .algolia-docsearch-suggestion--text .algolia-docsearch-suggestion--highlight {\n  box-shadow: inset 0 -1px 0 0 #1989fa;\n}\n.algolia-autocomplete .algolia-docsearch-suggestion--category-header {\n  border-bottom-color: #eee;\n}\n.algolia-autocomplete .ds-dropdown-menu [class^='ds-dataset-'] {\n  border: none;\n}\n.algolia-autocomplete .ds-dropdown-menu {\n  top: 80% !important;\n  box-shadow: 0 4px 12px #ebedf0;\n}\n.algolia-autocomplete .ds-dropdown-menu::before {\n  display: none;\n}\n",""]),n.exports=t},function(n,t,e){"use strict";var o=e(9);e.n(o).a},function(n,t,e){(t=e(2)(!1)).push([n.i,".van-doc-header {\n  width: 100%;\n  background-color: #001938;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.van-doc-header__top {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  height: 60px;\n  padding: 0 30px;\n  line-height: 60px;\n}\n.van-doc-header__top-nav {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  font-size: 0;\n  text-align: right;\n}\n.van-doc-header__top-nav > li {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.van-doc-header__top-nav-item {\n  margin-left: 20px;\n}\n.van-doc-header__top-nav-title {\n  display: block;\n  font-size: 15px;\n}\n.van-doc-header__cube {\n  position: relative;\n  display: block;\n  padding: 0 12px;\n  color: #fff;\n  font-size: 14px;\n  font-family: 'Helvetica Neue', Arial, sans-serif;\n  line-height: 24px;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  border-radius: 20px;\n  cursor: pointer;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n.van-doc-header__version {\n  padding-right: 20px;\n}\n.van-doc-header__version::after {\n  position: absolute;\n  top: 7px;\n  right: 7px;\n  width: 5px;\n  height: 5px;\n  color: rgba(255, 255, 255, 0.9);\n  border: 1px solid;\n  border-color: transparent transparent currentColor currentColor;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  content: '';\n}\n.van-doc-header__version-pop {\n  position: absolute;\n  top: 30px;\n  right: 0;\n  left: 0;\n  z-index: 99;\n  color: #333;\n  line-height: 36px;\n  text-align: left;\n  background-color: #fff;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px #ebedf0;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  -webkit-transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.van-doc-header__version-pop-item {\n  padding-left: 12px;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.van-doc-header__version-pop-item:hover {\n  color: #1989fa;\n}\n.van-doc-header__logo {\n  display: block;\n}\n.van-doc-header__logo img,\n.van-doc-header__logo span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.van-doc-header__logo img {\n  width: 24px;\n  margin-right: 10px;\n}\n.van-doc-header__logo span {\n  color: #fff;\n  font-size: 22px;\n}\n.van-doc-header__logo-link img {\n  display: block;\n  width: 26px;\n  height: 26px;\n  -webkit-transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.van-doc-header__logo-link img:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.van-doc-dropdown-enter,\n.van-doc-dropdown-leave-active {\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  opacity: 0;\n}\n",""]),n.exports=t},function(n,t,e){"use strict";var o=e(10);e.n(o).a},function(n,t,e){(t=e(2)(!1)).push([n.i,".van-doc-content {\n  position: relative;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  padding: 0 0 75px;\n}\n.van-doc-content .card {\n  margin-bottom: 24px;\n  padding: 24px;\n  background-color: #fff;\n  border-radius: 12px;\n  box-shadow: 0 8px 12px #ebedf0;\n}\n.van-doc-content a {\n  margin: 0 1px;\n  color: #1989fa;\n  -webkit-font-smoothing: auto;\n}\n.van-doc-content a:hover {\n  color: #0570db;\n}\n.van-doc-content a:active {\n  color: #0456a9;\n}\n.van-doc-content h1,\n.van-doc-content h2,\n.van-doc-content h3,\n.van-doc-content h4,\n.van-doc-content h5,\n.van-doc-content h6 {\n  color: #323233;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.van-doc-content h1[id],\n.van-doc-content h2[id],\n.van-doc-content h3[id],\n.van-doc-content h4[id],\n.van-doc-content h5[id],\n.van-doc-content h6[id] {\n  cursor: pointer;\n}\n.van-doc-content h1 {\n  margin: 0 0 30px;\n  font-size: 30px;\n  cursor: default;\n}\n.van-doc-content h2 {\n  margin: 45px 0 20px;\n  font-size: 22px;\n}\n.van-doc-content h3 {\n  margin-bottom: 16px;\n  font-weight: 500;\n  font-size: 18px;\n}\n.van-doc-content h4 {\n  margin: 24px 0 12px;\n  font-weight: 500;\n  font-size: 15px;\n}\n.van-doc-content h5 {\n  margin: 24px 0 12px;\n  font-weight: 500;\n  font-size: 14px;\n}\n.van-doc-content p {\n  color: #34495e;\n  font-size: 14px;\n  line-height: 26px;\n}\n.van-doc-content table {\n  width: 100%;\n  margin-top: 12px;\n  color: #34495e;\n  font-size: 13px;\n  line-height: 1.5;\n  border-collapse: collapse;\n}\n.van-doc-content table th {\n  padding: 8px 10px;\n  font-weight: 500;\n  text-align: left;\n}\n.van-doc-content table th:first-child {\n  padding-left: 0;\n}\n.van-doc-content table th:last-child {\n  padding-right: 0;\n}\n.van-doc-content table td {\n  padding: 8px;\n  border-top: 1px solid #f1f4f8;\n}\n.van-doc-content table td:first-child {\n  padding-left: 0;\n}\n.van-doc-content table td:first-child code {\n  margin: 0;\n  padding: 2px 6px;\n  color: #1989fa;\n  font-weight: 500;\n  font-size: 10px;\n  background-color: rgba(25, 137, 250, 0.1);\n  border-radius: 20px;\n}\n.van-doc-content table td:last-child {\n  padding-right: 0;\n}\n.van-doc-content table em {\n  color: #4fc08d;\n  font-size: 12.5px;\n  font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;\n  font-style: normal;\n  -webkit-font-smoothing: auto;\n}\n.van-doc-content ul li,\n.van-doc-content ol li {\n  position: relative;\n  margin: 5px 0 5px 10px;\n  padding-left: 15px;\n  color: #34495e;\n  font-size: 14px;\n  line-height: 26px;\n}\n.van-doc-content ul li::before,\n.van-doc-content ol li::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 6px;\n  height: 6px;\n  margin-top: 10px;\n  border: 1px solid #666;\n  border-radius: 50%;\n  content: '';\n}\n.van-doc-content hr {\n  margin: 30px 0;\n  border: 0 none;\n  border-top: 1px solid #eee;\n}\n.van-doc-content p > code,\n.van-doc-content li > code,\n.van-doc-content table code {\n  display: inline;\n  margin: 2px 3px;\n  padding: 2px 5px;\n  font-size: 13px;\n  font-family: inherit;\n  word-break: keep-all;\n  background-color: #f0f2f5;\n  border-radius: 4px;\n  -webkit-font-smoothing: antialiased;\n}\n.van-doc-content p > code {\n  font-size: 14px;\n}\n.van-doc-content section {\n  padding: 30px;\n  overflow: hidden;\n}\n.van-doc-content blockquote {\n  margin: 20px 0 0;\n  padding: 16px;\n  color: rgba(52, 73, 94, 0.8);\n  font-weight: 500;\n  font-size: 14px;\n  background-color: #ecf9ff;\n  border-radius: 12px;\n}\n.van-doc-content img {\n  width: 100%;\n  margin: 16px 0;\n  border-radius: 12px;\n}\n.van-doc-content--changelog strong {\n  display: block;\n  margin: 24px 0 12px;\n  font-weight: 500;\n  font-size: 15px;\n}\n.van-doc-content--changelog h3 + p code {\n  margin: 0;\n}\n.van-doc-content--changelog h3 a {\n  color: inherit;\n  font-size: 20px;\n}\n",""]),n.exports=t},function(n,t,e){"use strict";var o=e(11);e.n(o).a},function(n,t,e){(t=e(2)(!1)).push([n.i,".van-doc-container {\n  box-sizing: border-box;\n  padding-left: 220px;\n  overflow: hidden;\n}\n.van-doc-container--with-simulator {\n  padding-right: 390px;\n}\n",""]),n.exports=t},function(n,t,e){"use strict";var o=e(12);e.n(o).a},function(n,t,e){(t=e(2)(!1)).push([n.i,".van-doc-simulator {\n  position: absolute;\n  top: 90px;\n  right: 30px;\n  z-index: 1;\n  box-sizing: border-box;\n  width: 360px;\n  min-width: 360px;\n  overflow: hidden;\n  background: #fafafa;\n  border-radius: 12px;\n  box-shadow: #ebedf0 0 4px 12px;\n}\n@media (max-width: 1100px) {\n.van-doc-simulator {\n    right: auto;\n    left: 750px;\n}\n}\n@media (min-width: 1680px) {\n.van-doc-simulator {\n    right: 50%;\n    margin-right: -800px;\n}\n}\n.van-doc-simulator-fixed {\n  position: fixed;\n  top: 30px;\n}\n.van-doc-simulator iframe {\n  display: block;\n  width: 100%;\n}\n",""]),n.exports=t},function(n,t,e){"use strict";var o=e(13);e.n(o).a},function(n,t,e){(t=e(2)(!1)).push([n.i,"",""]),n.exports=t},function(n,t,e){"use strict";var o=e(14);e.n(o).a},function(n,t,e){(t=e(2)(!1)).push([n.i,"body {\n  min-width: 1100px;\n  margin: 0;\n  overflow-x: auto;\n  color: #323233;\n  font-size: 16px;\n  font-family: PingFang SC, 'Helvetica Neue', Arial, sans-serif;\n  background-color: #f7f8fa;\n  -webkit-font-smoothing: antialiased;\n}\np {\n  margin: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font-size: inherit;\n}\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n.van-doc-row {\n  width: 100%;\n}\n@media (min-width: 1680px) {\n.van-doc-row {\n    width: 1680px;\n    margin: 0 auto;\n}\n}\ncode {\n  position: relative;\n  display: block;\n  overflow-x: auto;\n  color: #58727e;\n  font-weight: 400;\n  font-size: 13.4px;\n  font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;\n  line-height: 26px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  -webkit-font-smoothing: auto;\n}\npre {\n  margin: 20px 0 0;\n}\npre + p {\n  margin-top: 20px;\n}\n.hljs {\n  display: block;\n  padding: 0.5em;\n  overflow-x: auto;\n  background: #fff;\n}\n.hljs-subst {\n  color: #58727e;\n}\n.hljs-string,\n.hljs-meta,\n.hljs-symbol,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-addition {\n  color: #4fc08d;\n}\n.hljs-comment,\n.hljs-quote {\n  color: #999;\n}\n.hljs-params,\n.hljs-keyword,\n.hljs-attribute {\n  color: #8080ff;\n}\n.hljs-deletion,\n.hljs-variable,\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-bullet,\n.hljs-link {\n  color: #eb6f6f;\n}\n.hljs-attr,\n.hljs-selector-tag,\n.hljs-title,\n.hljs-section,\n.hljs-built_in,\n.hljs-doctag,\n.hljs-type,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-strong {\n  color: #4994df;\n}\n.hljs-emphasis {\n  font-style: italic;\n}\n.van-doc-intro {\n  padding-top: 20px;\n  font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n  text-align: center;\n}\n.van-doc-intro p {\n  margin-bottom: 20px;\n}\n",""]),n.exports=t},,,,,,,,,,,,,,,,,,,,,,,,function(n,t,e){"use strict";e.r(t);var o,a=e(3),i={name:"van-doc-nav-link",props:{base:String,item:Object},computed:{itemName:function(){var n=(this.item.title||this.item.name).split(" ");return n[0]+" <span>"+n.slice(1).join(" ")+"</span>"},path:function(){return""+this.base+this.item.path},active:function(){return this.$route.path===this.path||"home"===this.item.path&&this.$route.path===this.base}},watch:{active:function(){this.scrollIntoView()}},mounted:function(){this.scrollIntoView()},methods:{scrollIntoView:function(){this.active&&this.$el&&this.$el.scrollIntoViewIfNeeded&&this.$el.scrollIntoViewIfNeeded()}}},s=e(0),r=Object(s.a)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.item.path?e("router-link",{class:{active:n.active},attrs:{to:n.path},domProps:{innerHTML:n._s(n.itemName)}}):n.item.link?e("a",{attrs:{href:n.item.link},domProps:{innerHTML:n._s(n.itemName)}}):e("a",{domProps:{innerHTML:n._s(n.itemName)}})}),[],!1,null,null,null).exports,c={name:"van-doc-nav",components:(o={},o[r.name]=r,o),props:{lang:String,navConfig:Array},data:function(){return{top:60,bottom:0}},computed:{style:function(){return{top:this.top+"px",bottom:this.bottom+"px"}},base:function(){return this.lang?"/"+this.lang+"/":"/"}},created:function(){window.addEventListener("scroll",this.onScroll),this.onScroll()},methods:{onScroll:function(){var n=window.pageYOffset;this.top=Math.max(0,60-n)}}},l=(e(27),Object(s.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"van-doc-nav",style:n.style},n._l(n.navConfig,(function(t,o){return e("div",{key:o,staticClass:"van-doc-nav__group"},[e("div",{staticClass:"van-doc-nav__title"},[n._v("\n      "+n._s(t.title)+"\n    ")]),t.items?n._l(t.items,(function(t,o){return e("div",{key:o,staticClass:"van-doc-nav__item"},[e("van-doc-nav-link",{attrs:{item:t,base:n.base}})],1)})):n._e()],2)})),0)}),[],!1,null,null,null).exports);function d(){return(d=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}var h={name:"van-doc-search",props:{lang:String,searchConfig:Object},computed:{placeholder:function(){return this.searchConfig.placeholder||"Search..."}},watch:{lang:function(n){this.docsearchInstance&&(this.docsearchInstance.algoliaOptions.facetFilters=["lang:"+n])}},mounted:function(){this.searchConfig&&(this.docsearchInstance=window.docsearch(d({},this.searchConfig,{inputSelector:".van-doc-search",algoliaOptions:{facetFilters:["lang:"+this.lang]}})))}},u=(e(29),{name:"van-doc-header",components:{SearchInput:Object(s.a)(h,(function(){var n=this.$createElement;return(this._self._c||n)("input",{staticClass:"van-doc-search",attrs:{placeholder:this.placeholder}})}),[],!1,null,null,null).exports},props:{lang:String,config:Object,versions:Array,langConfigs:Array},data:function(){return{showVersionPop:!1}},computed:{langLink:function(){return"#"+this.$route.path.replace(this.lang,this.anotherLang.lang)},langLabel:function(){return this.anotherLang.label},anotherLang:function(){var n=this,t=this.langConfigs.filter((function(t){return t.lang!==n.lang}));return t.length?t[0]:{}},searchConfig:function(){return this.config.searchConfig}},methods:{toggleVersionPop:function(){var n=!this.showVersionPop,t=n?"add":"remove";document.body[t+"EventListener"]("click",this.checkHideVersionPop),this.showVersionPop=n},checkHideVersionPop:function(n){this.$refs.version.contains(n.target)||(this.showVersionPop=!1)},onSwitchLang:function(n){this.$router.push(this.$route.path.replace(n.from,n.to))},onSwitchVersion:function(n){n.link&&(location.href=n.link)}}}),p=(e(31),Object(s.a)(u,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"van-doc-header"},[e("div",{staticClass:"van-doc-row"},[e("div",{staticClass:"van-doc-header__top"},[e("a",{staticClass:"van-doc-header__logo"},[e("img",{attrs:{src:n.config.logo}}),e("span",[n._v(n._s(n.config.title))])]),n.searchConfig?e("search-input",{attrs:{lang:n.lang,"search-config":n.searchConfig}}):n._e(),e("ul",{staticClass:"van-doc-header__top-nav"},[n._l(n.config.links,(function(n){return e("li",{staticClass:"van-doc-header__top-nav-item"},[e("a",{staticClass:"van-doc-header__logo-link",attrs:{target:"_blank",href:n.url}},[e("img",{attrs:{src:n.logo}})])])})),n.versions?e("li",{ref:"version",staticClass:"van-doc-header__top-nav-item"},[e("span",{staticClass:"van-doc-header__cube van-doc-header__version",on:{click:n.toggleVersionPop}},[n._v("\n            "+n._s(n.versions[0].label)+"\n            "),e("transition",{attrs:{name:"van-doc-dropdown"}},[n.showVersionPop?e("div",{staticClass:"van-doc-header__version-pop"},n._l(n.versions,(function(t){return e("div",{staticClass:"van-doc-header__version-pop-item",on:{click:function(e){return n.onSwitchVersion(t)}}},[n._v("\n                  "+n._s(t.label)+"\n                ")])})),0):n._e()])],1)]):n._e(),n.langLabel&&n.langLink?e("li",{staticClass:"van-doc-header__top-nav-item"},[e("a",{staticClass:"van-doc-header__cube",attrs:{href:n.langLink}},[n._v(n._s(n.langLabel))])]):n._e()],2)],1)])])}),[],!1,null,null,null).exports),f={name:"van-doc-content",computed:{currentPage:function(){var n=this.$route.path;return n?n.split("/").slice(-1)[0]:this.$route.name}}},v=(e(33),Object(s.a)(f,(function(){var n=this.$createElement;return(this._self._c||n)("div",{class:["van-doc-content","van-doc-content--"+this.currentPage]},[this._t("default")],2)}),[],!1,null,null,null).exports),g={name:"van-doc-container",props:{hasSimulator:Boolean}},m=(e(35),Object(s.a)(g,(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"van-doc-container van-doc-row",class:{"van-doc-container--with-simulator":this.hasSimulator}},[this._t("default")],2)}),[],!1,null,null,null).exports),E={name:"van-doc-simulator",props:{src:String},data:function(){return{scrollTop:window.scrollY,windowHeight:window.innerHeight}},computed:{isFixed:function(){return this.scrollTop>60},simulatorStyle:function(){return{height:Math.min(640,this.windowHeight-90)+"px"}}},mounted:function(){var n=this;window.addEventListener("scroll",(function(){n.scrollTop=window.scrollY})),window.addEventListener("resize",(function(){n.windowHeight=window.innerHeight}))}},C=(e(37),{name:"van-doc",components:{DocNav:l,DocHeader:p,DocContent:v,DocContainer:m,DocSimulator:Object(s.a)(E,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{class:["van-doc-simulator",{"van-doc-simulator-fixed":this.isFixed}]},[t("iframe",{ref:"iframe",style:this.simulatorStyle,attrs:{src:this.src,frameborder:"0"}})])}),[],!1,null,null,null).exports},props:{lang:String,versions:Array,simulator:String,langConfigs:Array,config:{type:Object,required:!0},base:{type:String,default:""}},watch:{"$route.path":function(){this.setNav()}},created:function(){this.setNav(),this.keyboardHandler()},methods:{setNav:function(){for(var n,t=this.config.nav.reduce((function(n,t){return n.concat(t.items)}),[]),e=this.$route.path.split("/").pop(),o=0,a=t.length;o<a;o++)if(t[o].path===e){n=o;break}this.leftNav=t[n-1],this.rightNav=t[n+1]},keyboardNav:function(n){var t="prev"===n?this.leftNav:this.rightNav;t.path&&this.$router.push(this.base+t.path)},keyboardHandler:function(){var n=this;window.addEventListener("keyup",(function(t){switch(t.keyCode){case 37:n.keyboardNav("prev");break;case 39:n.keyboardNav("next")}}))}}}),b=(e(39),Object(s.a)(C,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"van-doc"},[e("doc-header",{attrs:{lang:n.lang,config:n.config,versions:n.versions,"lang-configs":n.langConfigs},on:{"switch-version":function(t){return n.$emit("switch-version",t)}}}),e("doc-nav",{attrs:{lang:n.lang,"nav-config":n.config.nav}}),e("doc-container",{attrs:{"has-simulator":!!n.simulator}},[e("doc-content",[n._t("default")],2)],1),n.simulator?e("doc-simulator",{attrs:{src:n.simulator}}):n._e()],1)}),[],!1,null,null,null).exports),x=e(24),_=e.n(x),w={created:function(){this.content=unescape("%3Ch1%3E%u4ECB%u7ECD%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22guan-yu%22%3E%u5173%u4E8E%3C/h3%3E%0A%3Cp%3Evue%u7EC4%u4EF6%u5E93%u5F00%u53D1%uFF0C%u57FA%u4E8E%3Ca%20href%3D%22https%3A//github.com/youzan/vant/blob/dev/packages/vant-cli/README.md%22%20target%3D%22_blank%22%3EVant%20Cli%3C/a%3E%3C/p%3E%0A%3C/div%3E")},mounted:function(){var n=this;[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5")).forEach((function(t){t.addEventListener("click",n.scrollToAnchor)}))},methods:{scrollToAnchor:function(n){n.target.id&&this.$router.push({path:this.$route.path,hash:n.target.id})}}},A={created:function(){this.content=unescape("%3Ch1%3E%u5FEB%u901F%u4E0A%u624B%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22an-zhuang%22%3E%u5B89%u88C5%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u901A%u8FC7%20npm%20%u5B89%u88C5%3C/span%3E%0Anpm%20i%20vue-components-lib-demo%20-S%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u901A%u8FC7%20yarn%20%u5B89%u88C5%3C/span%3E%0Ayarn%20add%20vue-components-lib-demo%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E")},mounted:function(){var n=this;[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5")).forEach((function(t){t.addEventListener("click",n.scrollToAnchor)}))},methods:{scrollToAnchor:function(n){n.target.id&&this.$router.push({path:this.$route.path,hash:n.target.id})}}},y={created:function(){this.content=unescape("%3Ch1%3EDemoButton%20%u6309%u94AE%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3EDemoButton%20%u662F%u4E00%u4E2A%u793A%u4F8B%u6309%u94AE%u7EC4%u4EF6%3C/p%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yin-ru%22%3E%u5F15%u5165%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Vue%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vue%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20DemoButton%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27insurance-lib2%27%3C/span%3E%3B%0A%0AVue.use%28DemoButton%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Edemo-button%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22primary%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etype%3C/td%3E%0A%3Ctd%3E%u6309%u94AE%u7C7B%u578B%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eprimary%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecolor%20%3Ccode%3E1.0.0%3C/code%3E%3C/td%3E%0A%3Ctd%3E%u6309%u94AE%u989C%u8272%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Eevent%3A%20Event%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Edefault%3C/td%3E%0A%3Ctd%3E%u9ED8%u8BA4%u63D2%u69FD%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")},mounted:function(){var n=this;[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5")).forEach((function(t){t.addEventListener("click",n.scrollToAnchor)}))},methods:{scrollToAnchor:function(n){n.target.id&&this.$router.push({path:this.$route.path,hash:n.target.id})}}},k={created:function(){this.content=unescape("%3Ch1%3EResponseImg%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3EResponseImg%20%u662F%u4E00%u4E2A%u54CD%u5E94%u5F0F%u56FE%u7247%u7EC4%u4EF6%3C/p%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yin-ru%22%3E%u5F15%u5165%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Vue%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vue%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ResponseImg%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27insurance-lib2%27%3C/span%3E%3B%0A%0AVue.use%28ResponseImg%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eresponse-img%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Cp%3E%u540C%3Ccode%3E%26lt%3Bimg%20/%26gt%3B%3C/code%3E%3C/p%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Cp%3E%u540C%3Ccode%3E%26lt%3Bimg%20/%26gt%3B%3C/code%3E%3C/p%3E%0A%3C/div%3E")},mounted:function(){var n=this;[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5")).forEach((function(t){t.addEventListener("click",n.scrollToAnchor)}))},methods:{scrollToAnchor:function(n){n.target.id&&this.$router.push({path:this.$route.path,hash:n.target.id})}}},j={created:function(){this.content=unescape("%3Ch1%3EUtils%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3EUtils%u5DE5%u5177%u5E93%3C/p%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yin-ru%22%3E%u5F15%u5165%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Vue%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vue%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20*%20%3Cspan%20class%3D%22hljs-keyword%22%3Eas%3C/span%3E%20utils%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27insurance-lib2/lib/utils%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20*%20%3Cspan%20class%3D%22hljs-keyword%22%3Eas%3C/span%3E%20validator%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27insurance-lib2/lib/utils/validator%27%3C/span%3E%3B%0A%0Autils.parseIdNo%28%3Cspan%20class%3D%22hljs-string%22%3E%27xxxx%27%3C/span%3E%29%3B%0Avalidator.isEmpty%28%3Cspan%20class%3D%22hljs-string%22%3E%27%27%3C/span%3E%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E")},mounted:function(){var n=this;[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5")).forEach((function(t){t.addEventListener("click",n.scrollToAnchor)}))},methods:{scrollToAnchor:function(n){n.target.id&&this.$router.push({path:this.$route.path,hash:n.target.id})}}},D={Home:Object(s.a)(w,(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this.$createElement;return(this._self._c||n)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null).exports,Quickstart:Object(s.a)(A,(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this.$createElement;return(this._self._c||n)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null).exports,DemoButton:Object(s.a)(y,(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this.$createElement;return(this._self._c||n)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null).exports,ResponseImg:Object(s.a)(k,(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this.$createElement;return(this._self._c||n)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null).exports,Utils:Object(s.a)(j,(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this.$createElement;return(this._self._c||n)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null).exports},$="1.0.0",B=e(5),O={components:{VanDoc:b},data:function(){var n=location.pathname.replace(/\/index(\.html)?/,"/");return{packageVersion:$,simulator:n+"mobile.html"+location.hash}},computed:{lang:function(){var n=this.$route.meta.lang;return n||""},langConfigs:function(){var n=_.a.site.locales,t=void 0===n?{}:n;return Object.keys(t).map((function(n){return{lang:n,label:t[n].langLabel||""}}))},config:function(){var n=_.a.site.locales;return n?n[this.lang]:_.a.site},versions:function(){return _.a.site.versions?[{label:$}].concat(_.a.site.versions):null}},watch:{lang:function(n){Object(B.c)(n),this.setTitle()}},created:function(){this.setTitle()},methods:{setTitle:function(){var n=this.config.title;this.config.description&&(n+=" - "+this.config.description),document.title=n}}},z=(e(41),Object(s.a)(O,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"app"},[t("van-doc",{attrs:{lang:this.lang,config:this.config,versions:this.versions,simulator:this.simulator,"lang-configs":this.langConfigs}},[t("router-view")],1)],1)}),[],!1,null,null,null).exports),S=e(6),F=e(4);e(25);F.c&&location.replace("mobile.html"+location.hash);var P=_.a.site,L=P.locales,T=P.defaultLang;Object(B.b)(T),a.a.use(S.a);var I,M,V=new S.a({mode:"hash",routes:(I=[],M=Object.keys(D),L?I.push({path:"*",redirect:function(n){return"/"+function(n){var t=n.path.split("/")[1];return-1!==Object.keys(L).indexOf(t)?t:Object(B.a)()}(n)+"/"}}):I.push({path:"*",redirect:"/"}),M.forEach((function(n){var t=function(n){if(-1!==n.indexOf("_")){var t=n.split("_"),e=t.shift();return{component:""+Object(F.a)(e),lang:t.join("-")}}return{component:""+Object(F.a)(n),lang:""}}(n),e=t.component,o=t.lang;"home"===e&&function(n,t){I.push({name:t,path:"/"+(t||""),component:n,meta:{lang:t}})}(D[n],o),o?I.push({name:o+"/"+e,path:"/"+o+"/"+e,component:D[n],meta:{lang:o,name:e}}):I.push({name:""+e,path:"/"+e,component:D[n],meta:{name:e}})})),I),scrollBehavior:function(n){return n.hash?{selector:n.hash}:{x:0,y:0}}});V.afterEach((function(){a.a.nextTick((function(){return window.syncPath()}))})),window.vueRouter=V,new a.a({el:"#app",mounted:function(){var n,t,e;this.$route.hash&&(n=this.$route.hash,t=0,e=setInterval((function(){var o=document.querySelector(n);o?(o.scrollIntoView({behavior:"smooth"}),clearInterval(e)):++t>10&&clearInterval(e)}),100))},render:function(n){return n(z)},router:V})}]);