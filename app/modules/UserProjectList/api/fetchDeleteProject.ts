"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

const fetchDelete = async (roadmapId: string) => {
  try {
    await axiosWithAuth({
      method: "DELETE",
      url: `/roadmaps/delete/${roadmapId}`,
    });
  } catch (e) {
    console.log("Error with DELETE roadmap", e);
  }
};

export default fetchDelete;
