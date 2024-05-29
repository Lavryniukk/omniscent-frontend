"use client";
import React, { useEffect, useRef } from "react";

import Markdown from "react-markdown";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";

interface MessageProps {
  role: "user" | "system" | "model";
  content: string;
}

export default function Message({ role, content }: MessageProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  //TODO - markdown and hljs does not seem to work during streaming, but after refreshing the page it works
  useEffect(() => {
    console.log("effect triggered with contenxt", content);
    if (contentRef.current) {
      contentRef.current.querySelectorAll("pre code").forEach((block) => {
        try {
          // Highlight the block
          hljs.highlightElement(block as HTMLElement);
        } catch {}
      });
    }
  }, [content]);

  return (
    <div
      className={`px-5 w-full mx-auto select-text flex-col text-md  flex justify-start items-center gap-3 p-2 ${
        role === "user" && ""
      }`}
    >
      <div className="max-w-[750px] flex flex-col items-start w-[98%] sm:w-[90%] md:w-[80%] space-y-3">
        <div className="flex my-2  items-center justify-center">
          <div
            className={`w-[20px] lg:w-[32px] shadow-xl aspect-square border ${role == "user" ? "" : ""}  rounded-full`}
          />
          <p className="ml-1 ">{role === "user" ? "You" : "AI Teacher"}</p>
        </div>
        <article
          className="mt-[5px] break-words  font-medium  text-base leading-[28px] w-full font-inter chat-output"
          ref={contentRef}
        >
          {role === "model" ? (
            content === "isLoading" ? (
              <div className="border-2 w-10 h-10 rounded-full border-t-foreground animate-spin aspect-square" />
            ) : (
              <Markdown>{content}</Markdown>
            )
          ) : (
            <div className="font-medium">{content}</div>
          )}
        </article>
      </div>
    </div>
  );
}
