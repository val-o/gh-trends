import { DecoratorFn } from "@storybook/react";
import jss from "jss";
import preset from "jss-preset-default";
import { createUseStyles, ThemeProvider } from "react-jss";
import { QueryClient, QueryClientProvider } from "react-query";
import { darkTheme } from "ui-kit/theme";

jss.setup(preset());

const useStyles = createUseStyles((theme) => ({
  "@global body": {
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
    backgroundColor: theme.palette.bgPrimary,
    lineHeight: 1.5,
  },
}));

const queryClient = new QueryClient();

export const JssDecorator: DecoratorFn = (storyFn) => {
  const Cmp = () => {
    useStyles();
    return storyFn();
  };
  queryClient.clear();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <Cmp />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
