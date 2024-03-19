"use client";
import { RoadmapSize } from "@/app/shared/types/roadmap-size";
import { createRoadmapAction } from "./actions/create-roadmap-action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SubmitButton } from "./ui/SubmitButton";
import { useFormState } from "react-dom";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { useCallback, useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

const loadingStates = [
  { text: "Waking up our backend developer" },
  { text: "Feeding the murlocs" },
  { text: "Starting roadmap creation" },
  { text: "Taking a nap after hard work" },
  { text: "Packing roadmap" },
  { text: "Congratulations! You can find it in workspace" },
];

const duration = 4000;

const totalDuration = duration * loadingStates.length + 1000;
export default function NewProjectForm() {
  //TODO - add step-by-step loading animation https://ui.aceternity.com/components/multi-step-loader so user can be entertained while waiting for the result.
  //info - we use bool return type to display error alert / loading animation.
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);

  const [state, action] = useFormState(createRoadmapAction, false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, totalDuration);
    }

    if (!isFirstTime) {
      setIsLoading(state);
      setIsFirstTime(true);
    }
  }, [state, isLoading, isFirstTime]);

  return (
    <form
      className="flex flex-col items-start border rounded-lg  shadow-xl gap-8 w-3/4 lg:w-1/3 min-w-[350px] h-fit justify-center xs:mx-auto  p-5 xs:py-12 mx-3"
      action={action}
      onSubmit={() => {
        if (state) {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, totalDuration);
        }
      }}
    >
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={isLoading}
        duration={duration}
        loop={false}
      />
      {isLoading && (
        <div
          onClick={() => setIsLoading(false)}
          className="border-[2.5px] p-1 rounded-full fixed right-4 top-4 z-[500] cursor-pointer border-muted-foreground flex items-center justify-center"
        >
          <X />
        </div>
      )}
      <h1 className="text-center font-semibold text-2xl">
        Generate your own roadmap
        <span className="italic text-base text-primary/80 ">(AI)</span>
      </h1>
      <section className="gap-2 flex flex-col w-full">
        <Label htmlFor="roadmap-title">Name of technology</Label>
        <Input
          id="roadmap-title"
          required
          name="title"
          type="text"
          placeholder="Java"
        />
      </section>
      <section className="gap-2 flex flex-col w-full">
        <Label htmlFor="roadmap-size">Type of technology</Label>
        <Select name="size" required defaultValue={RoadmapSize.MEDIUM}>
          <SelectTrigger id="roadmap-size">
            <SelectValue placeholder={"Programming language"} />
          </SelectTrigger>
          <SelectContent defaultValue={RoadmapSize.MEDIUM}>
            <SelectItem value={RoadmapSize.MEDIUM}>
              Programming language
            </SelectItem>
            <SelectItem value={RoadmapSize.SMALL}>
              Framework / Library
            </SelectItem>
          </SelectContent>
        </Select>
      </section>
      <SubmitButton />
    </form>
  );
}
