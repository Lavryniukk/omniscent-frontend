"use client";
import FeaturesSection from "@/app/(pages)/(main)/(home)/components/FeaturesSection/FeaturesSection";
import HeroSection from "@/app/(pages)/(main)/(home)/components/HeroSection/HeroSection";
import ReviewsSection from "@/app/(pages)/(main)/(home)/components/ReiewsSection/ReviewsSection";
import { NextPage } from "next";
// HomePage is a Next.js page component representing the main landing page of the application.
// It includes the Title component, Features component, and Reviews component.

let HomePage: NextPage = () => {
  return (
    <main className="mb-10 font-inter space-y-20 overflow-hidden h-fit bg-transparent mx-auto box-border w-full">
      <HeroSection /> {/* Renders the title section of the landing page. */}
      <FeaturesSection />{" "}
      {/* Renders the features section of the landing page. */}
      {/* <ReviewsSection />{" "} */}
      {/* Renders the reviews section of the landing page. */}
    </main>
  );
};

export default HomePage;
