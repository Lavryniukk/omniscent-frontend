"use server";
import { User } from "..";
import { axiosWithAuth } from "@/app/shared/config";

export async function fetchUser(): Promise<User> {
  try {
    const res = await axiosWithAuth("/users/me");
    console.log("Authorized");
    return res.data;
  } catch (e) {
    console.log("Not Authorized");
    throw e;
  }
}
