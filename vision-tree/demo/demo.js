(()=>{var Wb=Object.create;var g_=Object.defineProperty;var qb=Object.getOwnPropertyDescriptor;var Yb=Object.getOwnPropertyNames;var Zb=Object.getPrototypeOf,Jb=Object.prototype.hasOwnProperty;var Gi=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var Kb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Yb(t))!Jb.call(e,s)&&s!==n&&g_(e,s,{get:()=>t[s],enumerable:!(i=qb(t,s))||i.enumerable});return e};var Ia=(e,t,n)=>(n=e!=null?Wb(Zb(e)):{},Kb(t||!e||!e.__esModule?g_(n,"default",{value:e,enumerable:!0}):n,e));var C_=Gi(Ot=>{"use strict";var Nd=Symbol.for("react.transitional.element"),Qb=Symbol.for("react.portal"),jb=Symbol.for("react.fragment"),$b=Symbol.for("react.strict_mode"),tT=Symbol.for("react.profiler"),eT=Symbol.for("react.consumer"),nT=Symbol.for("react.context"),iT=Symbol.for("react.forward_ref"),sT=Symbol.for("react.suspense"),aT=Symbol.for("react.memo"),S_=Symbol.for("react.lazy"),rT=Symbol.for("react.activity"),oT=Symbol.for("react.view_transition"),__=Symbol.iterator;function lT(e){return e===null||typeof e!="object"?null:(e=__&&e[__]||e["@@iterator"],typeof e=="function"?e:null)}var M_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b_=Object.assign,T_={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=T_,this.updater=n||M_}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function E_(){}E_.prototype=Mr.prototype;function Dd(e,t,n){this.props=e,this.context=t,this.refs=T_,this.updater=n||M_}var Ld=Dd.prototype=new E_;Ld.constructor=Dd;b_(Ld,Mr.prototype);Ld.isPureReactComponent=!0;var v_=Array.isArray;function Cd(){}var _e={H:null,A:null,T:null,S:null},A_=Object.prototype.hasOwnProperty;function Ud(e,t,n){var i=n.ref;return{$$typeof:Nd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function cT(e,t){return Ud(e.type,t,e.props)}function Od(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nd}function uT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var y_=/\/+/g;function Rd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uT(""+e.key):t.toString(36)}function hT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Cd,Cd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Sr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Nd:case Qb:r=!0;break;case S_:return r=e._init,Sr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Rd(e,0):i,v_(s)?(n="",r!=null&&(n=r.replace(y_,"$&/")+"/"),Sr(s,t,n,"",function(c){return c})):s!=null&&(Od(s)&&(s=cT(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(y_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(v_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Rd(i,l),r+=Sr(i,t,n,a,s);else if(l=lT(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Rd(i,l++),r+=Sr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Sr(hT(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Gc(e,t,n){if(e==null)return e;var i=[],s=0;return Sr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function fT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var x_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function w_(e){var t=_e.T,n={};n.types=t!==null?t.types:null,_e.T=n;try{var i=e(),s=_e.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Cd,x_)}catch(a){x_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),_e.T=t}}function R_(e){var t=_e.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else w_(R_.bind(null,e))}var dT={map:Gc,forEach:function(e,t,n){Gc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gc(e,function(){t++}),t},toArray:function(e){return Gc(e,function(t){return t})||[]},only:function(e){if(!Od(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ot.Activity=rT;Ot.Children=dT;Ot.Component=Mr;Ot.Fragment=jb;Ot.Profiler=tT;Ot.PureComponent=Dd;Ot.StrictMode=$b;Ot.Suspense=sT;Ot.ViewTransition=oT;Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_e;Ot.__COMPILER_RUNTIME={__proto__:null,c:function(e){return _e.H.useMemoCache(e)}};Ot.addTransitionType=R_;Ot.cache=function(e){return function(){return e.apply(null,arguments)}};Ot.cacheSignal=function(){return null};Ot.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=b_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!A_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Ud(e.type,s,i)};Ot.createContext=function(e){return e={$$typeof:nT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:eT,_context:e},e};Ot.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)A_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Ud(e,a,s)};Ot.createRef=function(){return{current:null}};Ot.forwardRef=function(e){return{$$typeof:iT,render:e}};Ot.isValidElement=Od;Ot.lazy=function(e){return{$$typeof:S_,_payload:{_status:-1,_result:e},_init:fT}};Ot.memo=function(e,t){return{$$typeof:aT,type:e,compare:t===void 0?null:t}};Ot.startTransition=w_;Ot.unstable_useCacheRefresh=function(){return _e.H.useCacheRefresh()};Ot.use=function(e){return _e.H.use(e)};Ot.useActionState=function(e,t,n){return _e.H.useActionState(e,t,n)};Ot.useCallback=function(e,t){return _e.H.useCallback(e,t)};Ot.useContext=function(e){return _e.H.useContext(e)};Ot.useDebugValue=function(){};Ot.useDeferredValue=function(e,t){return _e.H.useDeferredValue(e,t)};Ot.useEffect=function(e,t){return _e.H.useEffect(e,t)};Ot.useEffectEvent=function(e){return _e.H.useEffectEvent(e)};Ot.useId=function(){return _e.H.useId()};Ot.useImperativeHandle=function(e,t,n){return _e.H.useImperativeHandle(e,t,n)};Ot.useInsertionEffect=function(e,t){return _e.H.useInsertionEffect(e,t)};Ot.useLayoutEffect=function(e,t){return _e.H.useLayoutEffect(e,t)};Ot.useMemo=function(e,t){return _e.H.useMemo(e,t)};Ot.useOptimistic=function(e,t){return _e.H.useOptimistic(e,t)};Ot.useReducer=function(e,t,n){return _e.H.useReducer(e,t,n)};Ot.useRef=function(e){return _e.H.useRef(e)};Ot.useState=function(e){return _e.H.useState(e)};Ot.useSyncExternalStore=function(e,t,n){return _e.H.useSyncExternalStore(e,t,n)};Ot.useTransition=function(){return _e.H.useTransition()};Ot.version="19.3.1"});var jo=Gi((jN,N_)=>{"use strict";N_.exports=C_()});var H_=Gi(Ee=>{"use strict";function zd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Vc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Vi(e){return e.length===0?null:e[0]}function Xc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Vc(o,n))l<s&&0>Vc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Vc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Vc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ee.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(D_=performance,Ee.unstable_now=function(){return D_.now()}):(Id=Date,L_=Id.now(),Ee.unstable_now=function(){return Id.now()-L_});var D_,Id,L_,ds=[],Hs=[],pT=1,ci=null,gn=3,Fd=!1,$o=!1,tl=!1,Hd=!1,I_=typeof setTimeout=="function"?setTimeout:null,P_=typeof clearTimeout=="function"?clearTimeout:null,U_=typeof setImmediate!="undefined"?setImmediate:null;function kc(e){for(var t=Vi(Hs);t!==null;){if(t.callback===null)Xc(Hs);else if(t.startTime<=e)Xc(Hs),t.sortIndex=t.expirationTime,zd(ds,t);else break;t=Vi(Hs)}}function Gd(e){if(tl=!1,kc(e),!$o)if(Vi(ds)!==null)$o=!0,Tr||(Tr=!0,br());else{var t=Vi(Hs);t!==null&&Vd(Gd,t.startTime-e)}}var Tr=!1,el=-1,B_=5,z_=-1;function F_(){return Hd?!0:!(Ee.unstable_now()-z_<B_)}function Pd(){if(Hd=!1,Tr){var e=Ee.unstable_now();z_=e;var t=!0;try{t:{$o=!1,tl&&(tl=!1,P_(el),el=-1),Fd=!0;var n=gn;try{e:{for(kc(e),ci=Vi(ds);ci!==null&&!(ci.expirationTime>e&&F_());){var i=ci.callback;if(typeof i=="function"){ci.callback=null,gn=ci.priorityLevel;var s=i(ci.expirationTime<=e);if(e=Ee.unstable_now(),typeof s=="function"){ci.callback=s,kc(e),t=!0;break e}ci===Vi(ds)&&Xc(ds),kc(e)}else Xc(ds);ci=Vi(ds)}if(ci!==null)t=!0;else{var a=Vi(Hs);a!==null&&Vd(Gd,a.startTime-e),t=!1}}break t}finally{ci=null,gn=n,Fd=!1}t=void 0}}finally{t?br():Tr=!1}}}var br;typeof U_=="function"?br=function(){U_(Pd)}:typeof MessageChannel!="undefined"?(Bd=new MessageChannel,O_=Bd.port2,Bd.port1.onmessage=Pd,br=function(){O_.postMessage(null)}):br=function(){I_(Pd,0)};var Bd,O_;function Vd(e,t){el=I_(function(){e(Ee.unstable_now())},t)}Ee.unstable_IdlePriority=5;Ee.unstable_ImmediatePriority=1;Ee.unstable_LowPriority=4;Ee.unstable_NormalPriority=3;Ee.unstable_Profiling=null;Ee.unstable_UserBlockingPriority=2;Ee.unstable_cancelCallback=function(e){e.callback=null};Ee.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B_=0<e?Math.floor(1e3/e):5};Ee.unstable_getCurrentPriorityLevel=function(){return gn};Ee.unstable_next=function(e){switch(gn){case 1:case 2:case 3:var t=3;break;default:t=gn}var n=gn;gn=t;try{return e()}finally{gn=n}};Ee.unstable_requestPaint=function(){Hd=!0};Ee.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=gn;gn=e;try{return t()}finally{gn=n}};Ee.unstable_scheduleCallback=function(e,t,n){var i=Ee.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:pT++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,zd(Hs,e),Vi(ds)===null&&e===Vi(Hs)&&(tl?(P_(el),el=-1):tl=!0,Vd(Gd,n-i))):(e.sortIndex=s,zd(ds,e),$o||Fd||($o=!0,Tr||(Tr=!0,br()))),e};Ee.unstable_shouldYield=F_;Ee.unstable_wrapCallback=function(e){var t=gn;return function(){var n=gn;gn=t;try{return e.apply(this,arguments)}finally{gn=n}}}});var V_=Gi((tD,G_)=>{"use strict";G_.exports=H_()});var W_=Gi(_n=>{"use strict";var mT=jo();function X_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Gs(){}var bn={d:{f:Gs,r:function(){throw Error(X_(522))},D:Gs,C:Gs,L:Gs,m:Gs,X:Gs,S:Gs,M:Gs},p:0,findDOMNode:null},gT=Symbol.for("react.portal"),_T=Symbol.for("react.recoverable"),k_=Symbol.for("react.optimistic_key");function vT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gT,key:i==null?null:i===k_?k_:""+i,children:e,containerInfo:t,implementation:n}}var nl=mT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Wc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}_n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bn;_n.browser=function(e){return{$$typeof:_T,_reason:e}};_n.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(X_(299));return vT(e,t,null,n)};_n.flushSync=function(e){var t=nl.T,n=bn.p;try{if(nl.T=null,bn.p=2,e)return e()}finally{nl.T=t,bn.p=n,bn.d.f()}};_n.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,bn.d.C(e,t))};_n.prefetchDNS=function(e){typeof e=="string"&&bn.d.D(e)};_n.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Wc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?bn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&bn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};_n.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Wc(t.as,t.crossOrigin);bn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&bn.d.M(e)};_n.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Wc(n,t.crossOrigin);bn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};_n.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Wc(t.as,t.crossOrigin);bn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else bn.d.m(e)};_n.requestFormReset=function(e){bn.d.r(e)};_n.unstable_batchedUpdates=function(e,t){return e(t)};_n.useFormState=function(e,t,n){return nl.H.useFormState(e,t,n)};_n.useFormStatus=function(){return nl.H.useHostTransitionStatus()};_n.version="19.3.1"});var Z_=Gi((nD,Y_)=>{"use strict";function q_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q_)}catch(e){console.error(e)}}q_(),Y_.exports=W_()});var O1=Gi(Ah=>{"use strict";var Xe=V_(),Uy=jo(),yT=Z_();function Q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Oy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function kl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Iy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Py(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function J_(e){if(kl(e)!==e)throw Error(Q(188))}function xT(e){var t=e.alternate;if(!t){if(t=kl(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return J_(s),e;if(a===i)return J_(s),t;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function By(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=By(e),t!==null)return t;e=e.sibling}return null}function Pn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Pn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function nr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function K_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function zy(e){var t=[null,null],n=nr(e);return n===null||Fy(t,e,n.child,{foundSelf:!1}),t}function Fy(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Fy(e,t,n.child,i))return!0;n=n.sibling}return!1}function ke(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Q(559))}}var Dr=null,xp=null;function ST(e,t,n){return e===n?!0:e===t?(Dr=e,!0):!1}function MT(e,t,n){return e===n?(xp=e,!1):e===t?(xp!==null&&(Dr=e),!0):!1}function Q_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Sp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var me=Object.assign,bT=Symbol.for("react.element"),qc=Symbol.for("react.transitional.element"),cl=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),Hy=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),Gy=Symbol.for("react.consumer"),Zi=Symbol.for("react.context"),Dm=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),Tp=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),Ws=Symbol.for("react.lazy"),Ep=Symbol.for("react.activity"),TT=Symbol.for("react.legacy_hidden"),ET=Symbol.for("react.memo_cache_sentinel"),Ap=Symbol.for("react.view_transition"),AT=Symbol.for("react.recoverable"),j_=Symbol.iterator;function il(e){return e===null||typeof e!="object"?null:(e=j_&&e[j_]||e["@@iterator"],typeof e=="function"?e:null)}var wT=Symbol.for("react.client.reference");function wp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lr:return"Fragment";case Mp:return"Profiler";case Hy:return"StrictMode";case bp:return"Suspense";case Tp:return"SuspenseList";case Ep:return"Activity";case Ap:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case cl:return"Portal";case Zi:return e.displayName||"Context";case Gy:return(e._context.displayName||"Context")+".Consumer";case Dm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lm:return t=e.displayName||null,t!==null?t:wp(e.type)||"Memo";case Ws:t=e._payload,e=e._init;try{return wp(e(t))}catch{}}return null}var ul=Array.isArray,Nt=Uy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=yT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ka={pending:!1,data:null,method:null,action:null},Rp=[],Ur=-1;function es(e){return{current:e}}function cn(e){0>Ur||(e.current=Rp[Ur],Rp[Ur]=null,Ur--)}function xe(e,t){Ur++,Rp[Ur]=e.current,e.current=t}var ji=es(null),wl=es(null),ta=es(null),Lu=es(null);function Uu(e,t){switch(xe(ta,t),xe(wl,e),xe(ji,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fy(t),e=c1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}cn(ji),xe(ji,e)}function $r(){cn(ji),cn(wl),cn(ta)}function Cp(e){var t=e.memoizedState;t!==null&&(co._currentValue=t.memoizedState,xe(Lu,e)),t=ji.current;var n=c1(t,e.type);t!==n&&(xe(wl,e),xe(ji,n))}function Ou(e){wl.current===e&&(cn(ji),cn(wl)),Lu.current===e&&(cn(Lu),co._currentValue=ka)}var kd,$_;function ks(e){if(kd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kd=t&&t[1]||"",$_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kd+e+$_}var Xd=!1;function Wd(e,t){if(!e||Xd)return"";Xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(v){var u=v}Reflect.construct(e,[],d)}else{try{d.call()}catch(v){u=v}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{Xd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ks(n):""}function RT(e,t){switch(e.tag){case 26:case 27:case 5:return ks(e.type);case 16:return ks("Lazy");case 13:return e.child!==t&&t!==null?ks("Suspense Fallback"):ks("Suspense");case 19:return ks("SuspenseList");case 0:case 15:return Wd(e.type,!1);case 11:return Wd(e.type.render,!1);case 1:return Wd(e.type,!0);case 31:return ks("Activity");case 30:return ks("ViewTransition");default:return""}}function tv(e){try{var t="",n=null;do t+=RT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Np=Object.prototype.hasOwnProperty,Um=Xe.unstable_scheduleCallback,qd=Xe.unstable_cancelCallback,CT=Xe.unstable_shouldYield,NT=Xe.unstable_requestPaint,kn=Xe.unstable_now,DT=Xe.unstable_getCurrentPriorityLevel,Vy=Xe.unstable_ImmediatePriority,ky=Xe.unstable_UserBlockingPriority,Iu=Xe.unstable_NormalPriority,LT=Xe.unstable_LowPriority,Xy=Xe.unstable_IdlePriority,UT=Xe.log,OT=Xe.unstable_setDisableYieldValue,Xl=null,Xn=null;function Zs(e){if(typeof UT=="function"&&OT(e),Xn&&typeof Xn.setStrictMode=="function")try{Xn.setStrictMode(Xl,e)}catch{}}var Wn=Math.clz32?Math.clz32:BT,IT=Math.log,PT=Math.LN2;function BT(e){return e>>>=0,e===0?32:31-(IT(e)/PT|0)|0}var Yc=256,Zc=262144,Jc=4194304;function za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function oh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=za(i):(r&=o,r!==0?s=za(r):n||(n=o&~e,n!==0&&(s=za(n))))):(o=i&~a,o!==0?s=za(o):r!==0?s=za(r):n||(n=i&~e,n!==0&&(s=za(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Wl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Wy(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Wn(n),s=1<<i;t|=e[i],n&=~s}return t}function zT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qy(){var e=Jc;return Jc<<=1,(Jc&62914560)===0&&(Jc=4194304),e}function Yd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ql(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function FT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Wn(n),d=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var p=u[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Yy(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Yy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Wn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Zy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Wn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Jy(e,t){var n=t&-t;return n=(n&42)!==0?1:Om(n),(n&(e.suspendedLanes|t))!==0?0:n}function Om(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Im(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ky(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:D1(e.type))}function ev(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var As=Math.random().toString(36).slice(2),on="__reactFiber$"+As,Bn="__reactProps$"+As,fo="__reactContainer$"+As,nv="__reactEvents$"+As,HT="__reactListeners$"+As,GT="__reactHandles$"+As,iv="__reactResources$"+As,Yl="__reactMarker$"+As,Pu="__reactLoad$"+As;function lh(e){delete e[on],delete e[Bn],delete e[HT],delete e[GT]}function Ga(e){var t;if(t=e[on])return t;for(var n=e.parentNode;n;){if(t=n[fo]||n[on]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xy(e);e!==null;){if(n=e[on])return n;e=xy(e)}return t}e=n,n=e.parentNode}return null}function po(e){if(e=e[on]||e[fo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function hl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Q(33))}function kr(e){var t=e[iv];return t||(t=e[iv]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[Yl]=!0}function Qy(e){e[Pu]=void 0}var jy=new Set,$y={};function ir(e,t){to(e,t),to(e+"Capture",t)}function to(e,t){for($y[e]=t,e=0;e<t.length;e++)jy.add(t[e])}var VT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sv={},av={};function kT(e){return Np.call(av,e)?!0:Np.call(sv,e)?!1:VT.test(e)?av[e]=!0:(sv[e]=!0,!1)}var te=!1;function rv(){var e=te;return te=!1,e}function du(e,t,n){if(kT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Kc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function ps(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Fn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function XT(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i!="undefined"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dp(e){if(!e._valueTracker){var t=tx(e)?"checked":"value";e._valueTracker=XT(e,t,""+e[t])}}function ex(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=tx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var WT=/[\n"\\]/g;function pi(e){return e.replace(WT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Fn(t)):e.value!==""+Fn(t)&&(e.value=""+Fn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Zd(e,Fn(e.value)):Zd(e,Fn(t)):n!=null?Zd(e,Fn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Fn(o):e.removeAttribute("name")}function nx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Dp(e);return}n=n!=null?""+Fn(n):"",t=t!=null?""+Fn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i!=null?i:s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Dp(e)}function Zd(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Xr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Fn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ix(e,t,n){if(t!=null&&(t=""+Fn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Fn(n):""}function sx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Q(92));if(ul(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Fn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Dp(e)}function eo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ov(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||qT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ax(e,t,n){if(t!=null&&typeof t!="object")throw Error(Q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",te=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(ov(e,s,i),te=!0)}else for(var a in t)t.hasOwnProperty(a)&&ov(e,a,t[a])}function Pm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var YT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ZT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pu(e){return ZT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var Up=null;function Bm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Wr=null;function lv(e){var t=po(e);if(t&&(e=t.stateNode)){var n=e[Bn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Lp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+pi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Bn]||null;if(!s)throw Error(Q(90));Lp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&ex(i)}break t;case"textarea":ix(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Xr(e,!!n.multiple,t,!1)}}}var Jd=!1;function rx(e,t,n){if(Jd)return e(t,n);Jd=!0;try{var i=e(t);return i}finally{if(Jd=!1,(Or!==null||Wr!==null)&&(Mh(),Or&&(t=Or,e=Wr,Wr=Or=null,lv(t),e)))for(t=0;t<e.length;t++)lv(e[t])}}function Rl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Bn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var xs=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Op=!1;if(xs)try{Er={},Object.defineProperty(Er,"passive",{get:function(){Op=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Op=!1}var Er,Js=null,zm=null,mu=null;function ox(){if(mu)return mu;var e,t=zm,n=t.length,i,s="value"in Js?Js.value:Js.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return mu=s.slice(e,1<i?1-i:void 0)}function gu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qc(){return!0}function cv(){return!1}function wn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Qc:cv,this.isPropagationStopped=cv,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qc)},persist:function(){},isPersistent:Qc}),t}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ch=wn(ma),Zl=me({},ma,{view:0,detail:0}),JT=wn(Zl),Kd,Qd,sl,uh=me({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sl&&(sl&&e.type==="mousemove"?(Kd=e.screenX-sl.screenX,Qd=e.screenY-sl.screenY):Qd=Kd=0,sl=e),Kd)},movementY:function(e){return"movementY"in e?e.movementY:Qd}}),uv=wn(uh),KT=me({},uh,{dataTransfer:0}),QT=wn(KT),jT=me({},Zl,{relatedTarget:0}),jd=wn(jT),$T=me({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),tE=wn($T),eE=me({},ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nE=wn(eE),iE=me({},ma,{data:0}),hv=wn(iE),sE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rE[e])?!!t[e]:!1}function Fm(){return oE}var lE=me({},Zl,{key:function(e){if(e.key){var t=sE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fm,charCode:function(e){return e.type==="keypress"?gu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cE=wn(lE),uE=me({},uh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fv=wn(uE),hE=me({},ma,{submitter:0}),fE=wn(hE),dE=me({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fm}),pE=wn(dE),mE=me({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),gE=wn(mE),_E=me({},uh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vE=wn(_E),yE=me({},ma,{newState:0,oldState:0,source:0}),xE=wn(yE),SE=[9,13,27,32],Hm=xs&&"CompositionEvent"in window,pl=null;xs&&"documentMode"in document&&(pl=document.documentMode);var ME=xs&&"TextEvent"in window&&!pl,lx=xs&&(!Hm||pl&&8<pl&&11>=pl),dv=" ",pv=!1;function cx(e,t){switch(e){case"keyup":return SE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ux(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function bE(e,t){switch(e){case"compositionend":return ux(t);case"keypress":return t.which!==32?null:(pv=!0,dv);case"textInput":return e=t.data,e===dv&&pv?null:e;default:return null}}function TE(e,t){if(Ir)return e==="compositionend"||!Hm&&cx(e,t)?(e=ox(),mu=zm=Js=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lx&&t.locale!=="ko"?null:t.data;default:return null}}var EE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!EE[e.type]:t==="textarea"}function hx(e,t,n,i){Or?Wr?Wr.push(i):Wr=[i]:Or=i,t=sh(t,"onChange"),0<t.length&&(n=new ch("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ml=null,Cl=null;function AE(e){r1(e,0)}function hh(e){var t=hl(e);if(ex(t))return e}function gv(e,t){if(e==="change")return t}var fx=!1;xs&&(xs?($c="oninput"in document,$c||($d=document.createElement("div"),$d.setAttribute("oninput","return;"),$c=typeof $d.oninput=="function"),jc=$c):jc=!1,fx=jc&&(!document.documentMode||9<document.documentMode));var jc,$c,$d;function _v(){ml&&(ml.detachEvent("onpropertychange",dx),Cl=ml=null)}function dx(e){if(e.propertyName==="value"&&hh(Cl)){var t=[];hx(t,Cl,e,Bm(e)),rx(AE,t)}}function wE(e,t,n){e==="focusin"?(_v(),ml=t,Cl=n,ml.attachEvent("onpropertychange",dx)):e==="focusout"&&_v()}function RE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hh(Cl)}function CE(e,t){if(e==="click")return hh(t)}function NE(e,t){if(e==="input"||e==="change")return hh(t)}function DE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yn=typeof Object.is=="function"?Object.is:DE;function Nl(e,t){if(Yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Np.call(t,s)||!Yn(e[s],t[s]))return!1}return!0}function Ip(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function vv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yv(e,t){var n=vv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=vv(n)}}function px(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?px(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ip(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ip(e.document)}return t}function Gm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var LE=xs&&"documentMode"in document&&11>=document.documentMode,Pr=null,Pp=null,gl=null,Bp=!1;function xv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bp||Pr==null||Pr!==Ip(i)||(i=Pr,"selectionStart"in i&&Gm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gl&&Nl(gl,i)||(gl=i,i=sh(Pp,"onSelect"),0<i.length&&(t=new ch("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Pr)))}function Pa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Br={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},tp={},gx={};xs&&(gx=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function sr(e){if(tp[e])return tp[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gx)return tp[e]=t[n];return e}var _x=sr("animationend"),vx=sr("animationiteration"),yx=sr("animationstart"),UE=sr("transitionrun"),OE=sr("transitionstart"),IE=sr("transitioncancel"),xx=sr("transitionend"),Sx=new Map,zp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zp.push("scrollEnd");function Ri(e,t){Sx.set(e,t),ir(t,[e])}var PE=0;function Ss(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=wi.identifierPrefix;var n=PE++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Sv(e){if(e==null||typeof e=="string")return e;var t=null,n=jr;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t==null?e.default:t}function ws(e,t){return e=Sv(e),t=Sv(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Bu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],zr=0,Vm=0;function fh(){for(var e=zr,t=Vm=zr=0;t<e;){var n=hi[t];hi[t++]=null;var i=hi[t];hi[t++]=null;var s=hi[t];hi[t++]=null;var a=hi[t];if(hi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Mx(n,s,a)}}function dh(e,t,n,i){hi[zr++]=e,hi[zr++]=t,hi[zr++]=n,hi[zr++]=i,Vm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function km(e,t,n,i){return dh(e,t,n,i),zu(e)}function ar(e,t){return dh(e,null,null,t),zu(e)}function Mx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Wn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function zu(e){if(50<Al)throw Al=0,Au=null,Error(Q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fr={};function BE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,t,n,i){return new BE(e,t,n,i)}function Xm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vs(e,t){var n=e.alternate;return n===null?(n=On(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _u(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Xm(i)&&(r=1);else if(typeof i=="string")r=c3(e,n,ji.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Ep:return e=On(31,n,t,s),e.elementType=Ep,e.lanes=a,e;case Lr:return Xa(n.children,s,a,t);case Hy:r=8,s|=24;break;case Mp:return e=On(12,n,t,s|2),e.elementType=Mp,e.lanes=a,e;case bp:return e=On(13,n,t,s),e.elementType=bp,e.lanes=a,e;case Tp:return e=On(19,n,t,s),e.elementType=Tp,e.lanes=a,e;case TT:case Ap:return e=s|32,e=On(30,n,t,e),e.elementType=Ap,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Zi:r=10;break t;case Gy:r=9;break t;case Dm:r=11;break t;case Lm:r=14;break t;case Ws:r=16,i=null;break t}r=29,n=Error(Q(130,e===null?"null":typeof e,"")),i=null}return t=On(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Xa(e,t,n,i){return e=On(7,e,i,t),e.lanes=n,e}function ep(e,t,n){return e=On(6,e,null,t),e.lanes=n,e}function Tx(e){var t=On(18,null,null,0);return t.stateNode=e,t}function np(e,t,n){return t=On(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Mv=new WeakMap;function mi(e,t){if(typeof e=="object"&&e!==null){var n=Mv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:tv(t)},Mv.set(e,t),t)}return{value:e,source:t,stack:tv(t)}}var Hr=[],Gr=0,Fu=null,Dl=0,fi=[],di=0,ua=null,Ki=1,Qi="";function gs(e,t){Hr[Gr++]=Dl,Hr[Gr++]=Fu,Fu=e,Dl=t}function Ex(e,t,n){fi[di++]=Ki,fi[di++]=Qi,fi[di++]=ua,ua=e;var i=Ki;e=Qi;var s=32-Wn(i)-1;i&=~(1<<s),n+=1;var a=32-Wn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ki=1<<32-Wn(t)+s|n<<s|i,Qi=a+e}else Ki=1<<a|n<<s|i,Qi=e}function ph(e){e.return!==null&&(gs(e,1),Ex(e,1,0))}function Wm(e){for(;e===Fu;)Fu=Hr[--Gr],Hr[Gr]=null,Dl=Hr[--Gr],Hr[Gr]=null;for(;e===ua;)ua=fi[--di],fi[di]=null,Qi=fi[--di],fi[di]=null,Ki=fi[--di],fi[di]=null}function Ax(e,t){fi[di++]=Ki,fi[di++]=Qi,fi[di++]=ua,Ki=t.id,Qi=t.overflow,ua=e}var $e=null,ye=null,Vt=!1,ea=null,gi=!1,Fp=Error(Q(519));function ha(e){var t=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ll(mi(t,e)),Fp}function bv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[on]=e,t[Bn]=i,n){case"dialog":kt("cancel",t),kt("close",t);break;case"iframe":case"object":case"embed":kt("load",t);break;case"video":case"audio":for(n=0;n<Pl.length;n++)kt(Pl[n],t);break;case"source":kt("error",t);break;case"img":case"image":case"link":kt("error",t),kt("load",t);break;case"details":kt("toggle",t);break;case"input":kt("invalid",t),nx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":kt("invalid",t);break;case"textarea":kt("invalid",t),sx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||l1(t.textContent,n)?(i.popover!=null&&(kt("beforetoggle",t),kt("toggle",t)),i.onScroll!=null&&kt("scroll",t),i.onScrollEnd!=null&&kt("scrollend",t),i.onClick!=null&&(t.onclick=Ji),t=!0):t=!1,t||ha(e,!0)}function Hu(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:$e=$e.return}}function Ar(e){if(e!==$e)return!1;if(!Vt)return Hu(e),Vt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||bm(e.type,e.memoizedProps)),n=!n),n&&ye&&ha(e),Hu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));ye=yy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));ye=yy(e)}else t===27?(t=ye,ga(e.type)?(e=wm,wm=null,ye=e):ye=t):ye=$e?_i(e.stateNode.nextSibling):null;return!0}function Za(){ye=$e=null,Vt=!1}function ip(){var e=ea;return e!==null&&(Ln===null?Ln=e:Ln.push.apply(Ln,e),ea=null),e}function Ll(e){ea===null?ea=[e]:ea.push(e)}var Hp=es(null),rr=null,_s=null;function Ks(e,t,n){xe(Hp,t._currentValue),t._currentValue=n}function ys(e){e._currentValue=Hp.current,cn(Hp)}function vu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Gp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),vu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),vu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),vu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ja(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Q(387));if(r=r.memoizedProps,r!==null){var o=s.type;Yn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Lu.current){if(r=s.alternate,r===null)throw Error(Q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(co):e=[co])}s=s.return}return e!==null&&Gp(t,e,n,i),t.flags|=262144,e!==null}function Gu(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ka(e){rr=e,_s=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return wx(rr,e)}function tu(e,t){return rr===null&&Ka(e),wx(e,t)}function wx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},_s===null){if(e===null)throw Error(Q(308));_s=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _s=_s.next=t;return n}var zE=typeof AbortController!="undefined"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},FE=Xe.unstable_scheduleCallback,HE=Xe.unstable_NormalPriority,Be={$$typeof:Zi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qm(){return{controller:new zE,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&FE(HE,function(){e.controller.abort()})}function Tv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var fl=null;function GE(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var _l=null,Vp=0,Qa=0,qr=null;function VE(e,t){if(_l===null){var n=_l=[];Vp=0,Qa=x0(),qr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Vp++,t.then(Ev,Ev),t}function Ev(){if(--Vp===0&&(fl=null,_l!==null)){qr!==null&&(qr.status="fulfilled");var e=_l;_l=null,Qa=0,qr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Av=Nt.S;Nt.S=function(e,t){if(WS=kn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&VE(e,t),fl!==null)for(var n=ro;n!==null;)Tv(n,fl),n=n.next;if(n=e.types,n!==null){for(var i=ro;i!==null;)Tv(i,n),i=i.next;if(Qa!==0){i=fl,i===null&&(i=fl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}Av!==null&&Av(e,t)};var Wa=es(null);function Ym(){var e=Wa.current;return e!==null?e:pe.pooledCache}function yu(e,t){t===null?xe(Wa,Wa.current):xe(Wa,t.pool)}function Rx(){var e=Ym();return e===null?null:{parent:Be._currentValue,pool:e}}var mo=Error(Q(460)),Zm=Error(Q(474)),mh=Error(Q(542)),Vu={then:function(){}};function wv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ji,Ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cv(e),e===void 0&&!("reason"in t)?Error(Q(600)):e;default:if(typeof t.status=="string")t.then(Ji,Ji);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(Q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cv(e),e}throw qa=t,mo}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(qa=n,mo):n}}var qa=null;function Rv(){if(qa===null)throw Error(Q(459));var e=qa;return qa=null,e}function Cv(e){if(e===mo||e===mh)throw Error(Q(483))}var Yr=null,Ul=0;function eu(e){var t=Ul;return Ul+=1,Yr===null&&(Yr=[]),Cx(Yr,e,t)}function Vs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function nu(e,t){throw t.$$typeof===bT?Error(Q(525)):(e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Nx(e){function t(f,m){if(e){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key===null?m.set(f.index,f):m.set(f.key,f),f=f.sibling;return m}function s(f,m){return f=vs(f,m),f.index=0,f.sibling=null,f}function a(f,m,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=2,m):y):(f.flags|=134217730,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,m,y,x){return m===null||m.tag!==6?(m=ep(y,f.mode,x),m.return=f,m):(m=s(m,y),m.return=f,m)}function l(f,m,y,x){var E=y.type;return E===Lr?(f=h(f,m,y.props.children,x,y.key),Vs(f,y),f):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ws&&Fa(E)===m.type)?(m=s(m,y.props),Vs(m,y),m.return=f,m):(m=_u(y.type,y.key,y.props,null,f.mode,x),Vs(m,y),m.return=f,m)}function c(f,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=np(y,f.mode,x),m.return=f,m):(m=s(m,y.children||[]),m.return=f,m)}function h(f,m,y,x,E){return m===null||m.tag!==7?(m=Xa(y,f.mode,x,E),m.return=f,m):(m=s(m,y),m.return=f,m)}function d(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=ep(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case qc:return y=_u(m.type,m.key,m.props,null,f.mode,y),Vs(y,m),y.return=f,y;case cl:return m=np(m,f.mode,y),m.return=f,m;case Ws:return m=Fa(m),d(f,m,y)}if(ul(m)||il(m))return m=Xa(m,f.mode,y,null),m.return=f,m;if(typeof m.then=="function")return d(f,eu(m),y);if(m.$$typeof===Zi)return d(f,tu(f,m),y);nu(f,m)}return null}function u(f,m,y,x){var E=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return E!==null?null:o(f,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qc:return y.key===E?l(f,m,y,x):null;case cl:return y.key===E?c(f,m,y,x):null;case Ws:return y=Fa(y),u(f,m,y,x)}if(ul(y)||il(y))return E!==null?null:h(f,m,y,x,null);if(typeof y.then=="function")return u(f,m,eu(y),x);if(y.$$typeof===Zi)return u(f,m,tu(f,y),x);nu(f,y)}return null}function p(f,m,y,x,E){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return f=f.get(y)||null,o(m,f,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qc:return f=f.get(x.key===null?y:x.key)||null,l(m,f,x,E);case cl:return f=f.get(x.key===null?y:x.key)||null,c(m,f,x,E);case Ws:return x=Fa(x),p(f,m,y,x,E)}if(ul(x)||il(x))return f=f.get(y)||null,h(m,f,x,E,null);if(typeof x.then=="function")return p(f,m,y,eu(x),E);if(x.$$typeof===Zi)return p(f,m,y,tu(m,x),E);nu(m,x)}return null}function v(f,m,y,x){for(var E=null,w=null,_=m,b=m=0,O=null;_!==null&&b<y.length;b++){_.index>b?(O=_,_=null):O=_.sibling;var R=u(f,_,y[b],x);if(R===null){_===null&&(_=O);break}e&&_&&R.alternate===null&&t(f,_),m=a(R,m,b),w===null?E=R:w.sibling=R,w=R,_=O}if(b===y.length)return n(f,_),Vt&&gs(f,b),E;if(_===null){for(;b<y.length;b++)_=d(f,y[b],x),_!==null&&(m=a(_,m,b),w===null?E=_:w.sibling=_,w=_);return Vt&&gs(f,b),E}for(_=i(_);b<y.length;b++)O=p(_,f,b,y[b],x),O!==null&&(e&&(R=O.alternate,R!==null&&_.delete(R.key===null?b:R.key)),m=a(O,m,b),w===null?E=O:w.sibling=O,w=O);return e&&_.forEach(function(U){return t(f,U)}),Vt&&gs(f,b),E}function T(f,m,y,x){if(y==null)throw Error(Q(151));for(var E=null,w=null,_=m,b=m=0,O=null,R=y.next();_!==null&&!R.done;b++,R=y.next()){_.index>b?(O=_,_=null):O=_.sibling;var U=u(f,_,R.value,x);if(U===null){_===null&&(_=O);break}e&&_&&U.alternate===null&&t(f,_),m=a(U,m,b),w===null?E=U:w.sibling=U,w=U,_=O}if(R.done)return n(f,_),Vt&&gs(f,b),E;if(_===null){for(;!R.done;b++,R=y.next())R=d(f,R.value,x),R!==null&&(m=a(R,m,b),w===null?E=R:w.sibling=R,w=R);return Vt&&gs(f,b),E}for(_=i(_);!R.done;b++,R=y.next())R=p(_,f,b,R.value,x),R!==null&&(e&&(O=R.alternate,O!==null&&_.delete(O.key===null?b:O.key)),m=a(R,m,b),w===null?E=R:w.sibling=R,w=R);return e&&_.forEach(function(z){return t(f,z)}),Vt&&gs(f,b),E}function g(f,m,y,x){if(typeof y=="object"&&y!==null&&y.type===Lr&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case qc:t:{for(var E=y.key;m!==null;){if(m.key===E){if(E=y.type,E===Lr){if(m.tag===7){n(f,m.sibling),x=s(m,y.props.children),Vs(x,y),x.return=f,f=x;break t}}else if(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ws&&Fa(E)===m.type){n(f,m.sibling),x=s(m,y.props),Vs(x,y),x.return=f,f=x;break t}n(f,m);break}else t(f,m);m=m.sibling}y.type===Lr?(x=Xa(y.props.children,f.mode,x,y.key),Vs(x,y),x.return=f,f=x):(x=_u(y.type,y.key,y.props,null,f.mode,x),Vs(x,y),x.return=f,f=x)}return r(f);case cl:t:{for(E=y.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(f,m.sibling),x=s(m,y.children||[]),x.return=f,f=x;break t}else{n(f,m);break}else t(f,m);m=m.sibling}x=np(y,f.mode,x),x.return=f,f=x}return r(f);case Ws:return y=Fa(y),g(f,m,y,x)}if(ul(y))return v(f,m,y,x);if(il(y)){if(E=il(y),typeof E!="function")throw Error(Q(150));return y=E.call(y),T(f,m,y,x)}if(typeof y.then=="function")return g(f,m,eu(y),x);if(y.$$typeof===Zi)return g(f,m,tu(f,y),x);nu(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(n(f,m.sibling),x=s(m,y),x.return=f,f=x):(n(f,m),x=ep(y,f.mode,x),x.return=f,f=x),r(f)):n(f,m)}return function(f,m,y,x){try{Ul=0;var E=g(f,m,y,x);return Yr=null,E}catch(_){if(_===mo||_===mh)throw _;var w=On(29,_,null,f.mode);return w.lanes=x,w.return=f,w}}}var ja=Nx(!0),Dx=Nx(!1),qs=!1;function Jm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=zu(e),Mx(e,null,n),t}return dh(e,i,t,n),zu(e)}function vl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Zy(e,n)}}function sp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xp=!1;function yl(){if(Xp){var e=qr;if(e!==null)throw e}}function xl(e,t,n,i){Xp=!1;var s=e.updateQueue;qs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,h=c=l=null,o=a;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(Zt&u)===u:(i&u)===u){u!==0&&u===Qa&&(Xp=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,T=o;u=t;var g=n;switch(T.tag){case 1:if(v=T.payload,typeof v=="function"){d=v.call(g,d,u);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=T.payload,u=typeof v=="function"?v.call(g,d,u):v,u==null)break t;d=me({},d,u);break t;case 2:qs=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),pa|=r,e.lanes=r,e.memoizedState=d}}function Lx(e,t){if(typeof e!="function")throw Error(Q(191,e));e.call(t)}function Ux(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Lx(n[e],t)}var fa=es(null),ku=es(0);function Nv(e,t){e=Es,xe(ku,e),xe(fa,t),Es=e|t.baseLanes}function Wp(){xe(ku,Es),xe(fa,fa.current)}function Km(){Es=ku.current,cn(fa),cn(ku)}var fn=es(null),vn=null;function sa(e){var t=e.alternate;xe(un,un.current&1),xe(fn,e),vn===null&&(t===null||fa.current!==null||t.memoizedState!==null)&&(vn=e)}function qp(e){xe(un,un.current),xe(fn,e),vn===null&&(vn=e)}function Ox(e){e.tag===22?(xe(un,un.current),xe(fn,e),vn===null&&(vn=e)):aa()}function aa(){xe(un,un.current),xe(fn,fn.current)}function Hn(e){cn(fn),vn===e&&(vn=null),cn(un)}var un=es(0);function Ol(e,t){xe(fn,fn.current),xe(un,t)}function Qm(e){cn(un),cn(fn),vn===e&&(vn=null)}function Xu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Am(n)||T0(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ms=0,zt=null,he=null,Pe=null,Wu=!1,Zr=!1,$a=!1,qu=0,Il=0,Jr=null,XE=0;function De(){throw Error(Q(321))}function jm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yn(e[n],t[n]))return!1;return!0}function $m(e,t,n,i,s,a){return Ms=a,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nt.H=e===null||e.memoizedState===null?hS:fS,$a=!1,a=n(i,s),$a=!1,Zr&&(a=Px(t,n,i,s)),Ix(e),a}function Ix(e){Nt.H=Yu;var t=he!==null&&he.next!==null;if(Ms=0,Pe=he=zt=null,Wu=!1,Il=0,Jr=null,t)throw Error(Q(300));e===null||ze||(e=e.dependencies,e!==null&&Gu(e)&&(ze=!0))}function Px(e,t,n,i){zt=e;var s=0;do{if(Zr&&(Jr=null),Il=0,Zr=!1,25<=s)throw Error(Q(301));if(s+=1,Pe=he=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Nt.H=jE,a=t(n,i)}while(Zr);return a}function WE(){var e=Nt.H,t=e.useState()[0];return t=typeof t.then=="function"?Kl(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(zt.flags|=1024),t}function t0(){var e=qu!==0;return qu=0,e}function e0(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function n0(e){if(Wu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wu=!1}Ms=0,Pe=he=zt=null,Zr=!1,Il=qu=0,Jr=null}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?zt.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Ue(){if(he===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=Pe===null?zt.memoizedState:Pe.next;if(t!==null)Pe=t,he=e;else{if(e===null)throw zt.alternate===null?Error(Q(467)):Error(Q(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},Pe===null?zt.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function gh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kl(e){var t=Il;return Il+=1,Jr===null&&(Jr=[]),e=Cx(Jr,e,t),t=zt,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,Nt.H=t===null||t.memoizedState===null?hS:fS),e}function _h(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Kl(e);if(e.$$typeof===AT)return;if(e.$$typeof===Zi)return ln(e)}throw Error(Q(438,String(e)))}function i0(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=gh(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ET;return t.index++,n}function bs(e,t){return typeof t=="function"?t(e):t}function xu(e){var t=Ue();return s0(t,he,e)}function s0(e,t,n){var i=e.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Zt&d)===d:(Ms&d)===d){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Qa&&(h=!0);else if((Ms&u)===u){c=c.next,u===Qa&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,zt.lanes|=u,pa|=u;d=c.action,$a&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else u={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,zt.lanes|=d,pa|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Yn(a,e.memoizedState)&&(ze=!0,h&&(n=qr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ap(e){var t=Ue(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Yn(a,t.memoizedState)||(ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Bx(e,t,n){var i=zt,s=Ue(),a=Vt;if(a){if(n===void 0)throw Error(Q(407));n=n()}else n=t();var r=!Yn((he||s).memoizedState,n);if(r&&(s.memoizedState=n,ze=!0),s=s.queue,a0(Hx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Pe!==null&&(Pe.memoizedState.tag&1)!==0,no(e?9:8,{destroy:void 0},Fx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,pe===null)throw Error(Q(349));a||(Ms&127)!==0||zx(i,t,n)}return n}function zx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=gh(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fx(e,t,n,i){t.value=n,t.getSnapshot=i,Gx(t)&&Vx(e)}function Hx(e,t,n){return n(function(){Gx(t)&&Vx(e)})}function Gx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yn(e,n)}catch{return!0}}function Vx(e){var t=ar(e,2);t!==null&&In(t,e,2)}function Yp(e){var t=An();if(typeof e=="function"){var n=e;if(e=n(),$a){Zs(!0);try{n()}finally{Zs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:e},t}function kx(e,t,n,i){return e.baseState=n,s0(e,he,typeof i=="function"?i:bs)}function qE(e,t,n,i,s){if(yh(e))throw Error(Q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Nt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Xx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Xx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Nt.T,r={};r.types=a!==null?a.types:null,Nt.T=r;try{var o=n(s,i),l=Nt.S;l!==null&&l(r,o),Dv(e,t,o)}catch(c){Zp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Nt.T=a}}else try{a=n(s,i),Dv(e,t,a)}catch(c){Zp(e,t,c)}}function Dv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Lv(e,t,i)},function(i){return Zp(e,t,i)}):Lv(e,t,n)}function Lv(e,t,n){t.status="fulfilled",t.value=n,Wx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xx(e,n)))}function Zp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Wx(t),t=t.next;while(t!==i)}e.action=null}function Wx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qx(e,t){return t}function Uv(e,t){if(Vt){var n=pe.formState;if(n!==null){t:{var i=zt;if(Vt){if(ye){e:{for(var s=ye,a=gi;s.nodeType!==8;){if(!a){s=null;break e}if(s=_i(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){ye=_i(s.nextSibling),i=s.data==="F!";break t}}ha(i)}i=!1}i&&(t=n[0])}}return n=An(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qx,lastRenderedState:t},n.queue=i,n=lS.bind(null,zt,i),i.dispatch=n,i=Yp(!1),a=c0.bind(null,zt,!1,i.queue),i=An(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=qE.bind(null,zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Ov(e){var t=Ue();return Yx(t,he,e)}function Yx(e,t,n){if(t=s0(e,t,qx)[0],e=xu(bs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Kl(t)}catch(r){throw r===mo?mh:r}else i=t;t=Ue();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,no(9,{destroy:void 0},YE.bind(null,s,n),null)),[i,a,e]}function YE(e,t){e.action=t}function Iv(e){var t=Ue(),n=he;if(n!==null)return Yx(t,n,e);Ue(),t=t.memoizedState,n=Ue();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function no(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=gh(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Zx(){return Ue().memoizedState}function Su(e,t,n,i){var s=An();zt.flags|=e,s.memoizedState=no(1|t,{destroy:void 0},n,i===void 0?null:i)}function vh(e,t,n,i){var s=Ue();i=i===void 0?null:i;var a=s.memoizedState.inst;he!==null&&i!==null&&jm(i,he.memoizedState.deps)?s.memoizedState=no(t,a,n,i):(zt.flags|=e,s.memoizedState=no(1|t,a,n,i))}function Pv(e,t){Su(8390656,8,e,t)}function a0(e,t){vh(2048,8,e,t)}function ZE(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=gh(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Jx(e){var t=Ue().memoizedState;return ZE({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(Q(440));return t.impl.apply(void 0,arguments)}}function Kx(e,t){return vh(4,2,e,t)}function Qx(e,t){return vh(4,4,e,t)}function jx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $x(e,t,n){n=n!=null?n.concat([e]):null,vh(4,4,jx.bind(null,t,e),n)}function r0(){}function tS(e,t){var n=Ue();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&jm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function eS(e,t){var n=Ue();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&jm(t,i[1]))return i[0];if(i=e(),$a){Zs(!0);try{e()}finally{Zs(!1)}}return n.memoizedState=[i,t],i}function o0(e,t,n){return n===void 0||(Ms&1073741824)!==0&&(Zt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=YS(),zt.lanes|=e,pa|=e,n)}function nS(e,t,n,i){return Yn(n,t)?n:fa.current!==null?(e=o0(e,n,i),Yn(e,t)||(ze=!0),e):(Ms&106)===0||(Ms&1073741824)!==0&&(Zt&261930)===0?(ze=!0,e.memoizedState=n):(e=YS(),zt.lanes|=e,pa|=e,t)}function iS(e,t,n,i,s){var a=ie.p;ie.p=a!==0&&8>a?a:8;var r=Nt.T,o={};o.types=r!==null?r.types:null,Nt.T=o,c0(e,!1,t,n);try{var l=s(),c=Nt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=kE(l,i);Sl(e,t,h,qn(e))}else Sl(e,t,i,qn(e))}catch(d){Sl(e,t,{then:function(){},status:"rejected",reason:d},qn())}finally{ie.p=a,r!==null&&o.types!==null&&(r.types=o.types),Nt.T=r}}function JE(){}function Jp(e,t,n,i){if(e.tag!==5)throw Error(Q(476));var s=sS(e).queue;iS(e,s,t,ka,n===null?JE:function(){return aS(e),n(i)})}function sS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ka,baseState:ka,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:ka},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function aS(e){var t=sS(e);t.next===null&&(t=e.alternate.memoizedState),Sl(e,t.next.queue,{},qn())}function l0(){return ln(co)}function rS(){return Ue().memoizedState}function oS(){return Ue().memoizedState}function KE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=qn();e=na(n);var i=ia(t,e,n);i!==null&&(In(i,t,n),vl(i,t,n)),t={cache:qm()},e.payload=t;return}t=t.return}}function QE(e,t,n){var i=qn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},yh(e)?cS(t,n):(n=km(e,t,n,i),n!==null&&(In(n,e,i),uS(n,t,i)))}function lS(e,t,n){var i=qn();Sl(e,t,n,i)}function Sl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(yh(e))cS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Yn(o,r))return dh(e,t,s,0),pe===null&&fh(),!1}catch{}if(n=km(e,t,s,i),n!==null)return In(n,e,i),uS(n,t,i),!0}return!1}function c0(e,t,n,i){if(i={lane:2,revertLane:x0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},yh(e)){if(t)throw Error(Q(479))}else t=km(e,n,i,2),t!==null&&In(t,e,2)}function yh(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function cS(e,t){Zr=Wu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Zy(e,n)}}var Yu={readContext:ln,use:_h,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De,useEffectEvent:De},hS={readContext:ln,use:_h,useCallback:function(e,t){return An().memoizedState=[e,t===void 0?null:t],e},useContext:ln,useEffect:Pv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Su(4194308,4,jx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Su(4194308,4,e,t)},useInsertionEffect:function(e,t){Su(4,2,e,t)},useMemo:function(e,t){var n=An();t=t===void 0?null:t;var i=e();if($a){Zs(!0);try{e()}finally{Zs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=An();if(n!==void 0){var s=n(t);if($a){Zs(!0);try{n(t)}finally{Zs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=QE.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=An();return e={current:e},t.memoizedState=e},useState:function(e){e=Yp(e);var t=e.queue,n=lS.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:r0,useDeferredValue:function(e,t){var n=An();return o0(n,e,t)},useTransition:function(){var e=Yp(!1);return e=iS.bind(null,zt,e.queue,!0,!1),An().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,s=An();if(Vt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),pe===null)throw Error(Q(349));(Zt&127)!==0||zx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Pv(Hx.bind(null,i,a,e),[e]),i.flags|=2048,no(9,{destroy:void 0},Fx.bind(null,i,a,n,t),null),n},useId:function(){var e=An(),t=pe.identifierPrefix;if(Vt){var n=Qi,i=Ki;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=qu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=XE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:l0,useFormState:Uv,useActionState:Uv,useOptimistic:function(e){var t=An();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=c0.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:i0,useCacheRefresh:function(){return An().memoizedState=KE.bind(null,zt)},useEffectEvent:function(e){var t=An(),n={impl:e};return t.memoizedState=n,function(){if((ne&2)!==0)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},fS={readContext:ln,use:_h,useCallback:tS,useContext:ln,useEffect:a0,useImperativeHandle:$x,useInsertionEffect:Kx,useLayoutEffect:Qx,useMemo:eS,useReducer:xu,useRef:Zx,useState:function(){return xu(bs)},useDebugValue:r0,useDeferredValue:function(e,t){var n=Ue();return nS(n,he.memoizedState,e,t)},useTransition:function(){var e=xu(bs)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Kl(e),t]},useSyncExternalStore:Bx,useId:rS,useHostTransitionStatus:l0,useFormState:Ov,useActionState:Ov,useOptimistic:function(e,t){var n=Ue();return kx(n,he,e,t)},useMemoCache:i0,useCacheRefresh:oS,useEffectEvent:Jx},jE={readContext:ln,use:_h,useCallback:tS,useContext:ln,useEffect:a0,useImperativeHandle:$x,useInsertionEffect:Kx,useLayoutEffect:Qx,useMemo:eS,useReducer:ap,useRef:Zx,useState:function(){return ap(bs)},useDebugValue:r0,useDeferredValue:function(e,t){var n=Ue();return he===null?o0(n,e,t):nS(n,he.memoizedState,e,t)},useTransition:function(){var e=ap(bs)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Kl(e),t]},useSyncExternalStore:Bx,useId:rS,useHostTransitionStatus:l0,useFormState:Iv,useActionState:Iv,useOptimistic:function(e,t){var n=Ue();return he!==null?kx(n,he,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:i0,useCacheRefresh:oS,useEffectEvent:Jx};function rp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Kp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=qn(),s=na(i);s.payload=t,n!=null&&(s.callback=n),t=ia(e,s,i),t!==null&&(In(t,e,i),vl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=qn(),s=na(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ia(e,s,i),t!==null&&(In(t,e,i),vl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qn(),i=na(n);i.tag=2,t!=null&&(i.callback=t),t=ia(e,i,n),t!==null&&(In(t,e,n),vl(t,e,n))}};function Bv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Nl(n,i)||!Nl(s,a):!0}function zv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Kp.enqueueReplaceState(t,t.state,null)}function tr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=me({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function dS(e){Bu(e)}function pS(e){console.error(e)}function mS(e){Bu(e)}function Zu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Fv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Qp(e,t,n){return n=na(n),n.tag=3,n.payload={element:null},n.callback=function(){Zu(e,t)},n}function gS(e){return e=na(e),e.tag=3,e}function _S(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Fv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Fv(t,n,i),typeof s!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function $E(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ja(t,n,s,!0),n=fn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return vn===null?nh():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Vu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),dp(e,i,s)),!1;case 22:return n.flags|=65536,i===Vu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),dp(e,i,s)),!1}throw Error(Q(435,n.tag))}return dp(e,i,s),nh(),!1}if(Vt)return t=fn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Fp&&(e=Error(Q(422),{cause:i}),Ll(mi(e,n)))):(i!==Fp&&(t=Error(Q(423),{cause:i}),Ll(mi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=mi(i,n),s=Qp(e.stateNode,i,s),sp(e,s),Le!==4&&(Le=2)),!1;var a=Error(Q(520),{cause:i});if(a=mi(a,n),El===null?El=[a]:El.push(a),Le!==4&&(Le=2),t===null)return!0;i=mi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Qp(n.stateNode,i,e),sp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ra===null||!ra.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=gS(s),_S(s,e,n,i),sp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var u0=Error(Q(461)),ze=!1;function Ve(e,t,n,i){t.child=e===null?Dx(t,null,n,i):ja(t,e.child,n,i)}function Hv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ka(t),i=$m(e,t,n,r,a,s),o=t0(),e!==null&&!ze?(e0(e,t,s),Ts(e,t,s)):(Vt&&o&&ph(t),t.flags|=1,Ve(e,t,i,s),t.child)}function Gv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Xm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,vS(e,t,a,i,s)):(e=_u(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!f0(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Nl,n(r,i)&&e.ref===t.ref)return Ts(e,t,s)}return t.flags|=1,e=vs(a,i),e.ref=t.ref,e.return=t,t.child=e}function vS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Nl(a,i)&&e.ref===t.ref)if(ze=!1,t.pendingProps=i=a,f0(e,s))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,Ts(e,t,s)}return jp(e,t,n,i,s)}function yS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Vv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yu(t,a!==null?a.cachePool:null),a!==null?Nv(t,a):Wp(),Ox(t);else return i=t.lanes=536870912,Vv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(yu(t,a.cachePool),Nv(t,a),aa(),t.memoizedState=null):(e!==null&&yu(t,null),Wp(),aa());return Ve(e,t,s,n),t.child}function Ml(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Vv(e,t,n,i,s){var a=Ym();return a=a===null?null:{parent:Be._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&yu(t,null),Wp(),Ox(t),e!==null&&Ja(e,t,i,!0),t.childLanes=s,null}function Mu(e,t){return t=xh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function kv(e,t,n){return ja(t,e.child,null,n),e=Mu(t,t.pendingProps),e.flags|=2,Hn(t),t.memoizedState=null,e}function tA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Vt){if(i.mode==="hidden")return e=Mu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ml(null,e);if(qp(t),(e=ye)?(e=y1(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},n=Tx(e),n.return=t,t.child=n,$e=t,ye=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Mu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(qp(t),s)if(t.flags&256)t.flags&=-257,t=kv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Q(558));else if(ze||Ja(e,t,n,!1),s=(n&e.childLanes)!==0,ze||s){if(fa.current===null){if(i=pe,i!==null&&(r=Jy(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,ar(e,r),In(i,e,r),u0;nh()}t=kv(e,t,n)}else e=a.treeContext,ye=_i(r.nextSibling),$e=t,Vt=!0,ea=null,gi=!1,e!==null&&Ax(t,e),t=Mu(t,i),t.flags|=134221824;return t}return e=vs(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Rr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function jp(e,t,n,i,s){return Ka(t),n=$m(e,t,n,i,void 0,s),i=t0(),e!==null&&!ze?(e0(e,t,s),Ts(e,t,s)):(Vt&&i&&ph(t),t.flags|=1,Ve(e,t,n,s),t.child)}function Xv(e,t,n,i,s,a){return Ka(t),t.updateQueue=null,n=Px(t,i,n,s),Ix(e),i=t0(),e!==null&&!ze?(e0(e,t,a),Ts(e,t,a)):(Vt&&i&&ph(t),t.flags|=1,Ve(e,t,n,a),t.child)}function Wv(e,t,n,i,s){if(Ka(t),t.stateNode===null){var a=Fr,r=n.contextType;typeof r=="object"&&r!==null&&(a=ln(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Kp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Jm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?ln(r):Fr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(rp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Kp.enqueueReplaceState(a,a.state,null),xl(t,i,a,s),yl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=tr(n,o);a.props=l;var c=a.context,h=n.contextType;r=Fr,typeof h=="object"&&h!==null&&(r=ln(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&zv(t,a,i,r),qs=!1;var u=t.memoizedState;a.state=u,xl(t,i,a,s),yl(),c=t.memoizedState,o||u!==c||qs?(typeof d=="function"&&(rp(t,n,d,i),c=t.memoizedState),(l=qs||Bv(t,n,l,i,u,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,kp(e,t),r=t.memoizedProps,h=tr(n,r),a.props=h,d=t.pendingProps,u=a.context,c=n.contextType,l=Fr,typeof c=="object"&&c!==null&&(l=ln(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||u!==l)&&zv(t,a,i,l),qs=!1,u=t.memoizedState,a.state=u,xl(t,i,a,s),yl();var p=t.memoizedState;r!==d||u!==p||qs||e!==null&&e.dependencies!==null&&Gu(e.dependencies)?(typeof o=="function"&&(rp(t,n,o,i),p=t.memoizedState),(h=qs||Bv(t,n,h,i,u,p,l)||e!==null&&e.dependencies!==null&&Gu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Rr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=ja(t,e.child,null,s),t.child=ja(t,null,n,s)):Ve(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Ts(e,t,s),e}function qv(e,t,n,i){return Za(),t.flags|=256,Ve(e,t,n,i),t.child}var $p={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tm(e){return{baseLanes:e,cachePool:Rx()}}function em(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vn),e}function xS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Vt){if(s?sa(t):aa(),(e=ye)?(e=y1(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},n=Tx(e),n.return=t,t.child=n,$e=t,ye=null)):e=null,e===null)throw ha(t);return T0(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(aa(),s=t.mode,a=xh({mode:"hidden",children:a},s),i=Xa(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=tm(n),i.childLanes=em(e,r,n),t.memoizedState=$p,Ml(null,i)):(sa(t),h0(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return eA(e,t,a,r,i,l,o,n)}return s?(aa(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=vs(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=vs(l,s):(s=Xa(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Ml(null,i),i=t.child,s=e.child.memoizedState,s===null?s=tm(n):(a=s.cachePool,a!==null?(o=Be._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Rx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=em(e,r,n),t.memoizedState=$p,Ml(e.child,i)):(sa(t),n=e.child,e=n.sibling,n=vs(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function h0(e,t){return t=xh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xh(e,t){return e=On(22,e,null,t),e.lanes=0,e}function iu(e,t,n){return ja(t,e.child,null,n),e=h0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(sa(t),t.flags&=-257,iu(e,t,o)):t.memoizedState!==null?(aa(),t.child=e.child,t.flags|=128,null):(aa(),a=s.fallback,r=t.mode,s=xh({mode:"visible",children:s.children},r),a=Xa(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,ja(t,e.child,null,o),s=t.child,s.memoizedState=tm(o),s.childLanes=em(e,i,o),t.memoizedState=$p,Ml(null,s));if(sa(t),T0(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(Q(419)),s.stack="",s.digest=i,Ll({value:s,source:null,stack:null})),iu(e,t,o)}if(ze||Ja(e,t,o,!1),i=(o&e.childLanes)!==0,ze||i){if(fa.current!==null)return iu(e,t,o);if(i=pe,i!==null&&(s=Jy(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,ar(e,s),In(i,e,s),u0;return Am(a)||nh(),iu(e,t,o)}return Am(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,ye=_i(a.nextSibling),$e=t,Vt=!0,ea=null,gi=!1,e!==null&&Ax(t,e),t=h0(t,s.children),t.flags|=134221824,t)}function Yv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),vu(e.return,t,n)}function Zv(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Xu(n)===null&&(t=e),e=e.sibling}return t}function su(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function op(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function nm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=un.current;if(t.flags&128)return Ol(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ol(t,r),s==="backwards"&&e!==null?(op(e),Ve(e,t,i,n),op(e)):Ve(e,t,i,n),i=Vt?Dl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yv(e,n,t);else if(e.tag===19)Yv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=Zv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,op(t)),su(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Xu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}su(t,!0,n,null,a,i);break;case"together":su(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Zv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),su(t,!1,s,n,a,i)}return t.child}function Jv(e,t,n){var i=t.pendingProps;return Ks(t,t.type,i.value),Ve(e,t,i.children,n),t.child}function Ts(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ja(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=vs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function f0(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gu(e)))}function nA(e,t,n){switch(t.tag){case 3:Uu(t,t.stateNode.containerInfo),Ks(t,Be,e.memoizedState.cache),Za();break;case 27:case 5:Cp(t);break;case 4:Uu(t,t.stateNode.containerInfo);break;case 10:Ks(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,qp(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return sa(t),t.flags|=128,null;i=Ja(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?xS(e,t,n):(sa(t),e=Ts(e,t,n),e!==null?e.sibling:null)}sa(t);break;case 19:if(t.flags&128)return nm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ja(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return nm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ol(t,un.current),i)break;return null;case 22:return t.lanes=0,yS(e,t,n,t.pendingProps);case 24:Ks(t,Be,e.memoizedState.cache)}return Ts(e,t,n)}function SS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!f0(e,n)&&(t.flags&128)===0)return ze=!1,nA(e,t,n);ze=(e.flags&131072)!==0}else ze=!1,Vt&&(t.flags&1048576)!==0&&Ex(t,Dl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e=="function")Xm(e)?(i=tr(e,i),t.tag=1,t=Wv(null,t,e,i,n)):(t.tag=0,t=jp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Dm){t.tag=11,t=Hv(null,t,e,i,n);break t}else if(s===Lm){t.tag=14,t=Gv(null,t,e,i,n);break t}else if(s===Zi){t.tag=10,t.type=e,t=Jv(null,t,n);break t}}throw t=wp(e)||e,Error(Q(306,t,""))}}return t;case 0:return jp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=tr(i,t.pendingProps),Wv(e,t,i,s,n);case 3:t:{if(Uu(t,t.stateNode.containerInfo),e===null)throw Error(Q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,kp(e,t),xl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ks(t,Be,i),i!==a.cache&&Gp(t,[Be],n,!0),yl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=qv(e,t,i,n);break t}else if(i!==s){s=mi(Error(Q(424)),t),Ll(s),t=qv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ye=_i(e.firstChild),$e=t,Vt=!0,ea=null,gi=!0,n=Dx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Za(),i===s){t=Ts(e,t,n);break t}Ve(e,t,i,n)}t=t.child}return t;case 26:return Rr(e,t),e===null?(n=My(t.type,null,t.pendingProps,null))?t.memoizedState=n:Vt||(t.stateNode=u1(t.type,t.pendingProps,ta.current,t)):t.memoizedState=My(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Cp(t),e===null&&Vt&&(i=t.stateNode=x1(t.type,t.pendingProps,ta.current),$e=t,gi=!0,s=ye,ga(t.type)?(wm=s,ye=_i(i.firstChild)):ye=s),Ve(e,t,t.pendingProps.children,n),Rr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Vt&&((s=i=ye)&&(i=ZA(i,t.type,t.pendingProps,gi),i!==null?(t.stateNode=i,$e=t,ye=_i(i.firstChild),gi=!1,s=!0):s=!1),s||ha(t)),Cp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,bm(s,a)?i=null:r!==null&&bm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=$m(e,t,WE,null,null,n),co._currentValue=s),Rr(e,t),Ve(e,t,i,n),t.child;case 6:return e===null&&Vt&&((e=n=ye)&&(n=JA(n,t.pendingProps,gi),n!==null?(t.stateNode=n,$e=t,ye=null,e=!0):e=!1),e||ha(t)),null;case 13:return xS(e,t,n);case 4:return Uu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ja(t,null,i,n):Ve(e,t,i,n),t.child;case 11:return Hv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Rr(e,t),Ve(e,t,i,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:return Jv(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Ka(t),s=ln(s),i=i(s),t.flags|=1,Ve(e,t,i,n),t.child;case 14:return Gv(e,t,t.type,t.pendingProps,n);case 15:return vS(e,t,t.type,t.pendingProps,n);case 19:return nm(e,t,n);case 31:return tA(e,t,n);case 22:return yS(e,t,n,t.pendingProps);case 24:return Ka(t),i=ln(Be),e===null?(s=Ym(),s===null&&(s=pe,a=qm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Jm(t),Ks(t,Be,s)):((e.lanes&n)!==0&&(kp(e,t),xl(t,null,null,n),yl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ks(t,Be,i)):(i=a.cache,Ks(t,Be,i),i!==s.cache&&Gp(t,[Be],n,!0))),Ve(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Vt&&ph(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Rr(e,t),Ve(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(Q(156,t.tag))}function ms(e){e.flags|=4}function lp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Ey(t,i):Ey(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(KS())e.flags|=8192;else throw qa=Vu,Zm}else e.flags&=-16777217}function Kv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!T1(t))if(KS())e.flags|=8192;else throw qa=Vu,Zm}function au(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qy():536870912,e.lanes|=t,io|=t)}function al(e,t){if(!Vt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function iA(e,t,n){var i=t.pendingProps;switch(Wm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return ve(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ys(Be),$r(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?ms(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ip())),ve(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ms(t),a!==null?(ve(t),Kv(t,a)):(ve(t),lp(t,s,null,i,n))):a?a!==e.memoizedState?(ms(t),ve(t),Kv(t,a)):(ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ms(t),ve(t),lp(t,s,e,i,n)),null;case 27:if(Ou(t),n=ta.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ms(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return ve(t),t.subtreeFlags&=-33554433,null}e=ji.current,Ar(t)?bv(t,e):(e=x1(s,i,n),t.stateNode=e,ms(t))}return ve(t),t.subtreeFlags&=-33554433,null;case 5:if(Ou(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ms(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return ve(t),t.subtreeFlags&=-33554433,null}if(a=ji.current,Ar(t))bv(t,a);else{var r=zl(ta.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[on]=t,a[Bn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(hn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ms(t)}}return ve(t),t.subtreeFlags&=-33554433,lp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ms(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Q(166));if(e=ta.current,Ar(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=$e,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[on]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||l1(e.nodeValue,n)),e||ha(t,!0)}else e=zl(e).createTextNode(i),e[on]=t,t.stateNode=e}return ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ar(t),n!==null){if(e===null){if(!i)throw Error(Q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(557));e[on]=t}else Za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),e=!1}else n=ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Hn(t),t):(Hn(t),null);if((t.flags&128)!==0)throw Error(Q(558))}return ve(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ar(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[on]=t}else Za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),s=!1}else s=ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Hn(t),t):(Hn(t),null)}return Hn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),au(t,t.updateQueue),ve(t),null);case 4:return $r(),e===null&&S0(t.stateNode.containerInfo),t.flags|=67108864,ve(t),null;case 10:return ys(t.type),ve(t),null;case 19:if(Qm(t),i=t.memoizedState,i===null)return ve(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)al(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Xu(e),a!==null){for(t.flags|=128,al(i,!1),e=a.updateQueue,t.updateQueue=e,au(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bx(n,e),n=n.sibling;return Ol(t,un.current&1|2),Vt&&gs(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&kn()>th&&(t.flags|=128,s=!0,al(i,!1),t.lanes=4194304)}else{if(!s)if(e=Xu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,au(t,e),al(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Vt)return ve(t),null}else 2*kn()-i.renderingStartTime>th&&n!==536870912&&(t.flags|=128,s=!0,al(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=kn(),e.sibling=null,a=un.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Vt?Ol(t,a):(n=a,xe(fn,t),xe(un,n),vn===null&&(vn=t)),Vt&&gs(t,i.treeForkCount),e}return ve(t),null;case 22:case 23:return Hn(t),Km(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),n=t.updateQueue,n!==null&&au(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&cn(Wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ys(Be),ve(t),null;case 25:return null;case 30:return t.flags|=33554432,ve(t),null}throw Error(Q(156,t.tag))}function sA(e,t){switch(Wm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ys(Be),$r(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ou(t),null;case 31:if(t.memoizedState!==null){if(Hn(t),t.alternate===null)throw Error(Q(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Hn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Qm(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return $r(),null;case 10:return ys(t.type),null;case 22:case 23:return Hn(t),Km(),e!==null&&cn(Wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ys(Be),null;case 25:return null;default:return null}}function MS(e,t){switch(Wm(t),t.tag){case 3:ys(Be),$r();break;case 26:case 27:case 5:Ou(t);break;case 4:$r();break;case 31:t.memoizedState!==null&&Hn(t);break;case 13:Hn(t);break;case 19:Qm(t);break;case 10:ys(t.type);break;case 22:case 23:Hn(t),Km(),e!==null&&cn(Wa);break;case 24:ys(Be)}}function Ql(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ue(t,t.return,o)}}function da(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){ue(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){ue(t,t.return,h)}}function bS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ux(t,n)}catch(i){ue(e,e.return,i)}}}function TS(e,t,n){n.props=tr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ue(e,t,i)}}function qi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Ss(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=p1(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new Zn(e);Pn(e.child,!1,qA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){ue(e,t,o)}}function rn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ue(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ue(e,t,s)}else n.current=null}function Ju(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)v1(e.stateNode,t[n])}function Qv(e){for(var t=e.return;t!==null&&(p0(t)&&v1(e.stateNode,t.stateNode),!d0(t));)t=t.return}function bl(e){for(var t=e.return;t!==null&&(p0(t)&&YA(e.stateNode,t.stateNode),!d0(t));)t=t.return}function d0(e){return e.tag===5||e.tag===3||e.tag===27}function p0(e){return e&&e.tag===7&&e.stateNode!==null}function im(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ue(e,e.return,s)}}function cp(e,t,n){try{var i=e.stateNode;RA(i,e.type,n,t),i[Bn]=t}catch(s){ue(e,e.return,s)}}function ES(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ga(e.type)||e.tag===4}function up(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ES(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ji)),Ju(e,i),te=!0;else if(s!==4&&(s===27&&(Ju(e,i),i=null,ga(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(sm(e,t,n,i),e=e.sibling;e!==null;)sm(e,t,n,i),e=e.sibling}function Ku(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Ju(e,i),te=!0;else if(s!==4&&(s===27&&(Ju(e,i),i=null,ga(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ku(e,t,n,i),e=e.sibling;e!==null;)Ku(e,t,n,i),e=e.sibling}function AS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);hn(t,i,n),t[on]=e,t[Bn]=n}catch(a){ue(e,e.return,a)}}var Qu=!1,Gn=null;function jv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Qu=!0)}var Yi=null;function $v(){var e=Yi;return Yi=null,e}var Un=0;function go(e,t,n,i,s){return Un=0,wS(e.child,t,n,i,s)}function wS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Tm(r);i.push(o),o.view&&(a=!0)}else a||Tm(r).view&&(a=!0);Qu=!0,h1(r,Un===0?t:t+"_"+Un,n),Un++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||wS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ts(e,t){for(;e!==null;)e.tag===5?f1(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ts(e.child,t)),e=e.sibling}function bu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(bu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Q(544));var n=t.name;t=ws(t.default,t.share),t!=="none"&&(go(e,n,t,null,!1)||ts(e.child,!1))}e=e.sibling}}function am(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Ss(i,n),a=ws(i.default,n.paired?i.share:i.enter);a!=="none"?go(e,s,a,null,!1)?(bu(e),n.paired||t||so(e,i.onEnter)):ts(e.child,!1):bu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)am(e,t),e=e.sibling;else bu(e)}function rm(e){if(Gn!==null&&Gn.size!==0){var t=Gn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=ws(n.default,n.share);if(a!=="none"&&(go(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,so(e,n.onShare)):ts(e.child,!1)),t.delete(i),t.size===0)break}}}rm(e)}e=e.sibling}}}function om(e){if(e.tag===30){var t=e.memoizedProps,n=Ss(t,e.stateNode),i=Gn!==null?Gn.get(n):void 0,s=ws(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(go(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Gn.delete(n),so(e,t.onShare)):so(e,t.onExit):ts(e.child,!1)),Gn!==null&&rm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)om(e),e=e.sibling;else Gn!==null&&rm(e)}function RS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Ss(t,e.stateNode);t=ws(t.default,t.update),e.flags&=-5,t!=="none"&&go(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&RS(e);e=e.sibling}}function lm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ts(e.child,!1))}lm(e)}e=e.sibling}}function Tu(e){if(e.tag===30)e.stateNode.paired=null,ts(e.child,!1),lm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Tu(e),e=e.sibling;else lm(e)}function CS(e){for(e=e.child;e!==null;)e.tag===30?ts(e.child,!1):(e.subtreeFlags&33554432)!==0&&CS(e),e=e.sibling}function m0(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Un<a.length){var c=a[Un],h=Tm(l);(c.view||h.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(h.clip)d=!0;else{d=c.rect;var u=h.rect;d=d.y!==u.y||d.x!==u.x||d.height!==u.height||d.width!==u.width}d&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&h1(l,Un===0?n:n+"_"+Un,s),o&&(e.flags&4)!==0||(Yi===null&&(Yi=[]),Yi.push(l,Un===0?i:i+"_"+Un,t.memoizedProps)),Un++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:m0(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function NS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Ss(n,i),a=ws(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(OA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Un=0,s=m0(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||so(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&NS(e,t);e=e.sibling}}var Ke=!1,se=!1,ki=!1,hp=!1,ty=typeof WeakSet=="function"?WeakSet:Set,Qe=null,Xi=!1,dl=!1,ju=!1,cm=!1;function aA(e,t,n){if(e=e.containerInfo,Sm=uo,e=mx(e),Gm(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,d=0,u=e,p=null;e:for(;;){for(var v;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)p=u,u=v;for(;;){if(u===e)break e;if(p===i&&++h===a&&(l=o),p===r&&++d===s&&(c=o),(v=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Mm={focusedElem:e,selectionRange:i},uo=!1,n=(n&335544064)===n,Qe=t,t=n?9270:1024;Qe!==null;){if(e=Qe,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&om(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&jv(e),ru(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&om(i),ru(n);continue}else if(i!==null&&i.memoizedState!==null){n&&jv(e),ru(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,Qe=i):(n&&RS(e),ru(n))}}Gn=null}function ru(e){for(;Qe!==null;){var t=Qe,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=tr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){ue(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Em(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Em(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Ss(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=ws(s.default,s.update),s!=="none"&&go(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(Q(163))}if(i=t.sibling,i!==null){i.return=t.return,Qe=i;break}Qe=t.return}}function DS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Wi(e,n),i&4&&Ql(5,n);break;case 1:if(Wi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ue(n,n.return,r)}else{var s=tr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ue(n,n.return,r)}}i&64&&bS(n),i&512&&qi(n,n.return);break;case 3:if(Wi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ux(e,t)}catch(r){ue(n,n.return,r)}}break;case 27:t===null&&i&4&&AS(n);case 26:case 5:Wi(e,n),t===null&&i&4&&im(n),i&512&&qi(n,n.return);break;case 12:Wi(e,n);break;case 31:Wi(e,n),i&4&&IS(e,n);break;case 13:Wi(e,n),i&4&&PS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_A.bind(null,n),KA(e,n))));break;case 22:if(i=n.memoizedState!==null||Ke,!i){var a=t!==null&&t.memoizedState!==null||se;t=Ke,s=se,Ke=i,(se=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ti(e,n,i)):Wi(e,n),Ke=t,se=s}break;case 30:Wi(e,n),i&512&&qi(n,n.return);break;case 7:i&512&&qi(n,n.return);default:Wi(e,n)}}function um(e,t){for(e=e.child;e!==null;)LS(e,t),e=e.sibling}function LS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){ue(e,e.return,l)}hm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,te=!0}catch(l){ue(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?gy(o,!0):gy(e.stateNode,!1)}catch(l){ue(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&um(e,t);break;default:um(e,t)}}function hm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:LS(n,i);break t;case 22:n.memoizedState===null&&hm(n,i);break t;default:hm(n,i)}}e=e.sibling}}function US(e){var t=e.alternate;t!==null&&(e.alternate=null,US(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&lh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,Dn=!1;function bi(e,t,n){for(n=n.child;n!==null;)OS(e,t,n),n=n.sibling}function OS(e,t,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 26:se||rn(n,t),bi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!se&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:se||rn(n,t),bl(n);var i=Ae,s=Dn;ga(n.type)&&(Ae=n.stateNode,Dn=!1),bi(e,t,n),S1(n.stateNode,n.type,n.memoizedProps),Ae=i,Dn=s;break;case 5:se||rn(n,t),bl(n);case 6:if(n.tag===6&&bl(n),i=Ae,s=Dn,Ae=null,bi(e,t,n),Ae=i,Dn=s,Ae!==null)if(Dn)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode),te=!0}catch(a){ue(n,t,a)}else try{Ae.removeChild(n.stateNode),te=!0}catch(a){ue(n,t,a)}break;case 18:Ae!==null&&(Dn?(e=Ae,my(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ho(e)):my(Ae,n.stateNode));break;case 4:i=Ae,s=Dn,Ae=n.stateNode.containerInfo,Dn=!0,bi(e,t,n),Ae=i,Dn=s;break;case 0:case 11:case 14:case 15:da(2,n,t),se||da(4,n,t),bi(e,t,n);break;case 1:se||(rn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&TS(n,t,i)),bi(e,t,n);break;case 21:bi(e,t,n);break;case 22:se=(i=se)||n.memoizedState!==null,bi(e,t,n),se=i;break;case 30:rn(n,t),bi(e,t,n);break;case 7:se||rn(n,t),bi(e,t,n);break;default:bi(e,t,n)}}function IS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ho(e)}catch(n){ue(t,t.return,n)}}}function PS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ho(e)}catch(n){ue(t,t.return,n)}}function rA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ty),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ty),t;default:throw Error(Q(435,e.tag))}}function ou(e,t){var n=rA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=vA.bind(null,e,i);i.then(s,s)}})}function Tn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(ga(l.type)){Ae=l.stateNode,Dn=!1;break t}break;case 5:Ae=l.stateNode,Dn=!1;break t;case 3:case 4:Ae=l.stateNode.containerInfo,Dn=!0;break t}l=l.return}if(Ae===null)throw Error(Q(160));OS(r,o,a),Ae=null,Dn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)BS(t,e,n),t=t.sibling}var Ei=null;function BS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Tn(t,e,n),En(e),s&4&&(da(3,e,e.return),Ql(3,e),da(5,e,e.return));break;case 1:Tn(t,e,n),En(e),s&512&&(se||i===null||rn(i,i.return)),s&64&&Ke&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Ei,Tn(t,e,n),En(e),s&512&&(se||i===null||rn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(Ke)e.stateNode=u1(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Yl]||i[on]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),hn(i,t,n),i[on]=e,je(i),t=i;break t;case"link":if(a=Ty("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),hn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Ty("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),hn(i,t,n),s.head.appendChild(i);break;default:throw Error(Q(468,t))}i[on]=e,je(i),t=i}e.stateNode=t}else Ke||Rm(a,e.type,e.stateNode);else e.stateNode=by(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||se||t.parentNode.removeChild(t)):s.count--,n===null?Ke||Rm(a,e.type,e.stateNode):by(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&cp(e,e.memoizedProps,i.memoizedProps);break;case 27:Tn(t,e,n),En(e),s&512&&(se||i===null||rn(i,i.return)),i!==null&&s&4&&cp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=ki,ki=!1,Tn(t,e,n),ki=a,En(e),s&512&&(se||i===null||rn(i,i.return)),e.flags&32){t=e.stateNode;try{eo(t,""),te=!0}catch(h){ue(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,cp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(hp=!0);break;case 6:if(Tn(t,e,n),En(e),s&4){if(e.stateNode===null)throw Error(Q(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,te=!0}catch(h){ue(e,e.return,h)}}break;case 3:if(te=!1,Ru=null,a=Ei,Ei=Fl(t.containerInfo),Tn(t,e,n),Ei=a,En(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{ho(t.containerInfo)}catch(h){ue(e,e.return,h)}hp&&(hp=!1,zS(e)),te=!1;break;case 4:s=ki,ki=Ke,i=rv(),a=Ei,Ei=Fl(e.stateNode.containerInfo),Tn(t,e,n),En(e),Ei=a,te&&dl&&(ju=!0),te=i,ki=s;break;case 12:Tn(t,e,n),En(e);break;case 31:Tn(t,e,n),En(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ou(e,t)));break;case 13:Tn(t,e,n),En(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Sh=kn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ou(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=Ke,l=se,c=ki;Ke=o||a,ki=c||a,se=l||r,Tn(t,e,n),se=l,ki=c,Ke=o,En(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||Ke||se||(t=r||se,n=Ke,i=se,Ke=a||Ke,se=t,Xs(e,2),Ke=n,se=i),!a&&ki||um(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ou(e,n))));break;case 19:Tn(t,e,n),En(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ou(e,t)));break;case 30:s&512&&(se||i===null||rn(i,i.return)),s=rv(),a=dl,r=(n&335544064)===n,o=e.memoizedProps,dl=r&&ws(o.default,o.update)!=="none",Tn(t,e,n),En(e),r&&i!==null&&te&&(e.flags|=4),dl=a,te=s;break;case 21:break;case 7:s&512&&(se||i===null||rn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Tn(t,e,n),En(e)}}function En(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(ES(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(p0(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(d0(s))break;s=s.return}var r=i;if(n==null)throw Error(Q(160));switch(n.tag){case 27:var o=n.stateNode,l=up(e);Ku(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(eo(c,""),n.flags&=-33);var h=up(e);Ku(e,h,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,u=up(e);sm(e,u,d,r);break;default:throw Error(Q(161))}}catch(p){ue(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,uo=!0,t.reset(),uo=!1),e=e.sibling}}function wr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)FS(t,e),t=t.sibling;else NS(t,!1)}function FS(e,t){var n=e.alternate;if(n===null)am(e,!1);else switch(e.tag){case 3:if(cm=Xi=!1,$v(),wr(t,e),!Xi&&!ju){if(e=Yi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];f1(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),cm=!0}Yi=null;break;case 5:wr(t,e);break;case 4:i=Xi,Xi=!1,wr(t,e),Xi&&(ju=!0),Xi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?am(e,!1):wr(t,e));break;case 30:i=Xi,s=$v(),Xi=!1,wr(t,e),Xi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Ss(a,r),r=Ss(n.memoizedProps,r);var o=ws(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Un=0,t=m0(e,n,t,r,o,a,!0),Un!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(so(e,e.memoizedProps.onUpdate),Yi=s):s!==null&&(s.push.apply(s,Yi),Yi=s),Xi=(e.flags&32)!==0?!0:i;break;default:wr(t,e)}}function Wi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)DS(e,t.alternate,t),t=t.sibling}function Xs(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:da(4,n,n.return),Xs(n,i);break;case 1:rn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&TS(n,n.return,s),Xs(n,i);break;case 27:(i&2)!==0&&S1(n.stateNode,n.type,n.memoizedProps);case 5:rn(n,n.return),n.tag!==5&&n.tag!==27||bl(n),Xs(n,i);break;case 6:bl(n);break;case 26:rn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||se||s.parentNode.removeChild(s),Xs(n,i);break;case 22:n.memoizedState===null&&Xs(n,i);break;case 30:rn(n,n.return),Xs(n,i);break;case 7:rn(n,n.return);default:Xs(n,i)}e=e.sibling}}function Ti(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Ti(s,a,n),Ql(4,a);break;case 1:if(Ti(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){ue(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Lx(c[s],l)}catch(h){ue(i,i.return,h)}}o&&r&64&&bS(a),qi(a,a.return);break;case 27:(n&2)!==0&&AS(a);case 5:a.tag!==5&&a.tag!==27||Qv(a),Ti(s,a,n),o&&i===null&&r&4&&im(a),qi(a,a.return);break;case 6:Qv(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||Ke||Rm(Fl(l.ownerDocument),a.type,l),Ti(s,a,n),o&&i===null&&r&4&&im(a),qi(a,a.return);break;case 12:Ti(s,a,n);break;case 31:Ti(s,a,n),o&&r&4&&IS(s,a);break;case 13:Ti(s,a,n),o&&r&4&&PS(s,a);break;case 22:a.memoizedState===null&&Ti(s,a,n),qi(a,a.return);break;case 30:Ti(s,a,n),qi(a,a.return);break;case 7:qi(a,a.return);default:Ti(s,a,n)}t=t.sibling}}function g0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Jl(n))}function _0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function ui(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)HS(e,t,n,i),t=t.sibling;else s&&CS(t)}function HS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Tu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:ui(e,t,n,i),a&2048&&Ql(9,t);break;case 1:ui(e,t,n,i);break;case 3:ui(e,t,n,i),s&&cm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Jl(a)));break;case 12:if(a&2048){ui(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){ue(t,t.return,c)}}else ui(e,t,n,i);break;case 31:ui(e,t,n,i);break;case 13:ui(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Tu(o),r._visibility&2?ui(e,t,n,i):Tl(e,t)):(s&&o!==null&&o.memoizedState!==null&&Tu(t),r._visibility&2?ui(e,t,n,i):(r._visibility|=2,Cr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&g0(o,t);break;case 24:ui(e,t,n,i),a&2048&&_0(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ts(a.child,!0),ts(t.child,!0))),ui(e,t,n,i);break;default:ui(e,t,n,i)}}function Cr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Cr(a,r,o,l,s),Ql(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Cr(a,r,o,l,s):Tl(a,r):(h._visibility|=2,Cr(a,r,o,l,s)),s&&c&2048&&g0(r.alternate,r);break;case 24:Cr(a,r,o,l,s),s&&c&2048&&_0(r.alternate,r);break;default:Cr(a,r,o,l,s)}t=t.sibling}}function Tl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Tl(n,i),s&2048&&g0(i.alternate,i);break;case 24:Tl(n,i),s&2048&&_0(i.alternate,i);break;default:Tl(n,i)}t=t.sibling}}var Ha=8192;function Ba(e,t,n){if(e.subtreeFlags&Ha)for(e=e.child;e!==null;)GS(e,t,n),e=e.sibling}function GS(e,t,n){switch(e.tag){case 26:Ba(e,t,n),e.flags&Ha&&(e.memoizedState!==null?u3(n,Ei,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Ay(n,e)));break;case 5:Ba(e,t,n),e.flags&Ha&&(e=e.stateNode,(t&335544128)===t&&Ay(n,e));break;case 3:case 4:var i=Ei;Ei=Fl(e.stateNode.containerInfo),Ba(e,t,n),Ei=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ha,Ha=16777216,Ba(e,t,n),Ha=i):Ba(e,t,n));break;case 30:if((e.flags&Ha)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Gn===null&&(Gn=new Map),Gn.set(i,s)}Ba(e,t,n);break;default:Ba(e,t,n)}}function VS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,XS(i,e)}VS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kS(e),e=e.sibling}function kS(e){switch(e.tag){case 0:case 11:case 15:rl(e),e.flags&2048&&da(9,e,e.return);break;case 3:rl(e);break;case 12:rl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Eu(e)):rl(e);break;default:rl(e)}}function Eu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,XS(i,e)}VS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),Eu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Eu(t));break;default:Eu(t)}e=e.sibling}}function XS(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:da(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Jl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var s=i.sibling,a=i.return;if(US(i),i===n){Qe=null;break t}if(s!==null){s.return=a,Qe=s;break t}Qe=a}}}var oA={getCacheForType:function(e){var t=ln(Be),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ln(Be).controller.signal}},lA=typeof WeakMap=="function"?WeakMap:Map,ne=0,pe=null,Xt=null,Zt=0,le=0,zn=null,Qs=!1,_o=!1,v0=!1,Es=0,Le=0,pa=0,Ya=0,$u=0,Vn=0,io=0,El=null,Ln=null,fm=!1,Sh=0,WS=0,th=1/0,eh=null,ra=null,Ce=0,wi=null,er=null,$i=0,dm=0,pm=null,qS=null,Kr=null,Qr=null,jr=null,Al=0,Au=null;function qn(){return(ne&2)!==0&&Zt!==0?Zt&-Zt:Nt.T!==null?x0():Ky()}function YS(){if(Vn===0)if((Zt&536870912)===0||Vt){var e=Zc;Zc<<=1,(Zc&3932160)===0&&(Zc=262144),Vn=e}else Vn=536870912;return e=fn.current,e!==null&&(e.flags|=32),Vn}function so(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=p1(Ss(e.memoizedProps,n))),Qr===null&&(Qr=[]),Qr.push(t.bind(null,i))}}function In(e,t,n){(e===pe&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(ao(e,0),js(e,Zt,Vn,!1)),ql(e,n),((ne&2)===0||e!==pe)&&(e===pe&&((ne&2)===0&&(Ya|=n),Le===4&&js(e,Zt,Vn,!1)),ns(e))}function ZS(e,t,n){if((ne&6)!==0)throw Error(Q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Wl(e,t),s=i?hA(e,t):fp(e,t,!0),a=i;do{if(s===0){_o&&!i&&js(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!cA(n)){s=fp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=El;var l=o.current.memoizedState.isDehydrated;if(l&&(ao(o,r).flags|=256),r=fp(o,r,!1),r!==2&&r!==6){if(v0&&!l){o.errorRecoveryDisabledLanes|=a,Ya|=a,s=4;break t}a=Ln,Ln=s,a!==null&&(Ln===null?Ln=a:Ln.push.apply(Ln,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){ao(e,0),js(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Q(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:js(i,t,Vn,!Qs);break t;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((t&62914560)===t&&(s=Sh+300-kn(),10<s)){if(js(i,t,Vn,!Qs),oh(i,0,!0)!==0)break t;$i=t,i.timeoutHandle=M0(ey.bind(null,i,n,Ln,eh,fm,t,Vn,Ya,io,Qs,a,"Throttled",-0,0),s);break t}ey(i,n,Ln,eh,fm,t,Vn,Ya,io,Qs,a,null,-0,0)}}break}while(!0);ns(e)}function ey(e,t,n,i,s,a,r,o,l,c,h,d,u,p){e.timeoutHandle=-1;var v=t.subtreeFlags,T=(a&335544064)===a;if(d=null,(T||v&8192||(v&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},Gn=null,GS(t,a,d),T&&(v=d,T=e.containerInfo,T=(T.nodeType===9?T:T.ownerDocument).__reactViewTransition,T!=null&&(v.count++,v.waitingForViewTransition=!0,v=Hl.bind(v),T.finished.then(v,v))),v=(a&62914560)===a?Sh-kn():(a&4194048)===a?WS-kn():0,v=h3(d,v),v!==null)){$i=a,e.cancelPendingCommit=v(iy.bind(null,e,t,a,n,i,s,r,o,l,c,h,d,null,u,p)),js(e,a,r,!c);return}iy(e,t,a,n,i,s,r,o,l,c,h,d)}function cA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Yn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function js(e,t,n,i){t=Wy(e,t),t&=~$u,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Wn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Yy(e,n,t)}function Mh(){return(ne&6)===0?(jl(0,!1),!1):!0}function y0(){if(Xt!==null){if(le===0)var e=Xt.return;else e=Xt,_s=rr=null,n0(e),Yr=null,Ul=0,e=Xt;for(;e!==null;)MS(e.alternate,e),e=e.return;Xt=null}}function ao(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,DA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),$i=0,y0(),pe=e,Xt=n=vs(e.current,null),Zt=t,le=0,zn=null,Qs=!1,_o=Wl(e,t),v0=!1,io=Vn=$u=Ya=pa=Le=0,Ln=El=null,fm=!1,Es=Wy(e,t),fh(),n}function JS(e,t){zt=null,Nt.H=Yu,t===mo||t===mh?(t=Rv(),le=3):t===Zm?(t=Rv(),le=4):le=t===u0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zn=t,Xt===null&&(Le=1,Zu(e,mi(t,e.current)))}function KS(){var e=fn.current;return e===null?!0:(Zt&4194048)===Zt?vn===null:(Zt&62914560)===Zt||(Zt&536870912)!==0?e===vn:!1}function QS(){var e=Nt.H;return Nt.H=Yu,e===null?Yu:e}function jS(){var e=Nt.A;return Nt.A=oA,e}function nh(){Le=4,Qs||(Zt&4194048)!==Zt&&fn.current!==null||(_o=!0),(pa&134217727)===0&&(Ya&134217727)===0||pe===null||js(pe,Zt,Vn,!1)}function fp(e,t,n){var i=ne;ne|=2;var s=QS(),a=jS();(pe!==e||Zt!==t)&&(eh=null,ao(e,t)),t=!1;var r=Le;t:do try{if(le!==0&&Xt!==null){var o=Xt,l=zn;switch(le){case 8:y0(),r=6;break t;case 3:case 2:case 9:case 6:fn.current===null&&(t=!0);var c=le;if(le=0,zn=null,Vr(e,o,l,c),n&&_o){r=0;break t}break;default:c=le,le=0,zn=null,Vr(e,o,l,c)}}uA(),r=Le;break}catch(h){JS(e,h)}while(!0);return t&&e.shellSuspendCounter++,_s=rr=null,ne=i,Nt.H=s,Nt.A=a,Xt===null&&(pe=null,Zt=0,fh()),r}function uA(){for(;Xt!==null;)$S(Xt)}function hA(e,t){var n=ne;ne|=2;var i=QS(),s=jS();pe!==e||Zt!==t?(eh=null,th=kn()+500,ao(e,t)):_o=Wl(e,t);t:do try{if(le!==0&&Xt!==null){t=Xt;var a=zn;e:switch(le){case 1:le=0,zn=null,Vr(e,t,a,1);break;case 2:case 9:if(wv(a)){le=0,zn=null,ny(t);break}t=function(){le!==2&&le!==9||pe!==e||(le=7),ns(e)},a.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:wv(a)?(le=0,zn=null,ny(t)):(le=0,zn=null,Vr(e,t,a,7));break;case 5:var r=null;switch(Xt.tag){case 26:r=Xt.memoizedState;case 5:case 27:var o=Xt;if(r?T1(r):o.stateNode.complete){le=0,zn=null;var l=o.sibling;if(l!==null)Xt=l;else{var c=o.return;c!==null?(Xt=c,bh(c)):Xt=null}break e}}le=0,zn=null,Vr(e,t,a,5);break;case 6:le=0,zn=null,Vr(e,t,a,6);break;case 8:y0(),Le=6;break t;default:throw Error(Q(462))}}fA();break}catch(h){JS(e,h)}while(!0);return _s=rr=null,Nt.H=i,Nt.A=s,ne=n,Xt!==null?0:(pe=null,Zt=0,fh(),Le)}function fA(){for(;Xt!==null&&!CT();)$S(Xt)}function $S(e){var t=SS(e.alternate,e,Es);e.memoizedProps=e.pendingProps,t===null?bh(e):Xt=t}function ny(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Xv(n,t,t.pendingProps,t.type,void 0,Zt);break;case 11:t=Xv(n,t,t.pendingProps,t.type.render,t.ref,Zt);break;case 5:n0(t);var i=t;i===$e&&(Vt?(Hu(i),i.tag===5&&i.stateNode!=null&&(ye=i.stateNode)):(Hu(i),Vt=!0));default:MS(n,t),t=Xt=bx(t,Es),t=SS(n,t,Es)}e.memoizedProps=e.pendingProps,t===null?bh(e):Xt=t}function Vr(e,t,n,i){_s=rr=null,n0(t),Yr=null,Ul=0;var s=t.return;try{if($E(e,s,t,n,Zt)){Le=1,Zu(e,mi(n,e.current)),Xt=null;return}}catch(a){if(s!==null)throw Xt=s,a;Le=1,Zu(e,mi(n,e.current)),Xt=null;return}t.flags&32768?(Vt||i===1?e=!0:_o||(Zt&536870912)!==0?e=!1:(Qs=e=!0,(i===2||i===9||i===3||i===6)&&(i=fn.current,i!==null&&i.tag===13&&(i.flags|=16384))),t1(t,e)):bh(t)}function bh(e){var t=e;do{if((t.flags&32768)!==0){t1(t,Qs);return}e=t.return;var n=iA(t.alternate,t,Es);if(n!==null){Xt=n;return}if(t=t.sibling,t!==null){Xt=t;return}Xt=t=e}while(t!==null);Le===0&&(Le=5)}function t1(e,t){do{var n=sA(e.alternate,e);if(n!==null){n.flags&=32767,Xt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xt=e;return}Xt=e=n}while(e!==null);Le=6,Xt=null}function iy(e,t,n,i,s,a,r,o,l,c,h,d){e.cancelPendingCommit=null;do Th();while(Ce!==0);if((ne&6)!==0)throw Error(Q(327));if(t!==null){if(t===e.current)throw Error(Q(177));e===pe&&(Xt=pe=null,Zt=0),er=t,wi=e,$i=n,pm=s,qS=i,dA(e,t,n,r,o,l,d)}}function dA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(dm=o,o|=Vm,FT(e,n,o,i,s,a),Qr=null,(n&335544064)===n?(jr=GE(e),i=10262):(jr=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,yA(Iu,function(){return vm(),null})):(e.callbackNode=null,e.callbackPriority=0),Qu=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Nt.T,Nt.T=null,s=ie.p,ie.p=2,a=ne,ne|=4;try{aA(e,t,n)}finally{ne=a,ie.p=s,Nt.T=i}}Ce=1,Qu?Kr=BA(r,e.containerInfo,jr,mm,gm,mA,_m,vm,pA,null,null):(mm(),gm(),_m())}function pA(e){if(Ce!==0){var t=wi.onRecoverableError;t(e,{componentStack:null})}}function mA(){Ce===3&&(Ce=0,FS(er,wi),Ce=4)}function mm(){if(Ce===1){Ce=0;var e=wi,t=er,n=$i,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Nt.T,Nt.T=null;var s=ie.p;ie.p=2;var a=ne;ne|=4;try{dl=ju=!1,BS(t,e,n),n=Mm;var r=mx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&px(o.ownerDocument.documentElement,o)){if(l!==null&&Gm(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,u=d&&d.defaultView||window;if(u.getSelection){var p=u.getSelection(),v=o.textContent.length,T=Math.min(l.start,v),g=l.end===void 0?T:Math.min(l.end,v);!p.extend&&T>g&&(r=g,g=T,T=r);var f=yv(o,T),m=yv(o,g);if(f&&m&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var y=d.createRange();y.setStart(f.node,f.offset),p.removeAllRanges(),T>g?(p.addRange(y),p.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),p.addRange(y))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var x=d[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}uo=!!Sm,Mm=Sm=null}finally{ne=a,ie.p=s,Nt.T=i}}e.current=t,Ce=2}}function gm(){if(Ce===2){Ce=0;var e=wi,t=er,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Nt.T,Nt.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{DS(e,t.alternate,t)}finally{ne=s,ie.p=i,Nt.T=n}}Ce=3}}function _m(){if(Ce===4||Ce===3){Ce=0;var e=Kr;Kr=null,NT();var t=wi,n=er,i=$i,s=qS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Ce=5:(Ce=0,er=wi=null,e1(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(ra=null),Im(i),n=n.stateNode,Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Xl,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Nt.T,a=ie.p,ie.p=2,Nt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Nt.T=n,ie.p=a}}if(s=Qr,r=jr,jr=null,s!==null&&(Qr=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);($i&3)!==0&&Th(),ns(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Au?Al++:(Al=0,Au=t):(Al=0,Au=null),jl(0,!1)}}function e1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function Th(){return Kr!==null&&(Kr.skipTransition(),Kr=null),mm(),gm(),_m(),vm()}function vm(){if(Ce!==5)return!1;var e=wi,t=dm;dm=0;var n=Im($i),i=Nt.T,s=ie.p;try{ie.p=32>n?32:n,Nt.T=null,n=pm,pm=null;var a=wi,r=$i;if(Ce=0,er=wi=null,$i=0,(ne&6)!==0)throw Error(Q(331));var o=ne;if(ne|=4,kS(a.current),HS(a,a.current,r,n),ne=o,jl(0,!1),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Xl,a)}catch{}return!0}finally{ie.p=s,Nt.T=i,e1(e,t)}}function sy(e,t,n){t=mi(n,t),t=Qp(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(ql(e,2),ns(e))}function ue(e,t,n){if(e.tag===3)sy(e,e,n);else for(;t!==null;){if(t.tag===3){sy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ra===null||!ra.has(i))){e=mi(n,e),n=gS(2),i=ia(t,n,2),i!==null&&(_S(n,i,t,e),ql(i,2),ns(i));break}}t=t.return}}function dp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new lA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(v0=!0,s.add(n),e=gA.bind(null,e,t,n),t.then(e,e))}function gA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pe===e&&(Zt&n)===n&&((Le===4||Le===3&&(Zt&62914560)===Zt&&300>kn()-Sh)&&(ne&2)===0?ao(e,0):$u|=n,io===Zt&&(io=0)),ns(e)}function n1(e,t){t===0&&(t=qy()),e=ar(e,t),e!==null&&(ql(e,t),ns(e))}function _A(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),n1(e,n)}function vA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(t),n1(e,n)}function yA(e,t){return Um(e,t)}var ro=null,Nr=null,ym=!1,ih=!1,pp=!1,$s=0;function ns(e){e!==Nr&&e.next===null&&(Nr===null?ro=Nr=e:Nr=Nr.next=e),ih=!0,ym||(ym=!0,SA())}function jl(e,t){if(!pp&&ih){pp=!0;do for(var n=!1,i=ro;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Wn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ay(i,a))}else a=Zt,a=oh(i,i===pe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Wl(i,a)||(n=!0,ay(i,a));i=i.next}while(n);pp=!1}}function xA(){i1()}function i1(){ih=ym=!1;var e=0;$s!==0&&NA()&&(e=$s);for(var t=kn(),n=null,i=ro;i!==null;){var s=i.next,a=s1(i,t);a===0?(i.next=null,n===null?ro=s:n.next=s,s===null&&(Nr=n)):(n=i,(e!==0||(a&3)!==0)&&(ih=!0)),i=s}Ce!==0&&Ce!==5||jl(e,!1),$s!==0&&($s=0)}function s1(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Wn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=zT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=pe,n=Zt,n=oh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&qd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Wl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&qd(i),Im(n)){case 2:case 8:n=ky;break;case 32:n=Iu;break;case 268435456:n=Xy;break;default:n=Iu}return i=a1.bind(null,e),n=Um(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&qd(i),e.callbackPriority=2,e.callbackNode=null,2}function a1(e,t){if(Ce!==0&&Ce!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Th()&&e.callbackNode!==n)return null;var i=Zt;return i=oh(e,e===pe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(ZS(e,i,t),s1(e,kn()),e.callbackNode!=null&&e.callbackNode===n?a1.bind(null,e):null)}function ay(e,t){if(Th())return null;ZS(e,t,!0)}function SA(){LA(function(){(ne&6)!==0?Um(Vy,xA):i1()})}function x0(){if($s===0){var e=Qa;e===0&&(e=Yc,Yc<<=1,(Yc&261888)===0&&(Yc=256)),$s=e}return $s}function ry(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pu(e)}function MA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=ry((s[Bn]||null).action),r=i.submitter;r&&(t=(t=r[Bn]||null)?ry(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new ch("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if($s!==0){var l=new FormData(s,r);Jp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Jp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(lu=0;lu<zp.length;lu++)cu=zp[lu],oy=cu.toLowerCase(),ly=cu[0].toUpperCase()+cu.slice(1),Ri(oy,"on"+ly);var cu,oy,ly,lu;Ri(_x,"onAnimationEnd");Ri(vx,"onAnimationIteration");Ri(yx,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(UE,"onTransitionRun");Ri(OE,"onTransitionStart");Ri(IE,"onTransitionCancel");Ri(xx,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pl));function r1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Bu(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Bu(h)}s.currentTarget=null,a=l}}}}function kt(e,t){var n=t[nv];n===void 0&&(n=t[nv]=new Set);var i=e+"__bubble";n.has(i)||(o1(t,e,2,!1),n.add(i))}function mp(e,t,n){var i=0;t&&(i|=4),o1(n,e,i,t)}var uu="_reactListening"+Math.random().toString(36).slice(2);function S0(e){if(!e[uu]){e[uu]=!0,jy.forEach(function(n){n!=="selectionchange"&&(bA.has(n)||mp(n,!1,e),mp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uu]||(t[uu]=!0,mp("selectionchange",!1,t))}}function o1(e,t,n,i){switch(D1(t)){case 2:var s=m3;break;case 8:s=g3;break;default:s=R0}n=s.bind(null,t,n,e),s=void 0,!Op||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function gp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Ga(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}rx(function(){var c=a,h=Bm(n),d=[];t:{var u=Sx.get(e);if(u!==void 0){var p=ch,v=e;switch(e){case"keypress":if(gu(n)===0)break t;case"keydown":case"keyup":p=cE;break;case"focusin":v="focus",p=jd;break;case"focusout":v="blur",p=jd;break;case"beforeblur":case"afterblur":p=jd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=uv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=QT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pE;break;case _x:case vx:case yx:p=tE;break;case xx:p=gE;break;case"scroll":case"scrollend":p=JT;break;case"wheel":p=vE;break;case"copy":case"cut":case"paste":p=nE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=fv;break;case"submit":p=fE;break;case"toggle":case"beforetoggle":p=xE}var T=(t&4)!==0,g=!T&&(e==="scroll"||e==="scrollend"),f=T?u!==null?u+"Capture":null:u;T=[];for(var m=c,y;m!==null;){var x=m;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||f===null||(x=Rl(m,f),x!=null&&T.push(Bl(m,x,y))),g)break;m=m.return}0<T.length&&(u=new p(u,v,null,n,h),d.push({event:u,listeners:T}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",p&&n!==Up&&(v=n.relatedTarget||n.fromElement)&&(Ga(v)||v[fo]))break t;(u||p)&&(v=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,u?(p=n.relatedTarget||n.toElement,u=c,p=p?Ga(p):null,p!==null&&(g=kl(p),T=p.tag,p!==g||T!==5&&T!==27&&T!==6)&&(p=null)):(u=null,p=c),u!==p&&(T=uv,x="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(T=fv,x="onPointerLeave",f="onPointerEnter",m="pointer"),g=u==null?v:hl(u),y=p==null?v:hl(p),v=new T(x,m+"leave",u,n,h),v.target=g,v.relatedTarget=y,x=null,Ga(h)===c&&(T=new T(f,m+"enter",p,n,h),T.target=y,T.relatedTarget=g,x=T),g=x,T=u&&p?Sp(u,p,TA):null,u!==null&&cy(d,v,u,T,!1),p!==null&&g!==null&&cy(d,g,p,T,!0)))}t:{if(u=c?hl(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var E=gv;else if(mv(u))if(fx)E=NE;else{E=RE;var w=wE}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Pm(c.elementType)&&(E=gv):E=CE;if(E&&(E=E(e,c))){hx(d,E,n,h);break t}w&&w(e,u,c)}switch(w=c?hl(c):window,e){case"focusin":(mv(w)||w.contentEditable==="true")&&(Pr=w,Pp=c,gl=null);break;case"focusout":gl=Pp=Pr=null;break;case"mousedown":Bp=!0;break;case"contextmenu":case"mouseup":case"dragend":Bp=!1,xv(d,n,h);break;case"selectionchange":if(LE)break;case"keydown":case"keyup":xv(d,n,h)}var _;if(Hm)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else Ir?cx(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(lx&&n.locale!=="ko"&&(Ir||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ir&&(_=ox()):(Js=h,zm="value"in Js?Js.value:Js.textContent,Ir=!0)),w=sh(c,b),0<w.length&&(b=new hv(b,e,null,n,h),d.push({event:b,listeners:w}),_?b.data=_:(_=ux(n),_!==null&&(b.data=_)))),(_=ME?bE(e,n):TE(e,n))&&(b=sh(c,"onBeforeInput"),0<b.length&&(w=new hv("onBeforeInput","beforeinput",null,n,h),d.push({event:w,listeners:b}),w.data=_)),MA(d,e,c,n,h)}r1(d,t)})}function Bl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Rl(e,n),s!=null&&i.unshift(Bl(e,s,a)),s=Rl(e,t),s!=null&&i.push(Bl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function TA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Rl(n,a),c!=null&&r.unshift(Bl(n,c,l))):s||(c=Rl(n,a),c!=null&&r.push(Bl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var EA=/\r\n?/g,AA=/\u0000|\uFFFD/g;function uy(e){return(typeof e=="string"?e:""+e).replace(EA,`
`).replace(AA,"")}function l1(e,t){return t=uy(t),uy(e)===t}function ce(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||eo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&eo(e,""+i);else return;break;case"className":Kc(e,"class",i);break;case"tabIndex":Kc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Kc(e,n,i);break;case"style":ax(e,i,a);return;case"data":if(t!=="object"){Kc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=pu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ce(e,t,"name",s.name,s,null),ce(e,t,"formEncType",s.formEncType,s,null),ce(e,t,"formMethod",s.formMethod,s,null),ce(e,t,"formTarget",s.formTarget,s,null)):(ce(e,t,"encType",s.encType,s,null),ce(e,t,"method",s.method,s,null),ce(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=pu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ji);return;case"onScroll":i!=null&&kt("scroll",e);return;case"onScrollEnd":i!=null&&kt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));(a!=null?a.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=pu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":kt("beforetoggle",e),kt("toggle",e),du(e,"popover",i);break;case"xlinkActuate":ps(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ps(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ps(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ps(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ps(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ps(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ps(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ps(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ps(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":du(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=YT.get(n)||n,du(e,n,i);else return}te=!0}function xm(e,t,n,i,s,a){switch(n){case"style":ax(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));(a!=null?a.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")eo(e,i);else if(typeof i=="number"||typeof i=="bigint")eo(e,""+i);else return;break;case"onScroll":i!=null&&kt("scroll",e);return;case"onScrollEnd":i!=null&&kt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!$y.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Bn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}te=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):du(e,n,i)}return}te=!0}function hn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:ce(e,t,a,r,n,null)}}s&&ce(e,t,"srcSet",n.srcSet,n,null),i&&ce(e,t,"src",n.src,n,null);return;case"input":kt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Q(137,t));break;default:ce(e,t,i,h,n,null)}}nx(e,a,o,l,c,r,s,!1);return;case"select":kt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ce(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Xr(e,!!i,t,!1):n!=null&&Xr(e,!!i,n,!0);return;case"textarea":kt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:ce(e,t,r,o,n,null)}sx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ce(e,t,l,i,n,null));return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(i=0;i<Pl.length;i++)kt(Pl[i],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:ce(e,t,c,i,n,null)}return;default:if(Pm(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&xm(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ce(e,t,o,i,n,null))}var wA={};function RA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ce(e,t,p,null,i,d)}}for(var u in i){var p=i[u];if(d=n[u],i.hasOwnProperty(u)&&(p!=null||d!=null))switch(u){case"type":p!==d&&(te=!0),a=p;break;case"name":p!==d&&(te=!0),s=p;break;case"checked":p!==d&&(te=!0),c=p;break;case"defaultChecked":p!==d&&(te=!0),h=p;break;case"value":p!==d&&(te=!0),r=p;break;case"defaultValue":p!==d&&(te=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Q(137,t));break;default:p!==d&&ce(e,t,u,p,i,d)}}Lp(e,r,o,l,c,h,a,s);return;case"select":p=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||ce(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(te=!0),u=a;break;case"defaultValue":a!==l&&(te=!0),o=a;break;case"multiple":a!==l&&(te=!0),r=a;default:a!==l&&ce(e,t,s,a,i,l)}t=o,n=r,i=p,u!=null?Xr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Xr(e,!!n,t,!0):Xr(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ce(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(te=!0),u=s;break;case"defaultValue":s!==a&&(te=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Q(91));break;default:s!==a&&ce(e,t,r,s,i,a)}ix(e,u,p);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:ce(e,t,v,null,i,u));for(l in i)u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null)&&(l==="selected"?(u!==p&&(te=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):ce(e,t,l,u,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var T in n)u=n[T],n.hasOwnProperty(T)&&u!=null&&!i.hasOwnProperty(T)&&ce(e,t,T,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Q(137,t));break;default:ce(e,t,c,u,i,p)}return;default:if(Pm(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&xm(e,t,g,void 0,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u===void 0&&p===void 0||xm(e,t,h,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&ce(e,t,f,null,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u==null&&p==null||ce(e,t,d,u,i,p)}function hy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&hy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&hy(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Sm=null,Mm=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function fy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function u1(e,t,n,i){return n=zl(n).createElement(e),n[on]=i,n[Bn]=t,hn(n,e,t),je(n),n}function bm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _p=null;function NA(){var e=window.event;return e&&e.type==="popstate"?e===_p?!1:(_p=e,!0):(_p=null,!1)}var M0=typeof setTimeout=="function"?setTimeout:void 0,DA=typeof clearTimeout=="function"?clearTimeout:void 0,dy=typeof Promise=="function"?Promise:void 0,py=typeof requestAnimationFrame=="function"?requestAnimationFrame:M0,LA=typeof queueMicrotask=="function"?queueMicrotask:typeof dy!="undefined"?function(e){return dy.resolve(null).then(e).catch(UA)}:M0;function UA(e){setTimeout(function(){throw e})}function ga(e){return e==="head"}function my(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),ho(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")yp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,yp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Yl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&yp(e.ownerDocument.body);n=s}while(n);ho(t)}function gy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function h1(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function f1(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function d1(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Tm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return d1(t,n,e)}function OA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return d1(t,n,e)}function IA(e){return e.documentElement.clientHeight}function PA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function BA(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,p=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var T=[];if(v==="loaded"&&(IA(c),c.fonts.status==="loading"&&T.push(c.fonts.ready)),v=T.length,e!==null)for(var g=e.suspenseyImages,f=0,m=0;m<g.length;m++){var y=g[m];if(!y.complete){var x=y.getBoundingClientRect();if(0<x.bottom&&0<x.right&&x.top<u.innerHeight&&x.left<u.innerWidth){if(f+=E1(y),f>Cu){T.length=v;break}y=new Promise(PA.bind(y)),T.push(y)}}}if(0<T.length)return u=Promise.race([Promise.all(T),new Promise(function(E){return setTimeout(E,500)})]).then(s,s),(p?Promise.allSettled([p.finished,u]):u).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var d=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),p=0;p<u.length;p++){var v=u[p],T=v.effect,g=T.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){d.push(v),v=T.getKeyframes();for(var f=g=void 0,m=!0,y=0;y<v.length;y++){var x=v[y],E=x.width;if(g===void 0)g=E;else if(g!==E){m=!1;break}if(E=x.height,f===void 0)f=E;else if(f!==E){m=!1;break}delete x.width,delete x.height,x.transform==="none"&&delete x.transform}m&&g!==void 0&&f!==void 0&&(T.setKeyframes(v),m=getComputedStyle(T.target,T.pseudoElement),m.width!==g||m.height!==f)&&(m=v[0],m.width=g,m.height=f,m=v[v.length-1],m.width=g,m.height=f,T.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var u=0;u<d.length;u++)d[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function Va(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Va.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:me({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Va.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Va.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function p1(e){return{name:e,group:new Va("group",e),imagePair:new Va("image-pair",e),old:new Va("old",e),new:new Va("new",e)}}function Zn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Zn.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(m1(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=oo(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Pn(this._fragmentFiber.child,!1,zA,e,o,i)}this._eventListeners=a}};function zA(e,t,n,i){return ke(e).addEventListener(t,n,i),!1}Zn.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=m1(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=oo(s.optionsOrUseCapture),Pn(this._fragmentFiber.child,!1,FA,e,n,s),i.splice(t,1),a!==null&&a()}};function FA(e,t,n,i){return ke(e).removeEventListener(t,n,i),!1}function oo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function _y(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function m1(e,t,n,i){if(e.length===0)return-1;i=_y(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&_y(a.optionsOrUseCapture)===i)return s}return-1}Zn.prototype.dispatchEvent=function(e){var t=nr(this._fragmentFiber);if(t===null)return!0;t=ke(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,oo(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,oo(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};Zn.prototype.focus=function(e){Pn(this._fragmentFiber.child,!0,g1,e,void 0,void 0)};function g1(e,t){return e.tag===6?!1:(e=ke(e),QA(e,t))}Zn.prototype.focusLast=function(e){var t=[];Pn(this._fragmentFiber.child,!0,b0,t,void 0,void 0);for(var n=t.length-1;0<=n&&!g1(t[n],e);n--);};function b0(e,t){return t.push(e),!1}Zn.prototype.blur=function(){var e=nr(this._fragmentFiber);e!==null&&(e=ke(e),e=zl(e).activeElement,e!==null&&Pn(this._fragmentFiber.child,!1,HA,e,void 0,void 0))};function HA(e,t){return e.tag===6?!1:(e=ke(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Zn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Pn(this._fragmentFiber.child,!1,GA,e,void 0,void 0)};function GA(e,t){return e.tag===6||(e=ke(e),t.observe(e)),!1}Zn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Pn(this._fragmentFiber.child,!1,VA,e,void 0,void 0);for(var n=t=0;n<Ai.length;n++){var i=Ai[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ai[t++]=i}Ai.length=t}};function VA(e,t){return e.tag===6||(e=ke(e),t.unobserve(e)),!1}var Ai=[],vp=!1;function kA(e,t,n){Ai.push({fragmentInstance:e,observer:t,instance:n}),vp||(vp=!0,jA(function(){vp=!1;var i=Ai;Ai=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}Zn.prototype.getClientRects=function(){var e=[];return Pn(this._fragmentFiber.child,!1,XA,e,void 0,void 0),e};function XA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=ke(e),t.push.apply(t,e.getClientRects());return!1}Zn.prototype.getRootNode=function(e){var t=nr(this._fragmentFiber);return t===null?this:ke(t).getRootNode(e)};Zn.prototype.compareDocumentPosition=function(e){var t=nr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Pn(this._fragmentFiber.child,!1,b0,n,void 0,void 0);var i=ke(t);if(n.length===0){if(n=i,K_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=zy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=ke(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=ke(n[0]),s=ke(n[n.length-1]);var a=K_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||WA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function WA(e,t,n,i,s){var a=Ga(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=nr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Sp(n,a,Q_),t===null?t=!1:(Pn(t,!0,ST,a,n),a=Dr,Dr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Sp(i,a,Q_),t===null?t=!1:(Pn(t,!0,MT,a,i),a=Dr,xp=Dr=null,t=a!==null)),t):!1}function vy(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Zn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Q(566));var t=[];Pn(this._fragmentFiber.child,!1,b0,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=zy(this._fragmentFiber);if(i=n?i[1]||i[0]||nr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=ke(i),vy(e,n);return}if(i=ke(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=ke(s),vy(s,n)):ke(s).scrollIntoView(e),i+=n?-1:1}};function qA(e,t){return e=ke(e),_1(e,t),!1}function _1(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function v1(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,oo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Ai.length;o++){var l=Ai[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Ai[r++]=l)}Ai.length=r,a.observe(e)}),_1(e,t))}function YA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,oo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?kA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Em(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Em(n),lh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ZA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Yl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function JA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function y1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_i(e.nextSibling),e===null))return null;return e}function Am(e){return e.data==="$?"||e.data==="$~"}function T0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function KA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function _i(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var wm=null;function yy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return _i(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function xy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function QA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function jA(e){py(function(){py(function(t){return e(t)})})}function x1(e,t,n){switch(t=zl(n),e){case"html":if(e=t.documentElement,!e)throw Error(Q(452));return e;case"head":if(e=t.head,!e)throw Error(Q(453));return e;case"body":if(e=t.body,!e)throw Error(Q(454));return e;default:throw Error(Q(451))}}function S1(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&ce(e,t,i,null,wA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ji&&(e.onclick=null),lh(e)}function yp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);lh(e)}var vi=new Map,Sy=new Set;function Fl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Rs=ie.d;ie.d={f:$A,r:t3,D:e3,C:n3,L:i3,m:s3,X:r3,S:a3,M:o3};function $A(){var e=Rs.f(),t=Mh();return e||t}function t3(e){var t=po(e);t!==null&&t.tag===5&&t.type==="form"?aS(t):Rs.r(e)}var vo=typeof document=="undefined"?null:document;function M1(e,t,n){var i=vo;if(i&&typeof t=="string"&&t){var s=pi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Sy.has(s)||(Sy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),hn(t,"link",e),je(t),i.head.appendChild(t)))}}function e3(e){Rs.D(e),M1("dns-prefetch",e,null)}function n3(e,t){Rs.C(e,t),M1("preconnect",e,t)}function i3(e,t,n){Rs.L(e,t,n);var i=vo;if(i&&e&&t){var s='link[rel="preload"][as="'+pi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+pi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+pi(n.imageSizes)+'"]')):s+='[href="'+pi(e)+'"]';var a=s;switch(t){case"style":a=lo(e);break;case"script":a=yo(e)}if(!(vi.has(a)||(e=me({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),vi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector($l(a))||t==="script"&&i.querySelector(tc(a))))){var r=i.createElement("link");hn(r,"link",e),t==="style"&&(r[Pu]=!0,r.onload=r.onerror=function(){Qy(r)}),je(r),i.head.appendChild(r)}}}function s3(e,t){Rs.m(e,t);var n=vo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+pi(i)+'"][href="'+pi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=yo(e)}if(!vi.has(a)&&(e=me({rel:"modulepreload",href:e},t),vi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(tc(a)))return}i=n.createElement("link"),hn(i,"link",e),je(i),n.head.appendChild(i)}}}function a3(e,t,n){Rs.S(e,t,n);var i=vo;if(i&&e){var s=kr(i).hoistableStyles,a=lo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector($l(a)))o.loading=5;else{e=me({rel:"stylesheet",href:e,"data-precedence":t},n),(n=vi.get(a))&&E0(e,n);var l=r=i.createElement("link");je(l),hn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,wu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function r3(e,t){Rs.X(e,t);var n=vo;if(n&&e){var i=kr(n).hoistableScripts,s=yo(e),a=i.get(s);a||(a=n.querySelector(tc(s)),a||(e=me({src:e,async:!0},t),(t=vi.get(s))&&A0(e,t),a=n.createElement("script"),je(a),hn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function o3(e,t){Rs.M(e,t);var n=vo;if(n&&e){var i=kr(n).hoistableScripts,s=yo(e),a=i.get(s);a||(a=n.querySelector(tc(s)),a||(e=me({src:e,async:!0,type:"module"},t),(t=vi.get(s))&&A0(e,t),a=n.createElement("script"),je(a),hn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function My(e,t,n,i){var s=(s=ta.current)?Fl(s):null;if(!s)throw Error(Q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=lo(n.href),t=kr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=lo(n.href);var a=kr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector($l(e)))?a._p||(r.instance=a,r.state.loading=5):(a=vi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vi.set(e,a)),l3(s,e,a,r.state))),t&&i===null)throw Error(Q(528,""));return r}if(t&&i!==null)throw Error(Q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=yo(n),t=kr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,e))}}function lo(e){return'href="'+pi(e)+'"'}function $l(e){return'link[rel="stylesheet"]['+e+"]"}function b1(e){return me({},e,{"data-precedence":e.precedence,precedence:null})}function l3(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Pu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Pu]=!0,t.onload=t.onerror=Qy.bind(null,t),hn(t,"link",n),je(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function yo(e){return'[src="'+pi(e)+'"]'}function tc(e){return"script[async]"+e}function by(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+pi(n.href)+'"]');if(i)return t.instance=i,je(i),i;var s=me({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),je(i),hn(i,"style",s),wu(i,n.precedence,e),t.instance=i;case"stylesheet":s=lo(n.href);var a=e.querySelector($l(s));if(a)return t.state.loading|=4,t.instance=a,je(a),a;i=b1(n),(s=vi.get(s))&&E0(i,s),a=(e.ownerDocument||e).createElement("link"),je(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),hn(a,"link",i),t.state.loading|=4,wu(a,n.precedence,e),t.instance=a;case"script":return a=yo(n.src),(s=e.querySelector(tc(a)))?(t.instance=s,je(s),s):(i=n,(s=vi.get(a))&&(i=me({},n),A0(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),je(s),hn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,wu(i,n.precedence,e));return t.instance}function wu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function E0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function A0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ru=null;function Ty(e,t,n){if(Ru===null){var i=new Map,s=Ru=new Map;s.set(n,i)}else s=Ru,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Yl]||a[on]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Rm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function c3(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ey(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function T1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function E1(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Ay(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=E1(t),e.suspenseyImages.push(t)),e=f3.bind(e),t.decode().then(e,e))}function u3(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=lo(i.href),a=t.querySelector($l(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Hl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,je(a);return}a=t.ownerDocument||t,i=b1(i),(s=vi.get(s))&&E0(i,s),a=a.createElement("link"),je(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),hn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Hl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Cu=0;function h3(e,t){return e.stylesheets&&e.count===0&&Nu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Nu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Cu===0&&(Cu=62500*CA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Nu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Cu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function A1(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Nu(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Hl(){this.count--,A1(this)}function f3(){this.imgCount--,A1(this)}var ah=null;function Nu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ah=new Map,t.forEach(d3,e),ah=null,Hl.call(e))}function d3(e,t){if(!(t.state.loading&4)){var n=ah.get(e);if(n)var i=n.get(null);else{n=new Map,ah.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Hl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var co={$$typeof:Zi,Provider:null,Consumer:null,_currentValue:ka,_currentValue2:ka,_threadCount:0};function p3(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yd(0),this.hiddenUpdates=Yd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function w1(e,t,n,i,s,a,r,o,l,c,h,d){return e=new p3(e,t,n,r,l,c,h,d,o),t=1,a===!0&&(t|=24),a=On(3,null,null,t),e.current=a,a.stateNode=e,t=qm(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Jm(a),e}function R1(e){return e?(e=Fr,e):Fr}function C1(e,t,n,i,s,a){s=R1(s),i.context===null?i.context=s:i.pendingContext=s,i=na(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ia(e,i,t),n!==null&&(In(n,e,t),vl(n,e,t))}function wy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function w0(e,t){wy(e,t),(e=e.alternate)&&wy(e,t)}function N1(e){if(e.tag===13||e.tag===31){var t=ar(e,67108864);t!==null&&In(t,e,67108864),w0(e,67108864)}}function Ry(e){if(e.tag===13||e.tag===31){var t=qn();t=Om(t);var n=ar(e,t);n!==null&&In(n,e,t),w0(e,t)}}var uo=!0;function m3(e,t,n,i){var s=Nt.T;Nt.T=null;var a=ie.p;try{ie.p=2,R0(e,t,n,i)}finally{ie.p=a,Nt.T=s}}function g3(e,t,n,i){var s=Nt.T;Nt.T=null;var a=ie.p;try{ie.p=8,R0(e,t,n,i)}finally{ie.p=a,Nt.T=s}}function R0(e,t,n,i){if(uo){var s=Cm(i);if(s===null)gp(e,t,i,rh,n),Cy(e,i);else if(v3(s,e,t,n,i))i.stopPropagation();else if(Cy(e,i),t&4&&-1<_3.indexOf(e)){for(;s!==null;){var a=po(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=za(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Wn(r);o.entanglements[1]|=l,r&=~l}ns(a),(ne&6)===0&&(th=kn()+500,jl(0,!1))}}break;case 31:case 13:o=ar(a,2),o!==null&&In(o,a,2),Mh(),w0(a,2)}if(a=Cm(i),a===null&&gp(e,t,i,rh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else gp(e,t,i,null,n)}}function Cm(e){return e=Bm(e),C0(e)}var rh=null;function C0(e){if(rh=null,e=Ga(e),e!==null){var t=kl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Iy(t),e!==null)return e;e=null}else if(n===31){if(e=Py(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return rh=e,null}function D1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(DT()){case Vy:return 2;case ky:return 8;case Iu:case LT:return 32;case Xy:return 268435456;default:return 32}default:return 32}}var Nm=!1,oa=null,la=null,ca=null,Gl=new Map,Vl=new Map,Ys=[],_3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cy(e,t){switch(e){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":la=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":Gl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vl.delete(t.pointerId)}}function ol(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=po(t),t!==null&&N1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function v3(e,t,n,i,s){switch(t){case"focusin":return oa=ol(oa,e,t,n,i,s),!0;case"dragenter":return la=ol(la,e,t,n,i,s),!0;case"mouseover":return ca=ol(ca,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Gl.set(a,ol(Gl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Vl.set(a,ol(Vl.get(a)||null,e,t,n,i,s)),!0}return!1}function L1(e){var t=Ga(e.target);if(t!==null){var n=kl(t);if(n!==null){if(t=n.tag,t===13){if(t=Iy(n),t!==null){e.blockedOn=t,ev(e.priority,function(){Ry(n)});return}}else if(t===31){if(t=Py(n),t!==null){e.blockedOn=t,ev(e.priority,function(){Ry(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Du(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Up=i,n.target.dispatchEvent(i),Up=null}else return t=po(n),t!==null&&N1(t),e.blockedOn=n,!1;t.shift()}return!0}function Ny(e,t,n){Du(e)&&n.delete(t)}function y3(){Nm=!1,oa!==null&&Du(oa)&&(oa=null),la!==null&&Du(la)&&(la=null),ca!==null&&Du(ca)&&(ca=null),Gl.forEach(Ny),Vl.forEach(Ny)}function hu(e,t){e.blockedOn===t&&(e.blockedOn=null,Nm||(Nm=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,y3)))}var fu=null;function Dy(e){fu!==e&&(fu=e,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,function(){fu===e&&(fu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(C0(i||n)===null)continue;break}var a=po(n);a!==null&&(e.splice(t,3),t-=3,Jp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function ho(e){function t(l){return hu(l,e)}oa!==null&&hu(oa,e),la!==null&&hu(la,e),ca!==null&&hu(ca,e),Gl.forEach(t),Vl.forEach(t);for(var n=0;n<Ys.length;n++){var i=Ys[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ys.length&&(n=Ys[0],n.blockedOn===null);)L1(n),n.blockedOn===null&&Ys.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Bn]||null;if(typeof a=="function")r||Dy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Bn]||null)o=r.formAction;else if(C0(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Dy(n)}}}function U1(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function N0(e){this._internalRoot=e}Eh.prototype.render=N0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));var n=t.current,i=qn();C1(n,i,e,t,null,null)};Eh.prototype.unmount=N0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;C1(e.current,2,null,e,null,null),Mh(),t[fo]=null}};function Eh(e){this._internalRoot=e}Eh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ky();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ys.length&&t!==0&&t<Ys[n].priority;n++);Ys.splice(n,0,e),n===0&&L1(e)}};var Ly=Uy.version;if(Ly!=="19.3.1")throw Error(Q(527,Ly,"19.3.1"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=xT(t),e=e!==null?By(e):null,e=e===null?null:e.stateNode,e};var x3={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Nt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(ll=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ll.isDisabled&&ll.supportsFiber))try{Xl=ll.inject(x3),Xn=ll}catch{}var ll;Ah.createRoot=function(e,t){if(!Oy(e))throw Error(Q(299));var n=!1,i="",s=dS,a=pS,r=mS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=w1(e,1,!1,null,null,n,i,null,s,a,r,U1),e[fo]=t.current,S0(e),new N0(t)};Ah.hydrateRoot=function(e,t,n){if(!Oy(e))throw Error(Q(299));var i=!1,s="",a=dS,r=pS,o=mS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=w1(e,1,!0,t,n!=null?n:null,i,s,l,a,r,o,U1),t.context=R1(null),n=t.current,i=qn(),i=Om(i),s=na(i),s.callback=null,ia(n,s,i),n=i,t.current.lanes=n,ql(t,n),ns(t),e[fo]=t.current,S0(e),new Eh(t)};Ah.version="19.3.1"});var B1=Gi((sD,P1)=>{"use strict";function I1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I1)}catch(e){console.error(e)}}I1(),P1.exports=O1()});var Pb=Gi(Td=>{"use strict";var qN=Symbol.for("react.transitional.element"),YN=Symbol.for("react.fragment");function Ib(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:qN,type:e,key:i,ref:t!==void 0?t:null,props:n}}Td.Fragment=YN;Td.jsx=Ib;Td.jsxs=Ib});var Bc=Gi((KO,Bb)=>{"use strict";Bb.exports=Pb()});var s_=Ia(jo(),1),Fb=Ia(B1(),1);var si=Ia(jo(),1);var lM=0,ag=1,cM=2;var Mc=1,uM=2,Xo=3,Ca=0,Cn=1,ls=2,gr=0,Wo=1,rg=2,og=3,lg=4,Lf=5;var _r=100,hM=101,fM=102,dM=103,pM=104,mM=200,qo=201,gM=202,_M=203,cg=204,bc=205,vM=206,yM=207,xM=208,SM=209,MM=210,bM=211,TM=212,EM=213,AM=214,jh=0,$h=1,tf=2,Io=3,ef=4,nf=5,sf=6,af=7,ug=0,wM=1,RM=2,cs=0,hg=1,fg=2,dg=3,pg=4,mg=5,gg=6,_g=7;var vg=300,vr=301,Yo=302,Uf=303,Of=304,rf=1e3,ss=1001,of=1002,nn=1003,CM=1004;var Tc=1005;var dn=1006,If=1007;var Oi=1008;var ii=1009,yg=1010,xg=1011,Zo=1012,Pf=1013,Ii=1014,Pi=1015,Bi=1016,Bf=1017,zf=1018,yr=1020,Sg=35902,Mg=35899,bg=1021,Tg=1022,zi=1023,Is=1026,Bs=1027,Eg=1028,Ff=1029,Na=1030,Hf=1031;var Gf=1033,Ec=33776,Ac=33777,wc=33778,Rc=33779,Vf=35840,kf=35841,Xf=35842,Wf=35843,qf=36196,Yf=37492,Zf=37496,Jf=37488,Kf=37489,Cc=37490,Qf=37491,jf=37808,$f=37809,td=37810,ed=37811,nd=37812,id=37813,sd=37814,ad=37815,rd=37816,od=37817,ld=37818,cd=37819,ud=37820,hd=37821,fd=36492,dd=36494,pd=36495,md=36283,gd=36284,Nc=36285,_d=36286;var rc=2300,lf=2301,Jh=2302,j0=2303,$0=2400,tg=2401,eg=2402;var NM=3200;var Ag=0,DM=1,Fi="",Qn="srgb",fr="srgb-linear",oc="linear",ae="srgb";var Kh=7680;var LM=519,UM=512,OM=513,IM=514,wg=515,PM=516,BM=517,Rg=518,Cg=519,zM=35044;var Ng="300 es",xi=2e3,lc=2001;function S3(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function M3(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Po(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function FM(){let e=Po("canvas");return e.style.display="block",e}var z1={},Bo=null;function Dg(...e){let t="THREE."+e.shift();Bo?Bo("log",t,...e):console.log(t,...e)}function HM(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ct(...e){e=HM(e);let t="THREE."+e.shift();if(Bo)Bo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Dt(...e){e=HM(e);let t="THREE."+e.shift();if(Bo)Bo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ac(...e){let t=e.join(" ");t in z1||(z1[t]=!0,Ct(...e))}function GM(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var VM={[jh]:jh,[tf]:sf,[ef]:ef,[Io]:nf,[$h]:$h,[sf]:tf,[af]:af,[nf]:Io},rs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var D0=Math.PI/180,cf=180/Math.PI;function Dc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[e&255]+yn[e>>8&255]+yn[e>>16&255]+yn[e>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function Kt(e,t,n){return Math.max(t,Math.min(n,e))}function b3(e,t){return(e%t+t)%t}function L0(e,t,n){return(1-n)*e+n*t}function kM(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Lg(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function T3(e,t){if(t.constructor===Float32Array)return e;let n=Lg(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function E3(e,t){if(t.constructor===Float32Array)return e;let n=Lg(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}var Bg=class Bg{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bg.prototype.isVector2=!0;var Qt=Bg,os=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=a[r+0],p=a[r+1],v=a[r+2],T=a[r+3];if(d!==T||l!==u||c!==p||h!==v){let g=l*u+c*p+h*v+d*T;g<0&&(u=-u,p=-p,v=-v,T=-T,g=-g);let f=1-o;if(g<.9995){let m=Math.acos(g),y=Math.sin(m);f=Math.sin(f*m)/y,o=Math.sin(o*m)/y,l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+T*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+T*o;let m=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=m,c*=m,h*=m,d*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],u=a[r+1],p=a[r+2],v=a[r+3];return t[n]=o*v+h*d+l*p-c*u,t[n+1]=l*v+h*u+c*d-o*p,t[n+2]=c*v+h*p+o*u-l*d,t[n+3]=h*v-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),u=l(i/2),p=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"YXZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"ZXY":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"ZYX":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"YZX":this._x=u*h*d+c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d-u*p*v;break;case"XZY":this._x=u*h*d-c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d+u*p*v;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zg=class zg{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(F1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(F1.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this.z=Kt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this.z=Kt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return U0.copy(this).projectOnVector(t),this.sub(U0)}reflect(t){return this.sub(U0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zg.prototype.isVector3=!0;var F=zg,U0=new F,F1=new os,Fg=class Fg{constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],v=i[8],T=s[0],g=s[3],f=s[6],m=s[1],y=s[4],x=s[7],E=s[2],w=s[5],_=s[8];return a[0]=r*T+o*m+l*E,a[3]=r*g+o*y+l*w,a[6]=r*f+o*x+l*_,a[1]=c*T+h*m+d*E,a[4]=c*g+h*y+d*w,a[7]=c*f+h*x+d*_,a[2]=u*T+p*m+v*E,a[5]=u*g+p*y+v*w,a[8]=u*f+p*x+v*_,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*a,p=c*a-r*l,v=n*d+i*u+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/v;return t[0]=d*T,t[1]=(s*c-h*i)*T,t[2]=(o*i-s*r)*T,t[3]=u*T,t[4]=(h*n-s*l)*T,t[5]=(s*a-o*n)*T,t[6]=p*T,t[7]=(i*l-c*n)*T,t[8]=(r*n-i*a)*T,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return ac("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(O0.makeScale(t,n)),this}rotate(t){return ac("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(O0.makeRotation(-t)),this}translate(t,n){return ac("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(O0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Fg.prototype.isMatrix3=!0;var Lt=Fg,O0=new Lt,H1=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G1=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A3(){let e={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ae&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ae&&(s.r=Oo(s.r),s.g=Oo(s.g),s.b=Oo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?oc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[fr]:{primaries:t,whitePoint:i,transfer:oc,toXYZ:H1,fromXYZ:G1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:H1,fromXYZ:G1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),e}var Jt=A3();function Os(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Oo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var xo,uf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xo===void 0&&(xo=Po("canvas")),xo.width=t.width,xo.height=t.height;let s=xo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=xo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let n=Po("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Os(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Os(n[i]/255)*255):n[i]=Os(n[i]);return{data:n,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},w3=0,zo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:w3++}),this.uuid=Dc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement!="undefined"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame!="undefined"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width||0,n.height||0,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(I0(s[r].image)):a.push(I0(s[r]))}else a=I0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function I0(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap?uf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var R3=0,P0=new F,Rn=class e extends rs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ss,s=ss,a=dn,r=Oi,o=zi,l=ii,c=e.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R3++}),this.uuid=Dc(),this.name="",this.source=new zo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(P0).x}get height(){return this.source.getSize(P0).y}get depth(){return this.source.getSize(P0).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ct(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ct(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rf:t.x=t.x-Math.floor(t.x);break;case ss:t.x=t.x<0?0:1;break;case of:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rf:t.y=t.y-Math.floor(t.y);break;case ss:t.y=t.y<0?0:1;break;case of:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=vg;Rn.DEFAULT_ANISOTROPY=1;var Hg=class Hg{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],v=l[9],T=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-T)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+T)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,x=(p+1)/2,E=(f+1)/2,w=(h+u)/4,_=(d+T)/4,b=(v+g)/4;return y>x&&y>E?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=w/i,a=_/i):x>E?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=w/s,a=b/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=_/a,s=b/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-v)*(g-v)+(d-T)*(d-T)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(d-T)/m,this.z=(u-h)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this.z=Kt(this.z,t.z,n.z),this.w=Kt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this.z=Kt(this.z,t,n),this.w=Kt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hg.prototype.isVector4=!0;var Me=Hg,hf=class extends rs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Me(0,0,t,n),this.scissorTest=!1,this.viewport=new Me(0,0,t,n),this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=new Rn({width:t,height:n,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new zo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends hf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},cc=class extends Rn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ff=class extends Rn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Df=class Df{constructor(t,n,i,s,a,r,o,l,c,h,d,u,p,v,T,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,d,u,p,v,T,g)}set(t,n,i,s,a,r,o,l,c,h,d,u,p,v,T,g){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=v,f[11]=T,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Df().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/So.setFromMatrixColumn(t,0).length(),a=1/So.setFromMatrixColumn(t,1).length(),r=1/So.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let u=r*h,p=r*d,v=o*h,T=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=u-T*c,n[9]=-o*l,n[2]=T-u*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,v=c*h,T=c*d;n[0]=u+T*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-v,n[6]=T+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,v=c*h,T=c*d;n[0]=u-T*o,n[4]=-r*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*h,n[9]=T-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,p=r*d,v=o*h,T=o*d;n[0]=l*h,n[4]=v*c-p,n[8]=u*c+T,n[1]=l*d,n[5]=T*c+u,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,p=r*c,v=o*l,T=o*c;n[0]=l*h,n[4]=T-u*d,n[8]=v*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+v,n[10]=u-T*d}else if(t.order==="XZY"){let u=r*l,p=r*c,v=o*l,T=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+T,n[5]=r*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*h,n[10]=T*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(C3,t,N3)}lookAt(t,n,i){let s=this.elements;return Jn.subVectors(t,n),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),_a.crossVectors(i,Jn),_a.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),_a.crossVectors(i,Jn)),_a.normalize(),wh.crossVectors(Jn,_a),s[0]=_a.x,s[4]=wh.x,s[8]=Jn.x,s[1]=_a.y,s[5]=wh.y,s[9]=Jn.y,s[2]=_a.z,s[6]=wh.z,s[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],v=i[2],T=i[6],g=i[10],f=i[14],m=i[3],y=i[7],x=i[11],E=i[15],w=s[0],_=s[4],b=s[8],O=s[12],R=s[1],U=s[5],z=s[9],q=s[13],D=s[2],X=s[6],K=s[10],G=s[14],nt=s[3],k=s[7],$=s[11],tt=s[15];return a[0]=r*w+o*R+l*D+c*nt,a[4]=r*_+o*U+l*X+c*k,a[8]=r*b+o*z+l*K+c*$,a[12]=r*O+o*q+l*G+c*tt,a[1]=h*w+d*R+u*D+p*nt,a[5]=h*_+d*U+u*X+p*k,a[9]=h*b+d*z+u*K+p*$,a[13]=h*O+d*q+u*G+p*tt,a[2]=v*w+T*R+g*D+f*nt,a[6]=v*_+T*U+g*X+f*k,a[10]=v*b+T*z+g*K+f*$,a[14]=v*O+T*q+g*G+f*tt,a[3]=m*w+y*R+x*D+E*nt,a[7]=m*_+y*U+x*X+E*k,a[11]=m*b+y*z+x*K+E*$,a[15]=m*O+y*q+x*G+E*tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],v=t[3],T=t[7],g=t[11],f=t[15],m=l*p-c*u,y=o*p-c*d,x=o*u-l*d,E=r*p-c*h,w=r*u-l*h,_=r*d-o*h;return n*(T*m-g*y+f*x)-i*(v*m-g*E+f*w)+s*(v*y-T*E+f*_)-a*(v*x-T*w+g*_)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],v=t[12],T=t[13],g=t[14],f=t[15],m=n*o-i*r,y=n*l-s*r,x=n*c-a*r,E=i*l-s*o,w=i*c-a*o,_=s*c-a*l,b=h*T-d*v,O=h*g-u*v,R=h*f-p*v,U=d*g-u*T,z=d*f-p*T,q=u*f-p*g,D=m*q-y*z+x*U+E*R-w*O+_*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/D;return t[0]=(o*q-l*z+c*U)*X,t[1]=(s*z-i*q-a*U)*X,t[2]=(T*_-g*w+f*E)*X,t[3]=(u*w-d*_-p*E)*X,t[4]=(l*R-r*q-c*O)*X,t[5]=(n*q-s*R+a*O)*X,t[6]=(g*x-v*_-f*y)*X,t[7]=(h*_-u*x+p*y)*X,t[8]=(r*z-o*R+c*b)*X,t[9]=(i*R-n*z-a*b)*X,t[10]=(v*w-T*x+f*m)*X,t[11]=(d*x-h*w-p*m)*X,t[12]=(o*O-r*U-l*b)*X,t[13]=(n*U-i*O+s*b)*X,t[14]=(T*y-v*E-g*m)*X,t[15]=(h*E-d*y+u*m)*X,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,d=o+o,u=a*c,p=a*h,v=a*d,T=r*h,g=r*d,f=o*d,m=l*c,y=l*h,x=l*d,E=i.x,w=i.y,_=i.z;return s[0]=(1-(T+f))*E,s[1]=(p+x)*E,s[2]=(v-y)*E,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(u+f))*w,s[6]=(g+m)*w,s[7]=0,s[8]=(v+y)*_,s[9]=(g-m)*_,s[10]=(1-(u+T))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=So.set(s[0],s[1],s[2]).length(),o=So.set(s[4],s[5],s[6]).length(),l=So.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ci.copy(this);let c=1/r,h=1/o,d=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,n.setFromRotationMatrix(Ci),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=xi,l=!1){let c=this.elements,h=2*a/(n-t),d=2*a/(i-s),u=(n+t)/(n-t),p=(i+s)/(i-s),v,T;if(l)v=a/(r-a),T=r*a/(r-a);else if(o===xi)v=-(r+a)/(r-a),T=-2*r*a/(r-a);else if(o===lc)v=-r/(r-a),T=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=xi,l=!1){let c=this.elements,h=2/(n-t),d=2/(i-s),u=-(n+t)/(n-t),p=-(i+s)/(i-s),v,T;if(l)v=1/(r-a),T=r/(r-a);else if(o===xi)v=-2/(r-a),T=-(r+a)/(r-a);else if(o===lc)v=-1/(r-a),T=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Df.prototype.isMatrix4=!0;var Ne=Df,So=new F,Ci=new Ne,C3=new F(0,0,0),N3=new F(1,1,1),_a=new F,wh=new F,Jn=new F,V1=new Ne,k1=new os,ba=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return V1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(V1,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return k1.setFromEuler(this),this.setFromQuaternion(k1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ba.DEFAULT_ORDER="XYZ";var uc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},D3=0,X1=new F,Mo=new os,Cs=new Ne,Rh=new F,ec=new F,L3=new F,U3=new os,W1=new F(1,0,0),q1=new F(0,1,0),Y1=new F(0,0,1),Z1={type:"added"},O3={type:"removed"},bo={type:"childadded",child:null},B0={type:"childremoved",child:null},ti=class e extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D3++}),this.uuid=Dc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new F,n=new ba,i=new os,s=new F(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Lt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Mo.setFromAxisAngle(t,n),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(t,n){return Mo.setFromAxisAngle(t,n),this.quaternion.premultiply(Mo),this}rotateX(t){return this.rotateOnAxis(W1,t)}rotateY(t){return this.rotateOnAxis(q1,t)}rotateZ(t){return this.rotateOnAxis(Y1,t)}translateOnAxis(t,n){return X1.copy(t).applyQuaternion(this.quaternion),this.position.add(X1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(W1,t)}translateY(t){return this.translateOnAxis(q1,t)}translateZ(t){return this.translateOnAxis(Y1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Rh.copy(t):Rh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ec.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cs.lookAt(ec,Rh,this.up):Cs.lookAt(Rh,ec,this.up),this.quaternion.setFromRotationMatrix(Cs),s&&(Cs.extractRotation(s.matrixWorld),Mo.setFromRotationMatrix(Cs),this.quaternion.premultiply(Mo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Z1),bo.child=t,this.dispatchEvent(bo),bo.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(O3),B0.child=t,this.dispatchEvent(B0),B0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Z1),bo.child=t,this.dispatchEvent(bo),bo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ec,t,L3),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ec,U3,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ti.DEFAULT_UP=new F(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hr=class extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}},I3={type:"move"},Fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let T of t.hand.values()){let g=n.getJointPose(T,i),f=this._getHandJoint(c,T);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(I3)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new hr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},XM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},va={h:0,s:0,l:0},Ch={h:0,s:0,l:0};function z0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var jt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Jt.workingColorSpace){if(t=b3(t,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=z0(r,a,t+1/3),this.g=z0(r,a,t),this.b=z0(r,a,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,n=Qn){function i(a){a!==void 0&&parseFloat(a)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,n);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Qn){let i=XM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}copyLinearToSRGB(t){return this.r=Oo(t.r),this.g=Oo(t.g),this.b=Oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return Jt.workingToColorSpace(xn.copy(this),t),Math.round(Kt(xn.r*255,0,255))*65536+Math.round(Kt(xn.g*255,0,255))*256+Math.round(Kt(xn.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(xn.copy(this),n);let i=xn.r,s=xn.g,a=xn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(xn.copy(this),n),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=Qn){Jt.workingToColorSpace(xn.copy(this),t);let n=xn.r,i=xn.g,s=xn.b;return t!==Qn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(va),this.setHSL(va.h+t,va.s+n,va.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(va),t.getHSL(Ch);let i=L0(va.h,Ch.h,n),s=L0(va.s,Ch.s,n),a=L0(va.l,Ch.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new jt;jt.NAMES=XM;var hc=class extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ni=new F,Ns=new F,F0=new F,Ds=new F,To=new F,Eo=new F,J1=new F,H0=new F,G0=new F,V0=new F,k0=new Me,X0=new Me,W0=new Me,Ma=class e{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ni.subVectors(t,n),s.cross(Ni);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ni.subVectors(s,n),Ns.subVectors(i,n),F0.subVectors(t,n);let r=Ni.dot(Ni),o=Ni.dot(Ns),l=Ni.dot(F0),c=Ns.dot(Ns),h=Ns.dot(F0),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,v=(r*h-o*l)*u;return a.set(1-p-v,v,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ds)===null?!1:Ds.x>=0&&Ds.y>=0&&Ds.x+Ds.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ds)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ds.x),l.addScaledVector(r,Ds.y),l.addScaledVector(o,Ds.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return k0.setScalar(0),X0.setScalar(0),W0.setScalar(0),k0.fromBufferAttribute(t,n),X0.fromBufferAttribute(t,i),W0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(k0,a.x),r.addScaledVector(X0,a.y),r.addScaledVector(W0,a.z),r}static isFrontFacing(t,n,i,s){return Ni.subVectors(i,n),Ns.subVectors(t,n),Ni.cross(Ns).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),Ns.subVectors(this.a,this.b),Ni.cross(Ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;To.subVectors(s,i),Eo.subVectors(a,i),H0.subVectors(t,i);let l=To.dot(H0),c=Eo.dot(H0);if(l<=0&&c<=0)return n.copy(i);G0.subVectors(t,s);let h=To.dot(G0),d=Eo.dot(G0);if(h>=0&&d<=h)return n.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),n.copy(i).addScaledVector(To,r);V0.subVectors(t,a);let p=To.dot(V0),v=Eo.dot(V0);if(v>=0&&p<=v)return n.copy(a);let T=p*c-l*v;if(T<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Eo,o);let g=h*v-p*d;if(g<=0&&d-h>=0&&p-v>=0)return J1.subVectors(a,s),o=(d-h)/(d-h+(p-v)),n.copy(s).addScaledVector(J1,o);let f=1/(g+T+u);return r=T*f,o=u*f,n.copy(i).addScaledVector(To,r).addScaledVector(Eo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ta=class{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Di.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Di.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Di.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Di):Di.fromBufferAttribute(a,r),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nh.copy(i.boundingBox)),Nh.applyMatrix4(t.matrixWorld),this.union(Nh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nc),Dh.subVectors(this.max,nc),Ao.subVectors(t.a,nc),wo.subVectors(t.b,nc),Ro.subVectors(t.c,nc),ya.subVectors(wo,Ao),xa.subVectors(Ro,wo),or.subVectors(Ao,Ro);let n=[0,-ya.z,ya.y,0,-xa.z,xa.y,0,-or.z,or.y,ya.z,0,-ya.x,xa.z,0,-xa.x,or.z,0,-or.x,-ya.y,ya.x,0,-xa.y,xa.x,0,-or.y,or.x,0];return!q0(n,Ao,wo,Ro,Dh)||(n=[1,0,0,0,1,0,0,0,1],!q0(n,Ao,wo,Ro,Dh))?!1:(Lh.crossVectors(ya,xa),n=[Lh.x,Lh.y,Lh.z],q0(n,Ao,wo,Ro,Dh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ls),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ls=[new F,new F,new F,new F,new F,new F,new F,new F],Di=new F,Nh=new Ta,Ao=new F,wo=new F,Ro=new F,ya=new F,xa=new F,or=new F,nc=new F,Dh=new F,Lh=new F,lr=new F;function q0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){lr.fromArray(e,a);let o=s.x*Math.abs(lr.x)+s.y*Math.abs(lr.y)+s.z*Math.abs(lr.z),l=t.dot(lr),c=n.dot(lr),h=i.dot(lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fe=new F,Uh=new Qt,P3=0,as=class extends rs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:P3++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=zM,this.updateRanges=[],this.gpuType=Pi,this.version=0,this._normalizationScale=t!==void 0?Lg(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uh.fromBufferAttribute(this,n),Uh.applyMatrix3(t),this.setXY(n,Uh.x,Uh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyMatrix3(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyMatrix4(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyNormalMatrix(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.transformDirection(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,n,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let n=this._normalizationScale;return n!==void 0?Math.max(t/n,-1):T3(t,this.array)}_normalize(t){let n=this._normalizationScale;return n!==void 0?Math.round(t*n):E3(t,this.array)}};var fc=class extends as{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var dc=class extends as{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var en=class extends as{constructor(t,n,i){super(new Float32Array(t),n,i)}},B3=new Ta,ic=new F,Y0=new F,dr=class{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):B3.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ic.subVectors(t,this.center);let n=ic.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ic,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Y0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ic.copy(t.center).add(Y0)),this.expandByPoint(ic.copy(t.center).sub(Y0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},z3=0,yi=new Ne,Z0=new ti,Co=new F,Kn=new Ta,sc=new Ta,tn=new F,Ui=class e extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z3++}),this.uuid=Dc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(S3(t)?dc:fc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Lt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,n,i){return yi.makeTranslation(t,n,i),this.applyMatrix4(yi),this}scale(t,n,i){return yi.makeScale(t,n,i),this.applyMatrix4(yi),this}lookAt(t){return Z0.lookAt(t),Z0.updateMatrix(),this.applyMatrix4(Z0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new en(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ta);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Kn.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];sc.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Kn.min,sc.min),Kn.expandByPoint(tn),tn.addVectors(Kn.max,sc.max),Kn.expandByPoint(tn)):(Kn.expandByPoint(sc.min),Kn.expandByPoint(sc.max))}Kn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)tn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(tn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)tn.fromBufferAttribute(o,c),l&&(Co.fromBufferAttribute(t,c),tn.add(Co)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new as(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new F,l[O]=new F;let h=new F,d=new F,u=new F,p=new Qt,v=new Qt,T=new Qt,g=new F,f=new F;function m(O,R,U){c[O]=c[R]=c[U]=1,h.fromBufferAttribute(i,O),d.fromBufferAttribute(i,R),u.fromBufferAttribute(i,U),p.fromBufferAttribute(a,O),v.fromBufferAttribute(a,R),T.fromBufferAttribute(a,U),d.sub(h),u.sub(h),v.sub(p),T.sub(p);let z=1/(v.x*T.y-T.x*v.y);isFinite(z)&&(g.copy(d).multiplyScalar(T.y).addScaledVector(u,-v.y).multiplyScalar(z),f.copy(u).multiplyScalar(v.x).addScaledVector(d,-T.x).multiplyScalar(z),o[O].add(g),o[R].add(g),o[U].add(g),l[O].add(f),l[R].add(f),l[U].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let O=0,R=y.length;O<R;++O){let U=y[O],z=U.start,q=U.count;for(let D=z,X=z+q;D<X;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let x=new F,E=new F,w=new F,_=new F;function b(O){w.fromBufferAttribute(s,O),_.copy(w);let R=o[O];x.copy(R),x.sub(w.multiplyScalar(w.dot(R))).normalize(),E.crossVectors(_,R);let z=E.dot(l[O])<0?-1:1;r.setXYZW(O,x.x,x.y,x.z,z)}for(let O=0,R=i.count;O<R;++O)c[O]&&b(O);this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new as(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new F,a=new F,r=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,p=t.count;u<p;u+=3){let v=t.getX(u+0),T=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,T),r.fromBufferAttribute(n,g),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)tn.fromBufferAttribute(t,n),tn.normalize(),t.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,v=0;for(let T=0,g=l.length;T<g;T++){o.isInterleavedBufferAttribute?p=l[T]*o.data.stride+o.offset:p=l[T]*h;for(let f=0;f<h;f++)u[v++]=c[p++]}return new as(u,h,d)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var J0=new F,F3=new F,H3=new Lt,Li=class{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=J0.subVectors(i,n).cross(F3.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(J0),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||H3.getNormalMatrix(t),s=this.coplanarPoint(J0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},G3=0,Ea=class extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G3++}),this.uuid=Dc(),this.name="",this.type="Material",this.blending=Wo,this.side=Ca,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cg,this.blendDst=bc,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=LM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kh,this.stencilZFail=Kh,this.stencilZPass=Kh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Ct(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ct(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Li().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Us=new F,K0=new F,Oh=new F,Ih=new F,pc=class{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Us)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Us.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Us.copy(this.origin).addScaledVector(this.direction,n),Us.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){K0.copy(t).add(n).multiplyScalar(.5),Oh.copy(n).sub(t).normalize(),Ih.copy(this.origin).sub(K0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Oh),o=Ih.dot(this.direction),l=-Ih.dot(Oh),c=Ih.lengthSq(),h=Math.abs(1-r*r),d,u,p,v;if(h>0)if(d=r*l-o,u=r*o-l,v=a*h,d>=0)if(u>=-v)if(u<=v){let T=1/h;d*=T,u*=T,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(K0).addScaledVector(Oh,u),p}intersectSphere(t,n){if(t.radius<0)return null;Us.subVectors(t.center,this.origin);let i=Us.dot(this.direction),s=Us.dot(Us)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Us)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-r.x,u=t.y-r.y,p=t.z-r.z,v=n.x-r.x,T=n.y-r.y,g=n.z-r.z,f=i.x-r.x,m=i.y-r.y,y=i.z-r.z,x=Math.abs(l),E=Math.abs(c),w=Math.abs(h),_,b,O,R,U,z,q,D,X,K,G,nt;if(x>=E&&x>=w?(O=l,z=d,X=v,nt=f,l>=0?(_=c,b=h,R=u,U=p,q=T,D=g,K=m,G=y):(_=h,b=c,R=p,U=u,q=g,D=T,K=y,G=m)):E>=w?(O=c,z=u,X=T,nt=m,c>=0?(_=h,b=l,R=p,U=d,q=g,D=v,K=y,G=f):(_=l,b=h,R=d,U=p,q=v,D=g,K=f,G=y)):(O=h,z=p,X=g,nt=y,h>=0?(_=l,b=c,R=d,U=u,q=v,D=T,K=f,G=m):(_=c,b=l,R=u,U=d,q=T,D=v,K=m,G=f)),O===0)return null;let k=_/O,$=b/O,tt=1/O,Mt=R-k*z,It=U-$*z,Z=q-k*X,mt=D-$*X,yt=K-k*nt,At=G-$*nt,gt=yt*mt-At*Z,Bt=Mt*At-It*yt,Oe=Z*It-mt*Mt;if(s){if(gt<0||Bt<0||Oe<0)return null}else if((gt<0||Bt<0||Oe<0)&&(gt>0||Bt>0||Oe>0))return null;let Rt=gt+Bt+Oe;if(Rt===0)return null;let re=tt*(gt*z+Bt*X+Oe*nt);return(Rt>0?re<0:re>0)?null:this.at(re/Rt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},df=class extends Ea{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},K1=new Ne,cr=new pc,Ph=new dr,Q1=new F,Bh=new F,zh=new F,Fh=new F,Q0=new F,Hh=new F,j1=new F,Gh=new F,Si=class extends ti{constructor(t=new Ui,n=new df){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Hh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],d=a[l];h!==0&&(Q0.fromBufferAttribute(d,t),r?Hh.addScaledVector(Q0,h):Hh.addScaledVector(Q0.sub(n),h))}n.add(Hh)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ph.copy(i.boundingSphere),Ph.applyMatrix4(a),cr.copy(t.ray).recast(t.near),!(Ph.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Ph,Q1)===null||cr.origin.distanceToSquared(Q1)>(t.far-t.near)**2))&&(K1.copy(a).invert(),cr.copy(t.ray).applyMatrix4(K1),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,cr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,T=u.length;v<T;v++){let g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,E=y;x<E;x+=3){let w=o.getX(x),_=o.getX(x+1),b=o.getX(x+2);s=Vh(this,f,t,i,c,h,d,w,_,b),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,p.start),T=Math.min(o.count,p.start+p.count);for(let g=v,f=T;g<f;g+=3){let m=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);s=Vh(this,r,t,i,c,h,d,m,y,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,T=u.length;v<T;v++){let g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,E=y;x<E;x+=3){let w=x,_=x+1,b=x+2;s=Vh(this,f,t,i,c,h,d,w,_,b),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,p.start),T=Math.min(l.count,p.start+p.count);for(let g=v,f=T;g<f;g+=3){let m=g,y=g+1,x=g+2;s=Vh(this,r,t,i,c,h,d,m,y,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function V3(e,t,n,i,s,a,r,o){let l;if(t.side===Cn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ca,o),l===null)return null;Gh.copy(o),Gh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Gh);return c<n.near||c>n.far?null:{distance:c,point:Gh.clone(),object:e}}function Vh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Bh),e.getVertexPosition(l,zh),e.getVertexPosition(c,Fh);let h=V3(e,t,n,i,Bh,zh,Fh,j1);if(h){let d=new F;Ma.getBarycoord(j1,Bh,zh,Fh,d),s&&(h.uv=Ma.getInterpolatedAttribute(s,o,l,c,d,new Qt)),a&&(h.uv1=Ma.getInterpolatedAttribute(a,o,l,c,d,new Qt)),r&&(h.normal=Ma.getInterpolatedAttribute(r,o,l,c,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};Ma.getNormal(Bh,zh,Fh,u.normal),h.face=u,h.barycoord=d}return h}var pf=class extends Rn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=nn,h=nn,d,u){super(null,r,o,l,c,h,s,a,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=new dr,k3=new Qt(.5,.5),kh=new F,pr=class{constructor(t=new Li,n=new Li,i=new Li,s=new Li,a=new Li,r=new Li){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=xi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],u=a[6],p=a[7],v=a[8],T=a[9],g=a[10],f=a[11],m=a[12],y=a[13],x=a[14],E=a[15];if(s[0].setComponents(c-r,p-h,f-v,E-m).normalize(),s[1].setComponents(c+r,p+h,f+v,E+m).normalize(),s[2].setComponents(c+o,p+d,f+T,E+y).normalize(),s[3].setComponents(c-o,p-d,f-T,E-y).normalize(),i)s[4].setComponents(l,u,g,x).normalize(),s[5].setComponents(c-l,p-u,f-g,E-x).normalize();else if(s[4].setComponents(c-l,p-u,f-g,E-x).normalize(),n===xi)s[5].setComponents(c+l,p+u,f+g,E+x).normalize();else if(n===lc)s[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(t){ur.center.set(0,0,0);let n=k3.distanceTo(t.center);return ur.radius=.7071067811865476+n,ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(kh.x=s.normal.x>0?t.max.x:t.min.x,kh.y=s.normal.y>0?t.max.y:t.min.y,kh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$1=new Ne,mf=class e{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(t){let n=t.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let a=n[s];$1.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new pr),i[s].setFromProjectionMatrix($1,a.coordinateSystem,a.reversedDepth)}return this._count=n.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(t))return!0;return!1}containsPoint(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let n=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)n[s]===void 0&&(n[s]=new pr),n[s].copy(i[s]);return this._count=t._count,this}clone(){return new e().copy(this)}};var gf=class extends Ea{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tM=new Ne,ng=new pc,Xh=new dr,Wh=new F,mc=class extends ti{constructor(t=new Ui,n=new gf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xh.copy(i.boundingSphere),Xh.applyMatrix4(s),Xh.radius+=a,t.ray.intersectsSphere(Xh)===!1)return;tM.copy(s).invert(),ng.copy(t.ray).applyMatrix4(tM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let v=u,T=p;v<T;v++){let g=c.getX(v);Wh.fromBufferAttribute(d,g),eM(Wh,g,l,s,t,n,this)}}else{let u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let v=u,T=p;v<T;v++)Wh.fromBufferAttribute(d,v),eM(Wh,v,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function eM(e,t,n,i,s,a,r){let o=ng.distanceSqToPoint(e);if(o<n){let l=new F;ng.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var gc=class extends Rn{constructor(t=[],n=vr,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ps=class extends Rn{constructor(t,n,i=Ii,s,a,r,o=nn,l=nn,c,h=Is,d=1){if(h!==Is&&h!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:d};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},_c=class extends Ps{constructor(t,n=Ii,i=vr,s,a,r=nn,o=nn,l,c=Is){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,s,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},vc=class extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ho=class e extends Ui{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],d=[],u=0,p=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(d,2));function v(T,g,f,m,y,x,E,w,_,b,O){let R=x/_,U=E/b,z=x/2,q=E/2,D=w/2,X=_+1,K=b+1,G=0,nt=0,k=new F;for(let $=0;$<K;$++){let tt=$*U-q;for(let Mt=0;Mt<X;Mt++){let It=Mt*R-z;k[T]=It*m,k[g]=tt*y,k[f]=D,c.push(k.x,k.y,k.z),k[T]=0,k[g]=0,k[f]=w>0?1:-1,h.push(k.x,k.y,k.z),d.push(Mt/_),d.push(1-$/b),G+=1}}for(let $=0;$<b;$++)for(let tt=0;tt<_;tt++){let Mt=u+tt+X*$,It=u+tt+X*($+1),Z=u+(tt+1)+X*($+1),mt=u+(tt+1)+X*$;l.push(Mt,It,mt),l.push(It,Z,mt),nt+=6}o.addGroup(p,nt,O),p+=nt,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var mr=class e extends Ui{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=n/l,p=[],v=[],T=[],g=[];for(let f=0;f<h;f++){let m=f*u-r;for(let y=0;y<c;y++){let x=y*d-a;v.push(x,-m,0),T.push(0,0,1),g.push(y/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){let y=m+c*f,x=m+c*(f+1),E=m+1+c*(f+1),w=m+1+c*f;p.push(y,x,w),p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new en(v,3)),this.setAttribute("normal",new en(T,3)),this.setAttribute("uv",new en(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function xr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(nM(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(nM(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Sn(e){let t={};for(let n=0;n<e.length;n++){let i=xr(e[n]);for(let s in i)t[s]=i[s]}return t}function nM(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function X3(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ug(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var WM={clone:xr,merge:Sn},W3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends Ea{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W3,this.fragmentShader=q3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=X3(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ne().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},_f=class extends ei{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var vf=class extends Ea{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yf=class extends Ea{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function No(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function qh(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Aa=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xf=class extends Aa{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$0,endingEnd:$0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case tg:a=t,o=2*n-i;break;case eg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case tg:r=t,l=2*i-n;break;case eg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,v=(i-n)/(s-n),T=v*v,g=T*v,f=-u*g+2*u*T-u*v,m=(1+u)*g+(-1.5-2*u)*T+(-.5+u)*v+1,y=(-1-p)*g+(1.5+p)*T+.5*v,x=p*g-p*T;for(let E=0;E!==o;++E)a[E]=f*r[h+E]+m*r[c+E]+y*r[l+E]+x*r[d+E];return a}},Sf=class extends Aa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==o;++u)a[u]=r[c+u]*d+r[l+u]*h;return a}},Mf=class extends Aa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bf=class extends Aa{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let v=(i-n)/(s-n),T=1-v;for(let g=0;g!==o;++g)a[g]=r[c+g]*T+r[l+g]*v;return a}let u=o*2,p=t-1;for(let v=0;v!==o;++v){let T=r[c+v],g=r[l+v],f=p*u+v*2,m=d[f],y=d[f+1],x=t*u+v*2,E=h[x],w=h[x+1],_=Z3(i,n,m,E,s);a[v]=qM(_,T,y,w,g)}return a}};function qM(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function Y3(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function Z3(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=qM(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=Y3(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var ni=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=No(n,this.TimeBufferType),this.values=No(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:No(t.times,Array),values:No(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),qh(t.settings)&&(i.settings={inTangents:No(t.settings.inTangents,Array),outTangents:No(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Mf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new bf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case rc:n=this.InterpolantFactoryMethodDiscrete;break;case lf:n=this.InterpolantFactoryMethodLinear;break;case Jh:n=this.InterpolantFactoryMethodSmooth;break;case j0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ct("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rc;case this.InterpolantFactoryMethodLinear:return lf;case this.InterpolantFactoryMethodSmooth:return Jh;case this.InterpolantFactoryMethodBezier:return j0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t;qh(this.settings)&&(iM(this.settings.inTangents,t),iM(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;qh(this.settings)&&(sM(this.settings.inTangents,t),sM(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Dt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Dt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&M3(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Dt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Jh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,p=d+i;for(let v=0;v!==i;++v){let T=n[d+v];if(T!==n[u+v]||T!==n[p+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,u=r*i;for(let p=0;p!==i;++p)n[u+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,qh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function iM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function sM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=lf;var wa=class extends ni{constructor(t,n,i){super(t,n,i)}};wa.prototype.ValueTypeName="bool";wa.prototype.ValueBufferType=Array;wa.prototype.DefaultInterpolation=rc;wa.prototype.InterpolantFactoryMethodLinear=void 0;wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Tf=class extends ni{constructor(t,n,i,s){super(t,n,i,s)}};Tf.prototype.ValueTypeName="color";var Ef=class extends ni{constructor(t,n,i,s){super(t,n,i,s)}};Ef.prototype.ValueTypeName="number";var Af=class extends Aa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)os.slerpFlat(a,0,r,c-o,r,c,l);return a}},yc=class extends ni{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Af(this.times,this.values,this.getValueSize(),t)}};yc.prototype.ValueTypeName="quaternion";yc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends ni{constructor(t,n,i){super(t,n,i)}};Ra.prototype.ValueTypeName="string";Ra.prototype.ValueBufferType=Array;Ra.prototype.DefaultInterpolation=rc;Ra.prototype.InterpolantFactoryMethodLinear=void 0;Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var wf=class extends ni{constructor(t,n,i,s){super(t,n,i,s)}};wf.prototype.ValueTypeName="vector";var Qh={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(aM(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!aM(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function aM(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Rf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},YM=new Rf,Go=class{constructor(t){this.manager=t!==void 0?t:YM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Go.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=new WeakMap,Cf=class extends Go{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=Qh.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let d=Do.get(r);d===void 0&&(d=[],Do.set(r,d)),d.push({onLoad:n,onError:s})}return r}let o=Po("img");function l(){h(),n&&n(this);let d=Do.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onLoad&&p.onLoad(this)}Do.delete(this),a.manager.itemEnd(t)}function c(d){h(),s&&s(d),Qh.remove(`image:${t}`);let u=Do.get(this)||[];for(let p=0;p<u.length;p++){let v=u[p];v.onError&&v.onError(d)}Do.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qh.add(`image:${t}`,o),a.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var xc=class extends Go{constructor(t){super(t)}load(t,n,i,s){let a=new Rn,r=new Cf(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}};var Yh=new F,Zh=new os,is=new F,Sc=class extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yh,Zh,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yh,Zh,is.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Yh,Zh,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yh,Zh,is.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Sa=new F,rM=new Qt,oM=new Qt,jn=class extends Sc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=cf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(D0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cf*2*Math.atan(Math.tan(D0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Sa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sa.x,Sa.y).multiplyScalar(-t/Sa.z),Sa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sa.x,Sa.y).multiplyScalar(-t/Sa.z)}getViewSize(t,n){return this.getViewBounds(t,rM,oM),n.subVectors(oM,rM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(D0*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Vo=class extends Sc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Lo=-90,Uo=1,ko=class extends ti{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jn(Lo,Uo,t,n);s.layers=this.layers,this.add(s);let a=new jn(Lo,Uo,t,n);a.layers=this.layers,this.add(a);let r=new jn(Lo,Uo,t,n);r.layers=this.layers,this.add(r);let o=new jn(Lo,Uo,t,n);o.layers=this.layers,this.add(o);let l=new jn(Lo,Uo,t,n);l.layers=this.layers,this.add(l);let c=new jn(Lo,Uo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let T=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.mipmapsAutoUpdate=T,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Nf=class extends jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Og="\\[\\]\\.:\\/",J3=new RegExp("["+Og+"]","g"),Ig="[^"+Og+"]",K3="[^"+Og.replace("\\.","")+"]",Q3=/((?:WC+[\/:])*)/.source.replace("WC",Ig),j3=/(WCOD+)?/.source.replace("WCOD",K3),$3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ig),t2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ig),e2=new RegExp("^"+Q3+j3+$3+t2+"$"),n2=["material","materials","bones","map"],ig=class{constructor(t,n,i){let s=i||Se.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Se=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J3,"")}static parseTrackName(t){let n=e2.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);n2.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Dt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=ig;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aD=new Float32Array(1);var Gg=class Gg{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};Gg.prototype.isMatrix2=!0;var sg=Gg;function Pg(e,t,n,i){let s=i2(i);switch(n){case bg:return e*t;case Eg:return e*t/s.components*s.byteLength;case Ff:return e*t/s.components*s.byteLength;case Na:return e*t*2/s.components*s.byteLength;case Hf:return e*t*2/s.components*s.byteLength;case Tg:return e*t*3/s.components*s.byteLength;case zi:return e*t*4/s.components*s.byteLength;case Gf:return e*t*4/s.components*s.byteLength;case Ec:case Ac:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case wc:case Rc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case kf:case Wf:return Math.max(e,16)*Math.max(t,8)/4;case Vf:case Xf:return Math.max(e,8)*Math.max(t,8)/2;case qf:case Yf:case Jf:case Kf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Zf:case Cc:case Qf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case jf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $f:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case td:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ed:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case nd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case id:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case sd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ad:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case rd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case od:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ld:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case cd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ud:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case hd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case fd:case dd:case pd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case md:case gd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Nc:case _d:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function i2(e){switch(e){case ii:case yg:return{byteLength:1,components:1};case Zo:case xg:case Bi:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case Ii:case Pf:case Pi:return{byteLength:4,components:1};case Sg:case Mg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function mb(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function a2(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<d.length;p++){let v=d[u],T=d[p];T.start<=v.start+v.count+1?v.count=Math.max(v.count,T.start+T.count-v.start):(++u,d[u]=T)}d.length=u+1;for(let p=0,v=d.length;p<v;p++){let T=d[p];e.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var r2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,l2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,m2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,M2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,A2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,R2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,C2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,D2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I2="gl_FragColor = linearToOutputTexel( gl_FragColor );",P2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,z2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,F2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Y2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Q2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,j2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ew=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ow=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yw=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ww=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ow=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ww=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$w=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,aR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lR=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_R=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ER=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:r2,alphahash_pars_fragment:o2,alphamap_fragment:l2,alphamap_pars_fragment:c2,alphatest_fragment:u2,alphatest_pars_fragment:h2,aomap_fragment:f2,aomap_pars_fragment:d2,batching_pars_vertex:p2,batching_vertex:m2,begin_vertex:g2,beginnormal_vertex:_2,bsdfs:v2,iridescence_fragment:y2,bumpmap_pars_fragment:x2,clipping_planes_fragment:S2,clipping_planes_pars_fragment:M2,clipping_planes_pars_vertex:b2,clipping_planes_vertex:T2,color_fragment:E2,color_pars_fragment:A2,color_pars_vertex:w2,color_vertex:R2,common:C2,defaultnormal_vertex:N2,displacementmap_pars_vertex:D2,displacementmap_vertex:L2,emissivemap_fragment:U2,emissivemap_pars_fragment:O2,colorspace_fragment:I2,colorspace_pars_fragment:P2,envmap_fragment:B2,envmap_common_pars_fragment:z2,envmap_pars_fragment:F2,envmap_pars_vertex:H2,envmap_physical_pars_fragment:Q2,envmap_vertex:G2,fog_vertex:V2,fog_pars_vertex:k2,fog_fragment:X2,fog_pars_fragment:W2,gradientmap_pars_fragment:q2,lightmap_pars_fragment:Y2,lights_lambert_fragment:Z2,lights_lambert_pars_fragment:J2,lights_pars_begin:K2,lights_toon_fragment:j2,lights_toon_pars_fragment:$2,lights_phong_fragment:tw,lights_phong_pars_fragment:ew,lights_physical_fragment:nw,lights_physical_pars_fragment:iw,lights_fragment_begin:sw,lights_fragment_maps:aw,lights_fragment_end:rw,lightprobes_pars_fragment:ow,logdepthbuf_fragment:lw,logdepthbuf_pars_fragment:cw,logdepthbuf_pars_vertex:uw,logdepthbuf_vertex:hw,map_fragment:fw,map_pars_fragment:dw,map_particle_fragment:pw,map_particle_pars_fragment:mw,metalnessmap_fragment:gw,metalnessmap_pars_fragment:_w,morphinstance_vertex:vw,morphcolor_vertex:yw,morphnormal_vertex:xw,morphtarget_pars_vertex:Sw,morphtarget_vertex:Mw,normal_fragment_begin:bw,normal_fragment_maps:Tw,normal_pars_fragment:Ew,normal_pars_vertex:Aw,normal_vertex:ww,normalmap_pars_fragment:Rw,clearcoat_normal_fragment_begin:Cw,clearcoat_normal_fragment_maps:Nw,clearcoat_pars_fragment:Dw,iridescence_pars_fragment:Lw,opaque_fragment:Uw,packing:Ow,premultiplied_alpha_fragment:Iw,project_vertex:Pw,dithering_fragment:Bw,dithering_pars_fragment:zw,roughnessmap_fragment:Fw,roughnessmap_pars_fragment:Hw,shadowmap_pars_fragment:Gw,shadowmap_pars_vertex:Vw,shadowmap_vertex:kw,shadowmask_pars_fragment:Xw,skinbase_vertex:Ww,skinning_pars_vertex:qw,skinning_vertex:Yw,skinnormal_vertex:Zw,specularmap_fragment:Jw,specularmap_pars_fragment:Kw,tonemapping_fragment:Qw,tonemapping_pars_fragment:jw,transmission_fragment:$w,transmission_pars_fragment:tR,uv_pars_fragment:eR,uv_pars_vertex:nR,uv_vertex:iR,worldpos_vertex:sR,background_vert:aR,background_frag:rR,backgroundCube_vert:oR,backgroundCube_frag:lR,cube_vert:cR,cube_frag:uR,depth_vert:hR,depth_frag:fR,distance_vert:dR,distance_frag:pR,equirect_vert:mR,equirect_frag:gR,linedashed_vert:_R,linedashed_frag:vR,meshbasic_vert:yR,meshbasic_frag:xR,meshlambert_vert:SR,meshlambert_frag:MR,meshmatcap_vert:bR,meshmatcap_frag:TR,meshnormal_vert:ER,meshnormal_frag:AR,meshphong_vert:wR,meshphong_frag:RR,meshphysical_vert:CR,meshphysical_frag:NR,meshtoon_vert:DR,meshtoon_frag:LR,points_vert:UR,points_frag:OR,shadow_vert:IR,shadow_frag:PR,sprite_vert:BR,sprite_frag:zR},pt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},hs={basic:{uniforms:Sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Sn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Sn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Sn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Sn([pt.points,pt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Sn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Sn([pt.common,pt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Sn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Sn([pt.sprite,pt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:Sn([pt.common,pt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:Sn([pt.lights,pt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};hs.physical={uniforms:Sn([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var vd={r:0,b:0,g:0},FR=new Ne,gb=new Lt;gb.set(-1,0,0,0,1,0,0,0,1);function HR(e,t,n,i,s,a){let r=new jt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){let x=m.backgroundBlurriness>0;y=t.get(y,x)}return y}function v(m){let y=!1,x=p(m);x===null?g(r,o):x&&x.isColor&&(g(x,1),y=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function T(m,y){let x=p(y);x&&x.isCubeTexture?(c===void 0&&(c=new Si(new Ho(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:xr(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(FR.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gb),c.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ae,(h!==x||d!==x.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Si(new mr(2,2),new ei({name:"BackgroundMaterial",uniforms:xr(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:Ca,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,y){m.getRGB(vd,Ug(e)),n.buffers.color.setClear(vd.r,vd.g,vd.b,y,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,y=1){r.set(m),o=y,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:T,dispose:f}}function GR(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(U,z,q,D,X){let K=!1,G=d(U,D,q,z);a!==G&&(a=G,c(a.object)),K=p(U,D,q,X),K&&v(U,D,q,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,x(U,z,q,D),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function h(U){return e.deleteVertexArray(U)}function d(U,z,q,D){let X=D.wireframe===!0,K=i[z.id];K===void 0&&(K={},i[z.id]=K);let G=U.isInstancedMesh===!0?U.id:0,nt=K[G];nt===void 0&&(nt={},K[G]=nt);let k=nt[q.id];k===void 0&&(k={},nt[q.id]=k);let $=k[X];return $===void 0&&($=u(l()),k[X]=$),$}function u(U){let z=[],q=[],D=[];for(let X=0;X<n;X++)z[X]=0,q[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:D,object:U,attributes:{},index:null}}function p(U,z,q,D){let X=a.attributes,K=z.attributes,G=0,nt=q.getAttributes();for(let k in nt)if(nt[k].location>=0){let tt=X[k],Mt=K[k];if(Mt===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(Mt=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(Mt=U.instanceColor)),tt===void 0||tt.attribute!==Mt||Mt&&tt.data!==Mt.data)return!0;G++}return a.attributesNum!==G||a.index!==D}function v(U,z,q,D){let X={},K=z.attributes,G=0,nt=q.getAttributes();for(let k in nt)if(nt[k].location>=0){let tt=K[k];tt===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor));let Mt={};Mt.attribute=tt,tt&&tt.data&&(Mt.data=tt.data),X[k]=Mt,G++}a.attributes=X,a.attributesNum=G,a.index=D}function T(){let U=a.newAttributes;for(let z=0,q=U.length;z<q;z++)U[z]=0}function g(U){f(U,0)}function f(U,z){let q=a.newAttributes,D=a.enabledAttributes,X=a.attributeDivisors;q[U]=1,D[U]===0&&(e.enableVertexAttribArray(U),D[U]=1),X[U]!==z&&(e.vertexAttribDivisor(U,z),X[U]=z)}function m(){let U=a.newAttributes,z=a.enabledAttributes;for(let q=0,D=z.length;q<D;q++)z[q]!==U[q]&&(e.disableVertexAttribArray(q),z[q]=0)}function y(U,z,q,D,X,K,G){G===!0?e.vertexAttribIPointer(U,z,q,X,K):e.vertexAttribPointer(U,z,q,D,X,K)}function x(U,z,q,D){T();let X=D.attributes,K=q.getAttributes(),G=z.defaultAttributeValues;for(let nt in K){let k=K[nt];if(k.location>=0){let $=X[nt];if($===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),$!==void 0){let tt=$.normalized,Mt=$.itemSize,It=t.get($);if(It===void 0)continue;let Z=It.buffer,mt=It.type,yt=It.bytesPerElement,At=mt===e.INT||mt===e.UNSIGNED_INT||$.gpuType===Pf;if($.isInterleavedBufferAttribute){let gt=$.data,Bt=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Oe=$.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let Rt=0;Rt<k.locationSize;Rt++)f(k.location+Rt,gt.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Rt=0;Rt<k.locationSize;Rt++)g(k.location+Rt);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let Rt=0;Rt<k.locationSize;Rt++)y(k.location+Rt,Mt/k.locationSize,mt,tt,Bt*yt,(Oe+Mt/k.locationSize*Rt)*yt,At)}else{if($.isInstancedBufferAttribute){for(let gt=0;gt<k.locationSize;gt++)f(k.location+gt,$.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let gt=0;gt<k.locationSize;gt++)g(k.location+gt);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let gt=0;gt<k.locationSize;gt++)y(k.location+gt,Mt/k.locationSize,mt,tt,Mt*yt,Mt/k.locationSize*gt*yt,At)}}else if(G!==void 0){let tt=G[nt];if(tt!==void 0)switch(tt.length){case 2:e.vertexAttrib2fv(k.location,tt);break;case 3:e.vertexAttrib3fv(k.location,tt);break;case 4:e.vertexAttrib4fv(k.location,tt);break;default:e.vertexAttrib1fv(k.location,tt)}}}}m()}function E(){O();for(let U in i){let z=i[U];for(let q in z){let D=z[q];for(let X in D){let K=D[X];for(let G in K)h(K[G].object),delete K[G];delete D[X]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;let z=i[U.id];for(let q in z){let D=z[q];for(let X in D){let K=D[X];for(let G in K)h(K[G].object),delete K[G];delete D[X]}}delete i[U.id]}function _(U){for(let z in i){let q=i[z];for(let D in q){let X=q[D];if(X[U.id]===void 0)continue;let K=X[U.id];for(let G in K)h(K[G].object),delete K[G];delete X[U.id]}}}function b(U){for(let z in i){let q=i[z],D=U.isInstancedMesh===!0?U.id:0,X=q[D];if(X!==void 0){for(let K in X){let G=X[K];for(let nt in G)h(G[nt].object),delete G[nt];delete X[K]}delete q[D],Object.keys(q).length===0&&delete i[z]}}}function O(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:T,enableAttribute:g,disableUnusedAttributes:m}}function VR(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function kR(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(_){return!(_!==zi&&i.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==ii&&_!==Pi&&!b&&i.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ct("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&Ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:T,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,maxSamples:E,samples:w}}function XR(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Li,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){let v=d.clippingPlanes,T=d.clipIntersection,g=d.clipShadows,f=e.get(d);if(!s||v===null||v.length===0||a&&!g)a?h(null):c();else{let m=a?0:i,y=m*4,x=f.clippingState||null;l.value=x,x=h(v,u,y,p);for(let E=0;E!==y;++E)x[E]=n[E];f.clippingState=x,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,v){let T=d!==null?d.length:0,g=null;if(T!==0){if(g=l.value,v!==!0||g===null){let f=p+T*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,x=p;y!==T;++y,x+=4)r.copy(d[y]).applyMatrix4(m,o),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,g}}var Oc=class extends $n{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new gc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ho(5,5,5),a=new ei({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:gr});a.uniforms.tEquirect.value=n;let r=new Si(s,a),o=n.minFilter;return n.minFilter===Oi&&(n.minFilter=dn),new ko(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},ZM=256,WR=3,qR=20,_b=256,vb=16,YR=3,ZR=new F,JR=new jt,xd=class e{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ko(1,10,null),this._boxMesh=new Si(new Ho(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=ZR}=a,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,v=l.autoClearStencil,T=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,T===null&&(t.background=l.getClearColor(JR));let g=new ko(i,s,h);return g.position.copy(o),g.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=v,t.background=T,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=QM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=KM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(ZM,kM(t))}_fromTexture(t,n){t.mapping===vr||t.mapping===Yo?this._setSize(t.image.length===0?ZM:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,n=JM(t,!1,!1),i=Math.log2(t)-WR;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:t>>s,height:t>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=JM(n,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){let s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=n;let r=t.width>>n;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;t.mapping===vr||t.mapping===Yo?(this._cubemapMaterial===null&&(this._cubemapMaterial=QM()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=KM()),n=this._equirectMaterial),n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=KR(),this._integrationMaterial=QR());let n=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/vb);for(let r=0;r<=i;r++){let o=e.lodToRoughness(r,i);if(r>i-YR)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(_b*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,n){this._blurMaterial===null&&(this._blurMaterial=jR());let i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}};function JM(e,t,n){return new Oc(e,{minFilter:Oi,generateMipmaps:t,type:Bi,colorSpace:fr,depthBuffer:n})}function Ic(e,t,n){return new ei({name:e,uniforms:t,vertexShader:Gt.cube_vert,fragmentShader:n,side:Cn,blending:gr,depthTest:!1,depthWrite:!1})}function KR(){return Ic("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_b}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function QR(){return Ic("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vb}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function jR(){return Ic("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qR}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function KM(){return Ic("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function QM(){return Ic("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $R(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?r(u):a(u)}function a(u){if(u&&u.isTexture){let p=u.mapping;if(p===Uf||p===Of)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let T=new Oc(v.height);return T.fromEquirectangularTexture(e,u),t.set(u,T),u.addEventListener("dispose",c),o(T.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,v=p===Uf||p===Of,T=p===vr||p===Yo;if(v||T){let g=n.get(u),f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new xd(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return v&&m&&m.height>0||T&&m&&l(m)?(i===null&&(i=new xd(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,p){return p===Uf?u.mapping=vr:p===Of&&(u.mapping=Yo),u}function l(u){let p=0,v=6;for(let T=0;T<v;T++)u[T]!==void 0&&p++;return p===v}function c(u){let p=u.target;p.removeEventListener("dispose",c);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function tC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&ac("WebGLRenderer: "+i+" extension not supported."),s}}}function eC(e,t,n,i){let s={},a=new WeakMap,r=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&t.remove(v.index);for(let g in v.attributes)t.remove(v.attributes[g]);v.removeEventListener("dispose",o),delete s[v.id],r.unregister(v);let T=a.get(v);T&&(t.remove(T),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,T){return s[T.id]!==void 0||(T.addEventListener("dispose",o),s[T.id]=new WeakRef(T),r.register(T,T.id,T),n.memory.geometries++),T}function h(v){let T=v.attributes;for(let g in T)t.update(T[g],e.ARRAY_BUFFER)}function d(v){let T=v.index,g=v.attributes.position,f=0;if(g===void 0)return;let m=T!==null?T.array.length:g.array.length/3-1,y=g.count>=65535?dc:fc,x=new y(Math.ceil(m/3)*6,1),E=x.array;if(T!==null){let _=T.array;f=T.version;for(let b=0,O=0;b<m;b+=3){let R=_[b+0],U=_[b+1],z=_[b+2];E[O++]=R,E[O++]=U,E[O++]=U,E[O++]=z,E[O++]=z,E[O++]=R}}else{f=g.version;for(let _=0,b=0;_<m;_+=3){let O=_+0,R=_+1,U=_+2;E[b++]=O,E[b++]=R,E[b++]=R,E[b++]=U,E[b++]=U,E[b++]=O}}x.version=f;let w=a.get(v);w&&t.remove(w),a.set(v,x)}function u(v){let T=a.get(v);if(T){let g=v.index;g!==null&&T.version<g.version&&d(v)}else d(v);return a.get(v)}function p(){for(let v in s){let T=s[v].deref();T!==void 0&&l(T)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function nC(e,t,n){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,u){e.drawElements(i,u,a,d*r),n.update(u,i,1)}function c(d,u,p){p!==0&&(e.drawElementsInstanced(i,u,a,d*r,p),n.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,d,0,p);let T=0;for(let g=0;g<p;g++)T+=u[g];n.update(T,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function iC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Dt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function sC(e,t,n){let i=new WeakMap,s=new Me;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let O=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],y=0;p===!0&&(y=1),v===!0&&(y=2),T===!0&&(y=3);let x=o.attributes.position.count*y,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*E*4*d),_=new cc(w,x,E,d);_.type=Pi,_.needsUpdate=!0;let b=y*4;for(let R=0;R<d;R++){let U=g[R],z=f[R],q=m[R],D=x*E*4*R;for(let X=0;X<U.count;X++){let K=X*b;p===!0&&(s.fromBufferAttribute(U,X),w[D+K+0]=s.x,w[D+K+1]=s.y,w[D+K+2]=s.z,w[D+K+3]=0),v===!0&&(s.fromBufferAttribute(z,X),w[D+K+4]=s.x,w[D+K+5]=s.y,w[D+K+6]=s.z,w[D+K+7]=0),T===!0&&(s.fromBufferAttribute(q,X),w[D+K+8]=s.x,w[D+K+9]=s.y,w[D+K+10]=s.z,w[D+K+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Qt(x,E)},i.set(o,u),o.addEventListener("dispose",O)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let T=0;T<c.length;T++)p+=c[T];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function aC(e,t,n,i,s){let a=new WeakMap;function r(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;a.get(p)!==h&&(p.update(),a.set(p,h))}return u}function o(){a=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var rC={[hg]:"LINEAR_TONE_MAPPING",[fg]:"REINHARD_TONE_MAPPING",[dg]:"CINEON_TONE_MAPPING",[pg]:"ACES_FILMIC_TONE_MAPPING",[gg]:"AGX_TONE_MAPPING",[_g]:"NEUTRAL_TONE_MAPPING",[mg]:"CUSTOM_TONE_MAPPING"};function oC(e,t,n,i,s,a){let r=new $n(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ui;h.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new en([0,2,0,0,2,0],2));let d=new _f({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Si(h,d),p=new Vo(-1,1,1,-1,0,1),v=null,T=null,g=!1,f,m=null,y=[],x=!1;this.setSize=function(E,w){r.setSize(E,w),o!==null&&o.setSize(E,w),l!==null&&l.setSize(E,w);for(let _=0;_<y.length;_++){let b=y[_];b.setSize&&b.setSize(E,w)}},this.setEffects=function(E){y=E,x=y.length>0&&y[0].isRenderPass===!0;let w=r.width,_=r.height;y.length>0&&o===null&&(o=new $n(w,_,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),l=new $n(w,_,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&y.some(O=>O.needsDepthTexture===!0);b!==(r.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ps(w,_),a===!0&&(c.format=Bs,c.type=yr)),r.dispose(),r.depthTexture=b?c:null,r.resolveDepthBuffer=b,r.storeMultisampledDepthBuffer=b);for(let O=0;O<y.length;O++){let R=y[O];R.setSize&&R.setSize(w,_),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,w){if(g||E.toneMapping===cs&&y.length===0)return!1;if(m=w,w!==null){let _=w.width,b=w.height;(r.width!==_||r.height!==b)&&this.setSize(_,b)}return x===!1&&E.setRenderTarget(r),f=E.toneMapping,E.toneMapping=cs,!0},this.hasRenderPass=function(){return x},this.end=function(E,w){E.toneMapping=f,g=!0;let _=r,b=o;for(let O=0;O<y.length;O++){let R=y[O];R.enabled!==!1&&(R.render(E,b,_,w),R.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(v!==E.outputColorSpace||T!==E.toneMapping){v=E.outputColorSpace,T=E.toneMapping,d.defines={},Jt.getTransfer(v)===ae&&(d.defines.SRGB_TRANSFER="");let O=rC[T];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(m),E.render(u,p),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var yb=new Rn,xb=new Ps(1,1),Sb=new _c(1),Mb=new cc,bb=new ff,Tb=new gc,jM=[],$M=[],tb=new Float32Array(16),eb=new Float32Array(9),nb=new Float32Array(4);function Ko(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=jM[s];if(a===void 0&&(a=new Float32Array(s),jM[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function We(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Md(e,t){let n=$M[t];n===void 0&&(n=new Int32Array(t),$M[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function lC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function cC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2fv(this.addr,t),qe(n,t)}}function uC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(We(n,t))return;e.uniform3fv(this.addr,t),qe(n,t)}}function hC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4fv(this.addr,t),qe(n,t)}}function fC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qe(n,t)}else{if(We(n,i))return;nb.set(i),e.uniformMatrix2fv(this.addr,!1,nb),qe(n,i)}}function dC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qe(n,t)}else{if(We(n,i))return;eb.set(i),e.uniformMatrix3fv(this.addr,!1,eb),qe(n,i)}}function pC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qe(n,t)}else{if(We(n,i))return;tb.set(i),e.uniformMatrix4fv(this.addr,!1,tb),qe(n,i)}}function mC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function gC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2iv(this.addr,t),qe(n,t)}}function _C(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(We(n,t))return;e.uniform3iv(this.addr,t),qe(n,t)}}function vC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4iv(this.addr,t),qe(n,t)}}function yC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function xC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2uiv(this.addr,t),qe(n,t)}}function SC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(We(n,t))return;e.uniform3uiv(this.addr,t),qe(n,t)}}function MC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4uiv(this.addr,t),qe(n,t)}}function bd(e){return e.version===0&&(e.compareFunction=Cg,e.needsUpdate=!0),e}function bC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?a=bd(xb):a=yb,n.setTexture2D(t||a,s)}function TC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||bb,s)}function EC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_CUBE_SHADOW?a=bd(Sb):a=Tb,n.setTextureCube(t||a,s)}function AC(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Mb,s)}function wC(e){switch(e){case 5126:return lC;case 35664:return cC;case 35665:return uC;case 35666:return hC;case 35674:return fC;case 35675:return dC;case 35676:return pC;case 5124:case 35670:return mC;case 35667:case 35671:return gC;case 35668:case 35672:return _C;case 35669:case 35673:return vC;case 5125:return yC;case 36294:return xC;case 36295:return SC;case 36296:return MC;case 35678:case 36198:case 36298:case 36306:case 35682:return bC;case 35679:case 36299:case 36307:return TC;case 35680:case 36300:case 36308:case 36293:return EC;case 36289:case 36303:case 36311:case 36292:return AC}}function RC(e,t){e.uniform1fv(this.addr,t)}function CC(e,t){let n=Ko(t,this.size,2);e.uniform2fv(this.addr,n)}function NC(e,t){let n=Ko(t,this.size,3);e.uniform3fv(this.addr,n)}function DC(e,t){let n=Ko(t,this.size,4);e.uniform4fv(this.addr,n)}function LC(e,t){let n=Ko(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function UC(e,t){let n=Ko(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function OC(e,t){let n=Ko(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function IC(e,t){e.uniform1iv(this.addr,t)}function PC(e,t){e.uniform2iv(this.addr,t)}function BC(e,t){e.uniform3iv(this.addr,t)}function zC(e,t){e.uniform4iv(this.addr,t)}function FC(e,t){e.uniform1uiv(this.addr,t)}function HC(e,t){e.uniform2uiv(this.addr,t)}function GC(e,t){e.uniform3uiv(this.addr,t)}function VC(e,t){e.uniform4uiv(this.addr,t)}function kC(e,t,n){let i=this.cache,s=t.length,a=Md(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=bd(xb):r=yb;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function XC(e,t,n){let i=this.cache,s=t.length,a=Md(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||bb,a[r])}function WC(e,t,n){let i=this.cache,s=t.length,a=Md(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));let r;this.type===e.SAMPLER_CUBE_SHADOW?r=bd(Sb):r=Tb;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||r,a[o])}function qC(e,t,n){let i=this.cache,s=t.length,a=Md(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Mb,a[r])}function YC(e){switch(e){case 5126:return RC;case 35664:return CC;case 35665:return NC;case 35666:return DC;case 35674:return LC;case 35675:return UC;case 35676:return OC;case 5124:case 35670:return IC;case 35667:case 35671:return PC;case 35668:case 35672:return BC;case 35669:case 35673:return zC;case 5125:return FC;case 36294:return HC;case 36295:return GC;case 36296:return VC;case 35678:case 36198:case 36298:case 36306:case 35682:return kC;case 35679:case 36299:case 36307:return XC;case 35680:case 36300:case 36308:case 36293:return WC;case 36289:case 36303:case 36311:case 36292:return qC}}var Xg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wC(n.type)}},Wg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YC(n.type)}},qg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Vg=/(\w+)(\])?(\[|\.)?/g;function ib(e,t){e.seq.push(t),e.map[t.id]=t}function ZC(e,t,n){let i=e.name,s=i.length;for(Vg.lastIndex=0;;){let a=Vg.exec(i),r=Vg.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){ib(n,c===void 0?new Xg(o,e,t):new Wg(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new qg(o),ib(n,d)),n=d}}}var Jo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);ZC(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function sb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var JC=37297,KC=0;function QC(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var ab=new Lt;function jC(e){Jt._getMatrix(ab,Jt.workingColorSpace,e);let t=`mat3( ${ab.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case oc:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function rb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+QC(e.getShaderSource(t),o)}else return a}function $C(e,t){let n=jC(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var tN={[hg]:"Linear",[fg]:"Reinhard",[dg]:"Cineon",[pg]:"ACESFilmic",[gg]:"AgX",[_g]:"Neutral",[mg]:"Custom"};function eN(e,t){let n=tN[t];return n===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var yd=new F;function nN(){Jt.getLuminanceCoefficients(yd);let e=yd.x.toFixed(4),t=yd.y.toFixed(4),n=yd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uc).join(`
`)}function sN(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function aN(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Uc(e){return e!==""}function ob(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function lb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yg(e){return e.replace(rN,oN)}function oN(e,t){let n=Gt[t];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Yg(n)}var lN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cb(e){return e.replace(lN,cN)}function cN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function ub(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var uN={[Mc]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function hN(e){return uN[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fN={[Yo]:"ENVMAP_MODE_REFRACTION"};function dN(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":fN[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pN={[ug]:"ENVMAP_BLENDING_MULTIPLY",[wM]:"ENVMAP_BLENDING_MIX",[RM]:"ENVMAP_BLENDING_ADD"};function mN(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":pN[e.combine]||"ENVMAP_BLENDING_NONE"}function gN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=hN(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=dN(n),d=mN(n),u=iN(n),p=sN(a),v=s.createProgram(),T,g,f=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(T=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Uc).join(`
`),T.length>0&&(T+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Uc).join(`
`),g.length>0&&(g+=`
`)):(T=[ub(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uc).join(`
`),g=[ub(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cs?"#define TONE_MAPPING":"",n.toneMapping!==cs?Gt.tonemapping_pars_fragment:"",n.toneMapping!==cs?eN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,$C("linearToOutputTexel",n.outputColorSpace),nN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Uc).join(`
`)),r=Yg(r),r=ob(r,n),r=lb(r,n),o=Yg(o),o=ob(o,n),o=lb(o,n),r=cb(r),o=cb(o),n.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,T=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,g=["#define varying in",n.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=f+T+r,y=f+g+o,x=sb(s,s.VERTEX_SHADER,m),E=sb(s,s.FRAGMENT_SHADER,y);s.attachShader(v,x),s.attachShader(v,E),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(R){if(e.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(x)||"",q=s.getShaderInfoLog(E)||"",D=U.trim(),X=z.trim(),K=q.trim(),G=!0,nt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,v,x,E);else{let k=rb(s,x,"vertex"),$=rb(s,E,"fragment");Dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+k+`
`+$)}else D!==""?Ct("WebGLProgram: Program Info Log:",D):(X===""||K==="")&&(nt=!1);nt&&(R.diagnostics={runnable:G,programLog:D,vertexShader:{log:X,prefix:T},fragmentShader:{log:K,prefix:g}})}s.deleteShader(x),s.deleteShader(E),_=new Jo(s,v),b=aN(s,v)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(v,JC)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KC++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=x,this.fragmentShader=E,this}var _N=0,Zg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Jg(t),n.set(t,i)),i}},Jg=class{constructor(t){this.id=_N++,this.code=t,this.usedTimes=0}};function vN(e){return e===Na||e===Cc||e===Nc}function yN(e,t,n,i,s,a){let r=new uc,o=new Zg,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,b,O,R,U,z){let q=R.fog,D=U.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||X,K),nt=u[_.type],k=i.precision;_.precision!==null&&(k=i.getMaxPrecision(_.precision),k!==_.precision&&Ct("WebGLProgram.getParameters:",_.precision,"not supported, using",k,"instead."));let $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,tt=$!==void 0?$.length:0,Mt=0;D.morphAttributes.position!==void 0&&(Mt=1),D.morphAttributes.normal!==void 0&&(Mt=2),D.morphAttributes.color!==void 0&&(Mt=3);let It,Z,mt,yt;if(nt){let dt=hs[nt];It=dt.vertexShader,Z=dt.fragmentShader}else{It=_.vertexShader,Z=_.fragmentShader;let dt=o.getVertexShaderStage(_),oe=o.getFragmentShaderStage(_);o.update(_,dt,oe),mt=dt.id,yt=oe.id}let At=e.getRenderTarget(),gt=e.state.buffers.depth.getReversed(),Bt=U.isInstancedMesh===!0,Oe=U.isBatchedMesh===!0,Rt=!!_.map,re=!!_.matcap,fe=!!G,Wt=fe&&G.isPMREMTexture===!0,sn=!!_.aoMap,He=!!_.lightMap,Nn=!!_.bumpMap&&_.wireframe===!1,we=!!_.normalMap,Hi=!!_.displacementMap,Ye=!!_.emissiveMap,ai=!!_.metalnessMap,ri=!!_.roughnessMap,oi=_.anisotropy>0,L=_.clearcoat>0,li=_.diffuseRoughness>0,be=_.dispersion>0,Te=_.retroreflectivity>0,ft=_.iridescence>0,Ge=_.sheen>0,wt=_.transmission>0,Ut=oi&&!!_.anisotropyMap,A=L&&!!_.clearcoatMap,S=L&&!!_.clearcoatNormalMap,P=L&&!!_.clearcoatRoughnessMap,et=li&&!!_.diffuseRoughnessMap,j=ft&&!!_.iridescenceMap,at=ft&&!!_.iridescenceThicknessMap,ut=Ge&&!!_.sheenColorMap,W=Ge&&!!_.sheenRoughnessMap,Y=!!_.specularMap,ot=!!_.specularColorMap,C=!!_.specularIntensityMap,J=wt&&!!_.transmissionMap,V=wt&&!!_.thicknessMap,lt=!!_.gradientMap,st=!!_.alphaMap,rt=_.alphaTest>0,Tt=!!_.alphaHash,Ht=!!_.extensions,it=cs;_.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(it=e.toneMapping);let Et=Wt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ft={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:It,fragmentShader:Z,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:yt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:k,batching:Oe,batchingColor:Oe&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,outputColorSpace:At===null?e.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Rt,matcap:re,envMap:fe,envMapMode:fe&&G.mapping,envMapPMREM:Wt,envMapMaxLod:Wt?Et.length-1:null,envMapSize:Wt?Et[0].width:null,aoMap:sn,lightMap:He,bumpMap:Nn,normalMap:we,displacementMap:Hi,emissiveMap:Ye,normalMapObjectSpace:we&&_.normalMapType===DM,normalMapTangentSpace:we&&_.normalMapType===Ag,packedNormalMap:we&&_.normalMapType===Ag&&vN(_.normalMap.format),metalnessMap:ai,roughnessMap:ri,anisotropy:oi,anisotropyMap:Ut,clearcoat:L,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:P,diffuseRoughness:li,diffuseRoughnessMap:et,dispersion:be,retroreflection:Te,iridescence:ft,iridescenceMap:j,iridescenceThicknessMap:at,sheen:Ge,sheenColorMap:ut,sheenRoughnessMap:W,specularMap:Y,specularColorMap:ot,specularIntensityMap:C,transmission:wt,transmissionMap:J,thicknessMap:V,gradientMap:lt,opaque:_.transparent===!1&&_.blending===Wo&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:rt,alphaHash:Tt,combine:_.combine,mapUv:Rt&&p(_.map.channel),aoMapUv:sn&&p(_.aoMap.channel),lightMapUv:He&&p(_.lightMap.channel),bumpMapUv:Nn&&p(_.bumpMap.channel),normalMapUv:we&&p(_.normalMap.channel),displacementMapUv:Hi&&p(_.displacementMap.channel),emissiveMapUv:Ye&&p(_.emissiveMap.channel),metalnessMapUv:ai&&p(_.metalnessMap.channel),roughnessMapUv:ri&&p(_.roughnessMap.channel),anisotropyMapUv:Ut&&p(_.anisotropyMap.channel),clearcoatMapUv:A&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:W&&p(_.sheenRoughnessMap.channel),specularMapUv:Y&&p(_.specularMap.channel),specularColorMapUv:ot&&p(_.specularColorMap.channel),specularIntensityMapUv:C&&p(_.specularIntensityMap.channel),transmissionMapUv:J&&p(_.transmissionMap.channel),thicknessMapUv:V&&p(_.thicknessMap.channel),alphaMapUv:st&&p(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(we||oi),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Rt||st),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&we===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Mt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(dt=>dt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&O.length>0,shadowMapType:e.shadowMap.type,toneMapping:it,decodeVideoTexture:Rt&&_.map.isVideoTexture===!0&&Jt.getTransfer(_.map.colorSpace)===ae,decodeVideoTextureEmissive:Ye&&_.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(_.emissiveMap.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ls,flipSided:_.side===Cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ht&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&_.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function T(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let O in _.defines)b.push(O),b.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(g(b,_),f(b,_),b.push(e.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function f(_,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.retroreflection&&r.enable(24),b.diffuseRoughness&&r.enable(25),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function m(_){let b=u[_.type],O;if(b){let R=hs[b];O=WM.clone(R.uniforms)}else O=_.uniforms;return O}function y(_,b){let O=h.get(b);return O!==void 0?++O.usedTimes:(O=new gN(e,b,_,s),c.push(O),h.set(b,O)),O}function x(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:T,getUniforms:m,acquireProgram:y,releaseProgram:x,releaseShaderCache:E,programs:c,dispose:w}}function xN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function SN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function hb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function fb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,T,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:v,materialVariant:r(u),groupOrder:T,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=v,m.materialVariant=r(u),m.groupOrder=T,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,p,v,T,g,f,m){m.reversedDepth===!0&&(g=-g);let y=o(u,p,v,T,g,f);v.transmission>0?i.push(y):v.transparent===!0?s.push(y):n.push(y)}function c(u,p,v,T,g,f){let m=o(u,p,v,T,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?s.unshift(m):n.unshift(m)}function h(u,p){n.length>1&&n.sort(u||SN),i.length>1&&i.sort(p||hb),s.length>1&&s.sort(p||hb)}function d(){for(let u=t,p=e.length;u<p;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:d,sort:h}}function MN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new fb,e.set(i,[r])):s>=a.length?(r=new fb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function bN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new jt};break;case"SpotLight":n={position:new F,direction:new F,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":n={color:new jt,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function TN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var EN=0;function AN(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function wN(e){let t=new bN,n=TN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,a=new Ne,r=new Ne;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,v=0,T=0,g=0,f=0,m=0,y=0,x=0,E=0,w=0,_=0,b=0,O=0,R=0;c.sort(AN);for(let z=0,q=c.length;z<q;z++){let D=c[z],X=D.color,K=D.intensity,G=D.distance,nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Na?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=X.r*K,d+=X.g*K,u+=X.b*K;else if(D.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],K);R++}else if(D.isSunLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,tt=n.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[v]=tt,i.sunShadowMap[v]=nt;let Mt=$.getViewportCount();for(let It=0;It<Mt;It++)i.sunShadowMatrix[T+It]=$.getMatrix(It),i.sunShadowCascade[T+It]=$._cascadeData[It];T+=Mt,v++}i.sun[p]=k,p++}else if(D.isDirectionalLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let $=D.shadow,tt=n.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=nt,i.directionalShadowMatrix[g]=D.shadow.matrix,E++}i.directional[g]=k,g++}else if(D.isSpotLight){let k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(X).multiplyScalar(K),k.distance=G,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[m]=k;let $=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,$.updateMatrices(D),D.castShadow&&O++),i.spotLightMatrix[m]=$.matrix,D.castShadow){let tt=n.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.spotShadow[m]=tt,i.spotShadowMap[m]=nt,_++}m++}else if(D.isRectAreaLight){let k=t.get(D);k.color.copy(X).multiplyScalar(K),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=k,y++}else if(D.isPointLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let $=D.shadow,tt=n.get(D);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,i.pointShadow[f]=tt,i.pointShadowMap[f]=nt,i.pointShadowMatrix[f]=D.shadow.matrix,w++}i.point[f]=k,f++}else if(D.isHemisphereLight){let k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(K),k.groundColor.copy(D.groundColor).multiplyScalar(K),i.hemi[x]=k,x++}}y>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let U=i.hash;(U.sunLength!==p||U.directionalLength!==g||U.pointLength!==f||U.spotLength!==m||U.rectAreaLength!==y||U.hemiLength!==x||U.numSunShadows!==v||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==_||U.numSpotMaps!==b||U.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=g,i.spot.length=m,i.rectArea.length=y,i.point.length=f,i.hemi.length=x,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=T,i.sunShadowCascade.length=T,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-O,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=R,U.sunLength=p,U.directionalLength=g,U.pointLength=f,U.spotLength=m,U.rectAreaLength=y,U.hemiLength=x,U.numSunShadows=v,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=_,U.numSpotMaps=b,U.numLightProbes=R,i.version=EN++)}function l(c,h){let d=0,u=0,p=0,v=0,T=0,g=0,f=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let x=c[m];if(x.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),d++}else if(x.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(x.isSpotLight){let E=i.spot[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),v++}else if(x.isRectAreaLight){let E=i.rectArea[T];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),r.identity(),a.copy(x.matrixWorld),a.premultiply(f),r.extractRotation(a),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),T++}else if(x.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:i}}function db(e){let t=new wN(e),n=[],i=[],s=[];function a(d){h.camera=d,n.length=0,i.length=0,s.length=0}function r(d){d.isLightProbeGrid?s.push(d):n.push(d)}function o(d){i.push(d)}function l(){t.setup(n),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(n,d)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function RN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new db(e),t.set(s,[o])):a>=r.length?(o=new db(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var CN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DN=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],LN=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],pb=new Ne,Lc=new F,kg=new F;function UN(e,t,n){let i=new pr,s=new Qt,a=new Qt,r=new Me,o=new vf,l=new yf,c={},h=n.maxTextureSize,d={[Ca]:Cn,[Cn]:Ca,[ls]:ls},u=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:CN,fragmentShader:NN}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let v=new Ui;v.setAttribute("position",new as(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new Si(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let f=this.type;this.render=function(w,_,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===uM&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mc);let O=e.getRenderTarget(),R=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),z=e.state;z.setBlending(gr),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=f!==this.type;q&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(X=>X.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,X=w.length;D<X;D++){let K=w[D],G=K.shadow;if(G===void 0){Ct("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let nt=G.getFrameExtents();s.multiply(nt),a.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/nt.x),s.x=a.x*nt.x,G.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/nt.y),s.y=a.y*nt.y,G.mapSize.y=a.y));let k=e.state.buffers.depth.getReversed();if(G.camera._reversedDepth=k,G.map===null||q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Xo){if(K.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new $n(s.x,s.y,{format:Na,type:Bi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new Ps(s.x,s.y,Pi),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=Is,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=nn,G.map.depthTexture.magFilter=nn}else K.isPointLight?(G.map=new Oc(s.x),G.map.depthTexture=new _c(s.x,Ii)):(G.map=new $n(s.x,s.y),G.map.depthTexture=new Ps(s.x,s.y,Ii)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=Is,this.type===Mc?(G.map.depthTexture.compareFunction=k?Rg:wg,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=nn,G.map.depthTexture.magFilter=nn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let $=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();K.isPointLight!==!0&&G.updateMatrices(K,b);let tt=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let Mt=0;Mt<$;Mt++){let It=G.getCamera(Mt);if(K.isPointLight){let Z=G.camera,mt=G.matrix,yt=K.distance||Z.far;yt!==Z.far&&(Z.far=yt,Z.updateProjectionMatrix()),Lc.setFromMatrixPosition(K.matrixWorld),Z.position.copy(Lc),kg.copy(Z.position),kg.add(DN[Mt]),Z.up.copy(LN[Mt]),Z.lookAt(kg),Z.updateMatrixWorld(),mt.makeTranslation(-Lc.x,-Lc.y,-Lc.z),pb.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(pb,Z.coordinateSystem,Z.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)e.setRenderTarget(G.map,Mt),e.clear();else{Mt===0&&(e.setRenderTarget(G.map),e.clear());let Z=G.getViewport(Mt);r.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),z.viewport(r)}i=G.getFrustum(Mt),x(_,b,It,K,tt,this.type)}G.isPointLightShadow!==!0&&this.type===Xo&&m(G,b),G.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(O,R,U)};function m(w,_){let b=t.update(T);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new $n(s.x,s.y,{format:Na,type:Bi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(_,null,b,u,T,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(_,null,b,p,T,null)}function y(w,_,b,O){let R=null,U=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)R=U;else if(R=b.isPointLight===!0?l:o,e.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=R.uuid,q=_.uuid,D=c[z];D===void 0&&(D={},c[z]=D);let X=D[q];X===void 0&&(X=R.clone(),D[q]=X,_.addEventListener("dispose",E)),R=X}if(R.visible=_.visible,R.wireframe=_.wireframe,O===Xo?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=e.properties.get(R);z.light=b}return R}function x(w,_,b,O,R,U){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Xo)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let D=t.update(w),X=w.material;if(Array.isArray(X)){let K=D.groups;for(let G=0,nt=K.length;G<nt;G++){let k=K[G],$=X[k.materialIndex];if($&&$.visible){let tt=y(w,$,O,U);w.onBeforeShadow(e,w,_,b,D,tt,k),e.renderBufferDirect(b,null,D,tt,w,k),w.onAfterShadow(e,w,_,b,D,tt,k)}}}else if(X.visible){let K=y(w,X,O,U);w.onBeforeShadow(e,w,_,b,D,K,null),e.renderBufferDirect(b,null,D,K,w,null),w.onAfterShadow(e,w,_,b,D,K,null)}}let q=w.children;for(let D=0,X=q.length;D<X;D++)x(q[D],_,b,O,R,U)}function E(w){w.target.removeEventListener("dispose",E);for(let b in c){let O=c[b],R=w.target.uuid;R in O&&(O[R].dispose(),delete O[R])}}}function ON(e,t){function n(){let C=!1,J=new Me,V=null,lt=new Me(0,0,0,0);return{setMask:function(st){V!==st&&!C&&(e.colorMask(st,st,st,st),V=st)},setLocked:function(st){C=st},setClear:function(st,rt,Tt,Ht,it){it===!0&&(st*=Ht,rt*=Ht,Tt*=Ht),J.set(st,rt,Tt,Ht),lt.equals(J)===!1&&(e.clearColor(st,rt,Tt,Ht),lt.copy(J))},reset:function(){C=!1,V=null,lt.set(-1,0,0,0)}}}function i(){let C=!1,J=!1,V=null,lt=null,st=null;return{setReversed:function(rt){if(J!==rt){let Tt=t.get("EXT_clip_control");rt?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),J=rt;let Ht=st;st=null,this.setClear(Ht)}},getReversed:function(){return J},setTest:function(rt){rt?gt(e.DEPTH_TEST):Bt(e.DEPTH_TEST)},setMask:function(rt){V!==rt&&!C&&(e.depthMask(rt),V=rt)},setFunc:function(rt){if(J&&(rt=VM[rt]),lt!==rt){switch(rt){case jh:e.depthFunc(e.NEVER);break;case $h:e.depthFunc(e.ALWAYS);break;case tf:e.depthFunc(e.LESS);break;case Io:e.depthFunc(e.LEQUAL);break;case ef:e.depthFunc(e.EQUAL);break;case nf:e.depthFunc(e.GEQUAL);break;case sf:e.depthFunc(e.GREATER);break;case af:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}lt=rt}},setLocked:function(rt){C=rt},setClear:function(rt){st!==rt&&(st=rt,J&&(rt=1-rt),e.clearDepth(rt))},reset:function(){C=!1,V=null,lt=null,st=null,J=!1}}}function s(){let C=!1,J=null,V=null,lt=null,st=null,rt=null,Tt=null,Ht=null,it=null;return{setTest:function(Et){C||(Et?gt(e.STENCIL_TEST):Bt(e.STENCIL_TEST))},setMask:function(Et){J!==Et&&!C&&(e.stencilMask(Et),J=Et)},setFunc:function(Et,Ft,dt){(V!==Et||lt!==Ft||st!==dt)&&(e.stencilFunc(Et,Ft,dt),V=Et,lt=Ft,st=dt)},setOp:function(Et,Ft,dt){(rt!==Et||Tt!==Ft||Ht!==dt)&&(e.stencilOp(Et,Ft,dt),rt=Et,Tt=Ft,Ht=dt)},setLocked:function(Et){C=Et},setClear:function(Et){it!==Et&&(e.clearStencil(Et),it=Et)},reset:function(){C=!1,J=null,V=null,lt=null,st=null,rt=null,Tt=null,Ht=null,it=null}}}let a=new n,r=new i,o=new s,l={},c=new WeakMap,h={},d={},u={},p=new WeakMap,v=[],T=null,g=!1,f=null,m=null,y=null,x=null,E=null,w=null,_=null,b=new jt(0,0,0),O=0,R=!1,U=null,z=null,q=null,D=null,X=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=nt>=1):k.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=nt>=2);let $=null,tt={},Mt=e.getParameter(e.SCISSOR_BOX),It=e.getParameter(e.VIEWPORT),Z=new Me().fromArray(Mt),mt=new Me().fromArray(It);function yt(C,J,V,lt){let st=new Uint8Array(4),rt=e.createTexture();e.bindTexture(C,rt),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Tt=0;Tt<V;Tt++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(J,0,e.RGBA,1,1,lt,0,e.RGBA,e.UNSIGNED_BYTE,st):e.texImage2D(J+Tt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,st);return rt}let At={};At[e.TEXTURE_2D]=yt(e.TEXTURE_2D,e.TEXTURE_2D,1),At[e.TEXTURE_CUBE_MAP]=yt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[e.TEXTURE_2D_ARRAY]=yt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),At[e.TEXTURE_3D]=yt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),gt(e.DEPTH_TEST),r.setFunc(Io),Nn(!1),we(ag),gt(e.CULL_FACE),sn(gr);function gt(C){h[C]!==!0&&(e.enable(C),h[C]=!0)}function Bt(C){h[C]!==!1&&(e.disable(C),h[C]=!1)}function Oe(C,J){return u[C]!==J?(e.bindFramebuffer(C,J),u[C]=J,C===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=J),C===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=J),!0):!1}function Rt(C,J){let V=v,lt=!1;if(C){V=p.get(J),V===void 0&&(V=[],p.set(J,V));let st=C.textures;if(V.length!==st.length||V[0]!==e.COLOR_ATTACHMENT0){for(let rt=0,Tt=st.length;rt<Tt;rt++)V[rt]=e.COLOR_ATTACHMENT0+rt;V.length=st.length,lt=!0}}else V[0]!==e.BACK&&(V[0]=e.BACK,lt=!0);lt&&e.drawBuffers(V)}function re(C){return T!==C?(e.useProgram(C),T=C,!0):!1}let fe={[_r]:e.FUNC_ADD,[hM]:e.FUNC_SUBTRACT,[fM]:e.FUNC_REVERSE_SUBTRACT};fe[dM]=e.MIN,fe[pM]=e.MAX;let Wt={[mM]:e.ZERO,[qo]:e.ONE,[gM]:e.SRC_COLOR,[cg]:e.SRC_ALPHA,[MM]:e.SRC_ALPHA_SATURATE,[xM]:e.DST_COLOR,[vM]:e.DST_ALPHA,[_M]:e.ONE_MINUS_SRC_COLOR,[bc]:e.ONE_MINUS_SRC_ALPHA,[SM]:e.ONE_MINUS_DST_COLOR,[yM]:e.ONE_MINUS_DST_ALPHA,[bM]:e.CONSTANT_COLOR,[TM]:e.ONE_MINUS_CONSTANT_COLOR,[EM]:e.CONSTANT_ALPHA,[AM]:e.ONE_MINUS_CONSTANT_ALPHA};function sn(C,J,V,lt,st,rt,Tt,Ht,it,Et){if(C===gr){g===!0&&(Bt(e.BLEND),g=!1);return}if(g===!1&&(gt(e.BLEND),g=!0),C!==Lf){if(C!==f||Et!==R){if((m!==_r||E!==_r)&&(e.blendEquation(e.FUNC_ADD),m=_r,E=_r),Et)switch(C){case Wo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case rg:e.blendFunc(e.ONE,e.ONE);break;case og:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case lg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Dt("WebGLState: Invalid blending: ",C);break}else switch(C){case Wo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case rg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case og:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lg:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",C);break}y=null,x=null,w=null,_=null,b.set(0,0,0),O=0,f=C,R=Et}return}st=st||J,rt=rt||V,Tt=Tt||lt,(J!==m||st!==E)&&(e.blendEquationSeparate(fe[J],fe[st]),m=J,E=st),(V!==y||lt!==x||rt!==w||Tt!==_)&&(e.blendFuncSeparate(Wt[V],Wt[lt],Wt[rt],Wt[Tt]),y=V,x=lt,w=rt,_=Tt),(Ht.equals(b)===!1||it!==O)&&(e.blendColor(Ht.r,Ht.g,Ht.b,it),b.copy(Ht),O=it),f=C,R=!1}function He(C,J){C.side===ls?Bt(e.CULL_FACE):gt(e.CULL_FACE);let V=C.side===Cn;J&&(V=!V),Nn(V),C.blending===Wo&&C.transparent===!1?sn(gr):sn(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),a.setMask(C.colorWrite);let lt=C.stencilWrite;o.setTest(lt),lt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ye(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?gt(e.SAMPLE_ALPHA_TO_COVERAGE):Bt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Nn(C){U!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),U=C)}function we(C){C!==lM?(gt(e.CULL_FACE),C!==z&&(C===ag?e.cullFace(e.BACK):C===cM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Bt(e.CULL_FACE),z=C}function Hi(C){C!==q&&(G&&e.lineWidth(C),q=C)}function Ye(C,J,V){C?(gt(e.POLYGON_OFFSET_FILL),(D!==J||X!==V)&&(D=J,X=V,r.getReversed()&&(J=-J,V=-V),e.polygonOffset(J,V))):Bt(e.POLYGON_OFFSET_FILL)}function ai(C){C?gt(e.SCISSOR_TEST):Bt(e.SCISSOR_TEST)}function ri(C){C===void 0&&(C=e.TEXTURE0+K-1),$!==C&&(e.activeTexture(C),$=C)}function oi(C,J,V){V===void 0&&($===null?V=e.TEXTURE0+K-1:V=$);let lt=tt[V];lt===void 0&&(lt={type:void 0,texture:void 0},tt[V]=lt),(lt.type!==C||lt.texture!==J)&&($!==V&&(e.activeTexture(V),$=V),e.bindTexture(C,J||At[C]),lt.type=C,lt.texture=J)}function L(){let C=tt[$];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function li(){try{e.compressedTexImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function be(){try{e.compressedTexImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function Te(){try{e.texSubImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function ft(){try{e.texSubImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function Ge(){try{e.compressedTexSubImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function wt(){try{e.compressedTexSubImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function Ut(){try{e.texStorage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function A(){try{e.texStorage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function S(){try{e.texImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function P(){try{e.texImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function et(C){return d[C]!==void 0?d[C]:e.getParameter(C)}function j(C,J){d[C]!==J&&(e.pixelStorei(C,J),d[C]=J)}function at(C){Z.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function ut(C){mt.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),mt.copy(C))}function W(C,J){let V=c.get(J);V===void 0&&(V=new WeakMap,c.set(J,V));let lt=V.get(C);lt===void 0&&(lt=e.getUniformBlockIndex(J,C.name),e.uniformBlockBinding(J,lt,lt),V.set(C,lt))}function Y(C,J,V){let st=c.get(J).get(C);l[st]!==V&&(e.bindBufferBase(e.UNIFORM_BUFFER,st,V),l[st]=V)}function ot(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},$=null,tt={},u={},l={},p=new WeakMap,v=[],T=null,g=!1,f=null,m=null,y=null,x=null,E=null,w=null,_=null,b=new jt(0,0,0),O=0,R=!1,U=null,z=null,q=null,D=null,X=null,Z.set(0,0,e.canvas.width,e.canvas.height),mt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:gt,disable:Bt,bindFramebuffer:Oe,drawBuffers:Rt,useProgram:re,setBlending:sn,setMaterial:He,setFlipSided:Nn,setCullFace:we,setLineWidth:Hi,setPolygonOffset:Ye,setScissorTest:ai,activeTexture:ri,bindTexture:oi,unbindTexture:L,compressedTexImage2D:li,compressedTexImage3D:be,texImage2D:S,texImage3D:P,pixelStorei:j,getParameter:et,updateUBOMapping:W,uniformBlockBinding:Y,texStorage2D:Ut,texStorage3D:A,texSubImage2D:Te,texSubImage3D:ft,compressedTexSubImage2D:Ge,compressedTexSubImage3D:wt,scissor:at,viewport:ut,reset:ot}}function IN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,h=new WeakMap,d=new Set,u,p=new WeakMap,v=new Set,T=new FinalizationRegistry(A=>v.delete(A)),g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,S){return g?new OffscreenCanvas(A,S):Po("canvas")}function m(A,S,P){let et=1,j=Ut(A);if((j.width>P||j.height>P)&&(et=P/Math.max(j.width,j.height)),et<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let at=Math.floor(et*j.width),ut=Math.floor(et*j.height);u===void 0&&(u=f(at,ut));let W=S?f(at,ut):u;return W.width=at,W.height=ut,W.getContext("2d").drawImage(A,0,0,at,ut),Ct("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+ut+")."),W}else return"data"in A&&Ct("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function y(A){return A.generateMipmaps}function x(A){e.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function w(A,S,P,et,j,at=!1){if(A!==null){if(e[A]!==void 0)return e[A];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut;et&&(ut=t.get("EXT_texture_norm16"),ut||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=S;if(S===e.RED&&(P===e.FLOAT&&(W=e.R32F),P===e.HALF_FLOAT&&(W=e.R16F),P===e.UNSIGNED_BYTE&&(W=e.R8),P===e.UNSIGNED_SHORT&&ut&&(W=ut.R16_EXT),P===e.SHORT&&ut&&(W=ut.R16_SNORM_EXT)),S===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.R8UI),P===e.UNSIGNED_SHORT&&(W=e.R16UI),P===e.UNSIGNED_INT&&(W=e.R32UI),P===e.BYTE&&(W=e.R8I),P===e.SHORT&&(W=e.R16I),P===e.INT&&(W=e.R32I)),S===e.RG&&(P===e.FLOAT&&(W=e.RG32F),P===e.HALF_FLOAT&&(W=e.RG16F),P===e.UNSIGNED_BYTE&&(W=e.RG8),P===e.UNSIGNED_SHORT&&ut&&(W=ut.RG16_EXT),P===e.SHORT&&ut&&(W=ut.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.RG8UI),P===e.UNSIGNED_SHORT&&(W=e.RG16UI),P===e.UNSIGNED_INT&&(W=e.RG32UI),P===e.BYTE&&(W=e.RG8I),P===e.SHORT&&(W=e.RG16I),P===e.INT&&(W=e.RG32I)),S===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.RGB8UI),P===e.UNSIGNED_SHORT&&(W=e.RGB16UI),P===e.UNSIGNED_INT&&(W=e.RGB32UI),P===e.BYTE&&(W=e.RGB8I),P===e.SHORT&&(W=e.RGB16I),P===e.INT&&(W=e.RGB32I)),S===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),P===e.UNSIGNED_INT&&(W=e.RGBA32UI),P===e.BYTE&&(W=e.RGBA8I),P===e.SHORT&&(W=e.RGBA16I),P===e.INT&&(W=e.RGBA32I)),S===e.RGB&&(P===e.UNSIGNED_SHORT&&ut&&(W=ut.RGB16_EXT),P===e.SHORT&&ut&&(W=ut.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),S===e.RGBA){let Y=at?oc:Jt.getTransfer(j);P===e.FLOAT&&(W=e.RGBA32F),P===e.HALF_FLOAT&&(W=e.RGBA16F),P===e.UNSIGNED_BYTE&&(W=Y===ae?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&ut&&(W=ut.RGBA16_EXT),P===e.SHORT&&ut&&(W=ut.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(A,S){let P;return A?S===null||S===Ii||S===yr?P=e.DEPTH24_STENCIL8:S===Pi?P=e.DEPTH32F_STENCIL8:S===Zo&&(P=e.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ii||S===yr?P=e.DEPTH_COMPONENT24:S===Pi?P=e.DEPTH_COMPONENT32F:S===Zo&&(P=e.DEPTH_COMPONENT16),P}function b(A,S){return y(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function O(A){let S=new WeakRef(A);i.get(A).__ref=S,v.add(S),T.register(A,S,S)}function R(A){let S=i.get(A).__ref;S!==void 0&&(v.delete(S),T.unregister(S))}function U(A){q(A.target)}function z(A){D(A.target)}function q(A){A.removeEventListener("dispose",U),R(A),K(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function D(A){A.removeEventListener("dispose",z),R(A),nt(A)}function X(){for(let A of v){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?D(S):q(S))}v.clear(),d.clear()}function K(A){let S=i.get(A);if(S.__webglInit===void 0)return;let P=A.source,et=p.get(P);if(et){let j=et[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(A),Object.keys(et).length===0&&p.delete(P)}i.remove(A)}function G(A){let S=i.get(A);e.deleteTexture(S.__webglTexture);let P=A.source,et=p.get(P);delete et[S.__cacheKey],r.memory.textures--}function nt(A){let S=i.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let P=A.depthTexture;if(P&&P.renderTarget===A&&q(P),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let at=0;at<S.__webglFramebuffer[j].length;at++)e.deleteFramebuffer(S.__webglFramebuffer[j][at]);else e.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)e.deleteFramebuffer(S.__webglFramebuffer[j]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let et=A.textures;for(let j=0,at=et.length;j<at;j++){let ut=i.get(et[j]);ut.__webglTexture&&(e.deleteTexture(ut.__webglTexture),r.memory.textures--),i.remove(et[j])}i.remove(A)}let k=0;function $(){k=0}function tt(){return k}function Mt(A){k=A}function It(){let A=k;return A>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,A}function Z(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function mt(A,S){let P=i.get(A);if(A.isVideoTexture&&Ge(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&P.__version!==A.version){let et=A.image;if(et===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{He(P,A,S);return}}else A.isExternalTexture&&(P.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+S)}function yt(A,S){let P=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&P.__version!==A.version){He(P,A,S);return}else A.isExternalTexture&&(P.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+S)}function At(A,S){let P=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&P.__version!==A.version){He(P,A,S);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+S)}function gt(A,S){let P=i.get(A);if(A.version>0&&P.__version!==A.version){Nn(P,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+S)}let Bt={[rf]:e.REPEAT,[ss]:e.CLAMP_TO_EDGE,[of]:e.MIRRORED_REPEAT},Oe={[nn]:e.NEAREST,[CM]:e.NEAREST_MIPMAP_NEAREST,[Tc]:e.NEAREST_MIPMAP_LINEAR,[dn]:e.LINEAR,[If]:e.LINEAR_MIPMAP_NEAREST,[Oi]:e.LINEAR_MIPMAP_LINEAR},Rt={[UM]:e.NEVER,[Cg]:e.ALWAYS,[OM]:e.LESS,[wg]:e.LEQUAL,[IM]:e.EQUAL,[Rg]:e.GEQUAL,[PM]:e.GREATER,[BM]:e.NOTEQUAL};function re(A,S){if(S.type===Pi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===dn||S.magFilter===If||S.magFilter===Tc||S.magFilter===Oi||S.minFilter===dn||S.minFilter===If||S.minFilter===Tc||S.minFilter===Oi)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Bt[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Bt[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Bt[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,Oe[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,Oe[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Tc&&S.minFilter!==Oi||S.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function fe(A,S){let P=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",U),O(S));let et=S.source,j=p.get(et);j===void 0&&(j={},p.set(et,j));let at=Z(S);if(at!==A.__cacheKey){j[at]===void 0&&(j[at]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),j[at].usedTimes++;let ut=j[A.__cacheKey];ut!==void 0&&(j[A.__cacheKey].usedTimes--,ut.usedTimes===0&&G(S)),A.__cacheKey=at,A.__webglTexture=j[at].texture}return P}function Wt(A,S,P){return Math.floor(Math.floor(A/P)/S)}function sn(A,S,P,et){let at=A.updateRanges;if(at.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,P,et,S.data);else{at.sort((C,J)=>C.start-J.start);let ut=0;for(let C=1;C<at.length;C++){let J=at[ut],V=at[C],lt=J.start+J.count,st=Wt(V.start,S.width,4),rt=Wt(J.start,S.width,4);V.start<=lt+1&&st===rt&&Wt(V.start+V.count-1,S.width,4)===st?J.count=Math.max(J.count,V.start+V.count-J.start):(++ut,at[ut]=V)}at.length=ut+1;let W=n.getParameter(e.UNPACK_ROW_LENGTH),Y=n.getParameter(e.UNPACK_SKIP_PIXELS),ot=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let C=0,J=at.length;C<J;C++){let V=at[C],lt=Math.floor(V.start/4),st=Math.ceil(V.count/4),rt=lt%S.width,Tt=Math.floor(lt/S.width),Ht=st,it=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(e.UNPACK_SKIP_ROWS,Tt),n.texSubImage2D(e.TEXTURE_2D,0,rt,Tt,Ht,it,P,et,S.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,W),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Y),n.pixelStorei(e.UNPACK_SKIP_ROWS,ot)}}function He(A,S,P){let et=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=e.TEXTURE_3D);let j=fe(A,S),at=S.source;n.bindTexture(et,A.__webglTexture,e.TEXTURE0+P);let ut=i.get(at);if(at.version!==ut.__version||j===!0){if(n.activeTexture(e.TEXTURE0+P),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let it=Jt.getPrimaries(Jt.workingColorSpace),Et=S.colorSpace===Fi?null:Jt.getPrimaries(S.colorSpace),Ft=S.colorSpace===Fi||it===Et?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let Y=m(S.image,!1,s.maxTextureSize);Y=wt(S,Y);let ot=a.convert(S.format,S.colorSpace),C=a.convert(S.type),J=w(S.internalFormat,ot,C,S.normalized,S.colorSpace,S.isVideoTexture);re(et,S);let V,lt=S.mipmaps,st=S.isVideoTexture!==!0,rt=ut.__version===void 0||j===!0,Tt=at.dataReady,Ht=b(S,Y);if(S.isDepthTexture)J=_(S.format===Bs,S.type),rt&&(st?n.texStorage2D(e.TEXTURE_2D,1,J,Y.width,Y.height):n.texImage2D(e.TEXTURE_2D,0,J,Y.width,Y.height,0,ot,C,null));else if(S.isDataTexture)if(lt.length>0){st&&rt&&n.texStorage2D(e.TEXTURE_2D,Ht,J,lt[0].width,lt[0].height);for(let it=0,Et=lt.length;it<Et;it++)V=lt[it],st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,V.width,V.height,ot,C,V.data):n.texImage2D(e.TEXTURE_2D,it,J,V.width,V.height,0,ot,C,V.data);S.generateMipmaps=!1}else st?(rt&&n.texStorage2D(e.TEXTURE_2D,Ht,J,Y.width,Y.height),Tt&&sn(S,Y,ot,C)):n.texImage2D(e.TEXTURE_2D,0,J,Y.width,Y.height,0,ot,C,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){st&&rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ht,J,lt[0].width,lt[0].height,Y.depth);for(let it=0,Et=lt.length;it<Et;it++)if(V=lt[it],S.format!==zi)if(ot!==null)if(st){if(Tt)if(S.layerUpdates.size>0){let Ft=Pg(V.width,V.height,S.format,S.type);for(let dt of S.layerUpdates){let oe=V.data.subarray(dt*Ft/V.data.BYTES_PER_ELEMENT,(dt+1)*Ft/V.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,dt,V.width,V.height,1,ot,oe)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,V.width,V.height,Y.depth,ot,V.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,it,J,V.width,V.height,Y.depth,0,V.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Tt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,V.width,V.height,Y.depth,ot,C,V.data):n.texImage3D(e.TEXTURE_2D_ARRAY,it,J,V.width,V.height,Y.depth,0,ot,C,V.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{st&&rt&&n.texStorage2D(e.TEXTURE_2D,Ht,J,lt[0].width,lt[0].height);for(let it=0,Et=lt.length;it<Et;it++)V=lt[it],S.format!==zi?ot!==null?st?Tt&&n.compressedTexSubImage2D(e.TEXTURE_2D,it,0,0,V.width,V.height,ot,V.data):n.compressedTexImage2D(e.TEXTURE_2D,it,J,V.width,V.height,0,V.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,V.width,V.height,ot,C,V.data):n.texImage2D(e.TEXTURE_2D,it,J,V.width,V.height,0,ot,C,V.data)}else if(S.isDataArrayTexture)if(st){if(rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ht,J,Y.width,Y.height,Y.depth),Tt)if(S.layerUpdates.size>0){let it=Pg(Y.width,Y.height,S.format,S.type);for(let Et of S.layerUpdates){let Ft=Y.data.subarray(Et*it/Y.data.BYTES_PER_ELEMENT,(Et+1)*it/Y.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Et,Y.width,Y.height,1,ot,C,Ft)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ot,C,Y.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,J,Y.width,Y.height,Y.depth,0,ot,C,Y.data);else if(S.isData3DTexture)st?(rt&&n.texStorage3D(e.TEXTURE_3D,Ht,J,Y.width,Y.height,Y.depth),Tt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ot,C,Y.data)):n.texImage3D(e.TEXTURE_3D,0,J,Y.width,Y.height,Y.depth,0,ot,C,Y.data);else if(S.isFramebufferTexture){if(rt)if(st)n.texStorage2D(e.TEXTURE_2D,Ht,J,Y.width,Y.height);else{let it=Y.width,Et=Y.height;for(let Ft=0;Ft<Ht;Ft++)n.texImage2D(e.TEXTURE_2D,Ft,J,it,Et,0,ot,C,null),it>>=1,Et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let it=e.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),Y.parentNode!==it){it.appendChild(Y),d.add(S),it.onpaint=Et=>{let Ft=Et.changedElements;for(let dt of d)Ft.includes(dt.image)&&(dt.needsUpdate=!0)},it.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Y);else{let Ft=e.RGBA,dt=e.RGBA,oe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Ft,dt,oe,Y)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&rt){let it=Ut(lt[0]);n.texStorage2D(e.TEXTURE_2D,Ht,J,it.width,it.height)}for(let it=0,Et=lt.length;it<Et;it++)V=lt[it],st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,ot,C,V):n.texImage2D(e.TEXTURE_2D,it,J,ot,C,V);S.generateMipmaps=!1}else if(st){if(rt){let it=Ut(Y);n.texStorage2D(e.TEXTURE_2D,Ht,J,it.width,it.height)}Tt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot,C,Y)}else n.texImage2D(e.TEXTURE_2D,0,J,ot,C,Y);y(S)&&S.mipmapsAutoUpdate===!0&&x(et),ut.__version=at.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Nn(A,S,P){if(S.image.length!==6)return;let et=fe(A,S),j=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+P);let at=i.get(j);if(j.version!==at.__version||et===!0){n.activeTexture(e.TEXTURE0+P);let ut=Jt.getPrimaries(Jt.workingColorSpace),W=S.colorSpace===Fi?null:Jt.getPrimaries(S.colorSpace),Y=S.colorSpace===Fi||ut===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ot=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,J=[];for(let dt=0;dt<6;dt++)!ot&&!C?J[dt]=m(S.image[dt],!0,s.maxCubemapSize):J[dt]=C?S.image[dt].image:S.image[dt],J[dt]=wt(S,J[dt]);let V=J[0],lt=a.convert(S.format,S.colorSpace),st=a.convert(S.type),rt=w(S.internalFormat,lt,st,S.normalized,S.colorSpace),Tt=S.isVideoTexture!==!0,Ht=at.__version===void 0||et===!0,it=j.dataReady,Et=b(S,V);re(e.TEXTURE_CUBE_MAP,S);let Ft;if(S.isDepthTexture){if(rt=_(S.format===Bs,S.type),Ht)if(Tt)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,rt,V.width,V.height);else for(let dt=0;dt<6;dt++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,rt,V.width,V.height,0,lt,st,null)}else if(ot){Tt&&Ht&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Et,rt,V.width,V.height);for(let dt=0;dt<6;dt++){Ft=J[dt].mipmaps;for(let oe=0;oe<Ft.length;oe++){let Ze=Ft[oe];S.format!==zi?lt!==null?Tt?it&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe,0,0,Ze.width,Ze.height,lt,Ze.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe,rt,Ze.width,Ze.height,0,Ze.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe,0,0,Ze.width,Ze.height,lt,st,Ze.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe,rt,Ze.width,Ze.height,0,lt,st,Ze.data)}}}else{if(Ft=S.mipmaps,Tt&&Ht){Ft.length>0&&Et++;let dt=Ut(J[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Et,rt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(C){Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,J[dt].width,J[dt].height,lt,st,J[dt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,rt,J[dt].width,J[dt].height,0,lt,st,J[dt].data);for(let oe=0;oe<Ft.length;oe++){let zs=Ft[oe].image[dt].image;Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe+1,0,0,zs.width,zs.height,lt,st,zs.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe+1,rt,zs.width,zs.height,0,lt,st,zs.data)}}else{Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,lt,st,J[dt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,rt,lt,st,J[dt]);for(let oe=0;oe<Ft.length;oe++){let Ze=Ft[oe];Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe+1,0,0,lt,st,Ze.image[dt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,oe+1,rt,lt,st,Ze.image[dt])}}}y(S)&&S.mipmapsAutoUpdate===!0&&x(e.TEXTURE_CUBE_MAP),at.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function we(A,S,P,et,j,at){let ut=a.convert(P.format,P.colorSpace),W=a.convert(P.type),Y=w(P.internalFormat,ut,W,P.normalized,P.colorSpace),ot=i.get(S),C=i.get(P);if(C.__renderTarget=S,!ot.__hasExternalTextures){let J=Math.max(1,S.width>>at),V=Math.max(1,S.height>>at);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,at,Y,J,V,S.depth,0,ut,W,null):n.texImage2D(j,at,Y,J,V,0,ut,W,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),ft(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,et,j,C.__webglTexture,0,Te(S)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,et,j,C.__webglTexture,at),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Hi(A,S,P){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){let et=S.depthTexture,j=et&&et.isDepthTexture?et.type:null,at=_(S.stencilBuffer,j),ut=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ft(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(S),at,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(S),at,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,at,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ut,e.RENDERBUFFER,A)}else{let et=S.textures;for(let j=0;j<et.length;j++){let at=et[j],ut=a.convert(at.format,at.colorSpace),W=a.convert(at.type),Y=w(at.internalFormat,ut,W,at.normalized,at.colorSpace);ft(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(S),Y,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(S),Y,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Y,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ye(A,S,P){let et=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(S.depthTexture);j.__renderTarget=S;let at=et?S.depthTexture.image[0]:S.depthTexture.image;(!j.__webglTexture||at.width!==S.width||at.height!==S.height)&&(at.width=S.width,at.height=S.height,S.depthTexture.needsUpdate=!0),et?gt(S.depthTexture,0):mt(S.depthTexture,0);let ut=j.__webglTexture,W=Te(S),Y=et?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,ot=S.depthTexture.format===Bs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Is)ft(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ot,Y,ut,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,ot,Y,ut,0);else if(S.depthTexture.format===Bs)ft(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ot,Y,ut,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,ot,Y,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ai(A){let S=i.get(A),P=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let et=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),et){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,et.removeEventListener("dispose",j)};et.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=et}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(P)for(let et=0;et<6;et++)Ye(S.__webglFramebuffer[et],A,et);else A.texture.mipmaps.length>0?Ye(S.__webglFramebuffer[0],A,0):Ye(S.__webglFramebuffer,A,0);else if(P){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]===void 0)S.__webglDepthbuffer[et]=e.createRenderbuffer(),Hi(S.__webglDepthbuffer[et],A,!1);else{let j=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[et];e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,at)}}else if(A.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Hi(S.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,at)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ri(A,S,P){let et=i.get(A);S!==void 0&&we(et.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&ai(A)}function oi(A){let S=A.texture,P=i.get(A),et=i.get(S);A.addEventListener("dispose",z),O(A);let j=A.textures,at=A.isWebGLCubeRenderTarget===!0,ut=j.length>1;if(ut||(et.__webglTexture===void 0&&(et.__webglTexture=e.createTexture()),et.__version=S.version,r.memory.textures++),at){P.__webglFramebuffer=[];for(let W=0;W<6;W++)if(S.mipmaps.length>0){P.__webglFramebuffer[W]=[];for(let Y=0;Y<S.mipmaps.length;Y++)P.__webglFramebuffer[W][Y]=e.createFramebuffer()}else P.__webglFramebuffer[W]=e.createFramebuffer()}else{if(S.mipmaps.length>0){P.__webglFramebuffer=[];for(let W=0;W<S.mipmaps.length;W++)P.__webglFramebuffer[W]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(ut)for(let W=0,Y=j.length;W<Y;W++){let ot=i.get(j[W]);ot.__webglTexture===void 0&&(ot.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&ft(A)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let W=0;W<j.length;W++){let Y=j[W];P.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[W]);let ot=a.convert(Y.format,Y.colorSpace),C=a.convert(Y.type),J=w(Y.internalFormat,ot,C,Y.normalized,Y.colorSpace,A.isXRRenderTarget===!0),V=Te(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,V,J,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,P.__webglColorRenderbuffer[W])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Hi(P.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(at){n.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),re(e.TEXTURE_CUBE_MAP,S);for(let W=0;W<6;W++)if(S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)we(P.__webglFramebuffer[W][Y],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y);else we(P.__webglFramebuffer[W],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);y(S)?x(e.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}else if(ut){for(let W=0,Y=j.length;W<Y;W++){let ot=j[W],C=i.get(ot),J=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(J,C.__webglTexture),re(J,ot),we(P.__webglFramebuffer,A,ot,e.COLOR_ATTACHMENT0+W,J,0),y(ot)&&x(J)}n.unbindTexture()}else{let W=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(W=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(W,et.__webglTexture),re(W,S),S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)we(P.__webglFramebuffer[Y],A,S,e.COLOR_ATTACHMENT0,W,Y);else we(P.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,W,0);y(S)?x(W):S.mipmaps.length>0&&e.texParameteri(W,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}A.depthBuffer&&ai(A)}function L(A){let S=A.textures;for(let P=0,et=S.length;P<et;P++){let j=S[P];if(y(j)&&j.mipmapsAutoUpdate===!0){let at=E(A),ut=i.get(j).__webglTexture;n.bindTexture(at,ut),x(at),n.unbindTexture()}}}let li=[];function be(A){if(A.samples>0){if(ft(A)===!1){let S=A.textures,P=A.width,et=A.height,j=e.COLOR_BUFFER_BIT,at=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=i.get(A),W=S.length>1;if(W)for(let ot=0;ot<S.length;ot++)n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ot=0;ot<S.length;ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ut.__webglColorRenderbuffer[ot]);let C=i.get(S[ot]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,C,0)}e.blitFramebuffer(0,0,P,et,0,0,P,et,j,e.NEAREST),l===!0&&(li.length=0,li.push(e.COLOR_ATTACHMENT0+ot),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&li.push(at),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,li))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let ot=0;ot<S.length;ot++){n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,ut.__webglColorRenderbuffer[ot]);let C=i.get(S[ot]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,C,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Te(A){return Math.min(s.maxSamples,A.samples)}function ft(A){let S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ge(A){let S=r.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function wt(A,S){let P=A.colorSpace,et=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||P!==fr&&P!==Fi&&(Jt.getTransfer(P)===ae?(et!==zi||j!==ii)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",P)),S}function Ut(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=It,this.resetTextureUnits=$,this.getTextureUnits=tt,this.setTextureUnits=Mt,this.setTexture2D=mt,this.setTexture2DArray=yt,this.setTexture3D=At,this.setTextureCube=gt,this.rebindTextures=ri,this.setupRenderTarget=oi,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ai,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ft,this.dispose=X}function PN(e,t){function n(i,s=Fi){let a,r=Jt.getTransfer(s);if(i===ii)return e.UNSIGNED_BYTE;if(i===Bf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===zf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Sg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Mg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===yg)return e.BYTE;if(i===xg)return e.SHORT;if(i===Zo)return e.UNSIGNED_SHORT;if(i===Pf)return e.INT;if(i===Ii)return e.UNSIGNED_INT;if(i===Pi)return e.FLOAT;if(i===Bi)return e.HALF_FLOAT;if(i===bg)return e.ALPHA;if(i===Tg)return e.RGB;if(i===zi)return e.RGBA;if(i===Is)return e.DEPTH_COMPONENT;if(i===Bs)return e.DEPTH_STENCIL;if(i===Eg)return e.RED;if(i===Ff)return e.RED_INTEGER;if(i===Na)return e.RG;if(i===Hf)return e.RG_INTEGER;if(i===Gf)return e.RGBA_INTEGER;if(i===Ec||i===Ac||i===wc||i===Rc)if(r===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ec)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ec)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ac)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vf||i===kf||i===Xf||i===Wf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Vf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qf||i===Yf||i===Zf||i===Jf||i===Kf||i===Cc||i===Qf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===qf||i===Yf)return r===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Zf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jf)return a.COMPRESSED_R11_EAC;if(i===Kf)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Cc)return a.COMPRESSED_RG11_EAC;if(i===Qf)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jf||i===$f||i===td||i===ed||i===nd||i===id||i===sd||i===ad||i===rd||i===od||i===ld||i===cd||i===ud||i===hd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===jf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$f)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===td)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ed)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===id)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ad)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===od)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ld)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ud)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fd||i===dd||i===pd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===fd)return r===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===md||i===gd||i===Nc||i===_d)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===md)return a.COMPRESSED_RED_RGTC1_EXT;if(i===gd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_d)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var BN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Kg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new vc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ei({vertexShader:BN,fragmentShader:zN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qg=class extends rs{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,v=null,T=typeof XRWebGLBinding!="undefined",g=new Kg,f={},m=n.getContextAttributes(),y=null,x=null,E=[],w=[],_=new Qt,b=null,O=null,R=new jn;R.viewport=new Me;let U=new jn;U.viewport=new Me;let z=[R,U],q=new Nf,D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let mt=E[Z];return mt===void 0&&(mt=new Fo,E[Z]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Z){let mt=E[Z];return mt===void 0&&(mt=new Fo,E[Z]=mt),mt.getGripSpace()},this.getHand=function(Z){let mt=E[Z];return mt===void 0&&(mt=new Fo,E[Z]=mt),mt.getHandSpace()};function K(Z){let mt=w.indexOf(Z.inputSource);if(mt===-1)return;let yt=E[mt];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,c||r),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<E.length;Z++){let mt=w[Z];mt!==null&&(w[Z]=null,E[Z].disconnect(mt))}D=null,X=null,g.reset();for(let Z in f)delete f[Z];if(t.setRenderTarget(y),p=null,u=null,d=null,s=null,x=null,It.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),O!==null){let Z=O.camera;Z.fov=O.fov,Z.zoom=O.zoom,Z.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&T&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,gt=null;m.depth&&(gt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=m.stencil?Bs:Is,At=m.stencil?yr:Ii);let Bt={colorFormat:n.RGBA8,depthFormat:gt,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new $n(u.textureWidth,u.textureHeight,{format:zi,type:ii,depthTexture:new Ps(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new $n(p.framebufferWidth,p.framebufferHeight,{format:zi,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),It.setContext(s),It.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(Z){for(let mt=0;mt<Z.removed.length;mt++){let yt=Z.removed[mt],At=w.indexOf(yt);At>=0&&(w[At]=null,E[At].disconnect(yt))}for(let mt=0;mt<Z.added.length;mt++){let yt=Z.added[mt],At=w.indexOf(yt);if(At===-1){for(let Bt=0;Bt<E.length;Bt++)if(Bt>=w.length){w.push(yt),At=Bt;break}else if(w[Bt]===null){w[Bt]=yt,At=Bt;break}if(At===-1)break}let gt=E[At];gt&&gt.connect(yt)}}function k(Z,mt){mt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(mt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let mt=Z.near,yt=Z.far;g.texture!==null&&(g.depthNear>0&&(mt=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),q.near=U.near=R.near=mt,q.far=U.far=R.far=yt,(D!==q.near||X!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),D=q.near,X=q.far),q.layers.mask=Z.layers.mask|6,R.layers.mask=q.layers.mask&-5,U.layers.mask=q.layers.mask&-3;let At=Z.parent,gt=q.cameras;k(q,At);for(let Bt=0;Bt<gt.length;Bt++)k(gt[Bt],At);q.projectionMatrix.copy(R.projectionMatrix),q.projectionMatrixInverse.copy(R.projectionMatrixInverse),O===null&&Z.isPerspectiveCamera&&(O={camera:Z,fov:Z.fov,zoom:Z.zoom}),$(Z,q,At)};function $(Z,mt,yt){yt===null?Z.matrix.copy(mt.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(mt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=cf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(Z){return f[Z]};let tt=null;function Mt(Z,mt){if(h=mt.getViewerPose(c||r),v=mt,h!==null){let yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let At=!1;yt.length!==q.cameras.length&&(q.cameras.length=0,At=!0);for(let Rt=0;Rt<yt.length;Rt++){let re=yt[Rt],fe=null;if(p!==null)fe=p.getViewport(re);else{let sn=d.getViewSubImage(u,re);fe=sn.viewport,Rt===0&&(t.setRenderTargetTextures(x,sn.colorTexture,sn.depthStencilTexture),t.setRenderTarget(x))}let Wt=z[Rt];Wt===void 0&&(Wt=new jn,Wt.layers.enable(Rt),Wt.viewport=new Me,z[Rt]=Wt),Wt.matrix.fromArray(re.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(re.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(fe.x,fe.y,fe.width,fe.height),Rt===0&&(q.matrix.copy(Wt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),At===!0&&q.cameras.push(Wt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){d=i.getBinding();let Rt=d.getDepthInformation(yt[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(Rt,s.renderState)}if(gt&&gt.includes("camera-access")&&T){t.state.unbindTexture(),d=i.getBinding();for(let Rt=0;Rt<yt.length;Rt++){let re=yt[Rt].camera;if(re){let fe=f[re];fe||(fe=new vc,f[re]=fe);let Wt=d.getCameraImage(re);fe.sourceTexture=Wt}}}}for(let yt=0;yt<E.length;yt++){let At=w[yt],gt=E[yt];At!==null&&gt!==void 0&&gt.update(At,mt,c||r)}tt&&tt(Z,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),v=null}let It=new mb;It.setAnimationLoop(Mt),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}},FN=new Ne,Eb=new Lt;Eb.set(-1,0,0,0,1,0,0,0,1);function HN(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Ug(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,m,y,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(g,f):f.isMeshLambertMaterial?(a(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(g,f),d(g,f)):f.isMeshPhongMaterial?(a(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,x)):f.isMeshMatcapMaterial?(a(g,f),v(g,f)):f.isMeshDepthMaterial?a(g,f):f.isMeshDistanceMaterial?(a(g,f),T(g,f)):f.isMeshNormalMaterial?a(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,y):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Cn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Cn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let m=t.get(f),y=m.envMap,x=m.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(FN.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Eb),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=y*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.diffuseRoughness>0&&(g.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=f.diffuseRoughnessMap,n(f.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Cn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function T(g,f){let m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function GN(e,t,n,i){let s={},a={};function r(m,y){let x=y.program;i.uniformBlockBinding(m,x,s[m.id])}function o(m,y){let x=s[m.id];x===void 0&&(v(m),x=l(m),s[m.id]=x,m.addEventListener("dispose",g));let E=y.program;i.updateUBOMapping(m,E);let w=t.render.frame;a[m.id]!==w&&(c(m),a[m.id]=w)}function l(m){let y=e.createBuffer(),x=m.__size,E=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,x,E),e.bindBuffer(e.UNIFORM_BUFFER,null),y}function c(m){let y=s[m.id],x=m.uniforms,E=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let w=0,_=x.length;w<_;w++){let b=x[w];if(Array.isArray(b))for(let O=0,R=b.length;O<R;O++)h(b[O],w,O,E);else h(b,w,0,E)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(m,y,x,E){if(u(m,y,x,E)===!0){let w=m.__offset,_=m.value;if(Array.isArray(_)){let b=0;for(let O=0;O<_.length;O++){let R=_[O],U=T(R,!0);d(R,m.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,w,m.__data)}}function d(m,y,x){typeof m=="number"||typeof m=="boolean"?y[x]=m:m.isMatrix3?(y[x]=m.elements[0],y[x+1]=m.elements[1],y[x+2]=m.elements[2],y[x+3]=0,y[x+4]=m.elements[3],y[x+5]=m.elements[4],y[x+6]=m.elements[5],y[x+7]=0,y[x+8]=m.elements[6],y[x+9]=m.elements[7],y[x+10]=m.elements[8],y[x+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-x),x):m.toArray(y,x)}function u(m,y,x,E){let w=m.value,_=y+"_"+x;if(Array.isArray(w)){E[_]===void 0&&(E[_]=[]);let b=E[_],O=!1;for(let R=0;R<w.length;R++)p(w[R],b,R)===!0&&(O=!0);return O}return p(w,E,_)}function p(m,y,x){if(y[x]===void 0)return typeof m=="number"||typeof m=="boolean"?y[x]=m:ArrayBuffer.isView(m)?y[x]=m.slice():y[x]=m.clone(),!0;{let E=y[x];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return y[x]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function v(m){let y=m.uniforms,x=0,E=16;for(let _=0,b=y.length;_<b;_++){let O=Array.isArray(y[_])?y[_]:[y[_]];for(let R=0,U=O.length;R<U;R++){let z=O[R],q=Array.isArray(z.value)?z.value:[z.value],D=Array.isArray(y[_])||Array.isArray(z.value),X=x;for(let G=0,nt=q.length;G<nt;G++){let k=q[G],$=T(k,D),tt=x%E,Mt=tt%$.boundary,It=tt+Mt;x+=Mt,It!==0&&E-It<$.storage&&(x+=E-It),G===0&&(X=x),x+=$.storage}let K=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new K((x-X)/Float32Array.BYTES_PER_ELEMENT),z.__offset=X}}let w=x%E;return w>0&&(x+=E-w),m.__size=x,m.__cache={},this}function T(m,y){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=16,x.storage=48):m.isMatrix4?(x.boundary=16,x.storage=64):m.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function g(m){let y=m.target;y.removeEventListener("dispose",g),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function f(){for(let m in s)e.deleteBuffer(s[m]);s={},a={}}return{bind:r,update:o,dispose:f}}var VN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),us=null;function kN(){return us===null&&(us=new pf(VN,16,16,Na,Bi),us.name="DFG_LUT",us.minFilter=dn,us.magFilter=dn,us.wrapS=ss,us.wrapT=ss,us.generateMipmaps=!1,us.needsUpdate=!0),us}var Sd=class{constructor(t={}){let{canvas:n=FM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ii}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let T=p,g=new Set([Gf,Hf,Ff]),f=new Set([ii,Ii,Zo,yr,Bf,zf]),m=new Uint32Array(4),y=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},E=null,w=null,_=[],b=[],O=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,z=null,q=null,D=null,X=null;this._outputColorSpace=Qn;let K=0,G=0,nt=null,k=-1,$=null,tt=new Me,Mt=new Me,It=null,Z=new jt(0),mt=0,yt=n.width,At=n.height,gt=1,Bt=null,Oe=null,Rt=new Me(0,0,yt,At),re=new Me(0,0,yt,At),fe=!1,Wt=new pr,sn=new mf,He=!1,Nn=!1,we=new Ne,Hi=new F,Ye=new Me,ai={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ri=!1;function oi(){return nt===null?gt:1}let L=i;function li(M,N){return n.getContext(M,N)}let be,Te,ft,Ge,wt,Ut,A,S,P,et,j,at,ut,W,Y,ot,C,J,V,lt,st,rt,Tt;try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",Ft,!1),n.addEventListener("webglcontextcreationerror",dt,!1),L===null){let N="webgl2";if(L=li(N,M),L===null)throw li(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(M){throw n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),Dt("WebGLRenderer: "+M.message),M}function Ht(){be=new tC(L),be.init(),st=new PN(L,be),Te=new kR(L,be,t,st),ft=new ON(L,be),Te.reversedDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),q=L.createFramebuffer(),D=L.createFramebuffer(),X=L.createFramebuffer(),Ge=new iC(L),wt=new xN,Ut=new IN(L,be,ft,wt,Te,st,Ge),A=new $R(R),S=new a2(L),rt=new GR(L,S),P=new eC(L,S,Ge,rt),et=new aC(L,P,S,rt,Ge),J=new sC(L,Te,Ut),Y=new XR(wt),j=new yN(R,A,be,Te,rt,Y),at=new HN(R,wt),ut=new MN,W=new RN(be),C=new HR(R,A,ft,et,v,l),ot=new UN(R,et,Te),Tt=new GN(L,Ge,Te,ft),V=new VR(L,be,Ge),lt=new nC(L,be,Ge),Ge.programs=j.programs,R.capabilities=Te,R.extensions=be,R.properties=wt,R.renderLists=ut,R.shadowMap=ot,R.state=ft,R.info=Ge}T!==ii&&(O=new oC(T,n.width,n.height,o,s,a));let it=new Qg(R,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=be.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=be.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(M){M!==void 0&&(gt=M,this.setSize(yt,At,!1))},this.getSize=function(M){return M.set(yt,At)},this.setSize=function(M,N,H=!0){if(it.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=M,At=N,n.width=Math.floor(M*gt),n.height=Math.floor(N*gt),H===!0&&(n.style.width=M+"px",n.style.height=N+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(yt*gt,At*gt).floor()},this.setDrawingBufferSize=function(M,N,H){yt=M,At=N,gt=H,n.width=Math.floor(M*H),n.height=Math.floor(N*H),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(T===ii){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(tt)},this.getViewport=function(M){return M.copy(Rt)},this.setViewport=function(M,N,H,I){M.isVector4?Rt.set(M.x,M.y,M.z,M.w):Rt.set(M,N,H,I),ft.viewport(tt.copy(Rt).multiplyScalar(oi()).round())},this.getScissor=function(M){return M.copy(re)},this.setScissor=function(M,N,H,I){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,N,H,I),ft.scissor(Mt.copy(re).multiplyScalar(oi()).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(M){ft.setScissorTest(fe=M)},this.setOpaqueSort=function(M){Bt=M},this.setTransparentSort=function(M){Oe=M},this.getClearColor=function(M){return M.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,H=!0){let I=0;if(M){let B=!1;if(nt!==null){let ht=nt.texture.format;B=g.has(ht)}if(B){let ht=nt.texture.type,vt=f.has(ht),ct=C.getClearColor(),_t=C.getClearAlpha(),bt=ct.r,Pt=ct.g,qt=ct.b;vt?(m[0]=bt,m[1]=Pt,m[2]=qt,m[3]=_t,L.clearBufferuiv(L.COLOR,0,m)):(y[0]=bt,y[1]=Pt,y[2]=qt,y[3]=_t,L.clearBufferiv(L.COLOR,0,y))}else I|=L.COLOR_BUFFER_BIT}N&&(I|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(I|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I!==0&&L.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),C.dispose(),ut.dispose(),W.dispose(),Ut.dispose(),wt.dispose(),A.dispose(),et.dispose(),P.dispose(),rt.dispose(),Tt.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",r_),it.removeEventListener("sessionend",o_),La.stop()};function Et(M){M.preventDefault(),Dg("WebGLRenderer: Context Lost."),U=!0}function Ft(){Dg("WebGLRenderer: Context Restored."),U=!1;let M=Ge.autoReset,N=ot.enabled,H=ot.autoUpdate,I=ot.needsUpdate,B=ot.type;Ht(),Ge.autoReset=M,ot.enabled=N,ot.autoUpdate=H,ot.needsUpdate=I,ot.type=B}function dt(M){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){let N=M.target;N.removeEventListener("dispose",oe),Ze(N)}function Ze(M){zs(M),wt.remove(M)}function zs(M){let N=wt.get(M).programs;N!==void 0&&(N.forEach(function(H){j.releaseProgram(H)}),M.isShaderMaterial&&j.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,H,I,B,ht){N===null&&(N=ai);let vt=B.isMesh&&B.matrixWorld.determinantAffine()<0,ct=Vb(M,N,H,I,B);ft.setMaterial(I,vt);let _t=H.index,bt=1;if(I.wireframe===!0){if(_t=P.getWireframeAttribute(H),_t===void 0)return;bt=2}let Pt=H.drawRange,qt=H.attributes.position,xt=Pt.start*bt,Yt=(Pt.start+Pt.count)*bt;ht!==null&&(xt=Math.max(xt,ht.start*bt),Yt=Math.min(Yt,(ht.start+ht.count)*bt)),_t!==null?(xt=Math.max(xt,0),Yt=Math.min(Yt,_t.count)):qt!=null&&(xt=Math.max(xt,0),Yt=Math.min(Yt,qt.count));let Ie=Yt-xt;if(Ie<0||Ie===1/0)return;rt.setup(B,I,ct,H,_t);let ge,de=V;if(_t!==null&&(ge=S.get(_t),de=lt,de.setIndex(ge)),B.isMesh)I.wireframe===!0?(ft.setLineWidth(I.wireframeLinewidth*oi()),de.setMode(L.LINES)):de.setMode(L.TRIANGLES);else if(B.isLine){let pn=I.linewidth;pn===void 0&&(pn=1),ft.setLineWidth(pn*oi()),B.isLineSegments?de.setMode(L.LINES):B.isLineLoop?de.setMode(L.LINE_LOOP):de.setMode(L.LINE_STRIP)}else B.isPoints?de.setMode(L.POINTS):B.isSprite&&de.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(be.get("WEBGL_multi_draw"))de.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let pn=B._multiDrawStarts,St=B._multiDrawCounts,Mn=B._multiDrawCount,ee=_t?S.get(_t).bytesPerElement:1,Ua=wt.get(I).currentProgram.getUniforms();for(let mn=0;mn<Mn;mn++)Ua.setValue(L,"_gl_DrawID",mn),de.render(pn[mn]/ee,St[mn])}else if(B.isInstancedMesh)de.renderInstances(xt,Ie,B.count);else if(H.isInstancedBufferGeometry){let pn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,St=Math.min(H.instanceCount,pn);de.renderInstances(xt,Ie,St)}else de.render(xt,Ie)};function a_(M,N,H,I){z!==null&&M.isNodeMaterial&&z.setObject(I,M),He===!0&&Y.setState(M,H,!1),M.transparent===!0&&M.side===ls&&M.forceSinglePass===!1?(M.side=Cn,M.needsUpdate=!0,Qo(M,N,I),M.side=Ca,M.needsUpdate=!0,Qo(M,N,I),M.side=ls):Qo(M,N,I)}this.compile=function(M,N,H=null){H===null&&(H=M),z!==null&&z.renderStart(M,N,H),w=W.get(H),w.init(N),b.push(w),H.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(w.pushLight(B),B.castShadow&&w.pushShadow(B))}),M!==H&&M.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(w.pushLight(B),B.castShadow&&w.pushShadow(B))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),Nn=this.localClippingEnabled,He=Y.init(this.clippingPlanes,Nn),He===!0&&Y.setGlobalState(this.clippingPlanes,N),z!==null&&ot.render(w.state.shadowsArray,H,N);let I=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ht=B.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){let ct=ht[vt];a_(ct,H,N,B),I.add(ct)}else a_(ht,H,N,B),I.add(ht)}),w=b.pop(),z!==null&&z.renderEnd(),I},this.compileAsync=function(M,N,H=null){let I=this.compile(M,N,H);return new Promise(B=>{function ht(){if(I.forEach(function(vt){let _t=wt.get(vt).currentProgram;(_t===void 0||_t.isReady())&&I.delete(vt)}),I.size===0){B(M);return}setTimeout(ht,10)}be.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Ad=null;function Hb(M){Ad&&Ad(M)}function r_(){La.stop()}function o_(){La.start()}let La=new mb;La.setAnimationLoop(Hb),typeof self!="undefined"&&La.setContext(self),this.setAnimationLoop=function(M){Ad=M,it.setAnimationLoop(M),M===null?La.stop():La.start()},it.addEventListener("sessionstart",r_),it.addEventListener("sessionend",o_),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(M,N);let H=it.enabled===!0&&it.isPresenting===!0,I=O!==null&&(nt===null||H)&&O.begin(R,nt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(N),N=it.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,N,nt),w=W.get(M,b.length),w.init(N),w.state.textureUnits=Ut.getTextureUnits(),b.push(w),we.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?sn.setFromArrayCamera(N):Wt.setFromProjectionMatrix(we,xi,N.reversedDepth),Nn=this.localClippingEnabled,He=Y.init(this.clippingPlanes,Nn),E=ut.get(M,_.length),E.init(),_.push(E),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let vt=R.xr.getDepthSensingMesh();vt!==null&&wd(vt,N,-1/0,R.sortObjects)}wd(M,N,0,R.sortObjects),E.finish(),z!==null&&z.updateLights(w.state.lightsArray),R.sortObjects===!0&&E.sort(Bt,Oe),ri=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ri&&C.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),He===!0&&Y.beginShadows();let B=w.state.shadowsArray;if(ot.render(B,M,N),He===!0&&Y.endShadows(),(I&&O.hasRenderPass())===!1){let vt=E.opaque,ct=E.transmissive;if(w.setupLights(),N.isArrayCamera){let _t=N.cameras;if(ct.length>0)for(let bt=0,Pt=_t.length;bt<Pt;bt++){let qt=_t[bt];c_(vt,ct,M,qt)}ri&&C.render(M);for(let bt=0,Pt=_t.length;bt<Pt;bt++){let qt=_t[bt];l_(E,M,qt,qt.viewport)}}else ct.length>0&&c_(vt,ct,M,N),ri&&C.render(M),l_(E,M,N)}nt!==null&&G===0&&(Ut.updateMultisampleRenderTarget(nt),Ut.updateRenderTargetMipmap(nt)),I&&O.end(R),M.isScene===!0&&M.onAfterRender(R,M,N),rt.resetDefaultState(),k=-1,$=null,b.pop(),b.length>0?(w=b[b.length-1],Ut.setTextureUnits(w.state.textureUnits),He===!0&&Y.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,z!==null&&z.renderEnd()};function wd(M,N,H,I){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){let vt=N.isArrayCamera?sn:Wt;if(!M.frustumCulled||M.intersectsFrustum(vt)){I&&Ye.setFromMatrixPosition(M.matrixWorld).applyMatrix4(we);let ct=et.update(M),_t=M.material;_t.visible&&E.push(M,ct,_t,H,Ye.z,null,N)}}else if(M.isMesh||M.isLine||M.isPoints){let vt=N.isArrayCamera?sn:Wt;if(!M.frustumCulled||M.intersectsFrustum(vt)){let ct=et.update(M),_t=M.material;if(I&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ye.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ye.copy(ct.boundingSphere.center)),Ye.applyMatrix4(M.matrixWorld).applyMatrix4(we)),Array.isArray(_t)){let bt=ct.groups;for(let Pt=0,qt=bt.length;Pt<qt;Pt++){let xt=bt[Pt],Yt=_t[xt.materialIndex];Yt&&Yt.visible&&E.push(M,ct,Yt,H,Ye.z,xt,N)}}else _t.visible&&E.push(M,ct,_t,H,Ye.z,null,N)}}}let ht=M.children;for(let vt=0,ct=ht.length;vt<ct;vt++)wd(ht[vt],N,H,I)}function l_(M,N,H,I){let{opaque:B,transmissive:ht,transparent:vt}=M;w.setupLightsView(H),He===!0&&Y.setGlobalState(R.clippingPlanes,H),I&&ft.viewport(tt.copy(I)),B.length>0&&Fc(B,N,H),ht.length>0&&Fc(ht,N,H),vt.length>0&&Fc(vt,N,H),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function c_(M,N,H,I){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[I.id]===void 0){let xt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[I.id]=new $n(1,1,{generateMipmaps:!0,type:xt?Bi:ii,minFilter:Oi,samples:Math.max(4,Te.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let ht=w.state.transmissionRenderTarget[I.id],vt=I.viewport||tt;ht.setSize(vt.z*R.transmissionResolutionScale,vt.w*R.transmissionResolutionScale);let ct=R.getRenderTarget(),_t=R.getActiveCubeFace(),bt=R.getActiveMipmapLevel();R.setRenderTarget(ht),R.getClearColor(Z),mt=R.getClearAlpha(),mt<1&&R.setClearColor(16777215,.5),R.clear(),ri&&C.render(H);let Pt=R.toneMapping;R.toneMapping=cs;let qt=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),w.setupLightsView(I),He===!0&&Y.setGlobalState(R.clippingPlanes,I),Fc(M,H,I),Ut.updateMultisampleRenderTarget(ht),Ut.updateRenderTargetMipmap(ht),be.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Yt=0,Ie=N.length;Yt<Ie;Yt++){let ge=N[Yt],{object:de,geometry:pn,material:St,group:Mn}=ge;if(St.side===ls&&de.layers.test(I.layers)){let ee=St.side;St.side=Cn,St.needsUpdate=!0,u_(de,H,I,pn,St,Mn),St.side=ee,St.needsUpdate=!0,xt=!0}}xt===!0&&(Ut.updateMultisampleRenderTarget(ht),Ut.updateRenderTargetMipmap(ht))}R.setRenderTarget(ct,_t,bt),R.setClearColor(Z,mt),qt!==void 0&&(I.viewport=qt),R.toneMapping=Pt}function Fc(M,N,H){let I=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ht=M.length;B<ht;B++){let vt=M[B],{object:ct,geometry:_t,group:bt}=vt,Pt=vt.material;Pt.allowOverride===!0&&I!==null&&(Pt=I),ct.layers.test(H.layers)&&u_(ct,N,H,_t,Pt,bt)}}function u_(M,N,H,I,B,ht){z!==null&&B.isNodeMaterial&&z.setObject(M,B),M.onBeforeRender(R,N,H,I,B,ht),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(R,N,H,I,M,ht),B.transparent===!0&&B.side===ls&&B.forceSinglePass===!1?(B.side=Cn,B.needsUpdate=!0,R.renderBufferDirect(H,N,I,B,M,ht),B.side=Ca,B.needsUpdate=!0,R.renderBufferDirect(H,N,I,B,M,ht),B.side=ls):R.renderBufferDirect(H,N,I,B,M,ht),M.onAfterRender(R,N,H,I,B,ht)}function h_(M){let N=0;for(let H of M)H.texture!==null&&N++;return N}function Qo(M,N,H){N.isScene!==!0&&(N=ai);let I=wt.get(M),B=w.state.lights,ht=w.state.shadowsArray,vt=B.state.version,ct=j.getParameters(M,B.state,ht,N,H,w.state.lightProbeGridArray),_t=j.getProgramCacheKey(ct),bt=I.programs;I.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,I.fog=N.fog;let Pt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;I.envMap=A.get(M.envMap||I.environment,Pt),I.envMapRotation=I.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,bt===void 0&&(M.addEventListener("dispose",oe),bt=new Map,I.programs=bt,I.programVariants=new Map);let qt=bt.get(_t);if(qt!==void 0){if(I.currentProgram===qt&&I.lightsStateVersion===vt)return d_(M,ct),qt}else ct.uniforms=j.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,H,ct),M.onBeforeCompile(ct,R),qt=j.acquireProgram(ct,_t),bt.set(_t,qt),I.uniforms=ct.uniforms;let xt=I.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(xt.clippingPlanes=Y.uniform),d_(M,ct),I.needsLights=Xb(M),I.lightsStateVersion=vt,I.needsLights&&(xt.ambientLightColor.value=B.state.ambient,xt.lightProbe.value=B.state.probe,xt.sunLights.value=B.state.sun,xt.sunLightShadows.value=B.state.sunShadow,xt.directionalLights.value=B.state.directional,xt.directionalLightShadows.value=B.state.directionalShadow,xt.spotLights.value=B.state.spot,xt.spotLightShadows.value=B.state.spotShadow,xt.rectAreaLights.value=B.state.rectArea,xt.ltc_1.value=B.state.rectAreaLTC1,xt.ltc_2.value=B.state.rectAreaLTC2,xt.pointLights.value=B.state.point,xt.pointLightShadows.value=B.state.pointShadow,xt.hemisphereLights.value=B.state.hemi,xt.sunShadowMatrix.value=B.state.sunShadowMatrix,xt.sunShadowCascade.value=B.state.sunShadowCascade,xt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,xt.spotLightMatrix.value=B.state.spotLightMatrix,xt.spotLightMap.value=B.state.spotLightMap,xt.pointShadowMatrix.value=B.state.pointShadowMatrix),I.numLightProbeGrids=h_(w.state.lightProbeGridArray),I.currentProgram=qt,I.uniformsList=null,qt}function Gb(M,N,H,I,B){let ht=wt.get(M),vt=ht.currentProgram.id+","+I+","+B,ct=ht.programVariants.get(vt);return ct===void 0?(ct=Qo(M,N,H),ht.programVariants.set(vt,ct)):(ht.currentProgram=ct,ht.uniformsList=null,ht.outputColorSpace=I,ht.toneMapping=B),ct}function f_(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Jo.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function d_(M,N){let H=wt.get(M);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Vb(M,N,H,I,B){N.isScene!==!0&&(N=ai),Ut.resetTextureUnits();let ht=N.fog,vt=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?N.environment:null,ct=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Jt.workingColorSpace,_t=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,bt=A.get(I.envMap||vt,_t),Pt=I.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,qt=!!H.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),xt=!!H.morphAttributes.position,Yt=!!H.morphAttributes.normal,Ie=!!H.morphAttributes.color,ge=cs;I.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ge=R.toneMapping);let de=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pn=de!==void 0?de.length:0,St=wt.get(I),Mn=w.state.lights;if(He===!0&&(Nn===!0||M!==$)){let Re=M===$&&I.id===k;Y.setState(I,M,Re)}let ee=!1,Ua=!1;I.version===St.__version?St.needsLights&&St.lightsStateVersion!==Mn.state.version||B.isBatchedMesh&&St.batching===!1||!B.isBatchedMesh&&St.batching===!0||B.isBatchedMesh&&St.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&St.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&St.instancing===!1||!B.isInstancedMesh&&St.instancing===!0||B.isSkinnedMesh&&St.skinning===!1||!B.isSkinnedMesh&&St.skinning===!0||B.isInstancedMesh&&St.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&St.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&St.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&St.instancingMorph===!1&&B.morphTexture!==null||St.envMap!==bt||I.fog===!0&&St.fog!==ht||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Y.numPlanes||St.numIntersection!==Y.numIntersection)||St.vertexAlphas!==Pt||St.vertexTangents!==qt||St.morphTargets!==xt||St.morphNormals!==Yt||St.morphColors!==Ie||St.morphTargetsCount!==pn||St.numLightProbeGrids!==h_(w.state.lightProbeGridArray)?ee=!0:(St.outputColorSpace!==ct||St.toneMapping!==ge)&&(Ua=!0):(ee=!0,St.__version=I.version);let mn=St.currentProgram;(ee===!0||Ua===!0)&&(mn=Ua===!0?Gb(I,N,B,ct,ge):Qo(I,N,B),z&&I.isNodeMaterial&&z.onUpdateProgram(I,mn,St));let Hc=!1,Fs=!1,Oa=!1,$t=mn.getUniforms(),an=St.uniforms;if(ft.useProgram(mn.program)&&(Hc=!0,Fs=!0,Oa=!0),I.id!==k&&(k=I.id,Fs=!0),Hc||$!==M){ft.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),$t.setValue(L,"projectionMatrix",M.projectionMatrix),$t.setValue(L,"viewMatrix",M.matrixWorldInverse);let Je=$t.map.cameraPosition;Je!==void 0&&Je.setValue(L,Hi.setFromMatrixPosition(M.matrixWorld)),Te.logarithmicDepthBuffer&&$t.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&$t.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,Fs=!0,Oa=!0)}if(St.needsLights&&(Mn.state.sunShadowMap.length>0&&$t.setValue(L,"sunShadowMap",Mn.state.sunShadowMap,Ut),Mn.state.directionalShadowMap.length>0&&$t.setValue(L,"directionalShadowMap",Mn.state.directionalShadowMap,Ut),Mn.state.spotShadowMap.length>0&&$t.setValue(L,"spotShadowMap",Mn.state.spotShadowMap,Ut),Mn.state.pointShadowMap.length>0&&$t.setValue(L,"pointShadowMap",Mn.state.pointShadowMap,Ut)),B.isSkinnedMesh){$t.setOptional(L,B,"bindMatrix"),$t.setOptional(L,B,"bindMatrixInverse");let Re=B.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),$t.setValue(L,"boneTexture",Re.boneTexture,Ut))}B.isBatchedMesh&&($t.setOptional(L,B,"batchingTexture"),$t.setValue(L,"batchingTexture",B._matricesTexture,Ut),$t.setOptional(L,B,"batchingIdTexture"),$t.setValue(L,"batchingIdTexture",B._indirectTexture,Ut),$t.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&$t.setValue(L,"batchingColorTexture",B._colorsTexture,Ut));let Mi=H.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&J.update(B,H,mn),(Fs||St.receiveShadow!==B.receiveShadow)&&(St.receiveShadow=B.receiveShadow,$t.setValue(L,"receiveShadow",B.receiveShadow)),(I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial)&&I.envMap===null&&N.environment!==null&&(an.envMapIntensity.value=N.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=kN()),Fs){if($t.setValue(L,"toneMappingExposure",R.toneMappingExposure),St.needsLights&&kb(an,Oa),ht&&I.fog===!0&&at.refreshFogUniforms(an,ht),at.refreshMaterialUniforms(an,I,gt,At,w.state.transmissionRenderTarget[M.id]),St.needsLights&&St.numLightProbeGrids>0){let Re=x,Je=0;for(let fs of w.state.lightProbeGridArray)fs.texture!==null&&(Re.textures[Je]=fs.texture,Re.min[Je]=fs.boundingBox.min,Re.max[Je]=fs.boundingBox.max,Re.resolution[Je]=fs.resolution,Je++);for(let fs in Re)Re[fs].length=Je;an.probesSH.value=Re.textures,an.probesMin.value=Re.min,an.probesMax.value=Re.max,an.probesResolution.value=Re.resolution}Jo.upload(L,f_(St),an,Ut)}if(I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Jo.upload(L,f_(St),an,Ut),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&$t.setValue(L,"center",B.center),$t.setValue(L,"modelViewMatrix",B.modelViewMatrix),$t.setValue(L,"normalMatrix",B.normalMatrix),$t.setValue(L,"modelMatrix",B.matrixWorld),I.uniformsGroups!==void 0){let Re=I.uniformsGroups;for(let Je=0,fs=Re.length;Je<fs;Je++){let m_=Re[Je];Tt.update(m_,mn),Tt.bind(m_,mn)}}return mn}function kb(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Xb(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(M,N,H){let I=wt.get(M);I.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),wt.get(M.texture).__webglTexture=N,wt.get(M.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:H,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let H=wt.get(M);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,H=0){nt=M,K=N,G=H;let I=null,B=!1,ht=!1;if(M){let ct=wt.get(M);if(ct.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(L.FRAMEBUFFER,ct.__webglFramebuffer),tt.copy(M.viewport),Mt.copy(M.scissor),It=M.scissorTest,ft.viewport(tt),ft.scissor(Mt),ft.setScissorTest(It),k=-1;return}else if(ct.__webglFramebuffer===void 0)Ut.setupRenderTarget(M);else if(ct.__hasExternalTextures)Ut.rebindTextures(M,wt.get(M.texture).__webglTexture,wt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Pt=M.depthTexture;if(ct.__boundDepthTexture!==Pt){if(Pt!==null&&wt.has(Pt)&&(M.width!==Pt.image.width||M.height!==Pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(M)}}let _t=M.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ht=!0);let bt=wt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(bt[N])?I=bt[N][H]:I=bt[N],B=!0):M.samples>0&&Ut.useMultisampledRTT(M)===!1?I=wt.get(M).__webglMultisampledFramebuffer:Array.isArray(bt)?I=bt[H]:I=bt,tt.copy(M.viewport),Mt.copy(M.scissor),It=M.scissorTest}else tt.copy(Rt).multiplyScalar(gt).floor(),Mt.copy(re).multiplyScalar(gt).floor(),It=fe;if(H!==0&&(I=q),ft.bindFramebuffer(L.FRAMEBUFFER,I)&&ft.drawBuffers(M,I),ft.viewport(tt),ft.scissor(Mt),ft.setScissorTest(It),B){let ct=wt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ct.__webglTexture,H)}else if(ht){let ct=N;for(let _t=0;_t<M.textures.length;_t++){let bt=wt.get(M.textures[_t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_t,bt.__webglTexture,H,ct)}}else if(M!==null&&H!==0){let ct=wt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ct.__webglTexture,H)}k=-1};function p_(M){let N=wt.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=Te.textureFormatReadable(M.format),N.__typeReadable=Te.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,H,I,B,ht,vt,ct=0){if(!(M&&M.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt],Array.isArray(_t)&&(_t=_t[0])),_t){ft.bindFramebuffer(L.FRAMEBUFFER,_t);try{let bt=M.textures[ct],Pt=bt.format,qt=bt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let xt=p_(bt);if(xt.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xt.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-I&&H>=0&&H<=M.height-B&&L.readPixels(N,H,I,B,st.convert(Pt),st.convert(qt),ht)}finally{let bt=nt!==null?wt.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(M,N,H,I,B,ht,vt,ct=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt],Array.isArray(_t)&&(_t=_t[0])),_t)if(N>=0&&N<=M.width-I&&H>=0&&H<=M.height-B){ft.bindFramebuffer(L.FRAMEBUFFER,_t);let bt=M.textures[ct],Pt=bt.format,qt=bt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let xt=p_(bt);if(xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Yt),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),L.readPixels(N,H,I,B,st.convert(Pt),st.convert(qt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ie=nt!==null?wt.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(L.FRAMEBUFFER,Ie);let ge=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await GM(L,ge,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Yt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Yt),L.deleteSync(ge),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,H=0){let I=Math.pow(2,-H),B=Math.floor(M.image.width*I),ht=Math.floor(M.image.height*I),vt=N!==null?N.x:0,ct=N!==null?N.y:0;Ut.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,vt,ct,B,ht),ft.unbindTexture()},this.copyTextureToTexture=function(M,N,H=null,I=null,B=0,ht=0){let vt,ct,_t,bt,Pt,qt,xt,Yt,Ie,ge=M.isCompressedTexture?M.mipmaps[ht]:M.image;if(H!==null)vt=H.max.x-H.min.x,ct=H.max.y-H.min.y,_t=H.isBox3?H.max.z-H.min.z:1,bt=H.min.x,Pt=H.min.y,qt=H.isBox3?H.min.z:0;else{let $t=Math.pow(2,-B);vt=Math.floor(ge.width*$t),ct=Math.floor(ge.height*$t),M.isDataArrayTexture?_t=ge.depth:M.isData3DTexture?_t=Math.floor(ge.depth*$t):_t=1,bt=0,Pt=0,qt=0}I!==null?(xt=I.x,Yt=I.y,Ie=I.z):(xt=0,Yt=0,Ie=0);let de=st.convert(N.format),pn=st.convert(N.type),St;N.isData3DTexture?(Ut.setTexture3D(N,0),St=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ut.setTexture2DArray(N,0),St=L.TEXTURE_2D_ARRAY):(Ut.setTexture2D(N,0),St=L.TEXTURE_2D),ft.activeTexture(L.TEXTURE0),ft.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),ft.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ft.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Mn=ft.getParameter(L.UNPACK_ROW_LENGTH),ee=ft.getParameter(L.UNPACK_IMAGE_HEIGHT),Ua=ft.getParameter(L.UNPACK_SKIP_PIXELS),mn=ft.getParameter(L.UNPACK_SKIP_ROWS),Hc=ft.getParameter(L.UNPACK_SKIP_IMAGES);ft.pixelStorei(L.UNPACK_ROW_LENGTH,ge.width),ft.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ge.height),ft.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),ft.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),ft.pixelStorei(L.UNPACK_SKIP_IMAGES,qt);let Fs=M.isDataArrayTexture||M.isData3DTexture,Oa=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let $t=wt.get(M),an=wt.get(N),Mi=wt.get($t.__renderTarget),Re=wt.get(an.__renderTarget);ft.bindFramebuffer(L.READ_FRAMEBUFFER,Mi.__webglFramebuffer),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Je=0;Je<_t;Je++)Fs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.get(M).__webglTexture,B,qt+Je),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.get(N).__webglTexture,ht,Ie+Je)),L.blitFramebuffer(bt,Pt,bt+vt,Pt+ct,xt,Yt,xt+vt,Yt+ct,L.DEPTH_BUFFER_BIT,L.NEAREST);ft.bindFramebuffer(L.READ_FRAMEBUFFER,null),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||wt.has(M)){let $t=wt.get(M),an=wt.get(N);ft.bindFramebuffer(L.READ_FRAMEBUFFER,D),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,X);for(let Mi=0;Mi<_t;Mi++)Fs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$t.__webglTexture,B,qt+Mi):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$t.__webglTexture,B),Oa?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,ht,Ie+Mi):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,ht),B!==0?L.blitFramebuffer(bt,Pt,bt+vt,Pt+ct,xt,Yt,xt+vt,Yt+ct,L.COLOR_BUFFER_BIT,L.NEAREST):Oa?L.copyTexSubImage3D(St,ht,xt,Yt,Ie+Mi,bt,Pt,vt,ct):L.copyTexSubImage2D(St,ht,xt,Yt,bt,Pt,vt,ct);ft.bindFramebuffer(L.READ_FRAMEBUFFER,null),ft.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Oa?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(St,ht,xt,Yt,Ie,vt,ct,_t,de,pn,ge.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(St,ht,xt,Yt,Ie,vt,ct,_t,de,ge.data):L.texSubImage3D(St,ht,xt,Yt,Ie,vt,ct,_t,de,pn,ge):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ht,xt,Yt,vt,ct,de,pn,ge.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ht,xt,Yt,ge.width,ge.height,de,ge.data):L.texSubImage2D(L.TEXTURE_2D,ht,xt,Yt,vt,ct,de,pn,ge);ft.pixelStorei(L.UNPACK_ROW_LENGTH,Mn),ft.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee),ft.pixelStorei(L.UNPACK_SKIP_PIXELS,Ua),ft.pixelStorei(L.UNPACK_SKIP_ROWS,mn),ft.pixelStorei(L.UNPACK_SKIP_IMAGES,Hc),ht===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&L.generateMipmap(St),ft.unbindTexture()},this.initRenderTarget=function(M){wt.get(M).__webglFramebuffer===void 0&&Ut.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ut.setTextureCube(M,0):M.isData3DTexture?Ut.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ut.setTexture2DArray(M,0):Ut.setTexture2D(M,0),ft.unbindTexture()},this.resetState=function(){K=0,G=0,nt=null,ft.reset(),rt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}};var Ab=`
  uniform vec2  uRes;      // canvas size, CSS px
  uniform float uDpr;
  uniform vec4  uRect;     // artwork rectangle on screen: x, y, width, height (CSS px, top-left origin)
  uniform float uTime;     // seconds
  uniform float uMotion;   // 1 = animate, 0 = still (reduced motion)
  uniform float uIntro;    // 0 -> 1 fade in
  uniform float uDay;      // 0 = dark, 1 = light (eased)
  uniform vec3  uPointer;  // x, y (CSS px), strength 0..1
`,wb=`
  void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Rb=`
  precision highp float;
  ${Ab}
  uniform sampler2D uArt;
  uniform vec3  uSun;      // x, y, radius (CSS px)
  uniform float uSunOn;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  vec3 screenBlend(vec3 a, vec3 b) { return 1.0 - (1.0 - a) * (1.0 - b); }

  void main() {
    vec2 p = vec2(gl_FragCoord.x, uRes.y * uDpr - gl_FragCoord.y) / uDpr;   // CSS px, top-left origin
    vec2 uv = (p - uRect.xy) / uRect.zw;                                    // artwork space 0..1
    float sc = uRect.w / 902.0;
    float t = uTime;
    bool inArt = uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0;

    // ---------- night backdrop: midnight navy matching the artwork's edges
    float cd = length((p - uRes * 0.5) / max(uRes.x, uRes.y));
    vec3 navy = mix(vec3(0.0, 0.094, 0.212), vec3(0.0, 0.051, 0.157), smoothstep(0.0, 0.75, cd));
    vec3 c = navy;
    float edge = 1.0;
    if (inArt) {
      c = texture2D(uArt, vec2(uv.x, 1.0 - uv.y)).rgb;
      // soften the artwork's border into the backdrop where it sits inside the screen
      vec2 dpx = min(uv, 1.0 - uv) * uRect.zw;
      edge = smoothstep(0.0, 48.0 * sc, min(dpx.x, dpx.y));
    }

    // ---------- masks from the artwork's own colours
    float mx = max(c.r, max(c.g, c.b));
    float gold  = smoothstep(0.74, 0.9, c.r) * smoothstep(0.48, 0.62, c.g) * (1.0 - smoothstep(0.42, 0.62, c.b));
    float green = smoothstep(0.08, 0.24, c.g - max(c.r, c.b)) * smoothstep(0.42, 0.62, c.g);
    float ruby  = smoothstep(0.18, 0.4, c.r - max(c.g, c.b)) * smoothstep(0.62, 0.82, c.r);
    float cyan  = smoothstep(0.55, 0.85, c.b) * smoothstep(0.32, 0.6, c.g) * (1.0 - smoothstep(0.5, 0.78, c.r));

    if (inArt && uMotion > 0.5) {
      // blue digital particles: each tiny cell of the canopy twinkles on its own rhythm
      vec2 cell = floor(uv * vec2(170.0, 88.0));
      float h = hash(cell);
      float tw = pow(0.5 + 0.5 * sin(t * (0.55 + 1.5 * h) + h * 6.2831), 3.0);
      c *= mix(1.0, 0.78 + 0.6 * tw, cyan);

      // golden energy: rising through trunk and branches, flowing outward along the roots
      float w1 = 1.04 - fract(t / 5.6) * 1.1, w2 = 1.04 - fract(t / 5.6 + 0.5) * 1.1;
      float up = exp(-pow(uv.y - w1, 2.0) / 0.0005) + exp(-pow(uv.y - w2, 2.0) / 0.0005);
      float rx = abs(uv.x - 0.5) * 1.93;
      float r1 = fract(t / 4.8) * 0.62, r2 = fract(t / 4.8 + 0.5) * 0.62;
      float out_ = exp(-pow(rx - r1, 2.0) / 0.0007) + exp(-pow(rx - r2, 2.0) / 0.0007);
      float roots = smoothstep(0.76, 0.82, uv.y);
      float pulse = mix(up * (1.0 - smoothstep(0.84, 0.9, uv.y)), out_, roots);
      c += gold * pulse * vec3(1.0, 0.78, 0.42) * 0.55;

      // green leaves: a delicate shimmer passing from leaf to leaf
      vec2 lc = floor(uv * vec2(96.0, 50.0));
      float lh = hash(lc + 17.0);
      float sh = pow(0.5 + 0.5 * sin(t * (0.45 + 0.7 * lh) + lh * 6.2831), 5.0);
      c += green * sh * vec3(0.32, 0.62, 0.42) * 0.55;

      // red nodes: a gentle breathing glow
      float rh = hash(floor(uv * 36.0) + 3.0);
      c += ruby * (0.1 + 0.12 * sin(t * 1.1 + rh * 6.2831)) * vec3(1.0, 0.32, 0.36);
    }

    // interactive light: a soft glow that follows the pointer and wakes the lights it passes
    float pd = length(p - uPointer.xy);
    float pl = exp(-pd * pd / (2.0 * pow(150.0 * max(sc, 0.6), 2.0))) * uPointer.z * uMotion;
    if (inArt) c += (cyan * vec3(0.15, 0.55, 0.75) + gold * vec3(0.55, 0.42, 0.18) + green * vec3(0.2, 0.45, 0.25)) * pl * 0.7;

    vec3 night = mix(navy, c, edge) + vec3(0.0, 0.03, 0.06) * pl;

    // ---------- light mode: the artwork's lights laid over a soft morning sky (navy removed)
    float a = smoothstep(0.28, 0.87, mx) * edge;
    vec3 un = clamp((c - (1.0 - a) * vec3(0.0, 0.07, 0.184)) / max(a, 0.001) * 0.9, 0.0, 1.0);
    un = mix(un, vec3(0.92, 0.97, 1.0), (1.0 - a) * 0.55);   // faint glows become pale light, not dark rims
    float sy = p.y / uRes.y;
    vec3 sky = mix(vec3(0.725, 0.839, 0.933), vec3(0.839, 0.906, 0.953), smoothstep(0.0, 0.45, sy));
    sky = mix(sky, vec3(0.918, 0.945, 0.949), smoothstep(0.45, 0.8, sy));
    sky = mix(sky, vec3(0.945, 0.953, 0.925), smoothstep(0.8, 1.0, sy));
    float warm = exp(-length(p - uSun.xy) / (max(uRes.x, uRes.y) * 0.32));
    sky += vec3(1.0, 0.886, 0.627) * warm * 0.18 * uSunOn;
    vec3 day = mix(sky, un, a);

    vec3 col = mix(night, day, uDay);

    // ---------- sunlight: sun, slowly turning rays, soft shafts of light across the tree
    if (uSunOn > 0.5) {
      vec2 v = p - uSun.xy;
      float d = length(v) / uSun.z;
      float ang = atan(v.y, v.x);
      float core = smoothstep(1.05, 0.75, d);
      float bloom = exp(-d * 0.55) * 0.75 + exp(-d * 0.16) * 0.28 + exp(-d * 0.05) * 0.06;
      float ra = ang + t * 0.03 * uMotion;
      float rays = pow(0.5 + 0.5 * cos(ra * 28.0), 5.0) * exp(-d / mix(2.6, 4.6, step(0.0, cos(ra * 14.0)))) * smoothstep(0.8, 1.8, d);
      float breathe = 0.78 + 0.22 * sin(t / 3.7) * uMotion;
      float shafts = 0.0;
      float L = length(v);
      for (int i = 0; i < 6; i++) {
        float fi = float(i);
        float ba = 2.05 + fi * 0.2 + 0.03 * sin(fi * 2.3);
        float bw = 0.045 + 0.02 * fract(fi * 0.618);
        float da = abs(atan(sin(ang - ba), cos(ang - ba)));
        shafts += smoothstep(bw, 0.0, da) * exp(-L / (max(uRes.x, uRes.y) * 0.5)) * (0.6 + 0.4 * fract(fi * 0.37));
      }
      float fade = min(1.0, uIntro * 1.4);
      float gs = bloom + rays * 0.4;
      vec3 glow = (vec3(1.0, 0.82, 0.5) * gs + vec3(1.0, 0.9, 0.66) * shafts * 0.1 * breathe) * fade;
      vec3 nightSun = col + glow + vec3(1.0) * core * fade;
      // by day a warmer, deeper gold so the sun still reads against the bright sky
      vec3 daySun = mix(col, vec3(1.0, 0.8, 0.42), clamp(gs * 0.75, 0.0, 0.85) * fade) + vec3(1.0, 0.9, 0.66) * shafts * 0.05 * breathe * fade;
      daySun = mix(daySun, vec3(1.0, 0.99, 0.95), core * fade);
      col = mix(nightSun, daySun, uDay);
    }

    gl_FragColor = vec4(mix(navy * (1.0 - uDay) + vec3(0.839, 0.906, 0.953) * uDay, col, uIntro), 1.0);
  }
`,Cb=`
  precision highp float;
  ${Ab}
  attribute vec2  aUv;
  attribute float aKind;   // 0 cyan, 1 blue, 2 ruby, 3 drifting mote, 4 leaf glint
  attribute float aSeed;
  attribute float aSize;
  varying float vA;
  varying float vKind;
  void main() {
    vec2 uv = aUv;
    float t = uTime, ph = aSeed * 6.2831, a = 1.0;
    if (aKind < 1.5) {
      float s = sin(t * (0.7 + 1.8 * fract(aSeed * 7.31)) + ph);
      a = uMotion > 0.5 ? pow(max(0.0, (s - 0.15) / 0.85), 2.0) * 0.9 : 0.3;
    } else if (aKind < 2.5) {
      a = 0.5 + 0.14 * sin(t * 0.9 + ph) * uMotion;
    } else if (aKind < 3.5) {
      float life = fract(t * 0.045 * (0.6 + fract(aSeed * 3.1)) + aSeed);
      uv.y -= life * 0.09;
      uv.x += sin(t * 0.4 + ph) * 0.004;
      a = sin(life * 3.14159) * 0.6 * uMotion;
    } else {
      float s = 0.5 + 0.5 * sin(t * (0.5 + 0.8 * fract(aSeed * 5.7)) + ph);
      a = s * s * 0.42 * uMotion;
    }
    vec2 px = uRect.xy + uv * uRect.zw;
    // a whisper of parallax: the light layer drifts slightly against the pointer
    px += (uPointer.xy / uRes - 0.5) * -7.0 * uPointer.z * uMotion * (aKind > 2.5 && aKind < 3.5 ? 1.8 : 1.0);
    // and lights near the pointer wake up a little
    float pd = length(px - uPointer.xy);
    a += uPointer.z * uMotion * exp(-pd * pd / 18000.0) * 0.35 * step(aKind, 1.5);
    gl_Position = vec4(px.x / uRes.x * 2.0 - 1.0, 1.0 - px.y / uRes.y * 2.0, 0.0, 1.0);
    float sz = aSize * (uRect.w / 902.0);
    if (aKind < 1.5) sz *= 0.6 + a * 0.7;
    gl_PointSize = max(1.0, sz * uDpr);
    vA = a * uIntro;
    vKind = aKind;
  }
`,Nb=`
  precision highp float;
  uniform float uDay;
  varying float vA;
  varying float vKind;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float core = exp(-d * d * 30.0);
    float halo = exp(-d * d * 5.0) * 0.55;
    float g = (core + halo) * (1.0 - d);
    vec3 col = vKind < 0.5 ? vec3(0.0, 0.81, 1.0)
             : vKind < 1.5 ? vec3(0.0, 0.56, 1.0)
             : vKind < 2.5 ? vec3(1.0, 0.21, 0.3)
             : vKind < 3.5 ? vec3(0.0, 0.81, 1.0)
             : vec3(0.51, 0.96, 0.64);
    vec3 c = mix(col, vec3(1.0), core * 0.75);
    float a = g * vA * mix(1.0, 0.8, uDay);
    gl_FragColor = vec4(c * a, a);   // premultiplied
  }
`;var Db=[.4439,.2165,.0071,.582,.2215,.0074,.6282,.327,.0072,.3361,.3353,.0072,.4368,.3383,.0073,.715,.3529,.0073,.2619,.4523,.0074,.7742,.4609,.0073,.3652,.5034,.0073,.7076,.5438,.0071],jg=[.2368,.265,.6829,.3259,.4627,.4568,.7661,.2661,.6846,.4701,.3131,.2749,.4237,.2605,.3893,.0831,.3463,.2162,.3417,.2849,.2942,.3869,.6927,.5787,.6577,.1907,.6497,.4202,.5585,.0698,.832,.3925,.8039,.4568,.3767,.2251,.2861,.5499,.2632,.2439,.3234,.1109,.2144,.48,.1972,.5233,.176,.4734,.32,.3248,.4943,.3936,.7769,.3326,.3039,.4446,.2328,.5399,.7099,.4545,.3756,.092,.4014,.2384,.1537,.347,.7374,.5,.6221,.2162,.4409,.1031,.8102,.3104,.7563,.4412,.582,.316,.4065,.3647,.2231,.4157,.6445,.3559,.1841,.2661,.7104,.2251,.6462,.4424,.1806,.3703,.1382,.4169,.5264,.1851,.2666,.408,.5453,.4501,.5998,.2982,.4541,.0953,.422,.1929,.6955,.3614,.4622,.367,.4358,.2461,.3664,.1552,.3716,.561,.2787,.3381,.7953,.5078,.7569,.3891,.5138,.1475,.6944,.541,.5407,.2705,.5533,.2805,.414,.2916,.3681,.3847,.7821,.408,.7678,.4357,.5831,.0443,.426,.1131,.5745,.184,.4123,.4324,.3859,.2871,.7884,.4645,.4335,.1452,.4278,.3126,.6588,.2539,.5998,.3636,.8383,.3492,.6032,.2339,.5384,.1807,.3349,.2384,.2122,.3681,.2873,.3226,.5315,.4346,.1772,.52,.2838,.4479,.2569,.5599,.2133,.4468,.1886,.4191,.6749,.2328,.7798,.3038,.7007,.52,.664,.2206,.7236,.2882,.4432,.1851,.5487,.1242,.4518,.2683,.676,.2605,.6611,.3226,.82,.3692,.4002,.5111,.2173,.2871,.4782,.1153,.7024,.1785,.2827,.1996,.6663,.378,.4054,.2605,.7041,.4324,.6009,.1386,.5722,.5798,.8108,.551,.2947,.2816,.1898,.3392,.6611,.4135,.5745,.2472,.5006,.3537,.4931,.1441,.5017,.1319,.4702,.4191,.2425,.4235,.2529,.2373,.5642,.2539,.6181,.5732,.3108,.3071,.2202,.5067,.6456,.3858,.6451,.306,.3601,.5687,.3675,.3304,.7643,.2971,.3968,.4224,.336,.2605,.8274,.4424,.8268,.4778,.6124,.3126,.3142,.5355,.6147,.3326,.4983,.0843,.7403,.4723,.719,.3769,.656,.4634,.2179,.5809,.6089,.2827,.3521,.1829,.8182,.3337,.6422,.1996,.4123,.51,.4025,.0754,.3498,.3459,.2282,.4845,.6095,.3714,.2924,.3049,.2529,.4191,.4576,.1497,.6909,.3925,.4885,.1053,.4891,.2528,.2351,.337,.1886,.4989,.7678,.5876,.5287,.2616,.3205,.3548,.2225,.3714,.6376,.2627,.2253,.3448,.6382,.5676,.7328,.3936,.2661,.3581,.7534,.2749,.6967,.4856,.5069,.2439,.4146,.1752,.3423,.5355,.8544,.4568,.5608,.3525,.4226,.561,.6101,.122,.719,.4224,.6858,.2328,.6261,.1951,.6101,.4756,.5952,.0654,.3108,.4124,.6795,.1541,.8136,.4169,.32,.1785,.4862,.2993,.3171,.449,.3813,.4856,.1588,.4678,.6342,.2894,.6216,.4933,.5424,.2905,.4708,.0809,.1491,.4124,.2729,.3016,.7351,.357,.3825,.5188,.4128,.0998,.797,.4789,.7345,.2583,.6468,.2761,.5883,.1984,.707,.4889,.6124,.2539,.3928,.2084,.2529,.3492,.203,.4013,.3865,.5953,.3463,.561,.4656,.2982,.3263,.5399,.6502,.2406,.543,.2062,.1984,.5443,.383,.2639,.4868,.2328,.4077,.5554,.6353,.1752,.6347,.4468,.4111,.2018,.3979,.1153,.8509,.3581,.5241,.2805,.7959,.5521,.5,.1042,.2517,.3891,.457,.0687,.7534,.357,.8073,.3758,.8469,.4723,.8234,.5277,.6978,.265,.3343,.4956,.3251,.2982,.3096,.3404,.5539,.3093,.5247,.4956,.3767,.1851,.8159,.4756,.7873,.265,.3526,.3803,.3916,.3182,.4495,.3415,.2053,.4601,.7248,.3448,.5831,.4346,.2477,.3082,.7947,.439,.7901,.3814,.5814,.1386,.4524,.1186,.3349,.1253,.2798,.4102,.6198,.1685,.4627,.1197,.7368,.449,.6284,.5554,.6628,.1419,.7282,.5477,.5149,.2627,.5103,.3681,.7706,.4956,.5826,.4102,.5493,.3747,.4667,.2151,.2511,.2661,.3286,.2106,.3079,.3914,.289,.3681,.5247,.4623,.6714,.1863,.5516,.1896,.5109,.1175,.5774,.1053,.8068,.5255,.6812,.6009,.5235,.0998,.4644,.1951,.3905,.1885,.6502,.5443,.6267,.3914,.6818,.2827,.4794,.3204,.4392,.4435,.574,.0676,.3584,.4191,.5482,.1641,.7454,.5576,.3922,.398,.7213,.255,.6778,.4257,.3091,.2483,.2506,.5233,.2001,.5022,.4467,.5588,.2718,.1996,.7001,.2949,.535,.3248,.5453,.2384,.4008,.0953,.6359,.2273,.7569,.4169,.7001,.2195,.2649,.3847,.2024,.2639,.8389,.429,.6594,.52,.246,.3681,.7471,.2517,.3807,.1341,.5292,.1341,.7271,.3104,.7081,.5776,.3681,.3525,.1932,.2428,.7397,.1973,.2202,.4623,.3658,.255,.4851,.378,.2741,.4324,.3217,.2639,.7592,.5266,.6686,.5355,.4501,.1674,.1537,.4468,.7683,.3603,.5224,.2184,.3165,.3769,.7397,.2184,.6078,.4557,.3549,.0987,.59,.3348,.6026,.3248,.5396,.418,.3412,.388,.5929,.5754,.7517,.3004,.6198,.0998,.6055,.1929,.5711,.3625,.2506,.582,.5763,.5,.8549,.4911,.5728,.5543,.2391,.204,.4788,.4756,.1663,.4213,.7328,.5721,.7288,.5122,.4169,.3636,.6296,.1164,.5097,.0854,.4811,.2749,.5963,.1175,.2993,.4157,.4186,.3426,.672,.3958,.5992,.1652,.4323,.2938,.3784,.3603,.3475,.5998,.3205,.51,.1869,.4446,.4014,.3348,.383,.1619,.2924,.3415,.2861,.2472,.5298,.235,.4771,.4379,.2913,.5122,.8532,.5222,.5608,.4169,.6124,.3958,.4822,.2095,.4014,.1696,.1617,.3725,.1256,.4933,.4771,.1918,.168,.4867,.5499,.4235,.4369,.5765,.4278,.2095,.8412,.5432,.5797,.2683,.508,.2106,.3486,.2483,.2437,.5421,.6382,.4701,.5659,.1375,.5115,.3226,.3567,.2894,.2907,.5776,.7489,.4867,.7276,.5931,.6778,.5554,.6755,.1109,.6686,.2993,.6319,.3736,.5287,.1552,.5017,.4146,.336,.5843,.3028,.2295,.1984,.3248,.1577,.5166,.7901,.5255,.7208,.49,.6049,.214,.6227,.592,.6044,.5698,.7936,.3437,.3417,.184,.4455,.2993,.2345,.3703,.5482,.0665,.4352,.4191,.3498,.4013,.3475,.2683,.3263,.5643,.3022,.5521,.2947,.1718,.7764,.2849,.7231,.4002,.5212,.3348,.8165,.2727,.3481,.1341,.2294,.2993,.4501,.4712,.6709,.4856,.6009,.4302,.4954,.1674,.133,.449,.8876,.4712,.8297,.3625,.8154,.5067,.5201,.3049,.445,.0798,.4226,.5067,.4186,.4013,.4065,.3958,.8704,.4357,.7041,.4024,.2724,.51,.5837,.5565,.5665,.0931,.3458,.5067,.4369,.5244,.2678,.5698,.2638,.1707,.4685,.3359,.2597,.4778,.2259,.2184,.2403,.4446,.8326,.4978,.2741,.1796,.4335,.3714,.6399,.408,.2724,.153,.4931,.2162,.5596,.5687,.8085,.398,.6892,.1718,.1474,.5255,.4518,.4313,.5631,.3869,.375,.4401,.6239,.2572,.781,.4967,.3182,.2284,.5665,.4335,.5952,.4945,.2202,.2594,.4444,.1386,.2431,.2262,.6416,.3348,.4513,.5255,.6823,.5344,.5528,.3969,.293,.1929,.5057,.0532,.6554,.5931,.8452,.378,.3733,.5854,.3784,.3171,.1795,.4302,.535,.4767,.4031,.4457,.1714,.3603,.57,.2062,.4845,.3392,.6359,.4945,.4948,.0643,.2087,.3404,.4851,.4568,.4186,.2206,.7213,.4667,.6611,.1707,.3607,.5322,.2747,.2761,.695,.4612,.5608,.5133,.3205,.1419,.3985,.1475,.758,.3326,.336,.1596,.8704,.4834,.5728,.3426,.6852,.3625,.1812,.3902,.2792,.2273,.7861,.5588,.7357,.3259,.7328,.2339,.6198,.3537,.3687,.418,.6812,.5798,.7081,.3282,.2477,.4867,.7557,.5654,.332,.4412,.3406,.3659,.7116,.2616,.1881,.5466],Lb=[.2024,.918,.8377,.8725,.2976,.8337,.7127,.857,.2838,.8448,.1325,.8769,.7144,.8271,.6284,.939,.742,.8204,.6497,.8082,.3045,.7938,.805,.8503,.8188,.8769,.6686,.8259,.7592,.9102,.2276,.878,.3784,.7528,.3607,.9146,.7511,.8404,.7116,.796,.8578,.8714,.7081,.9246,.3297,.9279,.3956,.9224,.5969,.7749,.4427,.9279,.8165,.857,.3177,.7927,.2087,.8958,.1175,.8592,.2081,.8525,.656,.9313,.8813,.8614,.7133,.8969,.8257,.8936,.453,.9013,.6233,.898,.8956,.8459,.2683,.8271,.1594,.8814,.1531,.9169,.2947,.9246,.9111,.8636,.8073,.8259,.789,.8503,.6175,.8359,.5476,.7494,.5591,.9191,.5872,.9346,.1038,.878,.4392,.7661,.6112,.8836,.4564,.9268,.5241,.8891,.3079,.9224,.5298,.9191,.8245,.8093,.8779,.8814,.4312,.9268,.6886,.8914,.328,.8991,.8498,.8581,.3893,.7982,.3813,.8836,.3412,.9279,.6542,.7772,.2351,.9157,.535,.8869,.6628,.7528,.3234,.8725,.3733,.9157,.1663,.8282,.6198,.7683,.203,.8171,.2563,.8237,.6336,.7517,.6852,.8049,.6084,.8115,.5849,.7916,.8968,.9047,.2884,.8093,.6978,.8769,.2695,.9113,.2122,.7949,.7391,.796,.5493,.9069,.2575,.7716,.3555,.7672,.8555,.8914,.3131,.8226,.1439,.8315,.6456,.9157,.3773,.8359,.1158,.8869,.8916,.8659,.2385,.8282,.1995,.8836,.1904,.9169,.2993,.7672,.3297,.8038,.4203,.9246,.5734,.9335,.9163,.8459,.9094,.8869,.7351,.9335,.7511,.8858,.176,.9091,.1284,.8548,.2546,.8714,.3853,.9213,.0889,.9024,.8716,.9069,.4427,.9024,.7982,.7838,.4243,.7727,.3647,.7783,.7856,.9257,.4174,.7461,.3567,.9401,.1089,.8481,.7483,.9124,.9352,.8348,.6904,.7639,.1823,.8392,.6296,.8082,.262,.9313,.281,.7838,.2276,.8193,.199,.8404,.57,.7694,.8366,.9135,.6697,.7882,.9472,.8725,.3933,.8891,.922,.8692,.6072,.7572,.8446,.8359,.7569,.8237,.9289,.8958,.2454,.8936,.805,.8991,.6158,.9224,.4111,.9379,.4037,.7993,.6938,.8259,.5958,.8049,.2385,.7982,.2122,.8304,.1554,.8337,.6778,.9024,.4106,.7772,.7265,.816,.8653,.8448,.8326,.8348,.2947,.8858,.0786,.8647,.1153,.9069,.5963,.8891,.4639,.8991,.1445,.8969,.168,.8038,.414,.8847,.6221,.7916,.5745,.8681,.7334,.8404,.7724,.8304,.781,.8104,.7775,.8969,.4002,.7716,.3119,.8803,.5625,.857,.801,.8038,.2139,.918,.8085,.9224,.6433,.7783,.2552,.9102,.0677,.8803,.5195,.8625,.7259,.8825,.4318,.8747,.2529,.8049,.6451,.9457,.7001,.9069],Ub=[.5538,.0986,.5438,.1034,.4707,.1138,.5506,.1195,.4034,.1322,.4667,.1342,.3929,.1361,.6065,.1437,.5868,.1536,.5801,.1625,.4892,.1672,.5834,.1715,.352,.2025,.3433,.2048,.6837,.2151,.3371,.2211,.6803,.2252,.3791,.2832,.7992,.2812,.2421,.2889,.7629,.2864,.544,.2933,.7933,.2916,.7152,.302,.2395,.3032,.2156,.3258,.7625,.3289,.495,.3604,.5955,.3789,.7692,.3735,.8306,.381,.8196,.3825,.6047,.3857,.5747,.4008,.2223,.3965,.6003,.3976,.2325,.3998,.3848,.4023,.8242,.403,.7728,.4027,.2467,.4065,.2186,.4109,.4199,.4301,.661,.4317,.8614,.4583,.1886,.4653,.1771,.4627,.181,.4792,.1646,.4973,.8202,.5007,.1493,.5026,.2335,.5282,.2221,.5201,.7758,.5226,.2205,.5327,.7492,.5467,.6566,.5481,.7619,.5541,.7743,.5556,.3099,.5576,.6411,.5625,.657,.5637,.3189,.5709,.3105,.5703];var Pc=(e,t)=>{let n=[];for(let i=0;i<e.length;i+=t)n.push(e.slice(i,i+t));return n};function t_(e,t){let n=e/t<1.2,i=n?e*1.55/1744:t/902,s=1744*i,a=902*i,r=Math.max(16,Math.min(e,t)*.03);return{rect:[(e-s)/2,n?t*.97-a:(t-a)/2,s,a],sun:n?[e*.84,t*.09,r]:[e*.87,t*.13,r]}}function e_(){try{let e=document.createElement("canvas");return!!(e.getContext("webgl2")||e.getContext("webgl"))}catch{return!1}}function WN(){let e=1234567,t=()=>(e=e*16807%2147483647)/2147483647,n=[],i=[],s=[],a=[],r=(c,h,d,u)=>{n.push(c,h),i.push(d),s.push(t()),a.push(u)};Pc(jg,2).concat(Pc(Lb,2)).forEach(([c,h])=>r(c,h,t()<.55?0:1,12+t()*14)),Pc(Db,3).forEach(([c,h,d])=>r(c,h,2,d*1744*8)),Pc(Ub,2).forEach(([c,h])=>r(c,h,4,24));let o=Pc(jg,2);for(let c=0;c<60;c++){let[h,d]=o[Math.floor(t()*o.length)];r(h,d,3,6+t()*6)}let l=new Ui;return l.setAttribute("position",new en(new Float32Array(i.length*3),3)),l.setAttribute("aUv",new en(n,2)),l.setAttribute("aKind",new en(i,1)),l.setAttribute("aSeed",new en(s,1)),l.setAttribute("aSize",new en(a,1)),l}function n_(e,t){let n={day:!1,sun:!0,interactive:!0,still:!1,...t},i=new Sd({antialias:!1,alpha:!1,powerPreference:"high-performance"});i.outputColorSpace=fr;let s=i.domElement;Object.assign(s.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",opacity:"0",transition:n.still?"none":"opacity .7s ease"}),e.appendChild(s);let a={uRes:{value:new Qt(1,1)},uDpr:{value:1},uRect:{value:new Me},uTime:{value:0},uMotion:{value:1},uIntro:{value:0},uDay:{value:n.day?1:0},uPointer:{value:new F(-9999,-9999,0)},uArt:{value:null},uSun:{value:new F},uSunOn:{value:1}},r=new hc,o=new Vo(-1,1,1,-1,0,1),l=new Si(new mr(2,2),new ei({uniforms:a,vertexShader:wb,fragmentShader:Rb,depthTest:!1,depthWrite:!1}));l.frustumCulled=!1,r.add(l);let c=new ei({uniforms:a,vertexShader:Cb,fragmentShader:Nb,transparent:!0,depthTest:!1,depthWrite:!1,blending:Lf,blendSrc:qo,blendDst:qo}),h=new mc(WN(),c);h.frustumCulled=!1,h.renderOrder=1,r.add(h);let d={W:1,H:1,raf:0,visible:!document.hidden,inView:!0,started:0,ready:!1,day:n.day?1:0,pTarget:0,last:0,lightBlend:null,dead:!1};function u(b){let O=(b-d.started)/1e3;a.uTime.value=n.still?12:O,a.uIntro.value=d.ready?1:0;let R=Math.min(.05,(b-(d.last||b))/1e3);d.last=b,d.day+=((n.day?1:0)-d.day)*(n.still?1:1-Math.exp(-R*3)),a.uDay.value=d.day;let U=a.uPointer.value;U.z+=(d.pTarget-U.z)*(n.still?1:1-Math.exp(-R*4));let z=d.day>.5;z!==d.lightBlend&&(c.blendDst=z?bc:qo,c.needsUpdate=!0,d.lightBlend=z),i.render(r,o)}function p(b){d.raf=0,!(d.dead||n.still||!d.visible||!d.inView)&&(u(b),d.raf=requestAnimationFrame(p))}function v(){!d.dead&&!d.raf&&!n.still&&d.visible&&d.inView&&(d.raf=requestAnimationFrame(p))}function T(){d.ready&&!d.dead&&u(performance.now())}function g(){let b=e.getBoundingClientRect();d.W=Math.max(1,b.width),d.H=Math.max(1,b.height);let O=Math.min(window.devicePixelRatio||1,2);i.setPixelRatio(O),i.setSize(d.W,d.H,!1),a.uRes.value.set(d.W,d.H),a.uDpr.value=O;let{rect:R,sun:U}=t_(d.W,d.H);a.uRect.value.set(...R),a.uSun.value.set(...U),n.still&&T()}let f=new ResizeObserver(g);f.observe(e);let m=new IntersectionObserver(([b])=>{d.inView=b.isIntersecting,v()});m.observe(e);let y=()=>{d.visible=!document.hidden,d.last=0,v()},x=b=>{let O=e.getBoundingClientRect();a.uPointer.value.x=b.clientX-O.left,a.uPointer.value.y=b.clientY-O.top,d.pTarget=n.interactive?1:0,v()},E=()=>{d.pTarget=0},w=b=>{b.preventDefault(),_.destroy(),n.onError&&n.onError(new Error("WebGL context lost"))};document.addEventListener("visibilitychange",y),window.addEventListener("pointermove",x,{passive:!0}),document.addEventListener("pointerleave",E),window.addEventListener("blur",E),s.addEventListener("webglcontextlost",w),new xc().load(n.src,b=>{if(d.dead){b.dispose();return}b.colorSpace=Fi,b.minFilter=Oi,b.magFilter=dn,b.generateMipmaps=!0,b.anisotropy=i.capabilities.getMaxAnisotropy(),a.uArt.value=b,d.ready=!0,d.started=performance.now(),u(d.started),requestAnimationFrame(()=>{s.style.opacity="1"}),n.still||v()},void 0,b=>{n.onError&&n.onError(b||new Error("artwork failed to load"))});let _={set(b){Object.assign(n,b),a.uMotion.value=n.still?0:1,a.uSunOn.value=n.sun?1:0,n.interactive||(d.pTarget=0),n.still?(cancelAnimationFrame(d.raf),d.raf=0,T()):v()},destroy(){d.dead||(d.dead=!0,cancelAnimationFrame(d.raf),f.disconnect(),m.disconnect(),document.removeEventListener("visibilitychange",y),window.removeEventListener("pointermove",x),document.removeEventListener("pointerleave",E),window.removeEventListener("blur",E),s.removeEventListener("webglcontextlost",w),a.uArt.value&&a.uArt.value.dispose(),l.geometry.dispose(),l.material.dispose(),h.geometry.dispose(),c.dispose(),i.dispose(),s.remove())}};return _.set({}),g(),_}var Ed=Ia(Bc(),1),i_=()=>{let e=new Date().getHours();return e>=7&&e<19};function ZN(){let[e,t]=(0,si.useState)(()=>{var n;return typeof window!="undefined"&&!!((n=window.matchMedia)!=null&&n.call(window,"(prefers-reduced-motion: reduce)").matches)});return(0,si.useEffect)(()=>{var s;let n=(s=window.matchMedia)==null?void 0:s.call(window,"(prefers-reduced-motion: reduce)");if(!n)return;let i=()=>t(n.matches);return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),e}function zc({src:e,mode:t="dark",sun:n=!0,interactive:i=!0,reducedMotion:s,className:a,style:r,ariaLabel:o="Digital Vision Tree: a golden tree with a canopy of blue light, green leaves and red nodes"}){let l=(0,si.useRef)(null),c=(0,si.useRef)(null),h=ZN(),d=s!=null?s:h,[u,p]=(0,si.useState)(!1),[v,T]=(0,si.useState)(i_);(0,si.useEffect)(()=>{if(t!=="auto")return;T(i_());let y=setInterval(()=>T(i_()),6e4);return()=>clearInterval(y)},[t]);let g=t==="light"||t==="auto"&&v,f=(0,si.useRef)({});f.current={day:g,sun:n,interactive:i,still:d},(0,si.useEffect)(()=>{if(!e_()){p(!0);return}let y;try{y=n_(l.current,{src:e,...f.current,onError:()=>p(!0)})}catch{p(!0);return}return c.current=y,()=>{y.destroy(),c.current=null}},[e]),(0,si.useEffect)(()=>{var y;(y=c.current)==null||y.set({day:g,sun:n,interactive:i,still:d})},[g,n,i,d]);let m={position:"relative",overflow:"hidden",width:"100%",height:"100%",background:g?"#d6e7f3":"#000d28",...r};return u?(0,Ed.jsx)("div",{className:a,style:m,role:"img","aria-label":o,children:(0,Ed.jsx)("img",{src:e,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",objectPosition:"center bottom"}})}):(0,Ed.jsx)("div",{ref:l,className:a,style:m,role:"img","aria-label":o})}var Da=Ia(Bc(),1),zb=e=>({font:"600 12px/1 system-ui, sans-serif",letterSpacing:".04em",padding:"8px 12px",border:0,borderRadius:999,cursor:"pointer",background:e?"rgba(255,198,90,.95)":"transparent",color:e?"#1a1206":"rgba(220,235,255,.85)"});function JN(){let[e,t]=(0,s_.useState)("dark"),[n,i]=(0,s_.useState)(void 0);return(0,Da.jsxs)("div",{style:{position:"fixed",inset:0},children:[(0,Da.jsx)(zc,{src:"../vision-tree-hd.jpg",mode:e,reducedMotion:n}),(0,Da.jsxs)("div",{style:{position:"fixed",right:16,bottom:16,display:"flex",gap:4,padding:4,borderRadius:999,background:e==="light"?"rgba(20,40,70,.55)":"rgba(0,20,45,.6)",backdropFilter:"blur(8px)",border:"1px solid rgba(160,200,255,.18)"},children:[["dark","light","auto"].map(a=>(0,Da.jsx)("button",{style:zb(e===a),onClick:()=>t(a),children:a[0].toUpperCase()+a.slice(1)},a)),(0,Da.jsx)("button",{style:zb(n===!0),onClick:()=>i(n?void 0:!0),title:"Preview the reduced-motion version",children:"Still"})]})]})}(0,Fb.createRoot)(document.getElementById("root")).render((0,Da.jsx)(JN,{}));})();
