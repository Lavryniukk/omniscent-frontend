"use server";
import { getAccessToken } from "@auth0/nextjs-auth0";

export default async function getToken(): Promise<string> {
  try {
    const { accessToken } = await getAccessToken();
    return accessToken as string;
  } catch (e) {
    throw new Error("Token error" + e);
  }
}
