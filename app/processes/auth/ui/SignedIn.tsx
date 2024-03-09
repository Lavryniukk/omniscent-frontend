import { use, useEffect } from "react";
import { useAuth } from "..";
import { useRouter } from "next/navigation";

export function SignedIn({ children }: { children: React.ReactNode }) {
  const { isAuth } = useAuth();

  return <>{isAuth && children}</>;
}
