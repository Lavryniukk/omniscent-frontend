"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export default async function checkToken() {
  let response = await axiosWithAuth({
    method: "GET",
    url: `/health/protected`,
  });
  return response.data;
}
