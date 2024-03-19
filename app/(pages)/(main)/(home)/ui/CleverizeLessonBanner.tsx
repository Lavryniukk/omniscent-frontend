"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useEffect, useMemo } from "react";

const CleverizeLessonBanner = () => {
  const { resolvedTheme } = useTheme();
  const src = useMemo(() => {
    switch (resolvedTheme) {
      case "light":
        return "/images/lesson-light.webp";
      case "dark":
        return "/images/lesson-dark.webp";
      default:
        return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    }
  }, [resolvedTheme]);

  return resolvedTheme ? (
    <div className="relative">
      <Image
        src={src}
        priority
        alt="A cleverize lesson example"
        className="rounded-lg max-w-7xl w-full z-[30]"
        width={1913}
        height={990}
      />
      <div className="bg-gradient-to-b from-transparent via-transparent to-background w-full h-full absolute top-0 left-0" />
    </div>
  ) : (
    <div className="w-full aspect-video max-w-7xl bg-background mx-auto  p-0.5 relative flex items-center justify-center md:rounded-2xl md:w-[80%] rounded-[14px]" />
  );
};

export default React.memo(CleverizeLessonBanner);
