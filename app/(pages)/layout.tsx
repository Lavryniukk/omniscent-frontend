"use client";
import "@/app/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../processes/auth";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import CreditsProvider from "../processes/credits/CreditsProvider";
import { Recursive } from "next/font/google";

const hedvigLettersSerif = Recursive({
  subsets: ["latin"],
  variable: "--font-body",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new QueryClient();

  return (
    <html
      lang="en"
      className={`  ${hedvigLettersSerif.variable} font-body `}
      suppressHydrationWarning
    >
      <body className="  antialiased ">
        <QueryClientProvider client={client}>
          <AuthProvider>
            <CreditsProvider>
              <ThemeProvider
                attribute="class"
                enableSystem={true}
                disableTransitionOnChange
              >
                {children}
                <Toaster />
              </ThemeProvider>
            </CreditsProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>

      <Analytics />
    </html>
  );
}
