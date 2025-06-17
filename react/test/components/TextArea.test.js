import * as React from "react";
import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import TextArea from "../../components/TextArea/index";
import { Simulate } from "react-dom/test-utils";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TextArea", () => {
    test("TextArea exists, and simulates input correctly", async () => {
        const { findByTestId, getByTestId } = render(
            <TextArea
                placeholder="test Name"
                required
                label="test Name"
                id="testName"
                data-testid="test-name-text-field"
                disabled={false}
            />,
        );
        expect(await findByTestId("test-name-text-field")).toBeInTheDocument();
        const textNode = await getByTestId("test-name-text-field");
        expect(textNode).toBeInTheDocument();
        userEvent.type(textNode, "newVal");
        Simulate.change(textNode);
        await waitFor(() => {
            expect(textNode.value).toBe("newVal");
        });
    });
    test("TextArea renders with helper text", async () => {
        const { findByText } = render(
            <TextArea
                error={false}
                placeholder="test Name"
                helperText="helper text"
                label="test Name"
                id="testName"
                inputProps={{ "data-testid": "test-name-input" }}
                data-testid="test-name-text-field"
            />,
        );
        const helperText = await findByText("helper text");
        expect(helperText).toBeInTheDocument();
    });
    test("renders TextArea for disabled mode", async () => {
        render(
            <TextArea
                disabled
                placeholder="test Name"
                helperText="helper text"
                label="test Name"
                id="testName"
                inputProps={{ "data-testid": "test-name-input" }}
                data-testid="test-name-text-field"
                value="test value"
            />,
        );
        const textArea = await screen.findByRole("textbox");
        expect(textArea).toHaveTextContent("test value");
        expect(textArea).toHaveAttribute("readOnly");
    });
    test("HelperText renders errored", async () => {
        const { findByText } = render(
            <TextArea
                error
                placeholder="test Name"
                helperText="helper text"
                label="test Name"
                id="testName"
                inputProps={{ "data-testid": "test-name-input" }}
                data-testid="test-name-text-field"
            />,
        );
        const helperText = await findByText("helper text");
        expect(helperText).toBeInTheDocument();
    });
    test("TextArea renders with default propTypes left out", async () => {
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
            />,
        );
        const helperText = await findByText("helper text");
        expect(helperText).toBeInTheDocument();
    });
    test("TextArea shows maxLength", async () => {
        const { findByTestId, getByTestId, findByText } = render(
            <TextArea
                placeholder="test Name"
                required
                label="test Name"
                id="testName"
                data-testid="test-name-text-field"
                disabled={false}
                maxLength={10}
            />,
        );
        expect(await findByTestId("test-name-text-field")).toBeInTheDocument();
        const textNode = await getByTestId("test-name-text-field");
        expect(textNode).toBeInTheDocument();
        userEvent.type(textNode, "newVal");
        Simulate.change(textNode);
        const maxLength = await findByText("/10 Characters");
        expect(maxLength).toBeInTheDocument();
    });
});
