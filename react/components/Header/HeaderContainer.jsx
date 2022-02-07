import React from 'react';
import PropTypes from 'prop-types';

import HeaderLogo from './HeaderLogo';
import NotificationBanner from '../NotificationBanner';

/**
 * Accessibility enhancement that moves focus to an element for "Skip" links
 * @param {Object} e - The native JS event
 * @param {String} id - The HTML ID of the element to be focused
 */
function jumpToLink(e, id) {
  e.preventDefault();
  document.getElementById(id).focus();
}

const HeaderContainer = ({
  children,
  includeSkipToSidebar,
  showCancelButton,
  skipToContentId,
  isIESupportPage,
}) => (
  <>
    <a
      className="skip"
      onClick={(e) => jumpToLink(e, `${skipToContentId || 'mainContent'}`)}
      href={`#${skipToContentId || 'mainContent'}`}
    >
      Skip to content
    </a>
    {includeSkipToSidebar && (
      <a
        className="skip"
        onClick={(e) => jumpToLink(e, 'qppSidebar')}
        href="#qppSidebar"
      >
        Skip to sidebar
      </a>
    )}
    {!isIESupportPage && <NotificationBanner />}
    <header id="top" className={showCancelButton ? 'show-cancel-button' : ''}>
      <HeaderLogo />
      {children}
    </header>
  </>
);

HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
  includeSkipToSidebar: PropTypes.bool,
  showCancelButton: PropTypes.bool,
  skipToContentId: PropTypes.string,
  isIESupportPage: PropTypes.bool,
};
HeaderContainer.defaultProps = {
  includeSkipToSidebar: false,
  showCancelButton: false,
  skipToContentId: null,
  isIESupportPage: false,
};

export default HeaderContainer;
