import React from "react";
import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";

// To change the spinner size you have to pass style props for height and width.
const MadieSpinner = (props) => {
    return (
        <CircularProgress
            aria-label="loading-spinner"
            sx={{
                "& .MuiCircularProgress-svg": {
                    backgroundColor: "transparent",
                    borderRadius: "100%",
                    boxShadow: `inset 0 0 0px ${
                        props.thickness ? props.thickness : "7"
                    }px #DDDDDD`,
                },
                "& .MuiCircularProgress-circle": {
                    color: "#209FA6",
                    strokeLinecap: "round",
                },
            }}
            thickness={7}
            style={{ height: 50, width: 50 }}
            // Props overwrite whatever they want.
            {...props}
        />
    );
};

MadieSpinner.propTypes = {
    thickness: PropTypes.number,
};

export default MadieSpinner;
