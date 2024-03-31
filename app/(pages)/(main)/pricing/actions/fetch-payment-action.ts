"use server";

import { axiosWithAuth } from "@/app/shared/config";
import { redirect } from "next/navigation";

export async function fetchPaymentAction() {
  const response = await axiosWithAuth("/pay", {
    method: "POST",
  });

  redirect(response.data.url);
}
