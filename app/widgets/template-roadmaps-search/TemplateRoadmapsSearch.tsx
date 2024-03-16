"use client";

import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { Check, Search, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { TemplateNode } from "@/app/entities";
import Link from "next/link";
import {
  fetchCopyTemplate,
  fetchTemplates,
} from "@/app/entities/roadmap-template/api";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";

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
    <div className="pt-10 pb-20">
      <h1 className="text-2xl text-center mb-10 font-semibold">
        Search for roadmaps
      </h1>
      <div className="relative h-10 w-full mx-auto items-center flex">
        <Input
          type="text"
          value={text}
          placeholder="Type in library or language"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Search size={20} className="absolute text-fore right-3" />
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

  return (
    <div className="py-2  border overflow-hidden flex justify-between items-center  dark:shadow-none font-semibold rounded-lg text-center px-3">
      <p className="text-lg">{title}</p>
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

  return (
    <button
      type="submit"
      aria-disabled={status.pending}
      className="font-normal overflow-hidden z-10 bg-inherit group text-sm  relative rounded-full  p-0.5"
    >
      {!status.pending && !status.data && (
        <div className="z-50 flex rounded-full p-1">Copy roadmap</div>
      )}
      {status.pending && (
        <div className="z-50 flex rounded-full p-1">Copying...</div>
      )}
      {status.data && !status.pending && (
        <Link href="workspace">View in workspace</Link>
      )}
      <div className="w-full rounded-full -z-10 top-0 group-hover:left-0 transition-all duration-500 -left-full  h-full absolute" />
    </button>
  );
}

function LoadingTemplates() {
  return (
    <div className="w-full h-fit space-y-3 overflow-hidden">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="w-full py-7 rounded-md">
          <Skeleton className="w-3/4 h-6" />
        </div>
      ))}
    </div>
  );
}

const highlightText = (str: string, term: string) => {
  const splitText = str.split(new RegExp(`(${term})`, "gi"));

  return splitText.map((chunk, index) =>
    chunk.toLowerCase() === term.toLowerCase() ? (
      <span key={index} className=" text-primary-foreground bg-foreground/70">
        {chunk}
      </span>
    ) : (
      chunk
    )
  );
};
