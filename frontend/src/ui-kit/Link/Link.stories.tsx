import { ComponentMeta, ComponentStory } from "@storybook/react";
import { JssDecorator } from "infra/storybook";
import React from "react";
import { Link } from "./Link";

const meta: ComponentMeta<typeof Link> = {
  title: "UI-Kit/Link",
  component: Link,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [JssDecorator as any], // broken SB types
};
export default meta;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Index: ComponentStory<typeof Link> = Template.bind({});
Index.args = {
  href: "#",
  children: "Link",
};
