"use server";
import { axiosWithAuth } from "@/app/shared/config";
import { cookies } from "next/headers";

export default async function isAuthorized(): Promise<boolean> {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("_at");
  if (!accessToken) return false;
  const res = await axiosWithAuth.get("/auth");
  return !!res
}
