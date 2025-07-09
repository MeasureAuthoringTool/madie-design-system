import React from "react";
import { Tabs as MuiTabs } from "@mui/material";

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

const typeCVerticalSelected = {
    "& .MuiTab-root.Mui-selected": {
        borderTop: "solid 1px #8C8C8C",
        borderBottom: "solid 1px #8C8C8C",
        borderRight: "1px solid white",
        width: "calc(100% + 1px)",
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

const Tabs = ({
    type = "A",
    size = "standard",
    orientation = "horizontal",
    ...rest
}) => {
    let style = { ...baseStyle };

    switch (type) {
        case "A":
            style = { ...style, ...typeA };
            break;
        case "B":
            style = { ...style, ...typeB };
            break;
        case "C":
            style =
                orientation === "vertical"
                    ? { ...style, ...typeC, ...typeCVerticalSelected }
                    : { ...style, ...typeC };
            break;
        case "D":
            style = { ...style, ...typeD };
            break;
        default:
            break;
    }

    return (
        <MuiTabs disableRipple orientation={orientation} sx={style} {...rest} />
    );
};

export default Tabs;
