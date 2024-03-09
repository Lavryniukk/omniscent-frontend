import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

export default function withClientAuth(Component: any) {
  return function WithAuth(props: any) {
    // const { isAuth } = useAuth();
    // useEffect(() => {
    //   console.log("Effect", isAuth);
    //   if (!isAuth) {
    //     console.log("Redirecting");
    //     redirect("/sign-in");
    //   }
    // }, []);

    return <Component {...props} />;
  };
}
