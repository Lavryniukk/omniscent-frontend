"use client";
import checkToken from "@/app/api/auth/[auth0]/healthCheck";
import { useQuery } from "@tanstack/react-query";
import AuthPopup from "../components/popups/AuthPopup";

// Create Context

// Provider Component
export const TokenCheckerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Set the value that will be provided to components
  const { error, data, isLoading } = useQuery(["checkToken"], async () => {
    return await checkToken();
  });

  return !error ? (
    <div>{children}</div>
  ) : (
    <AuthPopup isOpen={error ? true : false} />
  );
};

// Export the context for use in other components
