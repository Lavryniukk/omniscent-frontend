import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Fragment } from "react";
import { fetchProjects } from "../../api/fetchProjects";
import { Project } from "../../types/project";

export default function OngoingProjects() {
  const arr: [] | Project[] = [
    // {
    //   _id: "new_id_0",
    //   owner_id: "google-oauth2|116000322186574711788",
    //   title: "New Title 1",
    //   node_list: [
    //     { title: "HTML" },
    //     { title: "CSS" },
    //     { title: "JavaScript" },
    //     { title: "Vue" },
    //     { title: "Vuex" },
    //     { title: "Vue" },
    //     { title: "Axios" },
    //     { title: "ESLint" },
    //     { title: "Jest" },
    //     { title: "Npm" },
    //   ],
    //   __v: 0,
    // },
    // {
    //   _id: "new_id_1",
    //   owner_id: "google-oauth2|116000322186574711788",
    //   title: "New Title 2",
    //   node_list: [
    //     { title: "HTML" },
    //     { title: "CSS" },
    //     { title: "JavaScript" },
    //     { title: "Vue" },
    //     { title: "Vuex" },
    //     { title: "Vue" },
    //     { title: "Axios" },
    //     { title: "ESLint" },
    //     { title: "Jest" },
    //     { title: "Npm" },
    //   ],
    //   __v: 0,
    // },
    // {
    //   _id: "new_id_2",
    //   owner_id: "google-oauth2|116000322186574711788",
    //   title: "New Title 3",
    //   node_list: [
    //     { title: "HTML" },
    //     { title: "CSS" },
    //     { title: "JavaScript" },
    //     { title: "Vue" },
    //     { title: "Vuex" },
    //     { title: "Vue" },
    //     { title: "Axios" },
    //     { title: "ESLint" },
    //     { title: "Jest" },
    //     { title: "Npm" },
    //   ],
    //   __v: 0,
    // },
    // {
    //   _id: "new_id_3",
    //   owner_id: "google-oauth2|116000322186574711788",
    //   title: "New Title 4",
    //   node_list: [
    //     { title: "HTML" },
    //     { title: "CSS" },
    //     { title: "JavaScript" },
    //     { title: "Vue" },
    //     { title: "Vuex" },
    //     { title: "Vue" },
    //     { title: "Axios" },
    //     { title: "ESLint" },
    //     { title: "Jest" },
    //     { title: "Npm" },
    //   ],
    //   __v: 0,
    // },
  ];

  const { data, isLoading, error } = useQuery({
    queryKey: ["profileProjects"],
    queryFn: async () => fetchProjects(),
  });

  return (
    <div className="w-full sm:w-8/12 mx-auto border-2 h-fit py-10 border-secondary flex flex-col gap-10 overflow-hidden rounded-lg">
      <div className="h-fit w-full bg-background flex justify-center text-center">
        <p className="font-semibold text-text text-4xl sm:text-3xl">{`Learning projects`}</p>
      </div>

      {!isLoading && !error ? (
        data && data.length > 0 ? (
          <div className="h-fit grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
            {data.map((item, index, array) => {
              if (index !== array.length - 1) {
                return (
                  <Link
                    href={"/"}
                    key={item._id}
                    className="border rounded border-accent p-4"
                  >
                    <div className="text-accent text-2xl text-center">
                      {item.title}
                    </div>
                  </Link>
                );
              } else
                return (
                  <Fragment key={item._id}>
                    <Link
                      href={"/"}
                      className="border rounded border-accent p-4 hover:border-accent-300 transition duration-200"
                    >
                      <div className="text-accent text-2xl text-center">
                        {item.title}
                      </div>
                    </Link>
                    <Link
                      href={"/create"}
                      className="border border-accent rounded bg-secondary-900 text-accent p-4 hover:bg-background hover:text-text transition duration-300"
                    >
                      <div className="text-inherit text-2xl text-center font-medium">
                        Create new
                      </div>
                    </Link>
                  </Fragment>
                );
            })}
          </div>
        ) : (
          <div className="h-full text-text flex w-full justify-center items-center">
            <Link
              href={"/projects/create"}
              className="hover:bg-text hover:text-background font-medium transition duration-300 text-base md:text-2xl block border border-text p-3 md:p-4 rounded"
            >
              {`Embark on the journey ->`}
            </Link>
          </div>
        )
      ) : (
        <div className="h-fit grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
          <div className="w-full p-6 border border-secondary rounded">
            <Skeleton width="75%" height="24px" rounded="0.4vw" />
          </div>
          <div className="w-full p-6 border border-secondary rounded">
            <Skeleton width="75%" height="24px" rounded="0.4vw" />
          </div>
          <div className="w-full p-6 border border-secondary rounded">
            <Skeleton width="75%" height="24px" rounded="0.4vw" />
          </div>
          <div className="w-full p-6 border border-secondary rounded">
            <Skeleton width="75%" height="24px" rounded="0.4vw" />
          </div>
          <div className="w-full p-6 border border-secondary rounded">
            <Skeleton width="75%" height="24px" rounded="0.4vw" />
          </div>
          <div className="w-full p-6 border border-secondary rounded">
            <Skeleton width="75%" height="24px" rounded="0.4vw" />
          </div>
        </div>
      )}
    </div>
  );
}
