import React from "react";
import Dropdown from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default {
    title: "Dropdown",
    component: Dropdown,
    decorators: [withKnobs],
};

export const DropdownField = () => (
    <Dropdown
        id="id-example"
        value="value-example"
        name="name-example"
        ariaLabel="arial label example"
        options={[
            { name: "Name 1", value: "Value 1" },
            { name: "Name 2", value: "Value 2" },
            { name: "Name 3", value: "Value 3" },
        ]}
    />
);

export const DropdownFieldAutoWidth = () => (
    <Dropdown
        id="id-example"
        value="value-example"
        name="name-example"
        ariaLabel="arial label example"
        className="qpp-u-width--auto"
        options={[
            { name: "Name 1", value: "Value 1" },
            { name: "Name 2", value: "Value 2" },
            { name: "Name 3", value: "Value 3" },
        ]}
    />
);

export const DisabledDropdown = () => (
    <Dropdown
        disabled
        id="id-example"
        value="value-example"
        name="name-example"
        ariaLabel="arial label example"
        options={[
            { name: "Name 1", value: "Value 1" },
            { name: "Name 2", value: "Value 2" },
            { name: "Name 3", value: "Value 3" },
        ]}
    />
);

export const DropdownBigVariant = () => (
    <Dropdown
        id="id-example"
        value="value-example"
        name="name-example"
        ariaLabel="arial label example"
        size="big"
        options={[
            { name: "Name 1", value: "Value 1" },
            { name: "Name 2", value: "Value 2" },
            { name: "Name 3", value: "Value 3" },
        ]}
    />
);

export const DropdownWithDisabledOption = () => (
    <Dropdown
        id="id-example"
        value="value-example"
        name="name-example"
        ariaLabel="arial label example"
        options={[
            { disabled: true, name: "Select Category", value: "default" },
            { name: "Name 1", value: "Value 1" },
            { name: "Name 2", value: "Value 2" },
        ]}
    />
);

export const DropdownUsingChildrenProp = () => (
    <Dropdown
        id="id-example"
        value="value-example"
        name="name-example"
        ariaLabel="arial label example"
    >
        <option value="Value 1">Name 1</option>
        <option value="Value 2">Name 2</option>
    </Dropdown>
);
