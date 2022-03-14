import React from 'react';
import PropTypes from 'prop-types';
import { Tab as MuiTab } from '@mui/material';

const Tab = ({ href, ...rest }) => {
  return (
    <MuiTab
      component="a"
      disableRipple
      onClick={(e) => {
        e.preventDefault();
        if (window.history && href) {
          window.history.replaceState({}, document.title, href);
        }
      }}
      className="qpp-c-tabs__item"
      {...rest}
    />
  );
};

Tab.propTypes = {
  href: PropTypes.string,
};

export default Tab
