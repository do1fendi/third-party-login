(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9326)}])},9326:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var i=t(5893),o=t(9008),c=t.n(o),s=t(4298),a=t.n(s),l=t(7294),r=t(6245);function d(e){let n=e=>{console.log(e),console.log((0,r.Z)(e.credential))};return(0,l.useEffect)(()=>{window.google.accounts.id.initialize({client_id:e.clientId,callback:n}),window.google.accounts.id.renderButton(document.getElementById("btn"),{theme:"outline",size:"large"})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a(),{src:"https://accounts.google.com/gsi/client",async:!0,defer:!0,strategy:"beforeInteractive"}),(0,i.jsx)("div",{id:"btn"})]})}function u(e){return(0,l.useEffect)(()=>{window.fbAsyncInit=function(){window.FB.init({appId:e.appId,cookie:!0,xfbml:!0,version:"v10.0"}),window.FB.AppEvents.logPageView(),window.FB.getLoginStatus(function(e){console.log("statusChangeCallback"),console.log(e)})},window.testAPI=function(){console.log("Welcome!  Fetching your information.... "),window.FB.api("/me?fields=id,name,email",function(e){console.log(e)})}},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a(),{async:!0,defer:!0,crossOrigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js",nonce:"29GfDbm6"}),(0,i.jsx)("div",{className:"fb-login-button","data-width":"","data-size":"large","data-button-type":"login_with","data-layout":"","data-auto-logout-link":"true","data-use-continue-as":"true","data-scope":"public_profile,email","data-onlogin":"testAPI();"})]})}var f=t(5675),g=t.n(f),p=t(1664),h=t.n(p);function w(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(h(),{href:"https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1660734248&redirect_uri=https://node.taiwanviptravel.com/linelogin&state=12345abcde&scope=profile%20openid%20email",children:(0,i.jsx)(g(),{src:"/line/btn_login_base.png",width:230,height:20,alt:"pic"})})})}function m(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("div",{className:"container mx-auto h-screen w-full flex items-center justify-center text-center flex-col gap-5",children:[(0,i.jsx)(d,{clientId:"267711026176-4qvtdrssib8rid36b01kp3eoduh1ie9u.apps.googleusercontent.com"}),(0,i.jsx)(u,{appId:"300479674903257"}),(0,i.jsx)(w,{})]})]})}}},function(e){e.O(0,[689,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);