import React from "react";
import * as ReactQuery from "shared/ReactQuery";
import {
  Table,
  TableBody,
  TableError,
  TableHeader,
  TableLoading,
  TableRow,
} from "ui-kit";
import { Filters } from "../Filters";
import { useRepositoriesQuery } from "./hooks";
import { RepositoryCard } from "./RepositoryCard";

type RepositoriesPaneProps = {
  startHeaderContent: React.ReactElement;
};
export const RepositoriesPane: React.FC<RepositoriesPaneProps> = ({
  startHeaderContent,
}) => {
  const reposState = useRepositoriesQuery();

  const renderTableBody = (): React.ReactElement =>
    ReactQuery.matchState(reposState, {
      Error: () => <TableError text="Unexpected error occured" />,
      Idle: () => <></>,
      Loading: () => <TableLoading />,
      Success: (repos) => (
        <>
          {repos.map((repo) => (
            <TableRow>
              <RepositoryCard key={repo.name} repository={repo} />
            </TableRow>
          ))}
        </>
      ),
    });

  return (
    <>
      <Table>
        <TableHeader
          startContent={startHeaderContent}
          endContent={<Filters withSpoken />}
        />
        <TableBody>{renderTableBody()}</TableBody>
      </Table>
    </>
  );
};
