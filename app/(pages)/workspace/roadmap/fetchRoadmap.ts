"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";

import axios from "axios";

export default async function fetchRoadmap(id: string) {
  const token = await getAccessToken();
  let response = await axios({
    url: `https://cleverize.onrender.com/api/users/me/roadmaps/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
