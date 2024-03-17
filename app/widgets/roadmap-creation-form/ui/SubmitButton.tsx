"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";
export function SubmitButton() {
  const { data: isSubmitted, pending: isOrdering } = useFormStatus();

  const BUTTON_TEXTS = {
    create: "Create roadmap (~30s)",
    ordering: "Ordering...",
    ordered: "Ordered!",
  };
  useEffect(() => {
    if (isSubmitted)
      toast({
        title: "Order placed!",
        description:
          "We will deliver your roadmap to your workspace in 30-40 seconds, please stand by. 🚀",
      });
  }, [isSubmitted]);
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
