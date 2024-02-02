"use client";

import Button from "@/app/UI/buttons/Button";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

type Props = {
  isOpen: boolean; // Define a prop for the mobile menu open state.
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
        className={`text-azure-950 dark:text-azure-50 hover:opacity-80 transition-opacity duration-100`}
      >
        Home
      </Link>
      <Link
        href={"/workspace"}
        onClick={() => setIsOpen(false)}
        className={`text-azure-950 dark:text-azure-50 hover:opacity-80 transition-opacity duration-100`}
      >
        Workspace
      </Link>
      <Link
        href={"/blog"}
        onClick={() => setIsOpen(false)}
        className={`text-azure-950 dark:text-azure-50 hover:opacity-80 transition-opacity duration-100`}
      >
        Blog
      </Link>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Button variant="primary">
          <SignInButton>Sign in</SignInButton>
        </Button>
      </SignedOut>
    </div>
  );
};

export default Popup;
