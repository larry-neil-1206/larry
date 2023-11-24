(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{929:function(e,t,r){Promise.resolve().then(r.bind(r,2860)),Promise.resolve().then(r.t.bind(r,3222,23)),Promise.resolve().then(r.bind(r,9787)),Promise.resolve().then(r.bind(r,4380)),Promise.resolve().then(r.t.bind(r,6685,23)),Promise.resolve().then(r.bind(r,2060)),Promise.resolve().then(r.bind(r,5399)),Promise.resolve().then(r.bind(r,7964)),Promise.resolve().then(r.bind(r,2310)),Promise.resolve().then(r.bind(r,196)),Promise.resolve().then(r.bind(r,523)),Promise.resolve().then(r.bind(r,4475)),Promise.resolve().then(r.bind(r,8963)),Promise.resolve().then(r.bind(r,288)),Promise.resolve().then(r.bind(r,7800)),Promise.resolve().then(r.bind(r,4506)),Promise.resolve().then(r.bind(r,8454)),Promise.resolve().then(r.bind(r,7621)),Promise.resolve().then(r.bind(r,1343)),Promise.resolve().then(r.bind(r,6953)),Promise.resolve().then(r.bind(r,2519)),Promise.resolve().then(r.bind(r,6498)),Promise.resolve().then(r.bind(r,4441)),Promise.resolve().then(r.bind(r,5925)),Promise.resolve().then(r.bind(r,616)),Promise.resolve().then(r.bind(r,7562)),Promise.resolve().then(r.t.bind(r,2471,23))},616:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var o=r(7437),n=r(96),i=r(4033),a=r(2265);function s(e){let{allApps:t}=e,r=(0,i.usePathname)(),s=(0,a.useRef)(!0),l=(0,n.I0)();return(0,a.useEffect)(()=>{let e=t.find(e=>e.href===r);l(n.Pl.actions.setCurrentTab({current:e?{href:e.href,title:e.title,type:e.framework}:{href:"/",title:"About Me",type:"about"}}))},[l,t,r]),(0,a.useEffect)(()=>{if(s.current){s.current=!1;return}window.innerWidth<768&&l(n.lg.actions.closeIfOpen({})),l(n.Ci.actions.resetVisible())},[l,r]),(0,o.jsx)(o.Fragment,{})}},7562:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var o=r(7437),n=r(96),i=r(2265);function a(){let e=(0,n.I0)();return(0,i.useEffect)(()=>{if(window.innerWidth<768)return;e(n.lg.actions.toggleMenu({menu:n.v2.EXPLORER}));let t=setTimeout(()=>{e(n.Uh.actions.toggleMenu({subMenu:n.Wd.PORTFOLIO}))},200);return()=>{clearTimeout(t)}},[e]),(0,o.jsx)(o.Fragment,{})}},6498:function(e,t,r){"use strict";r.r(t),r.d(t,{Providers:function(){return a}});var o=r(7437),n=r(3198),i=r(96);let a=e=>(0,o.jsx)(n.zt,{store:i.tO,children:e.children})},2471:function(){},1343:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/favicon.603d046c.ico",height:16,width:16,blurWidth:0,blurHeight:0}},4441:function(e,t,r){"use strict";r.r(t),r.d(t,{Analytics:function(){return c},default:function(){return d},track:function(){return l}});var o=r(2265),n=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function i(){return"undefined"!=typeof window}function a(){return window.vam||"production"}function s(){return"development"===a()}function l(e,t){var r,o;if(!i()){console.warn("[Vercel Web Analytics] Server-side execution of `track()` is currently not supported.");return}if(!t){null==(r=window.va)||r.call(window,"event",{name:e});return}try{let r=function(e,t){let r=e,o=[];for(let[n,i]of Object.entries(e))"object"==typeof i&&null!==i&&(t.strip?r=function(e,{[e]:t,...r}){return r}(n,r):o.push(n));if(o.length>0&&!t.strip)throw Error(`The following properties are not valid: ${o.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);return r}(t,{strip:"production"===a()});null==(o=window.va)||o.call(window,"event",{name:e,data:r})}catch(e){e instanceof Error&&s()&&console.error(e)}}function c({beforeSend:e,debug:t=!0,mode:r="auto"}){return(0,o.useEffect)(()=>{!function(e={debug:!0}){var t;if(!i())return;(function(e="auto"){if("auto"===e){window.vam="production";return}window.vam=e})(e.mode),n(),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));let r=s()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${r}"]`))return;let o=document.createElement("script");o.src=r,o.defer=!0,o.setAttribute("data-sdkn","@vercel/analytics"),o.setAttribute("data-sdkv","1.0.2"),o.onerror=()=>{let e=s()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/concepts/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${e}`)},s()&&!1===e.debug&&o.setAttribute("data-debug","false"),document.head.appendChild(o)}({beforeSend:e,debug:t,mode:r})},[e,t,r]),null}var d={Analytics:c,track:l}},5925:function(e,t,r){"use strict";let o,n;r.r(t),r.d(t,{CheckmarkIcon:function(){return V},ErrorIcon:function(){return q},LoaderIcon:function(){return R},ToastBar:function(){return ee},ToastIcon:function(){return Y},Toaster:function(){return en},default:function(){return ei},resolveValue:function(){return k},toast:function(){return F},useToaster:function(){return H},useToasterStore:function(){return _}});var i,a=r(2265);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,f=(e,t)=>{let r="",o="",n="";for(let i in e){let a=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+a+";":o+="f"==i[1]?f(a,i):i+"{"+f(a,"k"==i[1]?"":t)+"}":"object"==typeof a?o+=f(a,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=f.p?f.p(i,a):i+":"+a+";")}return r+(t&&n?t+"{"+n+"}":n)+o},p={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},h=(e,t,r,o,n)=>{var i;let a=m(e),s=p[a]||(p[a]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(a));if(!p[s]){let t=a!==e?e:(e=>{let t,r,o=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?o.shift():t[3]?(r=t[3].replace(u," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(u," ").trim();return o[0]})(e);p[s]=f(n?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&p.g?p.g:null;return r&&(p.g=p[s]),i=p[s],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=o?i+t.data:t.data+i),s},b=(e,t,r)=>e.reduce((e,o,n)=>{let i=t[n];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+o+(null==i?"":i)},"");function v(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?b(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}v.bind({g:1});let g,y,w,x=v.bind({k:1});function P(e,t){let r=this||{};return function(){let o=arguments;function n(i,a){let s=Object.assign({},i),l=s.className||n.className;r.p=Object.assign({theme:y&&y()},s),r.o=/ *go\d+/.test(l),s.className=v.apply(r,o)+(l?" "+l:""),t&&(s.ref=a);let c=e;return e[0]&&(c=s.as||e,delete s.as),w&&c[0]&&w(s),g(c,s)}return t?t(n):n}}var E=e=>"function"==typeof e,k=(e,t)=>E(e)?e(t):e,O=(o=0,()=>(++o).toString()),$=()=>{if(void 0===n&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n},j=new Map,A=e=>{if(j.has(e))return;let t=setTimeout(()=>{j.delete(e),z({type:4,toastId:e})},1e3);j.set(e,t)},C=e=>{let t=j.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&C(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?I(e,{type:1,toast:r}):I(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?A(o):e.toasts.forEach(e=>{A(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},T=[],N={toasts:[],pausedAt:void 0},z=e=>{N=I(N,e),T.forEach(e=>{e(N)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_=(e={})=>{let[t,r]=(0,a.useState)(N);(0,a.useEffect)(()=>(T.push(r),()=>{let e=T.indexOf(r);e>-1&&T.splice(e,1)}),[t]);let o=t.toasts.map(t=>{var r,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:o}},M=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||O()}),D=e=>(t,r)=>{let o=M(t,e,r);return z({type:2,toast:o}),o.id},F=(e,t)=>D("blank")(e,t);F.error=D("error"),F.success=D("success"),F.loading=D("loading"),F.custom=D("custom"),F.dismiss=e=>{z({type:3,toastId:e})},F.remove=e=>z({type:4,toastId:e}),F.promise=(e,t,r)=>{let o=F.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(F.success(k(t.success,e),{id:o,...r,...null==r?void 0:r.success}),e)).catch(e=>{F.error(k(t.error,e),{id:o,...r,...null==r?void 0:r.error})}),e};var L=(e,t)=>{z({type:1,toast:{id:e,height:t}})},W=()=>{z({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:r}=_(e);(0,a.useEffect)(()=>{if(r)return;let e=Date.now(),o=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),r)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[t,r]);let o=(0,a.useCallback)(()=>{r&&z({type:6,time:Date.now()})},[r]),n=(0,a.useCallback)((e,r)=>{let{reverseOrder:o=!1,gutter:n=8,defaultPosition:i}=r||{},a=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),s=a.findIndex(t=>t.id===e.id),l=a.filter((e,t)=>t<s&&e.visible).length;return a.filter(e=>e.visible).slice(...o?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+n,0)},[t]);return{toasts:t,handlers:{updateHeight:L,startPause:W,endPause:o,calculateOffset:n}}},q=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=P("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,V=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=P("div")`
  position: absolute;
`,U=P("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=P("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?a.createElement(X,null,t):t:"blank"===r?null:a.createElement(U,null,a.createElement(R,{...o}),"loading"!==r&&a.createElement(B,null,"error"===r?a.createElement(q,{...o}):a.createElement(V,{...o})))},Z=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,G=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,J=P("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=P("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=(e,t)=>{let r=e.includes("top")?1:-1,[o,n]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Z(r),G(r)];return{animation:t?`${x(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=a.memo(({toast:e,position:t,style:r,children:o})=>{let n=e.height?Q(e.position||t||"top-center",e.visible):{opacity:0},i=a.createElement(Y,{toast:e}),s=a.createElement(K,{...e.ariaProps},k(e.message,e));return a.createElement(J,{className:e.className,style:{...n,...r,...e.style}},"function"==typeof o?o({icon:i,message:s}):a.createElement(a.Fragment,null,i,s))});i=a.createElement,f.p=void 0,g=i,y=void 0,w=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:o,children:n})=>{let i=a.useCallback(t=>{if(t){let r=()=>{o(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return a.createElement("div",{ref:i,className:t,style:r},n)},er=(e,t)=>{let r=e.includes("top"),o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...o}},eo=v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,en=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:n,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:c}=H(r);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let i=r.position||t,s=er(i,c.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t}));return a.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eo:"",style:s},"custom"===r.type?k(r.message,r):n?n(r):a.createElement(ee,{toast:r,position:i}))}))},ei=F}},function(e){e.O(0,[639,214,971,596,744],function(){return e(e.s=929)}),_N_E=e.O()}]);