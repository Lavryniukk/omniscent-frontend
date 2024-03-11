"use server";
import { config } from "dotenv";
import axios from "axios";
import { auth } from "@clerk/nextjs";

config();

export const axiosWithAuth = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
});
axiosWithAuth.interceptors.request.use(async (config) => {
  try {
    const { getToken } = auth();
    const accessToken = await getToken();

    config.headers.Authorization = `Bearer ${accessToken}`;
  } catch (error) {
    console.error("Could not get token:", error);
  }

  return config;
});
