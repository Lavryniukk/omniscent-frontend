"use client";
import useTheme from "@/app/shared/storages/themeStorage";
import "@/app/globals.css";
import Footer from "@/app/modules/footer/Footer";
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
  const theme = useTheme((state) => state.theme);

  return (
    <html data-theme={theme} lang="en" className={`${roboto.variable}`}>
      <body>
        <UserProvider>
          <Header />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
