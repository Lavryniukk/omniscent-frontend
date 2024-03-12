import EventSource from "eventsource";

export default function listenToSse(
  url: string,
  token: string,
  callback: (value: string) => void,
  onCloseFn: () => void
) {
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

  eventSource.onerror = () => {
    eventSource.close();
    onCloseFn();
  };
  return () => {
    eventSource.close();
    onCloseFn();
  };
}
