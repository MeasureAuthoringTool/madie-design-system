import React, { useState } from "react";
import { flexRender } from "@tanstack/react-table";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import tw from "twin.macro";
import "styled-components/macro";

const MadieTable = ({
  table,
  currentSort,
  currentDirection,
  handleSort,
  renderExpandedRow,
  id="measureListTable",
  dataTestId = "measure-list-tbl"
}) => {
    const TH = tw.th`p-3 text-left text-sm font-bold capitalize`;
    const [hoveredHeader, setHoveredHeader] = useState(null);

  return (
    <table
      tw="min-w-full"
      id={id}
      data-testid={dataTestId}
      className="tcl-table"
      style={{
        borderSpacing: "0 2em !important",
        overflow: "visible",
        backgroundColor: "#fff",
        opacity: 1,
      }}
    >
      <thead className="sticky-table" style={{ overflow: "visible" }}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const isHovered = hoveredHeader?.includes(header.id);

              return (
                <TH
                  key={header.id}
                  scope="col"
                  onMouseEnter={() => setHoveredHeader(header.id)}
                  onMouseLeave={() => setHoveredHeader(null)}
                  className="header-cell"
                >
                  {header.isPlaceholder ? null : header.column.getCanSort() ? (
                    <button
                      className={
                        header.column.getCanSort()
                          ? "cursor-pointer select-none header-button"
                          : "header-button"
                      }
                      disabled={!header.column.getCanSort()}
                      onClick={() =>
                        handleSort(header.id.replace("_", "."))
                      }
                      data-testid={`header-${header.id.replace("_", ".")}`}
                      title={
                        header.column.getCanSort()
                          ? currentSort ===
                            header.column.id.replace("_", ".")
                            ? currentDirection === "ASC"
                              ? "Sort descending"
                              : currentDirection === "DESC"
                              ? "Clear sort"
                              : "Sort ascending"
                            : "Sort ascending"
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      <span className="arrowDisplay">
                        {header.column.getCanSort() ? (
                          currentSort ===
                          header.column.id.replace("_", ".") ? (
                            currentDirection === "ASC" ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )
                          ) : isHovered ? (
                            <UnfoldMoreIcon data-testid="unfold-more-icon" />
                          ) : null
                        ) : null}
                      </span>
                    </button>
                  ) : (
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  )}
                </TH>
              );
            })}
          </tr>
        ))}
      </thead>

      <tbody className="table-body measures-list" style={{ padding: 20 }}>
                {table.getRowModel().rows.length === 0 && (
                  <tr>
                    <td
                      colSpan={table.getAllColumns().length}
                      style={{ padding: "40px 0", textAlign: "center" }}
                    >
                      <span>No results were found</span>
                    </td>
                  </tr>
                )}
                {table.getRowModel().rows.map((row) => (
                  <React.Fragment key={row.id}>
                    <tr
                      key={row.id}
                      className="ml-tr"
                      data-testid={`row-item`}
                      style={{
                        borderBottom: "solid 1px #8c8c8c",
                        borderSpacing: "0 2em !important",
                      }}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} data-testid={`measure-name-${cell.id}`}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                    {/* Expanded row logic should be passed in as a fragment as we look for measureset, libraryset, and will also render a table in the composite view. */}
                    {renderExpandedRow?.(row)}
                  </React.Fragment>
                ))}
              </tbody>
    </table>
  );
};

export default MadieTable;