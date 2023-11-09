"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";

import axios from "axios";

export default async function fetchRoadmap(id: string) {
  const token = await getAccessToken();
  console.log(token);
  let response = await fetch(
    `https://cleverize.onrender.com/api/users/me/roadmaps/ObjectId('${id}')`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let parsed = await response.json();
  console.log(parsed);
  return await parsed;
}
