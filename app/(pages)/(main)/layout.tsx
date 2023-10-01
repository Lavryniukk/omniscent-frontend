"use client";
import useTheme from "@/app/shared/storages/themeStorage";
import "@/app/globals.css";
import Footer from "@/app/modules/footer/Footer";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "../../shared/header/Header";
import { AuthProvider } from "@/app/shared/providers/authProvider/authProvider";
const roboto = Roboto({
  variable: "--roboto-font",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme((state) => state.theme);
  return (
    <html data-theme={theme} lang="en" className={`${roboto.variable}`}>
      <body>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
