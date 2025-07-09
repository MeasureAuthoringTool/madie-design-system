import React from "react";

import DsModal from "./Modal";

/**
 * @param {{
 *   useDesignSystem?: boolean
 * } & React.ComponentProps<typeof DsModal>} props
 */
const Modal = ({ useDesignSystem = false, ...rest }) => {
    return <DsModal {...rest} />;
};

Modal.displayName = "Modal";

export default Modal;
