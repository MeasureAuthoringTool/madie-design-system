import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import TextField from "../../components/TextField/index";
import { act, Simulate } from "react-dom/test-utils";
import {
    findByTestId,
    render,
    fireEvent,
    screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as React from "react";

describe("TextField", () => {
    test("Textfield exists, and simulates input correctly", async () => {
        await act(async () => {
            const { findByTestId, getByTestId } = render(
                <TextField
                    placeholder="test Name"
                    required
                    label="test Name"
                    id="testName"
                    inputProps={{ "data-testid": "test-name-input" }}
                    data-testid="test-name-text-field"
                    size="small"
                />
            );
            expect(
                await findByTestId("test-name-text-field")
            ).toBeInTheDocument();
            const textNode = await getByTestId("test-name-input");
            userEvent.type(textNode, "newVal");
            Simulate.change(textNode);
            expect(textNode.value).toBe("newVal");
        });
    });
    test("Textfield renders with helper text", async () => {
        await act(async () => {
            const { findByText } = render(
                <TextField
                    placeholder="test Name"
                    helperText="helper text"
                    label="test Name"
                    id="testName"
                    inputProps={{ "data-testid": "test-name-input" }}
                    data-testid="test-name-text-field"
                    size="small"
                />
            );
            const helperText = await findByText("helper text");
            expect(helperText).toBeInTheDocument();
        });
    });
    test("Helper text renders disabled", async () => {
        await act(async () => {
            const { findByText } = render(
                <TextField
                    disabled
                    placeholder="test Name"
                    helperText="helper text"
                    label="test Name"
                    id="testName"
                    inputProps={{ "data-testid": "test-name-input" }}
                    data-testid="test-name-text-field"
                    size="small"
                />
            );
            const helperText = await findByText("helper text");
            expect(helperText).toBeInTheDocument();
        });
    });
    test("HelperText renders errored", async () => {
        await act(async () => {
            const { findByText } = render(
                <TextField
                    error
                    placeholder="test Name"
                    helperText="helper text"
                    label="test Name"
                    id="testName"
                    inputProps={{ "data-testid": "test-name-input" }}
                    data-testid="test-name-text-field"
                    size="small"
                />
            );
            const helperText = await findByText("helper text");
            expect(helperText).toBeInTheDocument();
        });
    });

    test("tooltip text renders, can be seen and removed.", async () => {
        await act(async () => {
            const { getByTestId, findByTestId, getByText } = render(
                <TextField
                    placeholder="test Name"
                    helperText="helper text"
                    label="test Name"
                    id="testName"
                    tooltipText="tooltip text"
                    inputProps={{ "data-testid": "test-name-input" }}
                    data-testid="test-name-text-field"
                    size="small"
                />
            );
            const tooltipTrigger = await findByTestId(
                "testName-tooltip-button"
            );

            // click and escape
            act(() => {
                fireEvent.click(tooltipTrigger);
            });
            expect(getByText("tooltip text")).toBeInTheDocument();
            act(() => {
                fireEvent.keyDown(getByText(/tooltip text/i), {
                    key: "Escape",
                    code: "Escape",
                    keyCode: 27,
                    charCode: 27,
                });
            });
            expect(getByTestId("testName-tooltip")).toHaveClass("hidden");

            // enter and leave
            act(() => {
                fireEvent.mouseEnter(getByTestId("testName-tooltip-button"));
            });
            expect(getByTestId("testName-tooltip")).not.toHaveClass("hidden");
            act(() => {
                fireEvent.mouseLeave(getByTestId("testName-tooltip-button"));
            });
            expect(getByTestId("testName-tooltip")).toHaveClass("hidden");

            // focus, blur
            act(() => {
                fireEvent.focus(getByTestId("testName-tooltip-button"));
            });
            expect(getByTestId("testName-tooltip")).not.toHaveClass("hidden");

            act(() => {
                fireEvent.blur(getByTestId("testName-tooltip-button"));
            });
            expect(getByTestId("testName-tooltip")).toHaveClass("hidden");
        });
    });

    test("Textfield has different color for label", async () => {
        await act(async () => {
            const { findByTestId, getByTestId } = render(
                <TextField
                    placeholder="test Name"
                    required
                    label="test Name"
                    labelColor={"#1976d2"}
                    id="testName"
                    inputProps={{ "data-testid": "test-name-input" }}
                    data-testid="test-name-text-field"
                    size="small"
                />
            );
            screen.debug(undefined, 60000);
            expect(
                await findByTestId("test-name-text-field")
            ).toBeInTheDocument();
            const textNode = await getByTestId("test-name-input");
            userEvent.type(textNode, "newVal");
            Simulate.change(textNode);
            expect(textNode.value).toBe("newVal");
        });
    });
});
