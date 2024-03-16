"use server";
import { axiosWithAuth } from "@/app/shared/config/axios-with-auth";
import { RoadmapSize } from "@/app/shared/types";

type fetchCreateRoadmapArgs = {
  title: string;
  size: RoadmapSize;
};

export const fetchCreateRoadmap = async (data: fetchCreateRoadmapArgs) => {
  try {
    return await axiosWithAuth({
      url: "/roadmaps",
      data,
      method: "POST",
    });
  } catch (e) {
    console.error("Error in /roadmaps POST", e);
  }
};
