"use server";

import { axiosWithAuth } from "@/app/shared/config";

export default async function fetchCredits(): Promise<number> {
  return (await axiosWithAuth.get("/subscriptions/credits")).data;
}
