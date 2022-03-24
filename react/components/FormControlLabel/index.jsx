import React from "react";
import { FormControlLabel as MUIFormControlLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        textTransform: "none",
        margin: 0,
        "& .MuiTypography-root": {
            color: "#333",
            fontSize: 14,
            fontFamily: "Rubik",
            fontWeight: 500,
        },
    },
});
const Label = (props) => {
    const classes = useStyles();
    return <MUIFormControlLabel classes={classes} {...props} />;
};

export default Label;
