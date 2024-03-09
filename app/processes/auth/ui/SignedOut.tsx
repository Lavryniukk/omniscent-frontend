import { useAuth } from "..";

export function SignedOut({ children }: { children: React.ReactNode }) {
  const { isAuth } = useAuth();
  return !isAuth && children;
}
