import GitHubIco from "@/app/UI/GihubIco";
import Link from "next/link";
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
          <Link
            href={""}
            className="text-text hover:text-accent text-md font-roboto font-light transition-colors duration-200 "
          >
            Home
          </Link>
          <Link
            href={""}
            className="text-text hover:text-accent text-md font-roboto font-light transition-colors duration-200 "
          >
            Pricing
          </Link>
          <Link
            href={""}
            className="text-text hover:text-accent text-md font-roboto font-light transition-colors duration-200 "
          >
            FAQ
          </Link>
          <Link
            href={""}
            className="text-text hover:text-accent text-md font-roboto font-light transition-colors duration-200 "
          >
            About us
          </Link>
        </div>
        <GitHubIco />
      </div>
    </div>
  );
};

export default Header;
