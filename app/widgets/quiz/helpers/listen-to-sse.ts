import EventSource from "eventsource";

export default function listenToSse(
  quizId: string,

  callback: (value: string) => void,
  onCloseFn: () => void
) {
  let url: string;
  const node_env = process.env.NODE_ENV; //FIXME this is not cool. Frontend cannot reach SERVER_URL, so we have to find a way.

  if (node_env === "development") {
    url = `http://localhost:8000/api/quizzes/${quizId}/stream`;
  } else if (node_env === "production") {
    url = `https://cleverize.onrender.com/api/quizzes/${quizId}/stream`;
  } else {
    throw new Error("NODE_ENV is not set");
  }

  const eventSource = new EventSource(url);

  eventSource.onmessage = (event) => {
    try {
      callback(event.data);
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
