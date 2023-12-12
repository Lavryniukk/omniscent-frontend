"use server";
import { auth } from "@clerk/nextjs";
export default async function getToken(): Promise<string> {
  try {
    const { getToken } = auth();
    const token = await getToken();
    return token as string;
  } catch (e) {
    throw new Error("Token error" + e);
  }
}
