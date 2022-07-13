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
});
