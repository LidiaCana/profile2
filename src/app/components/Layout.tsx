import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { ReactNode } from "react";

const navBar = [
  { label: "About", link: "/en-US" },
  { label: "Volunteering", link: "/en-US/volunteering" },
  { label: "Blog", link: "#" },
];
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="">
      <Navbar items={navBar} />
      <div className="flex flex-col justify-center w-3/4 absolute left-1/2 transform -translate-x-1/2">
        {children}
        <Footer />
      </div>
    </main>
  );
};
export default Layout;
