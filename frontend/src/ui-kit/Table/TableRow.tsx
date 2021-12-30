import React from "react";
import { createUseStyles } from "react-jss";

const useTableRowStyles = createUseStyles((theme) => ({
  root: {
    padding: theme.space(2),
    "&:not(:last-child)": {
      borderBottom: `thin ${theme.palette.border} solid`,
    },
  },
}));

export type TableRowProps = {};

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  const classes = useTableRowStyles();
  return <div className={classes.root}>{children}</div>;
};
