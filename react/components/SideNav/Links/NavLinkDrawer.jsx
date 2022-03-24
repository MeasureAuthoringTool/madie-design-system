import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { handleNavigation } from "../helpers";
import AnimationGroup from "../AnimationGroup/AnimationGroup";

const NavLinkDrawer = ({
    className,
    disabled,
    isAlwaysOpen,
    isExpanded,
    items,
    label,
    leftIcon,
    linkActiveFunc,
    linkCallback,
    listOfLinks,
    openByDefault,
    rightIcon,
    sidebarExpand,
    staticDrawer,
    url,
    isHighlighted,
    darkerBackground,
    leftBorderHighlightDisabled,
    largerDrawerBottomPadding,
}) => {
    const [isOpen, setIsOpen] = useState(openByDefault);

    const toggleDrawer = () => {
        if (!isExpanded && typeof sidebarExpand === "function") {
            sidebarExpand();
            setIsOpen(true);
            return;
        }

        if (!isAlwaysOpen && !disabled) {
            setIsOpen(!isOpen);
        }
    };

    const isLinkActive = (link, func) => {
        if (typeof func === "function") {
            return func(link);
        }
        return window.location.href.indexOf(link.url) > 0;
    };

    const isCurrentPage = (link, linkActiveFunc) => {
        const targetItems = link.items || link.listOfLinks;
        if (link.url && isLinkActive(link, linkActiveFunc)) {
            return true;
        }
        return (
            targetItems &&
            targetItems.some((item) => isCurrentPage(item, linkActiveFunc))
        );
    };

    const buildLeftIconClasses = () => {
        let leftIcon = `left-icon`;

        if (isAlwaysOpen) {
            leftIcon += ` always-open`;
        }

        if (isHighlighted) {
            leftIcon += " fill-white";
        }

        return leftIcon;
    };

    // Classes for the link drawer button
    const currentPage = isCurrentPage(
        { items, listOfLinks, url },
        linkActiveFunc
    );
    const expandedClass = currentPage ? "expanded" : "";

    const renderLeftIcon = (leftIcon) => {
        if (leftIcon) {
            return (
                <svg
                    className={`${buildLeftIconClasses()}`}
                    aria-hidden="true"
                    focusable="false"
                >
                    {leftIcon}
                </svg>
            );
        }
    };

    const hasDarkerBackground = (darkerBackground) => {
        return darkerBackground ? "background-highlight" : "";
    };

    const hasDarkerTitle = (darkerBackground) => {
        return darkerBackground ? "expanded currentPage" : "";
    };

    const isLeftBorderHighlightDisabled = (leftBorderHighlightDisabled) => {
        return leftBorderHighlightDisabled ? "left-border-disabled" : "";
    };

    const isHiddenWhileCollapsed = (isLeftBorderDisabled, isExpanded) => {
        return isLeftBorderDisabled && !isExpanded
            ? "hidden-nav-link-item"
            : "";
    };

    const highlightTitle = (isHighlighted) => {
        return isHighlighted && isExpanded ? "highlight" : "";
    };

    const hasLargerDrawBottomPadding = (largerDrawerBottomPadding) => {
        return largerDrawerBottomPadding ? "larger-drawer-bottom-padding" : "";
    };

    const adjustItemSpacing = (largerDrawerBottomPadding) => {
        return largerDrawerBottomPadding ? "larger-item-spacing" : "";
    };

    useEffect(() => {
        if (disabled) {
            setIsOpen(false);
        }
        if (isAlwaysOpen) {
            setIsOpen(isAlwaysOpen);
        }
    }, []);

    // Render the links recursively.  This will theoretically allow for an infinite number of nested link items.
    // className will either be empty, parent-link - top most node, or child-link.
    const renderDrawerLinksRecursively = (navLinks, className = "") => {
        return (
            navLinks &&
            navLinks.map((link) => {
                if (link.type === "divider") {
                    return (
                        <AnimationGroup display={true}>
                            <hr />
                        </AnimationGroup>
                    );
                }

                return (
                    <li
                        key={link.label}
                        className={
                            isLinkActive(link, linkActiveFunc)
                                ? `active-link ${className}`
                                : className
                        }
                    >
                        {link.url ? (
                            <a
                                href={link.url}
                                onClick={(e) =>
                                    handleNavigation(
                                        e,
                                        linkCallback,
                                        link.label
                                    )
                                }
                                tabIndex={isOpen ? "0" : "-1"}
                                data-track-category="SidebarNav"
                                data-track-action={`GoTo${
                                    link.label
                                        ? link.label.split(" ").join("")
                                        : ""
                                }`}
                                data-track-label={link.label}
                                target="_self"
                            >
                                {link.label}
                            </a>
                        ) : (
                            <div>{link.label}</div>
                        )}
                        {link.items && link.items.length > 0 && (
                            <ul aria-hidden={!isOpen}>
                                {renderDrawerLinksRecursively(
                                    link.items,
                                    "child-link"
                                )}
                            </ul>
                        )}
                    </li>
                );
            })
        );
    };

    return (
        <div
            className={
                staticDrawer ? "static-drawer link-drawer" : "link-drawer"
            }
        >
            <button
                onClick={toggleDrawer}
                {...(!isAlwaysOpen ? { "aria-pressed": isOpen } : {})}
                tabIndex="0"
                aria-label={label}
                {...(isAlwaysOpen || disabled
                    ? { disabled: isAlwaysOpen || disabled }
                    : {})}
                className={`${className} ${expandedClass} ${highlightTitle(
                    isHighlighted
                )} ${hasDarkerTitle(darkerBackground)}
         ${currentPage ? "currentPage" : ""} ${isLeftBorderHighlightDisabled(
                    leftBorderHighlightDisabled
                )}
         ${isHiddenWhileCollapsed(leftBorderHighlightDisabled, isExpanded)}`}
            >
                <div
                    className={isExpanded ? "link-body" : "link-body collapsed"}
                >
                    {renderLeftIcon(leftIcon)}
                    <AnimationGroup display={isExpanded}>
                        <span>{label}</span>
                    </AnimationGroup>
                </div>
                {isExpanded && !isAlwaysOpen && (
                    <svg
                        className={`${
                            isOpen ? "right-icon rotated" : "right-icon"
                        }`}
                        focusable="false"
                        aria-hidden="true"
                    >
                        {rightIcon}
                    </svg>
                )}
            </button>
            <AnimationGroup display={isExpanded}>
                <div
                    className={`${currentPage ? "currentPage" : ""} ${
                        isOpen && !disabled ? "drawer open" : "drawer"
                    } ${hasDarkerBackground(
                        darkerBackground
                    )} ${hasLargerDrawBottomPadding(
                        largerDrawerBottomPadding
                    )}`}
                >
                    <ul aria-hidden={!isOpen}>
                        {listOfLinks &&
                            renderDrawerLinksRecursively(
                                listOfLinks,
                                `parent-link ${adjustItemSpacing(
                                    largerDrawerBottomPadding
                                )}`
                            )}
                    </ul>
                </div>
            </AnimationGroup>
        </div>
    );
};

NavLinkDrawer.propTypes = {
    isExpanded: PropTypes.bool,
    isAlwaysOpen: PropTypes.bool,
    openByDefault: PropTypes.bool,
    className: PropTypes.string,
    rightIcon: PropTypes.element,
    leftIcon: PropTypes.element,
    label: PropTypes.string,
    linkActiveFunc: PropTypes.func,
    linkCallback: PropTypes.func,
    listOfLinks: PropTypes.array,
    disabled: PropTypes.bool,
    sidebarExpand: PropTypes.func,
    staticDrawer: PropTypes.bool,
    items: PropTypes.object,
    url: PropTypes.string,
    isHighlighted: PropTypes.bool,
    darkerBackground: PropTypes.bool,
    leftBorderHighlightDisabled: PropTypes.bool,
    largerDrawerBottomPadding: PropTypes.bool,
};

export default NavLinkDrawer;
