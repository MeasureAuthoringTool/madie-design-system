import "@testing-library/jest-dom";
import React, { useState } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import MadieToast from "../../components/MadieToast";
import "@testing-library/jest-dom";

const ToastTester = (toastProps) => {
    const [toastOpen, setToastOpen] = useState(false);
    return (
        <div>
            <button
                data-testid="toast-tester"
                onClick={() => setToastOpen(true)}
            >
                toast tester
            </button>
            <MadieToast
                visible={toastOpen}
                onClose={() => setToastOpen(false)}
                {...toastProps}
            />
        </div>
    );
};

describe("Madie Toast", () => {
    it("Error toast renders correctly and disappears", async () => {
        const { findByTestId, getByTestId, queryByText } = await render(
            <ToastTester
                toastKey="toast-key"
                type="error"
                autoHideDuration={1000}
                content="Something has gone wrong. Please try again"
                toastProps={{
                    "data-testid": "error-toast",
                }}
                closeButtonProps={{
                    "data-testid": "close-button",
                }}
            />
        );
        const result = await findByTestId("toast-tester");
        fireEvent.click(result);
        const errorToast = await getByTestId("error-toast");
        expect(errorToast).toBeInTheDocument();
        await waitFor(() => {
            expect(
                queryByText("Something has gone wrong. Please try again")
            ).not.toBeVisible();
        });
    });

    it("Success toast renders correctly and disappears", async () => {
        const { findByTestId, getByTestId, queryByText } = await render(
            <ToastTester
                toastKey="toast-key"
                type="success"
                autoHideDuration={1000}
                content="Something has completed"
                toastProps={{
                    "data-testid": "success-toast",
                }}
                closeButtonProps={{
                    "data-testid": "close-button",
                }}
            />
        );
        const result = await findByTestId("toast-tester");
        fireEvent.click(result);
        const successToast = await getByTestId("success-toast");
        expect(successToast).toBeInTheDocument();
        await waitFor(() => {
            expect(queryByText("Something has completed")).not.toBeVisible();
        });
    });

    it("Info toast renders correctly and disappears", async () => {
        const { findByTestId, getByTestId, queryByText } = await render(
            <ToastTester
                toastKey="toast-key"
                type="info"
                autoHideDuration={1000}
                content="Something has completed"
                toastProps={{
                    "data-testid": "info-toast",
                }}
                closeButtonProps={{
                    "data-testid": "close-button",
                }}
            />
        );
        const result = await findByTestId("toast-tester");
        fireEvent.click(result);
        const infoToast = await getByTestId("info-toast");
        expect(infoToast).toBeInTheDocument();
        await waitFor(() => {
            expect(queryByText("Something has completed")).not.toBeVisible();
        });
    });

    it("Warning toast renders correctly and disappears", async () => {
        const { findByTestId, getByTestId, queryByText } = await render(
            <ToastTester
                toastKey="toast-key"
                type="warning"
                autoHideDuration={1000}
                content="Something is wrong"
                toastProps={{
                    "data-testid": "warning-toast",
                }}
                closeButtonProps={{
                    "data-testid": "close-button",
                }}
            />
        );
        const result = await findByTestId("toast-tester");
        fireEvent.click(result);
        const warningToast = await getByTestId("warning-toast");
        expect(warningToast).toBeInTheDocument();
        await waitFor(() => {
            expect(queryByText("Something is wrong")).not.toBeVisible();
        });
    });

    it("It renders as expected with basic props and triggers on Close on click", async () => {
        const onClose = jest.fn();
        const { findByTestId, getByTestId, queryByText } = await render(
            <ToastTester
                toastKey="toast-key"
                type="warning"
                content="Something is wrong"
                onClose={onClose}
                toastProps={{
                    "data-testid": "warning-toast",
                }}
                closeButtonProps={{
                    "data-testid": "close-button",
                }}
            />
        );

        const result = await findByTestId("toast-tester");
        fireEvent.click(result);
        expect(getByTestId("warning-toast")).toBeInTheDocument();
        expect(getByTestId("close-button")).toBeInTheDocument();
        const cancelButton = getByTestId("close-button");
        fireEvent.click(cancelButton);
        await waitFor(() => {
            expect(onClose).toHaveBeenCalledTimes(1);
        });
    });
});
