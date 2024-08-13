import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import MadieAlert from "../../components/MadieAlert";

describe("MadieAlert Component", () => {
    it("renders with basic props and triggers on Close on click", async () => {
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
        const expectedReturn = `Following issues were found within the CQL

(3) Errors: 


Row: 5, Col:0: VSAC: 0:89 | Request failed with status code 404 for oid = 1.16.840.1.113762.1.4.1222.1334 location = 5:0-5:89
Row: 7, Col:0: VSAC: 0:66 | Request failed with status code 404 for oid = 1.16.840.1.113762.1.4.1206.28 location = 7:0-7:66
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
                    <div aria-live="polite" role="alert"><h3 aria-live="polite" role="alert" data-testid="generic-error-text-header">Following issues were found within the CQL</h3><h6>(3) Errors:</h6><ul data-testid="generic-errors-text-list"><li>Row: 6, Col:0: VSAC: 0:87 | Request failed with status code 404 for oid = 1.16.840.1.113762.1.4.1106.114 location = 6:0-6:87</li><li>Row: 5, Col:0: VSAC: 0:89 | Request failed with status code 404 for oid = 1.16.840.1.113762.1.4.1222.1334 location = 5:0-5:89</li><li>Row: 7, Col:0: VSAC: 0:66 | Request failed with status code 404 for oid = 1.16.840.1.113762.1.4.1206.28 location = 7:0-7:66</li></ul></div>
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

    it("does not render when invisible", () => {
        const { queryByTestId } = render(
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
        expect(queryByTestId("alert-dialog")).toBeNull();
    });
});
