import * as React from "react";
import "@testing-library/jest-dom";
import { describe, expect } from "@jest/globals";
import ReadOnlyTextField from "../../components/ReadOnlyTextField/index";
import { render, getByRole } from "@testing-library/react";

describe("ReadOnlyTextField", () => {
    it("should render ReadOnlyTextfield correctly", async () => {
        render(
            <ReadOnlyTextField
                placeholder="test Name"
                required
                label="test Name"
                id="testName"
                inputProps={{ "data-testid": "test-name-input" }}
                size="small"
            />
        );
        const textNode = getByRole(document.body, "textbox", { name: "test Name" });
        expect(textNode).toBeInTheDocument();
        expect(textNode).toHaveProperty("readOnly", true);
        expect(textNode).toHaveTextContent("-");
    });
});
