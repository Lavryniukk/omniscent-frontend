"use client";
import useTheme from "@/app/shared/storages/themeStorage";
import "@/app/globals.css";
import Footer from "@/app/modules/footer/Footer";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "../../shared/header/Header";
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
  const theme = useTheme((state) => state.theme);
  return (
    <html data-theme={theme} lang="en" className={`${roboto.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
