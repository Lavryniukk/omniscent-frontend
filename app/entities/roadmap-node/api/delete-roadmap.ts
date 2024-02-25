"use server";

import { axiosWithAuth } from "@/app/shared/config";

export const fetchDeleteRoadmap = (roadmapId: string): void => {
  try {
    void axiosWithAuth({
      method: "DELETE",
      url: `/roadmaps/delete/${roadmapId}`,
    });
  } catch (e) {
    console.log("Error with DELETE roadmap", e);
    throw e;
  }
};
