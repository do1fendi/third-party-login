import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";

export interface IFacebookProps {
  appId: String;
}

export function Facebook(props: IFacebookProps) {
  useEffect(() => {
    (window as any).fbAsyncInit = function () {
      (window as any).FB.init({
        appId: props.appId,
        cookie: true,
        xfbml: true,
        version: "v10.0",
      });

      (window as any).FB.AppEvents.logPageView();
      (window as any).FB.getLoginStatus(function (response: any) {
        // Called after the JS SDK has been initialized.
        statusChangeCallback(response); // Returns the login status.
      });
    };

    (window as any).testAPI = function () {
      console.log("Welcome!  Fetching your information.... ");
      (window as any).FB.api(
        "/me?fields=id,name,email",
        function (response: any) {
          console.log(response);
        }
      );
    };
  }, []);

  

  function checkLoginState() {
    // Called when a person is finished with the Login Button.
    (window as any).FB.getLoginStatus(function (response: any) {
      // See the onlogin handler
      statusChangeCallback(response);
    });
  }

  function statusChangeCallback(response: any) {
    // Called with the results from FB.getLoginStatus().
    console.log("statusChangeCallback");
    console.log(response); // The current login status of the person.
  }

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
        data-auto-logout-link="true"
        data-use-continue-as="true"
        data-scope="public_profile,email"
        data-onlogin="testAPI();"
      ></div>
      {/* <button onClick={testAPI}>check FACEBOOK login</button> */}
    </>
  );
}
