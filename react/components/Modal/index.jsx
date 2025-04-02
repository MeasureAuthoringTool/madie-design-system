import React from "react";
import PropTypes from "prop-types";

import DsModal from "./Modal";

const Modal = ({ useDesignSystem, ...rest }) => {
    return <DsModal {...rest} />;
};

Modal.propTypes = {
    useDesignSystem: PropTypes.bool,
};
Modal.defaultProps = {
    useDesignSystem: false,
};
Modal.displayName = "Modal";

export default Modal;
