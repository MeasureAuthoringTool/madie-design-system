import PropTypes from "prop-types";
import { Tabs as MuiTabs } from "@mui/material";
import React from "react";

const typeA = {
    "& .MuiTabs-flexContainer": {
        columnGap: "4px !important",
    },
    "& .MuiTabs-indicator": {
        display: "none !important",
    },
};

const typeB = {
    backgroundColor: "#FFF",
    color: "#515151",
    "& .MuiTabs-indicator": {
        backgroundColor: "#209FA6",
        height: "6px",
    },
};

const typeC = {
    color: "333",
    "& .MuiTabs-indicator": {
        backgroundColor: "#209FA6",
        height: "100%",
        width: "6px !important",
        left: 0,
    },
};

const typeD = {
    backgroundColor: "#FFF",
    color: "#515151",
    "& .MuiTabs-indicator": {
        backgroundColor: "#209FA6",
        height: "6px",
        top: 0,
    },
};

const Tabs = ({ type, size, ...rest }) => {
    const baseStyle = {
        outline: "none",
        fontFamily: "Rubik, sans Sarif",
        fontWeight: 400,
        lineHeight: 19,
        backgroundColor: "transparent",
        "& .Mui-selected": {
            outline: "none",
            fontWeight: 500,
            color: "#333 !important",
            backgroundColor: "#fff",
        },
    };
    const style = ((type) => {
        if (type === "A") {
            return { ...baseStyle, ...typeA };
        }
        if (type === "B") {
            return { ...baseStyle, ...typeB };
        }
        if (type === "C") {
            return { ...baseStyle, ...typeC };
        }
        if (type === "D") {
            return { ...baseStyle, ...typeD };
        }
    })(type);
    return <MuiTabs disableRipple sx={style} {...rest} />;
};

Tabs.propTypes = {
    orientatin: PropTypes.string,
    type: PropTypes.oneOf(["A", "B", "C", "D"]),
    size: PropTypes.oneOf(["standard", "large"]),
    ariaLabel: PropTypes.string,
    selected: PropTypes.string,
    defaultSelectedId: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

Tabs.defaultProps = {
    orientation: "horizontal",
    type: "A",
    size: "standard",
    selected: null,
    defaultSelectedId: null,
    onChange: null,
    children: null,
};

export default Tabs;
