import React from "react";
import PropTypes from "prop-types";

const VARIANTS = [
    "secondary",
    "outline",
    "outline-secondary",
    "outline-filled",
    "action",
    "cyan",
    "danger",
    "danger-primary",
    "white",
];
const SIZES = ["big"];

const Button = ({
    children,
    className,
    href,
    loading,
    onClick,
    size,
    variant,
    type,
    ...rest
}) => {
    let btnClass = "qpp-c-button";

    if (VARIANTS.includes(variant)) {
        btnClass = btnClass.concat(" ", `qpp-c-button--${variant}`);
    }
    if (SIZES.includes(size)) {
        btnClass = btnClass.concat(" ", `qpp-c-button--${size}`);
    }
    if (className) {
        btnClass = btnClass.concat(" ", className);
    }

    if (href) {
        return (
            <a
                href={href}
                data-testid="ds-btn"
                className={btnClass || ""}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }
    return (
        <button
            data-testid="ds-btn"
            className={btnClass || ""}
            onClick={onClick}
            disabled={loading}
            type={type}
            {...rest}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(SIZES),
    type: PropTypes.string,
    variant: PropTypes.oneOf(VARIANTS),
};

Button.defaultProps = {
    children: false,
    className: "",
    href: "",
    loading: false,
    onClick: () => null,
    size: null,
    type: "button",
    variant: null,
};

export const TextButton = ({ className = "", ...props }) => (
    <Button className={`qpp-c-button--text ${className}`} {...props} />
);

TextButton.propTypes = {
    className: PropTypes.string,
};

TextButton.defaultProps = {
    className: "",
};

export default Button;
