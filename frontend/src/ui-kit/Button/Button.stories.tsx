import React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { Button } from "./Button";
import { JssDecorator } from "infra/storybook";
import { FavoriteIcon } from "ui-kit/icons";

const meta: ComponentMeta<typeof Button> = {
  title: "UI-Kit/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: "text" },
    icon: { table: { disable: true } },
  },
  decorators: [JssDecorator],
};
export default meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Plain: ComponentStory<typeof Button> = Template.bind({});
Plain.args = {
  children: "Button",
};

export const WithIcon: ComponentStory<typeof Button> = Template.bind({});
WithIcon.args = {
  children: "Button",
  icon: <FavoriteIcon color="favorite" />,
};
