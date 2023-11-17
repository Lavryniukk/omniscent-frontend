"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import { getAccessToken } from "@auth0/nextjs-auth0";

export default async function sendUserData(body: {}) {
  const response = await axiosWithAuth({
    url: `/users/edit`,
    method: "PATCH",
    data: body,
  });

  return response.status;
}
