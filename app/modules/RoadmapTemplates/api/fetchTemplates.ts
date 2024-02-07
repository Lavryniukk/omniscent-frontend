"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import { TemplateNode } from "@/app/shared/entities";

export default async function fetchTemplates() {
  try {
    let response = await axiosWithAuth({
      method: "GET",
      url: `/templates/all`,
    });
    return response.data as TemplateNode[];
  } catch (e) {
    console.log(`Error with GET /templates/all`);
  }
}
