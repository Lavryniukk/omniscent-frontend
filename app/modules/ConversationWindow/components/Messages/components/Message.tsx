"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import DOMPurify from "dompurify";
import Markdown from "react-markdown";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
interface MessageProps {
  role: "user" | "system" | "assistant";
  content: string;
}

export default function Message({ role, content }: MessageProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  if (contentRef.current) {
    contentRef.current.querySelectorAll("pre code").forEach((block) => {
      block && block.removeAttribute("data-highlighted"); // Remove the attribute
      block && hljs.highlightElement(block as HTMLElement);
    });
  }
  const cleanContent = DOMPurify.sanitize(content);

  // Conditional classNames
  const wrapperClass = `text-text px-5 w-full mx-auto select-text flex-col text-md ${
    role === "system" ? "hidden" : ""
  } flex justify-start items-center gap-3 p-2 ${
    role === "user" ? "bg-background" : "bg-secondary"
  }`;

  const contentClass =
    "max-w-[1000px] flex flex-col items-start w-full space-y-3";
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
          className="mt-[5px] break-words text-lg w-full font-inter chat-output"
          ref={contentRef}
        >
          {role === "assistant" ? (
            <Markdown>{cleanContent}</Markdown>
          ) : (
            <div>{content}</div>
          )}
        </article>
      </div>
    </div>
  );
}
