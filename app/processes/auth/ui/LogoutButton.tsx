import { fetchLogout } from "@/app/shared/api/auth";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  return (
    <form
      action={fetchLogout}
      onClick={() => {
        location.reload();
      }}
    >
      <Button type="submit" variant={"ghost"}>
        Logout
      </Button>
    </form>
  );
}
