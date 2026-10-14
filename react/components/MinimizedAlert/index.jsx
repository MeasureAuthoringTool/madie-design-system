import React, { useContext } from "react";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import classNames from "classnames";
import PropTypes from "prop-types";
import { MadieAlertContext } from "../MadieAlert/MadieAlertProvider";

const MinimizedAlert = ({ className, style }) => {
    const alerts = useContext(MadieAlertContext);
    if (!alerts) {
        throw new Error(
            "MinimizedAlert must be rendered within a MadieAlertProvider."
        );
    }
    if (!alerts.hasMinimizedAlerts) return null;

    return (
        <button
            type="button"
            className={classNames("minimized-alert", className)}
            data-testid="minimized-alert"
            style={{
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                background: "none",
                border: 0,
                padding: 0,
                font: "inherit",
                ...style,
            }}
            onClick={(event) => {
                event.preventDefault();
                alerts.restoreAlerts();
            }}
        >
            <WarningRoundedIcon sx={{ color: "yellow", marginRight: "5px" }} />
            <span
                data-testid="minimized-alert-text"
                style={{ color: "white", fontSize: "16px" }}
            >
                Display Alerts{" "}
                {alerts.totalMinimizedErrors > 0
                    ? `(${alerts.totalMinimizedErrors})`
                    : ""}
            </span>
        </button>
    );
};

MinimizedAlert.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

export default MinimizedAlert;
