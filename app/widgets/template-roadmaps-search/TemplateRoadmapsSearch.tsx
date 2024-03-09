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
import { useFormState, useFormStatus } from "react-dom";

export default function TemplateRoadmapsSearch() {
  const {
    data: templates,
    isLoading,
    isFetched,
  } = useQuery(["templateRoadmaps"], () => fetchTemplates(), {
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
          placeholder="Type in library or language"
          onChange={(e) => {
            handleChange(e);
          }}
          className="focus:outline-none h-full  w-full rounded-lg textblack 800/80 bgblack 200  dark:borderblack 700 dark:bgblack 800 shadow-md  dark:textblack 200/70 pl-3 dark:border mx-auto"
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
  const copyTemplateAction = fetchCopyTemplate.bind(null, id);
  const state = useFormState(copyTemplateAction, "message");

  return (
    <div className="py-5 dark:border overflow-hidden flex justify-between items-center  dark:borderblack 400 dark:shadow-none font-semibold bgblack 200  dark:bgblack 700 rounded-lg text-lg text-center px-3">
      <p>{title}</p>
      <form
        action={copyTemplateAction}
        className="min-w-[25%]  h-full flex items-center justify-center"
      >
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const status = useFormStatus();
  console.log(status);
  return (
    <button
      type="submit"
      aria-disabled={status.pending}
      className="font-normal overflow-hidden z-10 bg-inherit group  relative rounded-full  p-0.5"
    >
      {!status.pending && (
        <div className="z-50 bgblack 200 textblack 800 dark:textblack 200 dark:bgblack 700 flex rounded-full p-1">
          Copy roadmap
        </div>
      )}
      {status.pending && (
        <div className="z-50 bgblack 200 textblack 800 dark:textblack 200 dark:bgblack 700 flex rounded-full p-1">
          Copying...
        </div>
      )}
      <div className="w-full rounded-full -z-10 top-0 group-hover:left-0 transition-all duration-500 -left-full bg-gradient-to-tr dark:from-foreground0 dark:toblack 400 fromblack 400 toblack 700 h-full absolute" />
    </button>
  );
}

function LoadingTemplates() {
  return (
    <div className="w-full h-fit space-y-3 overflow-hidden">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="w-full dark:border dark:borderblack 700 py-7 rounded-md"
        >
          <Skeleton className="w-3/4 h-6"  />
        </div>
      ))}
    </div>
  );
}

const highlightText = (str: string, term: string) => {
  const splitText = str.split(new RegExp(`(${term})`, "gi"));

  return splitText.map((chunk, index) =>
    chunk.toLowerCase() === term.toLowerCase() ? (
      <span key={index} className="dark:bgblack 400 bgblack 100">
        {chunk}
      </span>
    ) : (
      chunk
    )
  );
};
