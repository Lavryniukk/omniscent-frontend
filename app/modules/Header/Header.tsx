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
import theme from "tailwindcss/defaultTheme";
let Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { theme, setTheme } = useTheme();

  return (
    <>
      <Popup isOpen={isOpen} />
      <div className="flex items-center justify-center">
        <div
          className={`h-14 flex z-50 w-10/12 justify-center items-center backdrop-blur-md fixed top-4 border-secondary box-border border max-w-10xl rounded-lg`}
        >
          <div className="w-full h-14 fixed flex items-center justify-between max-w-10xl z-0 px-6 box-border">
            {/* <Navigation theme={theme} /> */}
            <Navigation />

            <div className="md:hidden flex justify-between items-center w-full">
              <Link href="/" className="flex items-center h-full ">
                <Image
                  // src={`/images/logo-cleverize-${
                  //   !picTheme ? "dark" : picTheme == "light" ? "dark" : "light"
                  // }.webp`}
                  src={`/images/logo-cleverize-light.webp`}
                  className={`border-text ml-0 `}
                  alt=""
                  width={40}
                  height={40}
                />
              </Link>

              <Burger
                isOpen={isOpen}
                callback={() => {
                  setIsOpen(!isOpen);
                }}
              />
            </div>
            <div className="flex items-center space-x-5">
              {/* <ThemeSwitcher
                theme={theme}
                callback={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                }}
              /> */}
              <div className="md:flex hidden">
                <SignedIn>
                  <UserButton showName />
                </SignedIn>
                <SignedOut>
                  <SignInButton>
                    <button className="block text-text border-text px-4 py-1 border rounded hover:border-transparent hover:bg-text hover:text-background transition duration-300 font-semibold">
                      Sign in
                    </button>
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
