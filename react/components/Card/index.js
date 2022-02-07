import React from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';

const Card = ({
  children,
  className,
  cta,
  description,
  eyebrow,
  img,
  parentTag,
  responsive,
  routerComponent,
  size,
  title,
  variant,
}) => {
  const classes = [
    'qppds',
    'qpp-c-card',
    size && `qpp-c-card--${size}`,
    img && 'qpp-c-card--image',
    variant === 'flag' && responsive && 'qpp-c-xs-card--flag',
    variant === 'flag' && !responsive && 'qpp-c-card--flag',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Container = parentTag || 'div';
  const HeadingComponent = title?.headingLevel || 'h3';
  const LinkComponent = routerComponent || 'a';

  return (
    <Container className={classes}>
      <div className="qpp-c-card__content">
        <div className="qpp-c-card__header">
          {title && (
            <HeadingComponent className="h3 qpp-c-card__title">
              {typeof title === 'object' ? title.text : title}
            </HeadingComponent>
          )}
          {eyebrow && <span className="l2 qpp-c-card__eyebrow">{eyebrow}</span>}
        </div>
        {description && (
          <div className="qpp-c-card__body">
            <p className="p1">{description}</p>
          </div>
        )}
        {children && <div className="qpp-c-card__body">{children}</div>}
        {cta && (
          <div className="qpp-c-card__cta">
            {React.isValidElement(cta) ? (
              cta
            ) : (
              <LinkComponent
                href={cta.href}
                className="qpp-c-button qpp-c-button--text qpp-c-button--icon-after"
                {...cta}
              >
                {cta.text} <FeatherIcon icon={cta.icon || 'chevron-right'} />
              </LinkComponent>
            )}
          </div>
        )}
      </div>
      {img &&
        (() => {
          const { useBgImage, url, alt, ...restImg } = img;
          return (
            <div className="qpp-c-card__media">
              {useBgImage ? (
                <div
                  role="img"
                  style={{ backgroundImage: `url(${url})` }}
                  aria-label={alt}
                  {...restImg}
                />
              ) : (
                <img src={url} alt={alt} {...restImg} />
              )}
            </div>
          );
        })()}
    </Container>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cta: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string,
    }),
  ]),
  description: PropTypes.string,
  eyebrow: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
    useBgImage: PropTypes.bool,
  }),
  parentTag: PropTypes.string,
  responsive: PropTypes.bool,
  routerComponent: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string,
      headingLevel: PropTypes.string,
    }),
  ]),
  variant: PropTypes.oneOf(['default', 'flag']),
};

Card.defaultProps = {
  children: null,
  className: null,
  cta: null,
  description: null,
  eyebrow: null,
  img: null,
  parentTag: null,
  responsive: false,
  routerComponent: null,
  size: null,
  title: null,
  variant: 'default',
};

export default Card;
