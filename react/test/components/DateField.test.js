import * as React from "react";
import "@testing-library/jest-dom";
import { describe, expect } from "@jest/globals";
import DateField from "../../components/DateField/DateField";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";

describe("DateField", () => {
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

    it("renders ReadOnlyTextField when disabled is true", () => {
        const mockProps = {
            id: "test_id",
            label: "Test Label",
            value: dayjs.utc("2023-10-01"),
            disabled: true,
        };

        render(<DateField {...mockProps} />);

        const readOnlyField = screen.getByText("Test Label");
        expect(readOnlyField).toBeInTheDocument();
        const dateField = screen.getByRole("textbox");
        expect(dateField).toHaveTextContent("2023/10/01");
        expect(dateField).toHaveAttribute("readOnly");
    });

    it("renders placeholder '-' when value is null and disabled is true", () => {
        const mockProps = {
            id: "test_id",
            label: "Test Label",
            value: null,
            required: false,
            disabled: true,
        };

        const { getByLabelText } = render(<DateField {...mockProps} />);

        const readOnlyField = getByLabelText("Test Label");
        expect(readOnlyField).toBeInTheDocument();
        expect(readOnlyField).toHaveTextContent("-");
    });
});
