"use client";
import React, { useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import { useTheme } from "@/app/shared/providers/ThemeProvider";

export default function Message({
  role,
  content,
}: {
  role: "user" | "assistant" | "system";
  content: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();

  useEffect(() => {
    const loadHighlightStyles = async () => {
      if (theme === "dark") {
        require("highlight.js/styles/github.css");
      } else {
        require("highlight.js/styles/github-dark.css");
      }
      if (contentRef.current) {
        contentRef.current.querySelectorAll("pre code").forEach((block) => {
          hljs.highlightBlock(block as HTMLElement);
        });
      }
    };

    loadHighlightStyles();
  }, [content, theme]);

  const createMarkup = (htmlContent: string) => {
    // First highlight the code, then sanitize
    const div = document.createElement("div");
    div.innerHTML = htmlContent;
    div.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block as HTMLElement);
    });
    const highlightedHtml = div.innerHTML;
    const sanitizedContent = DOMPurify.sanitize(highlightedHtml);
    return { __html: sanitizedContent };
  };

  return (
    <div
      className={`text-text px-5 w-full mx-auto select-text flex-col text-md ${
        role === "system" ? "hidden" : ""
      } flex justify-start items-center gap-3 p-2 ${
        role === "user" ? "bg-background" : "bg-secondary"
      }`}
    >
      <div
        className={`max-w-[1000px] flex flex-col items-start w-full space-y-3`}
      >
        <div className="flex my-2 items-center justify-center">
          <div className="w-[20px] lg:w-[32px] aspect-square border bg-accent rounded-full" />
          <p className="ml-1 text-accent">
            {role === "user" ? "You" : "AI Teacher"}
          </p>
        </div>
        <article
          dangerouslySetInnerHTML={createMarkup(content)}
          className="mt-[5px] break-words text-lg w-full font-inter"
          ref={contentRef}
        />
      </div>
    </div>
  );
}
