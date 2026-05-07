import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import {
  useFilterSearch,
  filterByOptions,
  filterMap,
} from "../../components/SearchAndFilter/useFilterSearch";

/**
 * Test harness to expose hook state & handlers
 */
const TestHarness = ({ onPageReset }) => {
  const {
    filterBy,
    searchField,
    finalSearchAndFilterby,
    handleFilter,
    handleSearch,
    finalizeSearchCriteria,
    blankSearchCriteria,
  } = useFilterSearch(onPageReset);

  return (
    <div>
      <span data-testid="filterBy">{filterBy}</span>
      <span data-testid="searchField">{searchField}</span>
      <span data-testid="finalFilterBy">
        {finalSearchAndFilterby.finalFilterBy}
      </span>
      <span data-testid="finalSearchField">
        {finalSearchAndFilterby.finalSearchField}
      </span>

      <button
        data-testid="set-filter"
        onClick={() =>
          handleFilter({ target: { value: "Measure" } })
        }
      />
      <button
        data-testid="set-search"
        onClick={() =>
          handleSearch({ target: { value: "Diabetes" } })
        }
      />
      <button
        data-testid="finalize"
        onClick={finalizeSearchCriteria}
      />
      <button
        data-testid="clear"
        onClick={blankSearchCriteria}
      />
    </div>
  );
};

describe("useFilterSearch", () => {
  /**
   * ✅ exported constants
   */
  it("exports the correct filter options", () => {
    expect(filterByOptions).toEqual([
      "Measure",
      "Version",
      "CMS ID",
    ]);
  });

  it("exports the correct filter map", () => {
    expect(filterMap).toEqual({
      Measure: "measureName",
      Version: "version",
      "CMS ID": "cmsId",
    });
  });

  /**
   * ✅ initialization
   */
  it("initializes all state as empty strings", () => {
    render(<TestHarness />);

    expect(screen.getByTestId("filterBy")).toHaveTextContent("");
    expect(screen.getByTestId("searchField")).toHaveTextContent("");
    expect(screen.getByTestId("finalFilterBy")).toHaveTextContent("");
    expect(screen.getByTestId("finalSearchField")).toHaveTextContent("");
  });

  /**
   * ✅ state updates
   */
  it("updates filterBy and searchField independently", () => {
    render(<TestHarness />);

    fireEvent.click(screen.getByTestId("set-filter"));
    expect(screen.getByTestId("filterBy")).toHaveTextContent("Measure");

    fireEvent.click(screen.getByTestId("set-search"));
    expect(screen.getByTestId("searchField")).toHaveTextContent("Diabetes");
  });

  /**
   * ✅ finalize logic
   */
  it("finalizes the current filter and search values", () => {
    render(<TestHarness />);

    fireEvent.click(screen.getByTestId("set-filter"));
    fireEvent.click(screen.getByTestId("set-search"));
    fireEvent.click(screen.getByTestId("finalize"));

    expect(screen.getByTestId("finalFilterBy")).toHaveTextContent("Measure");
    expect(screen.getByTestId("finalSearchField")).toHaveTextContent("Diabetes");
  });

  /**
   * ✅ reset logic + callback
   */
  it("clears all state and calls onPageReset when provided", () => {
    const onPageReset = jest.fn();

    render(<TestHarness onPageReset={onPageReset} />);

    fireEvent.click(screen.getByTestId("set-filter"));
    fireEvent.click(screen.getByTestId("set-search"));
    fireEvent.click(screen.getByTestId("finalize"));
    fireEvent.click(screen.getByTestId("clear"));

    expect(screen.getByTestId("filterBy")).toHaveTextContent("");
    expect(screen.getByTestId("searchField")).toHaveTextContent("");
    expect(screen.getByTestId("finalFilterBy")).toHaveTextContent("");
    expect(screen.getByTestId("finalSearchField")).toHaveTextContent("");

    expect(onPageReset).toHaveBeenCalledTimes(1);
  });

  it("clears state safely when onPageReset is not provided", () => {
    render(<TestHarness />);

    fireEvent.click(screen.getByTestId("clear"));

    expect(screen.getByTestId("filterBy")).toHaveTextContent("");
    expect(screen.getByTestId("searchField")).toHaveTextContent("");
  });
});
describe("useFilterSearch", () => {
  it("exposes the correct static filter options", () => {
    expect(filterByOptions).toEqual([
      "Measure",
      "Version",
      "CMS ID",
    ]);
  });

  it("exposes the correct filter map", () => {
    expect(filterMap).toEqual({
      Measure: "measureName",
      Version: "version",
      "CMS ID": "cmsId",
    });
  });

});