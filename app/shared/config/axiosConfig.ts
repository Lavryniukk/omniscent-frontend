"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";

import axios from "axios";

export const axiosWithAuth = axios.create({
  baseURL: "http://example.com", // Your API base URL
  // other custom settings
});
axiosWithAuth.interceptors.request.use(async (config) => {
  try {
    const { accessToken } = await getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      console.error("Access token is not available.");
      // Handle the case where accessToken is null
    }
  } catch (error) {
    console.error("Error getting access token:", error);
    // Handle the error appropriately
  }
  return config;
});
