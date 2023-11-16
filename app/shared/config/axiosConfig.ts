"use server";

import { getAccessToken } from "@auth0/nextjs-auth0";

import axios from "axios";

export const axiosWithAuth = axios.create();
axiosWithAuth.interceptors.request.use(async (config) => {
  try {
    const { accessToken } = await getAccessToken();
    console.log(accessToken);
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
