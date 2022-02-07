import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactModal from 'react-modal';
import { CloseXIcon } from '../../lib/SvgComponents.jsx';
import SanitizedContent from '../SanitizedContent';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      showModal: true,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    ReactModal.setAppElement('body > *:not(.ReactModalPortal)');
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    this.setState({
      showModal: newProps.showModal,
    });
  }

  render() {
    return (
      <div>
        <ReactModal
          role="alertdialog"
          contentLabel={this.props.contentLabel || 'Informational Modal Dialog'}
          isOpen={this.state.showModal}
          className="info-modal-content"
          overlayClassName="info-modal-overlay"
          onRequestClose={this.handleCloseModal}
        >
          <button
            className="closeModal"
            aria-label="Close modal"
            onClick={this.handleCloseModal}
          >
            <svg className="close-icon" aria-hidden="true">
              <CloseXIcon />
            </svg>
          </button>
          <SanitizedContent html={this.props.content} />
        </ReactModal>
      </div>
    );
  }
}

const displayModal = ({ content, main }) => {
  render(<Modal content={content} showModal={true} />, main);
};

Modal.propTypes = {
  contentLabel: PropTypes.string,
  content: PropTypes.string,
};

export default displayModal;
