import "@testing-library/jest-dom";
import React from "react";
import { describe, expect, test } from "@jest/globals";
import { render, fireEvent, waitFor } from "@testing-library/react";
import MadieDialog from "../../components/MadieDialog";
import "@testing-library/jest-dom";

describe("Madie Dialog", () => {
    const onFormSubmit = jest.fn();
    const onFormCancel = jest.fn();
    it("It renders of type form with required components and triggers as expected", async () => {
        const { getByTestId, queryByText } = render(
            <div>
                <MadieDialog
                    form={true}
                    title="Basic Form"
                    dialogProps={{
                        open: true,
                        onClose: onFormCancel,
                        onSubmit: onFormSubmit,
                        maxWidth: "sm",
                        showRequiredFieldMessage: true,
                    }}
                    cancelButtonProps={{
                        id: "cancelBtn",
                        "data-testid": "form-cancel-button",
                        variant: "secondary",
                        cancelText: "Cancel",
                    }}
                    continueButtonProps={{
                        type: "submit",
                        "data-testid": "form-continue-button",
                        disabled: false,
                        continueText: "Continue",
                        continueIcon: <span>icon</span>,
                    }}
                >
                    <div>this is a form message</div>
                </MadieDialog>
            </div>
        );
        expect(getByTestId("dialog-form")).toBeInTheDocument();
        expect(queryByText("Indicates required field")).toBeInTheDocument();
        const cancelButton = getByTestId("close-button");
        const submitButton = getByTestId("form-continue-button");
        fireEvent.click(cancelButton);
        await waitFor(() => {
            expect(onFormCancel).toHaveBeenCalledTimes(1);
        });
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(onFormSubmit).toHaveBeenCalledTimes(1);
        });
    });

    it("It renders a basic dialog with custom icons and triggers as expected", async () => {
        const onDialogSubmit = jest.fn();
        const onDialogCancel = jest.fn();
        const { getByTestId, queryByText } = render(
            <div>
                <MadieDialog
                    title="Basic Dialog"
                    form={false}
                    dialogProps={{
                        open: true,
                        onClose: onDialogCancel,
                        maxWidth: "sm",
                    }}
                    cancelButtonProps={{
                        id: "cancelBtn",
                        "data-testid": "dialog-cancel-button",
                        variant: "secondary",
                        cancelText: "Cancel",
                        cancelIcon: <span>cancel-icon</span>,
                    }}
                    continueButtonProps={{
                        type: "submit",
                        "data-testid": "dialog-continue-button",
                        disabled: false,
                        continueText: "Continue",
                        onClick: onDialogSubmit,
                        continueIcon: <span>continue-icon</span>,
                    }}
                >
                    <div>this is a dialog message</div>
                </MadieDialog>
            </div>
        );
        const cancelButton = getByTestId("dialog-cancel-button");
        const submitButton = getByTestId("dialog-continue-button");
        expect(queryByText("continue-icon")).toBeInTheDocument();
        expect(queryByText("cancel-icon")).toBeInTheDocument();
        fireEvent.click(cancelButton);
        await waitFor(() => {
            expect(onDialogCancel).toHaveBeenCalledTimes(1);
        });
        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(onDialogSubmit).toHaveBeenCalledTimes(1);
        });
    });

    it("It renders a basic dialog with no dialog actions", async () => {
        const onDialogCancel = jest.fn();
        const { queryAllByRole } = render(
            <div>
                <MadieDialog
                    title="Basic Dialog"
                    form={false}
                    dialogProps={{
                        open: true,
                        onClose: onDialogCancel,
                        maxWidth: "sm",
                    }}
                    cancelButtonProps={undefined}
                    continueButtonProps={undefined}
                >
                    <div>this is a basic dialog</div>
                </MadieDialog>
            </div>
        );
        // only one button should be there i.e. cancel model icon at top right corner
        expect(queryAllByRole("button")).toHaveLength(1);
    });

    it("It renders a form dialog with no dialog actions", async () => {
        const onDialogCancel = jest.fn();
        const { queryAllByRole } = render(
            <div>
                <MadieDialog
                    title="Basic Dialog"
                    form={true}
                    dialogProps={{
                        open: true,
                        onClose: onDialogCancel,
                        maxWidth: "sm",
                    }}
                >
                    <div>this is a form dialog</div>
                </MadieDialog>
            </div>
        );
        // only one button should be there i.e. cancel model icon at top right corner
        expect(queryAllByRole("button")).toHaveLength(1);
    });
});
