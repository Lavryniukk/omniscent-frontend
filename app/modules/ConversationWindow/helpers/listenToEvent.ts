"use client";

import EventSource from "eventsource";
export default function listenForUpdates(
  conversationId: string,
  token: string,
  callback: (value: string) => void
) {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const url = process.env.SERVER_URL ?? "http://localhost:8000";

  const eventSource = new EventSource(
    `${url}/api/users/me/conversations/${conversationId}/stream`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  eventSource.onmessage = (event) => {
    console.log("New update:", event.data);

    callback(event.data);
  };
  eventSource.onerror = (error) => {
    eventSource.close();
    console.log("event closed");

    console.error(
      `Event source listener failed on ${process.env.SERVER_URL}/api/users/me/conversations/${conversationId}/stream`,
      error
    );
  };
}
