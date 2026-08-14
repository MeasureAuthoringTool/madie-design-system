import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Toggle from "../../components/Toggle/Toggle";

describe("Toggle", () => {
    test("renders an off switch with its label", () => {
        render(<Toggle id="hide-invalid" label="Hide Invalid Test Cases" />);

        const toggle = screen.getByRole("switch", {
            name: "Hide Invalid Test Cases",
        });

        expect(toggle).not.toBeChecked();
    });

    test("updates its state when uncontrolled", () => {
        render(<Toggle id="hide-invalid" label="Hide Invalid Test Cases" />);

        const toggle = screen.getByRole("switch", {
            name: "Hide Invalid Test Cases",
        });

        fireEvent.click(toggle);

        expect(toggle).toBeChecked();
    });

    test("toggles the local control when another instance has the same id", () => {
        render(
            <>
                <Toggle id="hide-invalid" label="Hide Invalid Test Cases" />
                <Toggle id="hide-invalid" label="Hide Invalid Test Cases" />
            </>
        );

        const toggles = screen.getAllByRole("switch");
        fireEvent.click(screen.getAllByText("Hide Invalid Test Cases")[1]);

        expect(toggles[0]).not.toBeChecked();
        expect(toggles[1]).toBeChecked();
    });

    test("reports changes when controlled", () => {
        const onChange = jest.fn();

        render(
            <Toggle
                checked={false}
                id="hide-invalid"
                label="Hide Invalid Test Cases"
                onChange={onChange}
            />
        );

        fireEvent.click(
            screen.getByRole("switch", { name: "Hide Invalid Test Cases" })
        );

        expect(onChange).toHaveBeenCalledWith(expect.any(Object), true);
    });

    test("forwards input attributes to the switch", () => {
        render(
            <Toggle
                data-testid="toggle-input"
                id="hide-invalid"
                label="Hide Invalid Test Cases"
            />
        );

        expect(screen.getByTestId("toggle-input")).toHaveAttribute(
            "role",
            "switch"
        );
    });

    test("does not change when disabled", () => {
        const onChange = jest.fn();

        render(
            <Toggle
                disabled
                id="hide-invalid"
                label="Hide Invalid Test Cases"
                onChange={onChange}
            />
        );

        const toggle = screen.getByRole("switch", {
            name: "Hide Invalid Test Cases",
        });

        expect(toggle).toBeDisabled();
        expect(toggle).not.toBeChecked();
        expect(onChange).not.toHaveBeenCalled();
    });
});