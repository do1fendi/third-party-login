(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(389)}])},389:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(5893),r=n(9008),i=n.n(r),a=n(4298),c=n.n(a),s=n(7294);function d(e){this.message=e}d.prototype=Error(),d.prototype.name="InvalidCharacterError";var l="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new d("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,r=0,i=0,a="";o=t.charAt(i++);~o&&(n=r%4?64*n+o:o,r++%4)&&(a+=String.fromCharCode(255&n>>(-2*r&6))))o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return a};function u(e){this.message=e}u.prototype=Error(),u.prototype.name="InvalidTokenError";var f=function(e,t){if("string"!=typeof e)throw new u("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(function(e){var t,n=e.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return t=n,decodeURIComponent(l(t).replace(/(.)/g,function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}catch(e){return l(n)}}(e.split(".")[n]))}catch(e){throw new u("Invalid token specified: "+e.message)}};function p(e){let t=e=>{console.log(e),console.log(f(e.credential))};return(0,s.useEffect)(()=>{window.google.accounts.id.initialize({client_id:e.clientId,callback:t}),window.google.accounts.id.renderButton(document.getElementById("btn"),{theme:"outline",size:"large"})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c(),{src:"https://accounts.google.com/gsi/client",async:!0,defer:!0,strategy:"beforeInteractive"}),(0,o.jsx)("div",{id:"btn"})]})}function g(e){return(0,s.useEffect)(()=>{window.fbAsyncInit=function(){window.FB.init({appId:e.appId,cookie:!0,xfbml:!0,version:"v16.0"}),window.FB.AppEvents.logPageView()}},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c(),{async:!0,defer:!0,crossOrigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js",nonce:"29GfDbm6"}),(0,o.jsx)("div",{className:"fb-login-button","data-width":"","data-size":"large","data-button-type":"login_with","data-layout":"","data-auto-logout-link":"false","data-use-continue-as":"false","data-scope":"public_profile, email","data-onlogin":"checkLoginStatus()"})]})}function h(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:"Create Next App"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)("div",{className:"container mx-auto h-screen w-full flex items-center justify-center text-center flex-col gap-5",children:[(0,o.jsx)(p,{clientId:"267711026176-4qvtdrssib8rid36b01kp3eoduh1ie9u.apps.googleusercontent.com"}),(0,o.jsx)(g,{appId:"300479674903257"})]})]})}},9008:function(e,t,n){e.exports=n(5443)},4298:function(e,t,n){e.exports=n(699)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);