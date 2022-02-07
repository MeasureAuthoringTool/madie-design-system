import React from 'react';
import PropTypes from 'prop-types';

const VARIANTS = ['white', 'gray'];

const DSLink = ({
  className,
  href,
  download,
  ariaLabel,
  onClick,
  children,
  variant,
  ...rest
}) => {
  let linkClass = 'qpp-c-link';
  if (VARIANTS.includes(variant)) {
    variant === 'gray'
      ? (linkClass = linkClass.concat(' ', 'qpp-u-color--gray-60'))
      : (linkClass = linkClass.concat(' ', `qpp-u-color--${variant}`));
  }

  if (className) {
    linkClass = linkClass.concat(' ', className);
  }

  return (
    <a
      aria-label={ariaLabel}
      className={linkClass || ''}
      href={href}
      download={download}
      onClick={onClick}
      {...rest}
    >
      {children}
    </a>
  );
};

DSLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
  download: PropTypes.bool,
  variant: PropTypes.oneOf(VARIANTS),
};

DSLink.defaultProps = {
  children: null,
  className: '',
  href: '',
  ariaLabel: null,
  onClick: () => null,
  download: false,
  variant: null,
};

export default DSLink;
