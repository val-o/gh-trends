import React from "react";
import { createUseStyles } from "react-jss";

const useTableBodyStyles = createUseStyles((theme) => ({
  root: {},
}));

type TableBodyProps = {};

export const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  const classes = useTableBodyStyles();
  return <div className={classes.root}>{children}</div>;
};
