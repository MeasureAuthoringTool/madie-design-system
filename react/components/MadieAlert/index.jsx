import React, { useEffect, useState } from "react";

import ErrorIcon from "@mui/icons-material/Error"; // warning
import InfoIcon from "@mui/icons-material/Info"; // info
import CancelIcon from "@mui/icons-material/Cancel"; // error
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; //success
import ContentCopyIcon from "@mui/icons-material/ContentCopy"; //copy
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Toast from "../Toast/index";
import classNames from "classnames";
import PropTypes from "prop-types";

// warning, info, error, success
const MadieAlert = ({
    type = "warning",
    visible = true,
    content,
    canClose = true,
    minimizeAlerts = false, // pass the minimizeAlerts featureflag for now, since it will be standard later
    alertProps, // props to pass to outer component
    closeButtonProps, // props to pass to close button
    copyButton,
}) => {
    const [copyText, setCopyText] = useState("");
    const [toastOpen, setToastOpen] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [totalErrors, setTotalErrors] = useState(0);

    const copyButtonBuilder = (content) => {
        const traversal = (contentNode, parentNode = true) => {
            if (!contentNode) return "";
            let result = contentNode.type === "ul" ? "\n" : "";
            if (Array.isArray(contentNode.props?.children)) {
                contentNode.props.children.forEach((child, index) => {
                    result += traversal(child, false);
                    if (
                        (parentNode && index == 1) ||
                        contentNode.type === "ul"
                    ) {
                        result += "\n";
                    }
                });
            } else if (typeof contentNode.props?.children === "object") {
                result += traversal(contentNode.props.children, false);
            } else if (
                typeof contentNode.props?.children === "string" ||
                typeof contentNode.props?.children === "number"
            ) {
                result += contentNode.props.children.toString();
            } else if (
                typeof contentNode === "string" ||
                typeof contentNode === "number"
            ) {
                result += contentNode.toString();
            }
            return result;
        };
        return traversal(content, false).trim();
    };

    useEffect(() => {
        if (content) {
            if(copyButton){
                setCopyText(copyButtonBuilder(content));
            }
            setTotalErrors(countUlLiChildren(content))
        }
        setMinimized(false);
    }, [content]);
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
    
    // Function to count children of ul and li elements in content
    const countUlLiChildren = (element) => {
      const counts = { ul: 0, li: 0 };
      
      const traverse = (el) => {
        if (!el || typeof el !== 'object') return;
        
        // Count if element is ul or li
        if (el.type === 'ul' || el.type === 'li') {
          const children = el.props?.children;
          const childCount = Array.isArray(children) ? children.length : (children ? 1 : 0);
          counts[el.type] += childCount;
        }
        
        // Recursively traverse children
        const children = el.props?.children;
        if (Array.isArray(children)) {
          children.forEach(traverse);
        } else if (children && typeof children === 'object') {
          traverse(children);
        }
      };
      
      traverse(element);
      
      return counts.li>counts.ul? counts.li:counts.ul;
    };

    return (
        <div> 
        {visible && !minimized && (
            <div className={alertClass} {...alertProps}>
                <Toast
                    toastKey="copy-success-toast"
                    data-testid="copy-success"
                    toastType="success"
                    open={toastOpen}
                    message="Copied to clipboard!"
                    onClose={() => {
                        setToastOpen(false);
                    }}
                    autoHideDuration={1500}
                />
                <Icon className={iconClass} />
                <div id="content">{content && content}</div>
                {
                    // minimizeAlerts is a feature flag for now, since it will be standard later
                }
                {minimizeAlerts && (
                    <Tooltip title={"Minimize"} arrow>
                        <IconButton sx={{
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
                            >
                            <FullscreenExitRoundedIcon 
                             onClick={(e) => {
                                e.preventDefault();
                                setMinimized(true);
                            }}
                                sx={{ color: "#242424" }}
                            />
                        </IconButton>
                    </Tooltip>
                )}
                {copyButton && (
                    <Tooltip
                        data-testid="copy-button-tooltip"
                        title={"Copy"}
                        arrow
                    >
                        <IconButton
                            sx={{
                                marginLeft: "auto",
                                ...(!minimizeAlerts && {
                                    "&:after": {
                                        content: `''`,
                                        position: "absolute",
                                        left: "0px",
                                        width: "1px",
                                        height: "40px",
                                        backgroundColor: "#B0B0B0",
                                        pointerEvents: "none",
                                    }
                                })
                            }}
                        >
                            <ContentCopyIcon
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigator.clipboard.writeText(copyText);
                                    setToastOpen(true);
                                }}
                                sx={{ color: "#242424" }}
                            />
                        </IconButton>
                    </Tooltip>
                )}

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
    }
    {minimized && (
      <div 
        style={{
          position: "absolute",
          right: "32px",
          top: "6px"
        }}
        onClick={(e)=>{e.preventDefault();
                        setMinimized(false)}}
      >
        <WarningRoundedIcon sx={{ color: "yellow" }}/>
        <span style={{ color: "white", fontSize: "16px", }}>Display Alerts {totalErrors>0?`(${totalErrors})`:""}</span>
      </div>
    )}
    </div>
    );
};

MadieAlert.propTypes = {
    type: PropTypes.string,
    visible: PropTypes.bool,
    content: PropTypes.node,
    canClose: PropTypes.bool,
    alertProps: PropTypes.object,
    closeButtonProps: PropTypes.object,
    copyButton: PropTypes.bool,
    minimizeAlerts: PropTypes.bool,
};
MadieAlert.defaultProps = {
    copyButton: false,
    minimizeAlerts: false,
};

export default MadieAlert;
