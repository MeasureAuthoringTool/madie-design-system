import "@testing-library/jest-dom";
import React from "react";

import { render } from "@testing-library/react";
import { Pagination } from "../../components/Pagination";

describe("Pagination", () => {
    it("renders with default props", () => {
        const { getByTestId } = render(<Pagination />);
        expect(getByTestId("NavigateNextIcon")).toBeInTheDocument();
    });
    it("provides an accessible name for the items per page select", () => {
        const { getByRole } = render(
            <Pagination
                totalItems={30}
                visibleItems={10}
                count={3}
                offset={0}
                page={1}
                limit={10}
            />
        );

        const limitSelect = getByRole("combobox", {
            name: /items per page/i,
        });

        expect(limitSelect).toHaveTextContent("10");
        expect(limitSelect).toHaveAttribute(
            "aria-labelledby",
            "items-per-page pagination-limit-select"
        );
        expect(limitSelect).toHaveAttribute(
            "aria-describedby",
            "offset-of-total-items"
        );
        expect(limitSelect).toHaveAttribute("aria-haspopup", "listbox");
        expect(limitSelect).toHaveAttribute("aria-expanded", "false");
        expect(limitSelect).toHaveAttribute("tabindex", "0");
    });
    it("labels pagination controls accessibly", () => {
        const { getByRole } = render(
            <Pagination
                count={3}
                page={2}
                hidePrevButton={false}
                hideNextButton={false}
            />
        );

        expect(
            getByRole("navigation", { name: "pagination navigation" })
        ).toBeInTheDocument();
        expect(
            getByRole("button", { name: "Go to previous page" })
        ).toBeInTheDocument();
        expect(
            getByRole("button", { name: "Go to next page" })
        ).toBeInTheDocument();
        expect(
            getByRole("button", { name: "Go to page 1" })
        ).toBeInTheDocument();
        expect(getByRole("button", { name: "page 2" })).toHaveAttribute(
            "aria-current",
            "page"
        );
    });
    it("renders the next button when more pages are available", () => {
        const { getByTestId } = render(
            <Pagination
                totalItems={30}
                visibleItems={10}
                count={30}
                offset={0}
                shape="rounded"
                page={0}
                limit={10}
                limitOptions={[10, 25, 50]}
                handlePageChange={(e, v) => {
                    console.log(e, v);
                }}
                handleLimitChange={(e, v) => {
                    console.log(e, v);
                }}
                hidePrevButton={true}
                hideNextButton={false}
            />
        );
        expect(getByTestId("NavigateNextIcon")).toBeInTheDocument();
    });

    it("renders the prev button when previous pages are available", () => {
        const { getByTestId } = render(
            <Pagination
                totalItems={30}
                visibleItems={10}
                count={30}
                offset={0}
                shape="rounded"
                page={1}
                limit={10}
                limitOptions={[10, 25, 50]}
                handlePageChange={(e, v) => {
                    console.log(e, v);
                }}
                handleLimitChange={(e, v) => {
                    console.log(e, v);
                }}
                hidePrevButton={false}
                hideNextButton={true}
            />
        );
        expect(getByTestId("NavigateBeforeIcon")).toBeInTheDocument();
    });
});
