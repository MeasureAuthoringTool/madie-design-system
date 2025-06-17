import React, { Component } from "react";
import PropTypes from "prop-types";
import reactDOM from "react-dom";
import { CloseXIcon } from "../../lib/SvgComponents.jsx";

class FlashNotification extends Component {
    constructor(props) {
        super(props);
        this.state = { isClosed: true };
        this._closeFlashNotification = this.closeFlashNotification.bind(this);
        this._fadeOutNotification = this.fadeOutNotification.bind(this);
    }

    render() {
        return (
            <div
                className={
                    this.state.isClosed
                        ? "flash-notification notification-closed"
                        : "flash-notification"
                }
                ref={(elem) => {
                    this.element = elem;
                }}
            >
                <div className={this.props.success ? "success" : "error"}>
                    <div className="icon"></div>
                    <div className="text-content">
                        <p className="title-text">{this.props.titleText}</p>
                        <p className="body-text">{this.props.bodyText}</p>
                    </div>
                    <div className="close-notification-container">
                        <button
                            className="closeNotification"
                            aria-label="Close notification"
                            onClick={this._closeFlashNotification}
                        >
                            <svg className="close-icon" aria-hidden="true">
                                {/* <use xlinkHref="#closex" /> */}
                                <CloseXIcon />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        setTimeout(
            function () {
                this.setState({ isClosed: false });
            }.bind(this),
            250,
        );

        this.timer = setTimeout(
            function () {
                this._fadeOutNotification();
            }.bind(this),
            10000,
        );
    }

    fadeOutNotification() {
        this.setState({ isClosed: true });
        setTimeout(
            function () {
                reactDOM.unmountComponentAtNode(this.element.parentElement);
                if (typeof this.props.onClose === "function") {
                    this.props.onClose();
                }
            }.bind(this),
            500,
        );
    }

    closeFlashNotification() {
        clearTimeout(this.timer);
        this._fadeOutNotification();
    }
}

FlashNotification.propTypes = {
    bodyText: PropTypes.string,
    success: PropTypes.bool.isRequired,
    titleText: PropTypes.string,
    onClose: PropTypes.func,
};

export default FlashNotification;
