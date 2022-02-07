import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cookie from 'cookie';
import retry from 'retry';
import jwtDecode from 'jwt-decode';

import Modal from './Modal';
import RefreshSession from '../session/refresh';
import LogoutSession from '../session/logout';
import fetchTtl from '../session/ttl';

const fetchTtlIntervalMs = 60000;

export default class SessionDialogUI extends Component {
  /**
   * Create a SessionDialogUI component.
   * @param {object} props - Configuration options. See SessionDialog for more
   */
  constructor(props) {
    super(props);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.refreshSession = this.refreshSession.bind(this);
    this.signOut = this.signOut.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.shouldShowDialog = this.shouldShowDialog.bind(this);
    this.shouldSignOut = this.shouldSignOut.bind(this);
    this.minutesUntil = this.minutesUntil.bind(this);
    this.checkExpiry = this.checkExpiry.bind(this);
    this.onInterval = this.onInterval.bind(this);

    if (props.showImmediate === true) {
      this.state = {
        showModal: true,
        showError: false,
      };
    } else {
      this.state = {
        showModal: false,
        showError: false,
      };

      this.startTimer();
    }
  }

  /**
   * Extracts the token exp value as a JavaScript date.
   * @param {Object} cookies - An object representation of the cookie store
   * @returns {(date|null)} The token expiration date, if found
   */
  getTokenExpiry(cookies) {
    let expiry = null;

    if (cookies.hasOwnProperty('qpp_auth_token') && cookies.qpp_auth_token) {
      // See https://tools.ietf.org/html/rfc7519
      // `exp` is a NumericDate representing "seconds since the epoch"
      // and it needs to be milliseconds to get a JavaScript date from it.
      const { exp } = jwtDecode(cookies.qpp_auth_token);
      expiry = new Date(exp * 1000);
    }

    return expiry;
  }

  checkExpiry(expiry) {
    if (expiry) {
      if (this.shouldShowDialog(expiry)) {
        this.handleOpenModal();
      } else if (this.shouldSignOut(expiry)) {
        this.signOut();
        clearInterval(this.warningInterval);
      }
    } else {
      clearInterval(this.warningInterval);
    }
  }

  onInterval() {
    const cookies = cookie.parse(document.cookie);

    if (cookies.hasOwnProperty('qpp_auth_token') && cookies.qpp_auth_token) {
      const operation = retry.operation({
        retries: 5,
        factor: 1,
        minTimeout: 1000,
        maxTimeout: 1000,
      });

      operation.attempt(() => {
        fetchTtl(cookies.qpp_auth_token)
          .then(this.checkExpiry)
          .catch((error) => {
            if (operation.retry(error)) {
              // try again before giving up
              return;
            }
            clearInterval(this.warningInterval);
            // sign an inactive user out
            this.forceTimeoutHandle = setTimeout(this.signOut, 120 * 1000);
            this.setState({
              showModal: false,
              showError: true,
            });
          });
      });
    }
  }

  /**
   * Checks whether the user is within a specified number of minutes before
   * their session token expires. If so, show a warning dialog. If the
   * expiration has been reached, sign the user out.
   */
  startTimer() {
    clearInterval(this.warningInterval);

    this.warningInterval = setInterval(this.onInterval, fetchTtlIntervalMs);
  }

  /**
   * Returns whether the current time is within the timeout range of expiry.
   * @param {date|number} expiry - Expiration date to check against
   * @returns {boolean}
   */
  shouldShowDialog(expiry) {
    if (typeof expiry === 'number') {
      const minutesLeft = expiry / 60;

      return !this.state.showModal && minutesLeft <= this.props.warningTimeout;
    } else {
      return (
        !this.state.showModal &&
        this.minutesUntil(expiry) <= this.props.warningTimeout
      );
    }
  }

  /**
   * Returns whether the current time has reached the expiration date.
   * @param {date|number} expiry - Expiration date to check against
   * @returns {boolean}
   */
  shouldSignOut(expiry) {
    if (typeof expiry === 'number') {
      return expiry <= 1;
    } else {
      return this.minutesUntil(expiry) <= 0;
    }
  }

  /**
   * Returns number of minutes until the expiration date.
   * @param {date} expiry - Expiration date to check against
   * @returns {number}
   */
  minutesUntil(expiry) {
    return (expiry - new Date().getTime()) / 60000;
  }

  /**
   * Sets the modal state to visible.
   */
  handleOpenModal() {
    this.setState({
      showModal: true,
      showError: false,
    });
  }

  /**
   * Sets the modal state to hidden.
   */
  handleCloseModal() {
    this.setState({
      showModal: false,
      showError: false,
    });
  }

  /**
   * Handles the user requesting their session be extended.
   */
  refreshSession() {
    RefreshSession({
      window,
      onSuccess: () => {
        this.startTimer();
      },
    });

    this.handleCloseModal();
  }

  /**
   * Handles the user requesting their session be ended.
   */
  signOut() {
    if (this.forceTimeoutHandle) {
      clearTimeout(this.forceTimeoutHandle);
    }
    LogoutSession(window);
    this.handleCloseModal();
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          useDesignSystem
          title="You will be signed out within two minutes"
          isOpen={this.state.showModal}
          primary={{
            title: 'Keep me signed in',
            onClick: this.refreshSession,
          }}
          secondary={{
            title: 'Sign me out now',
            onClick: this.signOut,
          }}
          onRequestClose={this.handleCloseModal}
        >
          <p>
            You have been inactive for thirty minutes. For your security, we
            will sign you out automatically.
          </p>
        </Modal>

        <Modal
          useDesignSystem
          title="Technical Difficulties"
          isOpen={this.state.showError}
          primary={{
            title: 'Sign Out',
            onClick: this.signOut,
          }}
          onRequestClose={this.signOut}
        >
          <p>
            We’re experiencing technical difficulties. Please log in again to
            continue. For your security, we will sign you out automatically
            within two minutes.
          </p>
        </Modal>
      </React.Fragment>
    );
  }
}

SessionDialogUI.propTypes = {
  showImmediate: PropTypes.bool,
  warningTimeout: PropTypes.number,
  appElement: PropTypes.string,
};

SessionDialogUI.defaultProps = {
  showImmediate: false,
  warningTimeout: 2,
  appElement: undefined,
};
