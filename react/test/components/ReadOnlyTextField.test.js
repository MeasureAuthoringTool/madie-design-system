import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import ReadOnlyTextField from "../../components/ReadOnlyTextField/index";
import { act, Simulate } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as React from "react";

describe("ReadOnlyTextField", () => {
    test("ReadOnlyTextfield exists, and simulates input correctly", async () => {
        await act(async () => {
            const { findByTestId, getByTestId } = render(
                <ReadOnlyTextField
                    placeholder="test Name"
                    required
                    label="test Name"
                    id="testName"
                    inputProps={{ "data-testid": "test-name-input" }}
                    data-testid="test-name-text-field"
                    size="small"
                />
            );
            const textNode = await findByTestId("test-name-text-field");
            expect(textNode).toBeInTheDocument();
            userEvent.type(textNode, "newVal");
            Simulate.change(textNode);
            expect(textNode.value).toBe("-");
        });
    });
});
