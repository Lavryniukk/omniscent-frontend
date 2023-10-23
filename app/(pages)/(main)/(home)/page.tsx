import Features from "@/app/modules/Features/Features";
import Home from "@/app/modules/Hero/Hero";
import Reviews from "@/app/modules/Reviews/Reviews";
import { NextPage } from "next";

let HomePage: NextPage = () => {
  return (
    <main className="mb-10">
      <Home />
      <Features />
      <Reviews />
    </main>
  );
};
export default HomePage;
