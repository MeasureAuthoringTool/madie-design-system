import React from "react";
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

/**
 * @param {{
 *   type?: "A" | "B" | "C" | "D",
 *   size?: "standard" | string,
 *   orientation?: "horizontal" | "vertical",
 *   [key: string]: any
 * }} props
 */
const Tab = ({
    type = "A",
    size = "standard",
    orientation = "horizontal",
    ...rest
}) => {
    const baseStyle = {
        height: size === "standard" ? "48px" : "60px",
        fontFamily: "Rubik, sans serif",
        fontWeight: 400,
        padding: size === "standard" ? "14.5px 24px" : "20.5px 24px",
        textTransform: "none",
        fontSize: "16px",
        alignItems: orientation === "vertical" ? "flex-start" : undefined,
        "&.Mui-disabled": {
            background: "#DDDDDD",
            color: "#717171 !important",
        },
    };

    const variantStyles =
        type === "A"
            ? typeA
            : type === "B" || type === "D"
              ? typeB
              : type === "C"
                ? typeC
                : {};

    const style = { ...baseStyle, ...variantStyles };

    return <MuiTab tabIndex={0} sx={style} {...rest} />;
};

export default Tab;
