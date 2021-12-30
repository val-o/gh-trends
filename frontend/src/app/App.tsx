import { ApiProvider } from "api/ApiProvider";
import { createApi } from "api/createApi";
import { NotFoundPage } from "pages/NotFound";
import { TrendingPage, TrendingTab } from "pages/Trending";
import React from "react";
import { createUseStyles, ThemeProvider } from "react-jss";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkTheme } from "ui-kit/theme";
import { API_HOST } from "./constants";
import { queryClient } from "./queryClient";

const useGlobalStyles = createUseStyles((theme) => ({
  "@global body": {
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
    backgroundColor: theme.palette.bgPrimary,
    lineHeight: 1.5,
    margin: 0,
  },
}));

const api = createApi({ apiHost: API_HOST });

export const App: React.VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <ApiProvider value={api}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </ApiProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const Main: React.FC = () => {
  useGlobalStyles();

  return (
    <Routes>
      <Route index element={<TrendingPage tab={TrendingTab.Repositories} />} />
      <Route
        path="/developers"
        element={<TrendingPage tab={TrendingTab.Developers} />}
      />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};
