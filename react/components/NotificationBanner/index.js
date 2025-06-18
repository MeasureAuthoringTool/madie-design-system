import React, { Component } from "react";
import PropTypes from "prop-types";

import SanitizedContent from "../SanitizedContent";
import { CloseXIcon, BellOutline } from "../../lib/SvgComponents.jsx";
import { withGetConfig } from "../hooks/useGetConfig";

class NotificationBanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: "100%",
            expanded: true,
        };

        this._renderCloseButton = this.renderCloseButton.bind(this);
        this._collapseNotification = this.collapseNotification.bind(this);
        this._expandNotification = this.expandNotification.bind(this);
        this._setBannerHeight = this.setBannerHeight.bind(this);
    }

    componentDidMount() {
        if (window.innerWidth <= 767) {
            this.setState({
                expanded: false,
            });
        }

        window.addEventListener("load", this._setBannerHeight);
        window.addEventListener("resize", this._setBannerHeight);
    }

    // Populate state with notification from localStorage
    componentDidUpdate(prevProps) {
        if (prevProps.result !== this.props?.result) {
            const { result: notifications } = this.props;
            if (Object.keys(notifications).length > 0) {
                this.setState({
                    expanded: this.isNotificationExpanded(
                        notifications.content,
                    ),
                });
            }
        }
    }

    setBannerHeight() {
        const {
            result: {
                content: { content },
            },
        } = this.props;
        if (content) {
            this.bannerContainer.style.transition = "none";

            this.state.expanded
                ? this.collapsedBanner.setAttribute("tabIndex", "-1")
                : this.collapsedBanner.setAttribute("tabIndex", " ");

            this.setState({
                height: this.state.expanded
                    ? "100%"
                    : this.collapsedWrapper.offsetHeight + "px",
            });
        }
    }

    isNotificationExpanded(notification) {
        const dateDismissed = new Date(notification.dateDismissed);
        const dateUpdated = new Date(notification.dateUpdated);
        const notDismissed =
            (this.isDateValid(dateUpdated) &&
                this.isDateValid(dateDismissed) &&
                dateUpdated >= dateDismissed) ||
            !this.isDateValid(dateDismissed);

        return notDismissed;
    }

    /**
     * Whether the date is valid, i.e. not null
     *
     * @param {Date} date
     * @return {Boolean}
     */
    isDateValid(date) {
        return !isNaN(Date.parse(date));
    }

    /**
     * Try to find this NotificationBanner instance in localStorage, or else add
     * a minimal version of it, and mark it with a dateDismissed, then update
     * localStorage.
     */
    markNotificationClosed() {
        const { result } = this.props;
        const dateDismissed = new Date().toISOString();
        const storageNotification = result || {};

        if (
            storageNotification &&
            Object.keys(storageNotification).length > 0
        ) {
            window.localStorage.setItem(
                "notifications",
                JSON.stringify({
                    ...storageNotification,
                    content: {
                        ...storageNotification.content,
                        dateDismissed,
                    },
                }),
            );
        } else {
            window.localStorage.setItem(
                "notifications",
                JSON.stringify({
                    ...storageNotification,
                    content: {
                        name: "header-notification",
                        dateDismissed,
                    },
                }),
            );
        }
    }

    /**
     * Callback when the user dimisses a notification. Mark it as dismissed in
     * localStorage, empty the contents, and dispatch a custom event to notify
     * any observers that it has been dismissed.
     */
    collapseNotification(e) {
        e.stopPropagation();
        this.markNotificationClosed();
        this.collapsedBanner.setAttribute("tabIndex", " ");
        this.bannerContainer.style.transition = "height .2s ease-out";
        this.setState({
            expanded: false,
            height: this.collapsedWrapper.offsetHeight + "px",
        });
    }

    expandNotification() {
        if (!this.state.expanded) {
            this.collapsedBanner.setAttribute("tabIndex", "-1");
            this.bannerContainer.style.transition = "height .2s ease-out";
            this.setState({
                expanded: true,
                height: "100%",
            });
        }
    }

    /**
     * Renders the close button if the notification instance is dismissable.
     *
     * @return {String} HTML content
     */
    renderCloseButton() {
        const {
            result: {
                content: { dismissable },
            },
        } = this.props;
        if (dismissable) {
            return (
                <button
                    onClick={this._collapseNotification}
                    type="button"
                    className="notification-banner-close"
                >
                    <svg
                        className="close-icon"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <CloseXIcon />
                    </svg>
                    <span className="sr-only">Close</span>
                </button>
            );
        } else {
            return "";
        }
    }

    /**
     * Render the notification if it has any contents.
     *
     * @return {String} HTML content
     */
    render() {
        const { expanded, height } = this.state;
        const { result: { content: { enabled, content } = {} } = {} } =
            this.props;
        if (!content || !enabled) {
            return <div id="notification-banner" />;
        } else {
            const notificationStatus = expanded ? "expanded" : "collapsed";
            const { color = "blue", label = "Update" } = content;
            const className = `notification-banner  notification-banner-${color} ${notificationStatus}`;

            return (
                <div
                    style={{ height }}
                    ref={(elem) => (this.bannerContainer = elem)}
                    className={className}
                >
                    <div
                        ref={(elem) => (this.expandedWrapper = elem)}
                        className={`notification-banner-wrapper expanded-view`}
                    >
                        <div className="notification-banner-label">{label}</div>
                        <div className="notification-banner-content">
                            <SanitizedContent
                                html={
                                    expanded
                                        ? content
                                        : "<p>Nothing to see here</p>"
                                }
                            />
                        </div>
                        {expanded && this._renderCloseButton()}
                    </div>

                    <div
                        ref={(elem) => (this.collapsedWrapper = elem)}
                        className={`notification-banner-wrapper collapsed-view`}
                        onClick={this._expandNotification}
                    >
                        <button
                            ref={(elem) => (this.collapsedBanner = elem)}
                            className={`notification-banner-label`}
                        >
                            {label}
                            <span className="bell-icon">
                                <svg aria-hidden="true" focusable="false">
                                    <BellOutline />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            );
        }
    }
}

NotificationBanner.propTypes = {
    result: PropTypes.shape({
        content: PropTypes.shape({
            content: PropTypes.string,
            label: PropTypes.string,
            color: PropTypes.string,
            dismissable: PropTypes.bool,
        }),
    }),
};

NotificationBanner.defaultProps = {
    result: {
        content: {
            content: null,
            label: "Update",
            color: "blue",
            dismissable: true,
        },
    },
};

export default withGetConfig(NotificationBanner, {
    timeout: 5,
    url: "/config/notification",
    localStorageName: "active_notification",
    equalityCheckExclude: ["dateDismissed", "dateUpdated"],
    defaultContent: {},
});
