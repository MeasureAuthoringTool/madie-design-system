import React, { useEffect, useState, useMemo } from "react";

import ErrorIcon from "@mui/icons-material/Error"; // warning
import InfoIcon from "@mui/icons-material/Info"; // info
import CancelIcon from "@mui/icons-material/Cancel"; // error
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; //success
import ContentCopyIcon from "@mui/icons-material/ContentCopy"; //copy
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Toast from "../Toast/index";
import classNames from "classnames";
import PropTypes from "prop-types";

// Define icon mapping outside component to avoid recreation on each render
const typeToIconMap = {
    warning: ErrorIcon,
    info: InfoIcon,
    error: CancelIcon,
    success: CheckCircleIcon,
};

// Common button styles
const buttonBaseSx = {
    marginLeft: "auto",
};

const buttonWithDividerSx = {
    ...buttonBaseSx,
    "&:after": {
        content: `''`,
        position: "absolute",
        left: "0px",
        width: "1px",
        height: "40px",
        backgroundColor: "#B0B0B0",
        pointerEvents: "none",
    },
};

// Extract alert content processing to a separate function
const processContent = (content) => {
    // Counts errors/warnings in ul/li elements
    const countUlLiChildren = (element) => {
        const counts = { ul: 0, li: 0 };

        const traverse = (el) => {
            if (!el || typeof el !== "object") return;

            if (el.type === "ul" || el.type === "li") {
                const children = el.props?.children;
                const childCount = Array.isArray(children)
                    ? children.length
                    : children
                    ? 1
                    : 0;
                counts[el.type] += childCount;
            }

            const children = el.props?.children;
            if (Array.isArray(children)) {
                children.forEach(traverse);
            } else if (children && typeof children === "object") {
                traverse(children);
            }
        };

        traverse(element);

        return counts.li > counts.ul ? counts.li : counts.ul;
    };

    // Converts content to text for copying - improved to avoid unwanted characters
    const buildCopyText = (contentNode, parentNode = true) => {
        if (!contentNode) return "";

        // Initialize result string
        let result = "";

        // Handle specific node types that need special formatting
        if (contentNode.type === "ul") {
            // Start ul with a newline
            result = "\n";
        }

        // Process children based on their type
        if (Array.isArray(contentNode.props?.children)) {
            contentNode.props.children.forEach((child, index) => {
                const childText = buildCopyText(child, false);
                // Only add non-empty text
                if (childText.trim()) {
                    result += childText;

                    // Add line breaks after certain elements
                    if (
                        (parentNode && index === 1) ||
                        contentNode.type === "ul"
                    ) {
                        result += "\n";
                    }
                }
            });
        } else if (typeof contentNode.props?.children === "object") {
            result += buildCopyText(contentNode.props.children, false);
        } else if (
            typeof contentNode.props?.children === "string" ||
            typeof contentNode.props?.children === "number"
        ) {
            // Clean the string by trimming and normalizing whitespace
            result += contentNode.props.children
                .toString()
                .replace(/\s+/g, " ")
                .trim();
        } else if (
            typeof contentNode === "string" ||
            typeof contentNode === "number"
        ) {
            // Clean the string by trimming and normalizing whitespace
            result += contentNode.toString().replace(/\s+/g, " ").trim();
        }

        return result;
    };

    // Process content and ensure we trim the final result
    const rawText = buildCopyText(content, false);
    return {
        errorCount: countUlLiChildren(content),
        copyText: rawText
            .replace(/\s+\n/g, "\n")
            .replace(/\n\s+/g, "\n")
            .trim(),
    };
};

// Define ActionButton as a separate component outside MadieAlert
const ActionButton = ({ tooltip, onClick, icon, testId, sx }) => (
    <Tooltip title={tooltip} data-testid={`${testId}-tooltip`} arrow>
        <IconButton onClick={onClick} sx={sx} data-testid={testId}>
            {icon}
        </IconButton>
    </Tooltip>
);

// Add PropTypes for ActionButton
ActionButton.propTypes = {
    tooltip: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    testId: PropTypes.string.isRequired,
    sx: PropTypes.object,
};

const MadieAlert = ({
    type = "warning",
    visible = true,
    content,
    canClose = true,
    minimizeAlerts = false,
    alertProps,
    closeButtonProps,
    copyButton,
    alerts = null,
}) => {
    // Consolidate related state
    const [state, setState] = useState({
        toastOpen: false,
        copyText: "",
        minimizedAlerts: {},
        individualErrors: {},
    });

    // Create alias for readability
    const { toastOpen, copyText, minimizedAlerts, individualErrors } = state;

    // Use a single update function
    const updateState = (updates) => {
        setState((prev) => ({ ...prev, ...updates }));
    };

    // Prepare alerts array once
    const alertsArray = useMemo(() => {
        return (
            alerts || [
                {
                    type,
                    visible,
                    content,
                    canClose,
                    alertProps,
                    closeButtonProps,
                    copyButton,
                },
            ]
        );
    }, [
        alerts,
        type,
        visible,
        content,
        canClose,
        alertProps,
        closeButtonProps,
        copyButton,
    ]);

    // Process all alerts content once
    useEffect(() => {
        const newIndividualErrors = {};
        let totalCopyText = "";

        alertsArray.forEach((alert, index) => {
            if (alert.content && alert.visible !== false) {
                const processed = processContent(alert.content);
                newIndividualErrors[index] = processed.errorCount;

                if (alert.copyButton) {
                    totalCopyText += processed.copyText + "\n\n";
                }
            }
        });

        updateState({
            individualErrors: newIndividualErrors,
            copyText: totalCopyText.trim(),
        });
    }, [alertsArray]);

    // Utility functions for managing minimized state
    const minimizeAlert = (index) => {
        updateState({
            minimizedAlerts: { ...minimizedAlerts, [index]: true },
        });
    };

    const restoreAllAlerts = () => {
        updateState({ minimizedAlerts: {} });
    };

    // Calculate minimized alerts info
    const minimizedIndices = Object.keys(minimizedAlerts)
        .filter((key) => minimizedAlerts[key])
        .map((key) => parseInt(key));

    const totalMinimizedErrors = minimizedIndices.reduce(
        (sum, index) => sum + (individualErrors[index] || 0),
        0
    );

    // Render alert content
    const renderAlert = (alert, index) => {
        const {
            type = "warning",
            visible = true,
            content,
            canClose = true,
            alertProps = {},
            closeButtonProps = {},
            copyButton = false,
        } = alert;

        if (!visible || minimizedAlerts[index]) return null;

        const Icon = typeToIconMap[type];
        const alertClass = classNames("madie-alert", type);

        return (
            <div key={index} className={alertClass} {...alertProps}>
                <Icon className={classNames("alert-icon", type)} />
                <div id="content" data-alert-index={index}>
                    {content}
                </div>

                {minimizeAlerts && (
                    <ActionButton
                        tooltip="Minimize"
                        onClick={(e) => {
                            e.preventDefault();
                            minimizeAlert(index);
                        }}
                        icon={
                            <FullscreenExitRoundedIcon
                                sx={{ color: "#242424" }}
                            />
                        }
                        testId={`minimize-button-${index}`}
                        sx={buttonWithDividerSx}
                    />
                )}

                {copyButton && (
                    <ActionButton
                        tooltip="Copy"
                        onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText(
                                copyButton
                                    ? processContent(content).copyText
                                    : copyText
                            );
                            updateState({ toastOpen: true });
                        }}
                        icon={<ContentCopyIcon sx={{ color: "#242424" }} />}
                        testId="copy-button"
                        sx={
                            !minimizeAlerts ? buttonWithDividerSx : buttonBaseSx
                        }
                    />
                )}

                {canClose && (
                    <IconButton sx={buttonWithDividerSx} {...closeButtonProps}>
                        <ClearIcon sx={{ color: "#242424" }} />
                    </IconButton>
                )}
            </div>
        );
    };

    return (
        <div>
            <Toast
                toastKey="copy-success-toast"
                data-testid="copy-success"
                toastType="success"
                open={toastOpen}
                message="Copied to clipboard!"
                onClose={() => updateState({ toastOpen: false })}
                autoHideDuration={1500}
            />

            {/* Render visible alerts */}
            {alertsArray.map((alert, index) => renderAlert(alert, index))}

            {/* Show minimized indicator if any alerts are minimized */}
            {minimizedIndices.length > 0 && (
                <div
                    style={{
                        position: "absolute",
                        right: "32px",
                        top: "10px",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                    data-testid="minimized-alert"
                    onClick={(e) => {
                        e.preventDefault();
                        restoreAllAlerts();
                    }}
                >
                    <WarningRoundedIcon
                        sx={{ color: "yellow", marginRight: "5px" }}
                    />
                    <span
                        data-testid="minimized-alert-text"
                        style={{ color: "white", fontSize: "16px" }}
                    >
                        Display Alerts{" "}
                        {totalMinimizedErrors > 0
                            ? `(${totalMinimizedErrors})`
                            : ""}
                    </span>
                </div>
            )}
        </div>
    );
};

// PropTypes definition
MadieAlert.propTypes = {
    type: PropTypes.string,
    visible: PropTypes.bool,
    content: PropTypes.node,
    canClose: PropTypes.bool,
    alertProps: PropTypes.object,
    closeButtonProps: PropTypes.object,
    copyButton: PropTypes.bool,
    minimizeAlerts: PropTypes.bool,
    alerts: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            visible: PropTypes.bool,
            content: PropTypes.node,
            canClose: PropTypes.bool,
            alertProps: PropTypes.object,
            closeButtonProps: PropTypes.object,
            copyButton: PropTypes.bool,
        })
    ),
};

MadieAlert.defaultProps = {
    copyButton: false,
    minimizeAlerts: false,
    alerts: null,
};

export default MadieAlert;
