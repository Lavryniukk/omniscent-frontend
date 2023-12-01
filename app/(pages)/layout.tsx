"use client";
import "@/app/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";

import { ObserverProvider } from "../shared/providers/ObserverProvider";

import { TokenCheckerProvider } from "../shared/providers/AuthCheckerProvider";
import { useEffect } from "react";
import { ThemeProvider } from "../shared/providers/ThemeProvider";
const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new QueryClient();

  return (
    <html lang="en" className={`${inter.variable}   `}>
      <body className="font-inter  bg-background">
        <UserProvider>
          <QueryClientProvider client={client}>
            <ThemeProvider>
              <TokenCheckerProvider>
                <ObserverProvider>{children}</ObserverProvider>
              </TokenCheckerProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </UserProvider>
      </body>
    </html>
  );
}
