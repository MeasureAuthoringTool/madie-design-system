import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import DateTimeField from "../../components/DateTimeField/DateTimeField";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import dayjs from "dayjs";

import * as React from "react";

describe("DateTimeField", () => {
    it("DateTimeField Exists", async () => {
        await act(async () => {
            const { findByText, findByTestId, getByDisplayValue } = render(
                <DateTimeField
                    label="Active Date/Time"
                    id="active-date-time"
                    dateTimeValue={dayjs("2022-04-17T15:30Z")}
                    handleDateTimeChange={() => {
                        return;
                    }}
                    disabled={false}
                />
            );

            const labelText = await findByText("Active Date/Time");
            expect(labelText).toBeInTheDocument();
            expect(
                await findByTestId("active-date-time-input")
            ).toBeInTheDocument();
            expect(
                getByDisplayValue("04/17/2022 03:30 PM")
            ).toBeInTheDocument();
        });
    });

    it("renders ReadOnlyTextField when disabled is true", () => {
        const label = "Test Label";
        const dateTimeValue = new Date("2023-01-01T12:00:00Z");
        const id = "test-id";

        const { getByLabelText } = render(
            <DateTimeField
                label={label}
                dateTimeValue={dateTimeValue}
                handleDateTimeChange={() => {}}
                disabled={true}
                id={id}
            />
        );

        const readOnlyField = getByLabelText(label);
        expect(readOnlyField).toBeInTheDocument();
        expect(readOnlyField).toHaveValue("2023/01/01 12:00 PM");
    });

    it("renders empty value in ReadOnlyTextField when dateTimeValue is null", () => {
        const label = "Test Label";
        const id = "test-id";

        const { getByLabelText } = render(
            <DateTimeField
                label={label}
                dateTimeValue={null}
                handleDateTimeChange={() => {}}
                disabled={true}
                id={id}
            />
        );

        const readOnlyField = getByLabelText(label);
        expect(readOnlyField).toBeInTheDocument();
        expect(readOnlyField).toHaveValue("-");
    });
});
