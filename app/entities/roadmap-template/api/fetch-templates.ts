"use server";

import { axiosWithAuth } from "@/app/shared/config/";
import { TemplateNode } from "..";

type TemplateNodeDto = {
  data: TemplateNode[];
};

export async function fetchTemplates(): Promise<TemplateNode[]> {
  try {
    let response: TemplateNodeDto = await axiosWithAuth({
      method: "GET",
      url: `/templates/all`,
    });
    return response.data;
  } catch (e) {
    console.log(`Error with GET /templates/all`);
    throw e;
  }
}
