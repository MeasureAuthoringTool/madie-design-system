import React from "react";
import { InputLabel as MUIInputLabel } from "@mui/material";
import PropTypes from "prop-types";

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
                        color: "#D92F2F",
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
                    color: "rgba(0,0,0,0.6)",
                },
                error && {
                    color: "#D92F2F",
                },
            ]}
            {...rest}
        />
    );
};
Label.propTypes = {
    required: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
}
export default Label;
