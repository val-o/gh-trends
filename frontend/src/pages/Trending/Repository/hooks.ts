import { useApiContext } from "api/ApiProvider";
import { useQuery } from "react-query";

const REPOS_QUERY_KEY = "reposQueryKey";
export const useRepositoriesQuery = () => {
  const { fetchRepositories } = useApiContext();
  return useQuery(REPOS_QUERY_KEY, fetchRepositories);
};
