"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";

import axios from "axios";

export default async function fetchUserData() {
  const { accessToken } = await getAccessToken();

  console.log(process.env.AUTH0_BASE_URL, process.env.SERVER_URL);

  let response = await axios({
    method: "GET",
    url: `${process.env.SERVER_URL}/api/users/`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const parsed = await response.data;
  return parsed;
}
