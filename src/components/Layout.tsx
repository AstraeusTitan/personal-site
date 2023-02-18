import { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";

type TLink = {
  name: string;
  href: string;
};
const links: TLink[] = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar links={links} />
      {children}
    </>
  );
};

export default Layout;
