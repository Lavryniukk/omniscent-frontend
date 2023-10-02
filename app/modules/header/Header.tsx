"use client";
import Burger from "@/app/components/burgerNav/BurgerNavigation";
import HeaderLink from "@/app/components/headerLink/HeaderLink";
import Logo from "@/app/UI/icons/OmniLogo";
import { useState } from "react";
import Popup from "./burgerPopup/BurgerPopup";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
let Header = () => {
  let [isOpen, setIsOpen] = useState(false);
  let toggleMenu: () => void = () => {
    setIsOpen(!isOpen);
  };
  let { user } = useUser();
  console.log(user);
  return (
    <>
      <Popup isOpen={isOpen} />
      <div className="border-b h-14 flex w-full justify-center backdrop-blur-sm fixed top-0 z-10 border-accent box-border ">
        <div
          className="w-full h-14 fixed top-0  flex
                          items-center justify-between max-w-10xl z-0 px-10 sm:px-5
                          box-border"
        >
          <Link className="mt-2" href="/">
            <Logo />
          </Link>
          <Burger isOpen={isOpen} toggleMenu={toggleMenu} />

          <div className=" space-x-5 hidden sm:block">
            <HeaderLink url="/" name="Home" />
            <HeaderLink url="/prototype" name="Prototype" />
            <HeaderLink url="/memberships" name="Memberships" />
          </div>
          <div className="hidden w-36  sm:flex justify-around space-x-3 items-center">
            <HeaderLink url="/api/auth/logout" name="Sign in" />
            <div className="h-5 w-0.5 bg-accent" />
            <HeaderLink url="/api/auth/login" name="Sign up" />
            {/* <Link
              href={"/user/login"}
              onClick={()=>}
              className="text-text hover:text-accent text-md font-roboto font-light transition-colors duration-200 "
            >
              Sign up
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
