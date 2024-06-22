"use client";
import { DeleteRoadmapButton } from "@/app/features";
import RoadmapNode from "@/app/widgets/roadmap/ui/RoadmapNode";
import { motion } from "framer-motion";
import createSectionAction from "./actions/create-section";
import useRoadmap from "./hooks/use-roadmap";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";

export default function Roadmap({ id }: { id: string }) {
  const { data: roadmap, isLoading, error } = useRoadmap(id);

  if (isLoading) return <LoadingAnimation />;

  if (error || !roadmap || !roadmap.children) return <div>Not found</div>;

  return (
    <div className="w-fit mx-auto relative space-y-8">
      <article className="text-2xl text-center font-bold flex justify-between items-center ">
        <h2>{roadmap.title}</h2>
        <DeleteRoadmapButton id={roadmap._id} />
      </article>
      <ul className="mx-auto  w-fit h-fit flex items-center justify-center flex-col">
        {roadmap.children.map((node, index, arr) => {
          const isLast = index === arr.length - 1;
          const action = createSectionAction
            .bind(null, id)
            .bind(null, node._id);
          return (
            <motion.li
              animate={{
                opacity: 1,
                y: 0,
              }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="items-center justify-center w-full flex flex-col"
              key={roadmap._id + index}
            >
              <RoadmapNode isLast={isLast} node={node} action={action} />
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
const LoadingAnimation = () => {
  const arr = Array.from({ length: 7 });
  return (
    <div className="w-fit mx-auto relative space-y-8">
      <article className="text-2xl text-center font-bold flex justify-between items-center ">
        <h2>
          <Skeleton className="w-20 h-6" />
        </h2>
        <Skeleton className="w-6 h-6" />
      </article>
      <ul className="mx-auto   h-fit flex items-center justify-center w-52  flex-col">
        {arr.map((node, index, arr) => {
          const isLast = index === arr.length - 1;

          return (
            <motion.li
              animate={{
                opacity: 1,
                y: 0,
              }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="items-center justify-center w-full flex  flex-col "
              key={index}
            >
              <div className="roadmap-node w-full">
                <Skeleton className="w-3/4 h-4" />
              </div>
              {!isLast && (
                <>
                  <div
                    className={`block w-0.5 bg-muted-foreground select-none h-4 `}
                  />
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <div
                    className={`block w-0.5 bg-muted-foreground select-none h-4 }`}
                  />
                </>
              )}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
