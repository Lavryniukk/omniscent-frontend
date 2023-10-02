"use client";
import useTheme from "@/app/shared/storages/themeStorage";
import "@/app/globals.css";
import HomeButton from "@/app/UI/buttons/backBtn/BackButton";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Roboto } from "next/font/google";

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
    <html
      lang="en"
      data-theme={theme}
      className={`${roboto.variable} overflow-auto `}
    >
      <body>
        <UserProvider>
          <HomeButton />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
