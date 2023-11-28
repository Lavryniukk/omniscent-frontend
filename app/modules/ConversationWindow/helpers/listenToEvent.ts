"use client";

import EventSource from "eventsource";
export default function listenToSse(
  conversationId: string,
  token: string,
  callback: (value: string) => void
) {
  const url = "https://cleverize.onrender.com";

  const eventSource = new EventSource(
    `${url}/api/users/me/conversations/${conversationId}/stream`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  eventSource.onmessage = (event) => {
    callback(event.data);
    eventSource.readyState === EventSource.CLOSED && console.log(100);
  };

  eventSource.onerror = (error) => {
    eventSource.close();

    console.error(
      `Event source listener failed on ${process.env.SERVER_URL}/api/users/me/conversations/${conversationId}/stream`,
      error
    );
  };
}
