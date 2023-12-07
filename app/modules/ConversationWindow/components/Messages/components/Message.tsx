"use effect";
import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";
import { useTheme } from "@/app/shared/providers/ThemeProvider";

interface MessageProps {
  role: "user" | "system" | "assistant";
  content: string;
}

export default function Message({ role, content }: MessageProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Dynamically load highlight.js styles based on the theme
  useEffect(() => {
    const loadHighlightStyles = async () => {
      if (theme === "dark") {
        require("highlight.js/styles/github.css");
      } else {
        require("highlight.js/styles/github-dark.css");
      }
    };

    loadHighlightStyles();
  }, [theme]);

  // Apply syntax highlighting
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block as HTMLElement);
      });
    }
  }, [content]);

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
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
