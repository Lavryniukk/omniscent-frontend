"use server";

import { axiosWithAuth } from "@/app/shared/config";
import { User } from "../user";

export async function fetchUserUpdate(body: Partial<User>) {
  try {
    const res = await axiosWithAuth.patch("/users/me", body);
  } catch (err) {
    console.log("Error with PATCH /user/me: ", err);
  }
}
