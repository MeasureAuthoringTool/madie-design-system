import "@testing-library/jest-dom";
import React from "react";

import { render } from "@testing-library/react";
import { Pagination } from "../../components/Pagination";

describe("Pagination", () => {
    it("renders with default props", () => {
        const { getByTestId } = render(
            <Pagination/>
        );
        expect(getByTestId("NavigateNextIcon")).toBeInTheDocument();
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
