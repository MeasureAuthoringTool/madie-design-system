import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Instant from "../../components/Instant";
import dayjs from "dayjs";

describe("Instant", () => {
    it("It renders as expected with basic props and triggers on Close on click", async () => {
        const handleDateTimeChange = jest.fn();

        const { findByText, getByDisplayValue } = render(
            <Instant
                disabled={false}
                id="status_date_time"
                label="Status Date"
                handleDateTimeChange={handleDateTimeChange}
                dateTimeValue={dayjs("2022-04-17")}
            />
        );
        const labelText = await findByText("Status Date");
            expect(labelText).toBeInTheDocument();
            expect(await findByText("Status Date")).toBeInTheDocument();
            expect(
                getByDisplayValue("04/17/2022")
            ).toBeInTheDocument();
    });
});
