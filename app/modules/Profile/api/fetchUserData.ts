"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export default async function fetchUserData() {
  let response = await axiosWithAuth({
    url: `/users/me`,
  });

  const parsed = await response.data;
  return parsed;
}
