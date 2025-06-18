import "what-input";
import React from 'react'
const QppStyleComponents = {
    errorPage() {
        return <div data-testId="error-page">
            Something has gone terribly wrong.
        </div>;
    },
    footer() {
        return <div data-testId="unused"></div>;
    },
};

export default QppStyleComponents;
