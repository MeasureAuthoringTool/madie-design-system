import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import MadieDialog from "../MadieDialog";

const MadieDiscardDialog = ({ open, onClose, onContinue }) => (
    <MadieDialog
        title="Discard Changes?"
        dialogProps={{
            open: open,
            onClose,
            "data-testid": "discard-dialog",
        }}
        cancelButtonProps={{
            variant: "secondary",
            onClick: onClose,
            cancelText: "No, Keep Working",
            "data-testid": "discard-dialog-cancel-button",
        }}
        continueButtonProps={{
            variant: "primary",
            type: "submit",
            "data-testid": "discard-dialog-continue-button",
            continueText: "Yes, Discard All Changes",
            onClick: onContinue,
        }}
    >
        <div id="discard-changes-dialog-body">
            <section className="dialog-warning-body">
                <p>You have unsaved changes.</p>
                <p className="strong">
                    Are you sure you want to discard your changes?
                </p>
            </section>
            <section className="dialog-warning-action">
                <ErrorIcon />
                <p>This Action cannot be undone.</p>
            </section>
        </div>
    </MadieDialog>
);

export default MadieDiscardDialog;
