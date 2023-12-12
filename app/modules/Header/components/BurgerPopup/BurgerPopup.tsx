"use client";

import HeaderLink from "@/app/modules/Header/components/HeaderLink/HeaderLink";
import ProfileLink from "@/app/modules/Header/components/ProfileLink/ProfileLink";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

type Props = {
  isOpen: boolean; // Define a prop for the mobile menu open state.
};

let Popup = ({ isOpen }: Props) => {
  return (
    <div
      className={`top-14 md:hidden z-50 backdrop-blur-md ${
        isOpen ? "left-0" : "-left-full"
      } fixed h-full border-l w-full transition-all py-10 border-transparent duration-300 flex flex-col space-y-10 justify-start items-center z-10`}
    >
      <div className="flex flex-col space-y-10 items-center">
        {/* Render navigation links. */}
        <HeaderLink url="/" name="Home" />
        <HeaderLink url="/workspace" name="Workspace" />
        <HeaderLink url="/memberships" name="Memberships" />
        <HeaderLink url="/blog" name="Blog" />
      </div>
      <div className="w-10 h-0.5 bg-accent " />
      {/* Render a horizontal separator. */}
      <div className="mt-5 flex flex-col space-y-5 items-center">
        {/* Render user-related components based on user authentication state. */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>{" "}
      </div>
    </div>
  );
};

export default Popup;
