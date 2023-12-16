import React, { useState } from "react";
import { logLinks, navLinks } from "../../types/constants";
import { hamburger, close } from "../../assets/icons";
import { useMediaQuery } from "@react-hook/media-query";
import { useDispatch } from "react-redux";
import { AppDispatch, logoutUser } from "../../../src/redux/userSlice";

interface NavProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavProps> = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const isAboveMediumScreens: boolean = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [loggedInState, setLoggedInState] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogout = async () => {
    try {
      const action: any = await dispatch(logoutUser() as any);
      localStorage.setItem("isLoggedIn", "false");
      setLoggedInState(false); // Update the local state for isLoggedIn
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle logout failure
    }
  };

  return (
    <header className="fle flex-col sm:px-16 px-2 py-2 absolute z-10 w-full shadow-sm bg-onyx">
      {isAboveMediumScreens ? (
        <nav className="flex justify-between font-mukta items-center max-container bg-onyx text-white p-1 w-full">
          <a className="text-2xl" href="/">
            EventHub
            {/* <img src={logoNavbar} alt="Logo" width={100} height="auto" /> */}
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden p-2 ml-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-row font-mukta justify-end items-center gap-8 max-lg:hidden">
            {logLinks.map((link, index) => (
              <li className="flex gap-4" key={index}>
                {link.href === "/logout" ? (
                  <button onClick={handleLogout}>{link.label}</button>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
                <img src={link.icon} height={25} width={25} alt={link.label} />
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav className="flex justify-between font-mukta items-center max-container text-white">
          <a className="font-mukta text-2xl" href="/">
            EventHub
          </a>
          <div className="lg:hidden">
            <img
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              src={hamburger}
              height={25}
              width={25}
              className="block"
              alt="Hamburger Icon"
            />
          </div>
        </nav>
      )}
      {/* MOBILE MENU */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px]  bg-dutchWhite drop-shadow-xl ">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img src={close} className="h-12 w-12 cursor-pointer" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <ul className="flex flex-col font-mukta justify-end gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col font-mukta justify-end gap-8">
              {logLinks.map((link, index) => (
                <li className="flex gap-4" key={index}>
                  <a href={link.href}>{link.label}</a>
                  <img
                    src={link.icon}
                    height={25}
                    width={25}
                    alt={link.label}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
