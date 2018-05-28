import React from "react";
import SPTable from "/home/hardik/git/ui-component-lib/src/components/SPTable";

/** table with plain data */
export default function ExampleSPTable() {
  return (
    <SPTable
      title={"dummy"}
      colsName={["col1", "col2", "col3"]}
      data={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]}
    />
  );
}
