import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable"
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


const DraggablePaper = (props) => {
    const { children, ...rest } = props;

    return (
        <Draggable
        
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'} // Prevent dragging when interacting with content
        >
            <div style={{backgroundColor:"#fff"}} {...rest}>
                {children}
            </div>
        </Draggable>
    );
};

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
    required,
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
            PaperComponent={DraggablePaper}
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
                    id="draggable-dialog-title"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "24px 32px",
                            cursor: "move",
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
                        {required && (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexGrow: 1,
                                    alignSelf: "center",
                                    marginBottom: "-4px",
                                    marginLeft: "15px",
                                }}
                            >
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 400,
                                        fontFamily: "Rubik",
                                        color: "#515151",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "#D92F2F",
                                            marginRight: 3,
                                        }}
                                    >
                                        *
                                    </span>
                                    Indicates required field
                                </Typography>
                            </Box>
                        )}
                        <div>
                            <IconButton onClick={onClose} aria-label="Close">
                                <CloseIcon
                                    sx={{
                                        color: "#D92F2F",
                                    }}
                                    data-testid="close-button"
                                />
                            </IconButton>
                        </div>
                    </Box>
                    <Divider sx={{ borderColor: "#8c8c8c" }} />
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
                    <Divider sx={{ borderColor: "#8c8c8c" }} />
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
                            <IconButton onClick={onClose} aria-label="Close">
                                <CloseIcon
                                    sx={{
                                        color: "#D92F2F",
                                    }}
                                    data-testid="close-button"
                                />
                            </IconButton>
                        </div>
                    </Box>
                    <Divider sx={{ borderColor: "#8c8c8c" }} />
                    <DialogContent sx={{ padding: "32px" }}>
                        {children}
                    </DialogContent>
                    <Divider sx={{ borderColor: "#8c8c8c" }} />
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
    required: PropTypes.bool,
    form: PropTypes.bool,
    title: PropTypes.string,
    dialogProps: PropTypes.object,
    cancelButtonProps: PropTypes.object,
    continueButtonProps: PropTypes.object,
    children: PropTypes.object,
};

DraggablePaper.propTypes ={
    children: PropTypes.object
}

export default MadieDialog;
