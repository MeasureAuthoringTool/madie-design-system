import React from "react";
import NumberInput from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default {
    title: "NumberInput",
    component: NumberInput,
    decorators: [withKnobs],
};

const [value, setValue] = React.useState(null);
export const BasicNumberInput = () => (
    <NumberInput
        aria-label="Demo number input"
        placeholder="Type a number…"
        value={value}
        onChange={(event, val) => setValue(val)}
    />
);

// NumberInput.storyName = "Basic NumberInput";
