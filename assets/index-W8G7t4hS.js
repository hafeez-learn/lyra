function JS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function XS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var G_={exports:{}},xu={},K_={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),ZS=Symbol.for("react.portal"),e0=Symbol.for("react.fragment"),t0=Symbol.for("react.strict_mode"),n0=Symbol.for("react.profiler"),r0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),s0=Symbol.for("react.forward_ref"),o0=Symbol.for("react.suspense"),a0=Symbol.for("react.memo"),l0=Symbol.for("react.lazy"),Km=Symbol.iterator;function u0(t){return t===null||typeof t!="object"?null:(t=Km&&t[Km]||t["@@iterator"],typeof t=="function"?t:null)}var Q_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y_=Object.assign,J_={};function ds(t,e,n){this.props=t,this.context=e,this.refs=J_,this.updater=n||Q_}ds.prototype.isReactComponent={};ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function X_(){}X_.prototype=ds.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=J_,this.updater=n||Q_}var Qd=Kd.prototype=new X_;Qd.constructor=Kd;Y_(Qd,ds.prototype);Qd.isPureReactComponent=!0;var Qm=Array.isArray,Z_=Object.prototype.hasOwnProperty,Yd={current:null},ev={key:!0,ref:!0,__self:!0,__source:!0};function tv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Z_.call(e,r)&&!ev.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:la,type:t,key:s,ref:o,props:i,_owner:Yd.current}}function c0(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function h0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ym=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h0(""+t.key):e.toString(36)}function fl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case ZS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Lc(o,0):r,Qm(i)?(n="",t!=null&&(n=t.replace(Ym,"$&/")+"/"),fl(i,e,n,"",function(c){return c})):i!=null&&(Jd(i)&&(i=c0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ym,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Lc(s,l);o+=fl(s,e,n,u,i)}else if(u=u0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Lc(s,l++),o+=fl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function za(t,e,n){if(t==null)return t;var r=[],i=0;return fl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function d0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},pl={transition:null},f0={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Yd};function nv(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:za,forEach:function(t,e,n){za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return za(t,function(){e++}),e},toArray:function(t){return za(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=ds;re.Fragment=e0;re.Profiler=n0;re.PureComponent=Kd;re.StrictMode=t0;re.Suspense=o0;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0;re.act=nv;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Y_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Z_.call(e,u)&&!ev.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:la,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:i0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r0,_context:t},t.Consumer=t};re.createElement=tv;re.createFactory=function(t){var e=tv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:s0,render:t}};re.isValidElement=Jd;re.lazy=function(t){return{$$typeof:l0,_payload:{_status:-1,_result:t},_init:d0}};re.memo=function(t,e){return{$$typeof:a0,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};re.unstable_act=nv;re.useCallback=function(t,e){return mt.current.useCallback(t,e)};re.useContext=function(t){return mt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};re.useEffect=function(t,e){return mt.current.useEffect(t,e)};re.useId=function(){return mt.current.useId()};re.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return mt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};re.useRef=function(t){return mt.current.useRef(t)};re.useState=function(t){return mt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return mt.current.useTransition()};re.version="18.3.1";K_.exports=re;var M=K_.exports;const rv=XS(M),p0=JS({__proto__:null,default:rv},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=M,g0=Symbol.for("react.element"),y0=Symbol.for("react.fragment"),_0=Object.prototype.hasOwnProperty,v0=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E0={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_0.call(e,r)&&!E0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:g0,type:t,key:s,ref:o,props:i,_owner:v0.current}}xu.Fragment=y0;xu.jsx=iv;xu.jsxs=iv;G_.exports=xu;var g=G_.exports,xh={},sv={exports:{}},Ct={},ov={exports:{}},av={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Y){var Z=W.length;W.push(Y);e:for(;0<Z;){var ve=Z-1>>>1,Ce=W[ve];if(0<i(Ce,Y))W[ve]=Y,W[Z]=Ce,Z=ve;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Y=W[0],Z=W.pop();if(Z!==Y){W[0]=Z;e:for(var ve=0,Ce=W.length,Fr=Ce>>>1;ve<Fr;){var Nt=2*(ve+1)-1,jr=W[Nt],zt=Nt+1,$n=W[zt];if(0>i(jr,Z))zt<Ce&&0>i($n,jr)?(W[ve]=$n,W[zt]=Z,ve=zt):(W[ve]=jr,W[Nt]=Z,ve=Nt);else if(zt<Ce&&0>i($n,Z))W[ve]=$n,W[zt]=Z,ve=zt;else break e}}return Y}function i(W,Y){var Z=W.sortIndex-Y.sortIndex;return Z!==0?Z:W.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,E=!1,P=!1,N=!1,b=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(W){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=W)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function O(W){if(N=!1,R(W),!P)if(n(u)!==null)P=!0,Cs(j);else{var Y=n(c);Y!==null&&ks(O,Y.startTime-W)}}function j(W,Y){P=!1,N&&(N=!1,T(_),_=-1),E=!0;var Z=m;try{for(R(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||W&&!x());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,m=p.priorityLevel;var Ce=ve(p.expirationTime<=Y);Y=t.unstable_now(),typeof Ce=="function"?p.callback=Ce:p===n(u)&&r(u),R(Y)}else r(u);p=n(u)}if(p!==null)var Fr=!0;else{var Nt=n(c);Nt!==null&&ks(O,Nt.startTime-Y),Fr=!1}return Fr}finally{p=null,m=Z,E=!1}}var z=!1,w=null,_=-1,I=5,A=-1;function x(){return!(t.unstable_now()-A<I)}function C(){if(w!==null){var W=t.unstable_now();A=W;var Y=!0;try{Y=w(!0,W)}finally{Y?S():(z=!1,w=null)}}else z=!1}var S;if(typeof v=="function")S=function(){v(C)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,mn=Ke.port2;Ke.port1.onmessage=C,S=function(){mn.postMessage(null)}}else S=function(){b(C,0)};function Cs(W){w=W,z||(z=!0,S())}function ks(W,Y){_=b(function(){W(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){P||E||(P=!0,Cs(j))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var Z=m;m=Y;try{return W()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Y){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Z=m;m=W;try{return Y()}finally{m=Z}},t.unstable_scheduleCallback=function(W,Y,Z){var ve=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,W){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=Z+Ce,W={id:d++,callback:Y,priorityLevel:W,startTime:Z,expirationTime:Ce,sortIndex:-1},Z>ve?(W.sortIndex=Z,e(c,W),n(u)===null&&W===n(c)&&(N?(T(_),_=-1):N=!0,ks(O,Z-ve))):(W.sortIndex=Ce,e(u,W),P||E||(P=!0,Cs(j))),W},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(W){var Y=m;return function(){var Z=m;m=Y;try{return W.apply(this,arguments)}finally{m=Z}}}})(av);ov.exports=av;var w0=ov.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=M,Pt=w0;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lv=new Set,No={};function di(t,e){Zi(t,e),Zi(t+"Capture",e)}function Zi(t,e){for(No[t]=e,t=0;t<e.length;t++)lv.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ph=Object.prototype.hasOwnProperty,T0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jm={},Xm={};function S0(t){return Ph.call(Xm,t)?!0:Ph.call(Jm,t)?!1:T0.test(t)?Xm[t]=!0:(Jm[t]=!0,!1)}function A0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R0(t,e,n,r){if(e===null||typeof e>"u"||A0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,Zd);Ze[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,Zd);Ze[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,Zd);Ze[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R0(e,n,i,r)&&(n=null),r||i===null?S0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),Pi=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),uv=Symbol.for("react.provider"),cv=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),kh=Symbol.for("react.suspense"),Nh=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),hv=Symbol.for("react.offscreen"),Zm=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=Zm&&t[Zm]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Mc;function ro(t){if(Mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+t}var Uc=!1;function Fc(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function x0(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function bh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ci:return"Fragment";case Pi:return"Portal";case Ch:return"Profiler";case tf:return"StrictMode";case kh:return"Suspense";case Nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cv:return(t.displayName||"Context")+".Consumer";case uv:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:bh(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return bh(t(e))}catch{}}return null}function P0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bh(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function C0(t){var e=dv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $a(t){t._valueTracker||(t._valueTracker=C0(t))}function fv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dh(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pv(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function Oh(t,e){pv(t,e);var n=Tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vh(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vh(t,e,n){(e!=="number"||Vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var io=Array.isArray;function ji(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(io(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function mv(t,e){var n=Tr(e.value),r=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,yv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(t){k0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),po[e]=po[t]})});function _v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||po.hasOwnProperty(t)&&po[t]?(""+e).trim():e+"px"}function vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_v(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var N0=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uh(t,e){if(e){if(N0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Fh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jh=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zh=null,zi=null,Bi=null;function ig(t){if(t=ha(t)){if(typeof zh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=bu(e),zh(t.stateNode,t.type,e))}}function Ev(t){zi?Bi?Bi.push(t):Bi=[t]:zi=t}function wv(){if(zi){var t=zi,e=Bi;if(Bi=zi=null,ig(t),e)for(t=0;t<e.length;t++)ig(e[t])}}function Iv(t,e){return t(e)}function Tv(){}var jc=!1;function Sv(t,e,n){if(jc)return t(e,n);jc=!0;try{return Iv(t,e,n)}finally{jc=!1,(zi!==null||Bi!==null)&&(Tv(),wv())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var r=bu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Bh=!1;if(kn)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){Bh=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{Bh=!1}function b0(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var mo=!1,Ll=null,Ml=!1,$h=null,D0={onError:function(t){mo=!0,Ll=t}};function O0(t,e,n,r,i,s,o,l,u){mo=!1,Ll=null,b0.apply(D0,arguments)}function V0(t,e,n,r,i,s,o,l,u){if(O0.apply(this,arguments),mo){if(mo){var c=Ll;mo=!1,Ll=null}else throw Error(U(198));Ml||(Ml=!0,$h=c)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sg(t){if(fi(t)!==t)throw Error(U(188))}function L0(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sg(i),t;if(s===r)return sg(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Rv(t){return t=L0(t),t!==null?xv(t):null}function xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xv(t);if(e!==null)return e;t=t.sibling}return null}var Pv=Pt.unstable_scheduleCallback,og=Pt.unstable_cancelCallback,M0=Pt.unstable_shouldYield,U0=Pt.unstable_requestPaint,Ne=Pt.unstable_now,F0=Pt.unstable_getCurrentPriorityLevel,of=Pt.unstable_ImmediatePriority,Cv=Pt.unstable_UserBlockingPriority,Ul=Pt.unstable_NormalPriority,j0=Pt.unstable_LowPriority,kv=Pt.unstable_IdlePriority,Pu=null,an=null;function z0(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Pu,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:H0,B0=Math.log,$0=Math.LN2;function H0(t){return t>>>=0,t===0?32:31-(B0(t)/$0|0)|0}var Wa=64,qa=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=so(l):(s&=o,s!==0&&(r=so(s)))}else o=n&~i,o!==0?r=so(o):s!==0&&(r=so(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),i=1<<n,r|=t[n],e&=~i;return r}function W0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=W0(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Hh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nv(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function G0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dv,lf,Ov,Vv,Lv,Wh=!1,Ga=[],or=null,ar=null,lr=null,Oo=new Map,Vo=new Map,tr=[],K0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ag(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function Qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ha(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Q0(t,e,n,r,i){switch(e){case"focusin":return or=Qs(or,t,e,n,r,i),!0;case"dragenter":return ar=Qs(ar,t,e,n,r,i),!0;case"mouseover":return lr=Qs(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oo.set(s,Qs(Oo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vo.set(s,Qs(Vo.get(s)||null,t,e,n,r,i)),!0}return!1}function Mv(t){var e=Qr(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=Av(n),e!==null){t.blockedOn=e,Lv(t.priority,function(){Ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jh=r,n.target.dispatchEvent(r),jh=null}else return e=ha(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function lg(t,e,n){ml(t)&&n.delete(e)}function Y0(){Wh=!1,or!==null&&ml(or)&&(or=null),ar!==null&&ml(ar)&&(ar=null),lr!==null&&ml(lr)&&(lr=null),Oo.forEach(lg),Vo.forEach(lg)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Wh||(Wh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,Y0)))}function Lo(t){function e(i){return Ys(i,t)}if(0<Ga.length){Ys(Ga[0],t);for(var n=1;n<Ga.length;n++){var r=Ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Ys(or,t),ar!==null&&Ys(ar,t),lr!==null&&Ys(lr,t),Oo.forEach(e),Vo.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Mv(n),n.blockedOn===null&&tr.shift()}var $i=Fn.ReactCurrentBatchConfig,jl=!0;function J0(t,e,n,r){var i=ue,s=$i.transition;$i.transition=null;try{ue=1,uf(t,e,n,r)}finally{ue=i,$i.transition=s}}function X0(t,e,n,r){var i=ue,s=$i.transition;$i.transition=null;try{ue=4,uf(t,e,n,r)}finally{ue=i,$i.transition=s}}function uf(t,e,n,r){if(jl){var i=qh(t,e,n,r);if(i===null)Jc(t,e,r,zl,n),ag(t,r);else if(Q0(i,t,e,n,r))r.stopPropagation();else if(ag(t,r),e&4&&-1<K0.indexOf(t)){for(;i!==null;){var s=ha(i);if(s!==null&&Dv(s),s=qh(t,e,n,r),s===null&&Jc(t,e,r,zl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jc(t,e,r,null,n)}}var zl=null;function qh(t,e,n,r){if(zl=null,t=sf(r),t=Qr(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Av(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function Uv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F0()){case of:return 1;case Cv:return 4;case Ul:case j0:return 16;case kv:return 536870912;default:return 16}default:return 16}}var rr=null,cf=null,gl=null;function Fv(){if(gl)return gl;var t,e=cf,n=e.length,r,i="value"in rr?rr.value:rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return gl=i.slice(t,1<r?1-r:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function ug(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:ug,this.isPropagationStopped=ug,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=kt(fs),ca=Ae({},fs,{view:0,detail:0}),Z0=kt(ca),Bc,$c,Js,Cu=Ae({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Bc=t.screenX-Js.screenX,$c=t.screenY-Js.screenY):$c=Bc=0,Js=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),cg=kt(Cu),eA=Ae({},Cu,{dataTransfer:0}),tA=kt(eA),nA=Ae({},ca,{relatedTarget:0}),Hc=kt(nA),rA=Ae({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),iA=kt(rA),sA=Ae({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oA=kt(sA),aA=Ae({},fs,{data:0}),hg=kt(aA),lA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cA[t])?!!e[t]:!1}function df(){return hA}var dA=Ae({},ca,{key:function(t){if(t.key){var e=lA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fA=kt(dA),pA=Ae({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dg=kt(pA),mA=Ae({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),gA=kt(mA),yA=Ae({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_A=kt(yA),vA=Ae({},Cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EA=kt(vA),wA=[9,13,27,32],ff=kn&&"CompositionEvent"in window,go=null;kn&&"documentMode"in document&&(go=document.documentMode);var IA=kn&&"TextEvent"in window&&!go,jv=kn&&(!ff||go&&8<go&&11>=go),fg=" ",pg=!1;function zv(t,e){switch(t){case"keyup":return wA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ki=!1;function TA(t,e){switch(t){case"compositionend":return Bv(e);case"keypress":return e.which!==32?null:(pg=!0,fg);case"textInput":return t=e.data,t===fg&&pg?null:t;default:return null}}function SA(t,e){if(ki)return t==="compositionend"||!ff&&zv(t,e)?(t=Fv(),gl=cf=rr=null,ki=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jv&&e.locale!=="ko"?null:e.data;default:return null}}var AA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AA[t.type]:e==="textarea"}function $v(t,e,n,r){Ev(r),e=Bl(e,"onChange"),0<e.length&&(n=new hf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var yo=null,Mo=null;function RA(t){eE(t,0)}function ku(t){var e=Di(t);if(fv(e))return t}function xA(t,e){if(t==="change")return e}var Hv=!1;if(kn){var Wc;if(kn){var qc="oninput"in document;if(!qc){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),qc=typeof gg.oninput=="function"}Wc=qc}else Wc=!1;Hv=Wc&&(!document.documentMode||9<document.documentMode)}function yg(){yo&&(yo.detachEvent("onpropertychange",Wv),Mo=yo=null)}function Wv(t){if(t.propertyName==="value"&&ku(Mo)){var e=[];$v(e,Mo,t,sf(t)),Sv(RA,e)}}function PA(t,e,n){t==="focusin"?(yg(),yo=e,Mo=n,yo.attachEvent("onpropertychange",Wv)):t==="focusout"&&yg()}function CA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ku(Mo)}function kA(t,e){if(t==="click")return ku(e)}function NA(t,e){if(t==="input"||t==="change")return ku(e)}function bA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:bA;function Uo(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ph.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function _g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vg(t,e){var n=_g(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_g(n)}}function qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gv(){for(var t=window,e=Vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vl(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function DA(t){var e=Gv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qv(n.ownerDocument.documentElement,n)){if(r!==null&&pf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vg(n,s);var o=vg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OA=kn&&"documentMode"in document&&11>=document.documentMode,Ni=null,Gh=null,_o=null,Kh=!1;function Eg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kh||Ni==null||Ni!==Vl(r)||(r=Ni,"selectionStart"in r&&pf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&Uo(_o,r)||(_o=r,r=Bl(Gh,"onSelect"),0<r.length&&(e=new hf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bi={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},Gc={},Kv={};kn&&(Kv=document.createElement("div").style,"AnimationEvent"in window||(delete bi.animationend.animation,delete bi.animationiteration.animation,delete bi.animationstart.animation),"TransitionEvent"in window||delete bi.transitionend.transition);function Nu(t){if(Gc[t])return Gc[t];if(!bi[t])return t;var e=bi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kv)return Gc[t]=e[n];return t}var Qv=Nu("animationend"),Yv=Nu("animationiteration"),Jv=Nu("animationstart"),Xv=Nu("transitionend"),Zv=new Map,wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){Zv.set(t,e),di(e,[t])}for(var Kc=0;Kc<wg.length;Kc++){var Qc=wg[Kc],VA=Qc.toLowerCase(),LA=Qc[0].toUpperCase()+Qc.slice(1);br(VA,"on"+LA)}br(Qv,"onAnimationEnd");br(Yv,"onAnimationIteration");br(Jv,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(Xv,"onTransitionEnd");Zi("onMouseEnter",["mouseout","mouseover"]);Zi("onMouseLeave",["mouseout","mouseover"]);Zi("onPointerEnter",["pointerout","pointerover"]);Zi("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MA=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Ig(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,V0(r,e,void 0,t),t.currentTarget=null}function eE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Ig(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Ig(i,l,c),s=u}}}if(Ml)throw t=$h,Ml=!1,$h=null,t}function pe(t,e){var n=e[Zh];n===void 0&&(n=e[Zh]=new Set);var r=t+"__bubble";n.has(r)||(tE(e,t,2,!1),n.add(r))}function Yc(t,e,n){var r=0;e&&(r|=4),tE(n,t,r,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[Ya]){t[Ya]=!0,lv.forEach(function(n){n!=="selectionchange"&&(MA.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,Yc("selectionchange",!1,e))}}function tE(t,e,n,r){switch(Uv(e)){case 1:var i=J0;break;case 4:i=X0;break;default:i=uf}n=i.bind(null,e,n,t),i=void 0,!Bh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Qr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Sv(function(){var c=s,d=sf(n),p=[];e:{var m=Zv.get(t);if(m!==void 0){var E=hf,P=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":E=fA;break;case"focusin":P="focus",E=Hc;break;case"focusout":P="blur",E=Hc;break;case"beforeblur":case"afterblur":E=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=tA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=gA;break;case Qv:case Yv:case Jv:E=iA;break;case Xv:E=_A;break;case"scroll":E=Z0;break;case"wheel":E=EA;break;case"copy":case"cut":case"paste":E=oA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=dg}var N=(e&4)!==0,b=!N&&t==="scroll",T=N?m!==null?m+"Capture":null:m;N=[];for(var v=c,R;v!==null;){R=v;var O=R.stateNode;if(R.tag===5&&O!==null&&(R=O,T!==null&&(O=Do(v,T),O!=null&&N.push(jo(v,O,R)))),b)break;v=v.return}0<N.length&&(m=new E(m,P,null,n,d),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==jh&&(P=n.relatedTarget||n.fromElement)&&(Qr(P)||P[Nn]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(P=n.relatedTarget||n.toElement,E=c,P=P?Qr(P):null,P!==null&&(b=fi(P),P!==b||P.tag!==5&&P.tag!==6)&&(P=null)):(E=null,P=c),E!==P)){if(N=cg,O="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=dg,O="onPointerLeave",T="onPointerEnter",v="pointer"),b=E==null?m:Di(E),R=P==null?m:Di(P),m=new N(O,v+"leave",E,n,d),m.target=b,m.relatedTarget=R,O=null,Qr(d)===c&&(N=new N(T,v+"enter",P,n,d),N.target=R,N.relatedTarget=b,O=N),b=O,E&&P)t:{for(N=E,T=P,v=0,R=N;R;R=Ti(R))v++;for(R=0,O=T;O;O=Ti(O))R++;for(;0<v-R;)N=Ti(N),v--;for(;0<R-v;)T=Ti(T),R--;for(;v--;){if(N===T||T!==null&&N===T.alternate)break t;N=Ti(N),T=Ti(T)}N=null}else N=null;E!==null&&Tg(p,m,E,N,!1),P!==null&&b!==null&&Tg(p,b,P,N,!0)}}e:{if(m=c?Di(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var j=xA;else if(mg(m))if(Hv)j=NA;else{j=CA;var z=PA}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=kA);if(j&&(j=j(t,c))){$v(p,j,n,d);break e}z&&z(t,m,c),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&Vh(m,"number",m.value)}switch(z=c?Di(c):window,t){case"focusin":(mg(z)||z.contentEditable==="true")&&(Ni=z,Gh=c,_o=null);break;case"focusout":_o=Gh=Ni=null;break;case"mousedown":Kh=!0;break;case"contextmenu":case"mouseup":case"dragend":Kh=!1,Eg(p,n,d);break;case"selectionchange":if(OA)break;case"keydown":case"keyup":Eg(p,n,d)}var w;if(ff)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ki?zv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(jv&&n.locale!=="ko"&&(ki||_!=="onCompositionStart"?_==="onCompositionEnd"&&ki&&(w=Fv()):(rr=d,cf="value"in rr?rr.value:rr.textContent,ki=!0)),z=Bl(c,_),0<z.length&&(_=new hg(_,t,null,n,d),p.push({event:_,listeners:z}),w?_.data=w:(w=Bv(n),w!==null&&(_.data=w)))),(w=IA?TA(t,n):SA(t,n))&&(c=Bl(c,"onBeforeInput"),0<c.length&&(d=new hg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=w))}eE(p,e)})}function jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Do(t,n),s!=null&&r.unshift(jo(t,s,i)),s=Do(t,e),s!=null&&r.push(jo(t,s,i))),t=t.return}return r}function Ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Do(n,s),u!=null&&o.unshift(jo(n,u,l))):i||(u=Do(n,s),u!=null&&o.push(jo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var UA=/\r\n?/g,FA=/\u0000|\uFFFD/g;function Sg(t){return(typeof t=="string"?t:""+t).replace(UA,`
`).replace(FA,"")}function Ja(t,e,n){if(e=Sg(e),Sg(t)!==e&&n)throw Error(U(425))}function $l(){}var Qh=null,Yh=null;function Jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xh=typeof setTimeout=="function"?setTimeout:void 0,jA=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,zA=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(t){return Ag.resolve(null).then(t).catch(BA)}:Xh;function BA(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Lo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lo(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),sn="__reactFiber$"+ps,zo="__reactProps$"+ps,Nn="__reactContainer$"+ps,Zh="__reactEvents$"+ps,$A="__reactListeners$"+ps,HA="__reactHandles$"+ps;function Qr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rg(t);t!==null;){if(n=t[sn])return n;t=Rg(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[sn]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function bu(t){return t[zo]||null}var ed=[],Oi=-1;function Dr(t){return{current:t}}function ge(t){0>Oi||(t.current=ed[Oi],ed[Oi]=null,Oi--)}function de(t,e){Oi++,ed[Oi]=t.current,t.current=e}var Sr={},lt=Dr(Sr),Et=Dr(!1),ri=Sr;function es(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function Hl(){ge(Et),ge(lt)}function xg(t,e,n){if(lt.current!==Sr)throw Error(U(168));de(lt,e),de(Et,n)}function nE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,P0(t)||"Unknown",i));return Ae({},n,r)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,ri=lt.current,de(lt,t),de(Et,Et.current),!0}function Pg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=nE(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,ge(Et),ge(lt),de(lt,t)):ge(Et),de(Et,n)}var yn=null,Du=!1,Zc=!1;function rE(t){yn===null?yn=[t]:yn.push(t)}function WA(t){Du=!0,rE(t)}function Or(){if(!Zc&&yn!==null){Zc=!0;var t=0,e=ue;try{var n=yn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,Du=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),Pv(of,Or),i}finally{ue=e,Zc=!1}}return null}var Vi=[],Li=0,ql=null,Gl=0,bt=[],Dt=0,ii=null,In=1,Tn="";function qr(t,e){Vi[Li++]=Gl,Vi[Li++]=ql,ql=t,Gl=e}function iE(t,e,n){bt[Dt++]=In,bt[Dt++]=Tn,bt[Dt++]=ii,ii=t;var r=In;t=Tn;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var s=32-Kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-Kt(e)+i|n<<i|r,Tn=s+t}else In=1<<s|n<<i|r,Tn=t}function mf(t){t.return!==null&&(qr(t,1),iE(t,1,0))}function gf(t){for(;t===ql;)ql=Vi[--Li],Vi[Li]=null,Gl=Vi[--Li],Vi[Li]=null;for(;t===ii;)ii=bt[--Dt],bt[Dt]=null,Tn=bt[--Dt],bt[Dt]=null,In=bt[--Dt],bt[Dt]=null}var xt=null,Rt=null,Ee=!1,Wt=null;function sE(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,Rt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ii!==null?{id:In,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,Rt=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(Ee){var e=Rt;if(e){var n=e;if(!Cg(t,e)){if(td(t))throw Error(U(418));e=ur(n.nextSibling);var r=xt;e&&Cg(t,e)?sE(r,n):(t.flags=t.flags&-4097|2,Ee=!1,xt=t)}}else{if(td(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ee=!1,xt=t}}}function kg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function Xa(t){if(t!==xt)return!1;if(!Ee)return kg(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jh(t.type,t.memoizedProps)),e&&(e=Rt)){if(td(t))throw oE(),Error(U(418));for(;e;)sE(t,e),e=ur(e.nextSibling)}if(kg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=xt?ur(t.stateNode.nextSibling):null;return!0}function oE(){for(var t=Rt;t;)t=ur(t.nextSibling)}function ts(){Rt=xt=null,Ee=!1}function yf(t){Wt===null?Wt=[t]:Wt.push(t)}var qA=Fn.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ng(t){var e=t._init;return e(t._payload)}function aE(t){function e(T,v){if(t){var R=T.deletions;R===null?(T.deletions=[v],T.flags|=16):R.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=fr(T,v),T.index=0,T.sibling=null,T}function s(T,v,R){return T.index=R,t?(R=T.alternate,R!==null?(R=R.index,R<v?(T.flags|=2,v):R):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,v,R,O){return v===null||v.tag!==6?(v=oh(R,T.mode,O),v.return=T,v):(v=i(v,R),v.return=T,v)}function u(T,v,R,O){var j=R.type;return j===Ci?d(T,v,R.props.children,O,R.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Zn&&Ng(j)===v.type)?(O=i(v,R.props),O.ref=Xs(T,v,R),O.return=T,O):(O=Sl(R.type,R.key,R.props,null,T.mode,O),O.ref=Xs(T,v,R),O.return=T,O)}function c(T,v,R,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=ah(R,T.mode,O),v.return=T,v):(v=i(v,R.children||[]),v.return=T,v)}function d(T,v,R,O,j){return v===null||v.tag!==7?(v=ti(R,T.mode,O,j),v.return=T,v):(v=i(v,R),v.return=T,v)}function p(T,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return v=oh(""+v,T.mode,R),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ba:return R=Sl(v.type,v.key,v.props,null,T.mode,R),R.ref=Xs(T,null,v),R.return=T,R;case Pi:return v=ah(v,T.mode,R),v.return=T,v;case Zn:var O=v._init;return p(T,O(v._payload),R)}if(io(v)||Gs(v))return v=ti(v,T.mode,R,null),v.return=T,v;Za(T,v)}return null}function m(T,v,R,O){var j=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return j!==null?null:l(T,v,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ba:return R.key===j?u(T,v,R,O):null;case Pi:return R.key===j?c(T,v,R,O):null;case Zn:return j=R._init,m(T,v,j(R._payload),O)}if(io(R)||Gs(R))return j!==null?null:d(T,v,R,O,null);Za(T,R)}return null}function E(T,v,R,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(R)||null,l(v,T,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ba:return T=T.get(O.key===null?R:O.key)||null,u(v,T,O,j);case Pi:return T=T.get(O.key===null?R:O.key)||null,c(v,T,O,j);case Zn:var z=O._init;return E(T,v,R,z(O._payload),j)}if(io(O)||Gs(O))return T=T.get(R)||null,d(v,T,O,j,null);Za(v,O)}return null}function P(T,v,R,O){for(var j=null,z=null,w=v,_=v=0,I=null;w!==null&&_<R.length;_++){w.index>_?(I=w,w=null):I=w.sibling;var A=m(T,w,R[_],O);if(A===null){w===null&&(w=I);break}t&&w&&A.alternate===null&&e(T,w),v=s(A,v,_),z===null?j=A:z.sibling=A,z=A,w=I}if(_===R.length)return n(T,w),Ee&&qr(T,_),j;if(w===null){for(;_<R.length;_++)w=p(T,R[_],O),w!==null&&(v=s(w,v,_),z===null?j=w:z.sibling=w,z=w);return Ee&&qr(T,_),j}for(w=r(T,w);_<R.length;_++)I=E(w,T,_,R[_],O),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?_:I.key),v=s(I,v,_),z===null?j=I:z.sibling=I,z=I);return t&&w.forEach(function(x){return e(T,x)}),Ee&&qr(T,_),j}function N(T,v,R,O){var j=Gs(R);if(typeof j!="function")throw Error(U(150));if(R=j.call(R),R==null)throw Error(U(151));for(var z=j=null,w=v,_=v=0,I=null,A=R.next();w!==null&&!A.done;_++,A=R.next()){w.index>_?(I=w,w=null):I=w.sibling;var x=m(T,w,A.value,O);if(x===null){w===null&&(w=I);break}t&&w&&x.alternate===null&&e(T,w),v=s(x,v,_),z===null?j=x:z.sibling=x,z=x,w=I}if(A.done)return n(T,w),Ee&&qr(T,_),j;if(w===null){for(;!A.done;_++,A=R.next())A=p(T,A.value,O),A!==null&&(v=s(A,v,_),z===null?j=A:z.sibling=A,z=A);return Ee&&qr(T,_),j}for(w=r(T,w);!A.done;_++,A=R.next())A=E(w,T,_,A.value,O),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?_:A.key),v=s(A,v,_),z===null?j=A:z.sibling=A,z=A);return t&&w.forEach(function(C){return e(T,C)}),Ee&&qr(T,_),j}function b(T,v,R,O){if(typeof R=="object"&&R!==null&&R.type===Ci&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Ba:e:{for(var j=R.key,z=v;z!==null;){if(z.key===j){if(j=R.type,j===Ci){if(z.tag===7){n(T,z.sibling),v=i(z,R.props.children),v.return=T,T=v;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Zn&&Ng(j)===z.type){n(T,z.sibling),v=i(z,R.props),v.ref=Xs(T,z,R),v.return=T,T=v;break e}n(T,z);break}else e(T,z);z=z.sibling}R.type===Ci?(v=ti(R.props.children,T.mode,O,R.key),v.return=T,T=v):(O=Sl(R.type,R.key,R.props,null,T.mode,O),O.ref=Xs(T,v,R),O.return=T,T=O)}return o(T);case Pi:e:{for(z=R.key;v!==null;){if(v.key===z)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){n(T,v.sibling),v=i(v,R.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=ah(R,T.mode,O),v.return=T,T=v}return o(T);case Zn:return z=R._init,b(T,v,z(R._payload),O)}if(io(R))return P(T,v,R,O);if(Gs(R))return N(T,v,R,O);Za(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,R),v.return=T,T=v):(n(T,v),v=oh(R,T.mode,O),v.return=T,T=v),o(T)):n(T,v)}return b}var ns=aE(!0),lE=aE(!1),Kl=Dr(null),Ql=null,Mi=null,_f=null;function vf(){_f=Mi=Ql=null}function Ef(t){var e=Kl.current;ge(Kl),t._currentValue=e}function rd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hi(t,e){Ql=t,_f=Mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(_f!==t)if(t={context:t,memoizedValue:e,next:null},Mi===null){if(Ql===null)throw Error(U(308));Mi=t,Ql.dependencies={lanes:0,firstContext:t}}else Mi=Mi.next=t;return e}var Yr=null;function wf(t){Yr===null?Yr=[t]:Yr.push(t)}function uE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wf(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function If(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,wf(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,af(t,n)}}function bg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(m=e,E=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){p=P.call(E,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,m=typeof P=="function"?P.call(E,p,m):P,m==null)break e;p=Ae({},p,m);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=p):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oi|=o,t.lanes=o,t.memoizedState=p}}function Dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var da={},ln=Dr(da),Bo=Dr(da),$o=Dr(da);function Jr(t){if(t===da)throw Error(U(174));return t}function Tf(t,e){switch(de($o,e),de(Bo,t),de(ln,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mh(e,t)}ge(ln),de(ln,e)}function rs(){ge(ln),ge(Bo),ge($o)}function hE(t){Jr($o.current);var e=Jr(ln.current),n=Mh(e,t.type);e!==n&&(de(Bo,t),de(ln,n))}function Sf(t){Bo.current===t&&(ge(ln),ge(Bo))}var Ie=Dr(0);function Jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eh=[];function Af(){for(var t=0;t<eh.length;t++)eh[t]._workInProgressVersionPrimary=null;eh.length=0}var vl=Fn.ReactCurrentDispatcher,th=Fn.ReactCurrentBatchConfig,si=0,Se=null,Fe=null,He=null,Xl=!1,vo=!1,Ho=0,GA=0;function nt(){throw Error(U(321))}function Rf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function xf(t,e,n,r,i,s){if(si=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?JA:XA,t=n(r,i),vo){s=0;do{if(vo=!1,Ho=0,25<=s)throw Error(U(301));s+=1,He=Fe=null,e.updateQueue=null,vl.current=ZA,t=n(r,i)}while(vo)}if(vl.current=Zl,e=Fe!==null&&Fe.next!==null,si=0,He=Fe=Se=null,Xl=!1,e)throw Error(U(300));return t}function Pf(){var t=Ho!==0;return Ho=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Se.memoizedState=He=t:He=He.next=t,He}function Ft(){if(Fe===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=He===null?Se.memoizedState:He.next;if(e!==null)He=e,Fe=t;else{if(t===null)throw Error(U(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},He===null?Se.memoizedState=He=t:He=He.next=t}return He}function Wo(t,e){return typeof e=="function"?e(t):e}function nh(t){var e=Ft(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((si&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Se.lanes|=d,oi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Jt(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rh(t){var e=Ft(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jt(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dE(){}function fE(t,e){var n=Se,r=Ft(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Cf(gE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,qo(9,mE.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(U(349));si&30||pE(n,e,i)}return i}function pE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mE(t,e,n,r){e.value=n,e.getSnapshot=r,yE(e)&&_E(t)}function gE(t,e,n){return n(function(){yE(e)&&_E(t)})}function yE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function _E(t){var e=bn(t,1);e!==null&&Qt(e,t,1,-1)}function Og(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},e.queue=t,t=t.dispatch=YA.bind(null,Se,t),[e.memoizedState,t]}function qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vE(){return Ft().memoizedState}function El(t,e,n,r){var i=nn();Se.flags|=t,i.memoizedState=qo(1|e,n,void 0,r===void 0?null:r)}function Ou(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Rf(r,o.deps)){i.memoizedState=qo(e,n,s,r);return}}Se.flags|=t,i.memoizedState=qo(1|e,n,s,r)}function Vg(t,e){return El(8390656,8,t,e)}function Cf(t,e){return Ou(2048,8,t,e)}function EE(t,e){return Ou(4,2,t,e)}function wE(t,e){return Ou(4,4,t,e)}function IE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function TE(t,e,n){return n=n!=null?n.concat([t]):null,Ou(4,4,IE.bind(null,e,t),n)}function kf(){}function SE(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function AE(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function RE(t,e,n){return si&21?(Jt(n,e)||(n=Nv(),Se.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function KA(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=th.transition;th.transition={};try{t(!1),e()}finally{ue=n,th.transition=r}}function xE(){return Ft().memoizedState}function QA(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},PE(t))CE(e,n);else if(n=uE(t,e,n,r),n!==null){var i=ft();Qt(n,t,r,i),kE(n,e,r)}}function YA(t,e,n){var r=dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(PE(t))CE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Jt(l,o)){var u=e.interleaved;u===null?(i.next=i,wf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=uE(t,e,i,r),n!==null&&(i=ft(),Qt(n,t,r,i),kE(n,e,r))}}function PE(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function CE(t,e){vo=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,af(t,n)}}var Zl={readContext:Ut,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},JA={readContext:Ut,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Vg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,IE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QA.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:Og,useDebugValue:kf,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=Og(!1),e=t[0];return t=KA.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=nn();if(Ee){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),qe===null)throw Error(U(349));si&30||pE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Vg(gE.bind(null,r,s,t),[t]),r.flags|=2048,qo(9,mE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=qe.identifierPrefix;if(Ee){var n=Tn,r=In;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XA={readContext:Ut,useCallback:SE,useContext:Ut,useEffect:Cf,useImperativeHandle:TE,useInsertionEffect:EE,useLayoutEffect:wE,useMemo:AE,useReducer:nh,useRef:vE,useState:function(){return nh(Wo)},useDebugValue:kf,useDeferredValue:function(t){var e=Ft();return RE(e,Fe.memoizedState,t)},useTransition:function(){var t=nh(Wo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:dE,useSyncExternalStore:fE,useId:xE,unstable_isNewReconciler:!1},ZA={readContext:Ut,useCallback:SE,useContext:Ut,useEffect:Cf,useImperativeHandle:TE,useInsertionEffect:EE,useLayoutEffect:wE,useMemo:AE,useReducer:rh,useRef:vE,useState:function(){return rh(Wo)},useDebugValue:kf,useDeferredValue:function(t){var e=Ft();return Fe===null?e.memoizedState=t:RE(e,Fe.memoizedState,t)},useTransition:function(){var t=rh(Wo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:dE,useSyncExternalStore:fE,useId:xE,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function id(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vu={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=dr(t),s=xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Qt(e,t,i,r),_l(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=dr(t),s=xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Qt(e,t,i,r),_l(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=dr(t),i=xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(Qt(e,t,r,n),_l(e,t,r))}};function Lg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Uo(n,r)||!Uo(i,s):!0}function NE(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=wt(e)?ri:lt.current,r=e.contextTypes,s=(r=r!=null)?es(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vu.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},If(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=wt(e)?ri:lt.current,i.context=es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(id(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vu.enqueueReplaceState(i,i.state,null),Yl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function is(t,e){try{var n="",r=e;do n+=x0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ih(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function od(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eR=typeof WeakMap=="function"?WeakMap:Map;function bE(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tu||(tu=!0,gd=r),od(t,e)},n}function DE(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){od(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){od(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ug(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pR.bind(null,t,e,n),e.then(t,t))}function Fg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var tR=Fn.ReactCurrentOwner,vt=!1;function dt(t,e,n,r){e.child=t===null?lE(e,null,n,r):ns(e,t.child,n,r)}function zg(t,e,n,r,i){n=n.render;var s=e.ref;return Hi(e,i),r=xf(t,e,n,r,s,i),n=Pf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(Ee&&n&&mf(e),e.flags|=1,dt(t,e,r,i),e.child)}function Bg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Uf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,OE(t,e,s,r,i)):(t=Sl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function OE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Uo(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return ad(t,e,n,r,i)}function VE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Fi,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Fi,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Fi,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Fi,At),At|=r;return dt(t,e,i,n),e.child}function LE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ad(t,e,n,r,i){var s=wt(n)?ri:lt.current;return s=es(e,s),Hi(e,i),n=xf(t,e,n,r,s,i),r=Pf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(Ee&&r&&mf(e),e.flags|=1,dt(t,e,n,i),e.child)}function $g(t,e,n,r,i){if(wt(n)){var s=!0;Wl(e)}else s=!1;if(Hi(e,i),e.stateNode===null)wl(t,e),NE(e,n,r),sd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ut(c):(c=wt(n)?ri:lt.current,c=es(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Mg(e,o,r,c),er=!1;var m=e.memoizedState;o.state=m,Yl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Et.current||er?(typeof d=="function"&&(id(e,n,d,r),u=e.memoizedState),(l=er||Lg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:$t(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ut(u):(u=wt(n)?ri:lt.current,u=es(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Mg(e,o,r,u),er=!1,m=e.memoizedState,o.state=m,Yl(e,r,o,i);var P=e.memoizedState;l!==p||m!==P||Et.current||er?(typeof E=="function"&&(id(e,n,E,r),P=e.memoizedState),(c=er||Lg(e,n,c,r,m,P,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return ld(t,e,n,r,s,i)}function ld(t,e,n,r,i,s){LE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Pg(e,n,!1),Dn(t,e,s);r=e.stateNode,tR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ns(e,t.child,null,s),e.child=ns(e,null,l,s)):dt(t,e,l,s),e.memoizedState=r.state,i&&Pg(e,n,!0),e.child}function ME(t){var e=t.stateNode;e.pendingContext?xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xg(t,e.context,!1),Tf(t,e.containerInfo)}function Hg(t,e,n,r,i){return ts(),yf(i),e.flags|=256,dt(t,e,n,r),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function UE(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Ie,i&1),t===null)return nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uu(o,r,0,null),t=ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cd(n),e.memoizedState=ud,t):Nf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=fr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?cd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ud,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nf(t,e){return e=Uu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,r){return r!==null&&yf(r),ns(e,t.child,null,n),t=Nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ih(Error(U(422))),el(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Uu({mode:"visible",children:r.children},i,0,null),s=ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ns(e,t.child,null,o),e.child.memoizedState=cd(o),e.memoizedState=ud,s);if(!(e.mode&1))return el(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=ih(s,r,void 0),el(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),Qt(r,t,i,-1))}return Mf(),r=ih(Error(U(421))),el(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rt=ur(i.nextSibling),xt=e,Ee=!0,Wt=null,t!==null&&(bt[Dt++]=In,bt[Dt++]=Tn,bt[Dt++]=ii,In=t.id,Tn=t.overflow,ii=e),e=Nf(e,r.children),e.flags|=4096,e)}function Wg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rd(t.return,e,n)}function sh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function FE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wg(t,n,e);else if(t.tag===19)Wg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Jl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),sh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Jl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}sh(e,!0,n,null,s);break;case"together":sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rR(t,e,n){switch(e.tag){case 3:ME(e),ts();break;case 5:hE(e);break;case 1:wt(e.type)&&Wl(e);break;case 4:Tf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Kl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?UE(t,e,n):(de(Ie,Ie.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);de(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return FE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,VE(t,e,n)}return Dn(t,e,n)}var jE,hd,zE,BE;jE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hd=function(){};zE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jr(ln.current);var s=null;switch(n){case"input":i=Dh(t,i),r=Dh(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Lh(t,i),r=Lh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$l)}Uh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(No.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(No.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};BE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zs(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iR(t,e,n){var r=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return wt(e.type)&&Hl(),rt(e),null;case 3:return r=e.stateNode,rs(),ge(Et),ge(lt),Af(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(vd(Wt),Wt=null))),hd(t,e),rt(e),null;case 5:Sf(e);var i=Jr($o.current);if(n=e.type,t!==null&&e.stateNode!=null)zE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return rt(e),null}if(t=Jr(ln.current),Xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sn]=e,r[zo]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<oo.length;i++)pe(oo[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":eg(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":ng(r,s),pe("invalid",r)}Uh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ja(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ja(r.textContent,l,t),i=["children",""+l]):No.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":$a(r),tg(r,s,!0);break;case"textarea":$a(r),rg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[zo]=r,jE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fh(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<oo.length;i++)pe(oo[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":eg(t,r),i=Dh(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),pe("invalid",t);break;case"textarea":ng(t,r),i=Lh(t,r),pe("invalid",t);break;default:i=r}Uh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?vv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bo(t,u):typeof u=="number"&&bo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&ef(t,s,u,o))}switch(n){case"input":$a(t),tg(t,r,!1);break;case"textarea":$a(t),rg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ji(t,!!r.multiple,s,!1):r.defaultValue!=null&&ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)BE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Jr($o.current),Jr(ln.current),Xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:Ja(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return rt(e),null;case 13:if(ge(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Rt!==null&&e.mode&1&&!(e.flags&128))oE(),ts(),e.flags|=98560,s=!1;else if(s=Xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[sn]=e}else ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else Wt!==null&&(vd(Wt),Wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?je===0&&(je=3):Mf())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return rs(),hd(t,e),t===null&&Fo(e.stateNode.containerInfo),rt(e),null;case 10:return Ef(e.type._context),rt(e),null;case 17:return wt(e.type)&&Hl(),rt(e),null;case 19:if(ge(Ie),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zs(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Jl(t),o!==null){for(e.flags|=128,Zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>ss&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Jl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return rt(e),null}else 2*Ne()-s.renderingStartTime>ss&&n!==1073741824&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,de(Ie,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return Lf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function sR(t,e){switch(gf(e),e.tag){case 1:return wt(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rs(),ge(Et),ge(lt),Af(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sf(e),null;case 13:if(ge(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(Ie),null;case 4:return rs(),null;case 10:return Ef(e.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var tl=!1,ot=!1,oR=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function dd(t,e,n){try{n()}catch(r){xe(t,e,r)}}var qg=!1;function aR(t,e){if(Qh=jl,t=Gv(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)m=p,p=E;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yh={focusedElem:t,selectionRange:n},jl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,b=P.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?N:$t(e.type,N),b);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){xe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return P=qg,qg=!1,P}function Eo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dd(e,n,s)}i=i.next}while(i!==r)}}function Lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $E(t){var e=t.alternate;e!==null&&(t.alternate=null,$E(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[zo],delete e[Zh],delete e[$A],delete e[HA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function HE(t){return t.tag===5||t.tag===3||t.tag===4}function Gg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||HE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(r!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}function md(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}var Qe=null,Ht=!1;function Yn(t,e,n){for(n=n.child;n!==null;)WE(t,e,n),n=n.sibling}function WE(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Pu,n)}catch{}switch(n.tag){case 5:ot||Ui(n,e);case 6:var r=Qe,i=Ht;Qe=null,Yn(t,e,n),Qe=r,Ht=i,Qe!==null&&(Ht?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Ht?(t=Qe,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),Lo(t)):Xc(Qe,n.stateNode));break;case 4:r=Qe,i=Ht,Qe=n.stateNode.containerInfo,Ht=!0,Yn(t,e,n),Qe=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dd(n,e,o),i=i.next}while(i!==r)}Yn(t,e,n);break;case 1:if(!ot&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Yn(t,e,n),ot=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function Kg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oR),e.forEach(function(r){var i=gR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,Ht=!1;break e;case 3:Qe=l.stateNode.containerInfo,Ht=!0;break e;case 4:Qe=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(Qe===null)throw Error(U(160));WE(s,o,i),Qe=null,Ht=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qE(e,t),e=e.sibling}function qE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),tn(t),r&4){try{Eo(3,t,t.return),Lu(3,t)}catch(N){xe(t,t.return,N)}try{Eo(5,t,t.return)}catch(N){xe(t,t.return,N)}}break;case 1:Bt(e,t),tn(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if(Bt(e,t),tn(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var i=t.stateNode;try{bo(i,"")}catch(N){xe(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&pv(i,s),Fh(l,o);var c=Fh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?vv(i,p):d==="dangerouslySetInnerHTML"?yv(i,p):d==="children"?bo(i,p):ef(i,d,p,c)}switch(l){case"input":Oh(i,s);break;case"textarea":mv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?ji(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?ji(i,!!s.multiple,s.defaultValue,!0):ji(i,!!s.multiple,s.multiple?[]:"",!1))}i[zo]=s}catch(N){xe(t,t.return,N)}}break;case 6:if(Bt(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){xe(t,t.return,N)}}break;case 3:if(Bt(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(N){xe(t,t.return,N)}break;case 4:Bt(e,t),tn(t);break;case 13:Bt(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Of=Ne())),r&4&&Kg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(c=ot)||d,Bt(e,t),ot=c):Bt(e,t),tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(p=q=d;q!==null;){switch(m=q,E=m.child,m.tag){case 0:case 11:case 14:case 15:Eo(4,m,m.return);break;case 1:Ui(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){xe(r,n,N)}}break;case 5:Ui(m,m.return);break;case 22:if(m.memoizedState!==null){Yg(p);continue}}E!==null?(E.return=m,q=E):Yg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=_v("display",o))}catch(N){xe(t,t.return,N)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){xe(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Bt(e,t),tn(t),r&4&&Kg(t);break;case 21:break;default:Bt(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(HE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bo(i,""),r.flags&=-33);var s=Gg(t);md(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Gg(t);pd(t,l,o);break;default:throw Error(U(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lR(t,e,n){q=t,GE(t)}function GE(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||tl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ot;l=tl;var c=ot;if(tl=o,(ot=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Jg(i):u!==null?(u.return=o,q=u):Jg(i);for(;s!==null;)q=s,GE(s),s=s.sibling;q=i,tl=l,ot=c}Qg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Qg(t)}}function Qg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||Lu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Lo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ot||e.flags&512&&fd(e)}catch(m){xe(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Yg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Jg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lu(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{fd(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{fd(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var uR=Math.ceil,eu=Fn.ReactCurrentDispatcher,bf=Fn.ReactCurrentOwner,Mt=Fn.ReactCurrentBatchConfig,oe=0,qe=null,Ve=null,Xe=0,At=0,Fi=Dr(0),je=0,Go=null,oi=0,Mu=0,Df=0,wo=null,_t=null,Of=0,ss=1/0,gn=null,tu=!1,gd=null,hr=null,nl=!1,ir=null,nu=0,Io=0,yd=null,Il=-1,Tl=0;function ft(){return oe&6?Ne():Il!==-1?Il:Il=Ne()}function dr(t){return t.mode&1?oe&2&&Xe!==0?Xe&-Xe:qA.transition!==null?(Tl===0&&(Tl=Nv()),Tl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Uv(t.type)),t):1}function Qt(t,e,n,r){if(50<Io)throw Io=0,yd=null,Error(U(185));ua(t,n,r),(!(oe&2)||t!==qe)&&(t===qe&&(!(oe&2)&&(Mu|=n),je===4&&nr(t,Xe)),It(t,r),n===1&&oe===0&&!(e.mode&1)&&(ss=Ne()+500,Du&&Or()))}function It(t,e){var n=t.callbackNode;q0(t,e);var r=Fl(t,t===qe?Xe:0);if(r===0)n!==null&&og(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&og(n),e===1)t.tag===0?WA(Xg.bind(null,t)):rE(Xg.bind(null,t)),zA(function(){!(oe&6)&&Or()}),n=null;else{switch(bv(r)){case 1:n=of;break;case 4:n=Cv;break;case 16:n=Ul;break;case 536870912:n=kv;break;default:n=Ul}n=tw(n,KE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function KE(t,e){if(Il=-1,Tl=0,oe&6)throw Error(U(327));var n=t.callbackNode;if(Wi()&&t.callbackNode!==n)return null;var r=Fl(t,t===qe?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ru(t,r);else{e=r;var i=oe;oe|=2;var s=YE();(qe!==t||Xe!==e)&&(gn=null,ss=Ne()+500,ei(t,e));do try{dR();break}catch(l){QE(t,l)}while(!0);vf(),eu.current=s,oe=i,Ve!==null?e=0:(qe=null,Xe=0,e=je)}if(e!==0){if(e===2&&(i=Hh(t),i!==0&&(r=i,e=_d(t,i))),e===1)throw n=Go,ei(t,0),nr(t,r),It(t,Ne()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!cR(i)&&(e=ru(t,r),e===2&&(s=Hh(t),s!==0&&(r=s,e=_d(t,s))),e===1))throw n=Go,ei(t,0),nr(t,r),It(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Gr(t,_t,gn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=Of+500-Ne(),10<e)){if(Fl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xh(Gr.bind(null,t,_t,gn),e);break}Gr(t,_t,gn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uR(r/1960))-r,10<r){t.timeoutHandle=Xh(Gr.bind(null,t,_t,gn),r);break}Gr(t,_t,gn);break;case 5:Gr(t,_t,gn);break;default:throw Error(U(329))}}}return It(t,Ne()),t.callbackNode===n?KE.bind(null,t):null}function _d(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(ei(t,e).flags|=256),t=ru(t,e),t!==2&&(e=_t,_t=n,e!==null&&vd(e)),t}function vd(t){_t===null?_t=t:_t.push.apply(_t,t)}function cR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Df,e&=~Mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function Xg(t){if(oe&6)throw Error(U(327));Wi();var e=Fl(t,0);if(!(e&1))return It(t,Ne()),null;var n=ru(t,e);if(t.tag!==0&&n===2){var r=Hh(t);r!==0&&(e=r,n=_d(t,r))}if(n===1)throw n=Go,ei(t,0),nr(t,e),It(t,Ne()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,_t,gn),It(t,Ne()),null}function Vf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ss=Ne()+500,Du&&Or())}}function ai(t){ir!==null&&ir.tag===0&&!(oe&6)&&Wi();var e=oe;oe|=1;var n=Mt.transition,r=ue;try{if(Mt.transition=null,ue=1,t)return t()}finally{ue=r,Mt.transition=n,oe=e,!(oe&6)&&Or()}}function Lf(){At=Fi.current,ge(Fi)}function ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jA(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(gf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hl();break;case 3:rs(),ge(Et),ge(lt),Af();break;case 5:Sf(r);break;case 4:rs();break;case 13:ge(Ie);break;case 19:ge(Ie);break;case 10:Ef(r.type._context);break;case 22:case 23:Lf()}n=n.return}if(qe=t,Ve=t=fr(t.current,null),Xe=At=e,je=0,Go=null,Df=Mu=oi=0,_t=wo=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yr=null}return t}function QE(t,e){do{var n=Ve;try{if(vf(),vl.current=Zl,Xl){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xl=!1}if(si=0,He=Fe=Se=null,vo=!1,Ho=0,bf.current=null,n===null||n.return===null){je=1,Go=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=Fg(o);if(E!==null){E.flags&=-257,jg(E,o,l,s,e),E.mode&1&&Ug(s,c,e),e=E,u=c;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Ug(s,c,e),Mf();break e}u=Error(U(426))}}else if(Ee&&l.mode&1){var b=Fg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),jg(b,o,l,s,e),yf(is(u,l));break e}}s=u=is(u,l),je!==4&&(je=2),wo===null?wo=[s]:wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=bE(s,u,e);bg(s,T);break e;case 1:l=u;var v=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(hr===null||!hr.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=DE(s,l,e);bg(s,O);break e}}s=s.return}while(s!==null)}XE(n)}catch(j){e=j,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function YE(){var t=eu.current;return eu.current=Zl,t===null?Zl:t}function Mf(){(je===0||je===3||je===2)&&(je=4),qe===null||!(oi&268435455)&&!(Mu&268435455)||nr(qe,Xe)}function ru(t,e){var n=oe;oe|=2;var r=YE();(qe!==t||Xe!==e)&&(gn=null,ei(t,e));do try{hR();break}catch(i){QE(t,i)}while(!0);if(vf(),oe=n,eu.current=r,Ve!==null)throw Error(U(261));return qe=null,Xe=0,je}function hR(){for(;Ve!==null;)JE(Ve)}function dR(){for(;Ve!==null&&!M0();)JE(Ve)}function JE(t){var e=ew(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?XE(t):Ve=e,bf.current=null}function XE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sR(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Ve=null;return}}else if(n=iR(n,e,At),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);je===0&&(je=5)}function Gr(t,e,n){var r=ue,i=Mt.transition;try{Mt.transition=null,ue=1,fR(t,e,n,r)}finally{Mt.transition=i,ue=r}return null}function fR(t,e,n,r){do Wi();while(ir!==null);if(oe&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(G0(t,s),t===qe&&(Ve=qe=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,tw(Ul,function(){return Wi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=ue;ue=1;var l=oe;oe|=4,bf.current=null,aR(t,n),qE(n,t),DA(Yh),jl=!!Qh,Yh=Qh=null,t.current=n,lR(n),U0(),oe=l,ue=o,Mt.transition=s}else t.current=n;if(nl&&(nl=!1,ir=t,nu=i),s=t.pendingLanes,s===0&&(hr=null),z0(n.stateNode),It(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tu)throw tu=!1,t=gd,gd=null,t;return nu&1&&t.tag!==0&&Wi(),s=t.pendingLanes,s&1?t===yd?Io++:(Io=0,yd=t):Io=0,Or(),null}function Wi(){if(ir!==null){var t=bv(nu),e=Mt.transition,n=ue;try{if(Mt.transition=null,ue=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,nu=0,oe&6)throw Error(U(331));var i=oe;for(oe|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:Eo(8,d,s)}var p=d.child;if(p!==null)p.return=d,q=p;else for(;q!==null;){d=q;var m=d.sibling,E=d.return;if($E(d),d===c){q=null;break}if(m!==null){m.return=E,q=m;break}q=E}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var b=N.sibling;N.sibling=null,N=b}while(N!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Eo(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,q=T;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,q=R;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Lu(9,l)}}catch(j){xe(l,l.return,j)}if(l===o){q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,q=O;break e}q=l.return}}if(oe=i,Or(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Pu,t)}catch{}r=!0}return r}finally{ue=n,Mt.transition=e}}return!1}function Zg(t,e,n){e=is(n,e),e=bE(t,e,1),t=cr(t,e,1),e=ft(),t!==null&&(ua(t,1,e),It(t,e))}function xe(t,e,n){if(t.tag===3)Zg(t,t,n);else for(;e!==null;){if(e.tag===3){Zg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=is(n,t),t=DE(e,t,1),e=cr(e,t,1),t=ft(),e!==null&&(ua(e,1,t),It(e,t));break}}e=e.return}}function pR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Xe&n)===n&&(je===4||je===3&&(Xe&130023424)===Xe&&500>Ne()-Of?ei(t,0):Df|=n),It(t,e)}function ZE(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=ft();t=bn(t,e),t!==null&&(ua(t,e,n),It(t,n))}function mR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ZE(t,n)}function gR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),ZE(t,n)}var ew;ew=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,rR(t,e,n);vt=!!(t.flags&131072)}else vt=!1,Ee&&e.flags&1048576&&iE(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wl(t,e),t=e.pendingProps;var i=es(e,lt.current);Hi(e,n),i=xf(null,e,r,t,i,n);var s=Pf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,Wl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,If(e),i.updater=Vu,e.stateNode=i,i._reactInternals=e,sd(e,r,t,n),e=ld(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&mf(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_R(r),t=$t(r,t),i){case 0:e=ad(null,e,r,t,n);break e;case 1:e=$g(null,e,r,t,n);break e;case 11:e=zg(null,e,r,t,n);break e;case 14:e=Bg(null,e,r,$t(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),ad(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),$g(t,e,r,i,n);case 3:e:{if(ME(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cE(t,e),Yl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=is(Error(U(423)),e),e=Hg(t,e,r,n,i);break e}else if(r!==i){i=is(Error(U(424)),e),e=Hg(t,e,r,n,i);break e}else for(Rt=ur(e.stateNode.containerInfo.firstChild),xt=e,Ee=!0,Wt=null,n=lE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ts(),r===i){e=Dn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return hE(e),t===null&&nd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Jh(r,i)?o=null:s!==null&&Jh(r,s)&&(e.flags|=32),LE(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&nd(e),null;case 13:return UE(t,e,n);case 4:return Tf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ns(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),zg(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Kl,r._currentValue),r._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===i.children&&!Et.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=xn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),rd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Hi(e,n),i=Ut(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=$t(r,e.pendingProps),i=$t(r.type,i),Bg(t,e,r,i,n);case 15:return OE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),wl(t,e),e.tag=1,wt(r)?(t=!0,Wl(e)):t=!1,Hi(e,n),NE(e,r,i),sd(e,r,i,n),ld(null,e,r,!0,t,n);case 19:return FE(t,e,n);case 22:return VE(t,e,n)}throw Error(U(156,e.tag))};function tw(t,e){return Pv(t,e)}function yR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new yR(t,e,n,r)}function Uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _R(t){if(typeof t=="function")return Uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Uf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ci:return ti(n.children,i,s,e);case tf:o=8,i|=8;break;case Ch:return t=Lt(12,n,e,i|2),t.elementType=Ch,t.lanes=s,t;case kh:return t=Lt(13,n,e,i),t.elementType=kh,t.lanes=s,t;case Nh:return t=Lt(19,n,e,i),t.elementType=Nh,t.lanes=s,t;case hv:return Uu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uv:o=10;break e;case cv:o=9;break e;case nf:o=11;break e;case rf:o=14;break e;case Zn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ti(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function Uu(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=hv,t.lanes=n,t.stateNode={isHidden:!1},t}function oh(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function ah(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ff(t,e,n,r,i,s,o,l,u){return t=new vR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},If(s),t}function ER(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nw(t){if(!t)return Sr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(wt(n))return nE(t,n,e)}return e}function rw(t,e,n,r,i,s,o,l,u){return t=Ff(n,r,!0,t,i,s,o,l,u),t.context=nw(null),n=t.current,r=ft(),i=dr(n),s=xn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,ua(t,i,r),It(t,r),t}function Fu(t,e,n,r){var i=e.current,s=ft(),o=dr(i);return n=nw(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(Qt(t,i,o,s),_l(t,i,o)),o}function iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ey(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jf(t,e){ey(t,e),(t=t.alternate)&&ey(t,e)}function wR(){return null}var iw=typeof reportError=="function"?reportError:function(t){console.error(t)};function zf(t){this._internalRoot=t}ju.prototype.render=zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Fu(t,e,null,null)};ju.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ai(function(){Fu(null,t,null,null)}),e[Nn]=null}};function ju(t){this._internalRoot=t}ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&Mv(t)}};function Bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ty(){}function IR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=iu(o);s.call(c)}}var o=rw(e,r,t,0,null,!1,!1,"",ty);return t._reactRootContainer=o,t[Nn]=o.current,Fo(t.nodeType===8?t.parentNode:t),ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=iu(u);l.call(c)}}var u=Ff(t,0,!1,null,null,!1,!1,"",ty);return t._reactRootContainer=u,t[Nn]=u.current,Fo(t.nodeType===8?t.parentNode:t),ai(function(){Fu(e,u,n,r)}),u}function Bu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=iu(o);l.call(u)}}Fu(e,o,t,i)}else o=IR(n,e,t,i,r);return iu(o)}Dv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(af(e,n|1),It(e,Ne()),!(oe&6)&&(ss=Ne()+500,Or()))}break;case 13:ai(function(){var r=bn(t,1);if(r!==null){var i=ft();Qt(r,t,1,i)}}),jf(t,1)}};lf=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=ft();Qt(e,t,134217728,n)}jf(t,134217728)}};Ov=function(t){if(t.tag===13){var e=dr(t),n=bn(t,e);if(n!==null){var r=ft();Qt(n,t,e,r)}jf(t,e)}};Vv=function(){return ue};Lv=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};zh=function(t,e,n){switch(e){case"input":if(Oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bu(r);if(!i)throw Error(U(90));fv(r),Oh(r,i)}}}break;case"textarea":mv(t,n);break;case"select":e=n.value,e!=null&&ji(t,!!n.multiple,e,!1)}};Iv=Vf;Tv=ai;var TR={usingClientEntryPoint:!1,Events:[ha,Di,bu,Ev,wv,Vf]},eo={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SR={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rv(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||wR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Pu=rl.inject(SR),an=rl}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TR;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bf(e))throw Error(U(200));return ER(t,e,null,n)};Ct.createRoot=function(t,e){if(!Bf(t))throw Error(U(299));var n=!1,r="",i=iw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ff(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,Fo(t.nodeType===8?t.parentNode:t),new zf(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Rv(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return ai(t)};Ct.hydrate=function(t,e,n){if(!zu(e))throw Error(U(200));return Bu(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Bf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=iw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rw(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,Fo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ju(e)};Ct.render=function(t,e,n){if(!zu(e))throw Error(U(200));return Bu(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!zu(t))throw Error(U(40));return t._reactRootContainer?(ai(function(){Bu(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Vf;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Bu(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function sw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sw)}catch(t){console.error(t)}}sw(),sv.exports=Ct;var AR=sv.exports,ny=AR;xh.createRoot=ny.createRoot,xh.hydrateRoot=ny.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ko.apply(this,arguments)}var sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(sr||(sr={}));const ry="popstate";function RR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ed("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:su(i)}return PR(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $f(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xR(){return Math.random().toString(36).substr(2,8)}function iy(t,e){return{usr:t.state,key:t.key,idx:e}}function Ed(t,e,n,r){return n===void 0&&(n=null),Ko({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ms(e):e,{state:n,key:e&&e.key||r||xR()})}function su(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=sr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ko({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=sr.Pop;let b=d(),T=b==null?null:b-c;c=b,u&&u({action:l,location:N.location,delta:T})}function m(b,T){l=sr.Push;let v=Ed(N.location,b,T);c=d()+1;let R=iy(v,c),O=N.createHref(v);try{o.pushState(R,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&u&&u({action:l,location:N.location,delta:1})}function E(b,T){l=sr.Replace;let v=Ed(N.location,b,T);c=d();let R=iy(v,c),O=N.createHref(v);o.replaceState(R,"",O),s&&u&&u({action:l,location:N.location,delta:0})}function P(b){let T=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:su(b);return v=v.replace(/ $/,"%20"),be(T,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,T)}let N={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ry,p),u=b,()=>{i.removeEventListener(ry,p),u=null}},createHref(b){return e(i,b)},createURL:P,encodeLocation(b){let T=P(b);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:E,go(b){return o.go(b)}};return N}var sy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(sy||(sy={}));function CR(t,e,n){return n===void 0&&(n="/"),kR(t,e,n)}function kR(t,e,n,r){let i=typeof e=="string"?ms(e):e,s=Hf(i.pathname||"/",n);if(s==null)return null;let o=ow(t);NR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=$R(s);l=jR(o[u],c)}return l}function ow(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=pr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ow(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:UR(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of aw(s.path))i(s,o,u)}),e}function aw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=aw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function NR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bR=/^:[\w-]+$/,DR=3,OR=2,VR=1,LR=10,MR=-2,oy=t=>t==="*";function UR(t,e){let n=t.split("/"),r=n.length;return n.some(oy)&&(r+=MR),e&&(r+=OR),n.filter(i=>!oy(i)).reduce((i,s)=>i+(bR.test(s)?DR:s===""?VR:LR),r)}function FR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jR(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=zR({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:pr([s,p.pathname]),pathnameBase:KR(pr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=pr([s,p.pathnameBase]))}return o}function zR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=BR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let N=l[p]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const P=l[p];return E&&!P?c[m]=void 0:c[m]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function BR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),$f(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function $R(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $f(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const HR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,WR=t=>HR.test(t);function qR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ms(t):t,s;if(n)if(WR(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),$f(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=ay(n.substring(1),"/"):s=ay(n,e)}else s=e;return{pathname:s,search:QR(r),hash:YR(i)}}function ay(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Wf(t,e){let n=GR(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ms(t):(i=Ko({},t),be(!i.pathname||!i.pathname.includes("?"),lh("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),lh("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),lh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=qR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const pr=t=>t.join("/").replace(/\/\/+/g,"/"),KR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),QR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function JR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const lw=["post","put","patch","delete"];new Set(lw);const XR=["get",...lw];new Set(XR);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qo.apply(this,arguments)}const Gf=M.createContext(null),ZR=M.createContext(null),Vr=M.createContext(null),$u=M.createContext(null),Lr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),uw=M.createContext(null);function ex(t,e){let{relative:n}=e===void 0?{}:e;gs()||be(!1);let{basename:r,navigator:i}=M.useContext(Vr),{hash:s,pathname:o,search:l}=hw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:pr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function gs(){return M.useContext($u)!=null}function fa(){return gs()||be(!1),M.useContext($u).location}function cw(t){M.useContext(Vr).static||M.useLayoutEffect(t)}function pi(){let{isDataRoute:t}=M.useContext(Lr);return t?fx():tx()}function tx(){gs()||be(!1);let t=M.useContext(Gf),{basename:e,future:n,navigator:r}=M.useContext(Vr),{matches:i}=M.useContext(Lr),{pathname:s}=fa(),o=JSON.stringify(Wf(i,n.v7_relativeSplatPath)),l=M.useRef(!1);return cw(()=>{l.current=!0}),M.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=qf(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:pr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function hw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Vr),{matches:i}=M.useContext(Lr),{pathname:s}=fa(),o=JSON.stringify(Wf(i,r.v7_relativeSplatPath));return M.useMemo(()=>qf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function nx(t,e){return rx(t,e)}function rx(t,e,n,r){gs()||be(!1);let{navigator:i}=M.useContext(Vr),{matches:s}=M.useContext(Lr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=fa(),d;if(e){var p;let b=typeof e=="string"?ms(e):e;u==="/"||(p=b.pathname)!=null&&p.startsWith(u)||be(!1),d=b}else d=c;let m=d.pathname||"/",E=m;if(u!=="/"){let b=u.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let P=CR(t,{pathname:E}),N=lx(P&&P.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:pr([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:pr([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&N?M.createElement($u.Provider,{value:{location:Qo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:sr.Pop}},N):N}function ix(){let t=dx(),e=JR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const sx=M.createElement(ix,null);class ox extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Lr.Provider,{value:this.props.routeContext},M.createElement(uw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ax(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(Gf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Lr.Provider,{value:e},r)}function lx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||be(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:E}=n,P=p.route.loader&&m[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let E,P=!1,N=null,b=null;n&&(E=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||sx,u&&(c<0&&m===0?(px("route-fallback"),P=!0,b=null):c===m&&(P=!0,b=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),v=()=>{let R;return E?R=N:P?R=b:p.route.Component?R=M.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=d,M.createElement(ax,{match:p,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:R})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?M.createElement(ox,{location:n.location,revalidation:n.revalidation,component:N,error:E,children:v(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):v()},null)}var dw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(dw||{}),fw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(fw||{});function ux(t){let e=M.useContext(Gf);return e||be(!1),e}function cx(t){let e=M.useContext(ZR);return e||be(!1),e}function hx(t){let e=M.useContext(Lr);return e||be(!1),e}function pw(t){let e=hx(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function dx(){var t;let e=M.useContext(uw),n=cx(),r=pw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fx(){let{router:t}=ux(dw.UseNavigateStable),e=pw(fw.UseNavigateStable),n=M.useRef(!1);return cw(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Qo({fromRouteId:e},s)))},[t,e])}const ly={};function px(t,e,n){ly[t]||(ly[t]=!0)}function mx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function mw(t){let{to:e,replace:n,state:r,relative:i}=t;gs()||be(!1);let{future:s,static:o}=M.useContext(Vr),{matches:l}=M.useContext(Lr),{pathname:u}=fa(),c=pi(),d=qf(e,Wf(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return M.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Xn(t){be(!1)}function gx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=sr.Pop,navigator:s,static:o=!1,future:l}=t;gs()&&be(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:s,static:o,future:Qo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ms(r));let{pathname:d="/",search:p="",hash:m="",state:E=null,key:P="default"}=r,N=M.useMemo(()=>{let b=Hf(d,u);return b==null?null:{location:{pathname:b,search:p,hash:m,state:E,key:P},navigationType:i}},[u,d,p,m,E,P,i]);return N==null?null:M.createElement(Vr.Provider,{value:c},M.createElement($u.Provider,{children:n,value:N}))}function yx(t){let{children:e,location:n}=t;return nx(wd(e),n)}new Promise(()=>{});function wd(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,wd(r.props.children,s));return}r.type!==Xn&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=wd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Id(){return Id=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Id.apply(this,arguments)}function _x(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ex(t,e){return t.button===0&&(!e||e==="_self")&&!vx(t)}const wx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ix="6";try{window.__reactRouterVersion=Ix}catch{}const Tx="startTransition",uy=p0[Tx];function Sx(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=RR({window:i,v5Compat:!0}));let o=s.current,[l,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=M.useCallback(p=>{c&&uy?uy(()=>u(p)):u(p)},[u,c]);return M.useLayoutEffect(()=>o.listen(d),[o,d]),M.useEffect(()=>mx(r),[r]),M.createElement(gx,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Ax=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ae=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=_x(e,wx),{basename:E}=M.useContext(Vr),P,N=!1;if(typeof c=="string"&&Rx.test(c)&&(P=c,Ax))try{let R=new URL(window.location.href),O=c.startsWith("//")?new URL(R.protocol+c):new URL(c),j=Hf(O.pathname,E);O.origin===R.origin&&j!=null?c=j+O.search+O.hash:N=!0}catch{}let b=ex(c,{relative:i}),T=xx(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function v(R){r&&r(R),R.defaultPrevented||T(R)}return M.createElement("a",Id({},m,{href:P||b,onClick:N||s?r:v,ref:n,target:u}))});var cy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(cy||(cy={}));var hy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hy||(hy={}));function xx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=pi(),c=fa(),d=hw(t,{relative:o});return M.useCallback(p=>{if(Ex(p,n)){p.preventDefault();let m=r!==void 0?r:su(c)===su(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}const Px="modulepreload",Cx=function(t){return"/"+t},dy={},Kf=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=Cx(u),u in dy)return;dy[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":Px,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((m,E)=>{p.addEventListener("load",m),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},kx=()=>{};var fy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new bx;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dx=function(t){const e=gw(t);return yw.encodeByteArray(e,!0)},ou=function(t){return Dx(t).replace(/\./g,"")},_w=function(t){try{return yw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=()=>Ox().__FIREBASE_DEFAULTS__,Lx=()=>{if(typeof process>"u"||typeof fy>"u")return;const t=fy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_w(t[1]);return e&&JSON.parse(e)},Hu=()=>{try{return kx()||Vx()||Lx()||Mx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vw=t=>{var e,n;return(n=(e=Hu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Ux=t=>{const e=vw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ew=()=>{var t;return(t=Hu())==null?void 0:t.config},ww=t=>{var e;return(e=Hu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ou(JSON.stringify(n)),ou(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Bx(){var e;const t=(e=Hu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $x(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qx(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gx(){return!Bx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kx(){try{return typeof indexedDB=="object"}catch{return!1}}function Qx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Yx,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pa.prototype.create)}}class pa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Jx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new jn(i,l,r)}}function Jx(t,e){return t.replace(Xx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Xx=/\{\$([^}]+)}/g;function Zx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function li(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(py(s)&&py(o)){if(!li(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function py(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function eP(t,e){const n=new tP(t,e);return n.subscribe.bind(n)}class tP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=uh),i.error===void 0&&(i.error=uh),i.complete===void 0&&(i.complete=uh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Iw(t){return(await fetch(t,{credentials:"include"})).ok}class ui{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sP(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iP(t){return t===Kr?void 0:t}function sP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const aP={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},lP=ie.INFO,uP={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},cP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qf{constructor(e){this.name=e,this._logLevel=lP,this._logHandler=cP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const hP=(t,e)=>e.some(n=>t instanceof n);let my,gy;function dP(){return my||(my=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fP(){return gy||(gy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tw=new WeakMap,Td=new WeakMap,Sw=new WeakMap,ch=new WeakMap,Yf=new WeakMap;function pP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tw.set(n,t)}).catch(()=>{}),Yf.set(e,t),e}function mP(t){if(Td.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Td.set(t,e)}let Sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gP(t){Sd=t(Sd)}function yP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hh(this),e,...n);return Sw.set(r,e.sort?e.sort():[e]),mr(r)}:fP().includes(t)?function(...e){return t.apply(hh(this),e),mr(Tw.get(this))}:function(...e){return mr(t.apply(hh(this),e))}}function _P(t){return typeof t=="function"?yP(t):(t instanceof IDBTransaction&&mP(t),hP(t,dP())?new Proxy(t,Sd):t)}function mr(t){if(t instanceof IDBRequest)return pP(t);if(ch.has(t))return ch.get(t);const e=_P(t);return e!==t&&(ch.set(t,e),Yf.set(e,t)),e}const hh=t=>Yf.get(t);function vP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mr(o.result),u.oldVersion,u.newVersion,mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const EP=["get","getKey","getAll","getAllKeys","count"],wP=["put","add","delete","clear"],dh=new Map;function yy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dh.get(e))return dh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||EP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return dh.set(e,s),s}gP(t=>({...t,get:(e,n,r)=>yy(e,n)||t.get(e,n,r),has:(e,n)=>!!yy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ad="@firebase/app",_y="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new Qf("@firebase/app"),SP="@firebase/app-compat",AP="@firebase/analytics-compat",RP="@firebase/analytics",xP="@firebase/app-check-compat",PP="@firebase/app-check",CP="@firebase/auth",kP="@firebase/auth-compat",NP="@firebase/database",bP="@firebase/data-connect",DP="@firebase/database-compat",OP="@firebase/functions",VP="@firebase/functions-compat",LP="@firebase/installations",MP="@firebase/installations-compat",UP="@firebase/messaging",FP="@firebase/messaging-compat",jP="@firebase/performance",zP="@firebase/performance-compat",BP="@firebase/remote-config",$P="@firebase/remote-config-compat",HP="@firebase/storage",WP="@firebase/storage-compat",qP="@firebase/firestore",GP="@firebase/ai",KP="@firebase/firestore-compat",QP="firebase",YP="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="[DEFAULT]",JP={[Ad]:"fire-core",[SP]:"fire-core-compat",[RP]:"fire-analytics",[AP]:"fire-analytics-compat",[PP]:"fire-app-check",[xP]:"fire-app-check-compat",[CP]:"fire-auth",[kP]:"fire-auth-compat",[NP]:"fire-rtdb",[bP]:"fire-data-connect",[DP]:"fire-rtdb-compat",[OP]:"fire-fn",[VP]:"fire-fn-compat",[LP]:"fire-iid",[MP]:"fire-iid-compat",[UP]:"fire-fcm",[FP]:"fire-fcm-compat",[jP]:"fire-perf",[zP]:"fire-perf-compat",[BP]:"fire-rc",[$P]:"fire-rc-compat",[HP]:"fire-gcs",[WP]:"fire-gcs-compat",[qP]:"fire-fst",[KP]:"fire-fst-compat",[GP]:"fire-vertex","fire-js":"fire-js",[QP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new Map,XP=new Map,xd=new Map;function vy(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(xd.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;xd.set(e,t);for(const n of au.values())vy(n,t);for(const n of XP.values())vy(n,t);return!0}function Jf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Te(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new pa("app","Firebase",ZP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ui("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=YP;function Aw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Rd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw gr.create("bad-app-name",{appName:String(i)});if(n||(n=Ew()),!n)throw gr.create("no-options");const s=au.get(i);if(s){if(li(n,s.options)&&li(r,s.config))return s;throw gr.create("duplicate-app",{appName:i})}const o=new oP(i);for(const u of xd.values())o.addComponent(u);const l=new eC(n,r,o);return au.set(i,l),l}function Rw(t=Rd){const e=au.get(t);if(!e&&t===Rd&&Ew())return Aw();if(!e)throw gr.create("no-app",{appName:t});return e}function yr(t,e,n){let r=JP[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(o.join(" "));return}os(new ui(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="firebase-heartbeat-database",nC=1,Yo="firebase-heartbeat-store";let fh=null;function xw(){return fh||(fh=vP(tC,nC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),fh}async function rC(t){try{const n=(await xw()).transaction(Yo),r=await n.objectStore(Yo).get(Pw(t));return await n.done,r}catch(e){if(e instanceof jn)On.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function Ey(t,e){try{const r=(await xw()).transaction(Yo,"readwrite");await r.objectStore(Yo).put(e,Pw(t)),await r.done}catch(n){if(n instanceof jn)On.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function Pw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=1024,sC=30;class oC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>sC){const o=uC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wy(),{heartbeatsToSend:r,unsentEntries:i}=aC(this._heartbeatsCache.heartbeats),s=ou(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return On.warn(n),""}}}function wy(){return new Date().toISOString().substring(0,10)}function aC(t,e=iC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Iy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Iy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kx()?Qx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ey(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ey(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Iy(t){return ou(JSON.stringify({version:2,heartbeats:t})).length}function uC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){os(new ui("platform-logger",e=>new IP(e),"PRIVATE")),os(new ui("heartbeat",e=>new oC(e),"PRIVATE")),yr(Ad,_y,t),yr(Ad,_y,"esm2020"),yr("fire-js","")}cC("");var hC="firebase",dC="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr(hC,dC,"app");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC={PHONE:"phone",TOTP:"totp"},pC={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},mC={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},gC={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},yC={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function Cw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vC=_C,kw=Cw,Nw=new pa("auth","Firebase",Cw()),EC={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=new Qf("@firebase/auth");function wC(t,...e){lu.logLevel<=ie.WARN&&lu.warn(`Auth (${_s}): ${t}`,...e)}function Al(t,...e){lu.logLevel<=ie.ERROR&&lu.error(`Auth (${_s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw Zf(t,...e)}function pt(t,...e){return Zf(t,...e)}function Xf(t,e,n){const r={...kw(),[e]:n};return new pa("auth","Firebase",r).create(e,{appName:t.name})}function Ge(t){return Xf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vs(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(t,"argument-error"),Xf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nw.create(t,...e)}function F(t,e,...n){if(!t)throw Zf(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Al(e),new Error(e)}function Vn(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ep(){return Ty()==="http:"||Ty()==="https:"}function Ty(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ep()||Hx()||"connection"in navigator)?navigator.onLine:!0}function TC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=zx()||Wx()}get(){return IC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],RC=new ga(3e4,6e4);function ye(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _e(t,e,n,r,i={}){return Dw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ys({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return $x()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ma(t.emulatorConfig.host)&&(c.credentials="include"),bw.fetch()(await Ow(t,t.config.apiHost,n,l),c)})}async function Dw(t,e,n){t._canInitEmulator=!1;const r={...SC,...e};try{const i=new PC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw uo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw uo(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw uo(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xf(t,d,c);Tt(t,d)}}catch(i){if(i instanceof jn)throw i;Tt(t,"network-request-failed",{message:String(i)})}}async function zn(t,e,n,r,i={}){const s=await _e(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ow(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?tp(t.config,i):`${t.config.apiScheme}://${i}`;return AC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function xC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),RC.get())})}}function uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){return t!==void 0&&t.getResponse!==void 0}function Ay(t){return t!==void 0&&t.enterprise!==void 0}class Vw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t){return(await _e(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Lw(t,e){return _e(t,"GET","/v2/recaptchaConfig",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){return _e(t,"POST","/v1/accounts:delete",e)}async function NC(t,e){return _e(t,"POST","/v1/accounts:update",e)}async function uu(t,e){return _e(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t,e=!1){return Q(t).getIdToken(e)}async function Mw(t,e=!1){const n=Q(t),r=await n.getIdToken(e),i=Wu(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:To(ph(i.auth_time)),issuedAtTime:To(ph(i.iat)),expirationTime:To(ph(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ph(t){return Number(t)*1e3}function Wu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Al("JWT malformed, contained fewer than 3 sections"),null;try{const i=_w(n);return i?JSON.parse(i):(Al("Failed to decode base64 JWT payload"),null)}catch(i){return Al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ry(t){const e=Wu(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&DC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ln(t,uu(e,{idToken:n}));F(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?Fw(i.providerUserInfo):[],o=VC(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Pd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Uw(t){const e=Q(t);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Fw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(t,e){const n=await Dw(t,{},async()=>{const r=ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Ow(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ma(t.emulatorConfig.host)&&(u.credentials="include"),bw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MC(t,e){return _e(t,"POST","/v2/accounts:revokeToken",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ry(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=Ry(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qi;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new OC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ln(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mw(this,e)}reload(){return Uw(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Te(this.auth.app))return Promise.reject(Ge(this.auth));const e=await this.getIdToken();return await Ln(this,kC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:E,providerData:P,stsTokenManager:N}=n;F(p&&N,e,"internal-error");const b=qi.fromJSON(this.name,N);F(typeof p=="string",e,"internal-error"),Jn(r,e.name),Jn(i,e.name),F(typeof m=="boolean",e,"internal-error"),F(typeof E=="boolean",e,"internal-error"),Jn(s,e.name),Jn(o,e.name),Jn(l,e.name),Jn(u,e.name),Jn(c,e.name),Jn(d,e.name);const T=new qt({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:d});return P&&Array.isArray(P)&&(T.providerData=P.map(v=>({...v}))),u&&(T._redirectEventId=u),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new qi;i.updateFromServerResponse(n);const s=new qt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];F(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Fw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new qi;l.updateFromIdToken(r);const u=new qt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Pd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Map;function Sn(t){Vn(t instanceof Function,"Expected a class definition");let e=xy.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jw.type="NONE";const Cd=jw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t,e,n){return`firebase:${t}:${e}:${n}`}class Gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Rl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Rl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await uu(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gi(Sn(Cd),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Sn(Cd);const o=Rl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await uu(e,{idToken:d}).catch(()=>{});if(!m)break;p=await qt._fromGetAccountInfoResponse(e,m,d)}else p=qt._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Gi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Gi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qw(e))return"Blackberry";if(Gw(e))return"Webos";if(Bw(e))return"Safari";if((e.includes("chrome/")||$w(e))&&!e.includes("edge/"))return"Chrome";if(Ww(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zw(t=ut()){return/firefox\//i.test(t)}function Bw(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $w(t=ut()){return/crios\//i.test(t)}function Hw(t=ut()){return/iemobile/i.test(t)}function Ww(t=ut()){return/android/i.test(t)}function qw(t=ut()){return/blackberry/i.test(t)}function Gw(t=ut()){return/webos/i.test(t)}function np(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UC(t=ut()){var e;return np(t)&&!!((e=window.navigator)!=null&&e.standalone)}function FC(){return qx()&&document.documentMode===10}function Kw(t=ut()){return np(t)||Ww(t)||Gw(t)||qw(t)||/windows phone/i.test(t)||Hw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t,e=[]){let n;switch(t){case"Browser":n=Py(ut());break;case"Worker":n=`${Py(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_s}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e={}){return _e(t,"GET","/v2/passwordPolicy",ye(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=6;class $C{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??BC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cy(this),this.idTokenSubscription=new Cy(this),this.beforeStateQueue=new jC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Gi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await uu(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Te(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Te(this.app))return Promise.reject(Ge(this));const n=e?Q(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Te(this.app)?Promise.reject(Ge(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Te(this.app)?Promise.reject(Ge(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zC(this),n=new $C(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Gi.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&wC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Pe(t){return Q(t)}class Cy{constructor(e){this.auth=e,this.observer=null,this.addObserver=eP(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WC(t){ya=t}function rp(t){return ya.loadJS(t)}function qC(){return ya.recaptchaV2Script}function GC(){return ya.recaptchaEnterpriseScript}function KC(){return ya.gapiScript}function Yw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=500,YC=6e4,il=1e12;class JC{constructor(e){this.auth=e,this.counter=il,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new ek(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||il;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||il;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||il;return(r=this._widgets.get(n))==null||r.execute(),""}}class XC{constructor(){this.enterprise=new ZC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ek{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;F(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=tk(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},YC)},QC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function tk(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const nk="recaptcha-enterprise",So="NO_RECAPTCHA";class Jw{constructor(e){this.type=nk,this.auth=Pe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Lw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Vw(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Ay(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(So)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new XC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Ay(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=GC();u.length!==0&&(u+=l),rp(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function to(t,e,n,r=!1,i=!1){const s=new Jw(t);let o;if(i)o=So;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function _r(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await to(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await to(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await to(t,e,n);return r(t,l).catch(async u=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await to(t,e,n,!1,!0);return r(t,d)}return Promise.reject(u)})}else{const l=await to(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}async function Xw(t){const e=Pe(t),n=await Lw(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Vw(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Jw(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e){const n=Jf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(li(s,e??{}))return i;Tt(i,"already-initialized")}return n.initialize({options:e})}function rk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eI(t,e,n){const r=Pe(t);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tI(e),{host:o,port:l}=ik(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(li(c,r.config.emulator)&&li(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ma(o)?Iw(`${s}//${o}${u}`):i||sk()}function tI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ik(t){const e=tI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ky(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ky(o)}}}function ky(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){return _e(t,"POST","/v1/accounts:resetPassword",ye(t,e))}async function ok(t,e){return _e(t,"POST","/v1/accounts:update",e)}async function ak(t,e){return _e(t,"POST","/v1/accounts:signUp",e)}async function lk(t,e){return _e(t,"POST","/v1/accounts:update",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e){return zn(t,"POST","/v1/accounts:signInWithPassword",ye(t,e))}async function qu(t,e){return _e(t,"POST","/v1/accounts:sendOobCode",ye(t,e))}async function ck(t,e){return qu(t,e)}async function hk(t,e){return qu(t,e)}async function dk(t,e){return qu(t,e)}async function fk(t,e){return qu(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",ye(t,e))}async function mk(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Es{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new as(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new as(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _r(e,n,"signInWithPassword",uk,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return pk(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _r(e,r,"signUpPassword",ak,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return mk(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(t,e){return zn(t,"POST","/v1/accounts:signInWithIdp",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk="http://localhost";class dn extends Es{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new dn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pn(e,n)}buildRequest(){const e={requestUri:gk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ys(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(t,e){return _e(t,"POST","/v1/accounts:sendVerificationCode",ye(t,e))}async function yk(t,e){return zn(t,"POST","/v1/accounts:signInWithPhoneNumber",ye(t,e))}async function _k(t,e){const n=await zn(t,"POST","/v1/accounts:signInWithPhoneNumber",ye(t,e));if(n.temporaryProof)throw uo(t,"account-exists-with-different-credential",n);return n}const vk={USER_NOT_FOUND:"user-not-found"};async function Ek(t,e){const n={...e,operation:"REAUTH"};return zn(t,"POST","/v1/accounts:signInWithPhoneNumber",ye(t,n),vk)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Es{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new vr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new vr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return yk(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return _k(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Ek(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new vr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ik(t){const e=ao(lo(t)).link,n=e?ao(lo(e)).deep_link_id:null,r=ao(lo(t)).deep_link_id;return(r?ao(lo(r)).link:null)||r||n||e||t}class ws{constructor(e){const n=ao(lo(e)),r=n.apiKey??null,i=n.oobCode??null,s=wk(n.mode??null);F(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Ik(e);try{return new ws(n)}catch{return null}}}function Tk(t){return ws.parseLink(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.providerId=Mr.PROVIDER_ID}static credential(e,n){return as._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ws.parseLink(n);return F(r,"argument-error"),as._fromEmailAndCode(e,r.code,r.tenantId)}}Mr.PROVIDER_ID="password";Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Bn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ao extends Is{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return F("providerId"in n&&"signInMethod"in n,"argument-error"),dn._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),dn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ao.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ao.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new Ao(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Is{constructor(){super("facebook.com")}static credential(e){return dn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Is{constructor(){super("github.com")}static credential(e){return dn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="http://localhost";class Zo extends Es{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Pn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Zo(r,s)}static _create(e,n){return new Zo(e,n)}buildRequest(){return{requestUri:Sk,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak="saml.";class cu extends Bn{constructor(e){F(e.startsWith(Ak),"argument-error"),super(e)}static credentialFromResult(e){return cu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return cu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Zo.fromJSON(e);return F(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Zo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Is{constructor(){super("twitter.com")}static credential(e,n){return dn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(t,e){return zn(t,"POST","/v1/accounts:signUp",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qt._fromIdTokenResponse(e,r,i),o=by(r);return new jt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=by(r);return new jt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function by(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t){var i;if(Te(t.app))return Promise.reject(Ge(t));const e=Pe(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new jt({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await rI(e,{returnSecureToken:!0}),r=await jt._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends jn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hu(e,n,r,i)}}function iI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hu._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(t,e){const n=Q(t);await Gu(!0,n,e);const{providerUserInfo:r}=await NC(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=sI(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function ip(t,e,n=!1){const r=await Ln(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jt._forOperation(t,"link",r)}async function Gu(t,e,n){await Xo(e);const r=sI(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";F(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e,n=!1){const{auth:r}=t;if(Te(r.app))return Promise.reject(Ge(r));const i="reauthenticate";try{const s=await Ln(t,iI(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Wu(s.idToken);F(o,r,"internal-error");const{sub:l}=o;return F(t.uid===l,r,"user-mismatch"),jt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e,n=!1){if(Te(t.app))return Promise.reject(Ge(t));const r="signIn",i=await iI(t,r,e),s=await jt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ku(t,e){return aI(Pe(t),e)}async function lI(t,e){const n=Q(t);return await Gu(!1,n,e.providerId),ip(n,e)}async function uI(t,e){return oI(Q(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pk(t,e){return zn(t,"POST","/v1/accounts:signInWithCustomToken",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(t,e){if(Te(t.app))return Promise.reject(Ge(t));const n=Pe(t),r=await Pk(n,{token:e,returnSecureToken:!0}),i=await jt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?sp._fromServerResponse(e,n):"totpInfo"in n?op._fromServerResponse(e,n):Tt(e,"internal-error")}}class sp extends _a{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new sp(n)}}class op extends _a{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new op(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t,e,n){var r;F(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),F(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),F(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(F(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(F(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(t){const e=Pe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kk(t,e,n){const r=Pe(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Qu(r,i,n),await _r(r,i,"getOobCode",hk,"EMAIL_PASSWORD_PROVIDER")}async function Nk(t,e,n){await nI(Q(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ap(t),r})}async function bk(t,e){await lk(Q(t),{oobCode:e})}async function cI(t,e){const n=Q(t),r=await nI(n,{oobCode:e}),i=r.requestType;switch(F(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":F(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":F(r.mfaInfo,n,"internal-error");default:F(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=_a._fromServerResponse(Pe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Dk(t,e){const{data:n}=await cI(Q(t),e);return n.email}async function Ok(t,e,n){if(Te(t.app))return Promise.reject(Ge(t));const r=Pe(t),o=await _r(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rI,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ap(t),u}),l=await jt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Vk(t,e,n){return Te(t.app)?Promise.reject(Ge(t)):Ku(Q(t),Mr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ap(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t,e,n){const r=Pe(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){F(l.handleCodeInApp,r,"argument-error"),l&&Qu(r,o,l)}s(i,n),await _r(r,i,"getOobCode",dk,"EMAIL_PASSWORD_PROVIDER")}function Mk(t,e){const n=ws.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Uk(t,e,n){if(Te(t.app))return Promise.reject(Ge(t));const r=Q(t),i=Mr.credentialWithLink(e,n||Jo());return F(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ku(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t,e){return _e(t,"POST","/v1/accounts:createAuthUri",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e){const n=ep()?Jo():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await Fk(Q(t),r);return i||[]}async function zk(t,e){const n=Q(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Qu(n.auth,i,e);const{email:s}=await ck(n.auth,i);s!==t.email&&await t.reload()}async function Bk(t,e,n){const r=Q(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Qu(r.auth,s,n);const{email:o}=await fk(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e){return _e(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Q(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ln(r,$k(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Wk(t,e){const n=Q(t);return Te(n.auth.app)?Promise.reject(Ge(n.auth)):hI(n,e,null)}function qk(t,e){return hI(Q(t),null,e)}async function hI(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Ln(t,ok(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=Wu(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new Ki(r,l)}}if(!e)return null;switch(e){case"facebook.com":return new Kk(r,n);case"github.com":return new Qk(r,n);case"google.com":return new Yk(r,n);case"twitter.com":return new Jk(r,n,t.screenName||null);case"custom":case"anonymous":return new Ki(r,null);default:return new Ki(r,e,n)}}class Ki{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class dI extends Ki{constructor(e,n,r,i){super(e,n,r),this.username=i}}class Kk extends Ki{constructor(e,n){super(e,"facebook.com",n)}}class Qk extends dI{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class Yk extends Ki{constructor(e,n){super(e,"google.com",n)}}class Jk extends dI{constructor(e,n,r){super(e,"twitter.com",n,r)}}function Xk(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Gk(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t,e){return Q(t).setPersistence(e)}function eN(t){return Xw(t)}async function tN(t,e){return Pe(t).validatePassword(e)}function fI(t,e,n,r){return Q(t).onIdTokenChanged(e,n,r)}function pI(t,e,n){return Q(t).beforeAuthStateChanged(e,n)}function mI(t,e,n,r){return Q(t).onAuthStateChanged(e,n,r)}function nN(t){Q(t).useDeviceLanguage()}function rN(t,e){return Q(t).updateCurrentUser(e)}function iN(t){return Q(t).signOut()}function sN(t,e){return Pe(t).revokeAccessToken(e)}async function oN(t){return Q(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Xr("enroll",e,n)}static _fromMfaPendingCredential(e){return new Xr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if((n=e.multiFactorSession)!=null&&n.pendingCredential)return Xr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)!=null&&r.idToken)return Xr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Pe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(l=>_a._fromServerResponse(r,l));F(i.mfaPendingCredential,r,"internal-error");const o=Xr._fromMfaPendingCredential(i.mfaPendingCredential);return new lp(o,s,async l=>{const u=await l._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c={...i,idToken:u.idToken,refreshToken:u.refreshToken};switch(n.operationType){case"signIn":const d=await jt._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return F(n.user,r,"internal-error"),jt._forOperation(n.user,n.operationType,c);default:Tt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function aN(t,e){var i;const n=Q(t),r=e;return F(e.customData.operationType,n,"argument-error"),F((i=r.customData._serverResponse)==null?void 0:i.mfaPendingCredential,n,"argument-error"),lp._fromError(n,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t,e){return _e(t,"POST","/v2/accounts/mfaEnrollment:start",ye(t,e))}function lN(t,e){return _e(t,"POST","/v2/accounts/mfaEnrollment:finalize",ye(t,e))}function uN(t,e){return _e(t,"POST","/v2/accounts/mfaEnrollment:start",ye(t,e))}function cN(t,e){return _e(t,"POST","/v2/accounts/mfaEnrollment:finalize",ye(t,e))}function hN(t,e){return _e(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ye(t,e))}class up{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>_a._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new up(e)}async getSession(){return Xr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Ln(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Ln(this.user,hN(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const mh=new WeakMap;function dN(t){const e=Q(t);return mh.has(e)||mh.set(e,up._fromUser(e)),mh.get(e)}const du="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(du,"1"),this.storage.removeItem(du),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=1e3,pN=10;class yI extends gI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yI.type="LOCAL";const _I=yI;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=1e3;function gh(t){var r;const e=t.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${e}=([^;]+)`);return((r=document.cookie.match(n))==null?void 0:r[1])??null}function yh(t){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${t.split(":")[3]}`}class vI{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const n=new URL(`${window.location.origin}/__cookies__`);return n.searchParams.set("finalTarget",e),n}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,n){}async _get(e){if(!this._isAvailable())return null;const n=yh(e);if(window.cookieStore){const r=await window.cookieStore.get(n);return r==null?void 0:r.value}return gh(n)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const r=yh(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,n){if(!this._isAvailable())return;const r=yh(e);if(window.cookieStore){const l=c=>{const d=c.changed.find(m=>m.name===r);d&&n(d.value),c.deleted.find(m=>m.name===r)&&n(null)},u=()=>window.cookieStore.removeEventListener("change",l);return this.listenerUnsubscribes.set(n,u),window.cookieStore.addEventListener("change",l)}let i=gh(r);const s=setInterval(()=>{const l=gh(r);l!==i&&(n(l),i=l)},mN),o=()=>clearInterval(s);this.listenerUnsubscribes.set(n,o)}_removeListener(e,n){const r=this.listenerUnsubscribes.get(n);r&&(r(),this.listenerUnsubscribes.delete(n))}}vI.type="COOKIE";const gN=vI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI extends gI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}EI.type="SESSION";const cp=EI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Yu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await yN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Ju("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return window}function vN(t){Oe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){return typeof Oe().WorkerGlobalScope<"u"&&typeof Oe().importScripts=="function"}async function EN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function IN(){return hp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="firebaseLocalStorageDb",TN=1,fu="firebaseLocalStorage",II="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xu(t,e){return t.transaction([fu],e?"readwrite":"readonly").objectStore(fu)}function SN(){const t=indexedDB.deleteDatabase(wI);return new va(t).toPromise()}function kd(){const t=indexedDB.open(wI,TN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fu,{keyPath:II})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fu)?e(r):(r.close(),await SN(),e(await kd()))})})}async function Oy(t,e,n){const r=Xu(t,!0).put({[II]:e,value:n});return new va(r).toPromise()}async function AN(t,e){const n=Xu(t,!1).get(e),r=await new va(n).toPromise();return r===void 0?null:r.value}function Vy(t,e){const n=Xu(t,!0).delete(e);return new va(n).toPromise()}const RN=800,xN=3;class TI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yu._getInstance(IN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await EN(),!this.activeServiceWorker)return;this.sender=new _N(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kd();return await Oy(e,du,"1"),await Vy(e,du),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Oy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xu(i,!1).getAll();return new va(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TI.type="LOCAL";const SI=TI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t,e){return _e(t,"POST","/v2/accounts/mfaSignIn:start",ye(t,e))}function PN(t,e){return _e(t,"POST","/v2/accounts/mfaSignIn:finalize",ye(t,e))}function CN(t,e){return _e(t,"POST","/v2/accounts/mfaSignIn:finalize",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=Yw("rcb"),kN=new ga(3e4,6e4);class NN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Oe().grecaptcha)!=null&&e.render)}load(e,n=""){return F(bN(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Sy(Oe().grecaptcha)?Promise.resolve(Oe().grecaptcha):new Promise((r,i)=>{const s=Oe().setTimeout(()=>{i(pt(e,"network-request-failed"))},kN.get());Oe()[_h]=()=>{Oe().clearTimeout(s),delete Oe()[_h];const l=Oe().grecaptcha;if(!l||!Sy(l)){i(pt(e,"internal-error"));return}const u=l.render;l.render=(c,d)=>{const p=u(c,d);return this.counter++,p},this.hostLanguage=n,r(l)};const o=`${qC()}?${ys({onload:_h,render:"explicit",hl:n})}`;rp(o).catch(()=>{clearTimeout(s),i(pt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Oe().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function bN(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class DN{async load(e){return new JC(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="recaptcha",ON={theme:"light",type:"image"};class VN{constructor(e,n,r={...ON}){this.parameters=r,this.type=Ro,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Pe(e),this.isInvisible=this.parameters.size==="invisible",F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;F(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new DN:new NN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){F(!this.parameters.sitekey,this.auth,"argument-error"),F(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Oe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){F(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){F(ep()&&!hp(),this.auth,"internal-error"),await LN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await CC(this.auth);F(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return F(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function LN(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=vr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function MN(t,e,n){if(Te(t.app))return Promise.reject(Ge(t));const r=Pe(t),i=await Zu(r,e,Q(n));return new dp(i,s=>Ku(r,s))}async function UN(t,e,n){const r=Q(t);await Gu(!1,r,"phone");const i=await Zu(r.auth,e,Q(n));return new dp(i,s=>lI(r,s))}async function FN(t,e,n){const r=Q(t);if(Te(r.auth.app))return Promise.reject(Ge(r.auth));const i=await Zu(r.auth,e,Q(n));return new dp(i,s=>uI(r,s))}async function Zu(t,e,n){var r;if(!t._getRecaptchaConfig())try{await Xw(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){F(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await _r(t,o,"mfaSmsEnrollment",async(d,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===So){F((n==null?void 0:n.type)===Ro,d,"argument-error");const m=await vh(d,p,n);return Dy(d,m)}return Dy(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{F(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;F(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await _r(t,l,"mfaSmsSignIn",async(p,m)=>{if(m.phoneSignInInfo.captchaResponse===So){F((n==null?void 0:n.type)===Ro,p,"argument-error");const E=await vh(p,m,n);return Ly(p,E)}return Ly(p,m)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await _r(t,s,"sendVerificationCode",async(c,d)=>{if(d.captchaResponse===So){F((n==null?void 0:n.type)===Ro,c,"argument-error");const p=await vh(c,d,n);return Ny(c,p)}return Ny(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function jN(t,e){const n=Q(t);if(Te(n.auth.app))return Promise.reject(Ge(n.auth));await ip(n,e)}async function vh(t,e,n){F(n.type===Ro,t,"argument-error");const r=await n.verify();F(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.providerId=ni.PROVIDER_ID,this.auth=Pe(e)}verifyPhoneNumber(e,n){return Zu(this.auth,e,Q(n))}static credential(e,n){return vr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return ni.credentialFromTaggedObject(n)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?vr._fromTokenResponse(n,r):null}}ni.PROVIDER_ID="phone";ni.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t,e){return e?Sn(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp extends Es{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zN(t){return aI(t.auth,new fp(t),t.bypassAuthState)}function BN(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),oI(n,new fp(t),t.bypassAuthState)}async function $N(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),ip(n,new fp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zN;case"linkViaPopup":case"linkViaRedirect":return $N;case"reauthViaPopup":case"reauthViaRedirect":return BN;default:Tt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=new ga(2e3,1e4);async function WN(t,e,n){if(Te(t.app))return Promise.reject(pt(t,"operation-not-supported-in-this-environment"));const r=Pe(t);vs(t,e,Bn);const i=mi(r,n);return new An(r,"signInViaPopup",e,i).executeNotNull()}async function qN(t,e,n){const r=Q(t);if(Te(r.auth.app))return Promise.reject(pt(r.auth,"operation-not-supported-in-this-environment"));vs(r.auth,e,Bn);const i=mi(r.auth,n);return new An(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function GN(t,e,n){const r=Q(t);vs(r.auth,e,Bn);const i=mi(r.auth,n);return new An(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class An extends AI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HN.get())};e()}}An.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="pendingRedirect",xl=new Map;class QN extends AI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xl.get(this.auth._key());if(!e){try{const r=await YN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xl.set(this.auth._key(),e)}return this.bypassAuthState||xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YN(t,e){const n=xI(e),r=RI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function pp(t,e){return RI(t)._set(xI(e),"true")}function JN(t,e){xl.set(t._key(),e)}function RI(t){return Sn(t._redirectPersistence)}function xI(t){return Rl(KN,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t,e,n){return ZN(t,e,n)}async function ZN(t,e,n){if(Te(t.app))return Promise.reject(Ge(t));const r=Pe(t);vs(t,e,Bn),await r._initializationPromise;const i=mi(r,n);return await pp(i,r),i._openRedirect(r,e,"signInViaRedirect")}function e1(t,e,n){return t1(t,e,n)}async function t1(t,e,n){const r=Q(t);if(vs(r.auth,e,Bn),Te(r.auth.app))return Promise.reject(Ge(r.auth));await r.auth._initializationPromise;const i=mi(r.auth,n);await pp(i,r.auth);const s=await CI(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function n1(t,e,n){return r1(t,e,n)}async function r1(t,e,n){const r=Q(t);vs(r.auth,e,Bn),await r.auth._initializationPromise;const i=mi(r.auth,n);await Gu(!1,r,e.providerId),await pp(i,r.auth);const s=await CI(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function i1(t,e){return await Pe(t)._initializationPromise,PI(t,e,!1)}async function PI(t,e,n=!1){if(Te(t.app))return Promise.reject(Ge(t));const r=Pe(t),i=mi(r,e),o=await new QN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function CI(t){const e=Ju(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=10*60*1e3;class o1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!a1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kI(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=s1&&this.cachedEventUids.clear(),this.cachedEventUids.has(My(e))}saveEventToCache(e){this.cachedEventUids.add(My(e)),this.lastProcessedEventTime=Date.now()}}function My(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function a1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e={}){return _e(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,c1=/^https?/;async function h1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await l1(t);for(const n of e)try{if(d1(n))return}catch{}Tt(t,"unauthorized-domain")}function d1(t){const e=Jo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!c1.test(n))return!1;if(u1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=new ga(3e4,6e4);function Uy(){const t=Oe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function p1(t){return new Promise((e,n)=>{var i,s,o;function r(){Uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uy(),n(pt(t,"network-request-failed"))},timeout:f1.get()})}if((s=(i=Oe().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Oe().gapi)!=null&&o.load)r();else{const l=Yw("iframefcb");return Oe()[l]=()=>{gapi.load?r():n(pt(t,"network-request-failed"))},rp(`${KC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Pl=null,e})}let Pl=null;function m1(t){return Pl=Pl||p1(t),Pl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=new ga(5e3,15e3),y1="__/auth/iframe",_1="emulator/auth/iframe",v1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},E1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w1(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tp(e,_1):`https://${t.config.authDomain}/${y1}`,r={apiKey:e.apiKey,appName:t.name,v:_s},i=E1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ys(r).slice(1)}`}async function I1(t){const e=await m1(t),n=Oe().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:w1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:v1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pt(t,"network-request-failed"),l=Oe().setTimeout(()=>{s(o)},g1.get());function u(){Oe().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S1=500,A1=600,R1="_blank",x1="http://localhost";class Fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function P1(t,e,n,r=S1,i=A1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...T1,width:r.toString(),height:i.toString(),top:s,left:o},c=ut().toLowerCase();n&&(l=$w(c)?R1:n),zw(c)&&(e=e||x1,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,P])=>`${m}${E}=${P},`,"");if(UC(c)&&l!=="_self")return C1(e||"",l),new Fy(null);const p=window.open(e||"",l,d);F(p,t,"popup-blocked");try{p.focus()}catch{}return new Fy(p)}function C1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="__/auth/handler",N1="emulator/auth/handler",b1=encodeURIComponent("fac");async function jy(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_s,eventId:i};if(e instanceof Bn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Is){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${b1}=${encodeURIComponent(u)}`:"";return`${D1(t)}?${ys(l).slice(1)}${c}`}function D1({config:t}){return t.emulator?tp(t,N1):`https://${t.authDomain}/${k1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="webStorageSupport";class O1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cp,this._completeRedirectFn=PI,this._overrideRedirectResult=JN}async _openPopup(e,n,r,i){var o;Vn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await jy(e,n,r,Jo(),i);return P1(e,s,Ju())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jy(e,n,r,Jo(),i);return vN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await I1(e),r=new o1(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Eh,{type:Eh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Eh];s!==void 0&&n(!!s),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=h1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kw()||Bw()||np()}}const NI=O1;class bI{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return on("unexpected MultiFactorSessionType")}}}class mp extends bI{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new mp(e)}_finalizeEnroll(e,n,r){return lN(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return PN(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class DI{constructor(){}static assertion(e){return mp._fromCredential(e)}}DI.FACTOR_ID="phone";class OI{static assertionForEnrollment(e,n){return ea._fromSecret(e,n)}static assertionForSignIn(e,n){return ea._fromEnrollmentId(e,n)}static async generateSecret(e){var i;const n=e;F(typeof((i=n.user)==null?void 0:i.auth)<"u","internal-error");const r=await uN(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return ec._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}OI.FACTOR_ID="totp";class ea extends bI{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new ea(n,void 0,e)}static _fromEnrollmentId(e,n){return new ea(n,e)}async _finalizeEnroll(e,n,r){return F(typeof this.secret<"u",e,"argument-error"),cN(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){F(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return CN(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class ec{constructor(e,n,r,i,s,o,l){this.sessionInfo=o,this.auth=l,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new ec(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var i;let r=!1;return(sl(e)||sl(n))&&(r=!0),r&&(sl(e)&&(e=((i=this.auth.currentUser)==null?void 0:i.email)||"unknownuser"),sl(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function sl(t){return typeof t>"u"||(t==null?void 0:t.length)===0}var zy="@firebase/auth",By="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function M1(t){os(new ui("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qw(t)},c=new HC(r,i,s,u);return rk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new ui("auth-internal",e=>{const n=Pe(e.getProvider("auth").getImmediate());return(r=>new V1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(zy,By,L1(t)),yr(zy,By,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=5*60,F1=ww("authIdTokenMaxAge")||U1;let $y=null;const j1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>F1)return;const i=n==null?void 0:n.token;$y!==i&&($y=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VI(t=Rw()){const e=Jf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Zw(t,{popupRedirectResolver:NI,persistence:[SI,_I,cp]}),r=ww("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=j1(s.toString());pI(n,o,()=>o(n.currentUser)),fI(n,l=>o(l))}}const i=vw("auth");return i&&eI(n,`http://${i}`),n}function z1(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}WC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",z1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});M1("Browser");const gp=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:yC,ActionCodeURL:ws,AuthCredential:Es,AuthErrorCodes:EC,EmailAuthCredential:as,EmailAuthProvider:Mr,FacebookAuthProvider:_n,FactorId:fC,GithubAuthProvider:En,GoogleAuthProvider:vn,OAuthCredential:dn,OAuthProvider:Ao,OperationType:gC,PhoneAuthCredential:vr,PhoneAuthProvider:ni,PhoneMultiFactorGenerator:DI,ProviderId:pC,RecaptchaVerifier:VN,SAMLAuthProvider:cu,SignInMethod:mC,TotpMultiFactorGenerator:OI,TotpSecret:ec,TwitterAuthProvider:wn,applyActionCode:bk,beforeAuthStateChanged:pI,browserCookiePersistence:gN,browserLocalPersistence:_I,browserPopupRedirectResolver:NI,browserSessionPersistence:cp,checkActionCode:cI,confirmPasswordReset:Nk,connectAuthEmulator:eI,createUserWithEmailAndPassword:Ok,debugErrorMap:vC,deleteUser:oN,fetchSignInMethodsForEmail:jk,getAdditionalUserInfo:Xk,getAuth:VI,getIdToken:bC,getIdTokenResult:Mw,getMultiFactorResolver:aN,getRedirectResult:i1,inMemoryPersistence:Cd,indexedDBLocalPersistence:SI,initializeAuth:Zw,initializeRecaptchaConfig:eN,isSignInWithEmailLink:Mk,linkWithCredential:lI,linkWithPhoneNumber:UN,linkWithPopup:GN,linkWithRedirect:n1,multiFactor:dN,onAuthStateChanged:mI,onIdTokenChanged:fI,parseActionCodeURL:Tk,prodErrorMap:kw,reauthenticateWithCredential:uI,reauthenticateWithPhoneNumber:FN,reauthenticateWithPopup:qN,reauthenticateWithRedirect:e1,reload:Uw,revokeAccessToken:sN,sendEmailVerification:zk,sendPasswordResetEmail:kk,sendSignInLinkToEmail:Lk,setPersistence:Zk,signInAnonymously:Rk,signInWithCredential:Ku,signInWithCustomToken:Ck,signInWithEmailAndPassword:Vk,signInWithEmailLink:Uk,signInWithPhoneNumber:MN,signInWithPopup:WN,signInWithRedirect:XN,signOut:iN,unlink:xk,updateCurrentUser:rN,updateEmail:Wk,updatePassword:qk,updatePhoneNumber:jN,updateProfile:Hk,useDeviceLanguage:nN,validatePassword:tN,verifyBeforeUpdateEmail:Bk,verifyPasswordResetCode:Dk},Symbol.toStringTag,{value:"Module"}));var Hy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,LI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function I(){}I.prototype=_.prototype,w.F=_.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(A,x,C){for(var S=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)S[Ke-2]=arguments[Ke];return _.prototype[x].apply(A,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,I){I||(I=0);const A=Array(16);if(typeof _=="string")for(var x=0;x<16;++x)A[x]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(x=0;x<16;++x)A[x]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=w.g[0],I=w.g[1],x=w.g[2];let C=w.g[3],S;S=_+(C^I&(x^C))+A[0]+3614090360&4294967295,_=I+(S<<7&4294967295|S>>>25),S=C+(x^_&(I^x))+A[1]+3905402710&4294967295,C=_+(S<<12&4294967295|S>>>20),S=x+(I^C&(_^I))+A[2]+606105819&4294967295,x=C+(S<<17&4294967295|S>>>15),S=I+(_^x&(C^_))+A[3]+3250441966&4294967295,I=x+(S<<22&4294967295|S>>>10),S=_+(C^I&(x^C))+A[4]+4118548399&4294967295,_=I+(S<<7&4294967295|S>>>25),S=C+(x^_&(I^x))+A[5]+1200080426&4294967295,C=_+(S<<12&4294967295|S>>>20),S=x+(I^C&(_^I))+A[6]+2821735955&4294967295,x=C+(S<<17&4294967295|S>>>15),S=I+(_^x&(C^_))+A[7]+4249261313&4294967295,I=x+(S<<22&4294967295|S>>>10),S=_+(C^I&(x^C))+A[8]+1770035416&4294967295,_=I+(S<<7&4294967295|S>>>25),S=C+(x^_&(I^x))+A[9]+2336552879&4294967295,C=_+(S<<12&4294967295|S>>>20),S=x+(I^C&(_^I))+A[10]+4294925233&4294967295,x=C+(S<<17&4294967295|S>>>15),S=I+(_^x&(C^_))+A[11]+2304563134&4294967295,I=x+(S<<22&4294967295|S>>>10),S=_+(C^I&(x^C))+A[12]+1804603682&4294967295,_=I+(S<<7&4294967295|S>>>25),S=C+(x^_&(I^x))+A[13]+4254626195&4294967295,C=_+(S<<12&4294967295|S>>>20),S=x+(I^C&(_^I))+A[14]+2792965006&4294967295,x=C+(S<<17&4294967295|S>>>15),S=I+(_^x&(C^_))+A[15]+1236535329&4294967295,I=x+(S<<22&4294967295|S>>>10),S=_+(x^C&(I^x))+A[1]+4129170786&4294967295,_=I+(S<<5&4294967295|S>>>27),S=C+(I^x&(_^I))+A[6]+3225465664&4294967295,C=_+(S<<9&4294967295|S>>>23),S=x+(_^I&(C^_))+A[11]+643717713&4294967295,x=C+(S<<14&4294967295|S>>>18),S=I+(C^_&(x^C))+A[0]+3921069994&4294967295,I=x+(S<<20&4294967295|S>>>12),S=_+(x^C&(I^x))+A[5]+3593408605&4294967295,_=I+(S<<5&4294967295|S>>>27),S=C+(I^x&(_^I))+A[10]+38016083&4294967295,C=_+(S<<9&4294967295|S>>>23),S=x+(_^I&(C^_))+A[15]+3634488961&4294967295,x=C+(S<<14&4294967295|S>>>18),S=I+(C^_&(x^C))+A[4]+3889429448&4294967295,I=x+(S<<20&4294967295|S>>>12),S=_+(x^C&(I^x))+A[9]+568446438&4294967295,_=I+(S<<5&4294967295|S>>>27),S=C+(I^x&(_^I))+A[14]+3275163606&4294967295,C=_+(S<<9&4294967295|S>>>23),S=x+(_^I&(C^_))+A[3]+4107603335&4294967295,x=C+(S<<14&4294967295|S>>>18),S=I+(C^_&(x^C))+A[8]+1163531501&4294967295,I=x+(S<<20&4294967295|S>>>12),S=_+(x^C&(I^x))+A[13]+2850285829&4294967295,_=I+(S<<5&4294967295|S>>>27),S=C+(I^x&(_^I))+A[2]+4243563512&4294967295,C=_+(S<<9&4294967295|S>>>23),S=x+(_^I&(C^_))+A[7]+1735328473&4294967295,x=C+(S<<14&4294967295|S>>>18),S=I+(C^_&(x^C))+A[12]+2368359562&4294967295,I=x+(S<<20&4294967295|S>>>12),S=_+(I^x^C)+A[5]+4294588738&4294967295,_=I+(S<<4&4294967295|S>>>28),S=C+(_^I^x)+A[8]+2272392833&4294967295,C=_+(S<<11&4294967295|S>>>21),S=x+(C^_^I)+A[11]+1839030562&4294967295,x=C+(S<<16&4294967295|S>>>16),S=I+(x^C^_)+A[14]+4259657740&4294967295,I=x+(S<<23&4294967295|S>>>9),S=_+(I^x^C)+A[1]+2763975236&4294967295,_=I+(S<<4&4294967295|S>>>28),S=C+(_^I^x)+A[4]+1272893353&4294967295,C=_+(S<<11&4294967295|S>>>21),S=x+(C^_^I)+A[7]+4139469664&4294967295,x=C+(S<<16&4294967295|S>>>16),S=I+(x^C^_)+A[10]+3200236656&4294967295,I=x+(S<<23&4294967295|S>>>9),S=_+(I^x^C)+A[13]+681279174&4294967295,_=I+(S<<4&4294967295|S>>>28),S=C+(_^I^x)+A[0]+3936430074&4294967295,C=_+(S<<11&4294967295|S>>>21),S=x+(C^_^I)+A[3]+3572445317&4294967295,x=C+(S<<16&4294967295|S>>>16),S=I+(x^C^_)+A[6]+76029189&4294967295,I=x+(S<<23&4294967295|S>>>9),S=_+(I^x^C)+A[9]+3654602809&4294967295,_=I+(S<<4&4294967295|S>>>28),S=C+(_^I^x)+A[12]+3873151461&4294967295,C=_+(S<<11&4294967295|S>>>21),S=x+(C^_^I)+A[15]+530742520&4294967295,x=C+(S<<16&4294967295|S>>>16),S=I+(x^C^_)+A[2]+3299628645&4294967295,I=x+(S<<23&4294967295|S>>>9),S=_+(x^(I|~C))+A[0]+4096336452&4294967295,_=I+(S<<6&4294967295|S>>>26),S=C+(I^(_|~x))+A[7]+1126891415&4294967295,C=_+(S<<10&4294967295|S>>>22),S=x+(_^(C|~I))+A[14]+2878612391&4294967295,x=C+(S<<15&4294967295|S>>>17),S=I+(C^(x|~_))+A[5]+4237533241&4294967295,I=x+(S<<21&4294967295|S>>>11),S=_+(x^(I|~C))+A[12]+1700485571&4294967295,_=I+(S<<6&4294967295|S>>>26),S=C+(I^(_|~x))+A[3]+2399980690&4294967295,C=_+(S<<10&4294967295|S>>>22),S=x+(_^(C|~I))+A[10]+4293915773&4294967295,x=C+(S<<15&4294967295|S>>>17),S=I+(C^(x|~_))+A[1]+2240044497&4294967295,I=x+(S<<21&4294967295|S>>>11),S=_+(x^(I|~C))+A[8]+1873313359&4294967295,_=I+(S<<6&4294967295|S>>>26),S=C+(I^(_|~x))+A[15]+4264355552&4294967295,C=_+(S<<10&4294967295|S>>>22),S=x+(_^(C|~I))+A[6]+2734768916&4294967295,x=C+(S<<15&4294967295|S>>>17),S=I+(C^(x|~_))+A[13]+1309151649&4294967295,I=x+(S<<21&4294967295|S>>>11),S=_+(x^(I|~C))+A[4]+4149444226&4294967295,_=I+(S<<6&4294967295|S>>>26),S=C+(I^(_|~x))+A[11]+3174756917&4294967295,C=_+(S<<10&4294967295|S>>>22),S=x+(_^(C|~I))+A[2]+718787259&4294967295,x=C+(S<<15&4294967295|S>>>17),S=I+(C^(x|~_))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(x+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+x&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const I=_-this.blockSize,A=this.C;let x=this.h,C=0;for(;C<_;){if(x==0)for(;C<=I;)i(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<_;)if(A[x++]=w.charCodeAt(C++),x==this.blockSize){i(this,A),x=0;break}}else for(;C<_;)if(A[x++]=w[C++],x==this.blockSize){i(this,A),x=0;break}}this.h=x,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,I=0;I<4;++I)for(let A=0;A<32;A+=8)w[_++]=this.g[I]>>>A&255;return w};function s(w,_){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=_(w)}function o(w,_){this.h=_;const I=[];let A=!0;for(let x=w.length-1;x>=0;x--){const C=w[x]|0;A&&C==_||(I[x]=C,A=!1)}this.g=I}var l={};function u(w){return-128<=w&&w<128?s(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return b(c(-w));const _=[];let I=1;for(let A=0;w>=I;A++)_[A]=w/I|0,I*=4294967296;return new o(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return b(d(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=c(Math.pow(_,8));let A=p;for(let C=0;C<w.length;C+=8){var x=Math.min(8,w.length-C);const S=parseInt(w.substring(C,C+x),_);x<8?(x=c(Math.pow(_,x)),A=A.j(x).add(c(S))):(A=A.j(I),A=A.add(c(S)))}return A}var p=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-b(this).m();let w=0,_=1;for(let I=0;I<this.g.length;I++){const A=this.i(I);w+=(A>=0?A:4294967296+A)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(N(this))return"-"+b(this).toString(w);const _=c(Math.pow(w,6));var I=this;let A="";for(;;){const x=O(I,_).g;I=T(I,x.j(_));let C=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=x,P(I))return C+A;for(;C.length<6;)C="0"+C;A=C+A}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=T(this,w),N(w)?-1:P(w)?0:1};function b(w){const _=w.g.length,I=[];for(let A=0;A<_;A++)I[A]=~w.g[A];return new o(I,~w.h).add(m)}t.abs=function(){return N(this)?b(this):this},t.add=function(w){const _=Math.max(this.g.length,w.g.length),I=[];let A=0;for(let x=0;x<=_;x++){let C=A+(this.i(x)&65535)+(w.i(x)&65535),S=(C>>>16)+(this.i(x)>>>16)+(w.i(x)>>>16);A=S>>>16,C&=65535,S&=65535,I[x]=S<<16|C}return new o(I,I[I.length-1]&-2147483648?-1:0)};function T(w,_){return w.add(b(_))}t.j=function(w){if(P(this)||P(w))return p;if(N(this))return N(w)?b(this).j(b(w)):b(b(this).j(w));if(N(w))return b(this.j(b(w)));if(this.l(E)<0&&w.l(E)<0)return c(this.m()*w.m());const _=this.g.length+w.g.length,I=[];for(var A=0;A<2*_;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(let x=0;x<w.g.length;x++){const C=this.i(A)>>>16,S=this.i(A)&65535,Ke=w.i(x)>>>16,mn=w.i(x)&65535;I[2*A+2*x]+=S*mn,v(I,2*A+2*x),I[2*A+2*x+1]+=C*mn,v(I,2*A+2*x+1),I[2*A+2*x+1]+=S*Ke,v(I,2*A+2*x+1),I[2*A+2*x+2]+=C*Ke,v(I,2*A+2*x+2)}for(w=0;w<_;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=_;w<2*_;w++)I[w]=0;return new o(I,0)};function v(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function R(w,_){this.g=w,this.h=_}function O(w,_){if(P(_))throw Error("division by zero");if(P(w))return new R(p,p);if(N(w))return _=O(b(w),_),new R(b(_.g),b(_.h));if(N(_))return _=O(w,b(_)),new R(b(_.g),_.h);if(w.g.length>30){if(N(w)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=_;A.l(w)<=0;)I=j(I),A=j(A);var x=z(I,1),C=z(A,1);for(A=z(A,2),I=z(I,2);!P(A);){var S=C.add(A);S.l(w)<=0&&(x=x.add(I),C=S),A=z(A,1),I=z(I,1)}return _=T(w,x.j(_)),new R(x,_)}for(x=p;w.l(_)>=0;){for(I=Math.max(1,Math.floor(w.m()/_.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),C=c(I),S=C.j(_);N(S)||S.l(w)>0;)I-=A,C=c(I),S=C.j(_);P(C)&&(C=m),x=x.add(C),w=T(w,S)}return new R(x,w)}t.B=function(w){return O(this,w).h},t.and=function(w){const _=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<_;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){const _=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<_;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){const _=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<_;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function j(w){const _=w.g.length+1,I=[];for(let A=0;A<_;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function z(w,_){const I=_>>5;_%=32;const A=w.g.length-I,x=[];for(let C=0;C<A;C++)x[C]=_>0?w.i(C+I)>>>_|w.i(C+I+1)<<32-_:w.i(C+I);return new o(x,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,LI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Er=o}).apply(typeof Hy<"u"?Hy:typeof self<"u"?self:typeof window<"u"?window:{});var ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var MI,co,UI,Cl,Nd,FI,jI,zI;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ol=="object"&&ol];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var k=a[y];if(!(k in f))break e;f=f[k]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,k,D){for(var B=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)B[ee-2]=arguments[ee];return h.prototype[k].apply(y,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function P(a,h){for(let y=1;y<arguments.length;y++){const k=arguments[y];var f=typeof k;if(f=f!="object"?f:k?Array.isArray(k)?"array":f:"null",f=="array"||f=="object"&&typeof k.length=="number"){f=a.length||0;const D=k.length||0;a.length=f+D;for(let B=0;B<D;B++)a[f+B]=k[B]}else a.push(k)}}class N{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function T(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,f){const y=R.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var R=new N(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let j,z=!1,w=new v,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(I)}};function I(){for(var a;a=T();){try{a.h.call(a.g)}catch(f){b(f)}var h=R;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}z=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function Ke(a,h){x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Ke,x),Ke.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ke.Z.h.call(this)},Ke.prototype.h=function(){Ke.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var mn="closure_listenable_"+(Math.random()*1e6|0),Cs=0;function ks(a,h,f,y,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=k,this.key=++Cs,this.da=this.fa=!1}function W(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function Z(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function ve(a){const h={};for(const f in a)h[f]=a[f];return h}const Ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fr(a,h){let f,y;for(let k=1;k<arguments.length;k++){y=arguments[k];for(f in y)a[f]=y[f];for(let D=0;D<Ce.length;D++)f=Ce[D],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function Nt(a){this.src=a,this.g={},this.h=0}Nt.prototype.add=function(a,h,f,y,k){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const B=zt(a,h,y,k);return B>-1?(h=a[B],f||(h.fa=!1)):(h=new ks(h,this.src,D,!!y,k),h.fa=f,a.push(h)),h};function jr(a,h){const f=h.type;if(f in a.g){var y=a.g[f],k=Array.prototype.indexOf.call(y,h,void 0),D;(D=k>=0)&&Array.prototype.splice.call(y,k,1),D&&(W(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function zt(a,h,f,y){for(let k=0;k<a.length;++k){const D=a[k];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==y)return k}return-1}var $n="closure_lm_"+(Math.random()*1e6|0),mc={};function Yp(a,h,f,y,k){if(Array.isArray(h)){for(let D=0;D<h.length;D++)Yp(a,h[D],f,y,k);return null}return f=Zp(f),a&&a[mn]?a.J(h,f,l(y)?!!y.capture:!1,k):IS(a,h,f,!1,y,k)}function IS(a,h,f,y,k,D){if(!h)throw Error("Invalid event type");const B=l(k)?!!k.capture:!!k;let ee=yc(a);if(ee||(a[$n]=ee=new Nt(a)),f=ee.add(h,f,y,B,D),f.proxy)return f;if(y=TS(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)C||(k=B),k===void 0&&(k=!1),a.addEventListener(h.toString(),y,k);else if(a.attachEvent)a.attachEvent(Xp(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function TS(){function a(f){return h.call(a.src,a.listener,f)}const h=SS;return a}function Jp(a,h,f,y,k){if(Array.isArray(h))for(var D=0;D<h.length;D++)Jp(a,h[D],f,y,k);else y=l(y)?!!y.capture:!!y,f=Zp(f),a&&a[mn]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],f=zt(h,f,y,k),f>-1&&(W(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=yc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=zt(h,f,y,k)),(f=a>-1?h[a]:null)&&gc(f))}function gc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[mn])jr(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Xp(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=yc(h))?(jr(f,a),f.h==0&&(f.src=null,h[$n]=null)):W(a)}}}function Xp(a){return a in mc?mc[a]:mc[a]="on"+a}function SS(a,h){if(a.da)a=!0;else{h=new Ke(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&gc(a),a=f.call(y,h)}return a}function yc(a){return a=a[$n],a instanceof Nt?a:null}var _c="__closure_events_fn_"+(Math.random()*1e9>>>0);function Zp(a){return typeof a=="function"?a:(a[_c]||(a[_c]=function(h){return a.handleEvent(h)}),a[_c])}function tt(){A.call(this),this.i=new Nt(this),this.M=this,this.G=null}p(tt,A),tt.prototype[mn]=!0,tt.prototype.removeEventListener=function(a,h,f,y){Jp(this,a,h,f,y)};function ct(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new x(h,a);else if(h instanceof x)h.target=h.target||a;else{var k=h;h=new x(y,a),Fr(h,k)}k=!0;let D,B;if(f)for(B=f.length-1;B>=0;B--)D=h.g=f[B],k=Ca(D,y,!0,h)&&k;if(D=h.g=a,k=Ca(D,y,!0,h)&&k,k=Ca(D,y,!1,h)&&k,f)for(B=0;B<f.length;B++)D=h.g=f[B],k=Ca(D,y,!1,h)&&k}tt.prototype.N=function(){if(tt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)W(f[y]);delete a.g[h],a.h--}}this.G=null},tt.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},tt.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Ca(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let k=!0;for(let D=0;D<h.length;++D){const B=h[D];if(B&&!B.da&&B.capture==f){const ee=B.listener,Ue=B.ha||B.src;B.fa&&jr(a.i,B),k=ee.call(Ue,y)!==!1&&k}}return k&&!y.defaultPrevented}function AS(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function em(a){a.g=AS(()=>{a.g=null,a.i&&(a.i=!1,em(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class RS extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:em(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ns(a){A.call(this),this.h=a,this.g={}}p(Ns,A);var tm=[];function nm(a){Y(a.g,function(h,f){this.g.hasOwnProperty(f)&&gc(h)},a),a.g={}}Ns.prototype.N=function(){Ns.Z.N.call(this),nm(this)},Ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vc=o.JSON.stringify,xS=o.JSON.parse,PS=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function rm(){}function im(){}var bs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ec(){x.call(this,"d")}p(Ec,x);function wc(){x.call(this,"c")}p(wc,x);var zr={},sm=null;function ka(){return sm=sm||new tt}zr.Ia="serverreachability";function om(a){x.call(this,zr.Ia,a)}p(om,x);function Ds(a){const h=ka();ct(h,new om(h))}zr.STAT_EVENT="statevent";function am(a,h){x.call(this,zr.STAT_EVENT,a),this.stat=h}p(am,x);function ht(a){const h=ka();ct(h,new am(h,a))}zr.Ja="timingevent";function lm(a,h){x.call(this,zr.Ja,a),this.size=h}p(lm,x);function Os(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Vs(){this.g=!0}Vs.prototype.ua=function(){this.g=!1};function CS(a,h,f,y,k,D){a.info(function(){if(a.g)if(D){var B="",ee=D.split("&");for(let ce=0;ce<ee.length;ce++){var Ue=ee[ce].split("=");if(Ue.length>1){const Be=Ue[0];Ue=Ue[1];const en=Be.split("_");B=en.length>=2&&en[1]=="type"?B+(Be+"="+Ue+"&"):B+(Be+"=redacted&")}}}else B=null;else B=D;return"XMLHTTP REQ ("+y+") [attempt "+k+"]: "+h+`
`+f+`
`+B})}function kS(a,h,f,y,k,D,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+k+"]: "+h+`
`+f+`
`+D+" "+B})}function Ei(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+bS(a,f)+(y?" "+y:"")})}function NS(a,h){a.info(function(){return"TIMEOUT: "+h})}Vs.prototype.info=function(){};function bS(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var f=D[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var k=y[0];if(k!="noop"&&k!="stop"&&k!="close")for(let B=1;B<y.length;B++)y[B]=""}}}}return vc(D)}catch{return h}}var Na={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},um={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cm;function Ic(){}p(Ic,rm),Ic.prototype.g=function(){return new XMLHttpRequest},cm=new Ic;function Ls(a){return encodeURIComponent(String(a))}function DS(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Hn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new Ns(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hm}function hm(){this.i=null,this.g="",this.h=!1}var dm={},Tc={};function Sc(a,h,f){a.M=1,a.A=Da(Zt(h)),a.u=f,a.R=!0,fm(a,null)}function fm(a,h){a.F=Date.now(),ba(a),a.B=Zt(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Rm(f.i,"t",y),a.C=0,f=a.j.L,a.h=new hm,a.g=Hm(a.j,f?h:null,!a.u),a.P>0&&(a.O=new RS(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var k="readystatechange";Array.isArray(k)||(k&&(tm[0]=k.toString()),k=tm);for(let D=0;D<k.length;D++){const B=Yp(f,k[D],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?ve(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ds(),CS(a.i,a.v,a.B,a.l,a.S,a.u)}Hn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Gn(a)==3?h.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Gn(this.g),Ue=this.g.ya(),ce=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Dm(this.g)))){this.K||ee!=4||Ue==7||(Ue==8||ce<=0?Ds(3):Ds(2)),Ac(this);var h=this.g.ca();this.X=h;var f=OS(this);if(this.o=h==200,kS(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,k=this.g;if((y=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(y)){var D=y;break t}}D=null}if(a=D)Ei(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Rc(this,a);else{this.o=!1,this.m=3,ht(12),Br(this),Ms(this);break e}}if(this.R){a=!0;let Be;for(;!this.K&&this.C<f.length;)if(Be=VS(this,f),Be==Tc){ee==4&&(this.m=4,ht(14),a=!1),Ei(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==dm){this.m=4,ht(15),Ei(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Ei(this.i,this.l,Be,null),Rc(this,Be);if(pm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||f.length!=0||this.h.h||(this.m=1,ht(16),a=!1),this.o=this.o&&a,!a)Ei(this.i,this.l,f,"[Invalid Chunked Response]"),Br(this),Ms(this);else if(f.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Oc(B),B.P=!0,ht(11))}}else Ei(this.i,this.l,f,null),Rc(this,f);ee==4&&Br(this),this.o&&!this.K&&(ee==4?jm(this.j,this):(this.o=!1,ba(this)))}else QS(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ht(12)):(this.m=0,ht(13)),Br(this),Ms(this)}}}catch{}finally{}};function OS(a){if(!pm(a))return a.g.la();const h=Dm(a.g);if(h==="")return"";let f="";const y=h.length,k=Gn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Br(a),Ms(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<y;D++)a.h.h=!0,f+=a.h.i.decode(h[D],{stream:!(k&&D==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function pm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function VS(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Tc:(f=Number(h.substring(f,y)),isNaN(f)?dm:(y+=1,y+f>h.length?Tc:(h=h.slice(y,y+f),a.C=y+f,h)))}Hn.prototype.cancel=function(){this.K=!0,Br(this)};function ba(a){a.T=Date.now()+a.H,mm(a,a.H)}function mm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Os(c(a.aa,a),h)}function Ac(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Hn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(NS(this.i,this.B),this.M!=2&&(Ds(),ht(17)),Br(this),this.m=2,Ms(this)):mm(this,this.T-a)};function Ms(a){a.j.I==0||a.K||jm(a.j,a)}function Br(a){Ac(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,nm(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Rc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||xc(f.h,a))){if(!a.L&&xc(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var k=y;if(k[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ua(f),La(f);else break e;Dc(f),ht(18)}}else f.xa=k[1],0<f.xa-f.K&&k[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Os(c(f.Va,f),6e3));_m(f.h)<=1&&f.ta&&(f.ta=void 0)}else Hr(f,11)}else if((a.L||f.g==a)&&Ua(f),!S(h))for(k=f.Ba.g.parse(h),h=0;h<k.length;h++){let ce=k[h];const Be=ce[0];if(!(Be<=f.K))if(f.K=Be,ce=ce[1],f.I==2)if(ce[0]=="c"){f.M=ce[1],f.ba=ce[2];const en=ce[3];en!=null&&(f.ka=en,f.j.info("VER="+f.ka));const Wr=ce[4];Wr!=null&&(f.za=Wr,f.j.info("SVER="+f.za));const Kn=ce[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(y=1.5*Kn,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Qn=a.g;if(Qn){const ja=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ja){var D=y.h;D.g||ja.indexOf("spdy")==-1&&ja.indexOf("quic")==-1&&ja.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Pc(D,D.h),D.h=null))}if(y.G){const Vc=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vc&&(y.wa=Vc,fe(y.J,y.G,Vc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var B=a;if(y.na=$m(y,y.L?y.ba:null,y.W),B.L){vm(y.h,B);var ee=B,Ue=y.O;Ue&&(ee.H=Ue),ee.D&&(Ac(ee),ba(ee)),y.g=B}else Um(y);f.i.length>0&&Ma(f)}else ce[0]!="stop"&&ce[0]!="close"||Hr(f,7);else f.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Hr(f,7):bc(f):ce[0]!="noop"&&f.l&&f.l.qa(ce),f.A=0)}}Ds(4)}catch{}}var LS=class{constructor(a,h){this.g=a,this.map=h}};function gm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ym(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function _m(a){return a.h?1:a.g?a.g.size:0}function xc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Pc(a,h){a.g?a.g.add(h):a.h=h}function vm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}gm.prototype.cancel=function(){if(this.i=Em(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Em(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return E(a.i)}var wm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MS(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let k,D=null;y>=0?(k=a[f].substring(0,y),D=a[f].substring(y+1)):k=a[f],h(k,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Wn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Wn?(this.l=a.l,Us(this,a.j),this.o=a.o,this.g=a.g,Fs(this,a.u),this.h=a.h,Cc(this,xm(a.i)),this.m=a.m):a&&(h=String(a).match(wm))?(this.l=!1,Us(this,h[1]||"",!0),this.o=js(h[2]||""),this.g=js(h[3]||"",!0),Fs(this,h[4]),this.h=js(h[5]||"",!0),Cc(this,h[6]||"",!0),this.m=js(h[7]||"")):(this.l=!1,this.i=new Bs(null,this.l))}Wn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(zs(h,Im,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(zs(h,Im,!0),"@"),a.push(Ls(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(zs(f,f.charAt(0)=="/"?jS:FS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",zs(f,BS)),a.join("")},Wn.prototype.resolve=function(a){const h=Zt(this);let f=!!a.j;f?Us(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)Fs(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var k=h.h.lastIndexOf("/");k!=-1&&(y=h.h.slice(0,k+1)+y)}if(k=y,k==".."||k==".")y="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){y=k.lastIndexOf("/",0)==0,k=k.split("/");const D=[];for(let B=0;B<k.length;){const ee=k[B++];ee=="."?y&&B==k.length&&D.push(""):ee==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),y&&B==k.length&&D.push("")):(D.push(ee),y=!0)}y=D.join("/")}else y=k}return f?h.h=y:f=a.i.toString()!=="",f?Cc(h,xm(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Zt(a){return new Wn(a)}function Us(a,h,f){a.j=f?js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Cc(a,h,f){h instanceof Bs?(a.i=h,$S(a.i,a.l)):(f||(h=zs(h,zS)),a.i=new Bs(h,a.l))}function fe(a,h,f){a.i.set(h,f)}function Da(a){return fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,US),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function US(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Im=/[#\/\?@]/g,FS=/[#\?:]/g,jS=/[#\?]/g,zS=/[#\?@]/g,BS=/#/g;function Bs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $r(a){a.g||(a.g=new Map,a.h=0,a.i&&MS(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Bs.prototype,t.add=function(a,h){$r(this),this.i=null,a=wi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Tm(a,h){$r(a),h=wi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Sm(a,h){return $r(a),h=wi(a,h),a.g.has(h)}t.forEach=function(a,h){$r(this),this.g.forEach(function(f,y){f.forEach(function(k){a.call(h,k,y,this)},this)},this)};function Am(a,h){$r(a);let f=[];if(typeof h=="string")Sm(a,h)&&(f=f.concat(a.g.get(wi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return $r(this),this.i=null,a=wi(this,a),Sm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Am(this,a),a.length>0?String(a[0]):h):h};function Rm(a,h,f){Tm(a,h),f.length>0&&(a.i=null,a.g.set(wi(a,h),E(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const k=Ls(f);f=Am(this,f);for(let D=0;D<f.length;D++){let B=k;f[D]!==""&&(B+="="+Ls(f[D])),a.push(B)}}return this.i=a.join("&")};function xm(a){const h=new Bs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function wi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function $S(a,h){h&&!a.j&&($r(a),a.i=null,a.g.forEach(function(f,y){const k=y.toLowerCase();y!=k&&(Tm(this,y),Rm(this,k,f))},a)),a.j=h}function HS(a,h){const f=new Vs;if(o.Image){const y=new Image;y.onload=d(qn,f,"TestLoadImage: loaded",!0,h,y),y.onerror=d(qn,f,"TestLoadImage: error",!1,h,y),y.onabort=d(qn,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(qn,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function WS(a,h){const f=new Vs,y=new AbortController,k=setTimeout(()=>{y.abort(),qn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(k),D.ok?qn(f,"TestPingServer: ok",!0,h):qn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),qn(f,"TestPingServer: error",!1,h)})}function qn(a,h,f,y,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),y(f)}catch{}}function qS(){this.g=new PS}function kc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(kc,rm),kc.prototype.g=function(){return new Oa(this.i,this.h)};function Oa(a,h){tt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Oa,tt),t=Oa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Pm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Pm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?$s(this):Hs(this),this.readyState==3&&Pm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,$s(this))},t.Na=function(a){this.g&&(this.response=a,$s(this))},t.ga=function(){this.g&&$s(this)};function $s(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Hs(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cm(a){let h="";return Y(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Nc(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Cm(f),typeof a=="string"?f!=null&&Ls(f):fe(a,h,f))}function Re(a){tt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Re,tt);var GS=/^https?$/i,KS=["POST","PUT"];t=Re.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cm.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){km(this,D);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var k in y)f.set(k,y[k]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())f.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),k=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(KS,h,void 0)>=0)||y||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of f)this.g.setRequestHeader(D,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){km(this,D)}};function km(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Nm(a),Va(a)}function Nm(a){a.A||(a.A=!0,ct(a,"complete"),ct(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ct(this,"complete"),ct(this,"abort"),Va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Va(this,!0)),Re.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?bm(this):this.Xa())},t.Xa=function(){bm(this)};function bm(a){if(a.h&&typeof s<"u"){if(a.v&&Gn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ct(a,"readystatechange"),Gn(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=D===0){let B=String(a.D).match(wm)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),y=!GS.test(B?B.toLowerCase():"")}f=y}if(f)ct(a,"complete"),ct(a,"success");else{a.o=6;try{var k=Gn(a)>2?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.ca()+"]",Nm(a)}}finally{Va(a)}}}}function Va(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||ct(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Gn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Gn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xS(h)}};function Dm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function QS(a){const h={};a=(a.g&&Gn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(S(a[y]))continue;var f=DS(a[y]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[k]||[];h[k]=D,D.push(f)}Z(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Om(a){this.za=0,this.i=[],this.j=new Vs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ws("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ws("baseRetryDelayMs",5e3,a),this.Za=Ws("retryDelaySeedMs",1e4,a),this.Ta=Ws("forwardChannelMaxRetries",2,a),this.va=Ws("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new gm(a&&a.concurrentRequestLimit),this.Ba=new qS,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Om.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,y){ht(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=$m(this,null,this.W),Ma(this)};function bc(a){if(Vm(a),a.I==3){var h=a.V++,f=Zt(a.J);if(fe(f,"SID",a.M),fe(f,"RID",h),fe(f,"TYPE","terminate"),qs(a,f),h=new Hn(a,a.j,h),h.M=2,h.A=Da(Zt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Hm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ba(h)}Bm(a)}function La(a){a.g&&(Oc(a),a.g.cancel(),a.g=null)}function Vm(a){La(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ua(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ma(a){if(!ym(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),z||(j(),z=!0),w.add(h,a),a.D=0}}function YS(a,h){return _m(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Os(c(a.Ea,a,h),zm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const k=new Hn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=ve(D),Fr(D,this.U)):D=this.U),this.u!==null||this.R||(k.J=D,D=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Mm(this,k,h),f=Zt(this.J),fe(f,"RID",a),fe(f,"CVER",22),this.G&&fe(f,"X-HTTP-Session-Id",this.G),qs(this,f),D&&(this.R?h="headers="+Ls(Cm(D))+"&"+h:this.u&&Nc(f,this.u,D)),Pc(this.h,k),this.Ra&&fe(f,"TYPE","init"),this.S?(fe(f,"$req",h),fe(f,"SID","null"),k.U=!0,Sc(k,f,null)):Sc(k,f,h),this.I=2}}else this.I==3&&(a?Lm(this,a):this.i.length==0||ym(this.h)||Lm(this))};function Lm(a,h){var f;h?f=h.l:f=a.V++;const y=Zt(a.J);fe(y,"SID",a.M),fe(y,"RID",f),fe(y,"AID",a.K),qs(a,y),a.u&&a.o&&Nc(y,a.u,a.o),f=new Hn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Mm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Pc(a.h,f),Sc(f,y,h)}function qs(a,h){a.H&&Y(a.H,function(f,y){fe(h,y,f)}),a.l&&Y({},function(f,y){fe(h,y,f)})}function Mm(a,h,f){f=Math.min(a.i.length,f);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var k=a.i;let ee=-1;for(;;){const Ue=["count="+f];ee==-1?f>0?(ee=k[0].g,Ue.push("ofs="+ee)):ee=0:Ue.push("ofs="+ee);let ce=!0;for(let Be=0;Be<f;Be++){var D=k[Be].g;const en=k[Be].map;if(D-=ee,D<0)ee=Math.max(0,k[Be].g-100),ce=!1;else try{D="req"+D+"_"||"";try{var B=en instanceof Map?en:Object.entries(en);for(const[Wr,Kn]of B){let Qn=Kn;l(Kn)&&(Qn=vc(Kn)),Ue.push(D+Wr+"="+encodeURIComponent(Qn))}}catch(Wr){throw Ue.push(D+"type="+encodeURIComponent("_badmap")),Wr}}catch{y&&y(en)}}if(ce){B=Ue.join("&");break e}}B=void 0}return a=a.i.splice(0,f),h.G=a,B}function Um(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),z||(j(),z=!0),w.add(h,a),a.A=0}}function Dc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Os(c(a.Da,a),zm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Fm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Os(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ht(10),La(this),Fm(this))};function Oc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Fm(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Zt(a.na);fe(h,"RID","rpc"),fe(h,"SID",a.M),fe(h,"AID",a.K),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&fe(h,"TO",a.ia),fe(h,"TYPE","xmlhttp"),qs(a,h),a.u&&a.o&&Nc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Da(Zt(h)),f.u=null,f.R=!0,fm(f,a)}t.Va=function(){this.C!=null&&(this.C=null,La(this),Dc(this),ht(19))};function Ua(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function jm(a,h){var f=null;if(a.g==h){Ua(a),Oc(a),a.g=null;var y=2}else if(xc(a.h,h))f=h.G,vm(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var k=a.D;y=ka(),ct(y,new lm(y,f)),Ma(a)}else Um(a);else if(k=h.m,k==3||k==0&&h.X>0||!(y==1&&YS(a,h)||y==2&&Dc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Hr(a,5);break;case 4:Hr(a,10);break;case 3:Hr(a,6);break;default:Hr(a,2)}}}function zm(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Hr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),y=a.Ua;const k=!y;y=new Wn(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Us(y,"https"),Da(y),k?HS(y.toString(),f):WS(y.toString(),f)}else ht(2);a.I=0,a.l&&a.l.pa(h),Bm(a),Vm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Bm(a){if(a.I=0,a.ja=[],a.l){const h=Em(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function $m(a,h,f){var y=f instanceof Wn?Zt(f):new Wn(f);if(y.g!="")h&&(y.g=h+"."+y.g),Fs(y,y.u);else{var k=o.location;y=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;const D=new Wn(null);y&&Us(D,y),h&&(D.g=h),k&&Fs(D,k),f&&(D.h=f),y=D}return f=a.G,h=a.wa,f&&h&&fe(y,f,h),fe(y,"VER",a.ka),qs(a,y),y}function Hm(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Re(new kc({ab:f})):new Re(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wm(){}t=Wm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Fa(){}Fa.prototype.g=function(a,h){return new St(a,h)};function St(a,h){tt.call(this),this.g=new Om(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ii(this)}p(St,tt),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){bc(this.g)},St.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=vc(a),a=f);h.i.push(new LS(h.Ya++,a)),h.I==3&&Ma(h)},St.prototype.N=function(){this.g.l=null,delete this.j,bc(this.g),delete this.g,St.Z.N.call(this)};function qm(a){Ec.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(qm,Ec);function Gm(){wc.call(this),this.status=1}p(Gm,wc);function Ii(a){this.g=a}p(Ii,Wm),Ii.prototype.ra=function(){ct(this.g,"a")},Ii.prototype.qa=function(a){ct(this.g,new qm(a))},Ii.prototype.pa=function(a){ct(this.g,new Gm)},Ii.prototype.oa=function(){ct(this.g,"b")},Fa.prototype.createWebChannel=Fa.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,zI=function(){return new Fa},jI=function(){return ka()},FI=zr,Nd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Na.NO_ERROR=0,Na.TIMEOUT=8,Na.HTTP_ERROR=6,Cl=Na,um.COMPLETE="complete",UI=um,im.EventType=bs,bs.OPEN="a",bs.CLOSE="b",bs.ERROR="c",bs.MESSAGE="d",tt.prototype.listen=tt.prototype.J,co=im,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,MI=Re}).apply(typeof ol<"u"?ol:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts="12.13.0";function B1(t){Ts=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Qf("@firebase/firestore");function Si(){return ci.logLevel}function $(t,...e){if(ci.logLevel<=ie.DEBUG){const n=e.map(yp);ci.debug(`Firestore (${Ts}): ${t}`,...n)}}function Mn(t,...e){if(ci.logLevel<=ie.ERROR){const n=e.map(yp);ci.error(`Firestore (${Ts}): ${t}`,...n)}}function hi(t,...e){if(ci.logLevel<=ie.WARN){const n=e.map(yp);ci.warn(`Firestore (${Ts}): ${t}`,...n)}}function yp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,BI(t,r,n)}function BI(t,e,n){let r=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Mn(r),new Error(r)}function le(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||BI(e,i,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class H1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class W1{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new $I(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class q1{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class G1{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new q1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Te(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){le(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Q1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function bd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return wh(i)===wh(s)?te(i,s):wh(i)?1:-1}return te(t.length,e.length)}const Y1=55296,J1=57343;function wh(t){const e=t.charCodeAt(0);return e>=Y1&&e<=J1}function ls(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=rn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return te(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),i=rn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?rn.extractNumericId(e).compare(rn.extractNumericId(n)):bd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Er.fromString(e.substring(4,e.length-2))}}class he extends rn{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const X1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends rn{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return X1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qy}static keyField(){return new Je([qy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(he.fromString(e))}static fromName(e){return new G(he.fromString(e).popFirst(5))}static empty(){return new G(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t,e,n){if(!n)throw new H(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Z1(t,e,n,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gy(t){if(!G.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ky(t){if(G.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function WI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function tc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function pu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tc(t);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function eb(t,e){if(e<=0)throw new H(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ea(t,e){if(!WI(t))throw new H(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=-62135596800,Yy=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Yy);return new me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Qy)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yy}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ea(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Me("string",me._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new me(0,0))}static max(){return new J(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=-1;function tb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new Ar(i,G.empty(),e)}function nb(t){return new Ar(t.readTime,t.key,ta)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(J.min(),G.empty(),ta)}static max(){return new Ar(J.max(),G.empty(),ta)}}function rb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==ib)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ob(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function As(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}nc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=-1;function rc(t){return t==null}function mu(t){return t===0&&1/t==-1/0}function ab(t){return typeof t=="number"&&Number.isInteger(t)&&!mu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="";function lb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jy(e)),e=ub(t.get(n),e);return Jy(e)}function ub(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case qI:n+="";break;default:n+=s}}return n}function Jy(t){return t+qI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function GI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new al(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new al(this.root,e,this.comparator,!1)}getReverseIterator(){return new al(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new al(this.root,e,this.comparator,!0)}}class al{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zy(this.data.getIterator())}getIteratorFrom(e){return new Zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new ze(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new KI("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const cb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(le(!!t,39018),typeof t=="string"){let e=0;const n=cb.exec(t);if(le(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="server_timestamp",YI="__type__",JI="__previous_value__",XI="__local_write_time__";function Ep(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[YI])==null?void 0:r.stringValue)===QI}function ic(t){const e=t.mapValue.fields[JI];return Ep(e)?ic(e):e}function na(t){const e=Rr(t.mapValue.fields[XI].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n,r,i,s,o,l,u,c,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=p}}const gu="(default)";class ra{constructor(e,n){this.projectId=e,this.database=n||gu}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database===gu}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}function db(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="__type__",fb="__max__",ll={mapValue:{}},eT="__vector__",yu="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ep(t)?4:mb(t)?9007199254740991:pb(t)?10:11:K(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Rr(i.timestampValue),l=Rr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return xr(i.bytesValue).isEqual(xr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),l=ke(s.doubleValue);return o===l?mu(o)===mu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Xy(o)!==Xy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!fn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function ia(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function us(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ke(s.integerValue||s.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return e_(t.timestampValue,e.timestampValue);case 4:return e_(na(t),na(e));case 5:return bd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=xr(s),u=xr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=te(l[c],u[c]);if(d!==0)return d}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=te(ke(s.latitude),ke(o.latitude));return l!==0?l:te(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return t_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,E,P,N;const l=s.fields||{},u=o.fields||{},c=(m=l[yu])==null?void 0:m.arrayValue,d=(E=u[yu])==null?void 0:E.arrayValue,p=te(((P=c==null?void 0:c.values)==null?void 0:P.length)||0,((N=d==null?void 0:d.values)==null?void 0:N.length)||0);return p!==0?p:t_(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ll.mapValue&&o===ll.mapValue)return 0;if(s===ll.mapValue)return 1;if(o===ll.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=bd(u[p],d[p]);if(m!==0)return m;const E=us(l[u[p]],c[d[p]]);if(E!==0)return E}return te(u.length,d.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function e_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Rr(t),r=Rr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function t_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=us(n[i],r[i]);if(s)return s}return te(n.length,r.length)}function cs(t){return Dd(t)}function Dd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dd(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function kl(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(t);return e?16+kl(e):16;case 5:return 2*t.stringValue.length;case 6:return xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+kl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return gi(r.fields,(s,o)=>{i+=s.length+kl(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function n_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Od(t){return!!t&&"integerValue"in t}function wp(t){return!!t&&"arrayValue"in t}function r_(t){return!!t&&"nullValue"in t}function i_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nl(t){return!!t&&"mapValue"in t}function pb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ZI])==null?void 0:r.stringValue)===eT}function xo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return gi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xo(t.arrayValue.values[n]);return e}return{...t}}function mb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===fb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xo(n)}setAll(e){let n=Je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=xo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){gi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ot(xo(this.value))}}function tT(t){const e=[];return gi(t.fields,(n,r)=>{const i=new Je([n]);if(Nl(r)){const s=tT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,J.min(),J.min(),J.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,i){return new at(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new at(e,2,n,J.min(),J.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,J.min(),J.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n){this.position=e,this.inclusive=n}}function s_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=us(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function o_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function gb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{}class Le extends nT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _b(e,n,r):n==="array-contains"?new wb(e,r):n==="in"?new Ib(e,r):n==="not-in"?new Tb(e,r):n==="array-contains-any"?new Sb(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vb(e,r):new Eb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(us(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends nT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Xt(e,n)}matches(e){return rT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rT(t){return t.op==="and"}function iT(t){return yb(t)&&rT(t)}function yb(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function Vd(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(iT(t))return t.filters.map(e=>Vd(e)).join(",");{const e=t.filters.map(n=>Vd(n)).join(",");return`${t.op}(${e})`}}function sT(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)}(t,e):t instanceof Xt?function(r,i){return i instanceof Xt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&sT(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function oT(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${cs(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(oT).join(" ,")+"}"}(t):"Filter"}class _b extends Le{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class vb extends Le{constructor(e,n){super(e,"in",n),this.keys=aT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Eb extends Le{constructor(e,n){super(e,"not-in",n),this.keys=aT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function aT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class wb extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wp(n)&&ia(n.arrayValue,this.value)}}class Ib extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class Tb extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ia(this.value.arrayValue,n)}}class Sb extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ia(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function a_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ab(t,e,n,r,i,s,o)}function Ip(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.Te=n}return e.Te}function Tp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!o_(t.startAt,e.startAt)&&o_(t.endAt,e.endAt)}function Ld(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Rb(t,e,n,r,i,s,o,l){return new Rs(t,e,n,r,i,s,o,l)}function lT(t){return new Rs(t)}function l_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xb(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function uT(t){return t.collectionGroup!==null}function Po(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(Je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new sa(s,r))}),n.has(Je.keyField().canonicalString())||e.Ie.push(new sa(Je.keyField(),r))}return e.Ie}function un(t){const e=X(t);return e.Ee||(e.Ee=Pb(e,Po(t))),e.Ee}function Pb(t,e){if(t.limitType==="F")return a_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new sa(i.field,s)});const n=t.endAt?new _u(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _u(t.startAt.position,t.startAt.inclusive):null;return a_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Md(t,e){const n=t.filters.concat([e]);return new Rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Cb(t,e){const n=t.explicitOrderBy.concat([e]);return new Rs(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function vu(t,e,n){return new Rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return Tp(un(t),un(e))&&t.limitType===e.limitType}function cT(t){return`${Ip(un(t))}|lt:${t.limitType}`}function Ai(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>oT(i)).join(", ")}]`),rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>cs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>cs(i)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function oc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Po(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=s_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Po(r),i)||r.endAt&&!function(o,l,u){const c=s_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Po(r),i))}(t,e)}function kb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hT(t){return(e,n)=>{let r=!1;for(const i of Po(t)){const s=Nb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Nb(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?us(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return GI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new we(G.comparator);function Un(){return bb}const dT=new we(G.comparator);function ho(...t){let e=dT;for(const n of t)e=e.insert(n.key,n);return e}function fT(t){let e=dT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return Co()}function pT(){return Co()}function Co(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Db=new we(G.comparator),Ob=new ze(G.comparator);function ne(...t){let e=Ob;for(const n of t)e=e.add(n);return e}const Vb=new ze(te);function Lb(){return Vb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mu(e)?"-0":e}}function mT(t){return{integerValue:""+t}}function Mb(t,e){return ab(e)?mT(e):Sp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this._=void 0}}function Ub(t,e,n){return t instanceof Eu?function(i,s){const o={fields:{[YI]:{stringValue:QI},[XI]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ep(s)&&(s=ic(s)),s&&(o.fields[JI]=s),{mapValue:o}}(n,e):t instanceof oa?yT(t,e):t instanceof aa?_T(t,e):function(i,s){const o=gT(i,s),l=u_(o)+u_(i.Ae);return Od(o)&&Od(i.Ae)?mT(l):Sp(i.serializer,l)}(t,e)}function Fb(t,e,n){return t instanceof oa?yT(t,e):t instanceof aa?_T(t,e):n}function gT(t,e){return t instanceof wu?function(r){return Od(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Eu extends ac{}class oa extends ac{constructor(e){super(),this.elements=e}}function yT(t,e){const n=vT(e);for(const r of t.elements)n.some(i=>fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class aa extends ac{constructor(e){super(),this.elements=e}}function _T(t,e){let n=vT(e);for(const r of t.elements)n=n.filter(i=>!fn(i,r));return{arrayValue:{values:n}}}class wu extends ac{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function u_(t){return ke(t.integerValue||t.doubleValue)}function vT(t){return wp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof oa&&i instanceof oa||r instanceof aa&&i instanceof aa?ls(r.elements,i.elements,fn):r instanceof wu&&i instanceof wu?fn(r.Ae,i.Ae):r instanceof Eu&&i instanceof Eu}(t.transform,e.transform)}class zb{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lc{}function ET(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new IT(t.key,Cn.none()):new wa(t.key,t.data,Cn.none());{const n=t.data,r=Ot.empty();let i=new ze(Je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _i(t.key,r,new Gt(i.toArray()),Cn.none())}}function Bb(t,e,n){t instanceof wa?function(i,s,o){const l=i.value.clone(),u=h_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof _i?function(i,s,o){if(!bl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=h_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(wT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ko(t,e,n,r){return t instanceof wa?function(s,o,l,u){if(!bl(s.precondition,o))return l;const c=s.value.clone(),d=d_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof _i?function(s,o,l,u){if(!bl(s.precondition,o))return l;const c=d_(s.fieldTransforms,u,o),d=o.data;return d.setAll(wT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return bl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function $b(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=gT(r.transform,i||null);s!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,s))}return n||null}function c_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ls(r,i,(s,o)=>jb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wa extends lc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _i extends lc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function h_(t,e,n){const r=new Map;le(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Fb(o,l,n[i]))}return r}function d_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Ub(s,o,e))}return r}class IT extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hb extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Bb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=pT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=ET(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>c_(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>c_(n,r))}}class Ap{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Db}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ap(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,se;function Kb(t){switch(t){case V.OK:return K(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function TT(t){if(t===void 0)return Mn("GRPC error has no .code"),V.UNKNOWN;switch(t){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return K(39323,{code:t})}}(se=De||(De={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new Er([4294967295,4294967295],0);function f_(t){const e=Qb().encode(t),n=new LI;return n.update(e),new Uint8Array(n.digest())}function p_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Er([n,r],0),new Er([i,s],0)]}class Rp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fo(`Invalid padding: ${n}`);if(r<0)throw new fo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Er.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Er.fromNumber(r)));return i.compare(Yb)===1&&(i=new Er([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=f_(e),[r,i]=p_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Rp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=f_(e),[r,i]=p_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ia(J.min(),i,new we(te),Un(),ne())}}class Ta{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ta(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class ST{constructor(e,n){this.targetId=e,this.Ce=n}}class AT{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class m_{constructor(){this.ve=0,this.Fe=g_(),this.Me=et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),n=ne(),r=ne();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Ta(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=g_()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Jb{constructor(e){this.Ge=e,this.ze=new Map,this.je=Un(),this.Je=ul(),this.He=ul(),this.Ze=new we(te)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Ld(s))if(r===0){const o=new G(s.path);this.et(n,o,at.newNoDocument(o,J.min()))}else le(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=xr(r).toUint8Array()}catch(u){if(u instanceof KI)return hi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Rp(o,i,s)}catch(u){return hi(u instanceof fo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Ld(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,at.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=ne();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ia(e,n,this.Ze,this.je,r);return this.je=Un(),this.Je=ul(),this.He=ul(),this.Ze=new we(te),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new m_,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new ze(te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ze(te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new m_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ul(){return new we(G.comparator)}function g_(){return new we(G.comparator)}const Xb={asc:"ASCENDING",desc:"DESCENDING"},Zb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eD={and:"AND",or:"OR"};class tD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ud(t,e){return t.useProto3Json||rc(e)?e:{value:e}}function Iu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function RT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nD(t,e){return Iu(t,e.toTimestamp())}function cn(t){return le(!!t,49232),J.fromTimestamp(function(n){const r=Rr(n);return new me(r.seconds,r.nanos)}(t))}function xp(t,e){return Fd(t,e).canonicalString()}function Fd(t,e){const n=function(i){return new he(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xT(t){const e=he.fromString(t);return le(bT(e),10190,{key:e.toString()}),e}function jd(t,e){return xp(t.databaseId,e.path)}function Ih(t,e){const n=xT(e);if(n.get(1)!==t.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(CT(n))}function PT(t,e){return xp(t.databaseId,e)}function rD(t){const e=xT(t);return e.length===4?he.emptyPath():CT(e)}function zd(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function CT(t){return le(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function y_(t,e,n){return{name:jd(t,e),fields:n.value.mapValue.fields}}function iD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(le(d===void 0||typeof d=="string",58123),et.fromBase64String(d||"")):(le(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),et.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:TT(c.code);return new H(d,c.message||"")}(o);n=new AT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ih(t,r.document.name),s=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):J.min(),l=new Ot({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Dl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ih(t,r.document),s=r.readTime?cn(r.readTime):J.min(),o=at.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Dl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ih(t,r.document),s=r.removedTargetIds||[];n=new Dl([],s,i,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Gb(i,s),l=r.targetId;n=new ST(l,o)}}return n}function sD(t,e){let n;if(e instanceof wa)n={update:y_(t,e.key,e.value)};else if(e instanceof IT)n={delete:jd(t,e.key)};else if(e instanceof _i)n={update:y_(t,e.key,e.data),updateMask:pD(e.fieldMask)};else{if(!(e instanceof Hb))return K(16599,{dt:e.type});n={verify:jd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Eu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof aa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:nD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function oD(t,e){return t&&t.length>0?(le(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?cn(i.updateTime):cn(s);return o.isEqual(J.min())&&(o=cn(s)),new zb(o,i.transformResults||[])}(n,e))):[]}function aD(t,e){return{documents:[PT(t,e.path)]}}function lD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=PT(t,i);const s=function(c){if(c.length!==0)return NT(Xt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ri(m.field),direction:hD(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ud(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function uD(t){let e=rD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=kT(p);return m instanceof Xt&&iT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new sa(xi(P.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,rc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,E=p.values||[];return new _u(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,E=p.values||[];return new _u(E,m)}(n.endAt)),Rb(e,i,o,s,l,"F",u,c)}function cD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xi(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xi(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xi(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xi(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Le.create(xi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>kT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function hD(t){return Xb[t]}function dD(t){return Zb[t]}function fD(t){return eD[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function xi(t){return Je.fromServerFormat(t.fieldPath)}function NT(t){return t instanceof Le?function(n){if(n.op==="=="){if(i_(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NAN"}};if(r_(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(i_(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NAN"}};if(r_(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(n.field),op:dD(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(i=>NT(i));return r.length===1?r[0]:{compositeFilter:{op:fD(n.op),filters:r}}}(t):K(54877,{filter:t})}function pD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function DT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,r,i,s=J.min(),o=J.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.yt=e}}function gD(t){const e=uD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(){this.bn=new _D}addToCollectionParentIndex(e,n){return this.bn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Ar.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class _D{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},OT=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(OT,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Cr(0)}static ar(){return new Cr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="LruGarbageCollector",vD=1048576;function E_([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class ED{constructor(e){this.Pr=e,this.buffer=new ze(E_),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();E_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(v_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){As(n)?$(v_,"Ignoring IndexedDB error during garbage collection: ",n):await Ss(n)}await this.Ar(3e5)})}}class ID{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(nc.ce);const r=new ED(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(__)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),__):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Si()<=ie.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function TD(t,e){return new ID(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ko(r.mutation,i,Gt.empty(),me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ho();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Un();const o=Co(),l=function(){return Co()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof _i)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ko(d.mutation,c,d.mutation.getFieldMask(),me.now())):o.set(c.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new AD(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Co();let i=new we((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Gt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=pT();d.forEach(m=>{if(!s.has(m)){const E=ET(n.get(m),r.get(m));E!==null&&p.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return xb(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Zr());let l=ta,u=s;return o.next(c=>L.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:fT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ho();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ho();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(p,m){return new Rs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,at.newInvalidDocument(d)))});let l=ho();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ko(d.mutation,c,Gt.empty(),me.now()),oc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:cn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:gD(i.bundledQuery),readTime:cn(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(){this.overlays=new we(G.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Zr(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Zr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Zr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return L.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qb(n,r));let s=this.Lr.get(n);s===void 0&&(s=ne(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.kr=new ze($e.Kr),this.qr=new ze($e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new $e(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new he([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new he([])),r=new $e(n,e),i=new $e(n,e+1);let s=ne();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return G.comparator(e.key,n.key)||te(e.Jr,n.Jr)}static Ur(e,n){return te(e.Jr,n.Jr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new ze($e.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?vp:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(te);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new $e(new G(s),0);let l=new ze(te);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new $e(n,0),i=this.Hr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.ti=e,this.docs=function(){return new we(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():at.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Un();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||rb(nb(d),r)<=0||(i.has(d.key)||oc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bD(this)}getSize(e){return L.resolve(this.size)}}class bD extends SD{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e){this.persistence=e,this.ri=new yi(n=>Ip(n),Tp),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Pp,this.targetCount=0,this.oi=Cr._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Cr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n){this._i={},this.overlays={},this.ai=new nc(0),this.ui=!1,this.ui=!0,this.ci=new CD,this.referenceDelegate=e(this),this.li=new DD(this),this.indexManager=new yD,this.remoteDocumentCache=function(i){return new ND(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new mD(n),this.Pi=new xD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new kD(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new OD(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class OD extends sb{constructor(e){super(),this.currentSequenceNumber=e}}class Cp{constructor(e){this.persistence=e,this.Ri=new Pp,this.Ai=null}static Vi(e){return new Cp(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const i=G.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Tu{constructor(e,n){this.persistence=e,this.fi=new yi(r=>lb(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=TD(this,n)}static Vi(e,n){return new Tu(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=kl(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new kp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Gx()?8:ob(ut())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new VD;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Si()<=ie.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Ai(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Si()<=ie.DEBUG&&$("QueryEngine","Query:",Ai(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Si()<=ie.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Ai(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):L.resolve())}gs(e,n){if(l_(n))return L.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vu(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,vu(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return l_(n)||i.isEqual(J.min())?L.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?L.resolve(null):(Si()<=ie.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ai(n)),this.Ds(e,o,n,tb(i,ta)).next(l=>l))})}Ss(e,n){let r=new ze(hT(e));return n.forEach((i,s)=>{oc(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Si()<=ie.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ai(n)),this.fs.getDocumentsMatchingQuery(e,n,Ar.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="LocalStore",MD=3e8;class UD{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new we(te),this.Fs=new yi(s=>Ip(s),Tp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RD(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function FD(t,e,n,r){return new UD(t,e,n,r)}async function LT(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function jD(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let E=L.resolve();return m.forEach(P=>{E=E.next(()=>d.getEntry(u,P)).next(N=>{const b=c.docVersions.get(P);le(b!==null,48541),N.version.compareTo(b)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),d.addEntry(N)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function MT(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function zD(t,e){const n=X(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,p)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(et.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(p,E),function(N,b,T){return N.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=MD?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,E,d)&&l.push(n.li.updateTargetData(s,E))});let u=Un(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(BD(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(J.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function BD(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Un();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Np,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function $D(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=vp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HD(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Rn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Bd(t,e,n){const r=X(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!As(o))throw o;$(Np,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function w_(t,e,n){const r=X(t);let i=J.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=X(u),m=p.Fs.get(d);return m!==void 0?L.resolve(p.vs.get(m)):p.li.getTargetData(c,d)}(r,o,un(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ne())).next(l=>(WD(r,kb(e),l),{documents:l,ks:s})))}function WD(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class I_{constructor(){this.activeTargetIds=Lb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qD{constructor(){this.vo=new I_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new I_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="ConnectivityMonitor";class S_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(T_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(T_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl=null;function $d(){return cl===null?cl=function(){return 268435456+Math.round(2147483648*Math.random())}():cl++,"0x"+cl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="RestConnection",KD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class QD{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===gu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=$d(),l=this.Qo(e,n.toUriEncodedString());$(Th,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=ma(c);return this.zo(e,l,u,r,d).then(p=>($(Th,`Received RPC '${e}' ${o}: `,p),p),p=>{throw hi(Th,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=KD[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection",no=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Qi extends QD{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Qi.c_){const e=jI();no(e,FI.STAT_EVENT,n=>{n.stat===Nd.PROXY?$(it,"STAT_EVENT: detected buffering proxy"):n.stat===Nd.NOPROXY&&$(it,"STAT_EVENT: detected no buffering proxy")}),Qi.c_=!0}}zo(e,n,r,i,s){const o=$d();return new Promise((l,u)=>{const c=new MI;c.setWithCredentials(!0),c.listenOnce(UI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Cl.NO_ERROR:const p=c.getResponseJson();$(it,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Cl.TIMEOUT:$(it,`RPC '${e}' ${o} timed out`),u(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case Cl.HTTP_ERROR:const m=c.getStatus();if($(it,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const P=E==null?void 0:E.error;if(P&&P.status&&P.message){const N=function(T){const v=T.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(P.status);u(new H(N,P.message))}else u(new H(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(V.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{$(it,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);$(it,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=$d(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");$(it,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.I_(d);let p=!1,m=!1;const E=new YD({Jo:P=>{m?$(it,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||($(it,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),$(it,`RPC '${e}' stream ${i} sending:`,P),d.send(P))},Ho:()=>d.close()});return no(d,co.EventType.OPEN,()=>{m||($(it,`RPC '${e}' stream ${i} transport opened.`),E.i_())}),no(d,co.EventType.CLOSE,()=>{m||(m=!0,$(it,`RPC '${e}' stream ${i} transport closed`),E.o_(),this.E_(d))}),no(d,co.EventType.ERROR,P=>{m||(m=!0,hi(it,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),E.o_(new H(V.UNAVAILABLE,"The operation could not be completed")))}),no(d,co.EventType.MESSAGE,P=>{var N;if(!m){const b=P.data[0];le(!!b,16349);const T=b,v=(T==null?void 0:T.error)||((N=T[0])==null?void 0:N.error);if(v){$(it,`RPC '${e}' stream ${i} received error:`,v);const R=v.status;let O=function(w){const _=De[w];if(_!==void 0)return TT(_)}(R),j=v.message;R==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&hi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=V.INTERNAL,j="Unknown error status: "+R+" with message "+v.message),m=!0,E.o_(new H(O,j)),d.close()}else $(it,`RPC '${e}' stream ${i} received:`,b),E.__(b)}}),Qi.u_(),setTimeout(()=>{E.s_()},0),E}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return zI()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(t){return new Qi(t)}function Sh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){return new tD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qi.c_=!1;class UT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="PersistentStream";class FT{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new UT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(A_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():($(A_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XD extends FT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=iD(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?cn(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=zd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ld(u)?{documents:aD(s,u)}:{query:lD(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=RT(s,o.resumeToken);const c=Ud(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Iu(s,o.snapshotVersion.toTimestamp());const c=Ud(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=cD(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=zd(this.serializer),n.removeTarget=e,this.K_(n)}}class ZD extends FT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=oD(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=zd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>sD(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{}class tO extends eO{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Fd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Fd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function nO(t,e,n,r){return new tO(t,e,n,r)}class rO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mn(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="RemoteStore";class iO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Cr(1e3),this.Va=new Cr(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{vi(this)&&($(pn,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.da.add(4),await Sa(c),c.ga.set("Unknown"),c.da.delete(4),await cc(c)}(this))})}),this.ga=new rO(r,i)}}async function cc(t){if(vi(t))for(const e of t.ma)await e(!0)}async function Sa(t){for(const e of t.ma)await e(!1)}function Hd(t,e){return t.Ea.get(e)||void 0}function jT(t,e){const n=X(t),r=Hd(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(l,u){const c=Hd(l,u);c!==void 0&&l.Ra.delete(c);const d=function(m,E){return E%2!=0?m.Va.next():m.Aa.next()}(l,u);return l.Ea.set(u,d),l.Ra.set(d,u),d}(n,e.targetId);$(pn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Rn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),Vp(n)?Op(n):xs(n).O_()&&Dp(n,s)}function bp(t,e){const n=X(t),r=xs(n),i=Hd(n,e);$(pn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&zT(n,i),n.Ia.size===0&&(r.O_()?r.L_():vi(n)&&n.ga.set("Unknown"))}function Dp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void $(pn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}xs(t).Z_(e)}function zT(t,e){t.pa.$e(e),xs(t).X_(e)}function Op(t){t.pa=new Jb({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ne()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.ga.ua()}function Vp(t){return vi(t)&&!xs(t).x_()&&t.Ia.size>0}function vi(t){return X(t).da.size===0}function BT(t){t.pa=void 0}async function sO(t){t.ga.set("Online")}async function oO(t){t.Ia.forEach((e,n)=>{Dp(t,e)})}async function aO(t,e){BT(t),Vp(t)?(t.ga.ha(e),Op(t)):t.ga.set("Unknown")}async function lO(t,e,n){if(t.ga.set("Online"),e instanceof AT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ia.has(l)){const u=i.Ra.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.Ra.delete(l)),i.Ia.delete(l)}i.pa.removeTarget(l)}}(t,e)}catch(r){$(pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Su(t,r)}else if(e instanceof Dl?t.pa.Xe(e):e instanceof ST?t.pa.st(e):t.pa.tt(e),!n.isEqual(J.min()))try{const r=await MT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.pa.Tt(o);l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const p=s.Ia.get(d);p&&s.Ia.set(d,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,d)=>{const p=s.Ia.get(c);if(!p)return;s.Ia.set(c,p.withResumeToken(et.EMPTY_BYTE_STRING,p.snapshotVersion)),zT(s,c);const m=new Rn(p.target,c,d,p.sequenceNumber);Dp(s,m)});const u=function(d,p){const m=new Map;p.targetChanges.forEach((P,N)=>{const b=d.Ra.get(N);b!==void 0&&m.set(b,P)});let E=new we(te);return p.targetMismatches.forEach((P,N)=>{const b=d.Ra.get(P);b!==void 0&&(E=E.insert(b,N))}),new Ia(p.snapshotVersion,m,E,p.documentUpdates,p.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){$(pn,"Failed to raise snapshot:",r),await Su(t,r)}}async function Su(t,e,n){if(!As(e))throw e;t.da.add(1),await Sa(t),t.ga.set("Offline"),n||(n=()=>MT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(pn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await cc(t)})}function $T(t,e){return e().catch(n=>Su(t,n,e))}async function hc(t){const e=X(t),n=kr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:vp;for(;uO(e);)try{const i=await $D(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,cO(e,i)}catch(i){await Su(e,i)}HT(e)&&WT(e)}function uO(t){return vi(t)&&t.Ta.length<10}function cO(t,e){t.Ta.push(e);const n=kr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function HT(t){return vi(t)&&!kr(t).x_()&&t.Ta.length>0}function WT(t){kr(t).start()}async function hO(t){kr(t).ra()}async function dO(t){const e=kr(t);for(const n of t.Ta)e.ea(n.mutations)}async function fO(t,e,n){const r=t.Ta.shift(),i=Ap.from(r,e,n);await $T(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hc(t)}async function pO(t,e){e&&kr(t).Y_&&await async function(r,i){if(function(o){return Kb(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();kr(r).B_(),await $T(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await hc(r)}}(t,e),HT(t)&&WT(t)}async function R_(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),$(pn,"RemoteStore received new credentials");const r=vi(n);n.da.add(3),await Sa(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await cc(n)}async function mO(t,e){const n=X(t);e?(n.da.delete(2),await cc(n)):e||(n.da.add(2),await Sa(n),n.ga.set("Unknown"))}function xs(t){return t.ya||(t.ya=function(n,r,i){const s=X(n);return s.sa(),new XD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:sO.bind(null,t),Yo:oO.bind(null,t),t_:aO.bind(null,t),H_:lO.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Vp(t)?Op(t):t.ga.set("Unknown")):(await t.ya.stop(),BT(t))})),t.ya}function kr(t){return t.wa||(t.wa=function(n,r,i){const s=X(n);return s.sa(),new ZD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:hO.bind(null,t),t_:pO.bind(null,t),ta:dO.bind(null,t),na:fO.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await hc(t)):(await t.wa.stop(),t.Ta.length>0&&($(pn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Lp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mp(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),As(t))return new H(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{static emptySet(e){return new Yi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ho(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.Sa=new we(G.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):K(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new hs(e,n,Yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class yO{constructor(){this.queries=P_(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=P_(),s.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function P_(){return new yi(t=>cT(t),sc)}async function _O(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new gO,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Mp(o,`Initialization of query '${Ai(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&Up(n)}async function vO(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.va.indexOf(e);o>=0&&(s.va.splice(o,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function EO(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.va)l.Na(i)&&(r=!0);o.Ca=i}}r&&Up(n)}function wO(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function Up(t){t.xa.forEach(e=>{e.next()})}var Wd,C_;(C_=Wd||(Wd={})).Ba="default",C_.Cache="cache";class IO{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Wd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.key=e}}class GT{constructor(e){this.key=e}}class TO{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ne(),this.mutatedKeys=ne(),this.iu=hT(e),this.su=new Yi(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new x_,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),E=oc(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let b=!1;m&&E?m.data.isEqual(E.data)?P!==N&&(r.track({type:3,doc:E}),b=!0):this.uu(m,E)||(r.track({type:2,doc:E}),b=!0,(u&&this.iu(E,u)>0||c&&this.iu(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),b=!0):m&&!E&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(E?(o=o.add(E),s=N?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{su:o,au:r,bs:l,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((d,p)=>function(E,P){const N=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:b})}};return N(E)-N(P)}(d.type,p.type)||this.iu(d.doc,p.doc)),this.cu(r),i=i??!1;const l=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new hs(this.query,e.su,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new x_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ne(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new GT(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new qT(r))}),n}Tu(e){this.tu=e.ks,this.ru=ne();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return hs.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Fp="SyncEngine";class SO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AO{constructor(e){this.key=e,this.Eu=!1}}class RO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new yi(l=>cT(l),sc),this.Vu=new Map,this.du=new Set,this.mu=new we(G.comparator),this.fu=new Map,this.gu=new Pp,this.pu={},this.yu=new Map,this.wu=Cr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function xO(t,e,n=!0){const r=ZT(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await KT(r,e,n,!0),i}async function PO(t,e){const n=ZT(t);await KT(n,e,!0,!1)}async function KT(t,e,n,r){const i=await HD(t.localStore,un(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await CO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&jT(t.remoteStore,i),l}async function CO(t,e,n,r,i){t.bu=(p,m,E)=>async function(N,b,T,v){let R=b.view._u(T);R.bs&&(R=await w_(N.localStore,b.query,!1).then(({documents:w})=>b.view._u(w,R)));const O=v&&v.targetChanges.get(b.targetId),j=v&&v.targetMismatches.get(b.targetId)!=null,z=b.view.applyChanges(R,N.isPrimaryClient,O,j);return N_(N,b.targetId,z.hu),z.snapshot}(t,p,m,E);const s=await w_(t.localStore,e,!0),o=new TO(e,s.ks),l=o._u(s.documents),u=Ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);N_(t,n,c.hu);const d=new SO(e,n,o);return t.Au.set(e,d),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function kO(t,e,n){const r=X(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(o=>!sc(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&bp(r.remoteStore,i.targetId),qd(r,i.targetId)}).catch(Ss)):(qd(r,i.targetId),await Bd(r.localStore,i.targetId,!0))}async function NO(t,e){const n=X(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),bp(n.remoteStore,r.targetId))}async function bO(t,e,n){const r=FO(t);try{const i=await function(o,l){const u=X(o),c=me.now(),d=l.reduce((E,P)=>E.add(P.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let P=Un(),N=ne();return u.xs.getEntries(E,d).next(b=>{P=b,P.forEach((T,v)=>{v.isValidDocument()||(N=N.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,P)).next(b=>{p=b;const T=[];for(const v of l){const R=$b(v,p.get(v.key).overlayedDocument);R!=null&&T.push(new _i(v.key,R,tT(R.value.mapValue),Cn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,T,l)}).next(b=>{m=b;const T=b.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(E,b.batchId,T)})}).then(()=>({batchId:m.batchId,changes:fT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new we(te)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Aa(r,i.changes),await hc(r.remoteStore)}catch(i){const s=Mp(i,"Failed to persist write");n.reject(s)}}async function QT(t,e){const n=X(t);try{const r=await zD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fu.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Eu=!0:i.modifiedDocuments.size>0?le(o.Eu,14607):i.removedDocuments.size>0&&(le(o.Eu,42227),o.Eu=!1))}),await Aa(n,r,e)}catch(r){await Ss(r)}}function k_(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const l=o.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.va)m.Oa(l)&&(c=!0)}),c&&Up(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DO(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let o=new we(G.comparator);o=o.insert(s,at.newNoDocument(s,J.min()));const l=ne().add(s),u=new Ia(J.min(),new Map,new we(te),o,l);await QT(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),jp(r)}else await Bd(r.localStore,e,!1).then(()=>qd(r,e,n)).catch(Ss)}async function OO(t,e){const n=X(t),r=e.batch.batchId;try{const i=await jD(n.localStore,e);JT(n,r,null),YT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Aa(n,i)}catch(i){await Ss(i)}}async function VO(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(le(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);JT(r,e,n),YT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Aa(r,i)}catch(i){await Ss(i)}}function YT(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function JT(t,e,n){const r=X(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function qd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||XT(t,r)})}function XT(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(bp(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),jp(t))}function N_(t,e,n){for(const r of n)r instanceof qT?(t.gu.addReference(r.key,e),LO(t,r)):r instanceof GT?($(Fp,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||XT(t,r.key)):K(19791,{Cu:r})}function LO(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||($(Fp,"New document in limbo: "+n),t.du.add(r),jp(t))}function jp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new G(he.fromString(e)),r=t.wu.next();t.fu.set(r,new AO(n)),t.mu=t.mu.insert(n,r),jT(t.remoteStore,new Rn(un(lT(n.path)),r,"TargetPurposeLimboResolution",nc.ce))}}async function Aa(t,e,n){const r=X(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=kp.Es(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,c){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,m=>L.forEach(m.Ts,E=>d.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>L.forEach(m.Is,E=>d.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!As(p))throw p;$(Np,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const E=d.vs.get(m),P=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(P);d.vs=d.vs.insert(m,N)}}}(r.localStore,s))}async function MO(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){$(Fp,"User change. New user:",e.toKey());const r=await LT(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(l=>{l.forEach(u=>{u.reject(new H(V.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Aa(n,r.Ns)}}function UO(t,e){const n=X(t),r=n.fu.get(e);if(r&&r.Eu)return ne().add(r.key);{let i=ne();const s=n.Vu.get(e);if(!s)return i;for(const o of s){const l=n.Au.get(o);i=i.unionWith(l.view.ou)}return i}}function ZT(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=QT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DO.bind(null,e),e.Ru.H_=EO.bind(null,e.eventManager),e.Ru.Du=wO.bind(null,e.eventManager),e}function FO(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VO.bind(null,e),e}class Au{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return FD(this.persistence,new LD,e.initialUser,this.serializer)}xu(e){return new VT(Cp.Vi,this.serializer)}Mu(e){return new qD}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Au.provider={build:()=>new Au};class jO extends Au{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){le(this.persistence.referenceDelegate instanceof Tu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wD(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new VT(r=>Tu.Vi(r,n),this.serializer)}}class Gd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>k_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MO.bind(null,this.syncEngine),await mO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yO}()}createDatastore(e){const n=uc(e.databaseInfo.databaseId),r=JD(e.databaseInfo);return nO(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new iO(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>k_(this.syncEngine,n,0),function(){return S_.v()?new S_:new GD}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new RO(i,s,o,l,u,c);return d&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);$(pn,"RemoteStore shutting down."),s.da.add(5),await Sa(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Gd.provider={build:()=>new Gd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="FirestoreClient";class BO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=_p.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ah(t,e){t.asyncQueue.verifyOperationInProgress(),$(Nr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await LT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function b_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $O(t);$(Nr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>R_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>R_(e.remoteStore,i)),t._onlineComponents=e}async function $O(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Nr,"Using user provided OfflineComponentProvider");try{await Ah(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;hi("Error using user provided cache. Falling back to memory cache: "+n),await Ah(t,new Au)}}else $(Nr,"Using default OfflineComponentProvider"),await Ah(t,new jO(void 0));return t._offlineComponents}async function eS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Nr,"Using user provided OnlineComponentProvider"),await b_(t,t._uninitializedComponentsProvider._online)):($(Nr,"Using default OnlineComponentProvider"),await b_(t,new Gd))),t._onlineComponents}function HO(t){return eS(t).then(e=>e.syncEngine)}async function WO(t){const e=await eS(t),n=e.eventManager;return n.onListen=xO.bind(null,e.syncEngine),n.onUnlisten=kO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=NO.bind(null,e.syncEngine),n}function qO(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new zO({next:m=>{d.Ku(),o.enqueueAndForget(()=>vO(s,p)),m.fromCache&&u.source==="server"?c.reject(new H(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new IO(l,d,{includeMetadataChanges:!0,Wa:!0});return _O(s,p)}(await WO(t),t.asyncQueue,e,n,r)),r.promise}function GO(t,e){const n=new wr;return t.asyncQueue.enqueueAndForget(async()=>bO(await HO(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO="ComponentProvider",D_=new Map;function QO(t,e,n,r,i){return new hb(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,tS(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firestore.googleapis.com",O_=!0;class V_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nS,this.ssl=O_}else this.host=e.host,this.ssl=e.ssl??O_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=OT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vD)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Z1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new V_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new V_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $1;switch(r.type){case"firstParty":return new G1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=D_.get(n);r&&($(KO,"Removing Datastore"),D_.delete(n),r.terminate())}(this),Promise.resolve()}}function YO(t,e,n,r={}){var c;t=pu(t,dc);const i=ma(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Iw(`https://${l}`),s.host!==nS&&s.host!==l&&hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!li(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=st.MOCK_USER;else{d=jx(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new st(m)}t._authCredentials=new H1(new $I(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class We{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}toJSON(){return{type:We._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ea(n,We._jsonSchema))return new We(e,r||null,new G(he.fromString(n.referencePath)))}}We._jsonSchemaVersion="firestore/documentReference/1.0",We._jsonSchema={type:Me("string",We._jsonSchemaVersion),referencePath:Me("string")};class Ir extends Ur{constructor(e,n,r){super(e,n,lT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new G(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function Ra(t,e,...n){if(t=Q(t),HI("collection","path",e),t instanceof dc){const r=he.fromString(e,...n);return Ky(r),new Ir(t,null,r)}{if(!(t instanceof We||t instanceof Ir))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Ky(r),new Ir(t.firestore,null,r)}}function JO(t,e,...n){if(t=Q(t),arguments.length===1&&(e=_p.newId()),HI("doc","path",e),t instanceof dc){const r=he.fromString(e,...n);return Gy(r),new We(t,null,new G(r))}{if(!(t instanceof We||t instanceof Ir))throw new H(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Gy(r),new We(t.firestore,t instanceof Ir?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="AsyncQueue";class M_{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new UT(this,"async_queue_retry"),this.lc=()=>{const r=Sh();r&&$(L_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Sh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Sh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new wr;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!As(e))throw e;$(L_,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Mn("INTERNAL UNHANDLED ERROR: ",U_(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=Lp.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&K(47125,{Rc:U_(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function U_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class zp extends dc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new M_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new M_(e),this._firestoreClient=void 0,await e}}}function XO(t,e){const n=typeof t=="object"?t:Rw(),r=typeof t=="string"?t:gu,i=Jf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ux("firestore");s&&YO(i,...s)}return i}function rS(t){if(t._terminated)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ZO(t),t._firestoreClient}function ZO(t){var r,i,s,o;const e=t._freezeSettings(),n=QO(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new BO(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(et.fromBase64String(e))}catch(n){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ea(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:Me("string",Vt._jsonSchemaVersion),bytes:Me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(Ea(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:Me("string",hn._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ea(e,Yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Yt(e.vectorValues);throw new H(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yt._jsonSchemaVersion="firestore/vectorValue/1.0",Yt._jsonSchema={type:Me("string",Yt._jsonSchemaVersion),vectorValues:Me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV=/^__.*__$/;class tV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,n,this.fieldTransforms):new wa(e,this.data,n,this.fieldTransforms)}}function oS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:t})}}class Bp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Bp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Ru(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(oS(this.dataSource)&&eV.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class nV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uc(e)}V(e,n,r,i=!1){return new Bp({dataSource:e,methodName:n,targetDoc:r,path:Je.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aS(t){const e=t._freezeSettings(),n=uc(t._databaseId);return new nV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rV(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);cS("Data must be an object, but it was:",o,r);const l=lS(r,o);let u,c;if(s.merge)u=new Gt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=xa(e,p,n);if(!o.contains(m))throw new H(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);aV(d,m)||d.push(m)}u=new Gt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new tV(new Ot(l),u,c)}function iV(t,e,n,r=!1){return $p(n,t.V(r?4:3,e))}function $p(t,e){if(uS(t=Q(t)))return cS("Unsupported field value:",e,t),lS(t,e);if(t instanceof sS)return function(r,i){if(!oS(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=$p(l,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Q(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=me.fromDate(r);return{timestampValue:Iu(i.serializer,s)}}if(r instanceof me){const s=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Iu(i.serializer,s)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:RT(i.serializer,r._byteString)};if(r instanceof We){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Yt)return function(o,l){const u=o instanceof Yt?o.toArray():o;return{mapValue:{fields:{[ZI]:{stringValue:eT},[yu]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.Dc("VectorValues must only contain numeric values.");return Sp(l.serializer,d)})}}}}}}(r,i);if(DT(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${tc(r)}`)}(t,e)}function lS(t,e){const n={};return GI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gi(t,(r,i)=>{const s=$p(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function uS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof hn||t instanceof Vt||t instanceof We||t instanceof sS||t instanceof Yt||DT(t))}function cS(t,e,n){if(!uS(n)||!WI(n)){const r=tc(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function xa(t,e,n){if((e=Q(e))instanceof iS)return e._internalPath;if(typeof e=="string")return oV(t,e);throw Ru("Field path arguments must be of type string or ",t,!1,void 0,n)}const sV=new RegExp("[~\\*/\\[\\]]");function oV(t,e,n){if(e.search(sV)>=0)throw Ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new iS(...e.split("."))._internalPath}catch{throw Ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ru(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(V.INVALID_ARGUMENT,l+t+u)}function aV(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[yu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>ke(o.doubleValue));return new Yt(n)}convertGeoPoint(e){return new hn(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ic(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);le(bT(r),9688,{name:e});const i=new ra(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV extends lV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}const F_="@firebase/firestore",j_="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(xa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cV extends hS{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hp{}class Wp extends Hp{}function dS(t,e,...n){let r=[];e instanceof Hp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof qp).length,l=s.filter(u=>u instanceof fc).length;if(o>1||o>0&&l>0)throw new H(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class fc extends Wp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fc(e,n,r)}_apply(e){const n=this._parse(e);return gS(e._query,n),new Ur(e.firestore,e.converter,Md(e._query,n))}_parse(e){const n=aS(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){B_(p,d);const P=[];for(const N of p)P.push(z_(u,s,N));m={arrayValue:{values:P}}}else m=z_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||B_(p,d),m=iV(l,o,p,d==="in"||d==="not-in");return Le.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fS(t,e,n){const r=e,i=xa("where",t);return fc._create(i,r,n)}class qp extends Hp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)gS(o,u),o=Md(o,u)}(e._query,n),new Ur(e.firestore,e.converter,Md(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gp extends Wp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Gp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sa(s,o)}(e._query,this._field,this._direction);return new Ur(e.firestore,e.converter,Cb(e._query,n))}}function pS(t,e="asc"){const n=e,r=xa("orderBy",t);return Gp._create(r,n)}class Kp extends Wp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Kp(e,n,r)}_apply(e){return new Ur(e.firestore,e.converter,vu(e._query,this._limit,this._limitType))}}function mS(t){return eb("limit",t),Kp._create("limit",t,"F")}function z_(t,e,n){if(typeof(n=Q(n))=="string"){if(n==="")throw new H(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uT(e)&&n.indexOf("/")!==-1)throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!G.isDocumentKey(r))throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return n_(t,new G(r))}if(n instanceof We)return n_(t,n._key);throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tc(n)}.`)}function B_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gS(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function dV(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class hl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ji extends hS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ji._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ji._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ji._jsonSchema={type:Me("string",Ji._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class Ol extends Ji{data(e={}){return super.data(e)}}class Xi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new hl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ol(this._firestore,this._userDataWriter,r.key,r,new hl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ol(i._firestore,i._userDataWriter,l.doc.key,l.doc,new hl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ol(i._firestore,i._userDataWriter,l.doc.key,l.doc,new hl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:fV(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_p.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xi._jsonSchemaVersion="firestore/querySnapshot/1.0",Xi._jsonSchema={type:Me("string",Xi._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};function yS(t){t=pu(t,Ur);const e=pu(t.firestore,zp),n=rS(e),r=new uV(e);return hV(t._query),qO(n,t._query).then(i=>new Xi(e,r,t,i))}function Qp(t,e){const n=pu(t.firestore,zp),r=JO(t),i=dV(t.converter,e),s=aS(t.firestore);return pV(n,[rV(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Cn.exists(!1))]).then(()=>r)}function pV(t,e){const n=rS(t);return GO(n,e)}(function(e,n=!0){B1(_s),os(new ui("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new zp(new W1(r.getProvider("auth-internal")),new K1(o,r.getProvider("app-check-internal")),db(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),yr(F_,j_,e),yr(F_,j_,"esm2020")})();const mV={apiKey:"AIzaSyCcldB8xWIk855fUS7kbLpO-6x_B12pQ8g",authDomain:"lyra-ai-4a63d.firebaseapp.com",projectId:"lyra-ai-4a63d",storageBucket:"lyra-ai-4a63d.firebasestorage.app",messagingSenderId:"626872487812",appId:"1:626872487812:web:a53ad75175a2704d8517d1"},_S=Aw(mV),pc=VI(_S),Pa=XO(_S),gV=async(t,e)=>{try{const{createUserWithEmailAndPassword:n}=await Kf(async()=>{const{createUserWithEmailAndPassword:i}=await Promise.resolve().then(()=>gp);return{createUserWithEmailAndPassword:i}},void 0);return{user:(await n(pc,t,e)).user,error:null}}catch(n){return{user:null,error:n}}},yV=async(t,e)=>{try{const{signInWithEmailAndPassword:n}=await Kf(async()=>{const{signInWithEmailAndPassword:i}=await Promise.resolve().then(()=>gp);return{signInWithEmailAndPassword:i}},void 0);return{user:(await n(pc,t,e)).user,error:null}}catch(n){return{user:null,error:n}}},vS=async()=>{try{const{signOut:t}=await Kf(async()=>{const{signOut:e}=await Promise.resolve().then(()=>gp);return{signOut:e}},void 0);return await t(pc),{error:null}}catch(t){return{error:t}}},_V=t=>mI(pc,t),vV=async(t,e,n)=>{await Qp(Ra(Pa,"mood_entries"),{userId:t,moodScore:e,note:n||null,createdAt:new Date().toISOString()})},ES=async(t,e=10)=>{const n=dS(Ra(Pa,"mood_entries"),fS("userId","==",t),pS("createdAt","desc"),mS(e));return(await yS(n)).docs.map(i=>({id:i.id,...i.data()}))},$_=async(t,e,n)=>{await Qp(Ra(Pa,"chat_messages"),{userId:t,role:e,content:n,createdAt:new Date().toISOString()})},EV=async(t,e=20)=>{const n=dS(Ra(Pa,"chat_messages"),fS("userId","==",t),pS("createdAt","asc"),mS(e));return(await yS(n)).docs.map(i=>({id:i.id,...i.data()}))},wV=async t=>{await Qp(Ra(Pa,"check_ins"),{userId:t,completedAt:new Date().toISOString()})},wS=M.createContext({}),Ps=()=>M.useContext(wS),IV=({children:t})=>{const[e,n]=M.useState(null),[r,i]=M.useState(!0);M.useEffect(()=>{const o=_V(l=>{n(l),i(!1)});return()=>o()},[]);const s={user:e,loading:r};return g.jsx(wS.Provider,{value:s,children:t})},H_=["Lyra — Your Wellness Companion","Your Daily Check-in","Your AI Support System","Your Mood Tracker"],TV=[{icon:"🌟",title:"Mood Tracking",desc:"Track your emotional wellbeing daily with our intuitive mood scale"},{icon:"💬",title:"AI Chat",desc:"Talk to Lyra anytime — your 24/7 supportive AI companion"},{icon:"🔥",title:"Streak System",desc:"Build healthy habits with daily check-in streaks"},{icon:"🔒",title:"Privacy First",desc:"Your data is encrypted and never shared with anyone"}],SV=[{name:"Sarah M.",avatar:"SM",quote:"Lyra helped me understand my emotions better. The daily check-ins are now a cherished ritual.",rating:5},{name:"James K.",avatar:"JK",quote:"The AI chat feels genuinely supportive. It's like having a friend who always listens.",rating:5},{name:"Emma R.",avatar:"ER",quote:"Simple, beautiful, and effective. My streak keeps me motivated every single day.",rating:5}],AV=[{q:"Is my data private?",a:"Absolutely. All your data is encrypted and stored securely. We never share your personal information."},{q:"How does the AI chat work?",a:"Lyra uses advanced AI to provide empathetic, thoughtful responses to support your wellbeing."},{q:"Can I use Lyra on my phone?",a:"Yes! Lyra is fully mobile-first and works perfectly on any device."},{q:"How do streaks work?",a:"Complete a daily check-in to maintain your streak. Missing a day resets it to zero."},{q:"Is Lyra free to use?",a:"Yes, Lyra offers a generous free tier. Premium features coming soon!"}];function RV(){const[t,e]=M.useState(""),[n,r]=M.useState(0),[i,s]=M.useState(0),[o,l]=M.useState(!1),[u,c]=M.useState(null);return M.useEffect(()=>{const d=H_[n],p=o?40:80,m=2e3,E=setTimeout(()=>{o?i>0?(e(d.slice(0,i-1)),s(i-1)):(l(!1),r((n+1)%H_.length)):i<d.length?(e(d.slice(0,i+1)),s(i+1)):setTimeout(()=>l(!0),m)},p);return()=>clearTimeout(E)},[i,o,n]),g.jsxs("div",{className:"min-h-screen bg-bg",children:[g.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border",children:g.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-4 flex items-center justify-between",children:[g.jsxs(ae,{to:"/",className:"text-2xl font-bold",children:[g.jsx("span",{className:"text-primary",children:"L"}),"yra"]}),g.jsxs("div",{className:"flex gap-4",children:[g.jsx(ae,{to:"/login",className:"px-4 py-2 text-text-secondary hover:text-white transition-colors touch-target flex items-center",children:"Log in"}),g.jsx(ae,{to:"/signup",className:"px-6 py-2 bg-primary rounded-full font-semibold hover:opacity-90 transition-opacity touch-target flex items-center",children:"Sign up"})]})]})}),g.jsx("section",{className:"pt-32 pb-20 px-4",children:g.jsxs("div",{className:"max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center",children:[g.jsxs("div",{className:"animate-fade-in",children:[g.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:[t,g.jsx("span",{className:"animate-pulse text-primary",children:"|"})]}),g.jsx("p",{className:"text-xl text-text-secondary mb-8 max-w-lg",children:"Your personal AI wellness companion. Track moods, chat with AI, and build healthy habits — all in one beautiful app."}),g.jsxs("div",{className:"flex flex-wrap gap-4",children:[g.jsx(ae,{to:"/signup",className:"px-8 py-4 bg-primary rounded-full font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 touch-target",children:"Get Started Free"}),g.jsx(ae,{to:"/login",className:"px-8 py-4 border border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary/10 transition-colors touch-target",children:"Learn More"})]})]}),g.jsx("div",{className:"relative animate-slide-up",children:g.jsx("div",{className:"w-64 md:w-80 mx-auto bg-surface rounded-[3rem] p-3 shadow-2xl border border-border",children:g.jsxs("div",{className:"bg-bg rounded-[2.5rem] p-4 overflow-hidden",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[g.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold",children:"L"}),g.jsxs("div",{children:[g.jsx("p",{className:"font-semibold",children:"Lyra"}),g.jsx("p",{className:"text-xs text-text-secondary",children:"Online"})]})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("div",{className:"bg-surface p-3 rounded-2xl rounded-tl-none max-w-[80%]",children:g.jsx("p",{className:"text-sm",children:"Hey there! How are you feeling today? 🌟"})}),g.jsx("div",{className:"bg-primary/20 p-3 rounded-2xl rounded-tr-none max-w-[80%] ml-auto",children:g.jsx("p",{className:"text-sm",children:"I'm doing better now, thanks for asking!"})}),g.jsx("div",{className:"bg-surface p-3 rounded-2xl rounded-tl-none max-w-[80%]",children:g.jsx("p",{className:"text-sm",children:"That's wonderful to hear! Want to do a quick mood check-in? 📊"})})]})]})})})]})}),g.jsx("section",{className:"py-20 px-4 bg-surface/50",children:g.jsxs("div",{className:"max-w-6xl mx-auto",children:[g.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-4",children:"Everything You Need to Thrive"}),g.jsx("p",{className:"text-text-secondary text-center mb-12 max-w-2xl mx-auto",children:"Built with care to support your mental wellness journey"}),g.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:TV.map((d,p)=>g.jsxs("div",{className:"bg-surface p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group",children:[g.jsx("div",{className:"text-4xl mb-4",children:d.icon}),g.jsx("h3",{className:"text-xl font-semibold mb-2 group-hover:text-primary transition-colors",children:d.title}),g.jsx("p",{className:"text-text-secondary text-sm",children:d.desc})]},p))})]})}),g.jsx("section",{className:"py-20 px-4",children:g.jsxs("div",{className:"max-w-6xl mx-auto",children:[g.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12",children:"Loved by Thousands"}),g.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:SV.map((d,p)=>g.jsxs("div",{className:"bg-surface p-6 rounded-2xl border border-border",children:[g.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[g.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold",children:d.avatar}),g.jsxs("div",{children:[g.jsx("p",{className:"font-semibold",children:d.name}),g.jsx("p",{className:"text-yellow-400",children:"★".repeat(d.rating)})]})]}),g.jsxs("p",{className:"text-text-secondary italic",children:['"',d.quote,'"']})]},p))})]})}),g.jsx("section",{className:"py-20 px-4 bg-surface/50",children:g.jsxs("div",{className:"max-w-3xl mx-auto",children:[g.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),g.jsx("div",{className:"space-y-3",children:AV.map((d,p)=>g.jsxs("div",{className:"bg-surface rounded-xl border border-border overflow-hidden",children:[g.jsxs("button",{onClick:()=>c(u===p?null:p),className:"w-full px-6 py-4 text-left flex items-center justify-between touch-target",children:[g.jsx("span",{className:"font-semibold",children:d.q}),g.jsx("span",{className:`text-primary text-2xl transition-transform ${u===p?"rotate-45":""}`,children:"+"})]}),u===p&&g.jsx("div",{className:"px-6 pb-4 text-text-secondary",children:d.a})]},p))})]})}),g.jsx("section",{className:"py-20 px-4",children:g.jsxs("div",{className:"max-w-4xl mx-auto text-center bg-gradient-to-br from-surface to-primary/10 rounded-3xl p-12 border border-primary/30",children:[g.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Start Your Wellness Journey Today"}),g.jsx("p",{className:"text-text-secondary mb-8 max-w-xl mx-auto",children:"Join thousands who've made Lyra part of their daily routine for better mental health."}),g.jsx(ae,{to:"/signup",className:"inline-block px-10 py-4 bg-primary rounded-full font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 touch-target",children:"Create Free Account"})]})}),g.jsx("footer",{className:"py-8 px-4 border-t border-border",children:g.jsx("div",{className:"max-w-6xl mx-auto text-center text-text-secondary",children:g.jsx("p",{children:"© 2024 Lyra. Built with ❤️ for your wellness."})})})]})}const W_=t=>{const e=new Date(t),r=Math.floor((new Date-e)/1e3);if(r<60)return"just now";const i=Math.floor(r/60);if(i<60)return`${i}m ago`;const s=Math.floor(i/60);if(s<24)return`${s}h ago`;const o=Math.floor(s/24);if(o===1)return"yesterday";if(o<7)return`${o}d ago`;const l=Math.floor(o/7);return l<4?`${l}w ago`:e.toLocaleDateString("en-US",{month:"short",day:"numeric"})},xV=["","😔 Bad","😟 Poor","😐 Okay","🙂 Good","😊 Great"],PV=["","#ff6b6b","#ffa06b","#ffd93d","#6bcf6b","#6bffa06b"];function CV(){const{user:t}=Ps(),e=pi(),[n,r]=M.useState(0),[i,s]=M.useState(null),[o,l]=M.useState([]),[u,c]=M.useState(!0);M.useEffect(()=>{if(!t)return;(async()=>{try{const m=await ES(t.uid,7);if(m){l(m);let E=0,P=new Date;const N=[...m].sort((b,T)=>new Date(T.createdAt)-new Date(b.createdAt));for(const b of N){const T=new Date(b.createdAt).toDateString(),v=P.toDateString();if(T===v||T===new Date(P.getTime()-864e5).toDateString())E++,P=new Date(b.createdAt);else break}r(E),m.length>0&&s(m[0].createdAt)}}catch(m){console.error("Error fetching data:",m)}finally{c(!1)}})()},[t]);const d=async()=>{await vS(),e("/")};return u?g.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center",children:g.jsx("div",{className:"animate-pulse text-primary text-xl",children:"Loading..."})}):g.jsxs("div",{className:"min-h-screen bg-bg pb-20",children:[g.jsx("header",{className:"bg-surface border-b border-border px-4 py-6",children:g.jsxs("div",{className:"max-w-4xl mx-auto flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsxs("h1",{className:"text-2xl font-bold",children:[g.jsx("span",{className:"text-primary",children:"L"}),"yra"]}),g.jsx("p",{className:"text-text-secondary text-sm",children:"Welcome back!"})]}),g.jsx("button",{onClick:d,className:"px-4 py-2 text-text-secondary hover:text-white transition-colors text-sm",children:"Sign out"})]})}),g.jsxs("main",{className:"max-w-4xl mx-auto px-4 py-8",children:[g.jsx("div",{className:"bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-6 border border-primary/30 mb-6",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-text-secondary text-sm mb-1",children:"Current Streak"}),g.jsxs("p",{className:"text-5xl font-bold",children:[n," 🔥"]}),g.jsx("p",{className:"text-text-secondary text-sm mt-1",children:"days in a row"})]}),g.jsx("div",{className:"text-6xl",children:"🌟"})]})}),i&&g.jsxs("div",{className:"bg-surface rounded-2xl p-4 border border-border mb-6",children:[g.jsx("p",{className:"text-text-secondary text-sm mb-1",children:"Last Check-in"}),g.jsx("p",{className:"text-lg font-semibold",children:W_(i)})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[g.jsxs(ae,{to:"/mood",className:"bg-surface p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors text-center group",children:[g.jsx("div",{className:"text-4xl mb-2",children:"📊"}),g.jsx("p",{className:"font-semibold group-hover:text-primary transition-colors",children:"Check In"}),g.jsx("p",{className:"text-text-secondary text-sm",children:"Log your mood"})]}),g.jsxs(ae,{to:"/chat",className:"bg-surface p-6 rounded-2xl border border-border hover:border-secondary/50 transition-colors text-center group",children:[g.jsx("div",{className:"text-4xl mb-2",children:"💬"}),g.jsx("p",{className:"font-semibold group-hover:text-secondary transition-colors",children:"Talk to Lyra"}),g.jsx("p",{className:"text-text-secondary text-sm",children:"Get support"})]})]}),g.jsxs("div",{className:"bg-surface rounded-2xl p-6 border border-border",children:[g.jsx("h2",{className:"text-xl font-bold mb-4",children:"Recent Moods"}),o.length===0?g.jsxs("div",{className:"text-center py-8",children:[g.jsx("p",{className:"text-text-secondary mb-4",children:"No mood entries yet"}),g.jsx(ae,{to:"/mood",className:"inline-block px-6 py-2 bg-primary rounded-full font-semibold hover:opacity-90 transition-opacity",children:"Do your first check-in"})]}):g.jsx("div",{className:"space-y-3",children:o.map(p=>g.jsxs("div",{className:"flex items-center justify-between p-3 bg-bg rounded-xl",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("span",{className:"text-2xl",style:{filter:`drop-shadow(0 0 8px ${PV[p.moodScore]})`},children:["😔","😟","😐","🙂","😊"][p.moodScore-1]}),g.jsxs("div",{children:[g.jsx("p",{className:"font-semibold",children:xV[p.moodScore]}),p.note&&g.jsx("p",{className:"text-text-secondary text-sm truncate max-w-[200px]",children:p.note})]})]}),g.jsx("p",{className:"text-text-secondary text-sm",children:W_(p.createdAt)})]},p.id))})]})]}),g.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-surface border-t border-border",children:g.jsxs("div",{className:"max-w-4xl mx-auto flex",children:[g.jsxs(ae,{to:"/dashboard",className:"flex-1 py-4 flex flex-col items-center text-primary",children:[g.jsx("span",{className:"text-2xl",children:"🏠"}),g.jsx("span",{className:"text-xs mt-1",children:"Home"})]}),g.jsxs(ae,{to:"/chat",className:"flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors",children:[g.jsx("span",{className:"text-2xl",children:"💬"}),g.jsx("span",{className:"text-xs mt-1",children:"Chat"})]}),g.jsxs(ae,{to:"/mood",className:"flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors",children:[g.jsx("span",{className:"text-2xl",children:"📊"}),g.jsx("span",{className:"text-xs mt-1",children:"Mood"})]}),g.jsxs(ae,{to:"/profile",className:"flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors",children:[g.jsx("span",{className:"text-2xl",children:"👤"}),g.jsx("span",{className:"text-xs mt-1",children:"Profile"})]})]})})]})}const q_=["How are you feeling today?","I'm feeling a bit anxious","Tell me something positive","I need some motivation","I'm having a rough day"];function kV(){const{user:t}=Ps(),[e,n]=M.useState([]),[r,i]=M.useState(""),[s,o]=M.useState(!1),[l,u]=M.useState(!0),c=M.useRef(null);M.useEffect(()=>{if(!t)return;(async()=>{try{const P=await EV(t.uid);P&&n(P)}catch(P){console.error("Error fetching messages:",P)}finally{u(!1)}})()},[t]),M.useEffect(()=>{var E;(E=c.current)==null||E.scrollIntoView({behavior:"smooth"})},[e]);const d=async E=>{var N,b,T;if(!E.trim()||!t)return;const P={userId:t.uid,role:"user",content:E.trim(),createdAt:new Date().toISOString()};n(v=>[...v,P]),i(""),o(!0);try{await $_(t.uid,"user",E.trim());const v=e.slice(-19).map(z=>({role:z.role,content:z.content}));v.push({role:"user",content:E.trim()});const R=await fetch("https://api.minimax.io/anthropic/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${window.__MINIMAX_API_KEY__||""}`},body:JSON.stringify({model:"MiniMax-Text-01",max_tokens:1024,messages:[{role:"system",content:"You are Lyra, a supportive and caring AI wellness companion. You provide emotional support, gentle guidance, and positive encouragement. Be warm, empathetic, and concise in your responses."},...v.map(z=>({role:z.role,content:z.content}))]})});let O="I'm sorry, I'm having trouble connecting right now. Please try again in a moment. 💙";R.ok&&(O=((T=(b=(N=(await R.json()).choices)==null?void 0:N[0])==null?void 0:b.message)==null?void 0:T.content)||O);const j={userId:t.uid,role:"assistant",content:O,createdAt:new Date().toISOString()};await $_(t.uid,"assistant",O),n(z=>[...z,j])}catch(v){console.error("Error sending message:",v);const R={userId:t.uid,role:"assistant",content:"I'm sorry, I'm having trouble connecting right now. Please try again in a moment. 💙",createdAt:new Date().toISOString()};n(O=>[...O,R])}finally{o(!1)}},p=E=>{E.preventDefault(),d(r)},m=E=>{d(E)};return g.jsxs("div",{className:"min-h-screen bg-bg flex flex-col",children:[g.jsxs("header",{className:"bg-surface border-b border-border px-4 py-4 flex items-center gap-3",children:[g.jsx(ae,{to:"/dashboard",className:"text-text-secondary hover:text-white transition-colors",children:"←"}),g.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold",children:"L"}),g.jsxs("div",{children:[g.jsx("h1",{className:"font-semibold",children:"Lyra"}),g.jsx("p",{className:"text-text-secondary text-xs",children:"Your AI companion"})]})]}),g.jsx("main",{className:"flex-1 overflow-y-auto px-4 py-6",children:l?g.jsx("div",{className:"flex items-center justify-center h-full",children:g.jsx("div",{className:"animate-pulse text-primary",children:"Loading..."})}):e.length===0?g.jsxs("div",{className:"text-center py-12",children:[g.jsx("div",{className:"text-6xl mb-4",children:"💙"}),g.jsx("h2",{className:"text-xl font-bold mb-2",children:"Hello! I'm Lyra"}),g.jsx("p",{className:"text-text-secondary mb-6 max-w-xs mx-auto",children:"I'm here to support you. How are you feeling today?"}),g.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:q_.slice(0,3).map((E,P)=>g.jsx("button",{onClick:()=>m(E),className:"px-4 py-2 bg-surface border border-border rounded-full text-sm text-text-secondary hover:text-white hover:border-primary/50 transition-colors",children:E},P))})]}):g.jsxs("div",{className:"space-y-4",children:[e.map((E,P)=>g.jsx("div",{className:`flex ${E.role==="user"?"justify-end":"justify-start"}`,children:g.jsxs("div",{className:`max-w-[80%] px-4 py-3 rounded-2xl ${E.role==="user"?"bg-primary text-white rounded-tr-none":"bg-surface text-white rounded-tl-none"}`,children:[g.jsx("p",{className:"whitespace-pre-wrap",children:E.content}),g.jsx("p",{className:"text-xs mt-1 opacity-70",children:new Date(E.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})},P)),s&&g.jsx("div",{className:"flex justify-start",children:g.jsx("div",{className:"bg-surface px-4 py-3 rounded-2xl rounded-tl-none",children:g.jsxs("div",{className:"flex gap-1",children:[g.jsx("span",{className:"animate-bounce text-primary",children:"●"}),g.jsx("span",{className:"animate-bounce text-primary",style:{animationDelay:"0.2s"},children:"●"}),g.jsx("span",{className:"animate-bounce text-primary",style:{animationDelay:"0.4s"},children:"●"})]})})}),g.jsx("div",{ref:c})]})}),e.length>0&&!s&&g.jsx("div",{className:"px-4 py-2 flex gap-2 overflow-x-auto hide-scrollbar",children:q_.map((E,P)=>g.jsx("button",{onClick:()=>m(E),className:"px-3 py-2 bg-surface border border-border rounded-full text-xs text-text-secondary hover:text-white hover:border-accent transition-colors whitespace-nowrap",children:E},P))}),g.jsx("form",{onSubmit:p,className:"p-4 bg-surface border-t border-border",children:g.jsxs("div",{className:"flex gap-3",children:[g.jsx("input",{type:"text",value:r,onChange:E=>i(E.target.value),placeholder:"Type a message...",className:"flex-1 bg-bg border border-border rounded-full px-5 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none",disabled:s}),g.jsx("button",{type:"submit",disabled:!r.trim()||s,className:"w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold hover:opacity-90 transition-opacity disabled:opacity-50 touch-target",children:"→"})]})})]})}const NV=[{score:1,emoji:"😔",label:"Bad"},{score:2,emoji:"😟",label:"Poor"},{score:3,emoji:"😐",label:"Okay"},{score:4,emoji:"🙂",label:"Good"},{score:5,emoji:"😊",label:"Great"}];function bV(){const{user:t}=Ps(),e=pi(),[n,r]=M.useState(null),[i,s]=M.useState(""),[o,l]=M.useState(!1),[u,c]=M.useState(!1),d=async p=>{if(p.preventDefault(),!(!n||!t)){l(!0);try{await vV(t.uid,n,i),await wV(t.uid),c(!0),setTimeout(()=>{e("/dashboard")},1500)}catch(m){console.error("Error saving mood:",m),alert("Failed to save mood entry. Please try again.")}finally{l(!1)}}};return g.jsxs("div",{className:"min-h-screen bg-bg pb-20",children:[g.jsxs("header",{className:"bg-surface border-b border-border px-4 py-4 flex items-center gap-3",children:[g.jsx(ae,{to:"/dashboard",className:"text-text-secondary hover:text-white transition-colors text-2xl",children:"←"}),g.jsx("h1",{className:"text-xl font-bold",children:"Daily Check-in"})]}),g.jsx("main",{className:"max-w-2xl mx-auto px-4 py-8",children:u?g.jsxs("div",{className:"text-center py-12 animate-fade-in",children:[g.jsx("div",{className:"text-6xl mb-4",children:"✨"}),g.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Check-in Complete!"}),g.jsx("p",{className:"text-text-secondary",children:"Your mood has been recorded."})]}):g.jsxs("form",{onSubmit:d,children:[g.jsxs("div",{className:"bg-surface rounded-2xl p-6 border border-border mb-6",children:[g.jsx("h2",{className:"text-xl font-bold mb-2 text-center",children:"How are you feeling?"}),g.jsx("p",{className:"text-text-secondary text-center mb-6",children:"Select the emoji that best describes your mood"}),g.jsx("div",{className:"flex justify-center gap-4",children:NV.map(p=>g.jsxs("button",{type:"button",onClick:()=>r(p.score),className:`flex flex-col items-center p-3 rounded-2xl transition-all touch-target ${n===p.score?"bg-primary/20 border-2 border-primary scale-110":"bg-bg border-2 border-transparent hover:border-border"}`,children:[g.jsx("span",{className:"text-4xl mb-1",children:p.emoji}),g.jsx("span",{className:"text-xs text-text-secondary",children:p.label})]},p.score))})]}),g.jsxs("div",{className:"bg-surface rounded-2xl p-6 border border-border mb-6",children:[g.jsxs("label",{className:"block text-lg font-semibold mb-3",children:["Add a note ",g.jsx("span",{className:"text-text-secondary font-normal",children:"(optional)"})]}),g.jsx("textarea",{value:i,onChange:p=>s(p.target.value.slice(0,500)),placeholder:"What's on your mind? How was your day?",rows:4,className:"w-full bg-bg border border-border rounded-xl px-4 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none resize-none"}),g.jsxs("p",{className:"text-text-secondary text-sm mt-2 text-right",children:[i.length,"/500"]})]}),g.jsx("button",{type:"submit",disabled:!n||o,className:"w-full bg-primary py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 touch-target",children:o?"Saving...":"Save Check-in"})]})}),g.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-surface border-t border-border",children:g.jsxs("div",{className:"max-w-4xl mx-auto flex",children:[g.jsxs(ae,{to:"/dashboard",className:"flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors",children:[g.jsx("span",{className:"text-2xl",children:"🏠"}),g.jsx("span",{className:"text-xs mt-1",children:"Home"})]}),g.jsxs(ae,{to:"/chat",className:"flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors",children:[g.jsx("span",{className:"text-2xl",children:"💬"}),g.jsx("span",{className:"text-xs mt-1",children:"Chat"})]}),g.jsxs(ae,{to:"/mood",className:"flex-1 py-4 flex flex-col items-center text-primary",children:[g.jsx("span",{className:"text-2xl",children:"📊"}),g.jsx("span",{className:"text-xs mt-1",children:"Mood"})]}),g.jsxs(ae,{to:"/profile",className:"flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors",children:[g.jsx("span",{className:"text-2xl",children:"👤"}),g.jsx("span",{className:"text-xs mt-1",children:"Profile"})]})]})})]})}function DV(){var d,p;const{user:t}=Ps(),e=pi(),[n,r]=M.useState(0),[i,s]=M.useState(0),[o,l]=M.useState(!0);M.useEffect(()=>{if(!t)return;(async()=>{try{const E=await ES(t.uid,100);if(r(E.length),E.length>0){const P=E.reduce((N,b)=>N+b.moodScore,0)/E.length;s(P.toFixed(1))}}catch(E){console.error("Error fetching stats:",E)}finally{l(!1)}})()},[t]);const u=async()=>{await vS(),e("/")};if(!t)return null;const c=(d=t.metadata)!=null&&d.createdAt?new Date(t.metadata.createdAt).toLocaleDateString():new Date().toLocaleDateString();return g.jsxs("div",{className:"min-h-screen bg-bg pb-20",children:[g.jsxs("header",{className:"bg-surface border-b border-border px-4 py-4 flex items-center gap-3",children:[g.jsx(ae,{to:"/dashboard",className:"text-text-secondary hover:text-white transition-colors text-2xl",children:"←"}),g.jsx("h1",{className:"text-xl font-bold",children:"Profile"})]}),g.jsxs("main",{className:"max-w-2xl mx-auto px-4 py-8",children:[g.jsxs("div",{className:"bg-surface rounded-2xl p-6 border border-border mb-6 text-center",children:[g.jsx("div",{className:"w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold mb-4",children:((p=t.email)==null?void 0:p.charAt(0).toUpperCase())||"U"}),g.jsx("h2",{className:"text-xl font-bold",children:t.email}),g.jsxs("p",{className:"text-text-secondary text-sm",children:["Member since ",c]})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[g.jsxs("div",{className:"bg-surface rounded-2xl p-6 border border-border text-center",children:[g.jsx("p",{className:"text-3xl font-bold text-primary",children:n}),g.jsx("p",{className:"text-text-secondary text-sm",children:"Total Check-ins"})]}),g.jsxs("div",{className:"bg-surface rounded-2xl p-6 border border-border text-center",children:[g.jsx("p",{className:"text-3xl font-bold text-secondary",children:i||"-"}),g.jsx("p",{className:"text-text-secondary text-sm",children:"Avg Mood Score"})]})]}),g.jsxs("div",{className:"bg-surface rounded-2xl border border-border overflow-hidden",children:[g.jsxs(ae,{to:"/dashboard",className:"flex items-center justify-between px-6 py-4 border-b border-border hover:bg-bg transition-colors",children:[g.jsx("span",{children:"Dashboard"}),g.jsx("span",{className:"text-text-secondary",children:"→"})]}),g.jsxs(ae,{to:"/mood",className:"flex items-center justify-between px-6 py-4 border-b border-border hover:bg-bg transition-colors",children:[g.jsx("span",{children:"Check-in History"}),g.jsx("span",{className:"text-text-secondary",children:"→"})]}),g.jsxs("button",{onClick:u,className:"w-full flex items-center justify-between px-6 py-4 text-red-400 hover:bg-bg transition-colors",children:[g.jsx("span",{children:"Sign Out"}),g.jsx("span",{children:"→"})]})]})]}),g.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-surface border-t border-border",children:g.jsxs("div",{className:"max-w-4xl mx-auto flex",children:[g.jsxs(ae,{to:"/dashboard",className:"flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors",children:[g.jsx("span",{className:"text-2xl",children:"🏠"}),g.jsx("span",{className:"text-xs mt-1",children:"Home"})]}),g.jsxs(ae,{to:"/chat",className:"flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors",children:[g.jsx("span",{className:"text-2xl",children:"💬"}),g.jsx("span",{className:"text-xs mt-1",children:"Chat"})]}),g.jsxs(ae,{to:"/mood",className:"flex-1 py-4 flex flex-col items-center text-text-secondary hover:text-white transition-colors",children:[g.jsx("span",{className:"text-2xl",children:"📊"}),g.jsx("span",{className:"text-xs mt-1",children:"Mood"})]}),g.jsxs(ae,{to:"/profile",className:"flex-1 py-4 flex flex-col items-center text-primary",children:[g.jsx("span",{className:"text-2xl",children:"👤"}),g.jsx("span",{className:"text-xs mt-1",children:"Profile"})]})]})})]})}function OV(){const[t,e]=M.useState(""),[n,r]=M.useState(""),[i,s]=M.useState(""),[o,l]=M.useState(!1),u=pi(),c=async d=>{d.preventDefault(),s(""),l(!0);try{const{user:p,error:m}=await yV(t,n);if(m)throw m;u("/dashboard")}catch(p){s(p.message||"Failed to sign in")}finally{l(!1)}};return g.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center px-4",children:g.jsxs("div",{className:"w-full max-w-md",children:[g.jsxs("div",{className:"text-center mb-8",children:[g.jsxs(ae,{to:"/",className:"text-3xl font-bold",children:[g.jsx("span",{className:"text-primary",children:"L"}),"yra"]}),g.jsx("p",{className:"text-text-secondary mt-2",children:"Welcome back"})]}),g.jsxs("form",{onSubmit:c,className:"bg-surface p-8 rounded-2xl border border-border",children:[g.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Sign In"}),i&&g.jsx("div",{className:"bg-red-500/20 border border-red-500/50 text-red-400 p-3 rounded-xl mb-4 text-sm",children:i}),g.jsxs("div",{className:"mb-4",children:[g.jsx("label",{className:"block text-text-secondary text-sm mb-2",children:"Email"}),g.jsx("input",{type:"email",value:t,onChange:d=>e(d.target.value),required:!0,className:"w-full bg-bg border border-border rounded-xl px-4 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none transition-colors",placeholder:"you@example.com"})]}),g.jsxs("div",{className:"mb-6",children:[g.jsx("label",{className:"block text-text-secondary text-sm mb-2",children:"Password"}),g.jsx("input",{type:"password",value:n,onChange:d=>r(d.target.value),required:!0,className:"w-full bg-bg border border-border rounded-xl px-4 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none transition-colors",placeholder:"••••••••"})]}),g.jsx("button",{type:"submit",disabled:o,className:"w-full bg-primary py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 touch-target",children:o?"Signing in...":"Sign In"})]}),g.jsxs("p",{className:"text-center text-text-secondary mt-6",children:["Don't have an account?"," ",g.jsx(ae,{to:"/signup",className:"text-primary hover:underline",children:"Sign up"})]})]})})}function VV(){const[t,e]=M.useState(""),[n,r]=M.useState(""),[i,s]=M.useState(""),[o,l]=M.useState(""),[u,c]=M.useState(!1),d=pi(),p=async m=>{if(m.preventDefault(),l(""),n!==i){l("Passwords do not match");return}if(n.length<6){l("Password must be at least 6 characters");return}c(!0);try{const{user:E,error:P}=await gV(t,n);if(P)throw P;d("/dashboard")}catch(E){l(E.message||"Failed to sign up")}finally{c(!1)}};return g.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center px-4",children:g.jsxs("div",{className:"w-full max-w-md",children:[g.jsxs("div",{className:"text-center mb-8",children:[g.jsxs(ae,{to:"/",className:"text-3xl font-bold",children:[g.jsx("span",{className:"text-primary",children:"L"}),"yra"]}),g.jsx("p",{className:"text-text-secondary mt-2",children:"Create your account"})]}),g.jsxs("form",{onSubmit:p,className:"bg-surface p-8 rounded-2xl border border-border",children:[g.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Sign Up"}),o&&g.jsx("div",{className:"bg-red-500/20 border border-red-500/50 text-red-400 p-3 rounded-xl mb-4 text-sm",children:o}),g.jsxs("div",{className:"mb-4",children:[g.jsx("label",{className:"block text-text-secondary text-sm mb-2",children:"Email"}),g.jsx("input",{type:"email",value:t,onChange:m=>e(m.target.value),required:!0,className:"w-full bg-bg border border-border rounded-xl px-4 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none transition-colors",placeholder:"you@example.com"})]}),g.jsxs("div",{className:"mb-4",children:[g.jsx("label",{className:"block text-text-secondary text-sm mb-2",children:"Password"}),g.jsx("input",{type:"password",value:n,onChange:m=>r(m.target.value),required:!0,className:"w-full bg-bg border border-border rounded-xl px-4 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none transition-colors",placeholder:"••••••••"})]}),g.jsxs("div",{className:"mb-6",children:[g.jsx("label",{className:"block text-text-secondary text-sm mb-2",children:"Confirm Password"}),g.jsx("input",{type:"password",value:i,onChange:m=>s(m.target.value),required:!0,className:"w-full bg-bg border border-border rounded-xl px-4 py-3 text-white placeholder-text-secondary focus:border-accent focus:outline-none transition-colors",placeholder:"••••••••"})]}),g.jsx("button",{type:"submit",disabled:u,className:"w-full bg-primary py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 touch-target",children:u?"Creating account...":"Create Account"})]}),g.jsxs("p",{className:"text-center text-text-secondary mt-6",children:["Already have an account?"," ",g.jsx(ae,{to:"/login",className:"text-primary hover:underline",children:"Sign in"})]})]})})}const dl=({children:t})=>{const{user:e,loading:n}=Ps();return n?g.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center",children:g.jsx("div",{className:"animate-pulse text-primary text-lg",children:"Loading..."})}):e?t:g.jsx(mw,{to:"/login"})},Rh=({children:t})=>{const{user:e,loading:n}=Ps();return n?g.jsx("div",{className:"min-h-screen bg-bg flex items-center justify-center",children:g.jsx("div",{className:"animate-pulse text-primary text-lg",children:"Loading..."})}):e?g.jsx(mw,{to:"/dashboard"}):t};function LV(){return g.jsx(IV,{children:g.jsx(Sx,{children:g.jsxs(yx,{children:[g.jsx(Xn,{path:"/",element:g.jsx(Rh,{children:g.jsx(RV,{})})}),g.jsx(Xn,{path:"/login",element:g.jsx(Rh,{children:g.jsx(OV,{})})}),g.jsx(Xn,{path:"/signup",element:g.jsx(Rh,{children:g.jsx(VV,{})})}),g.jsx(Xn,{path:"/dashboard",element:g.jsx(dl,{children:g.jsx(CV,{})})}),g.jsx(Xn,{path:"/chat",element:g.jsx(dl,{children:g.jsx(kV,{})})}),g.jsx(Xn,{path:"/mood",element:g.jsx(dl,{children:g.jsx(bV,{})})}),g.jsx(Xn,{path:"/profile",element:g.jsx(dl,{children:g.jsx(DV,{})})})]})})})}xh.createRoot(document.getElementById("root")).render(g.jsx(rv.StrictMode,{children:g.jsx(LV,{})}));
