import React from "react";

import ErrorIcon from "@mui/icons-material/Error"; // warning
import InfoIcon from "@mui/icons-material/Info"; // info
import CancelIcon from "@mui/icons-material/Cancel"; // error
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; //success

import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import classNames from "classnames";
// warning, info, error, success
const MadieAlert = ({
    type = "warning",
    visible = true,
    content,
    canClose = true,
    alertProps, // props to pass to outer component
    closeButtonProps, // props to pass to close button
}) => {
    // we have four states to render for
    const typeSelect = {
        warning: ErrorIcon,
        info: InfoIcon,
        error: CancelIcon,
        success: CheckCircleIcon,
    };
    const Icon = typeSelect[type];

    const alertClass = classNames("madie-alert", type);
    const iconClass = classNames("alert-icon", type);

    return (
        visible && (
            <div className={alertClass} {...alertProps}>
                <Icon className={iconClass} />
                <div id="content">{content && content}</div>
                {canClose && (
                    <IconButton
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
        )
    );
};

export default MadieAlert;
