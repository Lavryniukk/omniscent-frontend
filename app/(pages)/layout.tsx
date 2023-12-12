"use client";
import "@/app/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ObserverProvider } from "../shared/providers/ObserverProvider";
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
    <ClerkProvider>
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <UserProvider>
            <html lang="en" className={`${inter.variable}`}>
              <body className="font-inter  bg-background ">
                {/* <TokenCheckerProvider> */}
                <ObserverProvider>{children}</ObserverProvider>
                {/* </TokenCheckerProvider> */}
              </body>
            </html>
          </UserProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
