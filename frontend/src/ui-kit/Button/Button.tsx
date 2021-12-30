import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { IconProps } from "../icons";

const useStyles = createUseStyles((theme) => ({
  root: {
    color: theme.palette.primary,
    paddingInline: 12,
    paddingBlock: 3,
    fontSize: 12,
    fontWeight: 500,
    lineHeight: "20px",
    borderRadius: theme.borderRadius.normal,
    backgroundColor: theme.palette.bgSecondary,
    border: `thin solid ${theme.palette.border}`,
    cursor: "pointer",
    transition: "all .1s linear",
    "&:hover": {
      borderColor: theme.palette.primary,
      backgroundColor: theme.palette.bgPrimaryLight,
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrap: {
    marginRight: theme.space(),
    "& svg": {
      display: "block",
    },
  },
}));

export type ButtonProps = {
  icon?: React.ReactElement<IconProps>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: React.FC<ButtonProps> = ({ children, icon }) => {
  const classes = useStyles();

  return (
    <button className={clsx(classes.root)}>
      {icon && <div className={classes.iconWrap}>{icon}</div>}
      {children}
    </button>
  );
};
