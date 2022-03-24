import React from "react";
import {
    NavLinkContainer,
    NavLinkInline,
    NavLinkDrawer,
    NavItemInline,
} from "../Links";
import AnimationGroup from "../AnimationGroup/AnimationGroup";
import { PracticeDetails } from "../Details";
import { ScoreChart } from "../Chart";
import PropTypes from "prop-types";
import {
    AccountHomeIcon,
    DashboardIcon,
    StarIcon,
    CliniciansIcon,
    ScoreIncrease,
    TooltipIcon,
} from "../../../lib/SvgComponents.jsx";
import {
    submissionsUrl,
    manageUrl,
    dashboardUrl,
    performanceFeedbackUrl,
} from "../helpers";

const PAST_REPORTING_YEARS = ["2017", "2018"];

const LevelTwoContent = ({
    isExpanded,
    chartData,
    showReportingLinks,
    config: {
        chartActive = true,
        openDrawersByDefault,
        linkCallback,
        updateTime,
        practiceId,
        practiceName,
        practiceTin,
        apmEntityId,
        isConnectedUsersPage,
        vgId,
        roleAbbr,
        performanceYear,
        finalFeedbackOpen,
        isApmPaymentDetailsPage,
        useTooltips,
        cpcPlusId,
        pcfId,
    } = {},
}) => {
    const linkClass = isExpanded ? "link-inline" : "link-collapsed";
    let links = [];

    if (isApmPaymentDetailsPage) {
        const apmDetailsUrl =
            "/user/apm-incentive-payments/(.*)/practice-details";
        links.push(
            <NavItemInline
                icon={<CliniciansIcon />}
                className={linkClass}
                label="Payment Details"
                urlExpressionToMatch={apmDetailsUrl}
                showLabel={isExpanded}
            />
        );
    } else {
        const linkLabel = isConnectedUsersPage
            ? "Connected Users"
            : "Eligibility & Reporting";
        let items = [];

        const practiceUrlSegment =
            performanceYear === "2017" ||
            performanceYear === "2018" ||
            !roleAbbr
                ? practiceId
                : practiceId + "_" + roleAbbr;

        if (showReportingLinks && !apmEntityId) {
            items = [
                {
                    url: `${submissionsUrl}/reporting/${practiceUrlSegment}/overview`,
                    label: vgId
                        ? "Virtual Group Reporting"
                        : "Group Reporting Overview",
                    items: [
                        {
                            url: `${submissionsUrl}/reporting/${practiceUrlSegment}/quality`,
                            label: "Quality Measures",
                        },
                        {
                            url: `${submissionsUrl}/reporting/${practiceUrlSegment}/aci`,
                            label: "Promoting Interoperability",
                        },
                        {
                            url: `${submissionsUrl}/reporting/${practiceUrlSegment}/ia`,
                            label: "Improvement Activities",
                        },
                    ],
                },
            ];
        }
        links.push(
            <NavLinkDrawer
                key="connected-clinicians-link"
                isAlwaysOpen
                url={
                    !isConnectedUsersPage
                        ? `${dashboardUrl}`
                        : `${manageUrl}/${practiceId}/connected-users`
                }
                isExpanded={isExpanded}
                openByDefault={openDrawersByDefault}
                leftIcon={<DashboardIcon />}
                className={linkClass}
                label={linkLabel}
                linkCallback={linkCallback}
                listOfLinks={
                    !isConnectedUsersPage && [
                        {
                            label: vgId
                                ? "Virtual Group Details & Participants"
                                : apmEntityId
                                ? "APM Entity Details & Participants"
                                : "Practice Details & Clinicians",
                            items: items,
                        },
                    ]
                }
                disabled={isConnectedUsersPage ? true : false}
            />
        );
        if (
            (apmEntityId && performanceYear === "2018" && finalFeedbackOpen) ||
            (!apmEntityId &&
                !vgId &&
                !isConnectedUsersPage &&
                PAST_REPORTING_YEARS.indexOf(performanceYear) >= 0)
        ) {
            links.push(
                <NavLinkInline
                    key="performance-feedback-link"
                    icon={<StarIcon />}
                    className={linkClass}
                    url={performanceFeedbackUrl(
                        finalFeedbackOpen && performanceYear === "2018"
                            ? performanceYear
                            : "2017"
                    )}
                    label="Performance Feedback"
                    linkCallback={linkCallback}
                    showLabel={isExpanded}
                    useTooltips={useTooltips}
                />
            );
        }
    }

    return (
        <div className="sidebar-content">
            <AnimationGroup display={isExpanded}>
                <NavLinkInline
                    icon={<AccountHomeIcon />}
                    url={submissionsUrl}
                    label="Account Home"
                    showLabel={isExpanded}
                    className="account-home-link"
                    linkCallback={linkCallback}
                    useTooltips={useTooltips}
                />
                <hr />
            </AnimationGroup>
            <AnimationGroup display={isExpanded} className={"details"}>
                <PracticeDetails
                    practiceName={practiceName}
                    {...(!practiceTin ? {} : { practiceTin })}
                    {...(!apmEntityId ? {} : { apmEntityId })}
                    {...(!vgId ? {} : { vgId })}
                    {...(!cpcPlusId ? {} : { cpcPlusId })}
                    {...(!pcfId ? {} : { pcfId })}
                />
                <hr />
            </AnimationGroup>
            <div className="level-two-nav animation-flat">
                <NavLinkContainer listOfLinks={links} />
                <AnimationGroup
                    display={isExpanded && chartActive}
                    className="chart"
                >
                    <div>
                        <hr />
                        <div className="chart-title">
                            <p className="title">Final Group Score</p>
                            <p className="disclaimer">
                                <svg className="left-icon" aria-hidden="true">
                                    <ScoreIncrease />
                                </svg>
                                Score may increase
                                <svg className="right-icon" aria-hidden="true">
                                    <TooltipIcon />
                                </svg>
                            </p>
                            {updateTime && (
                                <p className="timestamp">
                                    Last update at {updateTime}
                                </p>
                            )}
                        </div>
                        <ScoreChart
                            chartData={chartData}
                            linkCallback={linkCallback}
                        />
                    </div>
                </AnimationGroup>
            </div>
        </div>
    );
};

LevelTwoContent.propTypes = {
    isExpanded: PropTypes.bool,
    config: PropTypes.object,
    chartData: PropTypes.object,
    showReportingLinks: PropTypes.bool,
};

export default LevelTwoContent;
