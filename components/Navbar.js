import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import Drawer from "./Drawer";
import { useState } from "react";

const Navbar = ({ small }) => {
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
        className={`h-[2rem] w-[2rem] lg:hidden flex ${
          small ? "text-[#fdb912]" : "text-white "
        }`}
        onClick={toggleDrawer(true)}
      />
      <ul
        className={`hidden gap-[2rem] lg:flex items-center ${
          small ? "text-[#fdb912] " : "text-white "
        }`}
      >
        <li className="">
          <Link href="/">
            <a>For Merchant</a>
          </Link>
        </li>
        <li className="">
          <Link href="/home-2">
            <a className="">For Consumer</a>
          </Link>
        </li>
        <li
          className={`border rounded-[12px] px-[1rem] py-[0.75rem] ${
            small ? " border-[#fdb912]" : " "
          }`}
        >
          <Link href="/register">
            <a className="">Sign Up</a>
          </Link>
        </li>
      </ul>
      <Drawer state={state} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Navbar;
