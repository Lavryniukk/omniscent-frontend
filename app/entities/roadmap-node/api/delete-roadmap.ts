"use server";

import { axiosWithAuth } from "@/app/shared/config";
import { AxiosResponse } from "axios";

export const fetchDeleteRoadmap = async (roadmapId: string) => {
  await axiosWithAuth({
    method: "DELETE",
    url: `/roadmaps/delete/${roadmapId}`,
  });
};
