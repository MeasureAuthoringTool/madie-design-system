import React from "react";
import { FormControl, FormHelperText, TextareaAutosize } from "@mui/material";
import InputLabel from "../InputLabel";
import PropTypes from "prop-types";
import { ReadOnlyTextField } from "../index";

const TextArea = ({
    id,
    error = false,
    helperText = undefined,
    required = false,
    disabled = false,
    label,
    inputProps,
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
    // coerce this to avoid issue passing props to dom.
    // text area autosize is deprecated and only takes style rules
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
                style={{ marginBottom: 0, height: 16 }} // force a heignt
                sx={[
                    {
                        backgroundColor: "transparent",
                        borderColor: "#8C8C8C",
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
            <TextareaAutosize
                style={{ marginTop: "8px", maxWidth: "100%" }}
                className={
                    error ? "text-area-variable error" : "text-area-variable"
                }
                label={null}
                disabled={disabled}
                id={id}
                {...inputProps}
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

TextArea.propTypes = {
    id: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string, // expects placeholder objects of { name: value } and inserts into the render item function.
    label: PropTypes.string,
    inputProps: PropTypes.any,
    maxLength: PropTypes.number,
};
export default TextArea;
