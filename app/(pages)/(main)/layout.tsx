"use client";
import "@/app/globals.css";
import { Roboto, Raleway, Inter } from "next/font/google";
import Header from "../../modules/Header/Header";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
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

  return (
    <html
      lang="en"
      className={`${inter.variable} overflow-x-hidden bg-background`}
    >
      <body className="font-inter">
        <UserProvider>
          {/* Auth0's UserProvider for user authentication. */}
          <Header /> {/* Render the Header component. */}
          {children} {/* Render the children components passed as props. */}
          {/* <Footer /> */}
        </UserProvider>
      </body>
    </html>
  );
}
