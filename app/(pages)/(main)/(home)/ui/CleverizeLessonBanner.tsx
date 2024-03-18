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
    <div className=" flex-col  w-[98%] mx-auto p-0.5 relative  flex items-center justify-center md:rounded-2xl md:w-[80%] rounded-[14px]">
      <Image
        src={src}
        priority
        alt="A cleverize lesson example"
        className="rounded-lg"
        width={1913}
        height={990}
      />
    </div>
  ) : (
    <div className="w-[98%] aspect-video bg-background mx-auto  p-0.5 relative flex items-center justify-center md:rounded-2xl md:w-[80%] rounded-[14px]" />
  );
};

export default React.memo(CleverizeLessonBanner);
