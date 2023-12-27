"use client";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import useConversationStorage from "@/app/modules/ConversationWindow/storage/ConversationStorage";
import RoadmapNode from "@/app/shared/entities/Roadmap";
import Button from "@/app/UI/buttons/Button";
import { Check, Trash } from "lucide-react";
export default function RoadmapNodeComponent({
  id,
  current,
  subroadmap,
  isLast,
}: {
  id: string;
  current: boolean;
  subroadmap: RoadmapNode;
  isLast: boolean;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <motion.li className="w-full flex relative items-center justify-center flex-col min-w-[200px]">
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{
          scale: 1.05,
        }}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className={`roadmap__node ${
          subroadmap.is_completed && "roadmap__node--complete"
        } ${current && "roadmap__node--current"}
		  `}
      >
        {subroadmap.title}
      </motion.div>
      <motion.div
        variants={itemVariants}
        animate={isOpen ? "open" : "closed"}
        className={`absolute  ${
          isOpen ? "block" : "hidden"
        } lg:-right-[80%] min-w-[200px] flex items-center flex-col gap-2 right-0 w-full lg:w-3/4 bg-secondary  h-fit top-1/3 z-10 lg:top-0 border rounded-md border-secondary p-2   `}
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          onClick={() => {
            alert("This feature is under development)");
          }}
          variants={itemVariants}
          className="w-full py-1 rounded-sm z-10 after:-z-10 pl-1 text-md after:w-full after:h-0.5 after:absolute after:bottom-0 after:rounded-sm hover:after:h-full hover:text-background  transition-colors after:transition-all after:duration-200 after:ease-in-out  duration-200 after:left-0 after:bg-accent hover:after:bg-red-600 relative cursor-pointer text-text"
        >
          <div className="flex items-center">
            <Trash className="mr-1" size={20} />
            Remove technology
          </div>
        </motion.div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={itemVariants}
          onClick={() => {
            alert("This feature is under development)");
          }}
          className="w-full py-1  rounded-sm z-10 after:-z-10 pl-1 text-md after:w-full after:h-0.5 after:absolute after:bottom-0 after:rounded-sm hover:after:h-full hover:text-background  transition-colors after:transition-all after:duration-200 after:ease-in-out  duration-200 after:left-0 after:bg-accent relative cursor-pointer text-text"
        >
          <div className="flex items-center">
            <Check className="mr-1 " size={20} />{" "}
            <p>
              {subroadmap.is_completed
                ? "Mark as uncompleted"
                : "Mark as completed"}
            </p>
          </div>
        </motion.div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          whileTap={{
            scale: 0.9,
          }}
          variants={itemVariants}
        >
          <Button
            size="sm"
            href={`/workspace/conversation/${id}/${subroadmap._id}/${subroadmap.children[0]?.conversation_id}`}
          >
            Start learning
          </Button>
        </motion.div>
      </motion.div>
      {!isLast && (
        <div
          className={`roadmap__arrow ${
            subroadmap.is_completed && "opacity-60"
          }`}
        />
      )}
    </motion.li>
  );
}
