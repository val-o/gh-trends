import React from "react";
import { createUseStyles } from "react-jss";

/**
 * Animation taken from https://loading.io/css/
 */

const useStyles = createUseStyles((theme) => ({
  root: {
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "@keyframes lds-ripple": {
    from: {
      top: "36px",
      left: "36px",
      width: 0,
      height: 0,
      opacity: 1,
    },
    to: {
      top: 0,
      left: 0,
      width: "72px",
      height: "72px",
      opacity: 0,
    },
  },
  ripple: {
    display: "inline-block",
    position: "relative",
    width: 80,
    height: 80,
    "& div": {
      position: "absolute",
      border: "4px solid #fff",
      opacity: 1,
      borderRadius: "50%",
      animation: "$lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite",
      "&:nth-child(2)": {
        animationDelay: "-0.5s",
      },
    },
  },
}));
export const TableLoading: React.VFC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
