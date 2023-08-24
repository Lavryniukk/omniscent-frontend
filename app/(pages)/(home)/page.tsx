import TypingAnimation from "@/app/UI/TypingAnimation";
import { NextPage } from "next";
import HomeButtons from "@/app/components/HomeButtons/HomeButtons";
import PageGradient from "@/app/UI/PageGradient";
import Logo from "@/app/UI/OmniLogo";

let HomePage: NextPage = () => {
  return (
    <div
      className=" overflow-x-hidden h-screen bg-transparent mx-auto box-border max-w-10xl
                            w-full pt-40 sm:pt-52 md:pt-64"
    >
      <PageGradient />
      <h1
        className="text-5xl tracking-wider text-text sm:text-6xl
                            md:text-7xl lg:text-8xl font-roboto font-bold text-center "
      >
        Become <span className="text-primary">Omniscient</span>
      </h1>
      <TypingAnimation />
      <HomeButtons />
    </div>
  );
};
export default HomePage;
