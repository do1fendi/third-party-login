import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";

export interface IFacebookProps {
  appId: String;
}

export function Facebook(props: IFacebookProps) {
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: props.appId,
        cookie: true,
        xfbml: true,
        version: "v16.0",
      });

      FB.AppEvents.logPageView();
    };

    // (function (d, s, id) {
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {
    //     return;
    //   }
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // })(document, "script", "facebook-jssdk");
  }, []);
  const checkLoginState = (response: any) => {
    console.log(response);
  };
  return (
    <>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js"
        nonce="29GfDbm6"
      ></Script>
      <div
        className="fb-login-button"
        data-width=""
        data-size="large"
        data-button-type="login_with"
        data-layout=""
        data-auto-logout-link="false"
        data-use-continue-as="false"
        data-scope="public_profile, email"
      ></div>
    </>
  );
}
