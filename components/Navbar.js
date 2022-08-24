import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import Drawer from "./Drawer";
import { useState } from "react";

const Navbar = ({small}) => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    console.log(open);
    setState(open);
  };
  return (
    <div>
      <MenuIcon
        className={`h-[2rem] w-[2rem] lg:hidden flex ${small ? "text-[#fdb912]" : "text-white "}`}
        onClick={toggleDrawer(true)}
        
      />
      <ul className={`hidden lg:flex ${small ? "text-[#fdb912]" : "text-white "}`}>
        <li className="mr-6">
          <Link href="/">
            <a >Home-1</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/home-2">
            <a className="">Home-2</a>
          </Link>
        </li>
      </ul>
      <Drawer state={state} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Navbar;
