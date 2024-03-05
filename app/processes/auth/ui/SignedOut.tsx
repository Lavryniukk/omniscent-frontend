import { useUser } from "..";

export function SignedOut({ children }: { children: React.ReactNode }) {
  const { data: user } = useUser();
  return !user && children;
}
