import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({
  breadcrumbClass,
  crumbs,
  dark,
  RouterLink,
  routerExcludedLinks,
}) => {
  return (
    <nav
      className={`qpp-c-breadcrumbs ${
        !dark ? 'qpp-c-breadcrumbs--light' : ''
      } ${breadcrumbClass}`}
      aria-label="Breadcrumbs"
    >
      <ol className="qpp-c-breadcrumbs__list">
        {crumbs.map((crumb, i) => {
          if (crumb.url) {
            if (RouterLink && !routerExcludedLinks.includes(crumb.url)) {
              return (
                <li className="qpp-c-breadcrumbs__list-item" key={crumb.title}>
                  <RouterLink
                    className="qpp-c-breadcrumbs__link"
                    to={crumb.url}
                    data-track-category={crumb.category}
                    data-track-action="Click"
                    data-track-label={crumb.label}
                  >
                    <span>{crumb.title}</span>
                  </RouterLink>
                </li>
              );
            }
            return (
              <li className="qpp-c-breadcrumbs__list-item" key={crumb.title}>
                <a
                  className="qpp-c-breadcrumbs__link"
                  href={crumb.url}
                  data-track-category={crumb.category}
                  data-track-action="Click"
                  data-track-label={crumb.label}
                >
                  <span>{crumb.title}</span>
                </a>
              </li>
            );
          } else {
            return (
              <li
                key={crumb}
                className={`${
                  i === crumbs.length - 1 ? 'sr-only' : ''
                } qpp-c-breadcrumbs__list-itemqpp-c-breadcrumbs__list-item--current`}
                aria-current="page"
              >
                <span>{crumb}</span>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  breadcrumbClass: PropTypes.string,
  crumbs: PropTypes.array.isRequired,
  dark: PropTypes.bool,
  RouterLink: PropTypes.func,
  routerExcludedLinks: PropTypes.array,
};

Breadcrumb.defaultProps = {
  breadcrumbClass: '',
  dark: false,
  RouterLink: null,
  routerExcludedLinks: [],
};

export default Breadcrumb;
