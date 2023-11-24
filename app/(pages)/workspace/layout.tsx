"use client";

import "@/app/globals.css";
import { useEffect, useLayoutEffect } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import checkToken from "@/app/api/auth/[auth0]/healthCheck";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let { data, error } = useQuery(["checker"], () => {
    return checkToken;
  });
  if (error) {
    console.log("some error ocurred");
  }
  return <>{children}</>;
}
