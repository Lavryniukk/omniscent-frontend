"use client";
import React, { useEffect, useRef } from "react";

import Markdown from "react-markdown";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";
interface MessageProps {
  role: "user" | "system" | "assistant";
  content: string;
}

export default function Message({ role, content }: MessageProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.querySelectorAll("pre code").forEach((block) => {
        try {
          block && block.removeAttribute("data-highlighted");
          block && hljs.highlightElement(block as HTMLElement);
        } catch (e) {} // Very important error handling (not a joke) ;)
      });
    }
  }, [content]);

  return (
    <div
      className={`text-text px-5 w-full mx-auto select-text flex-col text-md  flex justify-start items-center gap-3 p-2 ${
        role === "user" && "dark:bg-azure-900 bg-azure-100"
      }`}
    >
      <div className="max-w-[750px] flex flex-col items-start w-[98%] sm:w-[90%] md:w-[80%] space-y-3">
        <div className="flex my-2  items-center justify-center">
          <div
            className={`w-[20px] lg:w-[32px] shadow-xl aspect-square border ${role == "user" ? "bg-azure-200 dark:bg-azure-900" : "bg-azure-400 dark:bg-azure-700"}  rounded-full`}
          />
          <p className="ml-1 text-azure-800 dark:text-azure-200">
            {role === "user" ? "You" : "AI Teacher"}
          </p>
        </div>
        <article
          className="mt-[5px] break-words  font-medium text-text/80 text-base leading-[28px] w-full font-inter chat-output"
          ref={contentRef}
        >
          {role === "assistant" ? (
            content === "isLoading" ? (
              <div className="border-2 w-10 h-10 rounded-full border-accent border-t-text animate-spin aspect-square" />
            ) : (
              <Markdown>{content}</Markdown>
            )
          ) : (
            <div className="text-azure-950 dark:text-azure-50 font-medium ">{content}</div>
          )}
        </article>
      </div>
    </div>
  );
}
