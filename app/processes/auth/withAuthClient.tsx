"use client";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

export default function withClientAuth(Component: any) {
  return function WithAuth(props: any) {
    const { data: isAuthorized, isLoading, error } = useAuth();
    const router = useRouter();

    useLayoutEffect(() => {
      if (error) {
        router.push("/sign-up");
      }

      if (!isAuthorized && !isLoading && isAuthorized !== null) {
        router.push("/sign-up");
      }
    }, [error, isAuthorized, isLoading, router]);

    return <Component {...props} />;
  };
}
