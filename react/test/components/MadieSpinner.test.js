import "@testing-library/jest-dom";
import React from "react";
import { describe, expect, test } from "@jest/globals";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import MadieSpinner from "../../components/MadieSpinner";

describe("MadieSpinner", () => {
    const { findByTestId } = screen;
    test("MadieSpinner exists and renders", async () => {
        render(
            <MadieSpinner
                data-testid="test-spinner"
                thickness={8}
                style={{ height: 50, width: 50 }}
            />,
        );
        expect(await findByTestId("test-spinner")).toBeInTheDocument();
    });
    test("MadieSpinner renders with no props", async () => {
        render(<MadieSpinner data-testid="test-spinner" />);
        expect(await findByTestId("test-spinner")).toBeInTheDocument();
    });
});
