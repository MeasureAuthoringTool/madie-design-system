import React from "react";
import PropTypes from "prop-types";
import Select from "./index";
import { MenuItem, Box } from "@mui/material";

export default {
    title: "Select",
    component: Select,
    argTypes: {
        defaultValue: { control: "text" },
        placeHolder: { control: "object" },
        label: { control: "text" },
        id: { control: "text" },
        size: {
            control: { type: "select", options: ["small", "medium", "large"] },
        },
        disabled: { control: "boolean" },
        required: { control: "boolean" },
        error: { control: "boolean" },
        helperText: { control: "text" },
    },
};

const Wrapper = ({ children }) => (
    <div
        className="qpp-u-padding--16"
        style={{ width: 300, marginBottom: "16px" }}
    >
        {children}
    </div>
);
Wrapper.propTypes = {
    children: PropTypes.node,
};

const options = [
    { key: "key1", value: "value1", testId: "testid1", name: "name1" },
    { key: "key2", value: "value2", testId: "testid2", name: "name2" },
    { key: "key3", value: "value2", testId: "testid3", name: "name3" },
];

const renderedOptions = options.map(({ key, value, testId, name }) => (
    <MenuItem key={key} value={value} data-testid={`option-${testId}`}>
        {name}
    </MenuItem>
));

const Template = (args) => (
    <Wrapper>
        <Select {...args} options={renderedOptions} />
    </Wrapper>
);

export const SelectWithLabel = Template.bind({});
SelectWithLabel.args = {
    defaultValue: "",
    placeHolder: { name: "placeholder", value: "" },
    label: "Text Label",
    id: "measureName",
    size: "small",
    disabled: false,
    required: false,
    error: false,
    helperText: "",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
    ...SelectWithLabel.args,
    helperText: "A descriptive message",
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...SelectWithLabel.args,
    disabled: true,
};

export const Required = Template.bind({});
Required.args = {
    ...SelectWithLabel.args,
    required: true,
};

export const Error = Template.bind({});
Error.args = {
    ...SelectWithLabel.args,
    error: true,
    helperText: "An error message An error message An error message",
};

export const VariedHeights = () => (
    <div
        className="qpp-u-padding--16"
        style={{ width: 900, marginBottom: "16px" }}
    >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Select
                error
                placeHolder={{ name: "placeholder", value: "" }}
                defaultValue=""
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText="An error message"
                options={renderedOptions}
            />
            <Select
                placeHolder={{ name: "placeholder", value: "" }}
                defaultValue=""
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText=""
                options={renderedOptions}
            />
            <Select
                placeHolder={{ name: "placeholder", value: "" }}
                defaultValue=""
                label="Text Label"
                id="measureName"
                inputProps={{ "data-testid": "measure-name-input" }}
                data-testid="measure-name-text-field"
                size="small"
                helperText="An error message designed to take up a lot of space to see how we space multiple input elements within the same row in a responsive manner "
                options={renderedOptions}
            />
        </Box>
    </div>
);
