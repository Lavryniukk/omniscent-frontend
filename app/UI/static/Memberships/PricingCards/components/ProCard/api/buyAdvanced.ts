"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export default async function buyAdvanced() {
  try {
    const response = await axiosWithAuth({
      url: "/pay",
    });

    return response.data.url;
  } catch (e) {
    console.log(e);
  }
}
