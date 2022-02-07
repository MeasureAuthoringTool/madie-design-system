import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import InfotipIcon from './InfotipIcon';

const BUTTON_SIZE = '16px';

const buttonStyle = {
  background: 'transparent',
  border: 0,
  padding: 0,
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  userSelect: 'none',
};

// Use basic touch handlers for mobile "tap-to-open" ui.  Mobile touch
// is currently not supported by @reach/tooltip; this may change in future.
// Leverages @reach/tooltip "focus" behavior to open tooltip on tap,
// and close tooltip on second tap or loss of focus.
// TODO: We may want to improve this by tracking touch positions to ensure
// that a 'touchend' event must be reasonably close to the tooltip target.
const touchHandlers = {
  onTouchStart: (e) => {
    e.stopPropagation();
  },
  onTouchEnd: (e) => {
    if (document.activeElement !== e.currentTarget) {
      e.preventDefault();
      e.currentTarget.focus();
    } else {
      e.preventDefault();
      e.currentTarget.blur();
    }
  },
};

/**
 * Tooltip with styled information icon
 */
const Infotip = ({ label, lightIcon, ...props }) => (
  <Tooltip label={label} {...props}>
    <button
      type="button"
      aria-label="Information"
      style={buttonStyle}
      {...touchHandlers}
    >
      <InfotipIcon
        lightIcon={lightIcon}
        width={BUTTON_SIZE}
        height={BUTTON_SIZE}
        aria-hidden
        style={{ float: 'left' }}
      />
    </button>
  </Tooltip>
);

Infotip.propTypes = {
  label: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  lightIcon: PropTypes.bool,
  DEBUG_STYLE: PropTypes.bool,
};

Infotip.defaultProps = {
  ariaLabel: undefined,
  lightIcon: false,
  DEBUG_STYLE: undefined,
};

export default Infotip;
