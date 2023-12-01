"use client";

import Burger from "@/app/modules/Header/components/BurgerMenuButton/BurgerNavigation";
import Logo from "@/app/modules/Header/components/CleverizeLogo/CleverizeLogo";
import { memo, useState } from "react";
import Popup from "@/app/modules/Header/components/BurgerPopup/BurgerPopup";
import ProfileLink from "./components/ProfileLink/ProfileLink";
import Navigation from "./components/Navigation/Navigation";
import { motion } from "framer-motion";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "@/app/shared/providers/ThemeProvider";
let Header = () => {
  let [isOpen, setIsOpen] = useState(false); // Initialize state for mobile menu open/close.
  const { theme, setTheme } = useTheme();
  let toggleMenu: () => void = () => {
    setIsOpen(!isOpen); // Function to toggle the mobile menu open/close.
  };

  return (
    <>
      <Popup isOpen={isOpen} />
      <div
        className={`border-b h-14 flex w-full justify-center items-center backdrop-blur-md fixed top-0 z-10 border-secondary box-border`}
      >
        <div className="w-full h-14 fixed top-0 flex items-center justify-between max-w-10xl z-0 px-10 sm:px-5 box-border">
          <div className="flex items-center">
            <a className="" href="/">
              <Logo picTheme={theme} />
            </a>

            <Navigation />
          </div>

          <Burger isOpen={isOpen} toggleMenu={toggleMenu} />

          <div className="md:flex w-fit  space-x-10 items-center h-full hidden">
            <div
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
              className="w-[78px] p-1 relative  h-8 flex items-center justify-around   shadow-accent border-accent bg-secondary rounded-full"
            >
              <BsSunFill className="h-full aspect-square text-accent" />
              <BsMoonFill className="h-full aspect-square  text-accent" />
              <motion.div
                animate={{
                  x: theme === "dark" ? 40 : 6,
                }}
                className="h-6 aspect-square left-1 absolute bg-text/50   rounded-full text-accent"
              ></motion.div>
            </div>
            <ProfileLink />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
