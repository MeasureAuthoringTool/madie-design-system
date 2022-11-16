import React from "react";
import PropTypes from "prop-types";
import ErrorIcon from "@mui/icons-material/Error";
import MadieDialog from "../MadieDialog";

const MadieDeleteDialog = ({
    open,
    onClose,
    onContinue,
    ...otherDialogProps
}) => (
    <MadieDialog
        title={otherDialogProps.dialogTitle}
        dialogProps={{
            open: open,
            onClose,
            "data-testid": "delete-dialog",
        }}
        cancelButtonProps={{
            variant: "secondary",
            onClick: onClose,
            cancelText: "Cancel",
            "data-testid": "delete-dialog-cancel-button",
        }}
        continueButtonProps={{
            variant: "danger-primary",
            type: "submit",
            "data-testid": "delete-dialog-continue-button",
            continueText: "Yes, Delete",
            onClick: onContinue,
        }}
    >
        <div id="delete-dialog-body">
            <section className="dialog-warning-body">
                <p>
                    Are you sure you want to delete{" "}
                    <span className="strong">{otherDialogProps.name}</span>?
                </p>
            </section>
            <section className="dialog-warning-action">
                <ErrorIcon />
                <p>This Action cannot be undone.</p>
            </section>
        </div>
    </MadieDialog>
);

MadieDeleteDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onContinue: PropTypes.func,
};

export default MadieDeleteDialog;