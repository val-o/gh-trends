import React from "react";
import { createUseStyles } from "react-jss";

const CHEVRON_SIZE = 4;

const useStyles = createUseStyles((theme) => ({
  root: {
    color: theme.palette.secondary,
    cursor: "pointer",
    paddingInline: theme.space(),
    "&:hover": {
      color: theme.palette.primary,
    },
    fontSize: 14,
    "&::after": {
      content: "' '",
      display: "inline-block",
      insetInlineEnd: 0,
      verticalAlign: -2,
      marginInline: theme.space(0.5),
      border: `${CHEVRON_SIZE}px solid`,
      borderRightColor: "transparent",
      borderBottomColor: "transparent",
      borderLeftColor: "transparent",
    },
  },
  label: {
    display: "inline-block",
    margin: 0,
  },
  value: {
    fontWeight: 600,
  },
}));

export type DropdownProps = {
  label: string;
  noSelectionLabel?: string;
};
export const Dropdown: React.FC<DropdownProps> = ({
  children,
  label,
  noSelectionLabel,
}) => {
  const classes = useStyles();

  const selectedValue = noSelectionLabel;
  return (
    <div className={classes.root}>
      <p className={classes.label}>
        {label}: <span className={classes.value}>{selectedValue}</span>
      </p>
    </div>
  );
};
