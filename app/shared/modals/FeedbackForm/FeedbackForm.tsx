"use client";
import { Star, CheckCircle2, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import fetchFeedbackAction from "./actions/fetch-feedback-action";
import { FeedbackFormProps } from "./types/props";
import { useFormStatus } from "react-dom";
import { toast } from "@/components/ui/use-toast";

export default function FeedbackForm(props: FeedbackFormProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const divRef = useRef<HTMLDivElement>(null);

  const fetchFeedbackActionWithRating = fetchFeedbackAction.bind(null, rating);
  const fetchFeedbackWithId = fetchFeedbackActionWithRating.bind(null, props);

  const handleClose = () => {
    if (divRef.current) {
      divRef.current.style.display = "none";
    }
  };

  return (
    <div
      ref={divRef}
      className="fixed  z-50 backdrop-blur-md bg-popover  shadow-lg right-2 bottom-2 p-4 flex flex-col gap-4 rounded-lg"
    >
      <div className="w-full text-center font-bold tracking-wide text-2xl h-fit">
        Rate this {props.roadmapId ? "roadmap" : "lesson"}
      </div>
      <X
        onClick={handleClose}
        className="absolute  top-2 h-4 w-4 cursor-pointer aspect-square right-2"
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
              className={`cursor-pointer stroke-none ${isFilled ? "fill-primary" : " fill-primary/40"} `}
            />
          );
        })}
      </div>

      <form className="flex flex-col gap-4" action={fetchFeedbackWithId}>
        <textarea
          value={feedback}
          onChange={(e) => {
            setFeedback(e.target.value);
          }}
          name="feedback"
          rows={4}
          placeholder={props.placeholder}
          className="rounded border h-full resize-none text-sm  outline-none p-2 "
        />
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending, data } = useFormStatus();
  data &&
    toast({
      title: "Feedback submitted",
      description: "Thanks for your feedback! 😘",
    });
  return (
    <>
      {pending && <div className="spinner" />}
      {!pending && (
        <Button type="submit" variant="ghost">
          Submit
        </Button>
      )}
    </>
  );
}
