import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SVGInline from "react-svg-inline";

import { withGetConfig } from "../../hooks/useGetConfig";
import { LevelOneContent, LevelTwoContent } from "../Content";
import {
    NavLinkContainer,
    NavLinkInline,
    NavLinkDrawer,
    NavLinkToggle,
} from "../Links";
import AnimationGroup from "../AnimationGroup/AnimationGroup";
import { PracticeDetails, IndividualDetails } from "../Details";
import { ScoreChart } from "../Chart";
import SanitizedContent from "../../SanitizedContent";
import * as SvgComponents from "../../../lib/SvgComponents.jsx";
import SVGIcons from "../../../lib/svg-definitions.svg";
import CmsSwitchLink from "../Links/CmsSwitchLink";
import defaultContent from "./default-content";

const SideNavUI = ({
    chartData,
    config,
    currentLevel,
    isAltStyle,
    isExpanded,
    items,
    onCollapsed,
    onExpanded,
    performanceYear,
    showReportingLinks,
    svgIcons,
    result,
}) => {
    const [isExpandedState, setIsExpandedState] = useState(isExpanded);
    const [itemsState, setItemsState] = useState(items);
    const [currentLevelState, setCurrentLevelState] = useState(currentLevel);

    const collapseRef = useRef(null);

    const expand = () => {
        setIsExpandedState(true);
        if (onExpanded) {
            onExpanded();
        }
    };

    const collapse = () => {
        setIsExpandedState(false);
        if (onCollapsed) {
            onCollapsed();
        }
    };

    const toggleExpanded = () => {
        isExpandedState ? collapse() : expand();
    };

    const getLevelContent = () => {
        return (
            {
                2: (
                    <LevelTwoContent
                        showReportingLinks={showReportingLinks}
                        isExpanded={isExpandedState}
                        chartData={chartData}
                        config={config}
                    />
                ),
            }[currentLevelState] || (
                <LevelOneContent
                    levelOneContent={result?.content}
                    isExpanded={isExpandedState}
                    config={config}
                />
            )
        );
    };

    const getDynamicContent = (contentItems, className, recursionId) => {
        const {
            openDrawersByDefault,
            linkActiveFunc,
            linkCallback,
            useTooltips,
        } = config;
        const linkClass = isExpandedState ? "link-inline" : "link-collapsed";
        const containerRecursionId = recursionId || 0;

        const getDynamicIcon = (icon) => {
            const Component = SvgComponents[icon];
            return Component ? <Component /> : null;
        };

        const hasDarkerBackground = (darkerBackground) => {
            return darkerBackground ? "hr-smaller-vertical-spacing" : "";
        };

        const itemsMarkup = (contentItems || []).map((item, index) => {
            const key = `${JSON.stringify(
                item
            )}-${index}-${containerRecursionId}`;
            return (
                {
                    divider: (
                        <AnimationGroup
                            display={isExpandedState}
                            key={key}
                            darkerBackground={item.darkerBackground}
                        >
                            <hr
                                className={`${hasDarkerBackground(
                                    item.darkerBackground
                                )}`}
                            />
                        </AnimationGroup>
                    ),
                    container: getDynamicContent(
                        item.items,
                        item.className,
                        containerRecursionId + 1
                    ),
                    linkBack: (
                        <AnimationGroup display={isExpandedState} key={key}>
                            <NavLinkInline
                                className="link-back"
                                icon={getDynamicIcon("ChevronLeft")}
                                url={item.url}
                                label={item.label}
                                linkCallback={linkCallback}
                                showLabel={true}
                                useTooltips={useTooltips}
                            />
                        </AnimationGroup>
                    ),
                    linkHome: (
                        <AnimationGroup display={isExpandedState} key={key}>
                            <NavLinkInline
                                className="account-home-link"
                                icon={getDynamicIcon(item?.icon)}
                                url={item.url}
                                label={item.label}
                                linkCallback={linkCallback}
                                showLabel={true}
                                useTooltips={useTooltips}
                            />
                        </AnimationGroup>
                    ),
                    practiceDetails: (
                        <AnimationGroup
                            display={isExpandedState}
                            className={"details"}
                            key={key}
                        >
                            <PracticeDetails
                                practiceName={item.practiceName}
                                {...(!item.practiceTin
                                    ? {}
                                    : { practiceTin: item.practiceTin })}
                                {...(!item.apmEntityId
                                    ? {}
                                    : { apmEntityId: item.apmEntityId })}
                                {...(!item.vgId ? {} : { vgId: item.vgId })}
                                {...(!item.cpcPlusId
                                    ? {}
                                    : { cpcPlusId: item.cpcPlusId })}
                                {...(!item.pcfId ? {} : { pcfId: item.pcfId })}
                            />
                        </AnimationGroup>
                    ),
                    individualDetails: (
                        <AnimationGroup display={isExpandedState} key={key}>
                            <IndividualDetails
                                individualName={item.individualName}
                                individualNpi={item.individualNpi}
                            />
                        </AnimationGroup>
                    ),
                    linkDrawer: (
                        <NavLinkDrawer
                            key={key}
                            isExpanded={isExpandedState}
                            isAlwaysOpen={item.isAlwaysOpen}
                            openByDefault={openDrawersByDefault}
                            rightIcon="chevron-down"
                            leftIcon={getDynamicIcon(item?.icon)}
                            className={linkClass}
                            label={item.label}
                            linkActiveFunc={linkActiveFunc}
                            linkCallback={linkCallback}
                            listOfLinks={item.items}
                            url={item.url}
                            sidebarExpand={expand}
                            isHighlighted={item.isHighlighted}
                            darkerBackground={item.darkerBackground}
                            leftBorderHighlightDisabled={
                                item.leftBorderHighlightDisabled
                            }
                            largerDrawerBottomPadding={
                                item.largerDrawerBottomPadding
                            }
                        />
                    ),
                    custom: (
                        <AnimationGroup display={isExpandedState} key={key}>
                            <SanitizedContent
                                html={item.content}
                                customClassName={item.customClassName}
                            />
                        </AnimationGroup>
                    ),
                    chart: (
                        <AnimationGroup display={isExpandedState} key={key}>
                            <ScoreChart
                                chartData={item.chartData}
                                linkCallback={linkCallback}
                                performanceYear={performanceYear}
                            />
                        </AnimationGroup>
                    ),
                    switchLink: (
                        <AnimationGroup display={isExpandedState} key={key}>
                            <CmsSwitchLink
                                linkCallback={linkCallback}
                                label={item.label}
                                url={item.url}
                            />
                        </AnimationGroup>
                    ),
                }[item.type] || (
                    <NavLinkInline
                        key={key}
                        icon={getDynamicIcon(item?.icon)}
                        className={item.className ? item.className : linkClass}
                        url={item.url}
                        label={item.label}
                        linkCallback={linkCallback}
                        showLabel={isExpandedState}
                        disabled={item.disabled}
                        useTooltips={useTooltips}
                        target={item.target}
                    />
                )
            );
        });

        if (className === "link-container") {
            return (
                <div
                    className="animation-flat"
                    key={`nav-link-container-${recursionId}`}
                >
                    <NavLinkContainer
                        listOfLinks={itemsMarkup}
                        linkActiveFunc={linkActiveFunc}
                    />
                </div>
            );
        } else {
            return <div className={className}>{itemsMarkup}</div>;
        }
    };

    const content = itemsState
        ? getDynamicContent(
              itemsState,
              "sidebar-content" + (isAltStyle ? " alt-style" : "")
          )
        : getLevelContent();

    useEffect(() => {
        setIsExpandedState(isExpanded);
    }, [isExpanded]);

    useEffect(() => {
        setCurrentLevelState(currentLevel);
    }, [currentLevel]);

    useEffect(() => {
        setItemsState(items);
    }, [items]);

    return (
        <aside
            id="qppSidebar"
            tabIndex="-1"
            className={`${
                isExpandedState ? "sidebar" : "sidebar closed"
            } sidebar-${config.navClassName}`}
        >
            <SVGInline svg={svgIcons} />
            {content}
            <NavLinkToggle
                isAltStyle={isAltStyle}
                collapseRef={collapseRef}
                isExpanded={isExpandedState}
                onClick={toggleExpanded}
            />
        </aside>
    );
};

SideNavUI.propTypes = {
    currentLevel: PropTypes.number,
    isExpanded: PropTypes.bool,
    onExpanded: PropTypes.func,
    onCollapsed: PropTypes.func,
    chartData: PropTypes.object,
    config: PropTypes.object,
    items: PropTypes.object,
    isAltStyle: PropTypes.bool,
    showReportingLinks: PropTypes.bool,
    performanceYear: PropTypes.string,
    svgIcons: PropTypes.string,
    result: PropTypes.shape({
        content: PropTypes.shape({
            default: PropTypes.arrayOf(PropTypes.object),
            devPre: PropTypes.arrayOf(PropTypes.object),
            internalReviewers: PropTypes.arrayOf(PropTypes.object),
            viewer: PropTypes.arrayOf(PropTypes.object),
        }),
    }),
};

SideNavUI.defaultProps = {
    currentLevel: 1,
    isExpanded: true,
    onExpanded: () => {},
    onCollapsed: () => {},
    chartData: {},
    config: {},
    items: null,
    isAltStyle: false,
    showReportingLinks: false,
    performanceYear: "2017",
    svgIcons: SVGIcons,
    result: {
        content: {
            default: [],
            devPre: [],
            internalReviewers: [],
            viewer: [],
        },
    },
};

export default withGetConfig(SideNavUI, {
    timeout: 5,
    url: "/config/side-navigation",
    localStorageName: "qpp_side_navigation",
    defaultContent,
});
