import React from "react";
import { FormControl, TextField as MUITextField } from "@mui/material";
import InputLabel from "../InputLabel";
import PropTypes from "prop-types";

const ReadOnlyTextField = ({
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
                    height: 40, //there's a .13 coming from somewhere.
                    border: "none",
                    "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                            border: "none",
                        },
                    },
                    // input base selector
                    "& .MuiInputBase-input": {
                        lineHeight: "19px",
                        fontFamily: "Rubik",
                        disableUnderline: true,
                        fontSize: 16,
                        padding: "9px 0px",
                        "&::placeholder": {
                            opacity: 0.6,
                        },
                        "&:focus": {
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                        },
                    },
                }}
                InputProps={{
                    readOnly: true,
                }}
                disableUnderline={true}
                label={null}
                error={error}
                disabled={disabled}
                id={id}
                {...rest}
            />
            {helperText && helperText}
        </FormControl>
    );
};

ReadOnlyTextField.propTypes = {
    id: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string, // expects placeholder objects of { name: value } and inserts into the render item function.
    label: PropTypes.string,
};
export default ReadOnlyTextField;
