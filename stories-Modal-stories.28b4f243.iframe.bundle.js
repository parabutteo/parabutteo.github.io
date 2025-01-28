/*! For license information please see stories-Modal-stories.28b4f243.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[290],{"./src/stories/Modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});__webpack_require__("./node_modules/react/index.js");var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Modal=function Modal(_ref){var onClose=_ref.onClose,isOpen=_ref.isOpen,children=_ref.children,title=_ref.title;if(!isOpen)return null;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,react_dom.createPortal)((0,jsx_runtime.jsx)("div",{className:"modal-wrapper",onClick:function handleOverlayClick(e){e.target.classList.contains("modal-wrapper")&&onClose()},children:(0,jsx_runtime.jsxs)("div",{className:"modal-content",children:[(0,jsx_runtime.jsx)("button",{className:"icon-btn modal-close-btn",onClick:onClose,children:(0,jsx_runtime.jsx)("i",{className:"fa fa-close"})}),(0,jsx_runtime.jsxs)("div",{className:"modal-body",children:[(0,jsx_runtime.jsx)("h2",{children:title}),children]})]})}),document.body)})};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"Компонент модального окна\n\nОбрабочик закрытия распространяется как на кнопку закрытия, так и на клик вне модалки (т.е. по оверлею)",displayName:"Modal",props:{onClose:{defaultValue:null,description:"Обработчик закрытия",name:"onClose",required:!0,type:{name:"() => void"}},isOpen:{defaultValue:null,description:"Признак открытия",name:"isOpen",required:!0,type:{name:"boolean"}},children:{defaultValue:null,description:"Контент",name:"children",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Заголовок",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}const Modal_stories={title:"Components/Modal",component:Modal,tags:["autodocs"]};var Default={args:{isOpen:!0,title:"Заголовок",children:"Какой-нибудь текст стрингой или jsx-разметка"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    title: 'Заголовок',\n    children: 'Какой-нибудь текст стрингой или jsx-разметка'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);