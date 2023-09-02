"use client";
import Burger from "@/app/components/burgerNav/BurgerNavigation";
import HeaderLink from "@/app/components/headerLink/HeaderLink";
import Logo from "@/app/UI/OmniLogo";
import { useState } from "react";
type BurgerProps = {
  toggleMenu: () => void;
  isOpen: boolean;
};
let Header = ({ toggleMenu, isOpen }: BurgerProps) => {
  return (
    <div className="border-b h-14 flex w-full justify-center backdrop-blur-sm fixed top-0.5 z-10 border-accent box-border ">
      <div
        className="w-full h-14 fixed top-0  flex
                        items-center justify-between max-w-10xl z-0 px-10 sm:px-5
                        box-border"
      >
        <Logo />
        <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className=" space-x-5 hidden sm:block">
          <HeaderLink url="/" name="Home" />
          <HeaderLink url="/prototype" name="Prototype" />
          <HeaderLink url="/faq" name="FAQ" />
          <HeaderLink url="/about" name="About us" />
        </div>
        <div className="hidden w-36  sm:flex justify-around space-x-3 items-center">
          <HeaderLink url="/login" name="Sign in" />
          <div className="h-5 w-0.5 bg-accent" />
          <HeaderLink url="/register" name="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default Header;
