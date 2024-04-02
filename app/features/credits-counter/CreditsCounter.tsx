"use client";
import { useCredits } from "@/app/processes/credits/CreditsProvider";

export default function CreditsCounter({ className }: { className?: string }) {
  const { credits, isLoading } = useCredits();
  return (
    <div className={className}>
      {isLoading && <p></p>}
      {credits && credits > 0 && <p>Credits left: {credits} </p>}
      {credits && credits === 0 && <p>Out of credits! </p>}
    </div>
  );
}
