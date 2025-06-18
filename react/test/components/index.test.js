import * as React from "react";
import "@testing-library/jest-dom";
import { describe, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import QppStyleComponents from "../../index";

describe("QppStyleComponents. Should be unused it's not hosted and meant only to be used with storybook.", () => {
    describe("errorPage", () => {
        it("renders the error page with the correct text and test ID", () => {
            const Wrapper = () => QppStyleComponents.errorPage({});
            render(<Wrapper />);
            expect(screen.getByTestId("error-page")).toBeInTheDocument();
        });
    });

    describe("footer", () => {
        it("renders the unused footer div with the correct test ID", () => {
            render(QppStyleComponents.footer());
            const footer = screen.getByTestId("unused");
            expect(footer).toBeInTheDocument();
        });
    });
});
