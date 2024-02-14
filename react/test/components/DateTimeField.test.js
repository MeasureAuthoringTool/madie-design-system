import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import DateTimeField from "../../components/DateTimeField/DateTimeField";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import dayjs from "dayjs";

import * as React from "react";

describe("DateTimeField", () => {
    test("DateTimeField Exists", async () => {
        await act(async () => {
            const { findByText, findByTestId, getByDisplayValue } = render(
                <DateTimeField
                    label="Active Date/Time"
                    dateTimeValue={dayjs("2022-04-17T15:30")}
                    handleDateTimeChange={() => {
                        return;
                    }}
                    disabled={false}
                />
            );

            const labelText = await findByText("Active Date/Time");
            expect(labelText).toBeInTheDocument();
            expect(await findByTestId("active-date-time")).toBeInTheDocument();
            expect(
                getByDisplayValue("04/17/2022 03:30 PM")
            ).toBeInTheDocument();
        });
    });
});
