export interface IButtonProps {
  id?: string;
  text?: string;
}

export default function Button(props: IButtonProps) {
  return (
    <>
      <button className="w-[200px] border border-indigo-600 hover:border-indigo-400 text-indigo-700 hover:text-gray-100 hover:bg-indigo-400 p-2 rounded-md">
        {props.text}
      </button>
    </>
  );
}
