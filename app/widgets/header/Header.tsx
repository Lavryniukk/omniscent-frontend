"use client";
import { useState } from "react";
import Burger from "@/app/widgets/header/ui/BurgerNavigation";
import Popup from "@/app/widgets/header/ui/BurgerPopup";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "@/app/features";
import Navigation from "./ui/Navigation";
import Logo from "./ui/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
      <header className="h-12 flex z-50 w-11/12 lg:w-3/4 mx-auto bg-azure-100/50 dark:bg-azure-900/50 justify-between px-10 items-center backdrop-blur-md fixed top-4 border-azure-300 dark:border-azure-700 box-border border max-w-10xl rounded-full md:rounded-xl">
        <div className="gap-10 flex items-center">
          <Logo />
          <Navigation />
        </div>

        <div className="flex items-center gap-5">
          <ThemeSwitcher />
          <Burger isOpen={isOpen} callback={toggleOpen} />
          <div className="md:flex hidden">
            <SignedIn>
              <UserButton afterSignOutUrl="/" showName />
            </SignedIn>
            <SignedOut>
              <SignInButton>Sign in</SignInButton>
            </SignedOut>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
