import React from "react";
import { FormControl, Select as MUISelect, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "../InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import PropTypes from "prop-types";

const Select = ({
    placeHolder = undefined, // expects placeholder objects of { name: value } and inserts into the render item function.
    required = false,
    disabled = false,
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
    const placehold = (
        <span style={{ opacity: 0.6 }}>
            {placeHolder?.name || "placeholder"}
        </span>
    );
    return (
        <FormControl error={error} fullWidth>
            <InputLabel
                disabled={disabled}
                htmlFor={id}
                required={required}
                shrink
            >
                {label}
            </InputLabel>
            <MUISelect
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
                        fontFamily: "Rubik",
                        fontSize: 14,
                        borderRadius: "3px",
                        padding: "9px 14px",
                        "&::placeholder": {
                            opacity: 0.6,
                        },
                    },
                    "& 	.MuiSelect-icon": {
                        color: "#323232",
                    },
                }}
                displayEmpty
                IconComponent={ExpandMoreIcon}
                disabled={disabled}
                required={required}
                id={id}
                label={null}
                {...rest}
                renderValue={(selected) => {
                    if (placeHolder) {
                        if (selected === placeHolder.value) {
                            return placehold;
                        }
                    }
                    return selected;
                }}
            >
                {options && options}
            </MUISelect>
            {helperText && <FormHelperText data-testid={`helper-text`}>{helperText}</FormHelperText>}
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
    error: PropTypes.bool,
    label: PropTypes.string,
    helperText: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.element),
};

export default Select;
