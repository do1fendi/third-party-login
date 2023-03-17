import * as React from "react";
import Link from "next/link";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="bg-indigo-400">
      <div className="container mx-auto h-24 flex items-center justify-between">
        <div className="text-3xl text-white"><Link href={"/"}>LOGO</Link></div>
        <div className="text-white">
          <ul>
            <li className="hover:text-gray-300">
              <Link href={"/privacy-policy"}>Privacy policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
