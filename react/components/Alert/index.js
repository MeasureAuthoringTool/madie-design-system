import React from "react";
import PropTypes from "prop-types";

const Alert = ({
    title,
    children,
    description,
    variant,
    className,
    ...rest
}) => {
    const HeadingComponent = title?.headingLevel || "h2";
    return (
        <div
            className={`qpp-c-alert qpp-c-alert--${variant} ${className}`}
            role="alert"
            {...rest}
        >
            <div className="qpp-c-alert__body">
                {title && (
                    <HeadingComponent className="h4 qpp-c-alert__heading">
                        {typeof title === "object" ? title.text : title}
                    </HeadingComponent>
                )}
                {description && (
                    <p className="qpp-c-alert__text">{description}</p>
                )}
                {children}
            </div>
        </div>
    );
};

Alert.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            text: PropTypes.string,
            headingLevel: PropTypes.string,
        }),
    ]),
    variant: PropTypes.oneOf(["info", "warning", "success", "error"]),
};
Alert.defaultProps = {
    children: null,
    className: "",
    description: null,
    title: null,
    variant: "info",
};

export default Alert;
