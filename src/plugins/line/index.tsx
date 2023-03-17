import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export interface ILineProps {}

export default function Line(props: ILineProps) {
  const router = useRouter();
  useEffect(() => {
    if (router.query.code) {
      //   alert(router.query.code);
      fetch("https://node.taiwanviptravel.com/linelogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: router.query.code }),
      })
        .then((res) => console.log(res.json()))
        .catch((err) => console.log(err));
    }
  }, [router.query.code]);

  return (
    <>
      <Link
        href={
          "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1660734248&redirect_uri=https://do1fendi.github.io/third-party-login&state=12345abcde&scope=profile%20openid%20email"
        }
      >
        <Image
          src={`${process.env.BASEURL}/line/btn_login_base.png`}
          width={230}
          height={20}
          alt="pic"
        ></Image>
      </Link>
    </>
  );
}
