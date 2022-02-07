import React from 'react';
import PropTypes from 'prop-types';

import { useHeaderState } from './hooks';
import NavigationButtonIcon from './NavigationButtonIcon';
import { setUtagLink } from './utag-helpers';

const HeaderMenuButton = ({ href, name }) => {
  const { RouterLink, closeMenus } = useHeaderState();
  if (RouterLink) {
    return (
      <RouterLink
        className="btn btn-navigation inverse-hover header-menu-btn"
        to={href}
        onClick={() => {
          closeMenus();
          setUtagLink('main navbar', 'click', href);
        }}
        data-track-category="TopNav"
        data-track-action="click"
        data-track-label={name}
      >
        {name}
        <NavigationButtonIcon />
      </RouterLink>
    );
  }
  return (
    <a
      className="btn btn-navigation inverse-hover header-menu-btn"
      href={href}
      data-track-category="TopNav"
      data-track-action="click"
      data-track-label={name}
      onClick={() => {
        setUtagLink('main navbar', 'click', href);
      }}
    >
      {name}
      <NavigationButtonIcon />
    </a>
  );
};

HeaderMenuButton.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default HeaderMenuButton;
