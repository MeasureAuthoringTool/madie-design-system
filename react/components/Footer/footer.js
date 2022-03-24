/* global buildVersion */
// buildVersion above is defined in webpack.config.js
import React from "react";
import { render } from "react-dom";
import FooterUI from "./FooterUI";

/**
 * Renders the QPP Footer content.
 */
export default class Footer {
    /**
     * @param {Object} options - An object containing content and config data
     * @param {HTMLElement} options.rootElement - Elem inside which to render
     */
    constructor(options) {
        if (options.hasOwnProperty("rootElement")) {
            render(
                <FooterUI
                    buildVersion={buildVersion}
                    isFullWidth={options.isFullWidth}
                    isNewFooter={options.isNewFooter}
                    showHcdResearch={options.showHcdResearch}
                />,
                options.rootElement
            );
        } else {
            render(<FooterUI buildVersion={buildVersion} />, options);
        }
    }
}
