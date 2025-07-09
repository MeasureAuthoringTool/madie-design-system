import React from "react";
import NumberInput from "./index";

export default {
    title: "NumberInput",
    component: NumberInput,
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16" style={{ width: 300 }}>
        {children}
    </div>
);

export const BasicNumberInput = () => (
    <Wrapper>
        <NumberInput id="basic-number-input" label="Demo number input" />
    </Wrapper>
);

export const NumberInputWithNoNegativeNumbers = () => (
    <Wrapper>
        <NumberInput
            id="number-input-non-negative"
            label="Demo number input"
            aria-label="Demo number input"
            placeholder="Type a number…"
            allowNegative={false}
        />
    </Wrapper>
);

export const NumberInputWithErrorAndHelperText = () => (
    <Wrapper>
        <NumberInput
            id="number-input-error"
            error={true}
            label="Demo number input"
            aria-label="Demo number input"
            placeholder="Type a number…"
            helperText="Please Enter a valid integer"
        />
    </Wrapper>
);

export const NumberInputDisabled = () => (
    <Wrapper>
        <NumberInput
            id="number-input-disabled"
            label="Demo number input"
            aria-label="Demo number input"
            placeholder="Type a number…"
            disabled={true}
        />
    </Wrapper>
);

export const NumberInputWithTooltip = () => (
    <Wrapper>
        <NumberInput
            id="number-input-tooltip"
            label="Demo number input"
            aria-label="Demo number input"
            placeholder="Type a number…"
            tooltipText="Provides information"
        />
    </Wrapper>
);
