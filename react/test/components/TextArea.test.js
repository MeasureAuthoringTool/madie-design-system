import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import TextArea from "../../components/TextArea/index";
import { act, Simulate } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as React from "react";

describe("TextArea", () => {
    test("TextArea exists, and simulates input correctly", async () => {
        await act(async () => {
            const { findByTestId, getByTestId } = render(
                <TextArea
                    placeholder="test Name"
                    required
                    label="test Name"
                    id="testName"
                    data-testid="test-name-text-field"
                    disabled={false}
                />
            );
            expect(
                await findByTestId("test-name-text-field")
            ).toBeInTheDocument();
            const textNode = await getByTestId("test-name-text-field")
            expect(textNode).toBeInTheDocument();
            userEvent.type(textNode, "newVal");
            Simulate.change(textNode);
            expect(textNode.value).toBe("newVal");
        });
    });
    test("TextArea renders with helper text", async () => {
        await act(async () => {
            const { findByText } = render(
                <TextArea
                    error={false}
                    placeholder="test Name"
                    helperText="helper text"
                    label="test Name"
                    id="testName"
                    inputProps={{ "data-testid": "test-name-input" }}
                    data-testid="test-name-text-field"
                />
            );
            const helperText = await findByText("helper text");
            expect(helperText).toBeInTheDocument();
        });
    });
    test("Helper text renders disabled", async () => {
        await act(async () => {
            const { findByText } = render(
                <TextArea
                    disabled
                    placeholder="test Name"
                    helperText="helper text"
                    label="test Name"
                    id="testName"
                    inputProps={{ "data-testid": "test-name-input" }}
                    data-testid="test-name-text-field"
                />
            );
            const helperText = await findByText("helper text");
            expect(helperText).toBeInTheDocument();
        });
    });
    test("HelperText renders errored", async () => {
        await act(async () => {
            const { findByText } = render(
                <TextArea
                    error
                    placeholder="test Name"
                    helperText="helper text"
                    label="test Name"
                    id="testName"
                    inputProps={{ "data-testid": "test-name-input" }}
                    data-testid="test-name-text-field"
                />
            );
            const helperText = await findByText("helper text");
            expect(helperText).toBeInTheDocument();
        });
    });
    test("TextArea renders with default propTypes left out", async () => {
        await act(async () => {
            const { findByText } = render(
                <TextArea
                    // error purposely omitted
                    // disabled purposely omitted
                    placeholder="test Name"
                    helperText="helper text"
                    label="test Name"
                    id="testName"
                    inputProps={{ "data-testid": "test-name-input" }}
                    data-testid="test-name-text-field"
                />
            );
            const helperText = await findByText("helper text");
            expect(helperText).toBeInTheDocument();
        });
    });
});
