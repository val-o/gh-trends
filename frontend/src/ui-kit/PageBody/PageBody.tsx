import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    margin: "auto",
    width: 1012,
  },
}));

export type PageBodyProps = {};
export const PageBody: React.FC<PageBodyProps> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
