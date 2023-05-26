import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import DateField from "../../components/DateField/DateField";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";

import * as React from "react";

describe("DateField", () => {
    test("DateField Exists", async () => {
        await act(async () => {
            const { findByText, findByTestId } = render(
                <DateField
                    label="Status"
                    value={""}
                    onChange={() => console.log("Status Date")}
                    dataTestId="status-date"
                />
            );
            const labelText = await findByText("Status Date");
            expect(labelText).toBeInTheDocument();
            expect(await findByTestId("status-date")).toBeInTheDocument();
        });
    });
});
