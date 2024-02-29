"use client";
import { Star, CheckCircle2, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import fetchFeedback from "./api/fetchFeedback";

type RoadmapProps = {
  roadmapId: string;
  lessonId?: never;
};

type LessonProps = {
  lessonId: string;
  roadmapId?: never;
};

export default function FeedbackForm(props: RoadmapProps | LessonProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [alert, setAlert] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void fetchFeedback(feedback, rating, props.lessonId, props.roadmapId);
    setRating(0);
    setFeedback("");
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 5000);
  };

  const handleClose = () => {
    if (divRef.current) {
      divRef.current.style.display = "none";
    }
  };

  return (
    <div
      ref={divRef}
      className="fixed bgblack 200/50 z-50 backdrop-blur-md    shadow-lg right-2 dark:bgblack 900 bottom-2 p-4 flex flex-col gap-4 rounded-lg"
    >
      <div className="w-full text-center font-bold tracking-wide text-2xl h-fit">
        Rate this {props.roadmapId ? "roadmap" : "lesson"}
      </div>
      <X
        onClick={handleClose}
        className="absolute textblack 800 top-2 h-4 w-4 cursor-pointer aspect-square right-2"
      />
      <div className="flex w-full items-center justify-between">
        {Array.from({ length: 5 }).map((_, index) => {
          const isFilled = rating > index;
          return (
            <Star
              onClick={() => {
                setRating(index + 1);
              }}
              key={index}
              size={30}
              className={`cursor-pointer stroke-none ${
                isFilled
                  ? "dark:fill-foreground0 drop-shadow-md fillblack 700"
                  : "dark:fillblack 700/70 fillblack 300"
              }`}
            />
          );
        })}
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => {
            setFeedback(e.target.value);
          }}
          name="feedback"
          rows={4}
          placeholder="This roadmap is nuts! I hate it because..."
          className="rounded bgblack 200/90 shadow-lg h-full resize-none outline-none p-2 dark:bgblack 800/80 dark:borderblack 700 dark:border"
        />

        {alert && (
          <div className="flex items-center justify-center gap-1 bg-green-500/30 p-2 rounded-xl font-meduim">
            <CheckCircle2 color="green" />
            Thanks for feedback!
          </div>
        )}

        {!alert && (
          <Button type="submit" variant="ghost">
            Submit
          </Button>
        )}
      </form>
    </div>
  );
}
