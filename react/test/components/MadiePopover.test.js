import React, { useState } from "react";
import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import Popover from "../../components/Popover";
import { render, fireEvent } from "@testing-library/react";

export const PopoverTester = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [optionsOpen, setOptionsOpen] = useState(false);

    const onClose = () => {
        setOptionsOpen(false);
    };

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
        setOptionsOpen(true);
    };

    const viewEditredirect = () => {
        setOptionsOpen(false);
    };

    const zipData = () => {
        setOptionsOpen(false);
    };

    return (
        <div className="qpp-u-padding--12">
            <button
                className="qpp-c-button"
                data-testid="popover-tester"
                onClick={(e) => handleOpen(e)}
            >
                Open Popover
            </button>
            <Popover
                optionsOpen={optionsOpen}
                anchorEl={anchorEl}
                onClose={onClose}
                canEdit={true}
                editViewSelectOptionProps={{
                    label: "View",
                    toImplementFunction: viewEditredirect,
                    dataTestId: `edit-measure-1`,
                }}
                otherSelectOptionProps={[
                    {
                        label: "Export",
                        toImplementFunction: zipData,
                        dataTestId: `export-measure-1`,
                    },
                ]}
            />
        </div>
    );
};

describe("MadiePopover", () => {
    test("Popover renders", async () => {
        const { findByTestId, queryByText } = await render(<PopoverTester />);
        const result = await findByTestId("popover-tester");
        fireEvent.click(result);
        expect(queryByText("View")).toBeVisible();
        expect(queryByText("Export")).toBeVisible();
    });

    test("Popover disappears on clicking popover options", async () => {
        const { findByTestId, queryByText } = await render(<PopoverTester />);
        const result = await findByTestId("popover-tester");
        fireEvent.click(result);
        expect(queryByText("View")).toBeVisible();
        expect(queryByText("Export")).toBeVisible();
        fireEvent.click(queryByText("View"));
        expect(queryByText("View")).not.toBeVisible();
    });
});
