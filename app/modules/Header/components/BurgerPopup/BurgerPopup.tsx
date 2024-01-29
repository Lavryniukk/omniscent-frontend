"use client";

import HeaderLink from "@/app/modules/Header/components/HeaderLink/HeaderLink";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

type Props = {
  isOpen: boolean; // Define a prop for the mobile menu open state.
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

let Popup = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={`top-14 md:hidden z-50 backdrop-blur-md ${
        isOpen ? "right-0" : "-right-full"
      } fixed h-full border-l w-full transition-all py-10 border-transparent duration-300 flex flex-col space-y-10 justify-start items-center z-10`}
    >
      <div className="flex flex-col space-y-10 items-center">
        {/* Render navigation links. */}
        <HeaderLink url="/" name="Home" callbackfn={() => setIsOpen(false)} />
        <HeaderLink
          url="/workspace"
          name="Workspace"
          callbackfn={() => setIsOpen(false)}
        />

        <HeaderLink
          url="/blog"
          name="Blog"
          callbackfn={() => setIsOpen(false)}
        />
      </div>
      <div className="w-10 h-0.5 bg-accent " />
      {/* Render a horizontal separator. */}
      <div className="mt-5 flex flex-col space-y-5 items-center">
        {/* Render user-related components based on user authentication state. */}
        <SignedIn>
          <UserButton />
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
  );
};

export default Popup;
