import * as React from "react";
import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import Select from "../../components/Select/index";
import { act, Simulate } from "react-dom/test-utils";

import { render, fireEvent, screen } from "@testing-library/react";

import { MenuItem } from "@mui/material";

describe("Select", () => {
    const options = [
        { key: "key1", value: "value1", testId: "testid1", name: "name1" },
        { key: "key2", value: "value2", testId: "testid2", name: "name2" },
        { key: "key3", value: "value2", testId: "testid3", name: "name3" },
    ];
    test("Select exists, and simulates input correctly", async () => {
        await act(async () => {
            const { getByTestId } = render(
                <Select
                    placeHolder={{ name: "placeholder", value: "" }}
                    required
                    label="Test"
                    id="test-select"
                    inputProps={{ "data-testid": "test-input" }}
                    data-testid="test-select"
                    size="small"
                    options={options.map(({ key, value, testId, name }) => {
                        return (
                            <MenuItem
                                key={key}
                                value={value}
                                data-testid={`option-${testId}`}
                            >
                                {name}
                            </MenuItem>
                        );
                    })}
                />
            );
            const selectNode = await getByTestId("test-select");
            fireEvent.click(selectNode);
            const inputNode = await getByTestId("test-input");
            fireEvent.select(inputNode, { target: { value: "value1" } });
            Simulate.change(inputNode);
            expect(inputNode.value).toBe("value1");
        });
    });
    test("Placeholder value renders", async () => {
        await act(async () => {
            const { getByTestId } = render(
                <Select
                    placeHolder={{ name: "placeholder", value: "" }}
                    required
                    label="Test"
                    id="test-select"
                    inputProps={{ "data-testid": "test-input" }}
                    data-testid="test-select"
                    size="small"
                    value=""
                    options={options.map(({ key, value, testId, name }) => {
                        return (
                            <MenuItem
                                key={key}
                                value={value}
                                data-testid={`option-${testId}`}
                            >
                                {name}
                            </MenuItem>
                        );
                    })}
                />
            );
            const inputNode = await getByTestId("test-input");
            expect(inputNode.value).toBe("");
        });
    });
    test("Select exists, and simulates input correctly", async () => {
        await act(async () => {
            const { getByTestId } = render(
                <Select
                    label="Test"
                    value=""
                    id="test-select"
                    inputProps={{ "data-testid": "test-input" }}
                    data-testid="test-select"
                    size="small"
                />
            );
            const selectNode = await getByTestId("test-select");
            fireEvent.click(selectNode);
            const inputNode = await getByTestId("test-input");
            expect(inputNode.value).toBe("");
        });
    });
    test("Helper text exists", async () => {
        await act(async () => {
            const { findByText } = render(
                <Select
                    helperText="helper text"
                    label="Test"
                    value=""
                    id="test-select"
                    inputProps={{ "data-testid": "test-input" }}
                    data-testid="test-select"
                    size="small"
                />
            );
            const helperText = await findByText("helper text");
            expect(helperText).toBeInTheDocument();
        });
    });

    test("Select renders disabled", () => {
        render(
            <Select
                disabled
                helperText="helper text"
                label="Test"
                value=""
                id="test-select"
                inputProps={{ "data-testid": "test-input" }}
                data-testid="test-select"
                size="small"
            />
        );
        const value = screen.getByRole("textbox");
        expect(value).toHaveTextContent("-");
        expect(value).toHaveAttribute("readOnly");
    });
    test("Select renders error", async () => {
        await act(async () => {
            const { findByText } = render(
                <Select
                    error
                    helperText="helper text"
                    label="Test"
                    value=""
                    id="test-select"
                    inputProps={{ "data-testid": "test-input" }}
                    data-testid="test-select"
                    size="small"
                />
            );
            const helperText = await findByText("helper text");
            expect(helperText).toBeInTheDocument();
        });
    });
});
