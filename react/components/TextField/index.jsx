import React from "react";
import { FormControl, TextField as MUITextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputLabel from "../InputLabel";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    asterisk: {
        color: "#D92F2F",
    },
    select: {
        borderRadius: 3,
        height: 40, //there's a .13 coming from somewhere.
        border: "1px solid #DDDDDD",
        // remove weird line break from legend
        "& .MuiOutlinedInput-notchedOutline": {
            "& legend": {
                width: 0,
            },
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: 3,
        },
        // input base selector
        "& .MuiInputBase-input": {
            fontFamily: "Rubik",
            fontSize: 14,
            borderRadius: 3,
            padding: "9px 14px",
            "&::placeholder": {
                opacity: 1,
            },
        },
    },
    // add a little space
});
const TextField = ({
    id,
    error = false,
    helperText = undefined,
    required = false,
    disabled = false,
    label,
    ...rest
}) => {
    const classes = useStyles();
    return (
        <FormControl fullWidth error={error}>
            <InputLabel
                disabled={disabled}
                shrink
                required={required}
                error={error}
                htmlFor={id}
            >
                {label}
            </InputLabel>
            <MUITextField
                className={classes.select}
                label={null}
                error={error}
                disabled={disabled}
                id={id}
                {...rest}
            />
            {helperText && helperText}
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
