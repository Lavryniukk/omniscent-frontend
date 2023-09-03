import Features from "@/app/modules/home/FeaturesSection/Features";
import Pricing from "@/app/modules/home/PricingSection/Pricing";
import Home from "@/app/modules/home/WelcomeSection/Welcome";
import { NextPage } from "next";

let HomePage: NextPage = () => {
  return (
    <>
      <Home />
      <Features />
      <Pricing />
    </>
  );
};
export default HomePage;
