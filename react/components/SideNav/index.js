import React from 'react';
import { render } from 'react-dom';
import { SideNavUI } from './UI';

const SideNav = (options = {}) => {
  const {
    rootElement,
    isExpanded,
    onExpanded,
    onCollapsed,
    chartData,
    currentLevel,
    config,
    feedbackPerformanceYear,
    fbpPerformanceYear,
    showDevPreDfpLink,
    showPhysicianCompareLink,
    showFacilityBasedPreviewLink,
    showSelfNomination,
    showApmIncentivePaymentLink,
    items,
    isAltStyle,
    showReportsPortal,
    showTargetedReviewLink,
  } = options;

  const { expand, collapse } = render(
    <SideNavUI
      isExpanded={isExpanded}
      onExpanded={onExpanded}
      onCollapsed={onCollapsed}
      chartData={chartData}
      currentLevel={currentLevel}
      config={config}
      feedbackPerformanceYear={feedbackPerformanceYear}
      fbpPerformanceYear={fbpPerformanceYear}
      showDevPreDfpLink={showDevPreDfpLink}
      showPhysicianCompareLink={showPhysicianCompareLink}
      showFacilityBasedPreviewLink={showFacilityBasedPreviewLink}
      showSelfNomination={showSelfNomination}
      showApmIncentivePaymentLink={showApmIncentivePaymentLink}
      items={items}
      isAltStyle={isAltStyle}
      showReportsPortal={showReportsPortal}
      showTargetedReviewLink={showTargetedReviewLink}
    />,
    rootElement
  );

  return { expand, collapse };
};

export default SideNav;
