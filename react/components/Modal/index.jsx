import React from "react";
import PropTypes from "prop-types";

import LegacyModal from "./LegacyModal";
import DsModal from "./Modal";

const Modal = ({ useDesignSystem, ...rest }) => {
    if (useDesignSystem) {
        return <DsModal {...rest} />;
    }
    return <LegacyModal {...rest} />;
};

Modal.propTypes = {
    useDesignSystem: PropTypes.bool,
};
Modal.defaultProps = {
    useDesignSystem: false,
};
Modal.displayName = "Modal";

export default Modal;
