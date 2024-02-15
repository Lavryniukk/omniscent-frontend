import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export default async function fetchFeedback(
  feedback: string,
  rating: number,
  conversation_id?: string,
  roadmap_id?: string
) {
  try {

    const data: {
      feedback: string;
      rating: number;
      conversation_id?: string;
      roadmap_id?: string;
    
    } = {
      feedback,
      rating,
    };
    if (conversation_id) {
      data["conversation_id"] = conversation_id;
    }
    if (roadmap_id) {
      data["roadmap_id"] = roadmap_id;
    }
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
