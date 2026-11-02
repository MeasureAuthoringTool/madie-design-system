import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MadieTooltip from "../../components/MadieTooltip";
import TooltipIcon from "../../components/MadieTooltipIcon";

describe("MadieTooltip sizing", () => {
    it("scales the original artwork into a 24px SVG", () => {
        const { container } = render(<TooltipIcon />);
        const svg = container.querySelector("svg");
        expect(svg).toHaveAttribute("width", "24");
        expect(svg).toHaveAttribute("height", "24");
        expect(svg).toHaveAttribute("viewBox", "0 0 14 14");
        expect(svg.querySelector("clipPath rect")).toHaveAttribute("width", "14");
        expect(svg.querySelector("clipPath rect")).toHaveAttribute("height", "14");
    });

    it("keeps the tooltip wrapper at 24px without flex shrinking", () => {
        render(<MadieTooltip id="help-icon" title="Help" />);
        expect(screen.getByRole("img", { name: "Help" })).toHaveStyle({
            width: "24px",
            height: "24px",
            flexShrink: "0",
            display: "inline-flex",
        });
    });

    it("preserves explicit icon size overrides", () => {
        const { container } = render(<TooltipIcon width={14} height={14} />);
        expect(container.querySelector("svg")).toHaveAttribute("width", "14");
        expect(container.querySelector("svg")).toHaveAttribute("height", "14");
    });
});
