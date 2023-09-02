import HeaderLink from "@/app/components/headerLink/HeaderLink";
import Link from "next/link";

type Props = {
  isOpen: boolean;
};
let Popup = ({ isOpen }: Props) => {
  return (
    <div
      className={`top-14 sm:hidden ${
        isOpen ? "right-0" : "-right-36"
      } fixed h-full border-l w-3/12 transition-all py-10 backdrop-blur-md duration-200 flex flex-col space-y-5 justify-start items-center`}
    >
      <HeaderLink url="" name="Home" />
      <HeaderLink url="" name="Prototype" />
      <HeaderLink url="" name="FAQ" />
      <HeaderLink url="" name="About us" />
      <HeaderLink url="" name="Sign in" />
      <HeaderLink url="" name="Sign up" />
    </div>
  );
};
export default Popup;
