import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({
    className,
    id,
    ariaLabelledBy,
    ariaLabel,
    onChange,
    dataTestId,
    name,
    dataType,
    disabled,
    size,
    options,
    children,
    parentElement,
    ...rest
}) => {
    const dropdownClass = [
        "qpp-c-dropdown",
        size === "big" && "qpp-c-dropdown--big",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <select
            id={id}
            aria-labelledby={ariaLabelledBy}
            aria-label={ariaLabel}
            className={dropdownClass || ""}
            onChange={onChange}
            data-testid={dataTestId}
            name={name}
            disabled={disabled}
            data-type={dataType}
            {...rest}
        >
            {children}
            {options.map(({ disabled, name, value }) => (
                <option disabled={disabled} key={value} value={value}>
                    {name}
                </option>
            ))}
        </select>
    );
};

Dropdown.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    ariaLabelledBy: PropTypes.string,
    ariaLabel: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    dataTestId: PropTypes.string,
    name: PropTypes.string,
    dataType: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["big"]),
    options: PropTypes.array,
    parentElement: PropTypes.string,
};

Dropdown.defaultProps = {
    children: false,
    className: "qpp-u-width--100",
    id: null,
    ariaLabelledBy: null,
    ariaLabel: null,
    onChange: () => null,
    dataTestId: null,
    name: null,
    dataType: null,
    disabled: false,
    size: null,
    options: [],
    parentElement: "span",
};

export default Dropdown;
