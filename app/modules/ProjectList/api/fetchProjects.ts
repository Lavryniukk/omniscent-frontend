"use server";

import { Project } from "@/app/modules/ProjectList/types/project";
import { getSession } from "@auth0/nextjs-auth0";

export let fetchProjects = async () => {
  try {
    const session = await getSession();
    const token = session?.idToken;
    let response = await fetch("https://veritech.onrender.com/authorized", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
      },

      cache: "no-store",
    });
    if (!response.ok) {
      let parsed = await response.json();

      console.log(parsed);

      throw new Error("You fucked up with fetch projects");
    }
    let parsed = await response.json();
    console.log(parsed);
    return await parsed;
  } catch (e) {
    console.log(e);
  }
};
