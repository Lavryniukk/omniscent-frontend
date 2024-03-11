import { useEffect, useState } from 'react';
type useSSEProps = {
	  url: string;
  initialState: unknown;
};
const useSSE = ({url, initialState}: useSSEProps) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);
    };

    eventSource.onerror = (error) => {
      console.error("EventSource failed:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [url]);

  return data;
};
export default useSSE;