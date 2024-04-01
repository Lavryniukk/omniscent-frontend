"use server";
import { cookies as c } from "next/headers";
export async function cookies() {
  return c();
}
