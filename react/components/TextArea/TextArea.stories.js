import React from "react";
import TextArea from "./index";
import { FormHelperText } from "@mui/material";

export default {
    title: "TextArea",
    component: TextArea,
    argTypes: {
        disabled: { control: "boolean" },
        error: { control: "boolean" },
        required: { control: "boolean" },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"], // adjust if needed
        },
        helperText: { control: "text" },
        value: { control: "text" },
    },
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16" style={{ width: 300 }}>
        {children}
    </div>
);

const Template = (args) => (
    <Wrapper>
        <TextArea
            {...args}
            id="measureName"
            inputProps={{ "data-testid": "measure-name-input" }}
            data-testid="measure-name-text-field"
            label="Text Label"
            placeholder="Placeholder"
        />
    </Wrapper>
);

export const Interactive = Template.bind({});
Interactive.args = {
    size: "small",
    disabled: false,
    error: false,
    required: false,
    helperText: "",
    value: "",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
    ...Interactive.args,
    helperText: (
        <FormHelperText data-testid="helper-text" error={false}>
            a descriptive message
        </FormHelperText>
    ),
};

export const DisabledWithValue = Template.bind({});
DisabledWithValue.args = {
    ...Interactive.args,
    value: "This is a disabled text area",
    disabled: true,
    required: true,
};

export const DisabledWithNoValue = Template.bind({});
DisabledWithNoValue.args = {
    ...Interactive.args,
    disabled: true,
    required: true,
};

export const Required = Template.bind({});
Required.args = {
    ...Interactive.args,
    required: true,
};

export const Error = Template.bind({});
Error.args = {
    ...Interactive.args,
    error: true,
    required: true,
    helperText: "An error message",
};

export const VariedHeights = () => (
    <div
        className="qpp-u-padding--16"
        style={{ width: 900, marginBottom: "16px", display: "flex", gap: 16 }}
    >
        <TextArea
            placeholder="Placeholder"
            required
            label="Text Label"
            id="measureName1"
            inputProps={{ "data-testid": "measure-name-input1" }}
            data-testid="measure-name-text-field1"
            size="small"
            helperText="An error message"
        />
        <TextArea
            placeholder="Placeholder"
            required
            label="Text Label"
            id="measureName2"
            inputProps={{ "data-testid": "measure-name-input2" }}
            data-testid="measure-name-text-field2"
            size="small"
            helperText="An error message"
        />
        <TextArea
            placeholder="Placeholder"
            label="Text Label"
            id="measureName3"
            inputProps={{ "data-testid": "measure-name-input3" }}
            data-testid="measure-name-text-field3"
            size="small"
            helperText="An error message designed to take up a lot of space to see how we space multiple input elements within the same row in a responsive manner"
        />
        <TextArea
            placeholder="Placeholder"
            error
            required
            label="Text Label"
            id="measureName4"
            inputProps={{ "data-testid": "measure-name-input4" }}
            data-testid="measure-name-text-field4"
            size="small"
            helperText="An error message"
        />
    </div>
);
