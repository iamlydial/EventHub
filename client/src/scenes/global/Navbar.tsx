import React from "react";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <header className="sm:px-16 px-8 py-8 absolute z-10 w-full border">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={""} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>Home</li>
          <li>Services</li>
          <li>Contact us</li>
          <li>Gallery</li>
          <li>Sign In</li>
        </ul>
        <div>
          <img
            src={""}
            height={25}
            width={25}
            className="hidden max-lg:block"
            alt="Hamburger Icon"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
