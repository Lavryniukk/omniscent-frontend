"use client";

import EventSource from "eventsource";
export default function listenToSse(
  conversationId: string,
  token: string,
  callback: (value: string) => void
) {
  const url = process.env.SERVER_URL ?? "https://cleverize.onrender.com:";

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
