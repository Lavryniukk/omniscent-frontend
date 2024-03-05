"use client";

import { SignedIn, SignedOut } from "@/app/processes/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

let Popup = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={` ${isOpen ? "top-0" : "-top-full"} md:hidden z-50 backdrop-blur-md right-0  fixed h-full border-l text-xl justify-center w-full transition-all py-10 border-transparent gap-10 duration-300 flex flex-col  items-center `}
    >
      <Link
        href={"/"}
        onClick={() => setIsOpen(false)}
        className={` 950 dark:text-foreground hover:opacity-80 transition-opacity duration-100`}
      >
        Home
      </Link>
      <Link
        href={"/workspace"}
        onClick={() => setIsOpen(false)}
        className={` 950 dark:text-foreground hover:opacity-80 transition-opacity duration-100`}
      >
        Workspace
      </Link>
      <Link
        href={"/blog"}
        onClick={() => setIsOpen(false)}
        className={` 950 dark:text-foreground hover:opacity-80 transition-opacity duration-100`}
      >
        Blog
      </Link>
      <SignedIn>Profile</SignedIn>
      <SignedOut>
        <Button>
          <Link href={"/sign-in"}>
            <Button variant={"ghost"}>Sign in</Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button>Sign up</Button>
          </Link>
        </Button>
      </SignedOut>
    </div>
  );
};

export default Popup;
