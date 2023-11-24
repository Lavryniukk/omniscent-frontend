"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";
import { config } from "dotenv";
config();

import axios from "axios";
import { usePopupStore } from "../storage/popupStorage";

if (!process.env.SERVER_URL) {
  console.log("This is your serverurl:", process.env.SERVER_URL);
  throw new Error("Troubles with you SERVER_URL");
}

export const axiosWithAuth = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
});
axiosWithAuth.interceptors.request.use(async (config) => {
  try {
    const { accessToken } = await getAccessToken();
    config.headers.Authorization = `Bearer ${accessToken}`;
  } catch (error) {
    console.error("Error getting access token:", error);
    usePopupStore.getState().openPopup(); // Open the popup using Zustand
  }
  return config;
});
