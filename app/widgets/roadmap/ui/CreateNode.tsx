"use client";
import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import useOutsideClick from "@/app/shared/hooks/useOutsideClick";
import { set } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const GENERATE_NODE_TIME = 15;
export default function CreateNode({
  action,
  prevNodeTitle,
}: {
  action: (data: FormData) => Promise<boolean>;
  prevNodeTitle: string;
}) {
  // const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState<number>(-1);

  const startInterval = () => {
    setCountdown(GENERATE_NODE_TIME);
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
      if (countdown === 0) {
        clearInterval(interval);
        setCountdown(-1);
      }
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        <Dialog>
          <DialogTrigger>
            {countdown < 0 && (
              <motion.div
                key={"createSection"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-full border-2 border-muted-foreground w-6 h-6 cursor-pointer create-section flex justify-center items-center hover:border-primary group transition-colors duration-300"
              >
                <Plus
                  size={20}
                  className="stroke-[2px] stroke-muted-foreground group-hover:stroke-primary transition-colors duration-300"
                />
              </motion.div>
            )}
          </DialogTrigger>
          <DialogContent>
            <form action={action}>
              <DialogHeader>
                <DialogTitle>Insert new node</DialogTitle>
                <DialogDescription>
                  Insert a new node after {prevNodeTitle}.
                </DialogDescription>
              </DialogHeader>

              <div className="w-full py-4">
                <input
                  placeholder="New node (e.g. Working with files)"
                  required
                  autoFocus
                  className="outline-none bg-transparent w-3/4 border-b-2 border-muted-foreground pb-1"
                  name="title"
                />
              </div>
              <DialogFooter>
                <Button
                  onClick={() => {
                    setTimeout(() => {
                      location.reload();
                    }, GENERATE_NODE_TIME * 1000);
                    startInterval();
                  }}
                  size="sm"
                  type="submit"
                  className="hover:opacity-75 duration-300 transition-opacity"
                >
                  Generate
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {countdown > 0 && (
          <div>
            <div>Generating... {countdown}s</div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
