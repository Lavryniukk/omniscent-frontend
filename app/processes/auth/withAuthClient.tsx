"use client";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

export default function withClientAuth(Component: any) {
  return function WithAuth(props: any) {
    const { data: user } = useAuth();
    const router = useRouter();
    useLayoutEffect(() => {
      if (!user) {
        router.push("/sign-in");
      }
    }, []);

    return <Component {...props} />;
  };
}
