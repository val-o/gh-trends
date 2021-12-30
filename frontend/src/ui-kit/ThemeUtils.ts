import { TypographyColor } from "./theme";

export const makeTypographyColors = (
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
