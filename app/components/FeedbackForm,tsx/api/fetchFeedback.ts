import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export default async function fetchFeedback(
  feedback: string,
  rating: number,
  conversation_id?: string,
  roadmap_id?: string
) {
  try {
    const data = {
      conversation_id,
      roadmap_id,
      feedback,
      rating,
    };
    console.log(data);
    const res = await axiosWithAuth({
      method: "POST",
      url: "/feedback",
      data,
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
