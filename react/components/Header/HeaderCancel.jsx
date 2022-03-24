import React from "react";
import PropTypes from "prop-types";

const HeaderCancel = ({ handleCancel }) => {
    return (
        <button className="header-cancel" onClick={handleCancel}>
            Cancel
        </button>
    );
};

HeaderCancel.propTypes = {
    handleCancel: PropTypes.func,
};

export default HeaderCancel;
