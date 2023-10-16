"use client";
import Burger from "@/app/modules/header/components/BurgerMenuButton/BurgerNavigation";
import HeaderLink from "@/app/modules/header/components/HeaderLink/HeaderLink";
import Logo from "@/app/UI/icons/OmniLogo";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import Popup from "./components/BurgerPopup/BurgerPopup";
import Link from "next/link";
import SignIn from "@/app/modules/header/components/SignIn/SignIn";
import ProfileLink from "./components/ProfileLink/ProfileLink";
let Header = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  let toggleMenu: () => void = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Popup isOpen={isOpen} />
      <div className="border-b h-14 flex w-full justify-center items-center backdrop-blur-sm fixed top-0 z-10 border-accent box-border ">
        <div
          className="w-full h-14 fixed top-0  flex
                          items-center justify-between max-w-10xl z-0 px-10 sm:px-5
                          box-border"
        >
          <Link className="" href="/">
            <Logo />
          </Link>
          <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
          <div className=" space-x-5 hidden sm:block">
            <HeaderLink url="/" name="Home" />
            <HeaderLink url="/projects" name="Prototype" />
            <HeaderLink url="/memberships" name="Memberships" />
          </div>
          {isLoading ? (
            <div className="w-10 h-10 rounded-full border-2 border-secondary-700 border-t-accent animate-spin" />
          ) : user ? (
            <ProfileLink />
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
