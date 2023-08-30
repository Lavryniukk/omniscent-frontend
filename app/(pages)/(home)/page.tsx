import { NextPage } from "next";
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
