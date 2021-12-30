import React from "react";
import { PageBody, PageHeader } from "ui-kit";

export const NotFoundPage: React.VFC = () => {
  return (
    <>
      <PageHeader title="Not found" subtitle="Requested page not found." />
      <PageBody>
        <img
          style={{ display: "block", margin: "auto" }}
          src="https://media.giphy.com/media/wgmWyQGzaZ6Fy/giphy.gif"
          alt=""
        />
      </PageBody>
    </>
  );
};
