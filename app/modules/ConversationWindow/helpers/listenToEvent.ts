"use client";
import EventSource from "eventsource";

export default function listenToSse(
  conversationId: string | undefined,
  token: string | undefined,
  callback: (value: string) => void,
  onStartFn: () => void,
  onCloseFn: () => void
) {
  onStartFn();

  const url = "https://cleverize.onrender.com";
  if (!conversationId) {
    throw new Error("conversationId cannot be undefined");
  }
  const eventSource = new EventSource(
    `${url}/api/users/me/conversations/${conversationId}/stream`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  eventSource.onmessage = (event) => {
    try {
      callback(event.data);
      eventSource.readyState === EventSource.CLOSED && console.log(100);
    } catch {}
  };
  try {
    eventSource.onerror = () => {
      eventSource.close();
      onCloseFn();
    };
  } catch {}
}
