"use client";

import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { Check, Search, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { TemplateNode } from "@/app/entities";
import { useRouter } from "next/navigation";
import {
  fetchCopyTemplate,
  fetchTemplates,
} from "@/app/entities/roadmap-template/api";

export default function ProjectSearch() {
  const {
    data: templates,
    isLoading,
    isFetched,
  } = useQuery({
    queryKey: ["templateRoadmaps"],
    queryFn: () => fetchTemplates(),
    refetchInterval: false,
  });
  const [text, setText] = useState("");
  const [filteredArray, setFilteredArray] = useState<TemplateNode[]>([]);
  useEffect(() => {
    setFilteredArray(templates || []);
  }, [templates]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    const regex = new RegExp(e.target.value, "i");
    if (e.target.value === "") {
      setFilteredArray(templates || []);
      return;
    }
    const filtered =
      filteredArray && filteredArray.filter((item) => regex.test(item.title));
    filtered && setFilteredArray(filtered);
  };

  return (
    <div className="py-20">
      <div className="relative h-10 w-full mx-auto items-center flex">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            handleChange(e);
          }}
          className="focus:outline-none h-full  w-full rounded-lg text-azure-800/80 bg-azure-200  dark:border-azure-700 dark:bg-azure-800 shadow-md  dark:text-azure-200/70 pl-3 dark:border mx-auto"
        />
        <Search
          size={20}
          className="absolute text-accent bg-secondary right-3"
        />
      </div>
      <div className="w-full h-fit space-y-3 overflow-hidden mt-10">
        {isLoading && <LoadingTemplates />}

        {isFetched &&
          filteredArray?.map(
            (item, index) =>
              index <= 4 && (
                <ProjectContainer
                  id={item._id}
                  title={highlightText(item.title, text)}
                  key={item._id}
                />
              )
          )}
      </div>
    </div>
  );
}

function ProjectContainer({
  title,
  id,
}: {
  title: string | ReactNode;
  id: string;
}) {
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(
    null
  );
  const router = useRouter();
  const handleClick = async () => {
    setStatus("loading");
    void fetchCopyTemplate(id);
    setTimeout(() => {
      setStatus("success");
    }, 5000);

    setTimeout(() => {
      router.replace(`/workspace?new=true`);
    }, 7000);
  };
  return (
    <div className="py-5 dark:border overflow-hidden flex justify-between items-center  dark:border-azure-400 dark:shadow-none font-semibold bg-azure-200  dark:bg-azure-700 rounded-lg text-lg text-center px-3">
      <p>{title}</p>
      <div className="min-w-[25%]  h-full flex items-center justify-center">
        {status == null && (
          <button
            onClick={handleClick}
            className="font-normal overflow-hidden z-10 bg-inherit group  relative rounded-full  p-0.5"
          >
            <div className="z-50 bg-azure-200 text-azure-800 dark:text-azure-200 dark:bg-azure-700 flex rounded-full p-1">
              Copy roadmap
            </div>
            <div className="w-full rounded-full -z-10 top-0 group-hover:left-0 transition-all duration-500 -left-full bg-gradient-to-tr dark:from-azure-500 dark:to-azure-400 from-azure-400 to-azure-700 h-full absolute" />
          </button>
        )}
        {status === "loading" && (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-azure-600 dark:border-azure-400" />
        )}
        {status === "success" && (
          <div className="text-azure-900 gap-2 flex items-center justify-center dark:text-azure-200">
            <Check color="green" />
            Copied
          </div>
        )}
        {status === "error" && (
          <div className="text-azure-900 gap-2 flex items-center justify-center dark:text-azure-200">
            <X color="red" />
            Error
          </div>
        )}
      </div>
    </div>
  );
}

function LoadingTemplates() {
  return (
    <div className="w-full h-fit space-y-3 overflow-hidden">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="w-full dark:border dark:border-azure-700 py-7 rounded-md"
        >
          <Skeleton width="75%" height="24px" />
        </div>
      ))}
    </div>
  );
}

const highlightText = (str: string, term: string) => {
  const splitText = str.split(new RegExp(`(${term})`, "gi"));

  return splitText.map((chunk, index) =>
    chunk.toLowerCase() === term.toLowerCase() ? (
      <span key={index} className="dark:bg-azure-400 bg-azure-100">
        {chunk}
      </span>
    ) : (
      chunk
    )
  );
};
