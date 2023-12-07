"use server";

import Roadmap, { Subroadmap } from "@/app/shared/entities/Roadmap";
import { getAccessToken } from "@auth0/nextjs-auth0";

import axios from "axios";

export default async function fetchSubroadmap(id: string, title: string) {
  const token = await getAccessToken();
  title = title.replaceAll("%20", " ");

  let response = await axios({
    method: "GET",
    url: `${process.env.SERVER_URL}/api/users/me/roadmaps/${id}`,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  });
  const roadmap = (await response.data) as Roadmap;
  return roadmap.sub_roadmap_list.find(
    (subroadmap) => subroadmap.title === title
  );
}
