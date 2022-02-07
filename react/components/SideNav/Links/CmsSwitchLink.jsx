import React from 'react';
import PropTypes from 'prop-types';
import { handleNavigation } from '../helpers';
import { SwitchPractice, ChevronRight } from '../../../lib/SvgComponents.jsx';

const CmsSwitchLink = ({ linkCallback, url, label }) => {
  return (
    <div className="switch-container">
      <a
        href={url}
        onClick={(e) => handleNavigation(e, linkCallback, label)}
        className="switch-link"
      >
        <div className="button-partition">
          <svg className="icon">
            <SwitchPractice />
            <title>Switch Practice Icon</title>
          </svg>
          <span>{label}</span>
        </div>
        <div className="button-partition">
          <svg
            className="icon right-icon rotated"
            aria-hidden="true"
            focusable="false"
          >
            <ChevronRight />
          </svg>
        </div>
      </a>
    </div>
  );
};

CmsSwitchLink.propTypes = {
  linkCallback: PropTypes.func,
  url: PropTypes.string,
  label: PropTypes.string,
};

export default CmsSwitchLink;
