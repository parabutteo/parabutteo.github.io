/*! For license information please see stories-Resizer-stories.a0e9fcb0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[177],{"./src/stories/Resizer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Resizer_stories});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Resizer=function Resizer(_ref){var className=_ref.className,children=_ref.children,_ref$initialWidth=_ref.initialWidth,initialWidth=void 0===_ref$initialWidth?539:_ref$initialWidth,_ref$initialHeight=_ref.initialHeight,initialHeight=void 0===_ref$initialHeight?40:_ref$initialHeight,resizerRef=react.useRef(),_React$useState2=_slicedToArray(react.useState({width:initialWidth<539?539:initialWidth,height:initialHeight<40?40:initialHeight}),2),boxSize=_React$useState2[0],setBoxSize=_React$useState2[1],newSizes=react.useRef(boxSize);newSizes.current=boxSize;var onResizeHandler=react.useMemo((function(){var startBlock={x:0,y:0,width:539,height:40},moveHandler=function moveHandler(ev){ev.preventDefault();var rect=resizerRef.current.getBoundingClientRect(),x=startBlock.x-(ev.clientX-rect.x),y=startBlock.y-(ev.clientY-rect.y);!function setSizes(size){setBoxSize({width:size.width<539?539:Math.round(size.width),height:size.height<40?40:Math.round(size.height)})}({width:startBlock.width-x,height:startBlock.height-y})},upMouseBtnHandler=function upMouseBtnHandler(){window.removeEventListener("mousemove",moveHandler),window.removeEventListener("mouseup",upMouseBtnHandler)};return{onResizeHandler:function onResizeHandler(ev){ev.stopPropagation();var rect=resizerRef.current.getBoundingClientRect();startBlock={x:ev.clientX-rect.x,y:ev.clientY-rect.y,width:newSizes.current.width,height:newSizes.current.height},window.addEventListener("mousemove",moveHandler),window.addEventListener("mouseup",upMouseBtnHandler)}}}),[]).onResizeHandler;return(0,jsx_runtime.jsxs)("div",{ref:resizerRef,className:(0,clsx_m.W)("box","resize",className),style:{width:boxSize.width,height:boxSize.height},children:[children,(0,jsx_runtime.jsx)("button",{type:"button",className:"resize-btn",onMouseDown:onResizeHandler})]})};Resizer.displayName="Resizer";try{Resizer.displayName="Resizer",Resizer.__docgenInfo={description:"Компонент Resizer\n\nОпционально принимает минимальную высоту и ширину. При этом\nопциональные значения не могут быть меньше предустановленных\n\nВ компоненте используется хук useMemo для повышения производительности",displayName:"Resizer",props:{className:{defaultValue:null,description:"Опциональные классы",name:"className",required:!1,type:{name:"string"}},initialWidth:{defaultValue:{value:"539"},description:"Начальная ширина || 539px",name:"initialWidth",required:!1,type:{name:"number"}},initialHeight:{defaultValue:{value:"40"},description:"Начальная высота || 40px",name:"initialHeight",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Содержимое компонента",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Resizer/Resizer.tsx#Resizer"]={docgenInfo:Resizer.__docgenInfo,name:"Resizer",path:"src/components/Resizer/Resizer.tsx#Resizer"})}catch(__react_docgen_typescript_loader_error){}const Resizer_stories={title:"Practice/Resizer",component:Resizer,tags:["autodocs"]};var Default={args:{className:"margin-bottom-32",initialWidth:600,initialHeight:100,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi eligendi dolorum voluptatibus soluta pariatur quam fugiat ab quaerat rem provident quas at possimus officia repellat, consequuntur culpa ipsum iure autem, voluptatem perferendis aliquam delectus repellendus perspiciatis. Nam sint at sunt provident, amet odio vitae libero illo, dolore consequatur deserunt praesentium sit dicta quod neque quis dolorem iste alias, autem maiores atque doloribus! Ea ipsum iusto possimus maiores quae tenetur ratione sed, est, veritatis labore cum, tempora nemo consequuntur inventore."}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: 'margin-bottom-32',\n    initialWidth: 600,\n    initialHeight: 100,\n    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi eligendi dolorum voluptatibus soluta pariatur quam fugiat ab quaerat rem provident quas at possimus officia repellat, consequuntur culpa ipsum iure autem, voluptatem perferendis aliquam delectus repellendus perspiciatis. Nam sint at sunt provident, amet odio vitae libero illo, dolore consequatur deserunt praesentium sit dicta quod neque quis dolorem iste alias, autem maiores atque doloribus! Ea ipsum iusto possimus maiores quae tenetur ratione sed, est, veritatis labore cum, tempora nemo consequuntur inventore.'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);