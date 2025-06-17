import React from "react";
import Dropdown from "./index";

export default {
    title: "Dropdown",
    component: Dropdown,
    argTypes: {
        id: { control: "text" },
        value: { control: "text" },
        name: { control: "text" },
        ariaLabel: { control: "text", name: "aria-label" },
        disabled: { control: "boolean" },
        size: { control: { type: "select", options: ["", "big"] } },
        className: { control: "text" },
    },
};

const options = [
    { name: "Name 1", value: "Value 1" },
    { name: "Name 2", value: "Value 2" },
    { name: "Name 3", value: "Value 3" },
];

export const DropdownField = (args) => <Dropdown {...args} options={options} />;
DropdownField.args = {
    id: "id-example",
    value: "value-example",
    name: "name-example",
    ariaLabel: "aria label example",
};

export const DropdownFieldAutoWidth = (args) => (
    <Dropdown {...args} options={options} />
);
DropdownFieldAutoWidth.args = {
    ...DropdownField.args,
    className: "qpp-u-width--auto",
};

export const DisabledDropdown = (args) => (
    <Dropdown {...args} options={options} />
);
DisabledDropdown.args = {
    ...DropdownField.args,
    disabled: true,
};

export const DropdownBigVariant = (args) => (
    <Dropdown {...args} options={options} />
);
DropdownBigVariant.args = {
    ...DropdownField.args,
    size: "big",
};

export const DropdownWithDisabledOption = (args) => (
    <Dropdown
        {...args}
        options={[
            { disabled: true, name: "Select Category", value: "default" },
            { name: "Name 1", value: "Value 1" },
            { name: "Name 2", value: "Value 2" },
        ]}
    />
);
DropdownWithDisabledOption.args = {
    ...DropdownField.args,
};

export const DropdownUsingChildrenProp = (args) => (
    <Dropdown {...args}>
        <option value="Value 1">Name 1</option>
        <option value="Value 2">Name 2</option>
    </Dropdown>
);
DropdownUsingChildrenProp.args = {
    ...DropdownField.args,
};
