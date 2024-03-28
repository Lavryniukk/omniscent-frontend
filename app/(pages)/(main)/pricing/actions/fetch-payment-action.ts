"use server";

import { axiosWithAuth } from "@/app/shared/config";

export async function fetchPaymentAction(price: number) {
  const response = await axiosWithAuth("/api/pay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { price },
  });
 
  return response.data;
}
