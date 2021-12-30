import { Meta } from "@storybook/react";
import { JssDecorator } from "infra/storybook";
import React from "react";
import { FavoriteIcon, StarIcon } from "ui-kit/icons";
import { Table } from "./Table";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import { TableLoading } from "./TableLoading";
import { TableError } from "./TableError";
import { TableRow } from "./TableRow";

const meta: Meta = {
  title: "UI-Kit/Table",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [JssDecorator as any], // broken SB types
};
export default meta;

export const Index = () => {
  return (
    <Table>
      <TableHeader startContent={<FavoriteIcon />} endContent={<StarIcon />} />
      <TableBody>
        <TableRow>
          <FavoriteIcon />
        </TableRow>
        <TableRow>
          <FavoriteIcon />
        </TableRow>
        <TableRow>
          <FavoriteIcon />
        </TableRow>
      </TableBody>
    </Table>
  );
};
export const Loading = () => {
  return (
    <Table>
      <TableHeader startContent={<FavoriteIcon />} endContent={<StarIcon />} />
      <TableBody>
        <TableLoading />
      </TableBody>
    </Table>
  );
};
export const Error = () => {
  return (
    <Table>
      <TableHeader startContent={<FavoriteIcon />} endContent={<StarIcon />} />
      <TableBody>
        <TableError text="Error occured" />
      </TableBody>
    </Table>
  );
};
