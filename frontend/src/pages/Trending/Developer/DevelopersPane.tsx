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
import { DeveloperCard } from "./DeveloperCard";
import { useDevelopersQuery } from "./hooks";

type DevelopersPaneProps = {
  startHeaderContent: React.ReactElement;
};
export const DevelopersPane: React.FC<DevelopersPaneProps> = ({
  startHeaderContent,
}) => {
  const devsState = useDevelopersQuery();

  const renderTableBody = (): React.ReactElement =>
    ReactQuery.matchState(devsState, {
      Error: () => <TableError text="Unexpected error occured" />,
      Idle: () => <></>,
      Loading: () => <TableLoading />,
      Success: (devs) => (
        <>
          {devs.map((dev, index) => (
            <TableRow>
              <DeveloperCard
                key={dev.username}
                index={index + 1}
                developer={dev}
              />
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
          endContent={<Filters />}
        />
        <TableBody>{renderTableBody()}</TableBody>
      </Table>
    </>
  );
};
