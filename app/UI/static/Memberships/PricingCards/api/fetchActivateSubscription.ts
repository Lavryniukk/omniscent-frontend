"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import { redirect } from "next/navigation";
export default async function fetchActivateSubscription() {
  try {
    const response = await axiosWithAuth({
      url: "/pay",
    });

    redirect(response.data.url);
  } catch (e) {
    console.log(e);
  }
}
