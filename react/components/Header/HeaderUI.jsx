import React, { useState } from "react";
import PropTypes from "prop-types";

import HeaderAccountMenu from "./HeaderAccountMenu.jsx";
import HeaderCancel from "./HeaderCancel.jsx";
import HeaderContainer from "./HeaderContainer";
import HeaderMenuItem from "./HeaderMenuItem";
import HeaderMobileButton from "./HeaderMobileButton";
import ImpersonatorBanner from "./ImpersonatorBanner";
import HelpIcon from "./HelpIcon";
import defaultHeaderContent from "./default-content.json";
import { HeaderStateProvider } from "./hooks";
import useGetConfig from "../hooks/useGetConfig";

const HeaderUI = ({
    fbpPerformanceYear,
    feedbackPerformanceYear,
    handleCancel,
    includeSkipToSidebar,
    isDevPre,
    isLoginEnabled,
    performanceYear,
    showCancelButton,
    showPhysicianCompareLink,
    showFacilityBasedPreviewLink,
    skipToContentId,
    RouterLink,
    isIESupportPage,
}) => {
    const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);

    const mapContentToRows = (config) => {
        // Append transposed array to content
        return config?.map((section) => {
            // Only header items with multiple columns need to be transposed
            // Single column menus' tab order will remain the same
            if (section.columns?.length > 1) {
                const { columns } = section;
                return {
                    ...section,
                    rows: columns[0].map((_, colIndex) =>
                        columns.map((row) => row[colIndex])
                    ),
                };
            }
            return { ...section, rows: section.columns };
        });
    };

    const result = useGetConfig({
        localStorageName: "qpp_top_nav_content",
        url: "/config/header",
        timeout: 30,
        defaultContent: defaultHeaderContent,
    });

    const content = mapContentToRows(result?.content);

    if (showCancelButton) {
        return (
            <HeaderStateProvider RouterLink={RouterLink}>
                <HeaderContainer
                    showCancelButton
                    skipToContentId={skipToContentId}
                    includeSkipToSidebar={includeSkipToSidebar}
                >
                    <HeaderCancel handleCancel={handleCancel} />
                </HeaderContainer>
            </HeaderStateProvider>
        );
    }

    if (isDevPre) {
        return (
            <HeaderStateProvider RouterLink={RouterLink}>
                <HeaderContainer
                    isIESupportPage={isIESupportPage}
                    skipToContentId={skipToContentId}
                    includeSkipToSidebar={includeSkipToSidebar}
                >
                    <nav
                        aria-label="Primary navigation"
                        hidden={!isMobileMenuExpanded}
                    >
                        <ul className="navigation-menu">
                            <HeaderAccountMenu
                                isDevPre
                                isLoginEnabled={isLoginEnabled}
                            />
                        </ul>
                    </nav>
                </HeaderContainer>
            </HeaderStateProvider>
        );
    }

    if (!content) {
        return null;
    }

    return (
        <HeaderStateProvider RouterLink={RouterLink}>
            <HeaderContainer
                isIESupportPage={isIESupportPage}
                skipToContentId={skipToContentId}
                includeSkipToSidebar={includeSkipToSidebar}
            >
                <HelpIcon />
                <HeaderMobileButton
                    handleClick={() =>
                        setIsMobileMenuExpanded(!isMobileMenuExpanded)
                    }
                    isMobileMenuExpanded={isMobileMenuExpanded}
                />
                <nav
                    aria-label="Primary navigation"
                    hidden={!isMobileMenuExpanded}
                >
                    <ul className="navigation-menu navigation-new-style">
                        {content.map((header) => (
                            <HeaderMenuItem
                                handleClick={() => {
                                    setIsMobileMenuExpanded(
                                        !isMobileMenuExpanded
                                    );
                                }}
                                isMobileMenuExpanded={isMobileMenuExpanded}
                                key={header.name}
                                {...header}
                            />
                        ))}
                        <HeaderAccountMenu
                            handleClick={() =>
                                setIsMobileMenuExpanded(!isMobileMenuExpanded)
                            }
                            fbpPerformanceYear={fbpPerformanceYear}
                            feedbackPerformanceYear={feedbackPerformanceYear}
                            isLoginEnabled={isLoginEnabled}
                            performanceYear={performanceYear}
                            showPhysicianCompareLink={showPhysicianCompareLink}
                            showFacilityBasedPreviewLink={
                                showFacilityBasedPreviewLink
                            }
                        />
                    </ul>
                </nav>
            </HeaderContainer>
            <ImpersonatorBanner />
        </HeaderStateProvider>
    );
};

HeaderUI.propTypes = {
    fbpPerformanceYear: PropTypes.string,
    feedbackPerformanceYear: PropTypes.string,
    handleCancel: PropTypes.func,
    includeSkipToSidebar: PropTypes.bool,
    isDevPre: PropTypes.bool,
    isLoginEnabled: PropTypes.bool,
    performanceYear: PropTypes.number,
    showCancelButton: PropTypes.bool,
    showPhysicianCompareLink: PropTypes.bool,
    showFacilityBasedPreviewLink: PropTypes.bool,
    skipToContentId: PropTypes.string,
    RouterLink: PropTypes.func,
    isIESupportPage: PropTypes.bool,
};
HeaderUI.defaultProps = {
    fbpPerformanceYear: null,
    feedbackPerformanceYear: null,
    handleCancel: Function.prototype,
    includeSkipToSidebar: false,
    isDevPre: false,
    isLoginEnabled: true,
    performanceYear: 2017,
    showCancelButton: false,
    showPhysicianCompareLink: false,
    showFacilityBasedPreviewLink: false,
    skipToContentId: null,
    RouterLink: null,
    isIESupportPage: false,
};

export default HeaderUI;
