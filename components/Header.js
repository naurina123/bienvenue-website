import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [small, setSmall] = useState(false);
  const [textColor, setTextColor] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 90)
      );
    }
  }, []);

  return (
    <div
      className={`flex transition ease-in-out duration-300 w-full drop-shadow-lg fixed justify-between px-[3rem] items-center ${
        small ? "small" : ""
      }`}
    >
      <img
        src={small ? "images/Bienvenue.png" : "images/logo-header.svg"}
        className={` my-[1rem] mx-[1rem]  w-[10rem]  lg:my-[2rem] lg:mx-[4.25rem] ${
          small ? "h-[2rem] object-contain" : "h-[5rem] "
        }`}
      />
      <Navbar />
    </div>
  );
};

export default Header;
