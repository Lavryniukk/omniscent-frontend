import Features from "@/app/modules/home/FeaturesSection/Features";
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
