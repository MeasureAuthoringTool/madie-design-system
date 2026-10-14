import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const PageHeaderActions = ({ children }) => {
    const [container, setContainer] = useState(null);

    useLayoutEffect(() => {
        setContainer(document.getElementById("page-header-actions"));
    }, []);

    return container ? createPortal(children, container) : <>{children}</>;
};

PageHeaderActions.propTypes = {
    children: PropTypes.node,
};

export default PageHeaderActions;
