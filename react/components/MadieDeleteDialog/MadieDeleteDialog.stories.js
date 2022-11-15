import React, { useState } from "react";
import PropTypes from "prop-types";
import { withKnobs } from "@storybook/addon-knobs";
import MadieDeleteDialog from "./index";
import Button from "../Button";
export default {
    title: "MadieDeleteDialog",
    component: MadieDeleteDialog,
    decorators: [withKnobs],
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16" style={{ width: 300 }}>
        {children}
    </div>
);
Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export const DeleteDialog = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
    };
    const onContinue = () => {
        setOpen(false);
    };

    return (
        <div className="qpp-u-padding--16" style={{ width: 300 }}>
            <Button variant="cyan" onClick={() => setOpen(true)}>
                open Dialog
            </Button>
            <MadieDeleteDialog
                open={open}
                onContinue={onContinue}
                onClose={onClose}
            />
        </div>
    );
};
