"use client";

import SignIn from "@/app/modules/header/components/SignIn/SignIn";
import HeaderLink from "@/app/modules/header/components/HeaderLink/HeaderLink";
import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileLink from "../ProfileLink/ProfileLink";

type Props = {
  isOpen: boolean; // Define a prop for the mobile menu open state.
};

let Popup = ({ isOpen }: Props) => {
  let { user } = useUser(); // Use the useUser hook to retrieve user information.

  return (
    <div
      className={`top-14 sm:hidden ${
        isOpen ? "right-0" : "-right-36"
      } fixed h-full border-l w-3/12 transition-all py-10 backdrop-blur-md duration-200 flex flex-col space-y-5 justify-start items-center z-10`}
    >
      <div className="flex flex-col space-y-5 items-center">
        {" "}
        {/* Render navigation links. */}
        <HeaderLink url="/" name="Home" />
        <HeaderLink url="/projects" name="Prototype" />
        <HeaderLink url="/memberships" name="Memberships" />
      </div>
      <div className="w-10 h-0.5 bg-accent " />{" "}
      {/* Render a horizontal separator. */}
      <div className="mt-5 flex flex-col space-y-5 items-center">
        {" "}
        {/* Render user-related components based on user authentication state. */}
        {user ? <ProfileLink /> : <SignIn />}
      </div>
    </div>
  );
};

export default Popup;
