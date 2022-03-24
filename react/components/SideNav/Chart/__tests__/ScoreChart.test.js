/* global expect */
import React from "react";
import { render } from "@testing-library/react";
import ScoreChart from "../ScoreChart";

const CHART_DATA = {
    finalScore: 50,
    submissionId: "x",
    categories: [
        { name: "quality", value: 30, maxContribution: 60 },
        { name: "aci", value: 15, maxContribution: 30 },
        { name: "ia", value: 5, maxContribution: 10 },
    ],
};

describe("ScoreChart component", () => {
    it("should match snapshot", () => {
        const { container } = render(<ScoreChart chartData={CHART_DATA} />);

        expect(container).toMatchSnapshot();
    });
});
