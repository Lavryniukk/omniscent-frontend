"use client";
import "@/app/globals.css";
import HomeButton from "@/app/UI/buttons/backBtn/BackButton";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { QueryClient } from "@tanstack/react-query";
import { Roboto } from "next/font/google";

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
  return (
    <html
      lang="en"
      className={`${roboto.variable} overflow-auto bg-background`}
    >
      <body>
        <UserProvider>
          <HomeButton />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
