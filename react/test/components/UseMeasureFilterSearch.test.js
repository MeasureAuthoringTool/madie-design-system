import React from "react";
import { renderHook, act } from "@testing-library/react";
import {
  useMeasureFilterSearch,
  filterByOptions,
  filterMap,
} from "../../components/SearchAndFilter/useMeasureFilterSearch";

describe("useMeasureFilterSearch", () => {
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