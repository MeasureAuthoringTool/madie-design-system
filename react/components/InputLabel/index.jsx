import React from "react";
import { InputLabel as MUIInputLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    asterisk: {
        color: "#D92F2F",
    },
    root: {
        "&&": {
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
        },
    },
    required: {
        "&&": {
            transform: "translateX(-12px) translateY(0px)",
            "& .MuiInputLabel-asterisk": {
                color: "#D92F2F",
                marginRight: "3px !important", //this was hitting an mui bug.
            },
        },
    },
    error: {
        "&&": {
            color: "#D92F2F",
        },
    },
    disabled: {
        "&&": {
            color: "rgba(0,0,0,0.6)",
        },
    },
});
const Label = (props) => {
    const classes = useStyles();
    return (
        <MUIInputLabel
            classes={{
                root: classes.root,
                required: classes.required,
                error: classes.error,
                disabled: classes.disabled,
            }}
            {...props}
        />
    );
};
export default Label;
