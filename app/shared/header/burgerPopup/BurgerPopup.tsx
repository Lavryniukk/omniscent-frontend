import HeaderLink from "@/app/components/headerLink/HeaderLink";
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
      <div className="flex flex-col space-y-5 items-center">
        <HeaderLink url="/" name="Home" />
        <HeaderLink url="/prototype" name="Prototype" />
        <HeaderLink url="/faq" name="FAQ" />
        <HeaderLink url="/about" name="About us" />
      </div>
      <div className="w-10 h-0.5 bg-accent " />
      <div className="mt-5 flex flex-col space-y-5 items-center">
        <HeaderLink url="/login" name="Sign in" />
        <HeaderLink url="/register" name="Sign up" />
      </div>
    </div>
  );
};
export default Popup;
