"use client";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "../../modules/header/Header";
import Popup from "@/app/modules/BurgerPopup/BurgerPopup";
import { useState } from "react";
const roboto = Roboto({
  variable: "--roboto-font",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omniscient",
  description: "Omniscient Personal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let [isOpen, setIsOpen] = useState(false);
  let toggleMenu: () => void = () => {
    setIsOpen(!isOpen);
  };
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <Header isOpen={isOpen} toggleMenu={toggleMenu} />
        <Popup isOpen={isOpen} />
        {children}
      </body>
    </html>
  );
}
