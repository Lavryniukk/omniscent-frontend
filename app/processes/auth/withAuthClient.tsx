"use client";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

export default function withClientAuth(Component: any) {
  return function WithAuth(props: any) {
    const { data: user, isLoading } = useAuth();
    const router = useRouter();
    useLayoutEffect(() => {
      if (!user && !isLoading) {
        router.push("/sign-in");
      }
    }, [isLoading]);

    return <Component {...props} />;
  };
}
