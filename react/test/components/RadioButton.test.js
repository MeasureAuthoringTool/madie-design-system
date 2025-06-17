import * as React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioButton from "../../components/RadioButton/RadioButton";

describe("RadioButton Component", () => {
    it("renders RadioButton with options and allows selection", async () => {
        const mockOnChange = jest.fn();
        const options = [
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
        ];

        render(
            <RadioButton
                id="radio-button"
                dataTestId="radio-button"
                label="Radio Button"
                options={options}
                onChange={mockOnChange}
            />,
        );

        const option1 = screen.getByLabelText("Option 1");
        const option2 = screen.getByLabelText("Option 2");

        expect(option1).toBeInTheDocument();
        expect(option2).toBeInTheDocument();

        await userEvent.click(option1);
        expect(option1).toBeChecked();
        expect(mockOnChange).toHaveBeenCalled();
    });

    it("renders RadioButton in disabled mode", () => {
        const options = [
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
        ];

        render(
            <RadioButton
                id="radio-button-disabled"
                dataTestId="radio-button-disabled"
                label="Radio Button"
                options={options}
                value="option1"
                disabled
            />,
        );

        const option1 = screen.getByRole("textbox");
        expect(option1).toHaveTextContent("Option 1");
        expect(option1).toHaveAttribute("readOnly");
    });

    it("renders helper text", () => {
        render(
            <RadioButton
                id="radio-button-helper"
                dataTestId="radio-button-helper"
                label="Radio Button"
                helperText="Helper text goes here"
            />,
        );

        const helperText = screen.getByText("Helper text goes here");
        expect(helperText).toBeInTheDocument();
    });

    it("renders error state", () => {
        render(
            <RadioButton
                id="radio-button-error"
                dataTestId="radio-button-error"
                label="Radio Button"
                error
                helperText="This field is required"
            />,
        );

        const errorText = screen.getByText("This field is required");
        expect(errorText).toBeInTheDocument();
        expect(errorText).toHaveStyle("color: #d32f2f");
    });

    it("renders placeholder '-' when disabled and no value is provided", () => {
        const options = [
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
        ];

        render(
            <RadioButton
                id="radio-button-placeholder"
                dataTestId="radio-button-placeholder"
                label="Radio Button"
                options={options}
                disabled
            />,
        );

        const readOnlyField = screen.getByRole("textbox");
        expect(readOnlyField).toHaveTextContent("-");
    });
});
