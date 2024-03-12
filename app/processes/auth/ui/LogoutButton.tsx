import { fetchLogout } from "@/app/shared/api/auth";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  return (
    <form action={fetchLogout}>
      <Button type="submit" variant={"ghost"}>
        Logout
      </Button>
    </form>
  );
}
