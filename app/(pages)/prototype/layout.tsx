"use client";
import "@/app/globals.css";
import HomeButton from "@/app/UI/buttons/backBtn/BackButton";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Roboto } from "next/font/google";
import Providers from "./Providers";

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
  const queryClient = new QueryClient();
  return (
    <html
      lang="en"
      className={`${roboto.variable} overflow-auto bg-background`}
    >
      <body>
        <UserProvider>
          <Providers>
            <HomeButton />
            {children}
          </Providers>
        </UserProvider>
      </body>
    </html>
  );
}
