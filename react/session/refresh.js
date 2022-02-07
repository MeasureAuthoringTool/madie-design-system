import cookie from 'cookie';
import axios from 'axios';
import LogoutSession from './logout.js';

/**
 * Makes an API request to refresh the session token cookie, if it exists.
 * @param {Object}   [options] - Optional configuration parameters.
 * @param {function} [options.onSuccess] - An optional success callback.
 * @param {function} [options.onError] - An optional error callback.
 * @param {Object} [options.window] - The DOM window.
 * @return {Function} Returns a promise
 */
const RefreshSession = (options = {}) => {
    let cookies = cookie.parse(options.window.document.cookie);

    if (cookies.hasOwnProperty('qpp_auth_token')) {
        const requestOptions = {
            method: 'POST',
            url: '/api/auth/sessions/refresh',
            headers: {
                Accept: 'application/vnd.qpp.cms.gov.v1+json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${cookies.qpp_auth_token}`
            }
        };

        let onSuccess = (/*response*/) => {
            if (typeof options.onSuccess === 'function') {
                options.onSuccess();
            }
        };

        let onError = (/*response*/) => {
            if (typeof options.onError === 'function') {
                options.onError();
            }

            return LogoutSession(options.window); // eslint-disable-line new-cap
        };

        return axios(requestOptions)
            .then(onSuccess, onError)
            .catch(function(err) {
                console.log(err);
            });
    }
};

export default RefreshSession;
