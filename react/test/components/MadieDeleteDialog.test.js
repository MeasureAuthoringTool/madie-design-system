import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import MadieDeleteDialog from "../../components/MadieDeleteDialog/index";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import React, { useState } from "react";

const DialogTester = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <div>
            <button
                data-testid="dialog-tester"
                onClick={() => setDialogOpen(true)}
            >
                dialog tester
            </button>
            <MadieDeleteDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onContinue={() => setDialogOpen(false)}
            />
        </div>
    );
};

const { findByTestId, getByTestId, queryByText } = screen;
describe("MadieDeleteDialog", () => {
    test("Dialog renders", async () => {
        render(<DialogTester />);
        const result = await findByTestId("dialog-tester");
        fireEvent.click(result);
        const deleteDialog = await getByTestId("delete-dialog");
        expect(deleteDialog).toBeInTheDocument();
        await waitFor(() => {
            expect(
                queryByText("Are you sure you want to delete ?"),
            ).toBeVisible();
            expect(queryByText("This Action cannot be undone.")).toBeVisible();
        });
    });

    test("Dialog disappears onContinue", async () => {
        render(<DialogTester />);
        const result = await findByTestId("dialog-tester");
        fireEvent.click(result);
        const continueButton = await getByTestId(
            "delete-dialog-continue-button",
        );
        expect(continueButton).toBeInTheDocument();
        fireEvent.click(continueButton);
        await waitFor(() => {
            expect(
                queryByText("Are you sure you want to delete ?"),
            ).not.toBeVisible();
        });
    });
    test("Dialog disappears onClose", async () => {
        render(<DialogTester />);
        const result = await findByTestId("dialog-tester");
        fireEvent.click(result);
        const cancelButton = await getByTestId("delete-dialog-cancel-button");
        expect(cancelButton).toBeInTheDocument();
        fireEvent.click(cancelButton);
        await waitFor(() => {
            expect(
                queryByText("Are you sure you want to delete ?"),
            ).not.toBeVisible();
        });
    });

    test("Dialog has not warning text", async () => {
        render(
            <MadieDeleteDialog
                open={true}
                onClose={() => setDialogOpen(false)}
                onContinue={() => setDialogOpen(false)}
                hideWarning={true}
            />,
        );

        const deleteDialog = await getByTestId("delete-dialog");
        expect(deleteDialog).toBeInTheDocument();
        await waitFor(() => {
            expect(
                queryByText("Are you sure you want to delete ?"),
            ).toBeVisible();
            expect(
                queryByText("This Action cannot be undone."),
            ).not.toBeInTheDocument();
        });
    });
});
