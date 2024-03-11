"use server";
import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import { ROADMAP_SIZE } from "@/app/shared/constants";

type fetchCreateRoadmapArgs = {
  title: string;
  size: ROADMAP_SIZE;
};

export const fetchCreateRoadmap = (data: fetchCreateRoadmapArgs) => {
  try {
    void axiosWithAuth({
      url: "/roadmaps",
      data,
      method: "POST",
    });
  } catch (err) {
    console.log("Error POST /roadmaps", err);
    throw err;
  }
};
