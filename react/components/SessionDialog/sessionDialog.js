import React from "react";
import { render } from "react-dom";
import SessionDialogUI from "../SessionDialogUI";

/**
 * Renders the Session Dialog UI content.
 */
export default class SessionDialog {
    /**
     * @param {Object} options - An object containing content and config data
     * @param {Boolean} options.showImmediate
     * @param {Number} options.warningTimeout
     * @param {String} options.appElement
     * @param {HTMLElement} options.rootElement - Elem inside which to render
     */
    constructor(options) {
        render(
            <SessionDialogUI
                showImmediate={options.showImmediate}
                warningTimeout={options.warningTimeout}
                appElement={options.appElement}
            />,
            options.rootElement
        );
    }
}
