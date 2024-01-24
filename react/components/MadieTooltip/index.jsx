import React, { useState } from "react";
import TooltipIcon from "../MadieTooltipIcon";
import PropTypes from "prop-types";
import "./index.scss";

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role
const MadieToolTip = ({ tooltipText = "informational text", id }) => {
    const [activeTip, setActiveTip] = useState(false);
    return (
        <button
            data-testid={`${id}-button`}
            tabIndex={0}
            onFocus={() => setActiveTip(true)}
            onBlur={() => {
                setActiveTip(false);
            }}
            onMouseEnter={() => {
                setActiveTip(true);
            }}
            onMouseLeave={() => {
                setActiveTip(false);
            }}
            onKeyDown={(e) => {
                if (e.key === "Escape") {
                    setActiveTip(false);
                }
            }}
            className="madie-tooltip-button"
        >
            <TooltipIcon />
            <div
                role="tooltip"
                id={id}
                data-testid={id}
                aria-live="polite"
                className={activeTip ? "madie-tooltip" : "madie-tooltip hidden"}
            >
                <p>{tooltipText}</p>
            </div>
        </button>
    );
};

MadieToolTip.propTypes = {
    tooltipText: PropTypes.string,
};

export default MadieToolTip;
