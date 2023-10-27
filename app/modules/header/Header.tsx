"use client";

import Burger from "@/app/modules/header/components/BurgerMenuButton/BurgerNavigation";
import HeaderLink from "@/app/modules/header/components/HeaderLink/HeaderLink";
import Logo from "@/app/UI/icons/OmniLogo";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import Popup from "./components/BurgerPopup/BurgerPopup";
import Link from "next/link";
import SignIn from "@/app/modules/header/components/SignIn/SignIn";
import ProfileLink from "./components/ProfileLink/ProfileLink";

let Header = () => {
  let [isOpen, setIsOpen] = useState(false); // Initialize state for mobile menu open/close.
  const { user, isLoading } = useUser(); // Use the useUser hook from Auth0 to retrieve user information and loading state.

  let toggleMenu: () => void = () => {
    setIsOpen(!isOpen); // Function to toggle the mobile menu open/close.
  };

  return (
    <>
      <Popup isOpen={isOpen} />{" "}
      {/* Render the mobile menu popup with open state. */}
      <div className="border-b h-14 flex w-full justify-center items-center backdrop-blur-sm fixed top-0 z-10 border-accent box-border">
        <div className="w-full h-14 fixed top-0 flex items-center justify-between max-w-10xl z-0 px-10 sm:px-5 box-border">
          <Link className="w-52" href="/">
            {" "}
            {/* Render a link to the homepage with the Logo. */}
            <Logo />
          </Link>
          <Burger isOpen={isOpen} toggleMenu={toggleMenu} />{" "}
          {/* Render the mobile menu button. */}
          <div className="space-x-5 hidden sm:block">
            {" "}
            {/* Render navigation links. */}
            <HeaderLink url="/" name="Home" />
            <HeaderLink url="/projects" name="Prototype" />
            <HeaderLink url="/memberships" name="Memberships" />
          </div>
          <div className="sm:flex w-52 hidden">
            {" "}
            {/* Render user-related components based on user authentication state. */}
            {isLoading ? ( // If loading, display a loading spinner.
              <div className="w-10 mx-auto h-10 rounded-full border-2 border-secondary-700 border-t-accent animate-spin" />
            ) : user ? ( // If a user is authenticated, display the user profile link.
              <ProfileLink />
            ) : (
              // If no user is authenticated, display the Sign In component.
              <SignIn />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
