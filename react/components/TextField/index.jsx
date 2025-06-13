import React from "react";
import {
    FormControl,
    TextField as MUITextField,
    FormHelperText,
} from "@mui/material";
import InputLabel from "../InputLabel";
import MadieToolTip from "../MadieTooltip";
import PropTypes from "prop-types";
import { ReadOnlyTextField } from "../index";

const TextField = ({
    id,
    error = false,
    helperText = undefined,
    required = false,
    disabled = false,
    label,
    tooltipText,
    inputProps,
    labelColor = undefined,
    textFieldStyles = {},
    maxLength = undefined,
    ...rest
}) => {
    if (disabled) {
        return (
            <ReadOnlyTextField
                required={required}
                label={label}
                id={id}
                size="small"
                {...rest}
            />
        )
    }
    // get a copy of input props
    const newInputProps = { ...inputProps } || {};

    if (!newInputProps["data-testid"]) {
        newInputProps["data-testid"] = `${id}-input`;
    }
    // if aria-describedBy is not provided, add it depending on helper-text and tooltip presence
    if (!newInputProps["aria-describedby"]) {
        let newDescribedBy = "";
        if (helperText) {
            newDescribedBy += `${id}-helper-text `;
        }
        if (tooltipText) {
            newDescribedBy += `${id}-tooltip`;
        }
        if (newDescribedBy) {
            newInputProps["aria-describedby"] = newDescribedBy;
        }
    }

    const extendedTextFieldStyles = {
        borderRadius: "3px",

        border: "none",
        marginTop: "8px",
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "3px",
            borderColor: "#8C8C8C",
            "& legend": {
                width: 0,
            },
        },
        "& .MuiInputBase-root": {
            height: "auto",
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
                color: "#717171",
            },
        },
        ...textFieldStyles,
    };
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
            <div style={{ display: "flex", flexDirection: "row" }}>
                <InputLabel
                    disabled={disabled}
                    shrink
                    required={required}
                    error={error}
                    htmlFor={id}
                    style={{ marginBottom: 0, height: 16 }} // force a heignt
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
                            color: () => {
                                if (labelColor) {
                                    return labelColor;
                                } else {
                                    return "#333";
                                }
                            },
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
                {tooltipText && (
                    <MadieToolTip
                        tooltipText={tooltipText}
                        id={`${id}-tooltip`}
                    />
                )}
            </div>
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
                sx={extendedTextFieldStyles}
                label={null}
                error={error}
                disabled={disabled}
                id={id}
                inputProps={{
                    ...newInputProps,
                }}
                {...rest}
            />
            {maxLength && !disabled && (
                <span
                    style={{
                        fontFamily: "Rubik",
                        fontSize: 12,
                        color: "#717171",
                        position: "absolute",
                        bottom: -26,
                        right: 0,
                    }}
                >
                    {rest.value?.length}/{maxLength} Characters
                </span>
            )}
        </FormControl>
    );
};

TextField.propTypes = {
    id: PropTypes.string,
    textFieldStyles: PropTypes.object,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string, // expects placeholder objects of { name: value } and inserts into the render item function.
    label: PropTypes.string,
    tooltipText: PropTypes.string,
    inputProps: PropTypes.object,
    labelColor: PropTypes.string,
    maxLength: PropTypes.number,
};
export default TextField;
