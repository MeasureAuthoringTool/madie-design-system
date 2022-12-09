import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import Toast from "../../components/Toast/index";
import { act } from "react-dom/test-utils";
import { render, fireEvent, waitFor } from "@testing-library/react";

import React, { useState } from "react";

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
            <Toast
                open={toastOpen}
                onClose={() => setToastOpen(false)}
                {...toastProps}
            />
        </div>
    );
};

describe("Toast", () => {
    test("Danger toast renders correctly and disappears", async () => {
        await act(async () => {
            const { findByTestId, getByTestId, queryByText } = await render(
                <ToastTester
                    toastKey="toast-key"
                    testId="danger-toast"
                    toastType="danger"
                    autoHideDuration={1000}
                    message="Something has gone wrong. Please try again"
                />
            );
            const result = await findByTestId("toast-tester");
            fireEvent.click(result);
            const dangerToast = await getByTestId("danger-toast");
            expect(dangerToast).toBeInTheDocument();
            await waitFor(() => {
                expect(
                    queryByText("Something has gone wrong. Please try again")
                ).not.toBeVisible();
            });
        });
    });

    test("Success toast renders correctly and disappears", async () => {
        await act(async () => {
            const { findByTestId, getByTestId, queryByText } = await render(
                <ToastTester
                    toastKey="toast-key"
                    testId="success-toast"
                    toastType="success"
                    autoHideDuration={1000}
                    message="Something has completed"
                />
            );
            const result = await findByTestId("toast-tester");
            fireEvent.click(result);
            const dangerToast = await getByTestId("success-toast");
            expect(dangerToast).toBeInTheDocument();
            await waitFor(() => {
                expect(
                    queryByText("Something has completed")
                ).not.toBeVisible();
            });
        });
    });

    test("Info toast renders correctly and disappears", async () => {
        await act(async () => {
            const { findByTestId, getByTestId, queryByText } = await render(
                <ToastTester
                    toastKey="toast-key"
                    testId="info-toast"
                    toastType="info"
                    autoHideDuration={1000}
                    message="Something has completed"
                />
            );
            const result = await findByTestId("toast-tester");
            fireEvent.click(result);
            const dangerToast = await getByTestId("info-toast");
            expect(dangerToast).toBeInTheDocument();
            await waitFor(() => {
                expect(
                    queryByText("Something has completed")
                ).not.toBeVisible();
            });
        });
    });

    test("Warning toast renders correctly and disappears", async () => {
        await act(async () => {
            const { findByTestId, getByTestId, queryByText } = await render(
                <ToastTester
                    toastKey="toast-key"
                    testId="warning-toast"
                    toastType="warning"
                    autoHideDuration={1000}
                    message="Something went wrong"
                />
            );
            const result = await findByTestId("toast-tester");
            fireEvent.click(result);
            const dangerToast = await getByTestId("warning-toast");
            expect(dangerToast).toBeInTheDocument();
            await waitFor(() => {
                expect(queryByText("Something went wrong")).not.toBeVisible();
            });
        });
    });

    it("It renders as expected with basic props and triggers on Close on click", async () => {
        const onClose = jest.fn();
        const { findByTestId, getByTestId } = await render(
            <Toast
                testId="test-toast"
                message="Something went wrong"
                onClose={onClose}
                closeButtonProps={{
                    "data-testid": "close-button",
                }}
            />
        );

        expect(getByTestId("test-toast")).toBeInTheDocument();
        expect(getByTestId("close-button")).toBeInTheDocument();
        const cancelButton = getByTestId("close-button");
        fireEvent.click(cancelButton);
        await waitFor(() => {
            expect(onClose).toHaveBeenCalledTimes(1);
        });
    });
});
