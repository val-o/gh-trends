import { ComponentMeta, ComponentStory } from "@storybook/react";
import { JssDecorator } from "infra/storybook";
import React from "react";
import { PageHeader } from "./PageHeader";

const meta: ComponentMeta<typeof PageHeader> = {
  title: "UI-Kit/PageHeader",
  component: PageHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [JssDecorator as any], // broken SB types
};
export default meta;

const Template: ComponentStory<typeof PageHeader> = (args) => (
  <PageHeader {...args} />
);

export const Index: ComponentStory<typeof PageHeader> = Template.bind({});
Index.args = {
  title: "Title",
  subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facere aperiam laboriosam quaerat quod autem fugit vel ipsum vero expedita eius, possimus ipsa error. Quae molestiae qui animi nemo officia.`,
};
