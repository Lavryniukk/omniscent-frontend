import Features from "@/app/modules/home/FeaturesSection/Features";
import Pricing from "@/app/modules/memberships/PricingSection/Pricing";
import Home from "@/app/modules/home/WelcomeSection/Welcome";
import { NextPage } from "next";

let HomePage: NextPage = () => {
  return (
    <main className="mb-10">
      <Home />
      <Features />
    </main>
  );
};
export default HomePage;
