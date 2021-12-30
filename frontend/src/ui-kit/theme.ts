declare global {
  namespace Jss {
    export interface Theme {
      palette: Pallette;
      space: (coef?: number) => number;
      borderRadius: {
        normal: number;
      };
    }
  }
}

type PalleteOptions<TKeys extends string> = Record<TKeys, string>;
type Pallette = PalleteOptions<TypographyColor | BgColor | EmphasizeColor> & {
  linkColor: string;
  rating: string;
  favorite: string;
  border: string;
  active: string;
};

export type EmphasizeColor = "rating" | "favorite" | "popular";
export type BgColor = "bgPrimary" | "bgPrimaryLight" | "bgSecondary";
export type TypographyColor = "primary" | "secondary" | "primaryEmphasis";

const spacingUnit = 8;

export const darkTheme: Jss.Theme = {
  palette: {
    bgPrimary: "#0e1117",
    bgPrimaryLight: "#30363d",
    bgSecondary: "#161B22",
    linkColor: "#58a6ff",
    primary: "#c9d1d9",
    primaryEmphasis: "#f0f6fc",
    secondary: "#8b949e",
    rating: "#e3b341",
    favorite: "#db61a2",
    border: "#30363d",
    active: "#1f6feb",
    popular: "#db6d28",
  },
  borderRadius: {
    normal: 6,
  },
  space: (coef) => (coef ?? 1) * spacingUnit,
};
