"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import DOMPurify from "dompurify";
import Markdown from "react-markdown";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";
// import { error } from "console";
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
          block && block.removeAttribute("data-highlighted"); // Remove the attribute
          block && hljs.highlightElement(block as HTMLElement);
        } catch (e) {} // Very important error handling ;)
      });
    }
  }, [content]);

  // const cleanContent = DOMPurify.sanitize(content);

  const wrapperClass = `text-text px-5 w-full mx-auto select-text flex-col text-md ${
    role === "system" ? "hidden" : ""
  } flex justify-start items-center gap-3 p-2 ${
    role === "user" ? "bg-background" : "bg-secondary"
  }`;

  const contentClass =
    "max-w-[750px] flex flex-col items-start w-[80%] space-y-3";
  const avatarClass = "flex my-2 items-center justify-center";
  const roleText = role === "user" ? "You" : "AI Teacher";

  return (
    <div className={wrapperClass}>
      <div className={contentClass}>
        <div className={avatarClass}>
          <div className="w-[20px] lg:w-[32px] aspect-square border bg-accent rounded-full" />
          <p className="ml-1 text-accent">{roleText}</p>
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
            <div>{content}</div>
          )}
        </article>
      </div>
    </div>
  );
}
