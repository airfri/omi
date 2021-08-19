import{b as e,W as n,h as o,k as c}from"./vendor.e753ceeb.js";var r=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,h=(e,n,o)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,d=(e,n)=>{for(var o in n||(n={}))b.call(n,o)&&h(e,o,n[o]);if(i)for(var o of i(n))s.call(n,o)&&h(e,o,n[o]);return e};Object.defineProperty,Object.getOwnPropertyDescriptor;let l=class extends n{constructor(){super(...arguments),this.changeHandler=e=>{this.props.disabled||(this.props.checked=!this.props.checked,this.update(),this.fire("change",e.currentTarget.checked),this.props.indeterminate&&(this.props.checked=!0,this.props.indeterminate=!1,this.prevProps&&(this.prevProps.checked=!0,this.prevProps.indeterminate=!1),this.update(!0)))}}render(e){return o("div",d({},c(e,"o-checkbox",{"o-checkbox__disabled":e.disabled,"o-checkbox__indeterminate":e.indeterminate})),o("input",(n=d({type:"checkbox",disabled:e.disabled,onChange:this.changeHandler},function(e,n){if("string"!=typeof n){const o={};return n.forEach((n=>{e.hasOwnProperty(n)&&(o[n]=e[n])})),o}if(e.hasOwnProperty(n))return{[n]:e[n]}}(e,["checked","value","indeterminate"])),t(n,a({class:"o-checkbox__native-control",id:"checkbox"})))),o("div",{class:"o-checkbox__background"},o("svg",{class:"o-checkbox__checkmark",viewBox:"0 0 24 24"},o("path",{class:"o-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),o("div",{class:"o-checkbox__mixedmark"})),e.label&&o("label",{class:"o-checkbox__label",for:"checkbox"},e.label));var n}};l.css=":host {\n  display: inline-block;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.o-checkbox {\n  position: relative;\n  font-size: 14px;\n  line-height: 14px;\n  height: 14px;\n  white-space: nowrap;\n}\n\n.o-checkbox:hover {\n  cursor: pointer;\n}\n\n.o-checkbox__native-control:enabled:checked ~ .o-checkbox__background,\n.o-checkbox__native-control:enabled:indeterminate ~ .o-checkbox__background {\n  border-color: #07c160;\n  border-color: var(--o-primary, #07c160);\n  background-color: #07c160;\n  background-color: var(--o-primary, #07c160);\n  opacity: 1;\n}\n\n.o-checkbox__indeterminate .o-checkbox__checkmark {\n  opacity: 0;\n}\n\n.o-checkbox__checkmark {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  opacity: 1;\n  transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  color: #ffffff;\n}\n\n.o-checkbox__checkmark-path {\n  transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  stroke: currentColor;\n  stroke-width: 3.12px;\n  stroke-dashoffset: 29.78334;\n  stroke-dasharray: 29.78334;\n}\n\n.o-checkbox__native-control:checked ~ .o-checkbox__background .o-checkbox__checkmark-path,\n.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__checkmark-path {\n  stroke-dashoffset: 0;\n}\n\n.o-checkbox__background {\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 45%;\n  height: 45%;\n  border: 2px solid currentColor;\n  border-radius: 2px;\n  background-color: transparent;\n  pointer-events: none;\n  will-change: background-color, border-color;\n  transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.o-checkbox__background,\n.o-checkbox__label {\n  display: inline-block;\n  height: 14px;\n  vertical-align: middle;\n}\n\n.o-checkbox__background {\n  width: 14px;\n}\n\n.o-checkbox__label {\n  margin-left: 10px;\n}\n\n.o-checkbox__native-control:indeterminate ~ .o-checkbox__background .o-checkbox__mixedmark {\n  transform: scaleX(1) rotate(0deg);\n  opacity: 1;\n}\n\n.o-checkbox__mixedmark {\n  width: 100%;\n  height: 0;\n  transform: scaleX(0) rotate(0deg);\n  border: 1px solid white;\n  top: 50%;\n  position: relative;\n  margin-top: -1px;\n  opacity: 0;\n  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n}\n\n.o-checkbox__native-control {\n  appearance: none;\n  -webkit-appearance: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  cursor: inherit;\n}\n\n.o-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.54);\n  color: white;\n}\n\n.o-checkbox__native-control:disabled:checked ~ .o-checkbox__background,\n.o-checkbox__native-control:disabled:indeterminate ~ .o-checkbox__background {\n  border-color: #07c160;\n  border-color: var(--o-primary, #07c160);\n  background-color: #07c160;\n  background-color: var(--o-primary, #07c160);\n  opacity: 0.5;\n}\n\n.o-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .o-checkbox__background {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.34);\n  color: white;\n}\n\n.o-checkbox__disabled .o-checkbox__label {\n  color: #888;\n}\n\n.o-checkbox__disabled:hover {\n  cursor: not-allowed;\n}",l.propTypes={label:String,disabled:Boolean,indeterminate:Boolean,checked:Boolean,value:String},l=((e,n,o,c)=>{for(var r,t=n,a=e.length-1;a>=0;a--)(r=e[a])&&(t=r(t)||t);return t})([e("o-checkbox")],l);