"use client";
import { MdDone } from "react-icons/md";
import PrimaryBtn from "@/app/UI/buttons/primaryBtn/PrimaryBtn";
import SubroadmapInterface from "@/app/shared/entities/Subroadmap";
import { BiTrashAlt } from "react-icons/bi";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import useConversationStorage from "@/app/modules/ConversationWindow/storage/ConversationStorage";
export default function RoadmapNode({
  id,
  current,
  subroadmap,
  isLast,
}: {
  id: string;
  current: boolean;
  subroadmap: SubroadmapInterface;
  isLast: boolean;
}) {
  const selectConversation = useConversationStorage(
    (state) => state.selectConversation
  );
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
          subroadmap.isCompleted && "roadmap__node--complete"
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
        } lg:-right-[80%] min-w-[200px] right-0 w-full lg:w-3/4 bg-secondary  h-fit top-1/3 z-10 lg:top-0 border rounded-md border-secondary p-2   `}
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={itemVariants}
          className="w-full py-1 rounded-sm z-10 after:-z-10 pl-1 text-md after:w-full after:h-0.5 after:absolute after:bottom-0 after:rounded-sm hover:after:h-full hover:text-background  transition-colors after:transition-all after:duration-200 after:ease-in-out  duration-200 after:left-0 after:bg-accent hover:after:bg-red-600 relative cursor-pointer text-text"
        >
          <div className="flex items-center">
            <BiTrashAlt className="mr-1" />
            Remove technlogy
          </div>
        </motion.div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={itemVariants}
          className="w-full py-1 rounded-sm z-10 after:-z-10 pl-1 text-md after:w-full after:h-0.5 after:absolute after:bottom-0 after:rounded-sm hover:after:h-full hover:text-background  transition-colors after:transition-all after:duration-200 after:ease-in-out  duration-200 after:left-0 after:bg-accent relative cursor-pointer text-text"
        >
          <div className="flex items-center">
            <MdDone className="mr-1" />{" "}
            <p>
              {subroadmap.isCompleted
                ? "Mark as uncomplited"
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
          <PrimaryBtn
            text="Start learning"
            width="100%"
            height="40px"
            callbackFn={async () => {
              await selectConversation(
                subroadmap.node_list[0].conversation_id,
                subroadmap.node_list[0].title
              );
            }}
            href={`/workspace/conversation/${id}/${subroadmap.title}/`}
            classname=" text-md border "
          />
        </motion.div>
      </motion.div>
      {!isLast && (
        <div
          className={`roadmap__arrow ${subroadmap.isCompleted && "opacity-60"}`}
        />
      )}
    </motion.li>
  );
}
