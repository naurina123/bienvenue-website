import { useState, useEffect } from "react";
const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 100)
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
        src={small ? "images/sticky-logo.svg" : "images/logo-header.svg"}
        className="my-[1rem] mx-[5rem] w-[10rem] h-[4rem] lg-my-[1rem] lg-mx-[5rem] lg-w-[10rem] lg-h-[4rem] "
      />
    </div>
  );
};

export default Header;
