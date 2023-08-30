import TreeMap from "@/app/modules/TreeMap/TreeMap";
import Features from "@/app/modules/featuresPage/Features";
import Home from "@/app/modules/homePage/Home";
import { NextPage } from "next";

let HomePage: NextPage = () => {
  return (
    <>
      <Home />
      <Features />
      <TreeMap />
    </>
  );
};
export default HomePage;
