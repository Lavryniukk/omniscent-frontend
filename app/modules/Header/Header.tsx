"use client";

import Burger from "@/app/modules/Header/components/BurgerMenuButton/BurgerNavigation";
import HeaderLink from "@/app/modules/Header/components/HeaderLink/HeaderLink";
import Logo from "@/app/modules/Header/components/CleverizeLogo/CleverizeLogo";
import { Suspense, memo, useState } from "react";
import Popup from "@/app/modules/Header/components/BurgerPopup/BurgerPopup";
import ProfileLinkSkeleton from "./components/ProfileLinkSkeleton/ProfileLinkSkeleton";
import ProfileLink from "./components/ProfileLink/ProfileLink";

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
          <a className="" href="/">
            <Logo />
          </a>
          <Burger isOpen={isOpen} toggleMenu={toggleMenu} />

          <div className="hidden md:flex h-full items-center">
            <div className="space-x-7 mx-10 hidden md:block">
              <HeaderLink url="/workspace" name="Workspace" />
              <HeaderLink url="/memberships" name="Memberships" />
              <HeaderLink url="/guide" name="Info" />
            </div>

            <div className="md:flex w-24 h-fit hidden">
              <ProfileLink />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
