import React from "react";
import PropTypes from "prop-types";

const InfotipIcon = ({ lightIcon, ...props }) => (
    <svg
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g fill="none" fillRule="evenodd">
            <path
                d="M9.721 19.158c-4.947 0-8.973-4.126-8.973-9.196C.748 4.892 4.774.766 9.72.766c4.948 0 8.974 4.126 8.974 9.196 0 5.07-4.026 9.196-8.974 9.196z"
                fill="#2EB1ED"
                fillRule="nonzero"
            />
            <path
                d="M9.721 0C4.361 0 0 4.469 0 9.962c0 5.493 4.36 9.962 9.721 9.962 5.36 0 9.722-4.469 9.722-9.962C19.443 4.469 15.082 0 9.72 0z"
                fill={lightIcon ? "#FFF" : "#04838A"}
            />
            <path
                d="M9.721 14.765c-.206 0-.374.112-.374.25v.5c0 .138.168.25.374.25.207 0 .374-.112.374-.25v-.5c0-.138-.167-.25-.374-.25zM9.764 4.706H9.72c-.792 0-1.536.29-2.1.821a2.767 2.767 0 0 0-.89 2.03c0 .197.166.356.373.356s.374-.159.374-.356c0-.577.237-1.118.668-1.523a2.268 2.268 0 0 1 1.607-.615c1.182.016 2.195.98 2.211 2.107.011.743-.373 1.427-1.028 1.83-.995.61-1.589 1.691-1.589 2.89v1.013c0 .197.168.357.374.357.207 0 .374-.16.374-.357v-1.013c0-.941.477-1.82 1.246-2.292.873-.537 1.386-1.448 1.371-2.438-.022-1.527-1.345-2.788-2.948-2.81z"
                stroke={lightIcon ? "#04838A" : "#FFF"}
                strokeWidth=".5"
                fill={lightIcon ? "#04838A" : "#FFF"}
                fillRule="nonzero"
            />
        </g>
    </svg>
);

export default InfotipIcon;

InfotipIcon.propTypes = {
    lightIcon: PropTypes.bool,
};

InfotipIcon.defaultProps = {
    lightIcon: false,
};
