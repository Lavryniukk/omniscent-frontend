import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import AuthPopup from "../components/popups/AuthPopup";
import checkToken from "@/app/api/auth/[auth0]/healthCheck";
// Create Context

// Provider Component
export const TokenCheckerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Set the value that will be provided to components
  const { user, error, checkSession, isLoading } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await checkToken();
        console.log('tes',data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return !isLoading && !error ? (
    <div>{children}</div>
  ) : user ? (
    <AuthPopup isOpen={true} />
  ) : (
    <div>{children}</div>
  );
};

// Export the context for use in other components

