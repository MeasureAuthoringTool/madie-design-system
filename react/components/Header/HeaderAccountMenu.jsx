import React from 'react';
import PropTypes from 'prop-types';
import cookie from 'cookie';
import jwtDecode from 'jwt-decode';

import { useHeaderState } from './hooks';
import { setUtagLink } from './utag-helpers';
import SessionDialogUI from '../SessionDialogUI';
import {
  performanceFeedbackUrl,
  physicianCompareUrl,
  dashboardUrl,
  manageUrl,
  submissionsUrl,
  facilityBasedPreviewUrl,
} from '../SideNav/helpers';
import HeaderMenuItem from './HeaderMenuItem';

const HeaderAccountMenu = ({
  handleClick,
  fbpPerformanceYear,
  feedbackPerformanceYear,
  isLoginEnabled,
  isDevPre,
  performanceYear,
  showFacilityBasedPreviewLink,
  showPhysicianCompareLink,
}) => {
  const cookies = cookie.parse(document.cookie);
  const hasAuthToken = cookies.hasOwnProperty('qpp_auth_token');
  const hasAuthorizations = cookies.qpp_has_authorizations === 'true';
  const hasNonRegistryAuthorizations =
    cookies.qpp_has_non_registry_authorizations === 'true';
  const isDevPreAndNotAuthenticated = !hasAuthToken && isDevPre;
  const { closeMenus, RouterLink } = useHeaderState();

  if (!isLoginEnabled || isDevPreAndNotAuthenticated) {
    return null;
  }

  // login link
  if (!hasAuthToken) {
    if (RouterLink) {
      return (
        <li onClick={handleClick} className="header-item-login login">
          <RouterLink
            className="menu-link"
            to="/login"
            onClick={() => {
              closeMenus();
              setUtagLink('main navbar', 'click', '/login');
            }}
            data-track-category="TopNav"
            data-track-action="click"
            data-track-label="Sign In"
          >
            <div className="nav-title">Sign In</div>
            <div className="nav-description">
              Manage Account <br />
              and Register
            </div>
          </RouterLink>
        </li>
      );
    }
    return (
      <li className="header-item-login login">
        <a
          className="menu-link"
          href="/login"
          data-track-category="TopNav"
          data-track-action="click"
          data-track-label="Sign In"
          onClick={() => {
            setUtagLink('main navbar', 'click', '/login');
          }}
        >
          <div className="nav-title">Sign In</div>
          <div className="nav-description">
            Manage Account <br />
            and Register
          </div>
        </a>
      </li>
    );
  }

  if (hasAuthToken) {
    const { firstName } = jwtDecode(cookies.qpp_auth_token);
    const additionalLinks = [];
    if (hasAuthorizations) {
      additionalLinks.push(
        { type: 'link', href: dashboardUrl, name: 'Eligibility & Reporting' },
        {
          type: 'link',
          href: performanceFeedbackUrl(
            feedbackPerformanceYear || performanceYear
          ),
          name: 'Performance Feedback',
        }
      );
      if (showPhysicianCompareLink && hasNonRegistryAuthorizations) {
        additionalLinks.push({
          type: 'link',
          href: physicianCompareUrl,
          name: 'Doctors & Clinicians Preview',
        });
      }
      if (showFacilityBasedPreviewLink) {
        additionalLinks.push({
          type: 'link',
          href: facilityBasedPreviewUrl(fbpPerformanceYear || performanceYear),
          name: 'Facility Based Preview',
        });
      }
    }
    const columns = [
      [
        {
          items: [
            { type: 'link', href: submissionsUrl, name: 'Account Home' },
            ...additionalLinks,
            { type: 'link', href: manageUrl, name: 'Manage Access' },
            { type: 'signout', name: 'Sign Out' },
          ],
        },
      ],
    ];
    const devPreColumns = [
      [{ items: [{ type: 'signout', name: 'Sign Out' }] }],
    ];
    return (
      <>
        <SessionDialogUI />
        <HeaderMenuItem
          hasMenu
          menuName="Login"
          name={firstName}
          subtitle="My Account"
          className="account-menu-item"
          columns={isDevPre ? devPreColumns : columns}
          rows={isDevPre ? devPreColumns : columns}
        />
      </>
    );
  }
};

HeaderAccountMenu.propTypes = {
  isLoginEnabled: PropTypes.bool.isRequired,
  showPhysicianCompareLink: PropTypes.bool,
  showFacilityBasedPreviewLink: PropTypes.bool,
  performanceYear: PropTypes.number,
  fbpPerformanceYear: PropTypes.string,
  feedbackPerformanceYear: PropTypes.string,
  isDevPre: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

HeaderAccountMenu.defaultProps = {
  showPhysicianCompareLink: false,
  showFacilityBasedPreviewLink: false,
  performanceYear: 2017,
  fbpPerformanceYear: null,
  feedbackPerformanceYear: null,
  isDevPre: false,
};

export default HeaderAccountMenu;
