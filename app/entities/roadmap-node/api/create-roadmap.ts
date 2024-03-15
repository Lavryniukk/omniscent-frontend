"use server";
import { axiosWithAuth } from "@/app/shared/config/axios-with-auth";
import { RoadmapSize } from "@/app/shared/types";

type fetchCreateRoadmapArgs = {
  title: string;
  size: RoadmapSize;
};

export const fetchCreateRoadmap = async (data: fetchCreateRoadmapArgs) => {
  try{
  return await axiosWithAuth({
    url: "/health",
    data,
    method: "GET",
  });
  }catch(e){
    console.error(e);
  }
};
