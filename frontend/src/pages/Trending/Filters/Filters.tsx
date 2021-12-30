import React from "react";
import { createUseStyles } from "react-jss";
import { Dropdown } from "ui-kit";
// Create a client

const useStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

type FiltersState<WithSpoken extends boolean> = {
  duration: "monthly" | "daily";
} & (WithSpoken extends true ? { spokenLang: string } : {});

type FiltersProps = {
  withSpoken?: boolean;
};

export const Filters: React.VFC<FiltersProps> = ({ withSpoken }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        {withSpoken && (
          <Dropdown label="Spoken Language" noSelectionLabel={"Any"}></Dropdown>
        )}
        <Dropdown label="Language" noSelectionLabel={"Any"}></Dropdown>
        <Dropdown label="Date range" noSelectionLabel={"Any"}></Dropdown>
      </div>
    </>
  );
};
