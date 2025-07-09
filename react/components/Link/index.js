import React from "react";

const VARIANTS = ["white", "gray"];

const DSLink = ({
    className = "",
    href = "",
    download = false,
    ariaLabel = null,
    onClick = () => null,
    children = null,
    variant = null,
    ...rest
}) => {
    let linkClass = "qpp-c-link";

    if (VARIANTS.includes(variant)) {
        linkClass +=
            variant === "gray"
                ? " qpp-u-color--gray-60"
                : ` qpp-u-color--${variant}`;
    }

    if (className) {
        linkClass += ` ${className}`;
    }

    return (
        <a
            aria-label={ariaLabel}
            className={linkClass}
            href={href}
            download={download}
            onClick={onClick}
            {...rest}
        >
            {children}
        </a>
    );
};

export default DSLink;
