import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import CloseIcon from "@mui/icons-material/Close";
import {
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle,
    Divider,
    IconButton,
    Typography,
    Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import Button from "../Button";
import Popover from "../Popover";

const DraggablePaper = (props) => {
    const nodeRef = useRef(null);
    const { children, ...rest } = props;

    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'} // Prevent dragging when interacting with content
            nodeRef={nodeRef}
        >
            <div ref={nodeRef} {...rest} style={{ backgroundColor: "#fff" }}>
                {children}
            </div>
        </Draggable>
    );
};

const Actions = ({ onClose, cancelButtonProps, continueButtonProps }) => {
    const { cancelText, cancelIcon, ...otherCancelButtonProps } =
        cancelButtonProps;
    const {
        continueText,
        continueIcon,
        popoverOptions,
        disabled,
        tooltipText,
        ...otherContinueButtonProps
    } = continueButtonProps;
    const [anchorEl, setAnchorEl] = useState(null);

    const openPopOverMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const closePopOverMenu = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return (
        <>
            <Divider sx={{ borderColor: "#8c8c8c" }} />
            <DialogActions
                sx={{
                    padding: "16px",
                    "& >:not(:first-of-type)": {
                        marginLeft: "16px",
                    },
                }}
            >
                {cancelButtonProps && (
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
                )}
                {popoverOptions ? (
                    <>
                        <Button
                            className="qpp-c-button--cyan"
                            onClick={openPopOverMenu}
                            style={{ marginTop: 0 }}
                            {...otherContinueButtonProps}
                        >
                            <span>
                                {continueText}
                                {continueIcon}
                            </span>
                        </Button>
                        <Popover
                            optionsOpen={open}
                            anchorEl={anchorEl}
                            handleClose={closePopOverMenu}
                            additionalSelectOptionProps={popoverOptions}
                        />
                    </>
                ) : continueButtonProps ? (
                    <Tooltip title={disabled && tooltipText ? tooltipText : ""}>
                        <span>
                            <Button
                                className="qpp-c-button--cyan"
                                type="submit"
                                style={{ marginTop: 0 }}
                                {...otherContinueButtonProps}
                                disabled={disabled}
                            >
                                <span>
                                    {continueText}
                                    {continueIcon}
                                </span>
                            </Button>
                        </span>
                    </Tooltip>
                ) : null}
            </DialogActions>
        </>
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
    maxWidth = "sm",
    children,
}) => {
    const {
        open,
        onClose,
        onSubmit,
        showRequiredFieldMessage,
        ...otherDialogProps
    } = dialogProps;

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
            maxWidth={maxWidth}
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
                    {(cancelButtonProps || continueButtonProps) && (
                        <Actions
                            onClose={onClose}
                            continueButtonProps={continueButtonProps}
                            cancelButtonProps={cancelButtonProps}
                        />
                    )}
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
                    {(cancelButtonProps || continueButtonProps) && (
                        <Actions
                            onClose={onClose}
                            continueButtonProps={continueButtonProps}
                            cancelButtonProps={cancelButtonProps}
                        />
                    )}
                </>
            )}
        </Dialog>
    );
};

export default MadieDialog;
