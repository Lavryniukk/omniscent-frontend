"use client";
import "@/app/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ObserverProvider } from "../shared/providers/ObserverProvider";
import { ThemeProvider } from "../shared/providers/ThemeProvider";
// import { ThemeProvider } from "../shared/providers/ThemeProvider";
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
    <ThemeProvider>
      <ClerkProvider>
        <QueryClientProvider client={client}>
          <html lang="en" className={`${inter.variable}`}>
            <body className="font-inter bg-background">{children}</body>
          </html>
        </QueryClientProvider>
      </ClerkProvider>
    </ThemeProvider>
  );
}
