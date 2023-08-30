import Features from "@/app/modules/FeaturesPage/Features";
import Home from "@/app/modules/HomePage/Home";
import { NextPage } from "next";

let HomePage: NextPage = () => {
  return (
    <>
      <Home></Home>
      <Features />
    </>
  );
};
export default HomePage;
