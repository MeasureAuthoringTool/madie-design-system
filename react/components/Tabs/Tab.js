import React from "react";
import PropTypes from "prop-types";
import { Tab as MuiTab } from "@mui/material";

const typeA = {
    color: "#fff",
    borderRadius: "4px 4px 0px 0px !important",
    backgroundColor: "#003366",
    "&:hover": {
        background: "#001F3D",
    },
    "&:focus": {
        background: "#125496",
        boxShadow: "0px 0px 0px 4px #CBE4FF",
    },
};
const typeB = {
    color: "#515151",
    "&:hover": {
        background: "#F2F9FF",
        color: "#242424",
    },
    "&:focus": {
        boxShadow: "0px 0px 0px 4px #CBE4FF",
        background: "#fff",
    },
};
const typeC = {
    color: "#333",
    background: "#EDEDED",
    "&:hover": {
        background: "#FAFAFA",
        color: "#515151",
    },
    "&:focus": {
        boxShadow: "0px 0px 0px 4px #CBE4FF",
        background: "#fff",
    },
};

const Tab = ({ type, orientation, size, ...rest }) => {
    const baseStyle = {
        height: size === "standard" ? "48px" : "60px",
        fontFamily: "Rubik, sans serif",
        fontWeight: 400,
        padding: size === "standard" ? "14.5px 24.5px" : "20.5px 24px",
        textTransform: "none",
        fontSize: "16px",
        alignItems: orientation === "vertical" && "flex-start",
        "& .Mui-disabled": {
            background: "#DDDDDD",
            color: "#717171",
        },
    };
    const style = ((type) => {
        if (type === "A") {
            return { ...baseStyle, ...typeA };
        }
        if (type === "B" || type === "D") {
            return { ...baseStyle, ...typeB };
        }
        if (type === "C") {
            return { ...baseStyle, ...typeC };
        }
    })(type);
    return <MuiTab tabIndex={0} sx={style} {...rest} />;
};

Tab.propTypes = {
    orientation: PropTypes.string,
    type: PropTypes.oneOf(["A", "B", "C", "D"]),
    size: PropTypes.oneOf(["standard", "large"]),
};
Tab.defaultProps = {
    type: "A",
    size: "standard",
    onChange: null,
};

export default Tab;
