"use server";

import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

const fetchDelete = async (roadmapId: string) => {
  try {
    await axiosWithAuth({
      method: "DELETE",
      url: `/users/me/roadmaps/:${roadmapId}`,
    });
  } catch (e) {
    console.log(e);
  }
};

export default fetchDelete;
