import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NavLinkContainer = ({ listOfLinks, linkActiveFunc }) => {
  const [activeLink, setActiveLink] = useState(null);

  const toggleActive = (idx, disabled) => {
    if (disabled || linkActiveFunc) return;
    setActiveLink(idx);
  };

  return (
    <nav>
      <ul>
        {(listOfLinks || []).map((link, idx) => (
          <li
            key={idx.toString()}
            onClick={() => toggleActive(idx, link.props.disabled)}
          >
            {React.cloneElement(link, { isActive: activeLink === idx })}
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavLinkContainer.propTypes = {
  listOfLinks: PropTypes.array,
  linkActiveFunc: PropTypes.func,
};

NavLinkContainer.defaultProps = {
  listOfLinks: null,
  linkActiveFunc: null,
};

export default NavLinkContainer;
