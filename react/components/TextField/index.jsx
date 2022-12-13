import React from "react";
import {
    FormControl,
    TextField as MUITextField,
    FormHelperText,
} from "@mui/material";
import InputLabel from "../InputLabel";
import PropTypes from "prop-types";

const TextField = ({
    id,
    error = false,
    helperText = undefined,
    required = false,
    disabled = false,
    label,
    ...rest
}) => {
    return (
        <FormControl fullWidth error={error}>
            <InputLabel
                disabled={disabled}
                shrink
                required={required}
                error={error}
                htmlFor={id}
            >
                {label}
            </InputLabel>
            <MUITextField
                sx={{
                    borderRadius: "3px",
                    height: 40, //there's a .13 coming from somewhere.
                    border: "1px solid #DDDDDD",
                    // remove weird line break from legend
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "3px",
                        "& legend": {
                            width: 0,
                        },
                    },
                    "& .MuiOutlinedInput-root": {
                        "&&": {
                            borderRadius: "3px",
                        },
                    },
                    // input base selector
                    "& .MuiInputBase-input": {
                        color: "#333",
                        fontFamily: "Rubik",
                        fontSize: 14,
                        borderRadius: "3px",
                        padding: "9px 14px",
                        "&::placeholder": {
                            opacity: 1,
                            color: "#717171"
                        },
                    },
                }}
                label={null}
                error={error}
                disabled={disabled}
                id={id}
                {...rest}
            />
            <FormHelperText id={`${id}-helper-text`}>
                {helperText && helperText}
            </FormHelperText>
        </FormControl>
    );
};

TextField.propTypes = {
    id: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string, // expects placeholder objects of { name: value } and inserts into the render item function.
    label: PropTypes.string,
};
export default TextField;
