"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";

import axios from "axios";

export default async function fetchRoadmap(id: string) {
  const token = await getAccessToken();
  let response = await fetch(
    `https://cleverize.onrender.com/api/users/me/roadmaps/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    }
  );
  let parsed = await response.json();
  return await parsed;
}
