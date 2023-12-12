"use client";
import "@/app/globals.css";
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
          <html lang="en" className={`${inter.variable}`}>
            <body className="font-inter  bg-background ">
              <ObserverProvider>{children}</ObserverProvider>
            </body>
          </html>
        </ThemeProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
