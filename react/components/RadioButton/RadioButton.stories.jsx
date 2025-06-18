import React, { useState } from "react";
import RadioButton from "./RadioButton";

export default {
    title: "RadioButton",
    component: RadioButton,
};

const options = [
    { label: "option 1", value: true },
    { label: "option 2", value: false },
    { label: "options 3", value: "options 3" },
];

const TemplateRadioButton = (args) => {
    const [value, setValue] = useState("test");
    const handleChange = (id, selectedVal) => {
        console.log("Handle change triggered", id, selectedVal);
        setValue(selectedVal);
    };
    return (
        <div className="qpp-u-padding--16">
            <RadioButton
                id="RadioButton"
                dataTestId="v"
                label="Radio Button"
                options={options}
                onChange={handleChange}
                value={value}
                {...args}
            />
        </div>
    );
};

export const RadioButtonWithLabel = TemplateRadioButton.bind({});
RadioButtonWithLabel.args = {};

export const RadioButtonWithLabelDisabledWithNoValue = TemplateRadioButton.bind(
    {},
);
RadioButtonWithLabelDisabledWithNoValue.args = {
    disabled: true,
};

export const RadioButtonWithLabelDisabledWithValue = TemplateRadioButton.bind(
    {},
);
RadioButtonWithLabelDisabledWithValue.args = {
    disabled: true,
    value: "options 3",
};

export const RadioButtonWithHelperText = TemplateRadioButton.bind({});
RadioButtonWithHelperText.args = {
    helperText: "Helper text goes here",
};

export const RadioButtonRequired = TemplateRadioButton.bind({});
RadioButtonRequired.args = {
    required: true,
};

export const RadioButtonWithError = TemplateRadioButton.bind({});
RadioButtonWithError.args = {
    required: true,
    helperText: "This field is required",
    error: true,
};
