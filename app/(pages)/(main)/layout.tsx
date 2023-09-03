import "@/app/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "../../shared/header/Header";
const roboto = Roboto({
  variable: "--roboto-font",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omniscient",
  description: "Omniscient Personal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
