import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    background: theme.palette.bgSecondary,
    textAlign: "center",
    paddingInline: theme.space(2),
    paddingBlock: theme.space(5),
    borderBottom: `thin ${theme.palette.border} solid`,
    marginBlockEnd: theme.space(5),
  },
  title: {
    color: theme.palette.primary,
    fontWeight: 600,
    margin: 0,
    fontSize: 32,
  },
  subtitle: {
    color: theme.palette.secondary,
    fontSize: 16,
    fontWeight: 500,
    margin: 0,
  },
}));

export type PageHeaderProps = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
};
export const PageHeader: React.VFC<PageHeaderProps> = ({ subtitle, title }) => {
  const classes = useStyles();

  return (
    <header data-testid="PageHeader" className={classes.root}>
      <h1 data-testid="PageHeader_Title" className={classes.title}>
        {title}
      </h1>
      <h2 data-testid="PageHeader_Subtitle" className={classes.subtitle}>
        {subtitle}
      </h2>
    </header>
  );
};
