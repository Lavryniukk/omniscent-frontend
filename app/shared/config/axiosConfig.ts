"use server";

import { config } from "dotenv";
config();
import axios from "axios";
import { auth } from "@clerk/nextjs";
if (!process.env.SERVER_URL) {
  console.log("This is your serverurl:", process.env.SERVER_URL);
  throw new Error("Troubles with you SERVER_URL");
}

export const axiosWithAuth = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
});

axiosWithAuth.interceptors.request.use(async (config) => {
  try {
    const { getToken } = auth();

    const accessToken = await getToken();
    const credits: { data: number } = await axios({
      url: `${process.env.SERVER_URL}/api/users/me/credits`,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (credits.data === 0) {
      throw new Error("Not enough credits");
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
  } catch (error) {
    console.error("Error with axios instance:", error);
  }

  return config;
});

// Utility function to check if the token is expired
