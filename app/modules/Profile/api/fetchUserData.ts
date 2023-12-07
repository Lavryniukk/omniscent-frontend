"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export default async function fetchUserData(userId: string) {
  try {
    let response = await axiosWithAuth({
      method: "GET",
      url: `/users/${userId}`,
    });
    return response.data;
  } catch (e) {
    console.log(`Error with GET /users/${userId}`, e);
  }
}
