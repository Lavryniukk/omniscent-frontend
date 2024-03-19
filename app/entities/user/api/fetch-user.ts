"use server";
import { User } from "..";
import { axiosWithAuth } from "@/app/shared/config";

export async function fetchUser(): Promise<User> {
  const res = await axiosWithAuth("/users/me");
  return res.data;
}
