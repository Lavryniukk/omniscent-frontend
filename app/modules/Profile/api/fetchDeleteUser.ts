"use server";

import { Project } from "../types/project";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export let fetchDeleteUser = async (): Promise<Project[] | [] | undefined> => {
  try {
    const response = await axiosWithAuth({
      url: "/users/me/roadmaps",
    });
    return response.data;
  } catch (e) {
    console.log("Error with DELETE /users/me/roadmaps", e);
  }
};
