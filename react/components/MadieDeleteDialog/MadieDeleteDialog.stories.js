import React, { useState } from "react";
import MadieDeleteDialog from "./index";
import Button from "../Button";

export default {
    title: "MadieDeleteDialog",
    component: MadieDeleteDialog,
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16" style={{ width: 300 }}>
        {children}
    </div>
);
export const DeleteDialog = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const onContinue = () => setOpen(false);

    return (
        <Wrapper>
            <Button variant="cyan" onClick={() => setOpen(true)}>
                open Dialog
            </Button>
            <MadieDeleteDialog
                open={open}
                onContinue={onContinue}
                onClose={onClose}
            />
        </Wrapper>
    );
};

export const DeleteDialogNoWarning = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const onContinue = () => setOpen(false);

    return (
        <Wrapper>
            <Button variant="cyan" onClick={() => setOpen(true)}>
                open Dialog
            </Button>
            <MadieDeleteDialog
                open={open}
                onContinue={onContinue}
                onClose={onClose}
                hideWarning={true}
            />
        </Wrapper>
    );
};
