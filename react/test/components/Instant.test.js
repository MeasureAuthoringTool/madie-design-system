import "@testing-library/jest-dom";
import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Instant from "../../components/Instant";
import dayjs from "dayjs";

export const InstantTester = () => {
    const [value, setValue] = useState("");
    const handleDateTimeChange = (v) => {
        setValue(v);
    };
    return (
        <div>
            <div data-testId="test-date">{value}</div>
            <Instant
                disabled={false}
                id="status_date_time"
                label="Status Date"
                handleDateTimeChange={handleDateTimeChange}
                dateTimeValue={value}
                dateFieldSx={{}}
            />
        </div>
    );
};

describe("Instant", () => {
    const {
        getByDisplayValue,
        findByTestId,
        findByText,
        getByText,
        getByTestId,
    } = screen;
    it("It renders as expected with static values", async () => {
        const handleDateTimeChange = jest.fn();
        render(
            <div>
                <Instant
                    disabled={false}
                    id="status_date_time"
                    label="Status Date"
                    handleDateTimeChange={handleDateTimeChange}
                    dateTimeValue={dayjs("2022-04-17")}
                    dateFieldSx={{}}
                />
            </div>
        );
        const labelText = await findByText("Status Date");
        expect(labelText).toBeInTheDocument();
        expect(await findByText("Status Date")).toBeInTheDocument();
        expect(getByDisplayValue("04/17/2022")).toBeInTheDocument();
    });

    it("we can change the date from null and when date to date", async () => {
        await render(<InstantTester />);
        const labelText = await findByText("Status Date");
        expect(labelText).toBeInTheDocument();
        expect(await findByText("Status Date")).toBeInTheDocument();
        const inputField = await findByTestId("status_date_time-input");
        fireEvent.change(inputField, { target: { value: "01/01/2026" } });
        expect(getByText("2026-01-01T00:00:00.000+00:00")).toBeInTheDocument();
        fireEvent.change(inputField, { target: { value: "01/01/2027" } });
        expect(getByText("2027-01-01T00:00:00.000+00:00")).toBeInTheDocument();
    });
    it("Handles change for Hours, minutes, seconds, ms; does not combust.", async () => {
        await render(<InstantTester />);
        const labelText = await findByText("Status Date");
        expect(labelText).toBeInTheDocument();
        expect(await findByText("Status Date")).toBeInTheDocument();
        const inputField = await findByTestId("status_date_time-input");
        fireEvent.change(inputField, { target: { value: "01/01/2026" } });
        expect(getByText("2026-01-01T00:00:00.000+00:00")).toBeInTheDocument();
        fireEvent.change(getByTestId("status_date_time-hour-input"), {
            target: { value: "1" },
        });
        fireEvent.change(getByTestId("status_date_time-minute-input"), {
            target: { value: "2" },
        });
        fireEvent.change(getByTestId("status_date_time-second-input"), {
            target: { value: "3" },
        });
        fireEvent.change(getByTestId("status_date_time-millisecond-input"), {
            target: { value: "4" },
        });
        expect(getByText("2026-01-01T01:02:03.004+00:00")).toBeInTheDocument();
    });
});
