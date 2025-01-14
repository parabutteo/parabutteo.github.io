"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[639],{"./src/stories/Button/AddToBasket.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultBtn:()=>DefaultBtn,NotNullableCounter:()=>NotNullableCounter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/AddToBasket",component:__webpack_require__("./src/components/Button/AddToBasket.tsx").j,tags:["autodocs"],argTypes:{}};var DefaultBtn={name:"Default state",describe:"dsa",args:{isDisabled:!1,counter:0}},NotNullableCounter={name:"Not null counter",args:{isDisabled:!1,counter:2}};DefaultBtn.parameters={...DefaultBtn.parameters,docs:{...DefaultBtn.parameters?.docs,source:{originalSource:"{\n  name: 'Default state',\n  describe: 'dsa',\n  args: {\n    isDisabled: false,\n    counter: 0\n  }\n}",...DefaultBtn.parameters?.docs?.source}}},NotNullableCounter.parameters={...NotNullableCounter.parameters,docs:{...NotNullableCounter.parameters?.docs,source:{originalSource:"{\n  name: 'Not null counter',\n  args: {\n    isDisabled: false,\n    counter: 2\n  }\n}",...NotNullableCounter.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultBtn","NotNullableCounter"]},"./src/components/Button/AddToBasket.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>AddToBasket});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Button.tsx"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),AddToBasket=function AddToBasket(_ref){var counter=_ref.counter,isDisabled=_ref.isDisabled;return counter>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("counter","flex-row","align-items-center",isDisabled&&"disabled"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:"fa fa-minus"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"number",defaultValue:counter}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:"fa fa-plus"})})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{className:"primary",disabled:isDisabled,children:["Добавить в корзину",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:"margin-left-12 fa fa-shopping-cart"})]})};AddToBasket.displayName="AddToBasket";try{AddToBasket.displayName="AddToBasket",AddToBasket.__docgenInfo={description:'Кнопка "добавить в корзину"\n\nВ качестве пропсов принимает признак isDisabled, указывающий на блокировку кнопки\n\nи counter для определения количества добавленных позиций',displayName:"AddToBasket",props:{counter:{defaultValue:null,description:"Счетчик позиций",name:"counter",required:!0,type:{name:"number"}},isDisabled:{defaultValue:null,description:"Признак заблокированности кнопки",name:"isDisabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/AddToBasket.tsx#AddToBasket"]={docgenInfo:AddToBasket.__docgenInfo,name:"AddToBasket",path:"src/components/Button/AddToBasket.tsx#AddToBasket"})}catch(__react_docgen_typescript_loader_error){}}}]);