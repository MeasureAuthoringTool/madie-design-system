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
                dialogTitle="Are You Sure"
                name="log out of UMLS"
                action="confirm"
            />
        </div>
    );
};

const DialogTesterForDiscard = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <div>
            <button
                data-testid="discard-dialog-tester"
                onClick={() => setDialogOpen(true)}
            >
                discard dialog tester
            </button>
            <MadieConfirmDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onContinue={() => setDialogOpen(false)}
                action="discard"
                dialogTitle="Discard Changes"
                name="discard your changes"
                otherDialogProps={{
                    continueText: "Yes, Discard All Changes",
                    cancelText: "No, Keep Working",
                }}
            />
        </div>
    );
};

const DialogTesterForDelete = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <div>
            <button
                data-testid="delete-dialog-tester"
                onClick={() => setDialogOpen(true)}
            >
                delete dialog tester
            </button>
            <MadieConfirmDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onContinue={() => setDialogOpen(false)}
                action="delete"
                dialogTitle="Are You Sure"
                name="delete this Definition"
                otherDialogProps={{
                    continueText: "Yes, Delete",
                }}
            />
        </div>
    );
};

describe("MadieConfirmDialog", () => {
    test("Confirm Dialog renders", async () => {
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

    test("Discard Dialog renders", async () => {
        await act(async () => {
            const { findByTestId, getByTestId, queryByText } = await render(
                <DialogTesterForDiscard />
            );
            const result = await findByTestId("discard-dialog-tester");
            fireEvent.click(result);
            const confirmDialog = await getByTestId("discard-dialog");
            expect(confirmDialog).toBeInTheDocument();
            await waitFor(() => {
                expect(queryByText("You have unsaved changes.")).toBeVisible();
                expect(queryByText("Discard Changes")).toBeVisible();
            });
        });
    });

    test("Delete Dialog renders", async () => {
        await act(async () => {
            const { findByTestId, getByTestId, queryByText } = await render(
                <DialogTesterForDelete />
            );
            const result = await findByTestId("delete-dialog-tester");
            fireEvent.click(result);
            const confirmDialog = await getByTestId("delete-dialog");
            expect(confirmDialog).toBeInTheDocument();
            await waitFor(() => {
                expect(queryByText("delete this Definition")).toBeVisible();
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
