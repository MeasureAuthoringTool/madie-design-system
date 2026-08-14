import React, { useState } from "react";
import PropTypes from "prop-types";

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
        <div className={classes}>
            <label className="qpp-c-toggle__label">
                <input
                    checked={isChecked}
                    className="qpp-c-toggle__input"
                    disabled={disabled}
                    id={id}
                    onChange={handleChange}
                    role="switch"
                    type="checkbox"
                    {...rest}
                />
                <span className="qpp-c-toggle__control" aria-hidden="true" />
                {label && <span className="qpp-c-toggle__text">{label}</span>}
            </label>
        </div>
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