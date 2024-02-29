"use client";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { LANGUAGE } from "@/app/shared/constants";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@clerk/nextjs";
import { Languages } from "lucide-react";
import { useCallback, useEffect } from "react";

export default function LanguageSelector() {
  const { user, isLoaded } = useUser();
  let language = user?.unsafeMetadata.language as string | undefined;

  const setLanguage = useCallback(
    async (value: string) => {
      await user?.update({
        unsafeMetadata: { language: value } as { language: LANGUAGE },
      });
    },
    [user]
  );

  useEffect(() => {
    if (!language) {
      setLanguage("english");
    }
  }, [language, setLanguage]);
  if (!language) language = "english";
  return (
    <div className="absolute top-4 right-4 flex gap-1 justify-center items-center">
      <label className="text-sm text-muted-foreground">
        {language?.charAt(0).toUpperCase() + language?.slice(1)}
      </label>
      {isLoaded ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size="icon">
              <Languages />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Languages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              aria-current={language === "russian"}
              onClick={() => {
                setLanguage("russian");
              }}
            >
              Russian
            </DropdownMenuItem>
            <DropdownMenuItem
              aria-current={language === "english"}
              onClick={() => {
                setLanguage("english");
              }}
            >
              English
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Skeleton width="42px" height="20px" />
      )}
    </div>
  );
}
