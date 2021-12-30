import { useApiContext } from "api/ApiProvider";
import { useQuery } from "react-query";

const DEVELOPERS_QUERY_KEY = "developersQueryKey";
export const useDevelopersQuery = () => {
  const { fetchDevelopers } = useApiContext();
  return useQuery(DEVELOPERS_QUERY_KEY, fetchDevelopers, { retry: false });
};
