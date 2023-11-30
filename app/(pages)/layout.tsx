"use client";
import "@/app/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";

import { ObserverProvider } from "../shared/providers/ObserverProvider";

import { TokenCheckerProvider } from "../shared/providers/AuthCheckerProvider";
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
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-inter">
        <UserProvider>
          <QueryClientProvider client={client}>
            <TokenCheckerProvider>
              <ObserverProvider>{children}</ObserverProvider>
            </TokenCheckerProvider>
          </QueryClientProvider>
        </UserProvider>
      </body>
    </html>
  );
}
