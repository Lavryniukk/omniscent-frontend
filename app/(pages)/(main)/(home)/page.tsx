"use client";
import Features from "@/app/UI/static/Home/Features/Features";
import Hero from "@/app/UI/static/Home/Hero/Hero";
import Reviews from "@/app/UI/static/Home/Reviews/Reviews";
import api from "@/app/api/auth/[auth0]/healthCheck";
import { NextPage } from "next";
import { useEffect } from "react";
// HomePage is a Next.js page component representing the main landing page of the application.
// It includes the Title component, Features component, and Reviews component.

let HomePage: NextPage = () => {

  return (
    <main className="mb-10  overflow-hidden  h-fit bg-transparent mx-auto box-border w-full">
      <Hero /> {/* Renders the title section of the landing page. */}
      <Features /> {/* Renders the features section of the landing page. */}
      <Reviews /> {/* Renders the reviews section of the landing page. */}
    </main>
  );
};

export default HomePage;
