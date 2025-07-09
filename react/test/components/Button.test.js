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
            <Button
                size="big"
                onClick={onClick}
                data-testId="button-test-id"
            />,
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
            />,
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
            />,
        );
        expect(getByText("test")).toBeTruthy();
    });

    it("Default props are as expected", async () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole("button", { name: /click me/i });
        expect(button).toHaveAttribute("type", "button");
        expect(button).not.toBeDisabled();
        expect(button).toHaveTextContent("Click me");
        expect(button.className).toContain("");
    });
});
