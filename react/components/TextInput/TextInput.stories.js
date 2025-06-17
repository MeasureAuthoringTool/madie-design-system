import React from "react";
import PropTypes from "prop-types";
import TextInput from "./index";

export default {
    title: "Text Input",
    component: TextInput,
    argTypes: {
        disabled: { control: "boolean" },
        error: { control: "text" },
        hint: { control: "text" },
        label: { control: "text" },
        placeholder: { control: "text" },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "big"],
        },
        value: { control: "text" },
        className: { control: "text" },
        "aria-label": { control: "text" },
    },
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16">{children}</div>
);

Wrapper.propTypes = {
    children: PropTypes.node,
};

const Template = (args) => (
    <Wrapper>
        <TextInput {...args} style={{ width: args.styleWidth || "auto" }} />
    </Wrapper>
);

export const Interactive = Template.bind({});
Interactive.args = {
    id: "example",
    name: "example",
    value: "Example value",
    label: "Input Field",
    "aria-label": "example label",
    styleWidth: "auto",
};

export const InputFieldWithPlaceholder = Template.bind({});
InputFieldWithPlaceholder.args = {
    id: "placeholder-example",
    name: "placeholder",
    label: "Placeholder Example",
    placeholder: "Placeholder value",
};

export const DisabledInputField = Template.bind({});
DisabledInputField.args = {
    id: "disabled-example",
    name: "disabled_example",
    value: "Example value",
    label: "Disabled Example",
    disabled: true,
};

export const FocusedInputField = Template.bind({});
FocusedInputField.args = {
    id: "focused-example",
    name: "focused_example",
    value: "Example value",
    label: "Focused Example",
    className: "qpp-c-text-input--focus",
};

export const ErrorInputField = Template.bind({});
ErrorInputField.args = {
    id: "error-example",
    name: "error_example",
    value: "Example value",
    label: "Error Example",
    error: "Error Message",
    className: "qpp-u-margin-bottom--8",
};

export const SuccessInputField = Template.bind({});
SuccessInputField.args = {
    id: "success-example",
    name: "success",
    value: "Example value",
    label: "Success Example",
    variant: "success",
};

export const InputFieldWithHint = Template.bind({});
InputFieldWithHint.args = {
    id: "hint-example",
    name: "hint",
    value: "Example value",
    label: "Hint Example",
    hint: "Hint Message",
    className: "qpp-u-margin-bottom--8",
};

export const BigInput = Template.bind({});
BigInput.args = {
    id: "big-example",
    name: "big_input",
    value: "Example value",
    label: "Big Example",
    size: "big",
};
