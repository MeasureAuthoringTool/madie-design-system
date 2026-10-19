import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TruncateText } from "../../components";

describe("TruncateText", () => {
    const longText = "This is a long description that should be truncated";

    it("renders full text without a toggle when within the limit", () => {
        render(<TruncateText text="short" maxLength={10} dataTestId="t" />);
        expect(screen.getByText("short")).toBeInTheDocument();
        expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("is reachable by keyboard and toggles with Enter", () => {
        render(<TruncateText text={longText} maxLength={5} dataTestId="t" />);
        userEvent.tab();
        const button = screen.getByRole("button", { name: "Show more" });
        expect(button).toHaveFocus();
        expect(button).toHaveAttribute("type", "button");
        expect(button).toHaveAttribute("aria-expanded", "false");
        userEvent.keyboard("{enter}");
        expect(screen.getByText(longText)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Show less" })).toHaveAttribute(
            "aria-expanded",
            "true"
        );
    });

    it("links the toggle to the text it controls", () => {
        render(<TruncateText text={longText} maxLength={5} dataTestId="t" />);
        const button = screen.getByRole("button");
        const target = document.getElementById(
            button.getAttribute("aria-controls")
        );
        expect(target).toHaveTextContent("This");
    });
});
