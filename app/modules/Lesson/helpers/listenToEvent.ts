"use client";
import EventSource from "eventsource";

export default function listenToSse(
  lessonId: string | undefined,
  token: string | undefined,
  callback: (value: string) => void,
  onStartFn: () => void,
  onCloseFn: () => void
) {
  onStartFn();

  const url = `${process.env.SERVER_URL}/api/lessons/${lessonId}/stream`;
  if (!lessonId) {
    throw new Error("lessonId cannot be undefined");
  }
  const eventSource = new EventSource(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

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
