import React from "react";
import { createUseStyles } from "react-jss";
import { Typography } from "ui-kit";

const useStyles = createUseStyles((theme) => ({
  root: {
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export type TableErrorProps = {
  text: string;
};
export const TableError: React.VFC<TableErrorProps> = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>{text}</Typography>
    </div>
  );
};
