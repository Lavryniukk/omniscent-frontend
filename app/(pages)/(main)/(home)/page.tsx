import Features from "@/app/modules/Features/Features";
import Home from "@/app/modules/Hero/Hero";
import Reviews from "@/app/modules/Reviews/Reviews";
import { NextPage } from "next";

let HomePage: NextPage = () => {
  return (
    <main className="mb-10">
      <Home />
      <Features />
      <div className="h-[1px] bg-secondary mt-40" />
      <Reviews />
    </main>
  );
};
export default HomePage;
