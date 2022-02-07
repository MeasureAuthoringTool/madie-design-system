import React from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';

import Button from '../Button';

const getCtaButton = (button) => {
  if (button) {
    if (React.isValidElement(button)) {
      return button;
    }
    if (button.href) {
      const { href, text, ...restLink } = button;
      return (
        <a
          className="qpp-c-button qpp-c-button--secondary qpp-c-button--icon-after"
          href={href}
          {...restLink}
        >
          {text}
          <FeatherIcon icon="chevron-right" />
        </a>
      );
    }
    const { onClick, text, ...restButton } = button;
    return (
      <Button
        variant="secondary"
        className="qpp-c-button--icon-after"
        onClick={onClick}
        {...restButton}
      >
        {text}
        <FeatherIcon icon="chevron-right" />
      </Button>
    );
  }
  return null;
};

const CalloutBox = ({
  title,
  description,
  button,
  input,
  children,
  headerLevel,
}) => {
  const Header = `h${headerLevel}`;
  return (
    <aside className="qppds qpp-u-sm-padding--32 qpp-u-padding--24 qpp-u-fill--blue-70">
      {title && (
        <Header className="qpp-u-font-size--24 qpp-u-color--white qpp-u-margin-bottom--16 qpp-u-margin-top--0 qpp-u-font-weight--regular">
          {title}
        </Header>
      )}
      {description && (
        <p className="qpp-u-color--white qpp-u-margin-bottom--0 qpp-u-font-size--18">
          {description}
        </p>
      )}
      {children && (
        <div className="qpp-u-color--white qpp-u-margin-bottom--0 qpp-u-font-size--18">
          {children}
        </div>
      )}
      {(input || button) && (
        <div className="qpp-u-display--flex qpp-u-align-items--center qpp-u-flex-wrap--wrap qpp-u-margin-top--24">
          {input && (
            <input
              className="qpp-c-text-input qpp-u-sm-margin-right--16 qpp-u-margin-bottom--16 qpp-u-sm-margin-bottom--0 qpp-u-sm-width--auto qpp-u-width--100"
              type="text"
              {...input}
            />
          )}
          {getCtaButton(button)}
        </div>
      )}
    </aside>
  );
};

CalloutBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
  }),
  input: PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
  }),
  children: PropTypes.node,
  headerLevel: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CalloutBox.defaultProps = {
  title: null,
  description: null,
  button: null,
  input: null,
  children: null,
  headerLevel: 2,
};

export default CalloutBox;
