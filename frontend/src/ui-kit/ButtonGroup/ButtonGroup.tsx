import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export type ButtonGroupProps = {
  value: string;
};
export const ButtonGroup: React.FC<ButtonGroupProps> = React.forwardRef<
  HTMLElement,
  ButtonGroupProps
>(({ children, value }, ref) => {
  const classes = useStyles();

  const items = React.Children.toArray(children)
    .filter(isItem)
    .map((item) =>
      React.cloneElement(item, { active: item.props.value === value })
    );

  return (
    <div data-testid="ButtonGroup" className={classes.root}>
      {items}
    </div>
  );
});

const useItemStyles = createUseStyles((theme) => ({
  root: {
    border: `thin solid ${theme.palette.border}`,
    paddingBlock: 7,
    paddingInline: theme.space(2),
    color: theme.palette.primary,
    fontSize: 14,
    background: theme.palette.bgSecondary,
    fontWeight: 500,
    display: "block",
    cursor: "pointer",
    "&, &:active, &:link, &:visited, &:hover": {
      textDecoration: "none",
    },
    "&:first-child": {
      borderStartStartRadius: 6,
      borderEndStartRadius: 6,
    },
    "&:not(:first-child)": {
      borderLeft: "none",
    },
    "&:last-child": {
      borderStartEndRadius: 6,
      borderEndEndRadius: 6,
    },
  },
  active: {
    background: theme.palette.active,
    borderColor: theme.palette.active,
    color: theme.palette.primaryEmphasis,
  },
}));

type AnchorElement = React.ReactElement<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>;
export type ButtonGroupItemProps = {
  value: string;
  active?: boolean;
  as?: AnchorElement;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({
  active,
  value,
  as: asProp,
  ...rest
}) => {
  const classes = useItemStyles();

  const dataAttrs = {
    "data-testid": "ButtonGroupItem",
    "data-value": value,
    "data-active": active,
  };

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  const elem: AnchorElement = asProp ?? <a />;
  return React.cloneElement(elem, {
    ...rest,
    className: clsx(classes.root, active && classes.active),
    ...(dataAttrs as {}),
  });
};

const isItem = (
  item: React.ReactNode
): item is React.ReactElement<ButtonGroupItemProps> => {
  return React.isValidElement(item) && item.type === ButtonGroupItem;
};
