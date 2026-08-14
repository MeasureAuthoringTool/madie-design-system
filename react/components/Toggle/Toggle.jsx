import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Switch } from "@mui/material";

const Toggle = ({
    checked,
    className,
    defaultChecked,
    disabled,
    id,
    label,
    onChange,
    ...rest
}) => {
    const [uncontrolledChecked, setUncontrolledChecked] =
        useState(defaultChecked);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : uncontrolledChecked;
    const classes = [
        "qpp-c-toggle",
        disabled && "qpp-c-toggle--disabled",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const handleChange = (event) => {
        const nextChecked = event.target.checked;

        if (!isControlled) {
            setUncontrolledChecked(nextChecked);
        }

        onChange(event, nextChecked);
    };

    return (
        <FormControlLabel
            className={classes}
            control={
                <Switch
                    checked={isChecked}
                    disabled={disabled}
                    id={id}
                    onChange={handleChange}
                    slotProps={{
                        input: {
                            role: "switch",
                            ...rest,
                        },
                    }}
                />
            }
            label={label}
            sx={{ color: "#515151", textTransform: "none" }}
        />
    );
};

Toggle.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.node,
    onChange: PropTypes.func,
};

Toggle.defaultProps = {
    checked: undefined,
    className: "",
    defaultChecked: false,
    disabled: false,
    label: null,
    onChange: () => null,
};

export default Toggle;