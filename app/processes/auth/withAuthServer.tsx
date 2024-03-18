import { useEffect } from "react";
import { redirect } from "next/navigation";
import isAuthorized from "./api/fetch-is-authorized";

export default async function withAuth(Component: any) {
  return async function WithAuth(props: any) {
    try {
      const isAuth = await isAuthorized();
      if (!isAuth) {
        redirect("/sign-in");
      }
    } catch (error) {
      redirect("/sign-in");
    }

    return <Component {...props} />;
  };
}
