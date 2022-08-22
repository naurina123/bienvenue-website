import { useState, useEffect } from "react";
const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 90)
      );
    }
  }, []);

  return (
    <div
      className={`transition ease-in-out duration-300 w-full drop-shadow-lg fixed ${
        small ? "small" : ""
      }`}
    >
      <img
        src={small ? "images/Bienvenue.png" : "images/logo-header.svg"}
        className={` my-[1rem] mx-[5rem] w-[10rem]  lg:my-[2rem] lg:mx-[5rem]  ${
          small ? "h-[2rem] object-contain" : "h-[5rem]"
        }`}
      />
    </div>
  );
};

export default Header;
