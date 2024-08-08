"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[8628],{"./packages/compose/build-module/hooks/use-media-query/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useMediaQuery});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const matchMediaCache=new Map;function useMediaQuery(query){const source=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const mediaQueryList=function getMediaQueryList(query){if(!query)return null;let match=matchMediaCache.get(query);return match||("undefined"!=typeof window&&"function"==typeof window.matchMedia?(match=window.matchMedia(query),matchMediaCache.set(query,match),match):null)}(query);return{subscribe:onStoreChange=>mediaQueryList?(mediaQueryList.addEventListener?.("change",onStoreChange),()=>{mediaQueryList.removeEventListener?.("change",onStoreChange)}):()=>{},getValue(){var _mediaQueryList$match;return null!==(_mediaQueryList$match=mediaQueryList?.matches)&&void 0!==_mediaQueryList$match&&_mediaQueryList$match}}}),[query]);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(source.subscribe,source.getValue,(()=>!1))}},"./packages/compose/build-module/hooks/use-reduced-motion/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _use_media_query__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/compose/build-module/hooks/use-media-query/index.js");const __WEBPACK_DEFAULT_EXPORT__=()=>(0,_use_media_query__WEBPACK_IMPORTED_MODULE_0__.Z)("(prefers-reduced-motion: reduce)")},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),use_force_update=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-force-update.mjs"),use_is_mounted=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),MotionConfigContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0}),{nonce}=(0,react.useContext)(MotionConfigContext._);return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return nonce&&(style.nonce=nonce),document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),(0,jsx_runtime.jsx)(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size,children:react.cloneElement(children,{ref})})}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?[Math.random()]:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=(0,jsx_runtime.jsx)(PopChild,{isPresent,children})),(0,jsx_runtime.jsx)(PresenceContext.O.Provider,{value:context,children})};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||(0,use_force_update.N)()[0],isMounted=(0,use_is_mounted.t)(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:childrenToRender.map((child=>(0,jsx_runtime.jsx)(PresenceChild,{isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode,children:child},getChildKey(child))))});childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{exitingChildren.delete(key);const leftOverKeys=Array.from(allChildren.keys()).filter((childKey=>!targetKeys.includes(childKey)));if(leftOverKeys.forEach((leftOverKey=>allChildren.delete(leftOverKey))),presentChildren.current=filteredChildren.filter((presentChild=>{const presentChildKey=getChildKey(presentChild);return presentChildKey===key||leftOverKeys.includes(presentChildKey)})),!exitingChildren.size){if(!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=(0,jsx_runtime.jsx)(PresenceChild,{isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode,children:child},getChildKey(child)),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:(0,jsx_runtime.jsx)(PresenceChild,{isPresent:!0,presenceAffectsLayout,mode,children:child},getChildKey(child))})),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child)))})}},"./node_modules/framer-motion/dist/es/utils/use-force-update.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>useForceUpdate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/frame.mjs");function useForceUpdate(){const isMounted=(0,_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(),[forcedRenderCount,setForcedRenderCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),forceRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}},"./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useIsMounted});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}},"./packages/components/src/snackbar/stories/list.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>list_story});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),use_reduced_motion=__webpack_require__("./packages/compose/build-module/hooks/use-reduced-motion/index.js"),snackbar=__webpack_require__("./packages/components/src/snackbar/index.tsx"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SNACKBAR_VARIANTS={init:{height:0,opacity:0},open:{height:"auto",opacity:1,transition:{height:{type:"tween",duration:.3,ease:[0,0,.2,1]},opacity:{type:"tween",duration:.25,delay:.05,ease:[0,0,.2,1]}}},exit:{opacity:0,transition:{type:"tween",duration:.1,ease:[0,0,.2,1]}}};function SnackbarList({notices,className,children,onRemove}){const listRef=(0,react.useRef)(null),isReducedMotion=(0,use_reduced_motion.Z)();className=(0,clsx.Z)("components-snackbar-list",className);const removeNotice=notice=>()=>onRemove?.(notice.id);return(0,jsx_runtime.jsxs)("div",{className,tabIndex:-1,ref:listRef,"data-testid":"snackbar-list",children:[children,(0,jsx_runtime.jsx)(AnimatePresence.M,{children:notices.map((notice=>{const{content,...restNotice}=notice;return(0,jsx_runtime.jsx)(motion.E.div,{layout:!isReducedMotion,initial:"init",animate:"open",exit:"exit",variants:isReducedMotion?void 0:SNACKBAR_VARIANTS,children:(0,jsx_runtime.jsx)("div",{className:"components-snackbar-list__notice-container",children:(0,jsx_runtime.jsx)(snackbar.Z,{...restNotice,onRemove:removeNotice(notice),listRef,children:notice.content})})},notice.id)}))})]})}SnackbarList.displayName="SnackbarList";const list=SnackbarList;try{SnackbarList.displayName="SnackbarList",SnackbarList.__docgenInfo={description:"Renders a list of notices.\n\n```jsx\nconst MySnackbarListNotice = () => (\n  <SnackbarList\n    notices={ notices }\n    onRemove={ removeNotice }\n  />\n);\n```",displayName:"SnackbarList",props:{notices:{defaultValue:null,description:"",name:"notices",required:!0,type:{name:'(Omit<SnackbarProps, "children"> & { id: string; content: string; })[]'}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(id: string) => void"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"select"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/snackbar/list.tsx#SnackbarList"]={docgenInfo:SnackbarList.__docgenInfo,name:"SnackbarList",path:"packages/components/src/snackbar/list.tsx#SnackbarList"})}catch(__react_docgen_typescript_loader_error){}const list_story={title:"Components/SnackbarList",component:list,argTypes:{as:{control:{type:null}},onRemove:{action:"onRemove",control:{type:null}}},parameters:{sourceLink:"packages/components/src/snackbar",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Default=({children,notices:noticesProp,...props})=>{const[notices,setNotices]=(0,react.useState)(noticesProp);return(0,jsx_runtime.jsx)(list,{...props,notices,onRemove:id=>{const matchIndex=notices.findIndex((n=>n.id===id));matchIndex>-1&&setNotices([...notices.slice(0,matchIndex),...notices.slice(matchIndex+1)])},children})};Default.displayName="Default",Default.args={children:"Use SnackbarList to communicate multiple low priority, non-interruptive messages to the user.",notices:[{id:"SAVE_POST_NOTICE_ID_1",spokenMessage:"Post published.",actions:[{label:"View Post",url:"https://example.com/?p=522"}],content:"Post published.",explicitDismiss:!1},{id:"SAVE_POST_NOTICE_ID_2",spokenMessage:"Post updated",actions:[{label:"View Post",url:"https://example.com/?p=522"}],content:"Post updated.",explicitDismiss:!1},{id:"global1",spokenMessage:"All content copied.",actions:[],content:"All content copied.",explicitDismiss:!1}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  children,\n  notices: noticesProp,\n  ...props\n}) => {\n  const [notices, setNotices] = useState(noticesProp);\n  const onRemove = (id: string) => {\n    const matchIndex = notices.findIndex(n => n.id === id);\n    if (matchIndex > -1) {\n      setNotices([...notices.slice(0, matchIndex), ...notices.slice(matchIndex + 1)]);\n    }\n  };\n  return <SnackbarList {...props} notices={notices} onRemove={onRemove}>\n            {children}\n        </SnackbarList>;\n}",...Default.parameters?.docs?.source}}}}}]);