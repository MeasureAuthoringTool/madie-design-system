import React from "react";
import PropTypes from "prop-types";
import ErrorIcon from "@mui/icons-material/Error";
import MadieDialog from "../MadieDialog";

const MadieConfirmDialog = ({
    open,
    onClose,
    onContinue,
    action,
    warning,
    children,
    ...otherDialogProps
}) => (
    <MadieDialog
        title={otherDialogProps.dialogTitle}
        dialogProps={{
            open: open,
            onClose,
            "data-testid": `${action}-dialog`,
        }}
        cancelButtonProps={{
            variant: "secondary",
            onClick: onClose,
            cancelText: otherDialogProps.cancelText
                ? otherDialogProps.cancelText
                : "Cancel",
            "data-testid": `${action}-dialog-cancel-button`,
        }}
        continueButtonProps={{
            variant: "danger-primary",
            type: "submit",
            "data-testid": `${action}-dialog-continue-button`,
            continueText: otherDialogProps.continueText
                ? otherDialogProps.continueText
                : "Continue",
            onClick: onContinue,
        }}
    >
        <div id="confirm-dialog-body">
            <section className="dialog-warning-body">
                {action?.includes("discard") && (
                    <p>You have unsaved changes.</p>
                )}
                {children}
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
    action: PropTypes.string,
    warning: PropTypes.string,
    children: PropTypes.any,
};

export default MadieConfirmDialog;
