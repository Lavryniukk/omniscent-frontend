import { axiosWithAuth } from "@/app/shared/config/axiosConfig";

export default async function initConversation(
  conversation_id: string,
  user_roadmap_id: string,
  node_title: string
) {
  console.log(conversation_id);
  const response = await axiosWithAuth({
    method: "POST",
    url: `http://localhost:8000/api/users/me/conversations/${conversation_id}/start`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      user_roadmap_id: user_roadmap_id,
      node_title: node_title,
    },
  });
  listenForUpdates(conversation_id);
}

function listenForUpdates(conversationId: string) {
  const eventSourceUrl = `http://localhost:8000/api/users/me/conversations/stream/${conversationId}`;
  const eventSource = new EventSource(eventSourceUrl);

  eventSource.onmessage = function (event) {
    console.log("New update:", event.data);
  };

  eventSource.onerror = function (error) {
    console.error("EventSource error:", error);
    eventSource.close();
  };
}
