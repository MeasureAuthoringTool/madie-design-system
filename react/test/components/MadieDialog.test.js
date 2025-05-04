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

    it("It renders of type form with required components and hides the continue button", async () => {
        const { getByTestId, queryByText, queryByTestId } = render(
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
                    continueButtonProps={""}
                >
                    <div>this is a form message</div>
                </MadieDialog>
            </div>
        );
        expect(getByTestId("dialog-form")).toBeInTheDocument();
        expect(queryByText("Indicates required field")).toBeInTheDocument();
        const cancelButton = getByTestId("close-button");
        const submitButton = queryByTestId("form-continue-button");
        expect(cancelButton).toBeInTheDocument();
        expect(submitButton).not.toBeInTheDocument();
    });

    it("It renders of type form with required components and tooltips for continue button when it's disabled", async () => {
        const { getByTestId, queryByText, queryByTestId } = render(
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
                        disabled: true,
                        continueText: "Continue",
                        tooltipText: "Continue button is disabled",
                    }}
                >
                    <div>this is a form message</div>
                </MadieDialog>
            </div>
        );
        expect(getByTestId("dialog-form")).toBeInTheDocument();
        expect(queryByText("Indicates required field")).toBeInTheDocument();
        const cancelButton = getByTestId("close-button");
        const submitButton = queryByTestId("form-continue-button");
        expect(cancelButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        fireEvent.mouseOver(submitButton);
        await waitFor(() => {
            expect(
                queryByText("Continue button is disabled")
            ).toBeInTheDocument();
        });
    });

    it("It does not show tooltips for continue button when it's enabled", async () => {
        const { getByTestId, queryByText, queryByTestId } = render(
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
                        tooltipText: "Continue button is disabled",
                    }}
                >
                    <div>this is a form message</div>
                </MadieDialog>
            </div>
        );
        expect(getByTestId("dialog-form")).toBeInTheDocument();
        expect(queryByText("Indicates required field")).toBeInTheDocument();
        const cancelButton = getByTestId("close-button");
        const submitButton = queryByTestId("form-continue-button");
        expect(cancelButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        fireEvent.mouseOver(submitButton);
        await waitFor(() => {
            expect(
                queryByText("Continue button is disabled")
            ).not.toBeInTheDocument();
        });
    });

    it("It does not show tooltips for continue button when there is no tooltip text", async () => {
        const { getByTestId, queryByText, queryByTestId } = render(
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
                        continueText: "Continue",
                    }}
                >
                    <div>this is a form message</div>
                </MadieDialog>
            </div>
        );
        expect(getByTestId("dialog-form")).toBeInTheDocument();
        expect(queryByText("Indicates required field")).toBeInTheDocument();
        const cancelButton = getByTestId("close-button");
        const submitButton = queryByTestId("form-continue-button");
        expect(cancelButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        fireEvent.mouseOver(submitButton);
        await waitFor(() => {
            expect(
                queryByText("Continue button is disabled")
            ).not.toBeInTheDocument();
        });
    });

    it("It renders popover button", async () => {
        const onClose = jest.fn();
        const open = true;
        const setOpen = jest.fn();
        const { getByTestId, queryByText } = render(
            <div>
                <MadieDialog
                    form={true}
                    title="Basic Form"
                    dialogProps={{
                        onClose,
                        open,
                        maxWidth: "lg",
                        fullWidth: true,
                        onSubmit: () => {
                            console.log("Submitted");
                            setOpen(false);
                        },
                    }}
                    cancelButtonProps={{
                        variant: "secondary",
                        cancelText: "Cancel",
                        "data-testid": "cancel-button",
                    }}
                    continueButtonProps={{
                        variant: "cyan",
                        type: "submit",
                        "data-testid": "continue-button",
                        continueText: "Continue",
                        popoverOptions: [
                            {
                                label: "Export",
                                dataTestId: "export-option",
                                toImplementFunction: () =>
                                    console.log("Export clicked"),
                            },
                            {
                                label: "Export for Publishing",
                                dataTestId: "export-publishing-option",
                                toImplementFunction: () =>
                                    console.log(
                                        "Export for Publishing clicked"
                                    ),
                            },
                        ],
                    }}
                >
                    <div>this is a form message</div>
                </MadieDialog>
            </div>
        );

        const cancelButton = getByTestId("cancel-button");
        const submitButton = getByTestId("continue-button");
        expect(cancelButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        fireEvent.click(submitButton);
        await waitFor(() => {
            expect(queryByText("Export")).toBeInTheDocument();
            expect(queryByText("Export for Publishing")).toBeInTheDocument();
        });
        const exportOption = getByTestId("export-option");
        const exportPublishingOption = getByTestId("export-publishing-option");
        expect(exportOption).toBeInTheDocument();
        expect(exportPublishingOption).toBeInTheDocument();
        fireEvent.click(exportOption);
        await waitFor(() => {
            expect(setOpen).toHaveBeenCalledTimes(1);
        });
    });
});
