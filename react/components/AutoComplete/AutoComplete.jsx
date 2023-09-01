import React from "react";
import {
    FormControl,
    FormHelperText,
    Autocomplete as MUIAutoComplete,
    TextField,
    Checkbox,
} from "@mui/material";
import PropTypes from "prop-types";
import InputLabel from "../InputLabel";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const autoCompleteStyles = {
    marginTop: "8px",
    borderRadius: "3px",
    height: 40,
    border: "1px solid #DDDDDD",
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "3px",
        "& legend": {
            width: 0,
        },
    },
    "& .MuiAutocomplete-inputFocused": {
        border: "none",
        boxShadow: "none",
        outline: "none",
    },
    "& .MuiAutocomplete-inputRoot": {
        paddingTop: 0,
        paddingBottom: 0,
    },
    "& .Mui-disabled": {
        backgroundColor: "#EDEDED",
        border: "#EDEDED",
    },
};

const checkedIcon = <CheckBoxIcon fontSize="small" />;
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;

// unique props are required when we have duplicate options
const renderOptionSingle = (props, option) => {
    const uniqueProps = {
        ...props,
        key: `${props.key}_${props.id}`,
    };
    return <li {...uniqueProps}>{option}</li>;
};

const renderOptionMultiple = (props, option, selected) => {
    const uniqueProps = {
        ...props,
        key: `${props.key}_${props.id}`,
    };
    return (
        <li {...uniqueProps}>
            <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
            />
            {option}
        </li>
    );
};

const AutoComplete = ({
    id,
    dataTestId,
    options = [],
    disabled = false,
    label,
    placeholder,
    multiple = false,
    required = false,
    error = false,
    helperText,
    onChange,
    ...rest
}) => {
    return (
        <FormControl error={error} fullWidth>
            <div
                style={{
                    width: 1,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                }}
            />
            <InputLabel
                htmlFor={`${id}`}
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
            
            <MUIAutoComplete
                disablePortal
                id={id}
                data-testid={dataTestId}
                options={options}
                disabled={disabled}
                multiple={multiple}
                disableCloseOnSelect={multiple}
                sx={
                    multiple
                        ? {
                              ...autoCompleteStyles,
                              height: "auto",
                              "& .MuiAutocomplete-inputRoot": {
                                  paddingTop: 1,
                                  paddingBottom: 1,
                              },
                          }
                        : autoCompleteStyles
                }
                renderInput={(params) => {
                    const { inputProps } = params;
                    inputProps["aria-required"] = required;
                    inputProps["aria-describedby"] = `${id}-helper-text`;
                    inputProps["aria-labelledby"] = `${id}-label`;
                    return (
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    opacity: 1,
                                    color: "#333",
                                    "&::placeholder": {
                                        opacity: 1,
                                        color: "#717171",
                                    },
                                },
                            }}
                            {...params}
                            placeholder={placeholder}
                            inputProps={inputProps}
                            label=""
                            error={error}
                        />
                    );
                }}
                renderOption={(props, option, { selected }) => {
                    return multiple
                        ? renderOptionMultiple(props, option, selected)
                        : renderOptionSingle(props, option);
                }}
                {...rest}
                onChange={(_event, selectedVal, reason, detail ) =>
                    onChange(id, selectedVal || "", reason, detail)
                }
            />
        </FormControl>
    );
};

AutoComplete.propTypes = {
    id: PropTypes.string,
    dataTestId: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    error: PropTypes.bool,
    label: PropTypes.string,
    helperText: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.element),
    onChange: PropTypes.any,
};

export default AutoComplete;
