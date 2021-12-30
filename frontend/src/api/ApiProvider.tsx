import React, { useContext } from "react";
import { TrendingApi } from "./createApi";

const ApiContext = React.createContext<TrendingApi>({
  fetchDevelopers: () => Promise.reject(new Error("No ApiProvider")),
  fetchRepositories: () => Promise.reject(new Error("No ApiProvider")),
});

export const ApiProvider = ApiContext.Provider;
export const useApiContext = () => useContext(ApiContext);
