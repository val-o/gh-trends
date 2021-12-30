import React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import { ButtonGroup, ButtonGroupItem } from "./ButtonGroup";
import { JssDecorator } from "infra/storybook";
import { FavoriteIcon } from "ui-kit/icons";

const meta: ComponentMeta<typeof ButtonGroup> = {
  title: "UI-Kit/ButtonGroup",
  component: ButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [JssDecorator as any], // broken SB types
};
export default meta;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const ActiveFirst: ComponentStory<typeof ButtonGroup> = Template.bind({});
ActiveFirst.args = {
  value: "1",
  children: [
    <ButtonGroupItem value="1">One</ButtonGroupItem>,
    <ButtonGroupItem value="2">Two</ButtonGroupItem>,
    <ButtonGroupItem value="3">Three</ButtonGroupItem>,
  ],
};
export const ActiveMiddle: ComponentStory<typeof ButtonGroup> = Template.bind({});
ActiveMiddle.args = {
  value: "2",
  children: [
    <ButtonGroupItem value="1">One</ButtonGroupItem>,
    <ButtonGroupItem value="2">Two</ButtonGroupItem>,
    <ButtonGroupItem value="3">Three</ButtonGroupItem>,
  ],
};
export const ActiveLast: ComponentStory<typeof ButtonGroup> = Template.bind({});
ActiveLast.args = {
  value: "3",
  children: [
    <ButtonGroupItem value="1">One</ButtonGroupItem>,
    <ButtonGroupItem value="2">Two</ButtonGroupItem>,
    <ButtonGroupItem value="3">Three</ButtonGroupItem>,
  ],
};

export const NoActive: ComponentStory<typeof ButtonGroup> = Template.bind({});
NoActive.args = {
  value: "4",
  children: [
    <ButtonGroupItem value="1">One</ButtonGroupItem>,
    <ButtonGroupItem value="2">Two</ButtonGroupItem>,
    <ButtonGroupItem value="3">Three</ButtonGroupItem>,
  ],
};
