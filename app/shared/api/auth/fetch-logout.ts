"use server";
import { cookies } from "next/headers";

export async function fetchLogout() {
  cookies().delete("_at");
  cookies().delete("_rt");

  return true;
}
