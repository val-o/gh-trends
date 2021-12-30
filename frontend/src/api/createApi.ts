import * as ApiDto from "./ApiDto";

export type TrendingApi = {
  fetchDevelopers: () => Promise<ApiDto.Developer[]>;
  fetchRepositories: () => Promise<ApiDto.Repository[]>;
};

export const createApi = ({ apiHost }: { apiHost: string }): TrendingApi => {
  return {
    fetchDevelopers: () =>
      fetch(`${apiHost}/api/developers`).then((res) => res.json()),
    fetchRepositories: () =>
      fetch(`${apiHost}/api/repositories`).then((res) => res.json()),
  };
};
