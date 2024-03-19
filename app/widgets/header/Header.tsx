"use client";
import { useState } from "react";
import Burger from "@/app/widgets/header/ui/BurgerNavigation";
import Popup from "@/app/widgets/header/ui/BurgerPopup";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "@/app/features";
import Navigation from "./ui/Navigation";
import Logo from "./ui/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />

      <header className="h-12 p-4 flex z-50 w-11/12 lg:w-3/4 border left-1/2 -translate-x-1/2 justify-between px-10 items-center max-w-7xl backdrop-blur-md fixed top-4 right-4 box-border bg-background/50 rounded-full md:rounded-xl">
        <div className="gap-10 flex items-center">
          <Logo />
          <Navigation />
        </div>

        <div className="flex items-center gap-5">
          <div className="max-md:hidden">
            <ThemeSwitcher />
          </div>
          <Burger
            isOpen={isOpen}
            callback={() => {
              setIsOpen(!isOpen);
            }}
          />
          <div className="md:flex hidden">
            <SignedIn>
              <Link href={"/workspace"}>
                <Button>To workspace</Button>
              </Link>
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
