'use server'
import { auth } from "@clerk/nextjs"

export default async function getToken() {
	  return await auth().getToken() as string;
}