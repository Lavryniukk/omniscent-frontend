import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

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

export default function Loader({ isCorrect }: { isCorrect: boolean }) {
  const [isLoading, setIsLoading] = useState(false);

  const { pending } = useFormStatus();

  useEffect(() => {
    if (isCorrect && pending) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, totalDuration);
    }
  }, [pending, isCorrect]);

  return (
    <>
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
    </>
  );
}
