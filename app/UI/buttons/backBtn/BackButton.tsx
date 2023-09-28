"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
let HomeButton = () => {
  let path = usePathname();
  let getLink = () => {
    switch (path) {
      case "/prototype":
        return "/";
      case "/prototype/chat":
        return "/prototype";
      case "/prototype/roadmap":
        return "/prototype";
      default:
        return "/";
    }
  };
  let getText = () => {
    switch (path) {
      case "/prototype":
        return "Home";
      case "/prototype/chat":
        return "Prototype";
      case "/prototype/roadmap":
        return "Prototype";
      default:
        return "/";
    }
  };
  let linkPath = getLink();
  return (
    <Link
      href={linkPath}
      title="Back to home page"
      className="z-10 fixed select-none cursor-pointer top-10 border overflow-hidden text-sm border-accent hover:border-primary transition-colors duration-300 group left-10 bg-transparent backdrop-blur-lg box-content rounded-lg w-16 h-9"
    >
      <div className="w-32 h-full flex bg-transparent transition-transform duration-300 hover:-translate-x-16 rounded-lg">
        <div className="w-1/2 h-full flex items-center justify-center rounded-lg bg-transparent">
          <FaArrowLeft size={25} className="w-4 text-accent box-content" />
        </div>
        <div className="w-1/2  h-full flex items-center justify-center rounded-lg bg-transparent">
          <p className="text-sm text-center text-accent">{getText()}</p>
        </div>
      </div>
    </Link>
  );
};
export default HomeButton;
