"use client";

import Burger from "@/app/modules/Header/components/BurgerMenuButton/BurgerNavigation";
import Popup from "@/app/modules/Header/components/BurgerPopup/BurgerPopup";
import Navigation from "./components/Navigation/Navigation";
import Image from "next/image";
import Link from "next/link";
// import { useTheme } from "@/app/shared/providers/ThemeProvider";
import { useState } from "react";
// import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "next-themes";
import Button from "@/app/UI/buttons/Button";
let Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Popup isOpen={isOpen} />
      <div className="flex items-center justify-center">
        <div
          className={`h-14 flex z-50 w-11/12 lg:w-3/4 justify-center items-center backdrop-blur-md fixed top-4 border-text/20 box-border border max-w-10xl rounded-full md:rounded-xl`}
        >
          <div className="w-full h-14 fixed flex items-center justify-between max-w-10xl z-0 px-6 box-border">
            <Navigation theme={theme as string} />
            {/* <Navigation /> */}

            <div className="md:hidden flex justify-between items-center w-full">
              <Link href="/" className="flex items-center h-full ">
                <Image
                  src={`/images/logo-cleverize-${
                    !theme ? "dark" : theme == "light" ? "dark" : "light"
                  }.webp`}
                  // src={`/images/logo-cleverize-light.webp`}
                  className={`border-text ml-0 `}
                  alt=""
                  width={40}
                  height={40}
                />
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <ThemeSwitcher />
              <Burger
                isOpen={isOpen}
                callback={() => {
                  setIsOpen(!isOpen);
                }}
              />
              <div className="md:flex hidden">
                <SignedIn>
                  <UserButton showName />
                </SignedIn>
                <SignedOut>
                  <SignInButton>
                    {/* <Button variant="outline" size="sm"> */}
                    Sign in
                    {/* </Button> */}
                  </SignInButton>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
