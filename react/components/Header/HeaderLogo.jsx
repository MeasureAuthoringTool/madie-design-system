import React from 'react';

import { useHeaderState } from './hooks';

const HeaderLogo = () => {
  const { closeMenus, RouterLink } = useHeaderState();
  if (RouterLink) {
    return (
      <RouterLink
        className="header-logo"
        to="/"
        onClick={closeMenus}
        data-track-category="HeaderNav"
        data-track-action="OpenQPPHome"
        data-track-label="Quality Payment Program"
      >
        <img
          className="qpp-logo"
          src="/images/qpp_logo_rgb_color.png"
          alt="QPP logo"
        />
      </RouterLink>
    );
  }
  return (
    <a
      className="header-logo"
      href="/"
      data-track-category="HeaderNav"
      data-track-action="OpenQPPHome"
      data-track-label="Quality Payment Program"
    >
      <img
        className="qpp-logo"
        src="/images/qpp_logo_rgb_color.png"
        alt="QPP logo"
      />
    </a>
  );
};

export default HeaderLogo;
