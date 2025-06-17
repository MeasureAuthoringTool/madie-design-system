import ErrorPage from "./components/Error/error";

import "what-input";

const QppStyleComponents = {
    errorPage(options) {
        return new ErrorPage(options);
    },
    footer() {
        return <div></div>;
    },
};

export default QppStyleComponents;
