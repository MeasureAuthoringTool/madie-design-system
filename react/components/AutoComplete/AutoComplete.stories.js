import React, { useState } from "react";
import AutoComplete from "./AutoComplete";

export default {
    title: "AutoComplete",
    component: AutoComplete,
};

const options = ["Option1", "Option2", "Option3", "Option4", "Option5"];

const TemplateSingleSelect = (args) => {
    const [value, setValue] = useState("");
    const handleChange = (id, selectedVal) => {
        setValue(selectedVal);
    };
    return (
        <div className="qpp-u-padding--16">
            <AutoComplete
                id="autocomplete"
                dataTestId="autocomplete"
                label="Auto Complete"
                options={options}
                onChange={handleChange}
                value={value}
                {...args}
            />
        </div>
    );
};

export const AutoCompleteWithLabel = TemplateSingleSelect.bind({});
AutoCompleteWithLabel.args = {
    placeholder: "Search for a value",
};

export const AutoCompleteWithLabelDisabled = TemplateSingleSelect.bind({});
AutoCompleteWithLabelDisabled.args = {
    disabled: true,
    value: "Option1"
};

export const AutoCompleteWithHelperText = TemplateSingleSelect.bind({});
AutoCompleteWithHelperText.args = {
    helperText: "Helper text goes here",
    placeholder: "Search for a value",
};

export const AutoCompleteRequired = TemplateSingleSelect.bind({});
AutoCompleteRequired.args = {
    required: true,
    placeholder: "Search for a value",
};

export const AutoCompleteWithError = TemplateSingleSelect.bind({});
AutoCompleteWithError.args = {
    required: true,
    helperText: "This field is required",
    error: true,
};

const TemplateMultipleSelect = (args) => {
    const [value, setValue] = useState(["Option1", "Option2"]);
    const handleChange = (id, selectedVal) => {
        setValue(selectedVal);
    };
    return (
        <div className="qpp-u-padding--16">
            <AutoComplete
                id="autocomplete"
                dataTestId="autocomplete"
                label="Auto Complete"
                multiple={true}
                options={options}
                onChange={handleChange}
                value={value}
                {...args}
            />
        </div>
    );
};

export const AutoCompleteMultipleWithLabel = TemplateMultipleSelect.bind({});
AutoCompleteMultipleWithLabel.args = {
    placeholder: "Start typing to search for a value",
};

export const AutoCompleteMultipleDisabled = TemplateMultipleSelect.bind({});
AutoCompleteMultipleDisabled.args = {
    disabled: true,
    placeholder: "Start typing",
};

export const AutoCompleteMultipleWithError = TemplateMultipleSelect.bind({});
AutoCompleteMultipleWithError.args = {
    required: true,
    helperText: "At least one field is required",
    error: true,
};
