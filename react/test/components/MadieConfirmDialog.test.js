import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import MadieConfirmDialog from "../../components/MadieConfirmDialog/index";
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
            <MadieConfirmDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onContinue={() => setDialogOpen(false)}
                name="log out of UMLS"
            />
        </div>
    );
};

describe("MadieConfirmDialog", () => {
    test("Dialog renders", async () => {
        await act(async () => {
            const { findByTestId, getByTestId, queryByText } = await render(
                <DialogTester />
            );
            const result = await findByTestId("dialog-tester");
            fireEvent.click(result);
            const confirmDialog = await getByTestId("confirm-dialog");
            expect(confirmDialog).toBeInTheDocument();
            await waitFor(() => {
                expect(queryByText("log out of UMLS")).toBeVisible();
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
                "confirm-dialog-continue-button"
            );
            expect(continueButton).toBeInTheDocument();
            fireEvent.click(continueButton);
            await waitFor(() => {
                expect(queryByText("log out of UMLS")).not.toBeVisible();
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
                "confirm-dialog-cancel-button"
            );
            expect(cancelButton).toBeInTheDocument();
            fireEvent.click(cancelButton);
            await waitFor(() => {
                expect(queryByText("log out of UMLS")).not.toBeVisible();
            });
        });
    });
});
