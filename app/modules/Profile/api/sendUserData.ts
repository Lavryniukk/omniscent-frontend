"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";
import axios from "axios";

export default async function sendUserData(body: {}) {
  const { accessToken } = await getAccessToken();

  const response = await axios({
    url: `${process.env.SERVER_URL}/api/users/edit`,
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: body,
  });

  return response;
}
