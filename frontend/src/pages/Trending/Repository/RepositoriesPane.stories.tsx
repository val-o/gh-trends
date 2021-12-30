import { Meta } from "@storybook/react";
import { ApiProvider } from "api/ApiProvider";
import { createMockApi, mockFetchRepos } from "api/mocks";
import { JssDecorator } from "infra/storybook";
import React from "react";
import { RepositoriesPane } from "./RepositoriesPane";

const meta: Meta = {
  title: "Trending/Repository/RepositoriesPane",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [JssDecorator as any], // broken SB types
};
export default meta;

export const Success = () => {
  return (
    <ApiProvider
      value={{
        ...createMockApi(),
        fetchRepositories: mockFetchRepos,
      }}
    >
      <RepositoriesPane startHeaderContent={<></>} />
    </ApiProvider>
  );
};
export const ErrorLoading = () => {
  return (
    <ApiProvider
      value={{
        ...createMockApi(),
        fetchRepositories: () => Promise.reject(new Error()),
      }}
    >
      <RepositoriesPane startHeaderContent={<></>} />
    </ApiProvider>
  );
};
