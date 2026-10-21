import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { createColumnHelper, useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { MadieTable } from "../../components";
import userEvent from "@testing-library/user-event";

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
  emptyMessage,
  ariaLabel,
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
      emptyMessage={emptyMessage}
      ariaLabel={ariaLabel}
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

  it("shows custom empty message when provided and there are no rows", () => {
    render(
      <TestTableWrapper
        data={[]}
        columns={columns}
        emptyMessage="Custom empty message"
      />
    );

    expect(screen.getByText("Custom empty message")).toBeInTheDocument();
    expect(screen.queryByText("No results were found")).not.toBeInTheDocument();
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

   
it("shows the hover icon on mouse enter", () => {
  render(
    <TestTableWrapper
      data={data}
      columns={columns}
    />
  );
  const headerCell = screen
    .getByTestId("header-name")
    .closest("th");
  fireEvent.mouseEnter(headerCell);

  expect(
    screen.getByTestId("unfold-more-icon")
  ).toBeInTheDocument();
});


it("renders ascending sort icon when currentSort is ASC", () => {
  render(
    <TestTableWrapper
      data={data}
      columns={columns}
      currentSort="name"
      currentDirection="ASC"
    />
  );

  expect(
    screen.getByTestId("KeyboardArrowUpIcon")
  ).toBeInTheDocument();
});


it("renders descending sort icon when currentSort is DESC", () => {
  render(
    <TestTableWrapper
      data={data}
      columns={columns}
      currentSort="name"
      currentDirection="DESC"
    />
  );

  expect(
    screen.getByTestId("KeyboardArrowDownIcon")
  ).toBeInTheDocument();
});

  it("exposes sort state through aria-sort on the column header", () => {
    render(
      <TestTableWrapper
        data={data}
        columns={columns}
        currentSort="name"
        currentDirection="ASC"
      />
    );
    expect(
      screen.getByRole("columnheader", { name: /measure name/i })
    ).toHaveAttribute("aria-sort", "ascending");
  });

  it("marks unsorted sortable headers with aria-sort none", () => {
    render(<TestTableWrapper data={data} columns={columns} />);
    expect(
      screen.getByRole("columnheader", { name: /measure name/i })
    ).toHaveAttribute("aria-sort", "none");
  });

  it("makes sortable headers keyboard focusable and shows the sort affordance on focus", () => {
    render(<TestTableWrapper data={data} columns={columns} />);
    const button = screen.getByRole("button", { name: /measure name/i });
    button.focus();
    expect(button).toHaveFocus();
    expect(screen.getByTestId("unfold-more-icon")).toBeInTheDocument();
  });

  it("applies an accessible name to the table", () => {
    render(
      <TestTableWrapper data={data} columns={columns} ariaLabel="Measures" />
    );
    expect(screen.getByRole("table", { name: "Measures" })).toBeInTheDocument();
  });

});