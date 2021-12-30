import { ComponentMeta, ComponentStory } from "@storybook/react";
import { JssDecorator } from "infra/storybook";
import React from "react";
import { TableRow } from "ui-kit";
import { DeveloperCard } from "./DeveloperCard";

const meta: ComponentMeta<typeof DeveloperCard> = {
  title: "Trending/Developer/DeveloperCard",
  component: DeveloperCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [JssDecorator as any], // broken SB types
};
export default meta;

const Template: ComponentStory<typeof DeveloperCard> = (args) => (
  <TableRow>
    <DeveloperCard {...args} />
  </TableRow>
);

export const Index: ComponentStory<typeof DeveloperCard> = Template.bind({});
Index.args = {
  index: 1,
  developer: {
    username: "davideuler",
    name: "david l euler",
    url: "https://github.com/davideuler",
    avatar: "https://avatars3.githubusercontent.com/u/377983",
    repository: {
      name: "architecture.of.internet-product",
      description:
        "互联网公司技术架构，微信/淘宝/腾讯/阿里/美团点评/百度/微博/Google/Facebook/Amazon/eBay的架构，欢迎PR补充",
      url: "https://github.com/davideuler/architecture.of.internet-product",
    },
  },
};

export const WithoutRepo: ComponentStory<typeof DeveloperCard> = Template.bind(
  {}
);
WithoutRepo.args = {
  index: 1,
  developer: {
    username: "davideuler",
    name: "david l euler",
    url: "https://github.com/davideuler",
    avatar: "https://avatars3.githubusercontent.com/u/377983",
  },
};
