import React, { useState } from "react";
import Popover from "./index";

export default {
    title: "Popover",
    component: Popover,
};

export const PopOver = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [optionsOpen, setOptionsOpen] = useState(false);

    const onClose = () => setOptionsOpen(false);

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
        setOptionsOpen(true);
    };

    const viewEditredirect = () => setOptionsOpen(false);

    const zipData = () => setOptionsOpen(false);

    return (
        <div className="qpp-u-padding--12">
            <button className="qpp-c-button" onClick={handleOpen}>
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
                    dataTestId: "edit-measure-1",
                }}
                otherSelectOptionProps={[
                    {
                        label: "Export",
                        toImplementFunction: zipData,
                        dataTestId: "export-measure-1",
                    },
                ]}
            />
        </div>
    );
};
