"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "@/app/globals.css";
import { useEffect, useLayoutEffect } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Inter } from "next/font/google";
import checkToken from "@/app/api/auth/[auth0]/healthCheck";
import AuthPopup from "../shared/components/popups/AuthPopup";

// Define the 'inter' font with specific configurations.
const inter = Inter({
  variable: "--inter-font",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const animated_elems = document.querySelectorAll(".observe");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((elem) => {
        elem.isIntersecting && elem.target.classList.add("observe-show");
      });
    });

    // Observe the elements
    animated_elems.forEach((elem) => {
      observer.observe(elem);
    });

    // Cleanup observer on unmount
    return () => {
      animated_elems.forEach((elem) => {
        observer.unobserve(elem);
      });
    };
  }, []);
  const stripePromise = loadStripe(
    "pk_test_51OEFinCCMdYQSDIPeyIDLaczM18F5PKwdNpylgrvorfKCfcx11BFZGT79dPQ9QAqVQT5XHNgSkUKjsnnGPq752AI00rVIvbw6X"
  );
  const client = new QueryClient(); // Create a new instance of QueryClient.

  return (
    <html lang="en" className={`${inter.variable} overflow-auto bg-background`}>
      <body>
        <QueryClientProvider client={client}>
          <Elements stripe={stripePromise}>
            <UserProvider>
              <AuthPopup />
              {children} {/* Render the children components passed as props. */}
            </UserProvider>
          </Elements>
        </QueryClientProvider>
      </body>
    </html>
  );
}
