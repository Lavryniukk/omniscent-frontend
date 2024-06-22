"use client";
import { useState } from "react";
import Burger from "@/app/widgets/header/ui/BurgerNavigation";
import Popup from "@/app/widgets/header/ui/BurgerPopup";
import { ThemeSwitcher } from "@/app/features";
import Navigation from "./ui/Navigation";
import Logo from "./ui/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { SignedIn, SignedOut } from "@/app/processes/auth";
import { LogoutButton } from "@/app/processes/auth/ui/";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  //TODO burger does not display on mobile, probably related to styles?
  return (
    <>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />

      <header className="h-12 flex z-50 w-full left-1/2 max-w-8xl -translate-x-1/2 justify-between px-2 md:px-8 items-center  backdrop-blur-md fixed top-2  box-border  ">
        <div className="gap-10 flex items-center">
          <Logo />
          <Navigation />
        </div>

        <div className="flex items-center gap-5">
          <Burger
            isOpen={isOpen}
            callback={() => {
              setIsOpen(!isOpen);
            }}
          />
          <div className="md:flex hidden">
            <SignedIn>
              <div className="flex gap-2">
                <LogoutButton />
                <Link
                  className="link link-primary link-size-md"
                  href={"/workspace"}
                >
                  To workspace
                </Link>
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex gap-5">
                <Link
                  className="link link-ghost link-size-md"
                  href={"/sign-in"}
                >
                  Sign in
                </Link>
                <Link
                  className="link link-primary link-size-md"
                  href={"/sign-up"}
                >
                  Sign up
                </Link>
              </div>
            </SignedOut>
          </div>
          <div className="max-md:hidden">
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
