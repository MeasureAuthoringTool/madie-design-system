import React from "react";
import { FormControl, Select as MUISelect, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "../InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import PropTypes from "prop-types";
import { ReadOnlyTextField } from "../index";

const Select = ({
    placeHolder = undefined, // expects placeholder objects of { name: value } and inserts into the render item function.
    required = false,
    disabled = false,
    readOnly = false,
    id,
    error = false,
    label,
    helperText = undefined,
    options = [
        <MenuItem
            key="test"
            value="test value"
            data-testid="measure-model-option-"
        >
            test value
        </MenuItem>,
    ],
    ...rest
}) => {
    if (readOnly) {
        return (
            <ReadOnlyTextField
                required={required}
                label={label}
                id={id}
                size="small"
                {...rest}
            />
        );
    }

    const placehold = (
        <span style={{ color: "#717171" }}>
            {placeHolder?.name || "placeholder"}
        </span>
    );
    return (
        <FormControl error={error} fullWidth>
            <InputLabel
                // {/* has init at .2rem/3.2 px bottom. passing sx breaks style. */}
                id={`${id}-label`}
                disabled={disabled}
                required={required}
                shrink
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
                    data-testid={`${id}-helper-text`}
                    id={`${id}-helper-text`}
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
            <MUISelect
                sx={[
                    {
                        border: "none",
                        borderRadius: "3px",
                        height: 40,
                        marginTop: "8px",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#8C8C8C",
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
                                color: "#717171",
                            },
                        },
                        "& 	.MuiSelect-icon": {
                            color: "#323232",
                        },
                        "& .Mui-disabled": {
                            backgroundColor: "#EDEDED",
                            border: "#EDEDED",
                        },
                    },
                    error && {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#AE1C1C !important",
                        },
                    },
                ]}
                displayEmpty
                IconComponent={ExpandMoreIcon}
                disabled={disabled}
                required={required}
                id={id}
                aria-describedby={`${id}-helper-text`}
                labelId={`${id}-label`}
                renderValue={(selected) => {
                    if (placeHolder) {
                        if (selected === placeHolder.value) {
                            return placehold;
                        }
                    }
                    return selected;
                }}
                {...rest}
            >
                {options && options}
            </MUISelect>
        </FormControl>
    );
};

Select.propTypes = {
    id: PropTypes.string,
    placeHolder: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.any,
    }), // expects placeholder objects of { name: value } and inserts into the render item function.
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    error: PropTypes.bool,
    label: PropTypes.string,
    helperText: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.element),
};

export default Select;
