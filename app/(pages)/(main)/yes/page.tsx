"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ChatPage() {
  const [conversation, setConversation] = useState("");

  useEffect(() => {
    // Adjust the URL to your server's URL and port
    const eventSource = new EventSource("http://localhost:8000/api/stream");
    eventSource.onmessage = (event) => {
      console.log(event.data);
      setConversation((prev) => `${prev}\n${event.data}`);
    };
    return () => {
      eventSource.close();
    };
  }, []);
  const startConversation = async () => {
    const response = await fetch("http://localhost:8000/api/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Keyword Research",
        roadmap: [
          {
            title: "Search Engine Basics",
          },
          {
            title: "Keyword Research",
          },
          {
            title: "On-Page SEO",
          },
          {
            title: "Off-Page SEO",
          },
          {
            title: "Technical SEO",
          },
          {
            title: "Content Optimization",
          },
          {
            title: "SEO Analytics",
          },
          {
            title: "Mobile SEO",
          },
        ],
      }),
    });
  };
  return (
    <div className="absolute top-1/2 left-1/2 bg-secondary">
      <button className="w-40 h-20 border" onClick={startConversation}>
        Start Conversation
      </button>
      <div className="bg-secondary text-text w-40 h-40">{conversation}</div>
    </div>
  );
}
