import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { UserData } from "./Data.js";
import { COLUMNS } from "./Columns";
import "./table.css";

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => UserData, []);

  const TableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, page,nextPage,previousPage, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      usePagination
    );

  return (
    <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <div>
        <button onClick={() => previousPage()} className="btn btn-primary">
            Previous
        </button>
        <button onClick={() => nextPage()}>
            Next
        </button>
    </div>
    </>
  );
};


