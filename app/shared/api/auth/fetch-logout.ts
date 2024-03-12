"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function fetchLogout() {
  cookies().delete("_at");
  cookies().delete("_rt");
  redirect("/");
}
