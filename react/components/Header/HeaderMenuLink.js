import React from "react";
import PropTypes from "prop-types";
import { submissionsUrl } from "../SideNav/helpers";
import { useHeaderState } from "./hooks";
import { setUtagLink } from "./utag-helpers";

// exclude submissions urls
const isNotExcluded = (href) => !href.includes(submissionsUrl);

const HeaderMenuLink = ({ href, name }) => {
    const { RouterLink, closeMenus } = useHeaderState();
    if (RouterLink && isNotExcluded(href)) {
        return (
            <RouterLink
                to={href}
                onClick={() => {
                    closeMenus();
                    setUtagLink("main navbar", "click", href);
                }}
                data-track-category="TopNav"
                data-track-action="click"
                data-track-label={name}
                className="nav-link"
            >
                {name}
            </RouterLink>
        );
    }
    return (
        <a
            href={href}
            className="nav-link"
            data-track-category="TopNav"
            data-track-action="click"
            data-track-label={name}
            onClick={() => {
                setUtagLink("main navbar", "click", href);
            }}
        >
            {name}
        </a>
    );
};

HeaderMenuLink.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default HeaderMenuLink;
