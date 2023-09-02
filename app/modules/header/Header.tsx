import GitHubIco from "@/app/UI/GihubIco";
import HeaderLink from "@/app/components/headerLink/HeaderLink";
import Logo from "@/app/UI/OmniLogo";
let Header = () => {
  return (
    <div className="border-b h-14 flex w-full justify-center backdrop-blur-sm fixed top-0.5 z-10 border-accent box-border ">
      <div
        className="w-full h-14 fixed top-0  flex
                        items-center justify-between max-w-10xl z-0 px-5
                        box-border"
      >
        <Logo />
        <div className=" space-x-5">
          <HeaderLink url="/" name="Home" />
          <HeaderLink url="/prototype" name="Prototype" />
          <HeaderLink url="/faq" name="FAQ" />
          <HeaderLink url="/about" name="About us" />
        </div>
        <GitHubIco />
      </div>
    </div>
  );
};

export default Header;
