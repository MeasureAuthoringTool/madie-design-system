import React from "react";
import { FormControl, TextField as MUITextField,
    FormHelperText,
 } from "@mui/material";
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
            <div
                style={{
                    width: 1,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                }}
            />
            <InputLabel
                disabled={disabled}
                shrink
                required={required}
                error={error}
                htmlFor={id}
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
                            marginRight: "3px !important",
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
                        color: "#AE1C1C !important",
                    },
                ]}
                
            >
                {label}
            </InputLabel>
            {helperText && (
                <FormHelperText
                    tabIndex={0}
                    aria-live="polite"
                    id={`${id}-helper-text`}
                    data-testid={`${id}-helper-text`}
                    sx={[
                        {
                            margin: "4px 0px 0px 0px",
                            color: "#515151",
                            lineHeight: 1,
                        },
                        error && {
                            color: "#AE1C1C !important",
                        },
                    ]}
                >
                    {helperText}
                </FormHelperText>
            )}
            <MUITextField
                sx={{
                    border: "none",
                    "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                            border: "none",
                        },
                    },
                    "& .MuiInputBase-root": {
                        height: '40px',
                    },
                    "& .MuiInputBase-input": {
                        lineHeight: "19px",
                        fontFamily: "Rubik",
                        disableUnderline: true,
                        fontSize: 16,
                        padding: "9px 0px",
                        color: "#333",
                        "&::placeholder": {
                            opacity: 1,
                            color: "#333",
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
