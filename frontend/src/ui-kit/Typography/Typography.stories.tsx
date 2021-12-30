import { Meta } from "@storybook/react";
import { JssDecorator } from "infra/storybook";
import React from "react";
import { Typography } from "./Typography";

const meta: Meta = {
  title: "UI-Kit/Typography",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [JssDecorator as any], // broken SB types
};
export default meta;

export const Index = () => {
  return (
    <>
      <Typography color="primary" variant="body">
        Body
      </Typography>
      <Typography color="primaryEmphasis" variant="caption">
        Caption
      </Typography>
      <Typography color="secondary" variant="caption">
        Secondary Caption
      </Typography>
    </>
  );
};
