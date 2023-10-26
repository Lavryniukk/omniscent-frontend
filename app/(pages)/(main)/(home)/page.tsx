"use client";
import Features from "@/app/modules/Features/Features";
import Title from "@/app/modules/Hero/components/Title/Title";
import Reviews from "@/app/modules/Reviews/Reviews";
import { NextPage } from "next";
let HomePage: NextPage = () => {
  return (
    <main
      className="mb-10 mt-14 overflow-hidden pt-40  h-fit bg-transparent mx-auto box-border max-w-10xl
    w-full "
    >
      <Title />
      <Features />
      <Reviews />
    </main>
  );
};
export default HomePage;
