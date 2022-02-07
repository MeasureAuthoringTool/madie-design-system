import React from 'react';
import { render } from 'react-dom';
import FlashNotificationUI from './FlashNotificationUI';

/**
 * Renders the Confirmation/Error Flash Component
 */
export default class FlashNotification {
  /**
   * @param {Object} options - An object containing content and config data
   * @param {Boolean} options.success - Whether to render a confirmation or error notification
   * @param {String} options.titleText - The title text displayed on the notification
   * @param {String} options.bodyText - The body text displayed on the notification
   * @param {HTMLElement} options.rootElement - Elem inside which to render
   */
  constructor(options) {
    if (options.hasOwnProperty('rootElement')) {
      render(
        <FlashNotificationUI
          success={options.success}
          titleText={options.titleText}
          bodyText={options.bodyText}
        />,
        options.rootElement
      );
    } else {
      render(<FlashNotificationUI />, options);
    }
  }
}
