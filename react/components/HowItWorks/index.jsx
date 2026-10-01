import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import { Box, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const containerSx = {
    padding: "8px 16px",
    display: "flex",
    justifyContent: "flex-end",

    "&.how-it-works-flush-left": {
        paddingLeft: 0,
        paddingRight: 0,
        justifyContent: "flex-start",
        width: "100%",
    },

    "& .how-it-works-link": {
        background: "none",
        border: "none",
        color: "#0073c8",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: 500,
        padding: 0,
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",

        "& .how-it-works-privacy-icon": {
            fontSize: "18px",
        },

        "&:hover": {
            color: "#005a9e",
        },

        "&:focus-visible": {
            outline: "2px solid #0073c8",
            outlineOffset: "2px",
            borderRadius: "2px",
        },
    },

    "& .how-it-works-info": {
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "#e8f4fd",
        border: "1px solid #b3d7f2",
        borderLeft: "4px solid #0073c8",
        borderRadius: "4px",
        padding: "12px 16px",
        gap: "12px",
        width: "100%",
        marginBottom: "8px",
    },

    "& .how-it-works-icon": {
        color: "#0073c8",
        flexShrink: 0,
        marginTop: "2px",
    },

    "& .how-it-works-body": {
        flex: 1,
        fontSize: "14px",
        color: "#333",

        "& strong": {
            display: "block",
            marginBottom: "4px",
        },

        "& p": {
            margin: "0 0 8px 0",
        },

        "& ol": {
            margin: 0,
            paddingLeft: "20px",
            listStyleType: "decimal",

            "& li": {
                marginBottom: "2px",
                display: "list-item",
            },

            "& .how-it-works-sub-list": {
                margin: "4px 0 0",
                paddingLeft: "20px",
                listStyleType: "circle",
            },
        },
    },

    "& .how-it-works-close": {
        flexShrink: 0,
        color: "#333",
        alignSelf: "stretch",
        borderRadius: 0,
        borderLeft: "1px solid #b0b0b0",
        marginLeft: "auto",
    },

    "& .how-it-works-close-icon": {
        color: "#d92f2f",
    },
};

const HowItWorks = ({
    children,
    title = "How it Works",
    contentId = "how-it-works-content",
    align = "left",
    isOpen: isOpenProp,
    onOpenChange,
}) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isControlled = isOpenProp !== undefined;
    const isOpen = isControlled ? isOpenProp : internalOpen;
    const setIsOpen = (next) => {
        if (!isControlled) setInternalOpen(next);
        if (onOpenChange) onOpenChange(next);
    };

    const containerClass =
        align === "left"
            ? "how-it-works-container how-it-works-flush-left"
            : "how-it-works-container";

    if (!isOpen) {
        return (
            <Box
                className={containerClass}
                data-testid="how-it-works"
                sx={containerSx}
            >
                <button
                    type="button"
                    className="how-it-works-link"
                    data-testid="how-it-works-link"
                    aria-expanded={false}
                    aria-controls={contentId}
                    onClick={() => setIsOpen(true)}
                >
                    <PrivacyTipIcon className="how-it-works-privacy-icon" />
                    How it works
                </button>
            </Box>
        );
    }

    return (
        <Box
            className={containerClass}
            data-testid="how-it-works"
            sx={containerSx}
        >
            <div
                className="how-it-works-info"
                id={contentId}
                data-testid="how-it-works-content"
                role="region"
                aria-label="How it works information"
            >
                <PrivacyTipIcon className="how-it-works-icon" />
                <div className="how-it-works-body">
                    <strong>{title}</strong>
                    {children}
                </div>
                <IconButton
                    data-testid="how-it-works-close"
                    aria-label="Close how it works"
                    onClick={() => setIsOpen(false)}
                    className="how-it-works-close"
                >
                    <ClearIcon className="how-it-works-close-icon" />
                </IconButton>
            </div>
        </Box>
    );
};

HowItWorks.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    contentId: PropTypes.string,
    align: PropTypes.oneOf(["left", "right"]),
    isOpen: PropTypes.bool,
    onOpenChange: PropTypes.func,
};

export default HowItWorks;
