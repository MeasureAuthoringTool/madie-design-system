import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import MadieAlert from "../../components/MadieAlert";

describe("Madie Alert", () => {
    it("It renders as expected with basic props and triggers on Close on click", async () => {
        const onClose = jest.fn();
        const { getByTestId } = render(
            <MadieAlert
                type="warning"
                visible
                canClose
                content={<h1>I'm content</h1>}
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
                closeButtonProps={{
                    onClick: onClose,
                    "data-testid": "close-button",
                }}
            />
        );
        expect(getByTestId("alert-dialog")).toBeInTheDocument();
        expect(getByTestId("close-button")).toBeInTheDocument();
        const cancelButton = getByTestId("close-button");
        fireEvent.click(cancelButton);
        await waitFor(() => {
            expect(onClose).toHaveBeenCalledTimes(1);
        });
    });

    it("renders with copy button and copies text correctly", async () => {
        const expectedReturn = `Following issues were found within the CQL(3) Errors:
Row: 7, Col:0: VSAC: 0:66 | Request failed with status code 404 for oid = 1.16.840.1.113762.1.4.1206.28 location = 7:0-7:66
Row: 5, Col:0: VSAC: 0:89 | Request failed with status code 404 for oid = 1.16.840.1.113762.1.4.1222.1334 location = 5:0-5:89
Row: 6, Col:0: VSAC: 0:87 | Request failed with status code 404 for oid = 1.16.840.1.113762.1.4.1106.114 location = 6:0-6:87`;
        const onClose = jest.fn();
        const mockedWriteText = jest.fn();
        navigator.clipboard = {
            writeText: mockedWriteText,
        };
        const { getByTestId } = render(
            <MadieAlert
                type="warning"
                visible
                canClose={false}
                copyButton={true}
                content={
                    <div aria-live="polite" role="alert">
                        <h3
                            aria-live="polite"
                            role="alert"
                            data-testid="generic-error-text-header"
                        >
                            Following issues were found within the CQL
                        </h3>
                        <h6>(3) Errors:</h6>
                        <ul data-testid="generic-errors-text-list">
                            <li>
                                Row: 7, Col:0: VSAC: 0:66 | Request failed with
                                status code 404 for oid =
                                1.16.840.1.113762.1.4.1206.28 location =
                                7:0-7:66
                            </li>
                            <li>
                                Row: 5, Col:0: VSAC: 0:89 | Request failed with
                                status code 404 for oid =
                                1.16.840.1.113762.1.4.1222.1334 location =
                                5:0-5:89
                            </li>
                            <li>
                                Row: 6, Col:0: VSAC: 0:87 | Request failed with
                                status code 404 for oid =
                                1.16.840.1.113762.1.4.1106.114 location =
                                6:0-6:87
                            </li>
                        </ul>
                    </div>
                }
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
                closeButtonProps={{
                    onClick: onClose,
                    "data-testid": "close-button",
                }}
            />
        );
        expect(getByTestId("alert-dialog")).toBeInTheDocument();
        expect(getByTestId("ContentCopyIcon")).toBeInTheDocument();
        const copyButton = getByTestId("ContentCopyIcon");
        fireEvent.click(copyButton);

        await waitFor(() => {
            expect(mockedWriteText).toHaveBeenCalledTimes(1);
            expect(mockedWriteText).toHaveBeenCalledWith(expectedReturn);
        });
    });
    it("renders with copy button and copies text correctly with a non-array in children", async () => {
        const expectedReturn = `Following test case(s) were imported successfully, but the measure populations do not match the populations in the import file. The Test Case has been imported, but no expected values have been set.
9ccff643-5ec1-4875-910e-4f602c174455 
21b8a225-7cd5-4b4b-bc08-b25100e6346c`;
        const onClose = jest.fn();
        const mockedWriteText = jest.fn();
        navigator.clipboard = {
            writeText: mockedWriteText,
        };
        const { getByTestId } = render(
            <MadieAlert
                type="warning"
                visible
                canClose={false}
                copyButton={true}
                content={
                    <div aria-live="polite" role="alert">
                        <div>
                            <div class="StatusHandler___StyledDiv2-sc-1tujbo9-2 gtcQQP">
                                Following test case(s) were imported
                                successfully, but the measure populations do not
                                match the populations in the import file. The
                                Test Case has been imported, but no expected
                                values have been set.
                            </div>
                            <ul>
                                <li data-testid="success-imports-with-warnings">
                                    9ccff643-5ec1-4875-910e-4f602c174455{" "}
                                </li>
                                <li data-testid="success-imports-with-warnings">
                                    21b8a225-7cd5-4b4b-bc08-b25100e6346c{" "}
                                </li>
                            </ul>
                        </div>
                    </div>
                }
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
                closeButtonProps={{
                    onClick: onClose,
                    "data-testid": "close-button",
                }}
            />
        );
        expect(getByTestId("alert-dialog")).toBeInTheDocument();
        expect(getByTestId("ContentCopyIcon")).toBeInTheDocument();
        const copyButton = getByTestId("ContentCopyIcon");
        fireEvent.click(copyButton);

        await waitFor(() => {
            expect(mockedWriteText).toHaveBeenCalledTimes(1);
            expect(mockedWriteText).toHaveBeenCalledWith(expectedReturn);
        });
    });

    it("renders with copy button and copies simple text", async () => {
        const expectedReturn = `hello`;
        const onClose = jest.fn();
        const mockedWriteText = jest.fn();
        navigator.clipboard = {
            writeText: mockedWriteText,
        };
        const { getByTestId } = render(
            <MadieAlert
                type="warning"
                visible
                canClose={false}
                copyButton={true}
                content="hello"
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
                closeButtonProps={{
                    onClick: onClose,
                    "data-testid": "close-button",
                }}
            />
        );
        expect(getByTestId("alert-dialog")).toBeInTheDocument();
        expect(getByTestId("ContentCopyIcon")).toBeInTheDocument();
        const copyButton = getByTestId("ContentCopyIcon");
        fireEvent.click(copyButton);

        await waitFor(() => {
            expect(mockedWriteText).toHaveBeenCalledTimes(1);
            expect(mockedWriteText).toHaveBeenCalledWith(expectedReturn);
        });
        const copySuccess = getByTestId("copy-success");
        expect(copySuccess).toBeInTheDocument();
        await new Promise((r) => setTimeout(r, 2000));
        expect(copySuccess).not.toBeInTheDocument();
    });

    it("It does not render when invisible", async () => {
        render(
            <MadieAlert
                type="warning"
                visible={false}
                canClose
                content={<h1>I'm content</h1>}
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
                closeButtonProps={{
                    "data-testid": "close-button",
                }}
            />
        );
        await waitFor(() => {
            expect(screen.queryByTestId("alert-dialog")).toBeNull();
        });
    });

    it("renders minimize button when minimizeAlerts is true", () => {
        const { getByTestId } = render(
            <MadieAlert
                type="warning"
                visible={true}
                canClose={false}
                minimizeAlerts={true}
                content={<h1>Test content</h1>}
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
            />
        );

        expect(getByTestId("alert-dialog")).toBeInTheDocument();
        expect(getByTestId("FullscreenExitRoundedIcon")).toBeInTheDocument();
    });

    it("hides alert when minimize button is clicked", async () => {
        const { getByTestId, queryByTestId } = render(
            <MadieAlert
                type="warning"
                visible={true}
                canClose={false}
                minimizeAlerts={true}
                content={<h1>Test content</h1>}
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
            />
        );

        expect(getByTestId("alert-dialog")).toBeInTheDocument();
        const minimizeButton = getByTestId("FullscreenExitRoundedIcon");

        fireEvent.click(minimizeButton);

        // After clicking minimize, the alert should not be in the document
        await waitFor(() => {
            expect(queryByTestId("alert-dialog")).not.toBeInTheDocument();
        });
    });

    it("does not render minimize button when minimizeAlerts is false", () => {
        const { getByTestId, queryByTestId } = render(
            <MadieAlert
                type="warning"
                visible={true}
                canClose={false}
                minimizeAlerts={false}
                content={<h1>Test content</h1>}
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
            />
        );

        expect(getByTestId("alert-dialog")).toBeInTheDocument();
        expect(queryByTestId("FullscreenExitRoundedIcon")).toBeNull();
    });

    it("shows minimized alert UI when minimized", async () => {
        const { getByTestId, queryByTestId } = render(
            <MadieAlert
                type="warning"
                visible={true}
                canClose={false}
                minimizeAlerts={true}
                content={<h1>Test content</h1>}
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
            />
        );

        // Click minimize button
        const minimizeButton = getByTestId("FullscreenExitRoundedIcon");
        fireEvent.click(minimizeButton);

        // After minimizing, check that minimized alert appears
        await waitFor(() => {
            expect(queryByTestId("alert-dialog")).not.toBeInTheDocument();
            expect(getByTestId("minimized-alert")).toBeInTheDocument();
            expect(getByTestId("minimized-alert-text")).toHaveTextContent("Display Alerts");
        });
    });

    it("shows full alert when minimized alert is clicked", async () => {
        const { getByTestId, queryByTestId } = render(
            <MadieAlert
                type="warning"
                visible={true}
                canClose={false}
                minimizeAlerts={true}
                content={<h1>Test content</h1>}
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
            />
        );

        // First minimize
        const minimizeButton = getByTestId("FullscreenExitRoundedIcon");
        fireEvent.click(minimizeButton);

        // Wait for minimized alert to appear
        await waitFor(() => {
            expect(getByTestId("minimized-alert")).toBeInTheDocument();
        });

        // Click on minimized alert to restore
        const minimizedAlert = getByTestId("minimized-alert");
        fireEvent.click(minimizedAlert);

        // Check that full alert is restored
        await waitFor(() => {
            expect(getByTestId("alert-dialog")).toBeInTheDocument();
            expect(queryByTestId("minimized-alert")).not.toBeInTheDocument();
        });
    });

    it("shows error count in minimized alert when errors are present", async () => {
        const { getByTestId } = render(
            <MadieAlert
                type="warning"
                visible={true}
                canClose={false}
                minimizeAlerts={true}
                content={
                    <div>
                        <ul>
                            <li>Error 1</li>
                            <li>Error 2</li>
                            <li>Error 3</li>
                        </ul>
                    </div>
                }
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
            />
        );

        // Minimize alert
        const minimizeButton = getByTestId("FullscreenExitRoundedIcon");
        fireEvent.click(minimizeButton);

        // Check for error count in minimized alert
        await waitFor(() => {
            expect(getByTestId("minimized-alert-text")).toHaveTextContent("Display Alerts (3)");
        });
    });

    it("does not show error count when there are no errors", async () => {
        const { getByTestId } = render(
            <MadieAlert
                type="warning"
                visible={true}
                canClose={false}
                minimizeAlerts={true}
                content={<div>Simple message with no errors</div>}
                alertProps={{
                    "data-testid": "alert-dialog",
                }}
            />
        );

        // Minimize alert
        const minimizeButton = getByTestId("FullscreenExitRoundedIcon");
        fireEvent.click(minimizeButton);

        // Check that there's no error count
        await waitFor(() => {
            expect(getByTestId("minimized-alert-text")).toHaveTextContent("Display Alerts");
            expect(getByTestId("minimized-alert-text")).not.toHaveTextContent("Display Alerts (");
        });
    });
});
