import React from "react";
import PropTypes from "prop-types";
import ErrorIcon from "@mui/icons-material/Error";
import MadieDialog from "../MadieDialog";

const MadieConfirmDialog = ({
    open,
    onClose,
    onContinue,
    warning,
    ...otherDialogProps
}) => (
    <MadieDialog
        title={otherDialogProps.dialogTitle}
        dialogProps={{
            open: open,
            onClose,
            "data-testid": "confirm-dialog",
        }}
        cancelButtonProps={{
            variant: "secondary",
            onClick: onClose,
            cancelText: otherDialogProps.cancelText
                ? otherDialogProps.cancelText
                : "Cancel",
            "data-testid": "confirm-dialog-cancel-button",
        }}
        continueButtonProps={{
            variant: "danger-primary",
            type: "submit",
            "data-testid": "confirm-dialog-continue-button",
            continueText: otherDialogProps.continueText
                ? otherDialogProps.continueText
                : "Continue",
            onClick: onContinue,
        }}
    >
        <div id="confirm-dialog-body">
            <section className="dialog-warning-body">
                <p>
                    Are you sure you want to{" "}
                    <span className="strong">{otherDialogProps.name}</span>?
                </p>
            </section>
            <section className="dialog-warning-action">
                <ErrorIcon />
                <p>{warning}</p>
            </section>
        </div>
    </MadieDialog>
);

MadieConfirmDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onContinue: PropTypes.func,
    warning: PropTypes.string,
};

export default MadieConfirmDialog;
