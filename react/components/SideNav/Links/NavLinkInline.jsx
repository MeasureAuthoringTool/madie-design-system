import React, { useState } from "react";
import { handleNavigation } from "../helpers";
import AnimationGroup from "../AnimationGroup/AnimationGroup";
import PropTypes from "prop-types";

const NavLinkInline = ({
    url,
    urlExpressionToMatch,
    className,
    icon,
    label,
    isActive,
    showLabel,
    linkCallback,
    disabled,
    useTooltips,
    target,
}) => {
    const localUrl = urlExpressionToMatch || url;
    const urlRegExp = new RegExp(`${localUrl}/?$`);
    const path = window.location.href && window.location.href.split("?")[0];
    const currentPage = path && path.match(urlRegExp);
    const svgRef = React.useRef();
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = React.useRef();

    React.useEffect(() => {
        if (!showLabel && useTooltips && svgRef.current) {
            const existingMouseenter = svgRef.current.onmouseover;
            const existingMouseout = svgRef.current.onmouseout;

            svgRef.current.onmouseover = () => {
                if (tooltipRef.current && useTooltips) {
                    const svgOffset = svgRef.current.getBoundingClientRect();
                    tooltipRef.current.style.top = `${svgOffset.top - 5}px`;
                    tooltipRef.current.style.display = "block";
                }
                if (typeof existingMouseenter === "function") {
                    existingMouseenter();
                }
            };

            svgRef.current.onmouseout = () => {
                if (tooltipRef.current) {
                    tooltipRef.current.style.display = "none";
                }
                if (typeof existingMouseout === "function") {
                    existingMouseout();
                }
            };
            setShowTooltip(true);
        }
        if (showLabel) {
            setShowTooltip(false);
        }
    }, [svgRef.current, showLabel]);

    return (
        <React.Fragment>
            <a
                href={disabled ? undefined : url}
                onClick={(e) => handleNavigation(e, linkCallback, label)}
                className={`${className} ${
                    currentPage || isActive ? "active" : ""
                } ${disabled ? "disabled" : ""}`}
                data-track-category="SidebarNav"
                data-track-action={`GoTo${
                    label ? label.split(" ").join("") : ""
                }`}
                data-track-label={label}
                aria-label={label}
                target={`${target ? target : "_self"}`}
            >
                <svg
                    className={`left-icon ${disabled ? "disabled" : ""}`}
                    aria-hidden="true"
                    focusable="false"
                    ref={svgRef}
                >
                    {icon}
                </svg>
                <AnimationGroup display={showLabel}>
                    <span tabIndex="-1">{label}</span>
                </AnimationGroup>
            </a>
            {showTooltip && (
                <div ref={tooltipRef} className="sidebar-tooltip">
                    <span className="sidebar-tooltip-text">{label}</span>
                </div>
            )}
        </React.Fragment>
    );
};

NavLinkInline.propTypes = {
    urlExpressionToMatch: PropTypes.string,
    url: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.element,
    label: PropTypes.string,
    isActive: PropTypes.bool,
    showLabel: PropTypes.bool,
    linkCallback: PropTypes.func,
    disabled: PropTypes.bool,
    useTooltips: PropTypes.bool,
    target: PropTypes.string,
};

export default NavLinkInline;
