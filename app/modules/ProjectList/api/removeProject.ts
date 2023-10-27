"use server";

import { getSession } from "@auth0/nextjs-auth0";

export let removeProject = async (id: string) => {
  try {
    const session = await getSession();
    const token = session?.idToken;
    await fetch(`https://omniscient-backend.onrender.com/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      cache: "no-store",
    });
  } catch (e) {
    console.log(e);
  }
};
