import React from "react";
import PropTypes from "prop-types";
import { withKnobs } from "@storybook/addon-knobs";
import MadieSpinner from "./index";

export default {
    title: "MadieSpinner",
    component: MadieSpinner,
    decorators: [withKnobs],
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16" style={{ width: 300 }}>
        {children}
    </div>
);

Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export const ExampleSpinner = () => (
    <Wrapper>
        <MadieSpinner />
    </Wrapper>
)

ExampleSpinner.storyName = "example Madie Spinner";
