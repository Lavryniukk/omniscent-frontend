"use client";
import ProfileLink from "@/app/components/headerComponents/Auth/profileLink";
import SignIn from "@/app/components/headerComponents/noAuth/SignIn";
import HeaderLink from "@/app/components/headerLink/HeaderLink";
import { useUser } from "@auth0/nextjs-auth0/client";
type Props = {
  isOpen: boolean;
};
let Popup = ({ isOpen }: Props) => {
  let { user } = useUser();
  return (
    <div
      className={`top-14 sm:hidden ${
        isOpen ? "right-0" : "-right-36"
      } fixed h-full border-l w-3/12 transition-all py-10 backdrop-blur-md duration-200 flex flex-col space-y-5 justify-start items-center z-10`}
    >
      <div className="flex flex-col space-y-5 items-center">
        <HeaderLink url="/" name="Home" />
        <HeaderLink url="/projects" name="Prototype" />
        <HeaderLink url="/memberships" name="Memberships" />
      </div>
      <div className="w-10 h-0.5 bg-accent " />
      <div className="mt-5 flex flex-col space-y-5 items-center">
        {user ? <ProfileLink /> : <SignIn />}
      </div>
    </div>
  );
};
export default Popup;
