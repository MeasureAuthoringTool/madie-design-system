import React from 'react';
import PropTypes from 'prop-types';
import { CloseXIcon } from '../../lib/SvgComponents.jsx';

const HeaderMobileButton = ({ isMobileMenuExpanded, handleClick }) => (
  <button
    className="mobile-menu-btn-new"
    type="button"
    data-toggle="collapse"
    data-target="#nav-mobile"
    aria-label="Navigation menu"
    aria-expanded={isMobileMenuExpanded ? 'true' : 'false'}
    aria-controls="nav-mobile"
    onClick={handleClick}
  >
    {!isMobileMenuExpanded && (
      <div className="icon">
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </div>
    )}
    {isMobileMenuExpanded && (
      <svg className="close-icon" aria-hidden="true">
        <CloseXIcon />
      </svg>
    )}
    <div className="toggle-text">Menu</div>
  </button>
);

HeaderMobileButton.propTypes = {
  isMobileMenuExpanded: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default HeaderMobileButton;
