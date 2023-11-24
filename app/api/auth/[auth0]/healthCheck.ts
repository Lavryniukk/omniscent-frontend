"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import RoadmapInterface from "@/app/shared/entities/Roadmap";

export default async function checkToken() {
  let response = await axiosWithAuth({
    method: "GET",
    url: `/health/protected`,
  });
  return response.data as {
    message: string;
    statusCode: number;
  };
}
