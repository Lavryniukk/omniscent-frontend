'use client'
import { fetchLogout } from "@/app/shared/api/auth";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export function LogoutButton() {
  //INFO: i don't know what the hell happened here, but onlcilck in form was triggering faster than the fetch deleted cookies, and axiosxWithAuth interceptors had time to fetch new token pair
  const [state, action] = useFormState(fetchLogout, false);

  useEffect(() => {
    state && location.reload();
  }, [state]);

  return (
    <form action={action}>
      <Button type="submit" variant={"ghost"}>
        Logout
      </Button>
    </form>
  );
}
