import React from "react";
import MadieSpinner from "./index";

export default {
    title: "MadieSpinner",
    component: MadieSpinner,
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16" style={{ width: 300 }}>
        {children}
    </div>
);

export const ExampleSpinner = () => (
    <Wrapper>
        <MadieSpinner />
    </Wrapper>
);

ExampleSpinner.storyName = "Example Madie Spinner";
