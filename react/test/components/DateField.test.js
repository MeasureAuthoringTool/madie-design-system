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
            const { findByText, findByTestId, getByDisplayValue } = render(
                <DateField
                    label="Status Date"
                    value={dayjs("2022-04-17")}
                    handleDateChange={() => console.log("Status Date")}
                    disabled={false}
                />
            );
            
            const labelText = await findByText("Status Date");
            expect(labelText).toBeInTheDocument();
            expect(await findByTestId("status-date")).toBeInTheDocument();
            expect(
                getByDisplayValue("04/17/2022")
            ).toBeInTheDocument();
        });
    });

    test("DateField Exists, with empty value", async () => {
        await act(async () => {
            const { findByText, findByTestId, container } = render(
                <DateField
                    label="Status Date"
                    
                    handleDateChange={() => console.log("Status Date")}
                    disabled={false}
                />
            );
            
            const labelText = await findByText("Status Date");
            expect(labelText).toBeInTheDocument();
            expect(await findByTestId("status-date")).toBeInTheDocument();
            
                const dateDisplay =  container.querySelector('[value="04/17/2022"]');
                expect(dateDisplay).toBeNull();

            
        });
    });
});
