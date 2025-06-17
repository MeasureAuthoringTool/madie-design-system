import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import MadieDiscardDialog from "../../components/MadieDiscardDialog/index";
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
            <MadieDiscardDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onContinue={() => setDialogOpen(false)}
            />
        </div>
    );
};

describe("MadieDiscardDialog", () => {
    const { findByTestId, getByTestId, queryByText } = screen;

    test("Dialog renders", async () => {
        render(<DialogTester />);
        const result = await findByTestId("dialog-tester");
        fireEvent.click(result);
        const discardDialog = await getByTestId("discard-dialog");
        expect(discardDialog).toBeInTheDocument();
        await waitFor(() => {
            expect(queryByText("You have unsaved changes.")).toBeVisible();
        });
    });

    test("Dialog disappears onContinue", async () => {
        render(<DialogTester />);
        const result = await findByTestId("dialog-tester");
        fireEvent.click(result);
        const continueButton = await getByTestId(
            "discard-dialog-continue-button",
        );
        expect(continueButton).toBeInTheDocument();
        fireEvent.click(continueButton);
        await waitFor(() => {
            expect(queryByText("You have unsaved changes.")).not.toBeVisible();
        });
    });
    test("Dialog disappears onClose", async () => {
        render(<DialogTester />);
        const result = await findByTestId("dialog-tester");
        fireEvent.click(result);
        const cancelButton = await getByTestId("discard-dialog-cancel-button");
        expect(cancelButton).toBeInTheDocument();
        fireEvent.click(cancelButton);
        await waitFor(() => {
            expect(queryByText("You have unsaved changes.")).not.toBeVisible();
        });
    });
});
