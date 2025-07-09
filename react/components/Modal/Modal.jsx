import React, { useRef, useState, useEffect } from "react";
import ReactModal from "react-modal";
import { CloseXIcon2 } from "../../lib/SvgComponents.jsx";

/**
 * @param {{
 *   title?: string,
 *   children: React.ReactNode,
 *   primary?: {
 *     title: string | React.ReactElement,
 *     onClick?: () => void,
 *     loading?: boolean,
 *     loadingText?: string,
 *   } | null,
 *   secondary?: {
 *     title: string | React.ReactElement,
 *     onClick?: () => void,
 *     loading?: boolean,
 *     loadingText?: string,
 *   } | null,
 *   onRequestClose?: () => void,
 *   appElement?: string,
 *   isOpen?: boolean,
 *   width?: string,
 *   [key: string]: any
 * }} props
 */
const Modal = ({
    children,
    onRequestClose = () => {},
    title,
    primary = null,
    secondary = null,
    appElement = "body > *:not(.qpp-c-modal)",
    isOpen = false,
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
        }
        return {};
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
                if (
                    contentRef.current?.scrollHeight >
                    document.documentElement.clientHeight * 0.6
                ) {
                    setOverflowSeparator(true);
                } else {
                    setOverflowSeparator(false);
                }

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
                            disabled={secondary.loading}
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
                            disabled={primary.loading}
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

export default Modal;
