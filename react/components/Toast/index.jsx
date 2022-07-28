import React from "react";
import PropTypes from "prop-types";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Toast = ({
    open,
    message,
    toastType, // 'danger | success, more later when mockups come out
    autoHideDuration,
    onClose,
    testId,
    toastKey,
    ...rest
}) => {
    const dangerColor = "#D92F2F";
    const successColor = "#4d7e23";
    // we can map our colors and icons to make this reusable for multiple info types.
    const colorMap = {
        danger: dangerColor,
        success: successColor,
    };
    const iconMap = {
        danger: ErrorOutlineIcon,
        success: CheckCircleOutlineIcon,
    };
    const selectedColor = colorMap[toastType];
    const SelectedIcon = iconMap[toastType];

    const Message = (
        <div className="messageCont">
            <div>
                <div className="errorCont">
                    {SelectedIcon && <SelectedIcon className="leftIcon" />}
                </div>
                <p className="messageText" data-testid={testId}>
                    {message}
                </p>
            </div>
            <div style={{ display: "block" }}>
                <IconButton
                    className="icon-button"
                    aria-label="close"
                    color="inherit"
                    sx={{ p: 0 }}
                    onClick={onClose}
                    data-testId="close-error-button"
                >
                    <CloseIcon />
                </IconButton>
            </div>
        </div>
    );
    return (
        <Snackbar
            key={toastKey ? toastKey : undefined}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            sx={{
                overflow: "hidden",
                color: selectedColor,
                borderRadius: 1,
                "& .MuiPaper-root": {
                    backgroundColor: "#fff",
                    padding: 0,
                    color: selectedColor,
                },
                "& .MuiSvgIcon-root": {
                    color: "#242424",
                },
                "& .MuiSnackbarContent-message": {
                    padding: 0,
                    flexGrow: 1,
                    ".messageCont": {
                        display: "flex",
                        flexDirection: "row",
                        flexGrow: 1,
                        justifyContent: "space-between",
                        div: {
                            display: "flex",
                            ".messageText": {
                                m: 0,
                                p: 2.375,
                                fontFamily: "Rubik",
                                fontWeight: 500,
                                fontSize: 14,
                            },
                            ".errorCont": {
                                backgroundColor: selectedColor,
                                ".leftIcon": {
                                    m: 2,
                                    color: "#fff",
                                },
                            },
                            ".icon-button": {
                                m: 2,
                                "&. MuiSvgIcon-root": {
                                    color: "#242424",
                                },
                            },
                        },
                    },
                    "& .MuiSvgIcon-root": {
                        color: "#242424",
                    },
                },
            }}
            autoHideDuration={autoHideDuration}
            open={open}
            onClose={onClose}
            message={message ? Message : undefined}
            {...rest}
        />
    );
};

Toast.propTypes = {
    open: PropTypes.bool,
    message: PropTypes.string,
    toastType: PropTypes.string, // 'danger | success, more later when mockups come out
    autoHideDuration: PropTypes.number,
    onClose: PropTypes.func,
    testId: PropTypes.string,
    toastKey: PropTypes.string,
};

export default Toast;
