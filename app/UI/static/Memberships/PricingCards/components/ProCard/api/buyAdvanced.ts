"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import { redirect } from "next/navigation";

export default async function buyAdvanced() {
  try {
    const response = await axiosWithAuth({
      url: "/pay",
    });
    // console.log(response);

    return response.data.url;
  } catch (e) {
    console.log(e);
  }
  //   console.log(response);
}
