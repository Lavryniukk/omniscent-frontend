"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export default async function fetchActivateTrial() {
  const response = await axiosWithAuth("/subscriptions/activate-trial");
  return response;
}
