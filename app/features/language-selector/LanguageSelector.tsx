import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { fetchUser, fetchUserUpdate } from "@/app/entities/user/api";
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
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
export default function LanguageSelector() {
  const handleSubmit = useCallback((language: string) => {
    fetchUserUpdate({ metadata: { language: language as LANGUAGE } });
  }, []);

  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return fetchUser();
    },
  });
  if (!isLoading && !user) return null;

  const language = user?.metadata.language;

  return (
    <div className="absolute top-4 right-4 flex gap-1 justify-center items-center">
      <label className="text-sm text-muted-foreground">
        {language && language?.charAt(0).toUpperCase() + language?.slice(1)}
        {isLoading && <Skeleton className="w-10 h-4" />}
      </label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size="icon">
            {isLoading && <Skeleton className="w-6 h-6" />}
            {!isLoading && <Languages />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Languages</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            onValueChange={(value) => {
              handleSubmit(value);
              refetch();
            }}
            value={language}
          >
            <DropdownMenuRadioItem value="russian">
              Russian
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="english">
              English
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
