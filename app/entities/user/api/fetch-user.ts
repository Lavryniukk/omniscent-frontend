import { User } from "..";
import { axiosWithAuth } from "@/app/shared/config";

export async function fetchUser(): Promise<User> {
  return (await axiosWithAuth("/users/me")).data;
}
