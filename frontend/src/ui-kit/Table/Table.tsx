import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    overflow: "hidden",
    borderRadius: 6,
    border: `thin ${theme.palette.border} solid`,
  },
}));

export type TableProps = {};
export const Table: React.FC<TableProps> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
