import React from "react";
import { InputLabel as MUIInputLabel } from "@mui/material";

const Label = ({ required, disabled, error, ...rest }) => {
    return (
        <MUIInputLabel
            required={required}
            disabled={disabled}
            error={error}
            sx={[
                {
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignSelf: "baseline",
                    textTransform: "none",
                    // force it outside the select box
                    position: "initial",
                    transform: "translateX(0px) translateY(0px)",
                    fontFamily: "Rubik",
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#333",
                    "& .MuiInputLabel-asterisk": {
                        color: "#AE1C1C !important",
                        marginRight: "3px !important", //this was
                    },
                },
                required && {
                    transform: "translateX(-12px) translateY(0px)",
                    "& .MuiInputLabel-asterisk": {
                        color: "#D92F2",
                        marginRight: "3px !important", //this was
                    },
                },
                disabled && {
                    color: "#333333 !important",
                },
                error && {
                    color: "#AE1C1C !important",
                },
            ]}
            {...rest}
        />
    );
};

export default Label;
