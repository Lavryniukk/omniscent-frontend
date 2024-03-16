"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("error.tsx", error);
  }, [error]);

  return (
    <div className="bg-black gap-10 dark:bgblack 950 flex flex-col items-center justify-center w-screen h-screen ">
      <h2 className="textblack 950 dark:text-foreground text-4xl font-bold text-center">
        Whoops, something went wrong! If the error persists, please contact us.
      </h2>
      <Button
        onClick={() => {
          location.reload();
        }}
      >
        Try again
      </Button>
    </div>
  );
}
