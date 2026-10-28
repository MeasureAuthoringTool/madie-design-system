import * as React from "react";
import "@testing-library/jest-dom";
import { describe, expect } from "@jest/globals";
import DateField from "../../components/DateField/DateField";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";

describe("DateField", () => {
    it.each([true, false])(
        "places required state on the native input when required is %s",
        (required) => {
            render(
                <DateField
                    id="measurement-period-start"
                    label="Start Date"
                    required={required}
                    handleDateChange={jest.fn()}
                    inputProps={{ "aria-describedby": "date-help" }}
                />
            );

            const input = screen.getByRole("textbox", { name: "Start Date" });
            expect(input).toHaveAttribute("aria-required", String(required));
            expect(input.required).toBe(required);
            expect(input).toHaveAttribute("aria-describedby", "date-help");
            expect(input).toHaveAttribute("placeholder", "MM/DD/YYYY");
            expect(
                screen.getByTestId("measurement-period-start")
            ).not.toHaveAttribute("aria-required");
        }
    );

    it("DateField Exists", async () => {
        await act(async () => {
            const { findByText, getByDisplayValue } = render(
                <DateField
                    label="Status Date"
                    value={dayjs("2022-04-17")}
                    handleDateChange={() => console.log("Status Date")}
                    disabled={false}
                />
            );

            const labelText = await findByText("Status Date");
            expect(labelText).toBeInTheDocument();
            expect(await findByText("Status Date")).toBeInTheDocument();
            expect(getByDisplayValue("04/17/2022")).toBeInTheDocument();
        });
    });

    it("DateField Exists, with empty value", async () => {
        await act(async () => {
            const { findByText, container } = render(
                <DateField
                    label="Status Date"
                    handleDateChange={() => console.log("Status Date")}
                    disabled={false}
                />
            );

            const labelText = await findByText("Status Date");
            expect(labelText).toBeInTheDocument();
            expect(await findByText("Status Date")).toBeInTheDocument();

            const dateDisplay = container.querySelector('[value="04/17/2022"]');
            expect(dateDisplay).toBeNull();
        });
    });

    it("renders disabled DateField when disabled is true", () => {
        const mockProps = {
            id: "test_id",
            label: "Test Label",
            value: dayjs.utc("2023-10-01"),
            disabled: true,
        };

        render(<DateField {...mockProps} />);

        const label = screen.getByText("Test Label");
        expect(label).toBeInTheDocument();

        const disabledField = screen.getByRole("textbox");
        expect(disabledField).toHaveValue("10/01/2023");
        expect(disabledField).toBeDisabled();
    });

    it("renders ReadOnlyTextField when readOnly is true", () => {
        const mockProps = {
            id: "test_id",
            label: "Test Label",
            value: dayjs.utc("2023-10-01"),
            readOnly: true,
        };

        render(<DateField {...mockProps} />);

        const label = screen.getByText("Test Label");
        expect(label).toBeInTheDocument();
        const readOnlyField = screen.getByRole("textbox");
        expect(readOnlyField).toHaveTextContent("10/01/2023");
        expect(readOnlyField).toHaveProperty("readOnly", true);
    });

    it("renders placeholder '-' when value is null and readOnly is true", () => {
        const mockProps = {
            id: "test_id",
            label: "Test Label",
            value: null,
            required: false,
            readOnly: true,
        };

        const { getByLabelText } = render(<DateField {...mockProps} />);

        const readOnlyField = getByLabelText("Test Label");
        expect(readOnlyField).toBeInTheDocument();
        expect(readOnlyField).toHaveTextContent("-");
    });
});
