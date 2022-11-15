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

    // Todo error color #AE1C1C
// .css-1m50jel-MuiFormLabel-root-MuiInputLabel-root.Mui-error
//         .css-1wc848c-MuiFormHelperText-root.Mui-error
    return (
        <FormControl error={error} fullWidth>
            <InputLabel
                htmlFor={`${id}`}
                id={`${id}-label`}
                disabled={disabled}
                required={required}
                shrink
                error={error}
            >
                {label}
            </InputLabel>
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
                            {...params}
                            placeholder={placeholder}
                            inputProps={inputProps}
                            label=""
                            error={error}
                        />
                    );
                }}
                onChange={(_event, selectedVal) =>
                    onChange(id, selectedVal || "")
                }
                renderOption={(props, option, { selected }) => {
                    return multiple
                        ? renderOptionMultiple(props, option, selected)
                        : renderOptionSingle(props, option);
                }}
                {...rest}
            />
            {helperText && (
                <FormHelperText
                    tabIndex={0}
                    aria-live="polite"
                    id={`${id}-helper-text`}
                    data-testid={`${id}-helper-text`}
                    error={error}
                    sx={ error &&
                        { color: "#AE1C1C !important" }
                    }
                >
                    {helperText}
                </FormHelperText>
            )}
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
