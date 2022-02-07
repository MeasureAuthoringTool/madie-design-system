import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LogoutSession } from '../../session';
import { setUtagLink } from './utag-helpers';
import Modal from '../Modal/index';

const useModal = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return [open, openModal, closeModal];
};

const HeaderMenuSignOutButton = ({ name }) => {
  const [open, openModal, closeModal] = useModal();
  const showLogoutWarning = () => {
    LogoutSession(window);
  };
  return (
    <>
      <button
        className="signout-button"
        aria-label="Sign out"
        onClick={openModal}
        data-track-category="TopNav"
        data-track-action="click"
        data-track-label={name}
      >
        {name}
      </button>
      <Modal
        useDesignSystem
        isOpen={open}
        title="Sign out"
        onRequestClose={closeModal}
        primary={{
          title: 'Sign me out now',
          onClick: () => {
            showLogoutWarning();
            setUtagLink('button', 'click', 'Sign me out now');
          },
        }}
        secondary={{
          title: 'Keep me signed in',
          onClick: () => {
            closeModal();
            setUtagLink('button', 'click', 'Keep me signed in');
          },
        }}
      >
        <p>Are you sure you want to sign out?</p>
      </Modal>
    </>
  );
};

HeaderMenuSignOutButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HeaderMenuSignOutButton;
