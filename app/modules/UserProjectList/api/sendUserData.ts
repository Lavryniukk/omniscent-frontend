"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export default async function sendUserData(body: {}) {
  try {
    const response = await axiosWithAuth({
      url: `/users/edit`,
      method: "PATCH",
      data: body,
    });
    return response.status;
  } catch (e) {
    console.log("Error with PATCH /users/edit");
  }
}
