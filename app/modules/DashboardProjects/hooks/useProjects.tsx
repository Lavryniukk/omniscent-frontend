import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../api/fetchProjects";

function useProjects() {
  const { data, isLoading, error } = useQuery(["projects"], async () => {
    await fetchProjects();
  });
  return { projects: data, isLoading, error };
}

export default useProjects;
