import { ComponentMeta, ComponentStory } from "@storybook/react";
import { JssDecorator } from "infra/storybook";
import React from "react";
import { Dropdown } from "./Dropdown";

const meta: ComponentMeta<typeof Dropdown> = {
  title: "UI-Kit/Dropdown",
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [JssDecorator as any], // broken SB types
};
export default meta;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Index: ComponentStory<typeof Dropdown> = Template.bind({});
Index.args = {
  label: "Language",
  noSelectionLabel: "Not Selected",
};
