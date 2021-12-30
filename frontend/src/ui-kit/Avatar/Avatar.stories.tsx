import { ComponentMeta, ComponentStory } from "@storybook/react";
import { JssDecorator } from "infra/storybook";
import React from "react";
import { Avatar } from "./Avatar";

const meta: ComponentMeta<typeof Avatar> = {
  title: "UI-Kit/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [JssDecorator as any], // broken SB types
  argTypes: {},
};
export default meta;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Plain: ComponentStory<typeof Avatar> = Template.bind({});
Plain.args = {
  src: "/avatar.png",
  size: 50,
};
