/*! For license information please see stories-Header-stories.7f393089.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[758],{"./src/stories/Header.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Header/Header.tsx"),_storybook_decorators_StoryContextProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/decorators/StoryContextProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Header",component:_components_Header_Header__WEBPACK_IMPORTED_MODULE_0__.h,decorators:[_storybook_decorators_StoryContextProvider__WEBPACK_IMPORTED_MODULE_1__.Z],tags:["autodocs"]};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./.storybook/decorators/StoryContextProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>StoryContextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_app_Context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/Context.tsx"),react_i18next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function StoryContextProvider(Story){var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState("light"),2),theme=_React$useState2[0],setTheme=_React$useState2[1],_React$useState4=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState("ru"),2),lang=_React$useState4[0],setLang=_React$useState4[1],i18n=(0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.$G)().i18n;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_app_Context__WEBPACK_IMPORTED_MODULE_1__._.Provider,{value:{theme,toggleTheme:function toggleTheme(){setTheme((function(prevTheme){return"light"===prevTheme?"dark":"light"}))},lang,toggleLang:function toggleLang(){setLang((function(prevLang){return"ru"===prevLang?"en":"ru"})),"ru"===lang?i18n.changeLanguage("en"):i18n.changeLanguage("ru")}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})})}StoryContextProvider.displayName="StoryContextProvider";try{StoryContextProvider.displayName="StoryContextProvider",StoryContextProvider.__docgenInfo={description:"",displayName:"StoryContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/decorators/StoryContextProvider.tsx#StoryContextProvider"]={docgenInfo:StoryContextProvider.__docgenInfo,name:"StoryContextProvider",path:".storybook/decorators/StoryContextProvider.tsx#StoryContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/Context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Context});var Context=(0,__webpack_require__("./node_modules/react/index.js").createContext)({theme:"light",toggleTheme:function toggleTheme(){return null},lang:"ru",toggleLang:function toggleLang(){return null}})},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=function Button(_ref){var children=_ref.children,className=_ref.className,buttonAttrs=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",_objectSpread(_objectSpread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("button",className)},buttonAttrs),{},{children}))};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"Кнопка\n\nВ качестве children передается содержимое кнопки в виде строки или разметки\n\nТакже оддерживает дефолтные атрибуты для HTML-кнопок",displayName:"Button",props:{children:{defaultValue:null,description:"Содержимое кнопки",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Css-классы кнопки",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Header});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Logo=__webpack_require__("./src/components/Logo/Logo.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),Context=__webpack_require__("./src/app/Context.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeSwitcher=function ThemeSwitcher(_ref){var isDisabled=_ref.isDisabled,_React$useContext=react.useContext(Context._),theme=_React$useContext.theme,toggleTheme=_React$useContext.toggleTheme;return(0,jsx_runtime.jsx)(Button.z,{className:"icon-btn theme-switch",disabled:isDisabled,onClick:toggleTheme,children:(0,jsx_runtime.jsx)("i",{className:(0,clsx_m.Z)("fa","dark"===theme?"fa-sun":"fa-moon")})})};ThemeSwitcher.displayName="ThemeSwitcher";try{ThemeSwitcher.displayName="ThemeSwitcher",ThemeSwitcher.__docgenInfo={description:'Кнопка "добавить в корзину"\n\nВ качестве пропсов принимает признак isDisabled, указывающий на блокировку кнопки\n\nи counter для определения количества добавленных позиций',displayName:"ThemeSwitcher",props:{isDisabled:{defaultValue:null,description:"Признак заблокированности кнопки",name:"isDisabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/ThemeSwitcher.tsx#ThemeSwitcher"]={docgenInfo:ThemeSwitcher.__docgenInfo,name:"ThemeSwitcher",path:"src/components/Button/ThemeSwitcher.tsx#ThemeSwitcher"})}catch(__react_docgen_typescript_loader_error){}var LanguageSwitcher=function LanguageSwitcher(){var _React$useContext=react.useContext(Context._),lang=_React$useContext.lang,toggleLang=_React$useContext.toggleLang;return(0,jsx_runtime.jsx)(Button.z,{className:"icon-btn lang-switch",onClick:toggleLang,children:"ru"===lang?"EN":"RU"})};LanguageSwitcher.displayName="LanguageSwitcher";try{LanguageSwitcher.displayName="LanguageSwitcher",LanguageSwitcher.__docgenInfo={description:'Кнопка "сменить язык сайта"',displayName:"LanguageSwitcher",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/LanguageSwitcher.tsx#LanguageSwitcher"]={docgenInfo:LanguageSwitcher.__docgenInfo,name:"LanguageSwitcher",path:"src/components/Button/LanguageSwitcher.tsx#LanguageSwitcher"})}catch(__react_docgen_typescript_loader_error){}var Header=function Header(){var t=(0,es.$G)().t;return(0,jsx_runtime.jsxs)("header",{className:"header",children:[(0,jsx_runtime.jsx)(Logo.T,{}),(0,jsx_runtime.jsxs)("div",{className:"flex-row align-items-center",children:[(0,jsx_runtime.jsx)("nav",{className:"nav",children:(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{href:"#",children:t("header.main")})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{href:"#",children:t("header.about-us")})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{href:"#",children:t("header.contacts")})})]})}),(0,jsx_runtime.jsx)(ThemeSwitcher,{}),(0,jsx_runtime.jsx)(LanguageSwitcher,{})]})]})};Header.displayName="Header";try{Header.displayName="Header",Header.__docgenInfo={description:'"Хедер" приложения',displayName:"Header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/Header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Logo});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Logo=function Logo(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"#",className:"logo",children:"Vintagevault"})};Logo.displayName="Logo";try{Logo.displayName="Logo",Logo.__docgenInfo={description:"Логотип сайта",displayName:"Logo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/components/Logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);