import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import DateField from "../../components/DateField/DateField";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import dayjs from "dayjs";

import * as React from "react";

describe("DateField", () => {
    test("DateField Exists", async () => {
        await act(async () => {
            const { findByText, findByTestId,getByDisplayValue } = render(
                <DateField
                    label="Status"
                    value={dayjs("2022-04-17")}
                    onChange={() => console.log("Status Date")}
                />
            );
            const labelText = await findByText("Status Date");
            expect(labelText).toBeInTheDocument();
            expect(await findByTestId("status-date")).toBeInTheDocument();
            expect(getByDisplayValue("04/17/2022")).toBeInTheDocument();
        });
    });
});
