import React from "react";
import { render } from "react-dom";
import ErrorUI from "./ErrorUI";

/**
 * Renders the QPP Error Page content.
 */
export default class ErrorPage {
    /**
     * @param {Object} options - An object containing content and config data
     * @param {String} options.type - The error type
     * @param {String} options.code - The error code
     * @param {String} options.message - The error message
     * @param {HTMLElement} options.rootElement - Elem inside which to render
     */
    constructor(options) {
        render(
            <ErrorUI
                type={options.type}
                code={options.code}
                message={options.message}
            />,
            options.rootElement
        );
    }
}
