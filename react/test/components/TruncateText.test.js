import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TruncateText from "../../components/TruncateText";

describe("TruncateText", () => {
    const longText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    const shortText = "Short text";

    it("returns null when text is empty", () => {
        const { container } = render(
            <TruncateText text="" dataTestId="test" />,
        );
        expect(container.firstChild).toBeNull();
    });

    it("returns null when text is only whitespace", () => {
        const { container } = render(
            <TruncateText text="   " dataTestId="test" />,
        );
        expect(container.firstChild).toBeNull();
    });

    it("renders full text when shorter than maxLength", () => {
        render(
            <TruncateText text={shortText} maxLength={20} dataTestId="test" />,
        );
        expect(screen.getByTestId("test-content")).toHaveTextContent(shortText);
        expect(screen.queryByTestId("test-toggle-button")).toBeNull();
    });

    it("renders truncated text and handles on click", () => {
        render(
            <TruncateText text={longText} maxLength={20} dataTestId="test" />,
        );

        const content = screen.getByTestId("test-content");
        expect(content).toBeInTheDocument();
        expect(content).toHaveTextContent(longText.slice(0, 20));

        const toggleBtn = screen.getByTestId("test-toggle-button");
        expect(toggleBtn).toBeInTheDocument();
        expect(toggleBtn).toHaveTextContent("Show more");

        fireEvent.click(toggleBtn);

        expect(screen.getByTestId("test-content")).toHaveTextContent(longText);
        expect(screen.getByTestId("test-toggle-button")).toHaveTextContent(
            "Show less",
        );

        fireEvent.click(toggleBtn);

        expect(screen.getByTestId("test-content")).toHaveTextContent(
            longText.slice(0, 20),
        );
        expect(screen.getByTestId("test-toggle-button")).toHaveTextContent(
            "Show more",
        );
    });

    it("applies custom fontSize", () => {
        render(
            <TruncateText
                text={shortText}
                dataTestId="font-test"
                fontSize="2rem"
            />,
        );
        const content = screen.getByTestId("font-test-content");
        expect(content).toHaveStyle("font-size: 2rem");
    });
});
