"use client";
import "@/app/globals.css";
import { Roboto, Raleway, Inter } from "next/font/google";
import Header from "../../modules/header/Header";
import { UserProvider } from "@auth0/nextjs-auth0/client";
const inter = Inter({
  variable: "--inter-font",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
// const roboto = Raleway({
//   variable: "--roboto-font",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
