import{W as e,h as t,t as c,s,b as o}from"./vendor.cff7a2c5.js";import"./index.esm.e4ef5c9f.js";import"./admin-docs.d04bcd77.js";import"./index.b502f1bc.js";import"./container.b1933bec.js";import"./___vite-browser-external_commonjs-proxy.e2cda3d0.js";var i=Object.defineProperty,r=Object.getOwnPropertyDescriptor;let n=class extends e{install(){}render(){return t("code-demo-container",null,t("code-demo",{title:"开关按钮",describe:"基础演示",code:'\n```jsx\n<o-switch id="switchA" checked="0">\n</o-switch>\n\n<o-switch id="switchB" checked>\n</o-switch>\n```\n          '},t("div",{slot:"demo",class:c`flex justify-around px-5 py-5`},t("o-switch",{id:"switchA",checked:!1}),t("o-switch",{id:"switchB",checked:!0}))))}};n.css=[s.target,"o-button{margin-left:10px;}"],n=((e,t,c,s)=>{for(var o,n=s>1?void 0:s?r(t,c):t,d=e.length-1;d>=0;d--)(o=e[d])&&(n=(s?o(t,c,n):o(n))||n);return s&&n&&i(t,c,n),n})([o("switch-component")],n);export{n as default};