import React from "react";
import cookie from "cookie";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

import { TextButton } from "../Button";
import {
    deleteImpersonatedUser,
    revertQppHasAuthsCookie,
} from "../../session/logout";

const ImpersonatorBanner = () => {
    const { qpp_auth_token: token = null, qpp_impersonated_user: user = null } =
        cookie.parse(document.cookie);

    const className = [
        "qpp-u-display--flex",
        "qpp-u-justify-content--between",
        "qpp-u-fill--gold-20",
        "qpp-u-padding-x--40",
        "qpp-u-padding-y--24",
        "qpp-u-font-size--14",
        "qpp-u-color--gray-80",
    ].join(" ");

    const onClick = () => {
        const fn = () => {
            deleteImpersonatedUser({ qpp_impersonated_user: user });
            // Set qpp_has_authorizations cookie back to impersonator's value
            revertQppHasAuthsCookie();
            window.location.reload();
        };
        return axios
            .delete("/api/auth/users/impersonate", {
                headers: {
                    Accept: "application/vnd.qpp.cms.gov.v1+json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(fn, fn);
    };

    return (
        token &&
        user && (
            <div className={className}>
                <div>
                    VIEW ONLY | You are currently impersonating HARP user:{" "}
                    <strong>{user}</strong>
                </div>
                <TextButton onClick={onClick} className="qpp-u-color--gray-80">
                    Exit Impersonation Mode
                    <CloseIcon />
                </TextButton>
            </div>
        )
    );
};

export default ImpersonatorBanner;
