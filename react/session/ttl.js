import axios from "axios";

const fetchTtl = (token) => {
    const requestOptions = {
        method: "GET",
        url: "/api/auth/sessions/ttl",
        headers: {
            Accept: "application/vnd.qpp.cms.gov.v1+json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        transformResponse: [
            function (response) {
                return JSON.parse(response).data;
            },
        ],
    };

    return axios(requestOptions).then((response) => {
        let expiry;

        if (response && response.data) {
            if (response.data.hasOwnProperty("time_remaining")) {
                expiry = response.data.time_remaining;
            } else {
                // See https://tools.ietf.org/html/rfc7519
                // `expiry` is a NumericDate representing "seconds since the epoch"
                // and it needs to be milliseconds to get a JavaScript date from it.
                expiry = new Date(response.data.ttl * 1000);
            }
        }

        return expiry;
    });
};

export default fetchTtl;
