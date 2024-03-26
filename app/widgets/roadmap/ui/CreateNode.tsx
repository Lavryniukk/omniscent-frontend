"use client";
import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import useOutsideClick from "@/app/shared/hooks/useOutsideClick";

export default function CreateNode({
  action,
}: {
  action: (data: FormData) => Promise<boolean>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(15);

  useOutsideClick("create-section", () => {
    setIsOpen(false);
  });

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key={"createSection"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="rounded-full border-2 border-muted-foreground w-8 h-8 cursor-pointer create-section flex justify-center items-center hover:border-primary group transition-colors duration-300"
          >
            <Plus
              size={20}
              className="stroke-[2px] stroke-muted-foreground group-hover:stroke-primary transition-colors duration-300"
            />
          </motion.div>
        )}
        {isOpen && (
          <motion.form
            action={action}
            key={"createSection"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border shadow-lg shadow-primary create-section flex items-center justify-between w-fit rounded-b-lg h-12"
          >
            {!isLoading && (
              <>
                <input
                  placeholder="Your desired node"
                  className="outline-none bg-transparent w-full translate-x-2"
                  name="title"
                />
                <Button
                  onClick={() => {
                    setIsLoading(true);
                    setInterval(() => {
                      setCountdown((prev) => prev - 1);
                    }, 1000);
                  }}
                  variant={"ghost"}
                  type="submit"
                  size={"icon"}
                  className="hover:opacity-75 duration-300 transition-opacity"
                >
                  <Check />
                </Button>

                <Button
                  onClick={() => setIsOpen(false)}
                  variant={"ghost"}
                  size={"icon"}
                  className="hover:opacity-75 duration-300 transition-opacity"
                >
                  <X />
                </Button>
              </>
            )}
            {isLoading && (
              <div>
                <div>{countdown}s</div>
              </div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </>
  );
}
