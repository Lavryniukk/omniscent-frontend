"use client";
import "@/app/globals.css";
import HomeButton from "@/app/UI/buttons/backBtn/BackButton";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter, Raleway, Roboto } from "next/font/google";

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
  const client = new QueryClient();
  return (
    <html lang="en" className={`${inter.variable} overflow-auto bg-background`}>
      <body>
        <QueryClientProvider client={client}>
          <UserProvider>
            <HomeButton />
            {children}
          </UserProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
