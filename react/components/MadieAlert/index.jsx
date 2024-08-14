import React, {useEffect} from "react";

import ErrorIcon from "@mui/icons-material/Error"; // warning
import InfoIcon from "@mui/icons-material/Info"; // info
import CancelIcon from "@mui/icons-material/Cancel"; // error
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; //success
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; //copy

import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import classNames from "classnames";
import PropTypes from "prop-types";

// warning, info, error, success
const MadieAlert = ({
    type = "warning",
    visible = true,
    content,
    canClose = true,
    alertProps, // props to pass to outer component
    closeButtonProps, // props to pass to close button
    copyButton

}) => {
    const copyButtonBuilder = (content) => {
        const traversal = (contentNode, parentNode = true) => {
            if (!contentNode) return '';
            let result = '';

            if (Array.isArray(contentNode.props?.children )) {
                contentNode.props.children.forEach((child, index) => {
                    result += traversal(child, false);
                    if (parentNode && index ==1) {
                        result += '\n';
                    }else if(contentNode.type ==="ul" ){
                        result = '\n'+result+'\n'
                    }
                });
            } else if(typeof contentNode.props?.children ==='object'){
                result += traversal(contentNode.props.children, false);
            } else if (typeof contentNode.props?.children === 'string' || typeof contentNode.props?.children === 'number') {
                result += contentNode.props.children.toString();
            } else if (typeof contentNode === 'string' || typeof contentNode === 'number') {
                result += contentNode.toString();
            } 
            return result;
        };
        return traversal(content).trim();
    };

    useEffect(() => {
        if(content && copyButton){
            copyText=copyButtonBuilder(content)
        }
    }, [content]);
    // we have four states to render for
    const typeSelect = {
        warning: ErrorIcon,
        info: InfoIcon,
        error: CancelIcon,
        success: CheckCircleIcon,
    };
    let copyText = ""
    const Icon = typeSelect[type];

    const alertClass = classNames("madie-alert", type);
    const iconClass = classNames("alert-icon", type);

    return (
        visible && (
            <div className={alertClass} {...alertProps}>
                <Icon className={iconClass} />
                <div id="content">{content && content}</div>
                {copyButton && (
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
                    
                >
                    <ContentCopyIcon onClick={(e)=>{
                        e.preventDefault()
                        navigator.clipboard.writeText(copyText);
                    }} sx={{ color: "#242424" }} />
                </IconButton>
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
    );
};

MadieAlert.propTypes = {
    type: PropTypes.string,
    visible: PropTypes.bool,
    content: PropTypes.node,
    canClose: PropTypes.bool,
    alertProps: PropTypes.object,
    closeButtonProps: PropTypes.object,
    copyButton:PropTypes.bool,
};
MadieAlert.defaultProps = {
    copyButton:false
};

export default MadieAlert;
