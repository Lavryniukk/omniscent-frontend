"use client";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useEffect, useLayoutEffect } from "react";
import Header from "@/app/modules/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header /> {/* Render the Header component. */}
      {children} {/* Render the children components passed as props. */}
      {/* <Footer /> */}
    </>
  );
}
