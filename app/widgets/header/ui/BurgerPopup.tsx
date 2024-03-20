"use client";

import { SignedIn, SignedOut } from "@/app/processes/auth";
import { LogoutButton } from "@/app/processes/auth/ui";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

let Popup = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={` ${isOpen ? "top-0" : "-top-full"} md:hidden z-50 backdrop-blur-md right-0  fixed h-full border-l text-xl justify-center w-full transition-all py-10 border-transparent gap-20 duration-300 flex flex-col  items-center `}
    >
      <div>
        <SignedIn>
          <div className="flex gap-2">
            <LogoutButton />
            <Link
              className="link link-primary link-size-lg"
              href={"/workspace"}
            >
              To workspace
            </Link>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex gap-2">
            <Link className="link link-ghost link-size-lg" href={"/sign-in"}>
              Log in
            </Link>
            <Link className="link link-primary link-size-lg" href={"/sign-up"}>
              Sign up
            </Link>
          </div>
        </SignedOut>
      </div>
      <nav className="flex flex-col items-center justify-center gap-10">
        <Link
          href={"/"}
          onClick={() => setIsOpen(false)}
          className={`  hover:opacity-80 transition-opacity duration-100`}
        >
          Home
        </Link>
        <Link
          href={"/workspace"}
          onClick={() => setIsOpen(false)}
          className={`  hover:opacity-80 transition-opacity duration-100`}
        >
          Workspace
        </Link>
        <Link
          href={"/blog"}
          onClick={() => setIsOpen(false)}
          className={`  hover:opacity-80 transition-opacity duration-100`}
        >
          Blog
        </Link>
        <Link
          href={"/support-us"}
          onClick={() => setIsOpen(false)}
          className={`  hover:opacity-80 transition-opacity duration-100`}
        >
          Support us
        </Link>
      </nav>
    </div>
  );
};

export default Popup;
