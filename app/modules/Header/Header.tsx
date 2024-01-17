"use client";
import { useState } from "react";
import Burger from "@/app/modules/Header/components/BurgerMenuButton/BurgerNavigation";
import Popup from "@/app/modules/Header/components/BurgerPopup/BurgerPopup";
import Navigation from "./components/Navigation/Navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { BannerLogo } from "./components/CleverizeLogo/CleverizeLogo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
      <header className="flex items-center justify-center">
        <div className="h-14 flex z-50 w-11/12 lg:w-3/4 justify-center items-center backdrop-blur-md fixed top-4 border-text/20 box-border border max-w-10xl rounded-full md:rounded-xl">
          <div className="w-full h-14 fixed flex items-center justify-between max-w-10xl z-0 px-6 box-border">
            <Navigation />
            <BannerLogo />
            <div className="flex items-center space-x-6">
              <ThemeSwitcher />
              <Burger isOpen={isOpen} callback={toggleOpen} />
              <div className="md:flex hidden">
                <SignedIn>
                  <UserButton showName />
                </SignedIn>
                <SignedOut>
                  <SignInButton>Sign in</SignInButton>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
