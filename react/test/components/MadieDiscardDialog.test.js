import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import MadieDiscardDialog from "../../components/MadieDiscardDialog/index";
import { act } from "react-dom/test-utils";
import { render, fireEvent, waitFor } from "@testing-library/react";

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
    test("Dialog renders", async () => {
        await act(async () => {
            const { findByTestId, getByTestId, queryByText } = await render(
                <DialogTester />
            );
            const result = await findByTestId("dialog-tester");
            fireEvent.click(result);
            const discardDialog = await getByTestId("discard-dialog");
            expect(discardDialog).toBeInTheDocument();
            await waitFor(() => {
                expect(queryByText("You have unsaved changes.")).toBeVisible();
            });
        });
    });

    test("Dialog disappears onContinue", async () => {
        await act(async () => {
            const { findByTestId, getByTestId, queryByText } = await render(
                <DialogTester />
            );
            const result = await findByTestId("dialog-tester");
            fireEvent.click(result);
            const continueButton = await getByTestId(
                "discard-dialog-continue-button"
            );
            expect(continueButton).toBeInTheDocument();
            fireEvent.click(continueButton);
            await waitFor(() => {
                expect(
                    queryByText("You have unsaved changes.")
                ).not.toBeVisible();
            });
        });
    });
    test("Dialog disappears onClose", async () => {
        await act(async () => {
            const { findByTestId, getByTestId, queryByText } = await render(
                <DialogTester />
            );
            const result = await findByTestId("dialog-tester");
            fireEvent.click(result);
            const cancelButton = await getByTestId(
                "discard-dialog-cancel-button"
            );
            expect(cancelButton).toBeInTheDocument();
            fireEvent.click(cancelButton);
            await waitFor(() => {
                expect(
                    queryByText("You have unsaved changes.")
                ).not.toBeVisible();
            });
        });
    });
});
