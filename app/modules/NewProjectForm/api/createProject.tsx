"use server";

import { getSession } from "@auth0/nextjs-auth0";
import { Project } from "@/app/modules/ProjectList/types/project";
export let createProject = async (title: string, context: string) => {
  try {
    const session = await getSession();
    const token = session?.idToken;

    let response = await fetch(
      "https://omniscient-backend.onrender.com/projects/create",
      {
        method: "POST",
        body: JSON.stringify({
          title: title,
          user_context: context,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        cache: "no-store",
      }
    );
    if (response.ok) {
      let parsed = await response.json();
      return parsed as Project;
    }
  } catch (e) {
    console.log(e);
  }
};
