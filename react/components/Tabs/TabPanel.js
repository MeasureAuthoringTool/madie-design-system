import React from 'react';
import PropTypes from 'prop-types';

export const TabPanel = ({ children, value, id, index, className, disabled }) => {
  const classes = ['qpp-c-tabs__panel', className].filter(Boolean).join(' ');
  return (
    <div
      role="tabpanel"
      id={id}
      aria-hidden={value !== index}
      aria-labelledby={`qpp-c-tabs__item--${id}`}
      aria-disabled={disabled}
      className={classes}
    >
      {value === index && children}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
  id: PropTypes.string,
  value: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
};

TabPanel.defaultProps = {
  index: 0,
  value: 0,
};

export default TabPanel;
