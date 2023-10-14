"use client";
import "@/app/globals.css";
import { Roboto, Montserrat, Raleway } from "next/font/google";
import Header from "../../modules/header/Header";
import { UserProvider } from "@auth0/nextjs-auth0/client";
const roboto = Roboto({
  variable: "--roboto-font",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--roboto-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} overflow-x-hidden bg-background`}
    >
      <body>
        <UserProvider>
          <Header />
          {children}
          {/* <Footer /> */}
        </UserProvider>
      </body>
    </html>
  );
}
