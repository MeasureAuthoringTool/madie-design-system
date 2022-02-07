import React from 'react';
import { render } from 'react-dom';
import HeaderUI from './HeaderUI.jsx';

/**
 * Renders the QPP Header content.
 */
export default class Header {
  /**
   * @param {Object} options - An object containing content and config data
   * @param {Boolean} options.isLoginEnabled
   * @param {String} options.skipToContentId - The HTML ID of main content
   * @param {Boolean} options.includeSkipToSidebar
   * @param {Boolean} options.showCancelButton
   * @param {Boolean} options.showCovidLink
   * @param {Boolean} options.isIESupportPage
   * @param {HTMLElement} options.rootElement - Elem inside which to render
   */
  constructor(options) {
    render(
      <HeaderUI
        isLoginEnabled={options.isLoginEnabled}
        skipToContentId={options.skipToContentId}
        includeSkipToSidebar={options.includeSkipToSidebar}
        showCancelButton={options.showCancelButton}
        performanceYear={options.performanceYear}
        feedbackPerformanceYear={options.feedbackPerformanceYear}
        fbpPerformanceYear={options.fbpPerformanceYear}
        showPhysicianCompareLink={options.showPhysicianCompareLink}
        showFacilityBasedPreviewLink={options.showFacilityBasedPreviewLink}
        showCovidLink={options.showCovidLink}
        showMaqi={options.showMaqi}
        isDevPre={options.isDevPre}
        content={options.content}
        isIESupportPage={options.isIESupportPage}
      />,
      options.rootElement
    );
  }
}
