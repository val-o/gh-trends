import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import { TypographyColor } from "../theme";

export type TypographyVariant = "body" | "caption";

const makeTypographyColors = (
  theme: Jss.Theme
): Record<`color${Capitalize<TypographyColor>}`, React.CSSProperties> => {
  return {
    colorPrimaryEmphasis: {
      color: theme.palette.primary,
    },
    colorPrimary: {
      color: theme.palette.primary,
    },
    colorSecondary: {
      color: theme.palette.secondary,
    },
  };
};

const makeTypographyVariants = (
  theme: Jss.Theme
): Record<`variant${Capitalize<TypographyVariant>}`, React.CSSProperties> => {
  return {
    variantBody: {
      fontSize: 14,
    },
    variantCaption: {
      fontSize: 12,
    },
  };
};

const useStyles = createUseStyles((theme) => ({
  title: {
    fontSize: 32,
  },
  body: {
    fontSize: 16,
  },
  root: {
    margin: 0,
  },
  ...makeTypographyColors(theme),
  ...makeTypographyVariants(theme),
}));

const uppercase = (str: string): string => str[0]?.toUpperCase() + str.slice(1);

export type TypographyProps = {
  variant?: TypographyVariant;
  color?: TypographyColor;
  className?: string;
};
export const Typography: React.FC<TypographyProps> = React.forwardRef<
  HTMLElement,
  TypographyProps
>(({ children, color = "primary", className, variant = "body" }, ref) => {
  const classes = useStyles();

  return (
    <p
      className={clsx(
        classes[`color${uppercase(color)}` as keyof typeof classes],
        classes[`variant${uppercase(variant)}` as keyof typeof classes],
        classes.root,
        className
      )}
    >
      {children}
    </p>
  );
});
