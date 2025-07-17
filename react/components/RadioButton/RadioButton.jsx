import React from "react";
import {
    FormControl,
    FormHelperText,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import PropTypes from "prop-types";
import InputLabel from "../InputLabel";
import { ReadOnlyTextField } from "../index";

const RadioButton = ({
    id,
    dataTestId,
    options = [],
    disabled = false,
    readOnly = false,
    label,
    required = false,
    error = false,
    helperText,
    ...rest
}) => {
    if (readOnly) {
        const option = options?.find(option => String(option.value) === String(rest.value));
        return (
            <ReadOnlyTextField
                required={required}
                label={label}
                id={id}
                size="small"
                {...rest}
                value={option?.label}
            />
        )
    }
    return (
        <FormControl error={error} fullWidth>
            <InputLabel
                htmlFor={`${id}`}
                id={`${id}-label`}
                disabled={disabled}
                required={required}
                shrink
                style={{ marginBottom: 0, height: 16 }} // force a height
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
            {helperText && (
                <FormHelperText
                    tabIndex={0}
                    aria-live="polite"
                    id={`${id}-helper-text`}
                    data-testid={`${id}-helper-text`}
                    error={error}
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
            <RadioGroup
                aria-labelledby={`${id}-radio-buttons-group`}
                data-testid={`${id}-radio-buttons-group`}
                {...rest}
            >
                {options.map((option, index) => (
                    <FormControlLabel
                        disabled={disabled}
                        key={index}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

RadioButton.propTypes = {
    id: PropTypes.string,
    dataTestId: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    error: PropTypes.bool,
    label: PropTypes.string,
    helperText: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.any),
};

export default RadioButton;
