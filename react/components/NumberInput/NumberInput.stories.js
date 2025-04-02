import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import NumberInput from "./index";
import PropTypes from "prop-types";

export default {
    title: "NumberInput",
    component: NumberInput,
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

export const BasicNumberInput = () => {
    return (
        <Wrapper>
            <NumberInput id="basic-number-input" label="Demo number input" />
        </Wrapper>
    );
};

export const NumberInputWithNoNegativeNumbers = () => {
    return (
        <Wrapper>
            <NumberInput
                id="basic-number-input"
                label="Demo number input"
                aria-label="Demo number input"
                placeholder="Type a number…"
                allowNegative={false}
            />
        </Wrapper>
    );
};

export const NumberInputWithErrorAndHelperText = () => {
    return (
        <Wrapper>
            <NumberInput
                id="basic-number-input"
                error={true}
                label="Demo number input"
                aria-label="Demo number input"
                placeholder="Type a number…"
                helperText={"Please Enter a valid integer"}
            />
        </Wrapper>
    );
};

export const NumberInputDisabled = () => {
    return (
        <Wrapper>
            <NumberInput
                id="basic-number-input"
                label="Demo number input"
                aria-label="Demo number input"
                placeholder="Type a number…"
                disabled={true}
            />
        </Wrapper>
    );
};

export const NumberInputWithTooltip = () => {
    return (
        <Wrapper>
            <NumberInput
                id="basic-number-input"
                label="Demo number input"
                aria-label="Demo number input"
                placeholder="Type a number…"
                tooltipText={"Provides information"}
            />
        </Wrapper>
    );
};
