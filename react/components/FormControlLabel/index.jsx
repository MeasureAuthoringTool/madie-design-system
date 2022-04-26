import React from "react";
import { FormControlLabel as MUIFormControlLabel } from "@mui/material";

const Label = (props) => {
    return (
        <MUIFormControlLabel
            sx={{
                flexGrow: 1,
                textTransform: "none",
                margin: 0,
                "& .MuiTypography-root": {
                    color: "#333",
                    fontSize: 14,
                    fontFamily: "Rubik",
                    fontWeight: 500,
                },
            }}
            {...props}
        />
    );
};

export default Label;
