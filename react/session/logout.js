import cookie from "cookie";
import axios from "axios";

export const deleteImpersonatedUser = (cookies) => {
    const userHasApmPayments = localStorage.getItem("user_has_apm_payments");
    if (
        cookies.hasOwnProperty("qpp_impersonated_user", "user_has_apm_payments")
    ) {
        document.cookie = `user_has_apm_payments=${userHasApmPayments}; Path=/;`;
        document.cookie =
            "qpp_impersonated_user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
};

export const revertQppHasAuthsCookie = () => {
    const { qppHasAuthorizations, behindSSL } = JSON.parse(
        localStorage.getItem("impersonatorAuthValues")
    );
    if (qppHasAuthorizations) {
        document.cookie = `qpp_has_authorizations=${qppHasAuthorizations};path=/${
            behindSSL ? ";secure" : ""
        }`;
    }
};

/**
 * Makes an API request to end the user session.
 * @param  {Object} [_window] The DOM Window
 * @return {Function} Returns a promise
 */
const LogoutSession = (_window) => {
    let cookies = cookie.parse(_window.document.cookie);
    let logoutDestination = "/logout-confirmation";

    if (cookies.hasOwnProperty("qpp_auth_token")) {
        let onSuccess = () => {
            // redirect to login/logged out screen
            deleteImpersonatedUser(cookies);
            _window.location.pathname = logoutDestination;
        };

        let onError = () => {
            // delete cookie and redirect login/logged out screen
            deleteImpersonatedUser(cookies);
            _window.location.pathname = logoutDestination;
        };

        return axios({
            method: "POST",
            url: "/user/session-logout",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookies.qpp_auth_token}`,
            },
        })
            .then(onSuccess, onError)
            .catch(function (err) {
                console.log(err);
            });
    } else {
        _window.location.pathname = logoutDestination;
    }
};

export default LogoutSession;
