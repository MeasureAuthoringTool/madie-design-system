import React from "react";

import ErrorIcon from "@mui/icons-material/Error"; // warning
import InfoIcon from "@mui/icons-material/Info"; // info
import CancelIcon from "@mui/icons-material/Cancel"; // error
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; //success

import { IconButton, Snackbar } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import classNames from "classnames";
import PropTypes from "prop-types";

// warning, info, error, success
const MadieToast = ({
    type = "warning",
    visible = true,
    content,
    canClose = true,
    onClose,
    autoHideDuration,
    toastKey,
    toastProps, // props to pass to outer component
    closeButtonProps, // props to pass to close button
    ...rest
}) => {
    // we have four states to render for
    const typeSelect = {
        warning: ErrorIcon,
        info: InfoIcon,
        error: CancelIcon,
        success: CheckCircleIcon,
    };
    const Icon = typeSelect[type];

    const toastClass = classNames("madie-toast", type);
    const iconClass = classNames("alert-icon", type);

    return (
        <Snackbar
            key={toastKey ? toastKey : undefined}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={autoHideDuration}
            open={visible}
            onClose={onClose}
            message={
                <div className={toastClass} {...toastProps}>
                    <Icon className={iconClass} />
                    <div id="content">{content && content}</div>
                    {canClose && (
                        <IconButton
                            onClick={onClose}
                            sx={{
                                marginLeft: "auto",
                                "&:after": {
                                    content: `''`,
                                    position: "absolute",
                                    left: "0px",
                                    width: "1px",
                                    height: "40px",
                                    backgroundColor: "#B0B0B0",
                                    pointerEvents: "none",
                                },
                            }}
                            {...closeButtonProps}
                        >
                            <ClearIcon sx={{ color: "#242424" }} />
                        </IconButton>
                    )}
                </div>
            }
            sx={{
                overflow: "hidden",
                borderRadius: 1,
                "& .MuiPaper-root": {
                    backgroundColor: "#fff",
                    padding: 0,
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
                        },
                    },
                },
            }}
            {...rest}
        ></Snackbar>
    );
};

MadieToast.propTypes = {
    type: PropTypes.string,
    visible: PropTypes.bool,
    content: PropTypes.node,
    canClose: PropTypes.bool,
    toastProps: PropTypes.object,
    closeButtonProps: PropTypes.object,
};

export default MadieToast;
