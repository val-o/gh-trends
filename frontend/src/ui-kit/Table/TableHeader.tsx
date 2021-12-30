import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    borderBottom: `thin ${theme.palette.border} solid`,
    background: theme.palette.bgSecondary,
    padding: theme.space(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  startContent: {},
  endContent: {},
}));

export type TableHeaderProps = {
  startContent: React.ReactNode;
  endContent: React.ReactNode;
};

export const TableHeader: React.VFC<TableHeaderProps> = ({
  endContent,
  startContent,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.startContent}>{startContent}</div>
      <div className={classes.endContent}>{endContent}</div>
    </div>
  );
};
