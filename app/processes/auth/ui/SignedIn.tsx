import { useUser } from "..";

export function SignedIn({ children }: { children: React.ReactNode }) {
  const { data: user } = useUser();
  return user && children;
}
