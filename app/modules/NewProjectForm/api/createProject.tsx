"use server";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { getSession } from "@auth0/nextjs-auth0";
import { Project } from "@/app/modules/ProjectList/types/project";
export let createProject = async (title: string, context: string) => {
  try {
    const session = await getSession();
    const { accessToken } = await getAccessToken();
    const sessionAccessToken = session?.accessToken;
    const sessionIdToken = session?.idToken;
    if (sessionAccessToken === accessToken) {
      console.log("litterally me");
      console.log(sessionIdToken);
    }
    // console.log(sessionAccessToken);
    let response = await fetch("http://localhost:5000/", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        user_context: context,
      }),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      cache: "no-store",
    });
    if (response.ok) {
      let parsed = await response.json();
      return parsed as Project;
    }
  } catch (e) {
    console.log("An error from trycatch: ", e);
  }
};
