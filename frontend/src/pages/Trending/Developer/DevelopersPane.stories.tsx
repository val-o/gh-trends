import { Meta } from "@storybook/react";
import { mockFetchDevs } from "api/mocks";
import { ApiProvider } from "api/ApiProvider";
import { createMockApi } from "api/mocks";
import { JssDecorator } from "infra/storybook";
import React from "react";
import { DevelopersPane } from ".";

const meta: Meta = {
  title: "Trending/Developer/DevelopersPane",
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
        fetchDevelopers: mockFetchDevs,
      }}
    >
      <DevelopersPane startHeaderContent={<></>} />
    </ApiProvider>
  );
};
export const ErrorLoading = () => {
  return (
    <ApiProvider
      value={{
        ...createMockApi(),
        fetchDevelopers: () => Promise.reject(new Error()),
      }}
    >
      <DevelopersPane startHeaderContent={<></>} />
    </ApiProvider>
  );
};
