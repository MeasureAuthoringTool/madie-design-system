import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import TextField from "../../components/TextField/index";
import { act, Simulate } from "react-dom/test-utils";
import { render } from "@testing-library/react";
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
});
