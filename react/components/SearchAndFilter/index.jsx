import React from "react";
import PropTypes from "prop-types";
import { IconButton, InputAdornment, MenuItem } from "@mui/material";
import Select from "../Select"
import TextField from "../TextField"
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { filterByOptions } from "./useMeasureFilterSearch";
/**
 * Reusable component for measure filter and search UI
 * Provides filter dropdown and search input with trigger and clear actions
 */

const SearchAndFilter = ({
  filterBy,
  searchField,
  onFilterChange,
  onSearchChange,
  onSearchTrigger,
  onSearchClear,
  filterByOpts = filterByOptions
}) => {
  
  return (
    <div className="measure-search-filters">
      <div>
        <Select
          label="Filter By"
          id="filter-by-select"
          data-testid="filter-by-select"
          inputProps={{ "data-testid": "filter-by-select-input" }}
          placeHolder={{ name: "Filter By", value: "" }}
          SelectDisplayProps={{
            "aria-required": "true",
          }}
          size="small"
          name="filterBy"
          value={filterBy}
          onChange={onFilterChange}
          options={[
            <MenuItem key="-" value="" data-testid={`filter-by--`}>
              -
            </MenuItem>,
            ...filterByOpts?.map((option) => {
              return (
                <MenuItem
                  key={option}
                  value={option}
                  data-testid={`filter-by-${option}`}
                >
                  {option}
                </MenuItem>
              );
            }),
          ]}
        />
      </div>
      <div>
        <TextField
          id="search"
          label="Search"
          placeholder="Search"
          inputProps={{
            "data-testid": "test-case-list-search-input",
          }}
          data-testid="test-case-list-search"
          name="searchField"
          value={searchField}
          onChange={onSearchChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSearchTrigger();
            }
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment
                  position="start"
                  data-testid="test-cases-trigger-search"
                  onClick={onSearchTrigger}
                  style={{ cursor: "pointer" }}
                >
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  data-testid="test-cases-clear-search"
                  position="end"
                  style={{ cursor: "pointer" }}
                  onClick={onSearchClear}
                >
                  <IconButton>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </div>
    </div>
  );
};

SearchAndFilter.propTypes = {
  filterBy: PropTypes.string.isRequired,
  searchField: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchTrigger: PropTypes.func.isRequired,
  onSearchClear: PropTypes.func.isRequired,
  filterByOpts: PropTypes.arrayOf(PropTypes.string),
};

SearchAndFilter.defaultProps = {
  filterByOpts: filterByOptions,
};
export default SearchAndFilter;