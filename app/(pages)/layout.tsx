"use client";
import "@/app/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-inter bg-background">
        <ClerkProvider>
          <QueryClientProvider client={client}>
            <ThemeProvider>{children}</ThemeProvider>
          </QueryClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
