import React from "react";
import AnimationGroup from "../AnimationGroup/AnimationGroup";
import PropTypes from "prop-types";

const NavItemInline = (props) => {
    const {
        url,
        urlExpressionToMatch,
        className,
        icon,
        label,
        isActive,
        showLabel,
        disabled,
    } = props;

    const localUrl = urlExpressionToMatch || url;
    const urlRegExp = new RegExp(`${localUrl}/?$`);
    const path = window.location.href && window.location.href.split("?")[0];
    const currentPage = path && path.match(urlRegExp);

    return (
        <div
            className={`${className} ${
                isActive || currentPage ? "active" : ""
            } ${disabled ? "disabled" : ""}`}
            aria-label={label}
        >
            <svg
                className={`left-icon ${disabled ? "disabled" : ""}`}
                aria-hidden="true"
                focusable="false"
            >
                {icon}
            </svg>
            <AnimationGroup display={showLabel}>
                <span tabIndex="-1">{label}</span>
            </AnimationGroup>
        </div>
    );
};

NavItemInline.propTypes = {
    urlExpressionToMatch: PropTypes.string,
    url: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.element,
    label: PropTypes.string,
    isActive: PropTypes.bool,
    showLabel: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default NavItemInline;
