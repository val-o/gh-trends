import { Meta } from "@storybook/react";
import { JssDecorator } from "infra/storybook";
import React from "react";
import * as icons from "./icons";

const meta: Meta = {
  title: "UI-Kit/Icons",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [JssDecorator as any], // broken SB types
};
export default meta;

export const Index = () => {
  return (
    <>
      {Object.keys(icons).map((key) => {
        const Icon: React.ComponentType<icons.IconProps> = (icons as any)[key];
        return <Icon key={key} />;
      })}
    </>
  );
};
export const Color = () => {
  return (
    <>
      {Object.keys(icons).map((key) => {
        const Icon: React.ComponentType<icons.IconProps> = (icons as any)[key];
        return <Icon color="favorite" key={key} />;
      })}
    </>
  );
};
