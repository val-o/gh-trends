import React from "react";
import { Link } from "react-router-dom";
import { matchPrimitive } from "shared/match";
import { ButtonGroup, ButtonGroupItem, PageBody, PageHeader } from "ui-kit";
import { DevelopersPane } from "./Developer";
import { RepositoriesPane } from "./Repository";

export enum TrendingTab {
  Repositories = "repositories",
  Developers = "developers",
}

type TrendingPageProps = {
  tab: TrendingTab;
};
export const TrendingPage: React.FC<TrendingPageProps> = ({ tab }) => {
  const renderSwitch = () => {
    return (
      <ButtonGroup value={tab}>
        <ButtonGroupItem
          as={<Link to={"/"} />}
          value={TrendingTab.Repositories}
        >
          Repositories
        </ButtonGroupItem>
        <ButtonGroupItem
          as={<Link to={"/developers"} />}
          value={TrendingTab.Developers}
        >
          Developers
        </ButtonGroupItem>
      </ButtonGroup>
    );
  };

  return (
    <>
      <PageHeader
        title="Trending"
        subtitle={matchPrimitive(tab, {
          [TrendingTab.Repositories]: () =>
            "See what the GitHub community is most excited about today.",
          [TrendingTab.Developers]: () =>
            "These are the developers building the hot tools today.",
        })}
      />
      <PageBody>
        {matchPrimitive(tab, {
          [TrendingTab.Repositories]: () => (
            <RepositoriesPane startHeaderContent={renderSwitch()} />
          ),
          [TrendingTab.Developers]: () => (
            <DevelopersPane startHeaderContent={renderSwitch()} />
          ),
        })}
      </PageBody>
    </>
  );
};
