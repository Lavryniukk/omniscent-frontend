"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { data: isSubmitted, pending: isOrdering } = useFormStatus();

  const BUTTON_TEXTS = {
    create: "Create roadmap",
    ordering: "Ordering...",
    ordered: "Ordered!",
  };

  let buttonText;
  if (!isOrdering && !isSubmitted) buttonText = BUTTON_TEXTS.create;
  else if (isOrdering) buttonText = BUTTON_TEXTS.ordering;
  else buttonText = BUTTON_TEXTS.ordered;

  return (
    <Button className="ml-auto" type="submit">
      {buttonText}
    </Button>
  );
}
