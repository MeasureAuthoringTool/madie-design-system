import { useState } from "react";

export const filterByOptions = ["Measure", "Version", "CMS ID"];

export const filterMap = {
  Measure: "measureName",
  Version: "version",
  "CMS ID": "cmsId",
};

/**
 * Custom hook for managing measure or libraries filter and search functionality
 * Provides state and handlers for filtering and searching measures by various criteria
 */
export const useFilterSearch = (
  onPageReset
) => {
  const [filterBy, setFilterBy] = useState("");
  const [searchField, setSearchField] = useState("");
  const [finalSearchAndFilterby, setFinalSearchAndFilterby] =
    useState({
      finalSearchField: "",
      finalFilterBy: "",
    });

  const handleFilter = (e) => {
    setFilterBy(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const finalizeSearchCriteria = () => {
    const finalSearchAndFilter = {
      finalSearchField: searchField,
      finalFilterBy: filterBy,
    };
    setFinalSearchAndFilterby(finalSearchAndFilter);
  };

  const blankSearchCriteria = () => {
    setSearchField("");
    setFilterBy("");
    setFinalSearchAndFilterby({ finalFilterBy: "", finalSearchField: "" });
    if (onPageReset) {
      onPageReset();
    }
  };

  return {
    filterBy,
    searchField,
    finalSearchAndFilterby,
    handleFilter,
    handleSearch,
    finalizeSearchCriteria,
    blankSearchCriteria,
  };
};
