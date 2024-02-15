"use client";
import Button from "@/app/UI/buttons/Button";
import { Star, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import fetchFeedback from "./api/fetchFeedback";

type RoadmapProps = {
  roadmapId: string;
  conversationId?: never;
};

type ConversationProps = {
  conversationId: string;
  roadmapId?: never;
};

export default function FeedbackForm(props: RoadmapProps | ConversationProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [alert, setAlert] = useState(false);
  return (
    <div className="fixed bg-azure-200 shadow-lg right-2 dark:bg-azure-900 bottom-2 p-4 flex flex-col gap-4 rounded-lg">
      <div className="w-full text-center font-bold tracking-wide text-2xl h-fit">
        Rate this {props.roadmapId ? "roadmap" : "lesson"}
      </div>

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
                  ? "dark:fill-azure-500 fill-azure-700"
                  : "dark:fill-azure-700/70 fill-azure-300"
              }`}
            />
          );
        })}
      </div>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          fetchFeedback(
            feedback,
            rating,
            props.conversationId,
            props.roadmapId
          );
          setRating(0);
          setFeedback("");
          setAlert(true);
        }}
      >
        <textarea
          value={feedback}
          onChange={(e) => {
            setFeedback(e.target.value);
          }}
          name="feedback"
          rows={4}
          placeholder="This roadmap is nuts! I hate it beacause..."
          className="rounded bg-transparent shadow-lg h-full resize-none outline-none p-2 dark:bg-azure-800/80 dark:border-azure-700 dark:border"
        />

        {alert && (
          <div className="flex items-center justify-center gap-1 bg-green-500/30 p-2 rounded-xl font-meduim">
            <CheckCircle2 color="green" />
            Thanks for feedback!
          </div>
        )}

        <Button type="submit" variant="ghost">
          Submit
        </Button>
      </form>
    </div>
  );
}
