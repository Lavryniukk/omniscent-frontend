"use client";
import "@/app/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
// import SubscriptionProvider from "../shared/providers/SubscriptionProvider";

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
      <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
        <body className="font-inter antialiased bg-azure-50 dark:bg-azure-950">
          <QueryClientProvider client={client}>
            {/* <SubscriptionProvider> */}
            <ThemeProvider attribute="class" disableTransitionOnChange>
              {children}
            </ThemeProvider>
            {/* </SubscriptionProvider> */}
          </QueryClientProvider>
        </body>
      </html>
  </ClerkProvider>
  );
}
