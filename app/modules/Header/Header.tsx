"use client";

import Burger from "@/app/modules/Header/components/BurgerMenuButton/BurgerNavigation";
import Logo from "@/app/modules/Header/components/CleverizeLogo/CleverizeLogo";
import { memo, useState } from "react";
import Popup from "@/app/modules/Header/components/BurgerPopup/BurgerPopup";
import ProfileLink from "./components/ProfileLink/ProfileLink";
import Navigation from "./components/Navigation/Navigation";

let Header = () => {
  let [isOpen, setIsOpen] = useState(false); // Initialize state for mobile menu open/close.

  let toggleMenu: () => void = () => {
    setIsOpen(!isOpen); // Function to toggle the mobile menu open/close.
  };

  return (
    <>
      <Popup isOpen={isOpen} />{" "}
      <div
        className={`border-b h-14 flex w-full justify-center items-center backdrop-blur-md fixed top-0 z-10 border-secondary box-border`}
      >
        <div className="w-full h-14 fixed top-0 flex items-center justify-between max-w-10xl z-0 px-10 sm:px-5 box-border">
          <div className="flex items-center">
            <a className="" href="/">
              <Logo />
            </a>

            <Navigation />
          </div>

          <Burger isOpen={isOpen} toggleMenu={toggleMenu} />

          <div className="md:flex w-fit h-full hidden">
            <ProfileLink />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
