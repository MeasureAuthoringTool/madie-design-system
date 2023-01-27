import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Accordion from "../../components/Accordion";

describe("Accordion", () => {
    it("Should render okay", async() => {
        const { getByTestId, getByRole } = render(
            <Accordion title="Title" centerItem="centerItem" rightItem="rightItem" leftItem="leftItem">Content</Accordion>
        );
        expect(getByTestId("accordion")).toBeTruthy();
        const button = getByRole("button")
        fireEvent.click(button)
        await waitFor(() => {
            expect(button).toHaveClass("active")
        });
        fireEvent.click(button) 
        await waitFor(() => {
            expect(button).not.toHaveClass("active")
        });
    });
});
