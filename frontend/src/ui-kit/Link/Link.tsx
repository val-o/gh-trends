import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    "&, &:link, &:visited": {
      color: theme.palette.linkColor,
      textDecoration: "none",
    },
    "&:hover, &:active": {
      textDecoration: "underline",
    },
  },
}));

export type LinkProps = {} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: React.FC<LinkProps> = ({ children, ...anchorProps }) => {
  const classes = useStyles();

  return (
    <a {...anchorProps} className={clsx(classes.root, anchorProps.className)}>
      {children}
    </a>
  );
};
