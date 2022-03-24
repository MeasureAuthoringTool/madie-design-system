import React from "react";
import { render } from "react-dom";
import DSSpinner from "@cmsgov/design-system/dist/components/Spinner/Spinner";

export default class Spinner {
    constructor(options) {
        render(<DSSpinner />, options.rootElement);
    }
}
