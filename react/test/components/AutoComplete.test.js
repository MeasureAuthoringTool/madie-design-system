import * as React from "react";
import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import AutoComplete from "../../components/AutoComplete/AutoComplete";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("AutoComplete Component", () => {
    it("renders AutoComplete with options and allows selection", async () => {
        const mockOnChange = jest.fn();
        const options = ["Option1", "Option2", "Option3"];

        render(
            <AutoComplete
                id="autocomplete"
                dataTestId="autocomplete"
                label="Auto Complete"
                options={options}
                onChange={mockOnChange}
                placeholder="Search for a value"
            />
        );

        const input = screen.getByRole("combobox");
        expect(input).toBeInTheDocument();

        await userEvent.type(input, "Option1");
        const option = screen.getByText("Option1");
        expect(option).toBeInTheDocument();

        await userEvent.click(option);
        expect(mockOnChange).toHaveBeenCalledWith("autocomplete", "Option1", expect.any(String), expect.any(Object));
    });

    it("renders AutoComplete in disabled mode", () => {
        render(
            <AutoComplete
                id="autocomplete-disabled"
                dataTestId="autocomplete-disabled"
                label="Auto Complete"
                disabled
                value="Option1"
            />
        );

        const readOnlyField = screen.getByRole("textbox");
        expect(readOnlyField).toHaveValue("Option1");
        expect(readOnlyField).toHaveAttribute("readonly");
    });

    it("renders AutoComplete with helper text", () => {
        render(
            <AutoComplete
                id="autocomplete-helper"
                dataTestId="autocomplete-helper"
                label="Auto Complete"
                helperText="Helper text goes here"
            />
        );

        const helperText = screen.getByText("Helper text goes here");
        expect(helperText).toBeInTheDocument();
    });

    it("renders AutoComplete with error state", () => {
        render(
            <AutoComplete
                id="autocomplete-error"
                dataTestId="autocomplete-error"
                label="Auto Complete"
                error
                helperText="This field is required"
            />
        );

        const errorText = screen.getByText("This field is required");
        expect(errorText).toBeInTheDocument();
        expect(errorText).toHaveStyle("color: #d32f2f");
    });
});
