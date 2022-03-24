import React from "react";
import PropTypes from "prop-types";
import cookie from "cookie";
import jwtDecode from "jwt-decode";

import { NavLinkContainer, NavLinkInline, NavLinkDrawer } from "../Links";
import AnimationGroup from "../AnimationGroup/AnimationGroup";
import defaultContent from "../UI/default-content";
import {
    AccountHomeIcon,
    DashboardIcon,
    FacilityBasedPreviewIcon,
    HardshipIcon,
    HelpSupportIcon,
    ManageUsersIcon,
    MyApplicationsIcon,
    MyTestDataIcon,
    PaymentIcon,
    PhysicianCompareIcon,
    StarIcon,
    TargetIcon,
    IndividualReporting,
} from "../../../lib/SvgComponents";
import {
    dashboardUrl,
    facilityBasedPreviewBaseUrl,
    feedbackUrl,
    manageUrl,
    physicianCompareUrl,
    reportsPortalUrl,
    submissionsUrl,
} from "../helpers";

const getIcon = (url) =>
    ({
        [dashboardUrl]: DashboardIcon,
        [feedbackUrl]: StarIcon,
        [manageUrl]: ManageUsersIcon,
        [physicianCompareUrl]: PhysicianCompareIcon,
        [reportsPortalUrl]: HardshipIcon,
        [submissionsUrl]: AccountHomeIcon,
        [facilityBasedPreviewBaseUrl]: FacilityBasedPreviewIcon,
        "/developers": HelpSupportIcon,
        "/resources/help-and-support": HelpSupportIcon,
        "/user/apm-incentive-payments": PaymentIcon,
        "/user/applications": MyApplicationsIcon,
        "/user/exception/#/landing": HardshipIcon,
        "/user/targeted-review/#/landing": TargetIcon,
        "/user/test-data": MyTestDataIcon,
        "/user/self-nomination/#/landing": IndividualReporting,
        "/user/reviewers": DashboardIcon,
        "/reviewer/exception": HardshipIcon,
        "/reviewer/targeted-review": TargetIcon,
        "/self-nomination": IndividualReporting,
    }[url] || null);

const LevelOneContent = ({
    isExpanded,
    config: { linkCallback, useTooltips } = {},
    levelOneContent,
}) => {
    let {
        qpp_has_authorizations,
        user_has_apm_payments,
        qpp_is_dev_pre,
        qpp_ehr_authorized,
        qpp_has_non_registry_authorizations,
        qpp_auth_token,
        qpp_cms_internal_authorized,
        qpp_can_impersonate,
    } = cookie.parse(document.cookie);

    let name = "";
    if (qpp_auth_token) {
        const { firstName, lastName } = jwtDecode(qpp_auth_token);
        name = `${firstName} ${lastName}`;
    }

    const canImpersonate = qpp_can_impersonate === "true";
    const hasAuthorizations = qpp_has_authorizations === "true";
    const hasApmPayments = user_has_apm_payments === "true";
    const isDevPre = qpp_is_dev_pre === "true";
    const internalReviewerNames = JSON.parse(
        qpp_cms_internal_authorized || "null"
    );
    const ehrAuthorized = qpp_ehr_authorized === "true";
    const hasNonRegistryAuthorizations =
        qpp_has_non_registry_authorizations === "true";

    const linkClass = isExpanded ? "link-inline" : "link-collapsed";
    let content = isDevPre ? levelOneContent?.devPre : levelOneContent?.default;
    if (
        (internalReviewerNames || []).some(
            (name) =>
                name === "QPP Self-Nomination" ||
                name === "QPP Targeted Review & Exceptions"
        )
    ) {
        content =
            levelOneContent?.internalReviewers ||
            defaultContent.internalReviewers;
    }

    // Mapping side nav link urls to the conditions that determine their inclusion in the side nav
    const urlConditionMap = {
        [dashboardUrl]: hasAuthorizations,
        [feedbackUrl]: hasAuthorizations,
        "/user/apm-incentive-payments": hasApmPayments,
        [physicianCompareUrl]: hasNonRegistryAuthorizations,
        [reportsPortalUrl]: hasAuthorizations,
        [facilityBasedPreviewBaseUrl]: hasAuthorizations,
        "/user/impersonate": canImpersonate,

        "/reviewer/exception": (internalReviewerNames || []).includes(
            "QPP Targeted Review & Exceptions"
        ),
        "/reviewer/targeted-review": (internalReviewerNames || []).includes(
            "QPP Targeted Review & Exceptions"
        ),
        "/self-nomination": (internalReviewerNames || []).includes(
            "QPP Self-Nomination"
        ),

        // dev pre
        "/user/applications": ehrAuthorized,
        "/user/test-data": ehrAuthorized,
    };

    const navLinks = content.reduce((acc, link) => {
        const { url, label, className, listOfLinks, ...rest } = link;

        // Any links failing the corresponding condition in the urlConditionMap are skipped
        if (url in urlConditionMap && !urlConditionMap[url]) {
            return acc;
        }

        const IconComponent = getIcon(url);
        const Icon = IconComponent ? <IconComponent /> : null;
        const sharedProps = {
            url,
            label,
            linkCallback,
            className: className ? `${linkClass} ${className}` : linkClass,
        };

        const { pathname, hash } = window.location;
        const filteredListOfLinks = (listOfLinks || []).filter((sublink) => {
            return !(
                sublink.url in urlConditionMap && !urlConditionMap[sublink.url]
            );
        });
        if (
            filteredListOfLinks?.length > 0 &&
            (pathname === url ||
                filteredListOfLinks.some(
                    (sublink) =>
                        pathname === sublink.url ||
                        `${pathname}${hash}` === sublink.url
                ))
        ) {
            acc.push(
                <NavLinkDrawer
                    key={`nav-drawer-${url}-${label}`}
                    leftIcon={Icon}
                    listOfLinks={filteredListOfLinks}
                    isExpanded={isExpanded}
                    staticDrawer={false}
                    openByDefault
                    isAlwaysOpen
                    {...sharedProps}
                    {...rest}
                />
            );
        } else {
            acc.push(
                <NavLinkInline
                    key={`nav-link-${url}-${label}`}
                    icon={Icon}
                    useTooltips={useTooltips}
                    showLabel={isExpanded}
                    {...sharedProps}
                    {...rest}
                />
            );
        }
        return acc;
    }, []);

    return (
        <div className="sidebar-content">
            <AnimationGroup display={isExpanded}>
                <h1 className="label">{name}</h1>
            </AnimationGroup>
            <div className="level-one-nav animation-flat">
                <NavLinkContainer listOfLinks={navLinks} />
            </div>
        </div>
    );
};

LevelOneContent.propTypes = {
    isExpanded: PropTypes.bool,
    config: PropTypes.object,
    levelOneContent: PropTypes.shape({
        default: PropTypes.arrayOf(PropTypes.object),
        devPre: PropTypes.arrayOf(PropTypes.object),
        viewer: PropTypes.arrayOf(PropTypes.object),
        internalReviewers: PropTypes.arrayOf(PropTypes.object),
    }),
};

export default LevelOneContent;
