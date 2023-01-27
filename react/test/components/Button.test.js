import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Button, { TextButton } from "../../components/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
    const { getByTestId, getByText } = screen;

    it("Button renders with provided size, onClick triggers", async () => {
        const onClick = jest.fn();
        render(
            <Button size="big" onClick={onClick} data-testId="button-test-id" />
        );
        const button = getByTestId("button-test-id");
        expect(button).toHaveClass("qpp-c-button--big");
        fireEvent.click(button);
        await waitFor(() => {
            expect(onClick).toHaveBeenCalledTimes(1);
        });
    });

    it("Button renders with provided variant, no onClick", async () => {
        render(<Button variant="cyan" data-testId="button-test-id" />);
        const button = getByTestId("button-test-id");
        expect(button).toHaveClass("qpp-c-button--cyan");
    });

    it("Button renders with an HRef", async () => {
        const onClick = jest.fn();
        render(
            <Button
                onClick={onClick}
                href="https://whatwouldkevindo.com/"
                children="test"
            />
        );
        expect(getByText("test").href).toBe("https://whatwouldkevindo.com/");
    });

    it("TextButton renders to the screen with text and passed className", async () => {
        const onClick = jest.fn();
        render(
            <TextButton
                onClick={onClick}
                className="test"
                data-testId="text-test-id"
                children="test"
            />
        );
        expect(getByText("test")).toBeTruthy();
    });

    it("Default props are as expected", async () => {
        const onClick = Button.defaultProps.onClick();
        expect(onClick).toBe(null);
        const children = Button.defaultProps.children;
        expect(children).toBe(false);
        const className = Button.defaultProps.className;
        expect(className).toBe("");
        const href = Button.defaultProps.href;
        expect(href).toBe("");
        const loading = Button.defaultProps.loading;
        expect(loading).toBe(false);
        const size = Button.defaultProps.size;
        expect(size).toBe(null);
        const type = Button.defaultProps.type;
        expect(type).toBe("button");
        const variant = Button.defaultProps.variant;
        expect(variant).toBe(null);
    });
});
