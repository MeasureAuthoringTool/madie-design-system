import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import MadieAlert from "../../components/MadieAlert";
import "@testing-library/jest-dom";

describe("Madie Alert", () => {
    it("It renders as expected with basic props and triggers on Close on click", async () => {
        const onClose = jest.fn();
        const { getByTestId } = render(
            <MadieAlert
                type="warning"
                visible
                canClose
                content={<h1>I'm content</h1>}
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
                closeButtonProps={{
                    onClick: onClose,
                    "data-testid": "close-button",
                }}
            />
        );
        expect(getByTestId("alert-dialog")).toBeInTheDocument();
        expect(getByTestId("close-button")).toBeInTheDocument();
        const cancelButton = getByTestId("close-button");
        fireEvent.click(cancelButton);
        await waitFor(() => {
            expect(onClose).toHaveBeenCalledTimes(1);
        });
    });

    it("It does not render when inivislbe", async () => {
        render(
            <MadieAlert
                type="warning"
                visible={false}
                canClose
                content={<h1>I'm content</h1>}
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
                closeButtonProps={{
                    "data-testid": "close-button",
                }}
            />
        );
        expect(screen.findByTestId("alert-dialog")).toBeNull;
    });
});
