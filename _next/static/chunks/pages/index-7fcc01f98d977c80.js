(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4413)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,o=n(2648).Z,r=n(1598).Z,a=n(7273).Z,s=r(n(7294)),l=o(n(5443)),c=n(2730),d=n(9309),u=n(9977);n(5086);var f=o(n(1479));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/third-party-login/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,o,r,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,r=!1;o.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let w=s.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:o,widthInt:r,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:g,placeholder:p,loading:h,srcString:w,config:v,unoptimized:b,loader:y,onLoadRef:x,onLoadingCompleteRef:j,setBlurComplete:E,setShowAltText:_,onLoad:C,onError:S}=e,k=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=f?"lazy":h,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},k,{loading:h,width:r,height:o,decoding:"async","data-nimg":g?"fill":"1",className:c,style:i({},d,u)},n,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,w,p,x,j,E,b))},[w,p,x,j,E,S,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,w,p,x,j,E,b)},onError:e=>{_(!0),"blur"===p&&E(!0),S&&S(e)}})))}),v=s.forwardRef((e,t)=>{let n,o;var r,{src:m,sizes:v,unoptimized:b=!1,priority:y=!1,loading:x,className:j,quality:E,width:_,height:C,fill:S,style:k,onLoad:I,onLoadingComplete:z,placeholder:O="empty",blurDataURL:P,layout:R,objectFit:A,objectPosition:N,lazyBoundary:F,lazyRoot:B}=e,M=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=s.useContext(u.ImageConfigContext),L=s.useMemo(()=>{let e=g||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[T]),q=M,D=q.loader||f.default;delete q.loader;let W="__next_img_default"in D;if(W){if("custom"===L.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=D;D=t=>{let{config:n}=t,i=a(t,["config"]);return e(i)}}if(R){"fill"===R&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(k=i({},k,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!v&&(v=t)}let G="",U=h(_),J=h(C);if("object"==typeof(r=m)&&(p(r)||void 0!==r.src)){let e=p(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,o=e.blurHeight,P=P||e.blurDataURL,G=e.src,!S){if(U||J){if(U&&!J){let t=U/e.width;J=Math.round(e.height*t)}else if(!U&&J){let t=J/e.height;U=Math.round(e.width*t)}}else U=e.width,J=e.height}}let V=!y&&("lazy"===x||void 0===x);((m="string"==typeof m?m:G).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,V=!1),L.unoptimized&&(b=!0),W&&m.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(b=!0);let[Z,X]=s.useState(!1),[Y,H]=s.useState(!1),$=h(E),K=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:N}:{},Y?{}:{color:"transparent"},k),Q="blur"===O&&P&&!Z?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:J,blurWidth:n,blurHeight:o,blurDataURL:P,objectFit:K.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:i,width:o,quality:r,sizes:a,loader:s}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:i,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let r=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:r,kind:"x"}}(t,o,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,i)=>"".concat(s({config:t,src:n,quality:r,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:s({config:t,src:n,quality:r,width:l[d]})}}({config:L,src:m,unoptimized:b,width:U,quality:$,sizes:v,loader:D}),et=m,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:q.crossOrigin},ei=s.useRef(I);s.useEffect(()=>{ei.current=I},[I]);let eo=s.useRef(z);s.useEffect(()=>{eo.current=z},[z]);let er=i({isLazy:V,imgAttributes:ee,heightInt:J,widthInt:U,qualityInt:$,className:j,imgStyle:K,blurStyle:Q,loading:x,config:L,fill:S,unoptimized:b,placeholder:O,loader:D,srcString:et,onLoadRef:ei,onLoadingCompleteRef:eo,setBlurComplete:X,setShowAltText:H},q);return s.default.createElement(s.default.Fragment,null,s.default.createElement(w,Object.assign({},er,{ref:t})),y?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:o,blurDataURL:r,objectFit:a}=e,s=i||t,l=o||n,c=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},1479:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},4413:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var i=n(5893),o=n(9008),r=n.n(o),a=n(4298),s=n.n(a),l=n(7294);function c(e){this.message=e}c.prototype=Error(),c.prototype.name="InvalidCharacterError";var d="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new c("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,i,o=0,r=0,a="";i=t.charAt(r++);~i&&(n=o%4?64*n+i:i,o++%4)&&(a+=String.fromCharCode(255&n>>(-2*o&6))))i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);return a};function u(e){this.message=e}u.prototype=Error(),u.prototype.name="InvalidTokenError";var f=function(e,t){if("string"!=typeof e)throw new u("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(function(e){var t,n=e.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return t=n,decodeURIComponent(d(t).replace(/(.)/g,function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}catch(e){return d(n)}}(e.split(".")[n]))}catch(e){throw new u("Invalid token specified: "+e.message)}};function g(e){let t=e=>{console.log(e),console.log(f(e.credential))};return(0,l.useEffect)(()=>{window.google.accounts.id.initialize({client_id:e.clientId,callback:t}),window.google.accounts.id.renderButton(document.getElementById("btn"),{theme:"outline",size:"large"})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{src:"https://accounts.google.com/gsi/client",async:!0,defer:!0,strategy:"beforeInteractive"}),(0,i.jsx)("div",{id:"btn"})]})}function p(e){return(0,l.useEffect)(()=>{setTimeout(()=>{window.fbAsyncInit=function(){window.FB.init({appId:e.appId,cookie:!0,xfbml:!0,version:"v10.0"}),window.FB.AppEvents.logPageView(),window.FB.getLoginStatus(function(e){console.log("statusChangeCallback"),console.log(e)})},window.testAPI=function(){console.log("Welcome!  Fetching your information.... "),window.FB.api("/me?fields=id,name,email",function(e){console.log(e)})}},50)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{async:!0,defer:!0,crossOrigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js",nonce:"29GfDbm6"}),(0,i.jsx)("div",{className:"fb-login-button","data-width":"","data-size":"large","data-button-type":"login_with","data-layout":"","data-auto-logout-link":"true","data-use-continue-as":"true","data-scope":"public_profile,email","data-onlogin":"testAPI();"})]})}var h=n(5675),m=n.n(h),w=n(1664),v=n.n(w),b=n(1163);function y(e){let t=(0,b.useRouter)();return(0,l.useEffect)(()=>{t.query.code&&fetch("https://node.taiwanviptravel.com/linelogin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:t.query.code})}).then(e=>console.log(e.json())).catch(e=>console.log(e))},[t.query.code]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(v(),{href:"https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1660734248&redirect_uri=https://do1fendi.github.io/third-party-login&state=12345abcde&scope=profile%20openid%20email",children:(0,i.jsx)(m(),{src:"".concat("https://do1fendi.github.io/third-party-login","/line/btn_login_base.png"),width:230,height:20,alt:"pic"})})})}function x(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("div",{className:"container mx-auto h-screen w-full flex items-center justify-center text-center flex-col gap-5",children:[(0,i.jsx)(g,{clientId:"267711026176-4qvtdrssib8rid36b01kp3eoduh1ie9u.apps.googleusercontent.com"}),(0,i.jsx)(p,{appId:"300479674903257"}),(0,i.jsx)(y,{})]})]})}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1163:function(e,t,n){e.exports=n(387)},4298:function(e,t,n){e.exports=n(699)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);