import { ComponentMeta, ComponentStory } from "@storybook/react";
import { JssDecorator } from "infra/storybook";
import React from "react";
import { TableRow } from "ui-kit";
import { RepositoryCard } from "./RepositoryCard";

const meta: ComponentMeta<typeof RepositoryCard> = {
  title: "Trending/Repository/RepositoryCard",
  component: RepositoryCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [JssDecorator as any], // broken SB types
};
export default meta;

const Template: ComponentStory<typeof RepositoryCard> = (args) => (
  <TableRow>
    <RepositoryCard {...args} />
  </TableRow>
);

export const Index: ComponentStory<typeof RepositoryCard> = Template.bind({});
Index.args = {
  repository: {
    author: "open-mmlab",
    name: "mmdeploy",
    description: "OpenMMLab Model Deployment Framework",
    url: "https://github.com//open-mmlab/mmdeploy",
    language: "C++",
    langcolor: "#f34b7d",
    stars: 353,
    forks: 47,
    laststars: 60,
    builtby: [
      {
        username: "grimoire",
        url: "https://github.com/grimoire",
        avatar: "https://avatars.githubusercontent.com/u/1239736?s=40&v=4",
      },
      {
        username: "AllentDan",
        url: "https://github.com/AllentDan",
        avatar: "https://avatars.githubusercontent.com/u/41138331?s=40&v=4",
      },
      {
        username: "RunningLeon",
        url: "https://github.com/RunningLeon",
        avatar: "https://avatars.githubusercontent.com/u/28671653?s=40&v=4",
      },
      {
        username: "SingleZombie",
        url: "https://github.com/SingleZombie",
        avatar: "https://avatars.githubusercontent.com/u/47652064?s=40&v=4",
      },
      {
        username: "VVsssssk",
        url: "https://github.com/VVsssssk",
        avatar: "https://avatars.githubusercontent.com/u/88368822?s=40&v=4",
      },
    ],
  },
};
