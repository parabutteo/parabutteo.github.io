/*! For license information please see stories-Card-ShortCard-stories.253a5b45.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[382],{"./src/stories/Card/ShortCard.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Card/ShortCard",component:__webpack_require__("./src/components/Card/ShortCard.tsx").z,tags:["autodocs"]};var Default={args:{item:{title:"Твидовый кардиган",details:"Тут описание вашего товара, начните с самого интересного о вашем товаре, зацепите вашего покупателя. Пишите так, чтобы было полезно вашему будущему покупателю. Можно добавить материал который используется в вашем товаре (или состав вашего продукта). Добавьте инструкцию по использованию.",image:"https://static.insales-cdn.com/r/fiDjdi_6FnQ/rs:fit:1000:0:1/plain/images/products/1/4006/465006502/17024061_43.jpg@webp",price:1300}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    item: {\n      title: 'Твидовый кардиган',\n      details: 'Тут описание вашего товара, начните с самого интересного о вашем товаре, зацепите вашего покупателя. Пишите так, чтобы было полезно вашему будущему покупателю. Можно добавить материал который используется в вашем товаре (или состав вашего продукта). Добавьте инструкцию по использованию.',\n      image: 'https://static.insales-cdn.com/r/fiDjdi_6FnQ/rs:fit:1000:0:1/plain/images/products/1/4006/465006502/17024061_43.jpg@webp',\n      price: 1300\n    }\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Button/AddToBasket.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>AddToBasket});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Button.tsx"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),AddToBasket=function AddToBasket(_ref){var counter=_ref.counter,isDisabled=_ref.isDisabled;return counter>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("counter","flex-row","align-items-center",isDisabled&&"disabled"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:"fa fa-minus"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"number",defaultValue:counter}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:"fa fa-plus"})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{className:"primary",disabled:isDisabled,children:["Добавить в корзину",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:"margin-left-12 fa fa-shopping-cart"})]})};AddToBasket.displayName="AddToBasket";try{AddToBasket.displayName="AddToBasket",AddToBasket.__docgenInfo={description:'Кнопка "добавить в корзину"\n\nВ качестве пропсов принимает признак isDisabled, указывающий на блокировку кнопки\n\nи counter для определения количества добавленных позиций\n\nВ компоненте встречается паттерн "Conditional rendering"\n\nКомпонент подходит под паттерн "High order component"',displayName:"AddToBasket",props:{counter:{defaultValue:null,description:"Счетчик позиций",name:"counter",required:!0,type:{name:"number"}},isDisabled:{defaultValue:null,description:"Признак заблокированности кнопки",name:"isDisabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/AddToBasket.tsx#AddToBasket"]={docgenInfo:AddToBasket.__docgenInfo,name:"AddToBasket",path:"src/components/Button/AddToBasket.tsx#AddToBasket"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=function Button(_ref){var children=_ref.children,className=_ref.className,buttonAttrs=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",_objectSpread(_objectSpread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("button",className)},buttonAttrs),{},{children}))};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:'Кнопка\n\nВ качестве children передается содержимое кнопки в виде строки или разметки\n\nТакже оддерживает дефолтные атрибуты для HTML-кнопок\n\nВ компоненте присутствуют паттерны "Destructuring props" и "JSX spread attributes"',displayName:"Button",props:{children:{defaultValue:null,description:"Содержимое кнопки",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Css-классы кнопки",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Card/ShortCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ShortCard});__webpack_require__("./node_modules/react/index.js");var _Button_AddToBasket__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/AddToBasket.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ShortCard=function ShortCard(_ref){var item=_ref.item,title=item.title,details=item.details,price=item.price,image=item.image;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("article",{className:"card short-card",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{width:"100%",src:image,alt:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex-column inner-12",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button_AddToBasket__WEBPACK_IMPORTED_MODULE_1__.j,{counter:0,isDisabled:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{className:"margin-top-12 margin-bottom-8",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"margin-bottom-12",children:details.length>50?"".concat(details.slice(0,50),"..."):details}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"margin-bottom-8 txt-bold",children:[price,".00 ₽"]})]})]})};ShortCard.displayName="ShortCard";try{ShortCard.displayName="ShortCard",ShortCard.__docgenInfo={description:'Краткая карточка товара\n\nВ компоненте присутствуют паттерны "Destructuring props" "обратным" способом',displayName:"ShortCard",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"IShortCardItem"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/ShortCard.tsx#ShortCard"]={docgenInfo:ShortCard.__docgenInfo,name:"ShortCard",path:"src/components/Card/ShortCard.tsx#ShortCard"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);