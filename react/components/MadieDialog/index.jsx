import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import {
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle,
    Divider,
    IconButton,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Button from "../Button";

const MadieDialog = ({
    /*
        Lets make a reusable component
        form booleon determines layout
        Dialog props: props to be passed to the Dialog itself
        {
            open: bool,
            onClose: function on close,
            onSubmit: function onSubmit,
            showRequiredFieldMessage: functional
        }
        Children: React components to be inside
        Action Props for cancel or continue:
        {
            variants listed in design system like cyan
            className
            type
            data-testid,
            onClick
            disabled
        }
    */
    form,
    title,
    dialogProps,
    cancelButtonProps,
    continueButtonProps,
    children,
}) => {
    const {
        open,
        onClose,
        onSubmit,
        showRequiredFieldMessage,
        ...otherDialogProps
    } = dialogProps;
    const { cancelText, cancelIcon, ...otherCancelButtonProps } =
        cancelButtonProps;
    const { continueText, continueIcon, ...otherContinueButonProps } =
        continueButtonProps;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{
                "& .MuiDialog-paper": {
                    position: "relative",
                    overflow: "visible",
                    marginTop: "-20px",
                },
            }}
            maxWidth="sm"
            fullWidth
            {...otherDialogProps}
        >
            {form ? (
                <form
                    data-testid="dialog-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit(e);
                    }}
                    style={{ overflow: "scroll" }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "24px 32px",
                        }}
                    >
                        <DialogTitle
                            sx={{
                                fontFamily: "Rubik",
                                fontSize: 24,
                                padding: 0,
                            }}
                        >
                            {title}
                        </DialogTitle>
                        <div>
                            <IconButton onClick={onClose} aria-label="Close">
                                <CloseIcon
                                    sx={{
                                        color: "#242424",
                                    }}
                                    data-testid="close-button"
                                />
                            </IconButton>
                        </div>
                    </Box>
                    <Divider />
                    <DialogContent sx={{ padding: "32px" }}>
                        {showRequiredFieldMessage && (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                    marginBottom: "-23px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 300,
                                        fontFamily: "Rubik",
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            color: "#D92F2F",
                                            marginRight: "3px",
                                        }}
                                    >
                                        *
                                    </Box>
                                    Indicates required field
                                </Typography>
                            </Box>
                        )}

                        {children}
                    </DialogContent>
                    <Divider />
                    <DialogActions
                        sx={{
                            padding: "16px",
                            "& >:not(:first-of-type)": {
                                marginLeft: "16px",
                            },
                        }}
                    >
                        <Button
                            variant="secondary"
                            onClick={onClose}
                            {...otherCancelButtonProps}
                        >
                            <span>
                                {cancelText}
                                {cancelIcon}
                            </span>
                        </Button>
                        <Button
                            className="qpp-c-button--cyan"
                            type="submit"
                            style={{ marginTop: 0 }}
                            {...otherContinueButonProps}
                        >
                            <span>
                                {continueText}
                                {continueIcon}
                            </span>
                        </Button>
                    </DialogActions>
                </form>
            ) : (
                <>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "24px 32px",
                        }}
                    >
                        <DialogTitle
                            sx={{
                                fontFamily: "Rubik",
                                fontSize: 24,
                                padding: 0,
                            }}
                        >
                            {title}
                        </DialogTitle>
                        <div>
                            <IconButton onClick={onClose}>
                                <CloseIcon
                                    sx={{
                                        color: "#242424",
                                    }}
                                    data-testid="close-button"
                                />
                            </IconButton>
                        </div>
                    </Box>
                    <Divider />
                    <DialogContent sx={{ padding: "32px" }}>
                        {children}
                    </DialogContent>
                    <Divider />
                    <DialogActions
                        sx={{
                            padding: "16px",
                            "& >:not(:first-of-type)": {
                                marginLeft: "16px",
                            },
                        }}
                    >
                        <Button
                            variant="secondary"
                            onClick={onClose}
                            {...otherCancelButtonProps}
                        >
                            <span>
                                {cancelText}
                                {cancelIcon}
                            </span>
                        </Button>
                        <Button
                            variant="cyan"
                            type="submit"
                            style={{ marginTop: 0 }}
                            {...otherContinueButonProps}
                        >
                            <span>
                                {continueText}
                                {continueIcon}
                            </span>
                        </Button>
                    </DialogActions>
                </>
            )}
        </Dialog>
    );
};

MadieDialog.propTypes = {
    form: PropTypes.bool,
    title: PropTypes.string,
    dialogProps: PropTypes.object,
    cancelButtonProps: PropTypes.object,
    continueButtonProps: PropTypes.object,
    children: PropTypes.object,
};

export default MadieDialog;
