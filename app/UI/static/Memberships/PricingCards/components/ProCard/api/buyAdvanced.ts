"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import { redirect } from "next/navigation";

export default async function buyAdvanced() {
  const response = await axiosWithAuth({
    url: "/pay",
  });
  console.log(response);

  redirect(response.data.url as string);
  //   console.log(response);
}
