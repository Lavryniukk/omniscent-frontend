"use client";
import checkToken from "../api/auth/[auth0]/healthCheck";
import "@/app/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Inter } from "next/font/google";

import { ObserverProvider } from "../shared/providers/ObserverProvider";
import AuthPopup from "../shared/components/popups/AuthPopup";
import { useEffect } from "react";
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
      <body>
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
