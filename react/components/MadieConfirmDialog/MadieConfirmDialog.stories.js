import React, { useState } from "react";
import PropTypes from "prop-types";
import { withKnobs } from "@storybook/addon-knobs";
import MadieConfirmDialog from "./index";
import Button from "../Button";
export default {
    title: "MadieConfirmDialog",
    component: MadieConfirmDialog,
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

export const ConfirmDialog = () => {
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
            <MadieConfirmDialog
                open={open}
                onContinue={onContinue}
                onClose={onClose}
                warning="You are about to Sign Out from UMLS. You will need to enter your UMLS API key to log back in."
                dialogTitle="Are you sure?"
                name="log out of UMLS"
            />
        </div>
    );
};
