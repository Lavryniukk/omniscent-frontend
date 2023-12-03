"use client";
import checkToken from "@/app/api/auth/[auth0]/healthCheck";
import { useQuery } from "@tanstack/react-query";
import AuthPopup from "../components/popups/AuthPopup";
import { useUser } from "@auth0/nextjs-auth0/client";
// Create Context

// Provider Component
export const TokenCheckerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Set the value that will be provided to components
  const { user } = useUser();
  const { error, data, isLoading } = useQuery(["checkToken"], async () => {
    return await checkToken();
  });

  return !isLoading && !error ? (
    <div>{children}</div>
  ) : !user ? (
    <div>{children}</div>
  ) : (
    <AuthPopup isOpen={error ? true : false} />
  );
};

// Export the context for use in other components
