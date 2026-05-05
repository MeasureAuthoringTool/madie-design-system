import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { createColumnHelper, useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { MadieTable } from "../../components";
/**
 * Test helper component to provide a real TanStack table instance
 */
const TestTableWrapper = ({
  data,
  columns,
  currentSort,
  currentDirection,
  handleSort = jest.fn(),
  renderExpandedRow,
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <MadieTable
      table={table}
      currentSort={currentSort}
      currentDirection={currentDirection}
      handleSort={handleSort}
      renderExpandedRow={renderExpandedRow}
    />
  );
};

describe("MadieTable", () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("name", {
      header: "Measure Name",
      cell: info => info.getValue(),
    }),
  ];

  const data = [
    { id: "1", name: "Test Measure 1" },
    { id: "2", name: "Test Measure 2" },
  ];

  it("renders table headers", () => {
    render(
      <TestTableWrapper
        data={data}
        columns={columns}
      />
    );

    expect(screen.getByText("Measure Name")).toBeInTheDocument();
  });

  it("renders table rows", () => {
    render(
      <TestTableWrapper
        data={data}
        columns={columns}
      />
    );

    expect(screen.getByText("Test Measure 1")).toBeInTheDocument();
    expect(screen.getByText("Test Measure 2")).toBeInTheDocument();
  });

  it("shows empty state when there are no rows", () => {
    render(
      <TestTableWrapper
        data={[]}
        columns={columns}
      />
    );

    expect(
      screen.getByText("No results were found")
    ).toBeInTheDocument();
  });

  it("calls handleSort when sortable header is clicked", () => {
    const handleSort = jest.fn();

    render(
      <TestTableWrapper
        data={data}
        columns={columns}
        currentSort="name"
        currentDirection="ASC"
        handleSort={handleSort}
      />
    );

    fireEvent.click(screen.getByTestId("header-name"));

    expect(handleSort).toHaveBeenCalledWith("name");
  });

  it("renders expanded row content using renderExpandedRow", () => {
    render(
      <TestTableWrapper
        data={data}
        columns={columns}
        renderExpandedRow={(row) => (
          <tr data-testid={`expanded-${row.id}`}>
            <td colSpan={1}>Expanded content for {row.original.name}</td>
          </tr>
        )}
      />
    );

    expect(
      screen.getByText("Expanded content for Test Measure 1")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Expanded content for Test Measure 2")
    ).toBeInTheDocument();
  });
});