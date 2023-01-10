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
        <FormControl fullWidth error={error}
>
            <div style={{ width: 1, display: "flex", flexDirection: "column", flexGrow: 1}}/> 
            <InputLabel
                disabled={disabled}
                shrink
                required={required}
                error={error}
                htmlFor={id}
                style={{marginBottom: 0, height: 16}} // force a heignt
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
                    color: "rgba(0,0,0,0.6)",
                },
                error && {
                    color: "#AE1C1C !important",
                },
            ]}
            >
                {label}
            </InputLabel>
            <FormHelperText
                id={`${id}-helper-text`} 
                sx={[{
                    margin: "4px 0px 0px 0px",
                    color: "#515151", 
                    lineHeight: 1
                },
                error && {
                    color: "#AE1C1C !important",
                },
            ]}
                    >
                {helperText}
            </FormHelperText>
            <MUITextField
                sx={[{
                    borderRadius: "3px",
                    height: 40, //there's a .13 coming from somewhere.
                    border: "1px solid #DDDDDD",
                    marginTop: "8px",
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
                },
                error && {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#AE1C1C !important",
                    },
                },
                ]
                }
                label={null}
                error={error}
                disabled={disabled}
                id={id}
                {...rest}
            />
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
