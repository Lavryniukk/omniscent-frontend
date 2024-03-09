"use server";
import { axiosWithAuth } from "@/app/shared/config/axios-with-auth";
import { RoadmapSize } from "@/app/shared/types";

type fetchCreateRoadmapArgs = {
  title: string;
  size: RoadmapSize;
};

export const fetchCreateRoadmap = (data: fetchCreateRoadmapArgs) => {
  try {
    void axiosWithAuth({
      url: "/roadmaps",
      data,
      method: "POST",
    });
  } catch (err: unknown) {
    console.log("Error POST /roadmaps", err);
    throw err;
  }
};
