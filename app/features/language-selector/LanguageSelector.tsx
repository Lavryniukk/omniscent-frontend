"use client";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { fetchUserUpdate } from "@/app/entities/user/api";
import { useUser } from "@/app/processes/auth";
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
import { Languages } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function LanguageSelector() {
  const { data: user, isLoading } = useUser();

  const [language, setLanguage] = useState("english");

  const handleAction = async (data: FormData) => {
    console.log("Form submitted");
    const formLangauge = data.get("language") as string;
    console.log(formLangauge);
  };

  return (
    <div className="absolute top-4 right-4 flex gap-1 justify-center items-center">
      <label className="text-sm text-muted-foreground">
        {language?.charAt(0).toUpperCase() + language?.slice(1)}
      </label>
      {!isLoading ? (
        <form action={handleAction}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} size="icon">
                <Languages />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Languages</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={language}
                onValueChange={setLanguage}
              >
                <DropdownMenuRadioItem value="russian">
                  <Button type="submit" variant={"ghost"}>
                    Russian
                  </Button>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="english">
                  <Button type="submit" variant={"ghost"}>
                    English
                  </Button>
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </form>
      ) : (
        <Skeleton width="42px" height="20px" />
      )}
    </div>
  );
}
