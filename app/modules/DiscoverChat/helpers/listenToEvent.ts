import EventSource from "eventsource";
import useChatStore from "../../prototype/chat/chatStorage";
export default function listenForUpdates(
  conversationId: string,
  token: string
) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const updateLastAssistantMessage = useChatStore(
    (state) => state.updateAssistantData
  );
  const eventSource = new EventSource(
    `${process.env.SERVER_URL}/api/users/me/conversations/${conversationId}/stream`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  eventSource.onmessage = (event) => {
    updateLastAssistantMessage(event.data);
    console.log("New update:", event.data);
  };
  eventSource.onerror = (error) => {
    eventSource.close();

    console.error("EventSource error:", error);
  };
}
