import { useAuth } from "..";

export function SignedIn({ children }: { children: React.ReactNode }) {
  const { isAuth } = useAuth();

  return <>{isAuth && children}</>;
}
