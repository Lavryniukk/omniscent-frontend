import TypingAnimation from "@/app/UI/TypingAnimation";
import { NextPage } from "next";
import HomeButtons from "@/app/components/HomeButtons/HomeButtons";
import PageGradient from "@/app/UI/PageGradient";
import Home from "@/app/modules/homePage/Home";
import Features from "@/app/modules/featuresPage/Features";

let HomePage: NextPage = () => {
  return (
    <>
      <Home />
      <Features />
    </>
  );
};
export default HomePage;
