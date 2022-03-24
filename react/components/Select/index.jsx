import React from "react";
import { FormControl, Select as MUISelect, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "../InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    icon: {
        color: "#323232",
    },
    select: {
        border: "1px solid #DDDDDD",
        // hide legend
        "& .MuiOutlinedInput-notchedOutline": {
            "& legend": {
                width: 0,
            },
        },
        "& .MuiInputBase-input": {
            paddingTop: 7.5,
            paddingBottom: 7.5,
            fontFamily: "Rubik",
            fontSize: 14,
            borderRadius: 3,
        },
    },
});
//   custom select to make this way easier
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
    const classes = useStyles();
    const placehold = <span>{placeHolder?.name || "placeholder"}</span>;
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
                className={classes.select}
                classes={{ icon: classes.icon }}
                displayEmpty
                IconComponent={ExpandMoreIcon}
                error={error}
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
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
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
