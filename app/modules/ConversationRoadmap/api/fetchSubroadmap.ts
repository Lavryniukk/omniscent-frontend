"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import Roadmap, { Subroadmap } from "@/app/shared/entities/Roadmap";

import axios from "axios";

export default async function fetchSubroadmap(id: string, title: string) {
  title = title.replaceAll("%20", " ");

  let response = await axiosWithAuth({
    method: "GET",
    url: `${process.env.SERVER_URL}/api/users/me/roadmaps/${id}`,
  });
  const roadmap = (await response.data) as Roadmap;
  return roadmap.sub_roadmap_list.find(
    (subroadmap) => subroadmap.title === title
  );
}
