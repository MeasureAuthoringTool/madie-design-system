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

    const [openDiscardDialog, setOpenDiscardDialog] = useState(false);
    const onDiscardDialogClose = () => {
        setOpenDiscardDialog(false);
    };
    const onDiscardDialogContinue = () => {
        setOpenDiscardDialog(false);
    };

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const onDeleteDialogClose = () => {
        setOpenDeleteDialog(false);
    };
    const onDeleteDialogContinue = () => {
        setOpenDeleteDialog(false);
    };

    return (
        <div className="qpp-u-padding--16" style={{ width: 300 }}>
            <p>
                <Button variant="cyan" onClick={() => setOpen(true)}>
                    open Confirm Dialog
                </Button>
            </p>
            <p>
                <Button
                    variant="cyan"
                    onClick={() => setOpenDiscardDialog(true)}
                >
                    open Discard Dialog
                </Button>
            </p>
            <p>
                <Button
                    variant="cyan"
                    onClick={() => {
                        setOpenDeleteDialog(true);
                    }}
                >
                    open Delete Dialog
                </Button>
            </p>
            <MadieConfirmDialog
                open={open}
                onContinue={onContinue}
                onClose={onClose}
                warning="You are about to Sign Out from UMLS. You will need to enter your UMLS API key to log back in."
                dialogTitle="Are you sure?"
                name="log out of UMLS"
                action="confirm"
            >
                <p>
                    Are you sure you want to{" "}
                    <span className="strong">Delete</span>?
                </p>
            </MadieConfirmDialog>
            <MadieConfirmDialog
                open={openDiscardDialog}
                onContinue={onDiscardDialogContinue}
                onClose={onDiscardDialogClose}
                warning="This Action cannot be undone."
                dialogTitle="Discard Changes"
                name="discard your changes"
                action="discard"
                continueText="Yes, Discard All Changes"
                cancelText="No, Keep Working"
            />
            <MadieConfirmDialog
                open={openDeleteDialog}
                onContinue={onDeleteDialogContinue}
                onClose={onDeleteDialogClose}
                warning="This Action cannot be undone."
                dialogTitle="Are You Sure"
                name="delete this Definition"
                action="delete"
                continueText="Yes, Delete"
            />
        </div>
    );
};
