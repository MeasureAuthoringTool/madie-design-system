import React, { useRef, useState, useEffect } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

import { CloseXIcon2 } from "../../lib/SvgComponents.jsx";

const Modal = ({
    children,
    onRequestClose,
    title,
    primary,
    secondary,
    appElement,
    isOpen,
    ...props
}) => {
    const [overflowSeparator, setOverflowSeparator] = useState(false);
    const closeButtonRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        ReactModal.setAppElement(appElement);
    }, []);

    const getWidth = () => {
        if (props.width) {
            return {
                width: props.width,
                maxWidth: "calc(100vw - 2rem)",
                maxHeight: "calc(100vh - 2rem)",
            };
        } else {
            return {};
        }
    };

    return (
        <ReactModal
            onRequestClose={onRequestClose}
            portalClassName="qpp-c-modal"
            className="qpp-c-modal__content"
            overlayClassName="qpp-c-modal__overlay"
            bodyOpenClassName="qpp-c-modal__body-open"
            isOpen={isOpen}
            style={{
                content: getWidth(),
            }}
            onAfterOpen={() => {
                // Add heading separator based on overflow
                if (
                    contentRef.current?.scrollHeight >
                    document.documentElement.clientHeight * 0.6
                ) {
                    setOverflowSeparator(true);
                } else {
                    setOverflowSeparator(false);
                }

                // Set default focus
                if (closeButtonRef?.current) {
                    closeButtonRef.current.focus();
                }
            }}
            aria={{
                labelledby: "modal-heading",
                describedby: "modal-body",
            }}
            {...props}
        >
            <div
                className={`qpp-c-modal__header ${
                    overflowSeparator ? "qpp-c-modal__header-sep" : ""
                }`}
            >
                <h3 id="modal-heading">{title}</h3>
                <button
                    className="closex qpp-c-button qpp-c-button--text qpp-u-color--black"
                    aria-label="close modal"
                    data-testid="modal-close-btn"
                    onClick={onRequestClose}
                    ref={closeButtonRef}
                >
                    <CloseXIcon2 />
                </button>
            </div>
            <div
                id="modal-body"
                className="qpp-c-modal__body"
                ref={contentRef}
                tabIndex={overflowSeparator ? "0" : undefined}
            >
                {children}
            </div>
            {(primary || secondary) && (
                <div className="qpp-c-modal__footer">
                    {secondary && (
                        <button
                            className={`qpp-c-button qpp-c-button--secondary ${
                                primary ? "qpp-u-margin-right--16" : ""
                            }`}
                            loading={secondary.loading}
                            onClick={secondary.onClick || onRequestClose}
                            aria-label={secondary.title}
                            data-testid="modal-secondary-btn"
                        >
                            {secondary.title}
                        </button>
                    )}
                    {primary && (
                        <button
                            className="qpp-c-button"
                            loading={primary.loading}
                            onClick={primary.onClick}
                            data-testid="modal-primary-btn"
                            aria-label={primary.title}
                        >
                            {primary.title}
                        </button>
                    )}
                </div>
            )}
        </ReactModal>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        onClick: PropTypes.func,
        loading: PropTypes.bool,
        loadingText: PropTypes.string,
    }),
    secondary: PropTypes.shape({
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        onClick: PropTypes.func,
        loading: PropTypes.bool,
        loadingText: PropTypes.string,
    }),
    onRequestClose: PropTypes.func,
    appElement: PropTypes.string,
    isOpen: PropTypes.bool,
    width: PropTypes.string,
};

Modal.defaultProps = {
    onRequestClose: () => {},
    title: undefined,
    primary: null,
    secondary: null,
    appElement: "body > *:not(.qpp-c-modal)",
    isOpen: false,
};

export default Modal;
