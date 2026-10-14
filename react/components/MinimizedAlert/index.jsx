import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

const MinimizedAlert = ({ errorCount = 0, onClick, ...buttonProps }) => (
    <Button
        type="button"
        variant="text"
        color="inherit"
        className="minimized-alert"
        data-testid="minimized-alert"
        startIcon={<WarningRoundedIcon sx={{ color: "#df711c" }} />}
        sx={{ fontSize: "16px", textTransform: "none" }}
        {...buttonProps}
        onClick={onClick}
    >
        <span data-testid="minimized-alert-text">
            Display Alerts{errorCount > 0 ? ` (${errorCount})` : ""}
        </span>
    </Button>
);

MinimizedAlert.propTypes = {
    errorCount: PropTypes.number,
    onClick: PropTypes.func.isRequired,
};

export default MinimizedAlert;