import Header from "@/components/Header";
export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header></Header>
      <main>{props.children}</main>
    </>
  );
}
