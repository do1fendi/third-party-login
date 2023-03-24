import { MouseEventHandler } from "react";

export interface IButtonProps {
  id?: string;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: IButtonProps) {
  return (
    <>
      <button className="w-[200px] border border-teal-600 transition-all hover:border-teal-400 text-teal-700 hover:text-gray-100 hover:bg-teal-400 p-2 rounded-md">
        {props.text}
      </button>
    </>
  );
}
