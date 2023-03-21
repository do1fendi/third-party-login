import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import Button from "@/components/Button";

export interface IGoogleProps {
  clientId: String;
}

export function Google(props: IGoogleProps) {
  const handleResponse = (response: any) => {
    console.log(response);
    console.log(jwtDecode(response.credential));
  };
  useEffect(() => {
    /* global google */
    (window as any).google.accounts.id.initialize({
      client_id: props.clientId,
      callback: handleResponse,
    });

    (window as any).google.accounts.id.renderButton(
      document.getElementById("btn"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }, []);
  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        async
        defer
        strategy="beforeInteractive"
      ></Script>
      <div id="btn">
        <Button />
      </div>
    </>
  );
}
