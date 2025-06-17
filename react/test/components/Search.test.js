import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "../../components";

describe("Search Component", () => {
    const defaultProps = {
        id: "test-search",
        name: "search",
        placeholder: "Search something...",
        inputValue: "initial",
        inputAriaLabel: "Search field",
        buttonAriaLabel: "Search button",
        inputWidth: "300px",
        onChange: jest.fn(),
        onClick: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Does not catch fire", () => {
        render(<Search {...defaultProps} />);

        const input = screen.getByRole("searchbox");
        expect(input).toHaveAttribute("id", "test-search");
        expect(input).toHaveAttribute("name", "search");
        expect(input).toHaveAttribute("placeholder", "Search something...");
        expect(input).toHaveValue("initial");
        expect(input).toHaveStyle("width: 300px");
        expect(input).toHaveAttribute("aria-label", "Search field");
    });

    it("calls onChange", () => {
        render(<Search {...defaultProps} />);
        const input = screen.getByRole("searchbox");

        fireEvent.change(input, { target: { value: "new" } });
        expect(defaultProps.onChange).toHaveBeenCalled();
    });

    it("renders the button and trigger onClick", () => {
        render(<Search {...defaultProps} />);
        const button = screen.getByTestId("search-btn");

        expect(button).toHaveAttribute("aria-label", "Search button");
        fireEvent.click(button);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });

    it("disables input and button when props set", () => {
        render(
            <Search
                {...defaultProps}
                disabled={true}
                disableSearchBtn={true}
            />
        );

        expect(screen.getByRole("searchbox")).toBeDisabled();
        expect(screen.getByTestId("search-btn")).toBeDisabled();
    });

    it("uses default props when none are provided", () => {
        render(<Search />);
        expect(screen.getByRole("searchbox")).toHaveAttribute("id", "search-input");
        expect(screen.getByTestId("search-btn")).toHaveAttribute("id", "search-input-submit");
    });
});
