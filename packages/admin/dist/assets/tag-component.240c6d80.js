import{h as n,m as o,b as e,W as t,k as a,t as s,s as r}from"./vendor.e753ceeb.js";import"./admin-docs.88a85952.js";import"./index.f5de9342.js";import"./container.e34f9548.js";import"./___vite-browser-external_commonjs-proxy.c9431b53.js";var i=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,b=(n,o,e)=>o in n?i(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,m=(n,o)=>{for(var e in o||(o={}))c.call(o,e)&&b(n,e,o[e]);if(g)for(var e of g(o))p.call(o,e)&&b(n,e,o[e]);return n};var f;f=n("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),o(("OIcon"+"Close").replace(/\B([A-Z])/g,"-$1").toLowerCase(),(o=>n("svg",m({viewBox:"0 0 24 24",title:"Close"},o.props),f)),{css:":host {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  vertical-align: -0.125em;\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  flex-shrink: 0;\n  user-select: none;\n}"});Object.defineProperty,Object.getOwnPropertyDescriptor;let y=class extends t{constructor(){super(...arguments),this.closed=!1}render(o){console.log(o);const e=a(o,"o-tag",{["o-tag--"+o.size]:o.size,["o-tag--"+o.type]:o.type,"is-disabled":o.disabled,"is-closed":this.closed});return n("div",(t=m({},e),l(t,d({onClick:n=>o.onClick&&o.onClick(n)}))),n("slot",null),o.closable&&n("span",{class:"o-tag--suffix",onClick:n=>{this.closed=!0,this.update(),o.onClose&&o.onClose(n)}},n("o-icon-close",null)));var t}};y.css=".o-tag {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  height: 30px;\n  line-height: 28px;\n  font-size: 12px;\n  padding: 0 12px;\n  margin: 0.5rem;\n  color: #333;\n  border: 1px solid #999;\n  border-radius: 2px;\n  background-color: #fcfcfc;\n  animation: tag-fade 0.2s ease-in;\n  opacity: 1;\n  transition: all 0.2s ease-in;\n}\n.o-tag.is-disabled {\n  color: #999;\n  border-color: transparent;\n}\n.o-tag--suffix {\n  cursor: pointer;\n  transform: translateX(30px, 6);\n}\n.o-tag.is-closed {\n  transform: translateX(15px);\n  opacity: 0;\n}\n.o-tag--primary {\n  border: 1px solid #07c160;\n  background-color: rgba(7, 193, 96, 0.1);\n  color: #07c160;\n}\n.o-tag--primary.is-disabled {\n  color: rgba(7, 193, 96, 0.7);\n}\n.o-tag--success {\n  border: 1px solid #07c160;\n  background-color: rgba(7, 193, 96, 0.1);\n  color: #07c160;\n}\n.o-tag--success.is-disabled {\n  color: rgba(7, 193, 96, 0.7);\n}\n.o-tag--warning {\n  border: 1px solid #f2711c;\n  background-color: rgba(242, 113, 28, 0.1);\n  color: #f2711c;\n}\n.o-tag--warning.is-disabled {\n  color: rgba(242, 113, 28, 0.7);\n}\n.o-tag--danger {\n  border: 1px solid #fa5151;\n  background-color: rgba(250, 81, 81, 0.1);\n  color: #fa5151;\n}\n.o-tag--danger.is-disabled {\n  color: rgba(250, 81, 81, 0.7);\n}\n.o-tag--info {\n  border: 1px solid #42b8dd;\n  background-color: rgba(66, 184, 221, 0.1);\n  color: #42b8dd;\n}\n.o-tag--info.is-disabled {\n  color: rgba(66, 184, 221, 0.7);\n}\n.o-tag--medium {\n  height: 28px;\n  padding: 0 10px;\n  line-height: 26px;\n}\n.o-tag--suffix {\n  transform: translateX(3.5px);\n}\n.o-tag--small {\n  height: 24px;\n  padding: 0 8px;\n  line-height: 22px;\n}\n.o-tag--suffix {\n  transform: translateX(3px);\n}\n.o-tag--mini {\n  height: 20px;\n  padding: 0 5px;\n  line-height: 18px;\n}\n.o-tag--suffix {\n  transform: translateX(2.5px);\n}\n@keyframes tag-fade {\n  from {\n    transform: scale(0.1);\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}",y.defaultProps={disabled:!1,size:"default",closable:!1},y.propTypes={disabled:Boolean,size:String,color:String,type:String,closable:Boolean},y=((n,o,e,t)=>{for(var a,s=o,r=n.length-1;r>=0;r--)(a=n[r])&&(s=a(s)||s);return s})([e("o-tag")],y);var u=Object.defineProperty,x=Object.getOwnPropertyDescriptor;let h=class extends t{installed(){}render(){const o={breakInside:"avoid",padding:"0 0 0 0"};return n("code-demo-container",null,n("code-demo",{title:"标签",describe:"不同类型的标签",code:'\n```html\n<o-tag>默认</o-tag>\n<o-tag type="success">成功</o-tag>\n<o-tag type="info">信息</o-tag>\n<o-tag type="warning">警告</o-tag>\n<o-tag type="danger">危险</o-tag>\n```\n          ',style:o},n("div",{slot:"demo",class:s`px-5 py-5`},n("o-tag",null,"默认"),n("o-tag",{type:"success"},"成功"),n("o-tag",{type:"info"},"信息"),n("o-tag",{type:"warning"},"警告"),n("o-tag",{type:"danger"},"危险"))),n("code-demo",{title:"禁用",describe:"禁用状态下的呈现",code:'\n```html\n<o-tag disabled>禁用</o-tag>\n<o-tag disabled type="success">成功</o-tag>\n<o-tag disabled type="info">信息</o-tag>\n<o-tag disabled type="warning">警告</o-tag>\n<o-tag disabled type="danger">危险</o-tag>\n```\n                    ',style:o},n("div",{slot:"demo",class:s`px-5 py-5`},n("o-tag",{disabled:!0},"禁用"),n("o-tag",{disabled:!0,type:"success"},"成功"),n("o-tag",{disabled:!0,type:"info"},"信息"),n("o-tag",{disabled:!0,type:"warning"},"警告"),n("o-tag",{disabled:!0,type:"danger"},"危险"))),n("code-demo",{title:"尺寸",describe:"支持 4 种尺寸大小",code:'\n```html\n<o-tag>默认标签</o-tag>\n<o-tag size="medium">中等标签</o-tag>\n<o-tag size="small">小型标签</o-tag>\n<o-tag size="mini">超小标签</o-tag>\n```\n             ',style:o},n("div",{slot:"demo",class:s`px-5 py-5`},n("o-tag",null,"默认标签"),n("o-tag",{size:"medium"},"中等标签"),n("o-tag",{size:"small"},"小型标签"),n("o-tag",{size:"mini"},"超小标签"))),n("code-demo",{title:"关闭",describe:"关闭标签",code:'\n```html\n<o-tag closable>关闭标签</o-tag>\n<o-tag size="medium" closable>中等标签</o-tag>\n<o-tag size="small" closable>小型标签</o-tag>\n<o-tag size="mini" closable>超小标签</o-tag>\n```\n             ',style:o},n("div",{slot:"demo",class:s`px-5 py-5`},n("o-tag",{closable:!0},"关闭标签"),n("o-tag",{size:"medium",closable:!0},"中等标签"),n("o-tag",{size:"small",closable:!0},"小型标签"),n("o-tag",{size:"mini",closable:!0},"超小标签"))))}};h.css=[r.target,"o-tag{ margin: 4px }"],h=((n,o,e,t)=>{for(var a,s=t>1?void 0:t?x(o,e):o,r=n.length-1;r>=0;r--)(a=n[r])&&(s=(t?a(o,e,s):a(s))||s);return t&&s&&u(o,e,s),s})([e("tag-component")],h);export{h as default};
