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
      <Spotlight
        fill="hsl(var(--primary))"
        className="-top-40  left-0 md:left-60 md:-top-20"
      />
      <header className="h-14 p-4 flex z-50 w-11/12 lg:w-3/4  border   justify-between px-10 items-center backdrop-blur-md fixed top-4 right-4  box-border bg-background/50  max-w-2xl rounded-full md:rounded-xl">
        <div className="gap-10 flex items-center">
          <Logo />
          <Navigation />
        </div>

        <div className="flex items-center gap-5">
          <ThemeSwitcher />
          <Burger isOpen={isOpen} callback={toggleOpen} />
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
