import React from "react";
import PropTypes from "prop-types";

const hasDarkerBackground = (darkerBackground) => {
    return darkerBackground ? "background-highlight" : "";
};

const AnimationGroup = ({ display, className, children, darkerBackground }) => {
    return (
        <div
            className={`animation-group animation-group-${
                className || "default"
            }${
                display ? " animation-group-enter" : " animation-group-exit"
            } ${hasDarkerBackground(darkerBackground)}`}
        >
            {children}
        </div>
    );
};

AnimationGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    display: PropTypes.bool,
    darkerBackground: PropTypes.bool,
};

export default AnimationGroup;
