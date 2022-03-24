import React, { Fragment, useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useWindowWidth, useHeaderState } from "./hooks";
import HeaderMenuLink from "./HeaderMenuLink";
import HeaderMenuButton from "./HeaderMenuButton";
import HeaderMenuSignOutButton from "./HeaderMenuSignOutButton";
import Accordion from "../Accordion";
import { Chevron } from "../../lib/Chevron.jsx";

const menuSizes = {
    1: 315,
    2: 650,
    3: 890,
    4: 1200,
};

const excludedClickOutClasses = [
    "menu-dropdown-toggle",
    "nav-link",
    "nav-link-li",
    "dropdown-description",
    "dropdown-title",
    "dropdown-title-chevron-container",
    "signout-button",
    "submenu-section",
    "accordion",
    "accordion-title",
    "accordion-left-title",
    "header-menu-btn",
    "btn-navigation-icon",
];

const HeaderMenuItem = ({
    handleClick,
    isMobileMenuExpanded,
    columns,
    menuName,
    rows,
    name,
    subtitle,
    className,
}) => {
    const [isSubMenuFullWidth, setSubMenuFullWidth] = useState(false);
    const [openMobileSubMenu, setOpenMobileSubMenu] = useState("");

    const windowWidth = useWindowWidth();
    const menuButtonRef = useRef(null);
    const menuRef = useRef(null);
    const { RouterLink, handleToggleMenu, currentOpenMenu, closeMenus } =
        useHeaderState();
    const numColumns = (columns || []).length;

    const menuIdentifier = menuName || name;
    const isOpen = menuIdentifier === currentOpenMenu;

    useEffect(() => {
        const isMobile = windowWidth < 768;
        if (isOpen) {
            const shouldSetFullWidth =
                isMobile ||
                menuSizes[numColumns] >
                    menuButtonRef.current.getBoundingClientRect().right;
            setSubMenuFullWidth(shouldSetFullWidth);
        }
    }, [windowWidth, isOpen]);

    useEffect(() => {
        const listener = (event) => {
            if (
                !menuRef ||
                !menuRef.current ||
                menuRef.current.contains(event.target) ||
                excludedClickOutClasses.some((className) =>
                    event?.target?.classList.contains(className)
                )
            ) {
                return;
            }
            setOpenMobileSubMenu("");
            closeMenus();
        };
        document.addEventListener("mousedown", listener);
        return () => document.removeEventListener("mousedown", listener);
    }, [menuRef]);

    useEffect(() => {
        if (!isMobileMenuExpanded || !isOpen) {
            setOpenMobileSubMenu("");
        }
    }, [isMobileMenuExpanded, isOpen]);

    return (
        <li
            key={`header-item-${menuIdentifier}`}
            className={`header-item-${menuIdentifier}${
                isSubMenuFullWidth ? " full-width-menu" : ""
            }${className ? ` ${className}` : ""}`}
            ref={menuRef}
        >
            <button
                ref={menuButtonRef}
                className="menu-dropdown-toggle"
                aria-label={`${name} navigation dropdown`}
                aria-expanded={isOpen}
                aria-controls={`nav-section-${menuIdentifier}`}
                data-toggle="dropdown"
                onClick={() => handleToggleMenu(menuIdentifier)}
            >
                <div className="dropdown-title-chevron-container">
                    <span className="dropdown-title">{name}</span>
                    <div className="chevron-container">
                        <Chevron focusable="false" />
                    </div>
                </div>

                <span
                    className={`dropdown-description ${isOpen ? "active" : ""}`}
                >
                    {subtitle}
                </span>
            </button>
            <div
                className={`nav-section${isOpen ? " open" : ""}`}
                id={`nav-section-${menuIdentifier}`}
                hidden={!isOpen}
                data-columns={numColumns}
            >
                {rows.map((columnContent, index) => {
                    return (
                        <ul
                            key={`${menuIdentifier}-${index}`}
                            className="nav-column"
                        >
                            {columnContent.map((c, cIndex) => {
                                return (
                                    <Fragment
                                        key={`${menuIdentifier}-${index}-${cIndex}`}
                                    >
                                        <li className="submenu-section">
                                            {c.heading && (
                                                <h3 className="submenu-heading">
                                                    {c.heading}
                                                </h3>
                                            )}
                                            <ul>
                                                {c.items.map((item) => {
                                                    const isSubLink =
                                                        item.type === "sublink";
                                                    const componentsByType = {
                                                        button: HeaderMenuButton,
                                                        signout:
                                                            HeaderMenuSignOutButton,
                                                        link: HeaderMenuLink,
                                                        sublink: HeaderMenuLink,
                                                    };
                                                    const SubMenuComponent =
                                                        componentsByType[
                                                            item.type
                                                        ];
                                                    return (
                                                        <li
                                                            onClick={
                                                                handleClick
                                                            }
                                                            key={`item-link-${item.name}`}
                                                            className={
                                                                isSubLink
                                                                    ? "nav-link-li sublink"
                                                                    : "nav-link-li"
                                                            }
                                                        >
                                                            <SubMenuComponent
                                                                href={item.href}
                                                                name={item.name}
                                                                RouterLink={
                                                                    RouterLink
                                                                }
                                                            />
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                        {name === "MIPS" && (
                                            <li
                                                key={`${menuIdentifier}-mobile-${index}-${cIndex}`}
                                                className="submenu-section-mips-mobile"
                                                onClick={() => {
                                                    setOpenMobileSubMenu(
                                                        c.heading
                                                    );
                                                }}
                                            >
                                                <Accordion
                                                    title={c.heading}
                                                    isOpen={
                                                        isMobileMenuExpanded &&
                                                        openMobileSubMenu ===
                                                            c.heading
                                                    }
                                                >
                                                    <ul>
                                                        {c.items.map((item) => {
                                                            const isSubLink =
                                                                item.type ===
                                                                "sublink";
                                                            const componentsByType =
                                                                {
                                                                    button: HeaderMenuButton,
                                                                    signout:
                                                                        HeaderMenuSignOutButton,
                                                                    link: HeaderMenuLink,
                                                                    sublink:
                                                                        HeaderMenuLink,
                                                                };
                                                            const SubMenuComponent =
                                                                componentsByType[
                                                                    item.type
                                                                ];
                                                            return (
                                                                <li
                                                                    onClick={
                                                                        handleClick
                                                                    }
                                                                    key={`item-link-${item.name}`}
                                                                    className={
                                                                        isSubLink
                                                                            ? "sublink"
                                                                            : ""
                                                                    }
                                                                >
                                                                    <SubMenuComponent
                                                                        href={
                                                                            item.href
                                                                        }
                                                                        name={
                                                                            item.name
                                                                        }
                                                                        RouterLink={
                                                                            RouterLink
                                                                        }
                                                                    />
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </Accordion>
                                            </li>
                                        )}
                                    </Fragment>
                                );
                            })}
                        </ul>
                    );
                })}
            </div>
        </li>
    );
};

HeaderMenuItem.propTypes = {
    columns: PropTypes.array,
    menuName: PropTypes.string,
    rows: PropTypes.array,
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    className: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    isMobileMenuExpanded: PropTypes.bool.isRequired,
};
HeaderMenuItem.defaultProps = {
    menuName: "",
    columns: [],
    rows: [],
    className: null,
};

export default HeaderMenuItem;
