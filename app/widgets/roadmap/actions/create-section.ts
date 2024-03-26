"use server";

import { fetchCreateSection } from "@/app/entities/roadmap-node/api";
import { axiosWithAuth } from "@/app/shared/config";

export default async function createSectionAction(
  roadmap_id: string,
  section_id: string,
  data: FormData
) {
  const title = data.get("title") as string;
  const body = {
    title,
    section_id,
    roadmap_id,
  };
  console.log(body);

  // const res = await fetchCreateSection(body);

  // return res.status === 200;
  return true;
}
