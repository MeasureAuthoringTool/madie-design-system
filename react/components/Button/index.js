import React from "react";

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

/**
 * @param {{
 *   children?: React.ReactNode,
 *   className?: string,
 *   href?: string,
 *   loading?: boolean,
 *   onClick?: () => void,
 *   size?: string | null,
 *   type?: string,
 *   variant?: string | null,
 *   [key: string]: any
 * }} props
 */
const Button = ({
    children = null,
    className = "",
    href = "",
    loading = false,
    onClick = () => null,
    size = null,
    type = "button",
    variant = null,
    ...rest
}) => {
    let btnClass = "qpp-c-button";

    if (VARIANTS.includes(variant)) {
        btnClass += ` qpp-c-button--${variant}`;
    }

    if (SIZES.includes(size)) {
        btnClass += ` qpp-c-button--${size}`;
    }

    if (className) {
        btnClass += ` ${className}`;
    }

    if (href) {
        return (
            <a
                href={href}
                data-testid="ds-btn"
                className={btnClass}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            data-testid="ds-btn"
            className={btnClass}
            onClick={onClick}
            disabled={loading}
            type={type}
            {...rest}
        >
            {children}
        </button>
    );
};

/**
 * @param {{
 *   className?: string
 * } & React.ComponentProps<typeof Button>} props
 */
export const TextButton = ({ className = "", ...props }) => (
    <Button className={`qpp-c-button--text ${className}`} {...props} />
);

export default Button;
