import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchAndFilter from "../../components/SearchAndFilter";

describe("MeasureSearchFilter", () => {
  const defaultProps = {
    filterBy: "",
    searchField: "",
    onFilterChange: jest.fn(),
    onSearchChange: jest.fn(),
    onSearchTrigger: jest.fn(),
    onSearchClear: jest.fn(),
    filterByOpts: ["Measure Name", "CMS ID"],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders filter select and search input", () => {
    render(<SearchAndFilter {...defaultProps} />);

    expect(screen.getByTestId("filter-by-select")).toBeInTheDocument();
    expect(
      screen.getByTestId("test-case-list-search")
    ).toBeInTheDocument();
  });

  it("calls onSearchChange when typing in the search field", () => {
    render(<SearchAndFilter {...defaultProps} />);

    const searchInput = screen.getByTestId(
      "test-case-list-search-input"
    );

    fireEvent.change(searchInput, {
      target: { value: "test search" },
    });

    expect(defaultProps.onSearchChange).toHaveBeenCalled();
  });

  it("triggers search when pressing Enter in the search field", () => {
    render(<SearchAndFilter {...defaultProps} />);

    const searchInput = screen.getByTestId(
      "test-case-list-search-input"
    );

    fireEvent.keyPress(searchInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    expect(defaultProps.onSearchTrigger).toHaveBeenCalled();
  });

  it("triggers search when clicking the search icon", () => {
    render(<SearchAndFilter {...defaultProps} />);

    fireEvent.click(
      screen.getByTestId("test-cases-trigger-search")
    );

    expect(defaultProps.onSearchTrigger).toHaveBeenCalled();
  });

  it("clears search when clicking the clear icon", () => {
    render(<SearchAndFilter {...defaultProps} />);

    fireEvent.click(
      screen.getByTestId("test-cases-clear-search")
    );

    expect(defaultProps.onSearchClear).toHaveBeenCalled();
  });
});