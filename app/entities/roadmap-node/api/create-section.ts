"use server";
import { axiosWithAuth } from "@/app/shared/config/axios-with-auth";
import { RoadmapSize } from "@/app/shared/types";

type fetchCreateSectionArgs = {
  title: string;
  section_id: string;
  roadmap_id: string;
};

export const fetchCreateSection = async (data: fetchCreateSectionArgs) => {
  return await axiosWithAuth({
    url: "/roadmaps/section",
    data,
    method: "POST",
  });
};
