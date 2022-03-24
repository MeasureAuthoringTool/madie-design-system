import React from "react";
import PropTypes from "prop-types";
import { NavCollapse, NavExpand } from "../../../lib/SvgComponents";

const NavLinkToggle = ({ isAltStyle, collapseRef, isExpanded, onClick }) => {
    const expandedStyle = isExpanded ? "link-collapse" : "link-expand";
    const altStyle = isAltStyle ? "alt-style" : "";

    return (
        <button
            type="button"
            aria-label={`Click to ${
                isExpanded ? "collapse" : "expand"
            } the sidebar menu`}
            ref={collapseRef}
            className={`${expandedStyle} ${altStyle}`}
            onClick={onClick}
        >
            <svg className="left-icon" aria-hidden="true" focusable="false">
                {isExpanded ? <NavCollapse /> : <NavExpand />}
            </svg>
            <span>{isExpanded ? "Collapse" : "Expand"}</span>
        </button>
    );
};

NavLinkToggle.propTypes = {
    isAltStyle: PropTypes.bool,
    collapseRef: PropTypes.object,
    isExpanded: PropTypes.bool,
    onClick: PropTypes.func,
};

export default NavLinkToggle;
