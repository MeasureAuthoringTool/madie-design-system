import React from "react";
import PropTypes from "prop-types";
import { Tab as MuiTab } from "@mui/material";

const typeA = {
    color: "#fff",
    "&:hover":{
        background: "#001F3D"
    },
    "&:focus":{
        background: "#125496",
        boxShadow: "0px 0px 0px 4px #CBE4FF",
    }
};
const typeB = {
    color: "#515151",
    "&:hover":{
        background: "#F2F9FF",
        color: "#242424"
    },
    "&:focus":{
        boxShadow: "0px 0px 0px 4px #CBE4FF",
        background: "#fff"
    }
};
const typeC = {
    color: "#333",
    background: "#EDEDED",
    "&:hover":{
        backround: "#FAFAFA",
        color: "#515151"
    },
    "&:focus":{
        boxShadow: "0px 0px 0px 4px #CBE4FF",
        background: "#fff"
    }
};


const Tab = ({ type, size, ...rest }) => {
    const baseStyle = {
        height: size === 'standard' ? '48px' : '60px',
        fontFamily: "Rubik, sans serif",
        fontWeight: 400,
        padding: size === 'standard' ? "14.5px 24.5px" : "20.5px 24px",
        textTransform: "none",
        fontSize: "16px",
        '&.Mui-disabled': {
            background: "#DDDDDD",
            color: "#717171"
        }
    }
    const style = ((type) => {
        if (type === "A") {
            console.log({ ...baseStyle, ...typeA})
            return  { ...baseStyle, ...typeA}
        }
        if (type === "B" || type === "D") {
            return  { ...baseStyle, ...typeB, }
        }
        if (type === "C") {
            return  { ...baseStyle, ...typeC}
        }
    })(type)
    return (
        <MuiTab            
            tabIndex={0}
            sx={style}
            {...rest}
        />
    );
};

Tab.propTypes = {
    type: PropTypes.oneOf(["A", "B", "C"]),
    size: PropTypes.oneOf(["standard", "large"]),
};
Tab.defaultProps = {
    type: "A",
    size: "standard",
    onChange: null,
};

export default Tab;
