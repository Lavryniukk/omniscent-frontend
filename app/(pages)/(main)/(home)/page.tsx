import Features from "@/app/modules/Features/Features";
import Home from "@/app/modules/Hero/Hero";
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
