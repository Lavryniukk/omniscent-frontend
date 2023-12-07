"use server";

import { Session, getSession } from "@auth0/nextjs-auth0";
import { config } from "dotenv";
config();

import axios from "axios";
import { redirect } from "next/navigation";

if (!process.env.SERVER_URL) {
  console.log("This is your serverurl:", process.env.SERVER_URL);
  throw new Error("Troubles with you SERVER_URL");
}

async function refreshAccessToken(refreshToken: string | undefined) {
  try {
    const response = await axios.post(`${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`, {
      grant_type: 'refresh_token',
      client_id: process.env.AUTH0_CLIENT_ID,
      refresh_token: refreshToken,
      client_secret: process.env.AUTH0_CLIENT_SECRET
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error; // 
  }
}

export const axiosWithAuth = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
});

axiosWithAuth.interceptors.request.use(async (config) => {
  try {
    const session = await getSession();
    let accessToken = session?.accessToken
    console.log(session?.accessTokenExpiresAt)
    // Check if the access token is expired
    if (isTokenExpired(session)) {
      console.log('Token expired, refresh required')
      accessToken = await refreshAccessToken(session?.refreshToken);
      if(session){
      session.accessToken = accessToken;}
    }

    config.headers.Authorization = `Bearer ${accessToken}`;
  } catch (error) {
    console.error('Error with token handling:', error);
  }

  return config;
});

// Utility function to check if the token is expired
function isTokenExpired(session: Session | undefined | null) {
  if (!session || !session.accessTokenExpiresAt) {
    return true; // No valid session or expiration information, handle as expired
  }

  const currentTime = Date.now();
  const expiresAtMs = session.accessTokenExpiresAt * 1000;
  console.log(currentTime,'vs',expiresAtMs)
  // If the current time is greater than the expiration time, the token is expired
  return currentTime > expiresAtMs;
}

