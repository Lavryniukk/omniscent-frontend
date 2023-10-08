"use client";
import "@/app/globals.css";
import { Roboto } from "next/font/google";
import Header from "../../modules/header/Header";
import { UserProvider } from "@auth0/nextjs-auth0/client";
const roboto = Roboto({
  variable: "--roboto-font",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} bg-background`}>
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
