import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import RichTextEditor from "./index";
export default {
    title: "RichTextEditor",
    component: RichTextEditor,
    decorators: [
        withKnobs,
        (storyFn) => <div style={{ padding: "120px" }}>{storyFn()}</div>,
    ],
};

export const TextEditor = () => {
    const [value, setValue] = useState("test");

    const handleChange = (selectedVal) => {
        setValue(selectedVal);
    };
    return (
        <RichTextEditor
            label={"Test Text Editor"}
            required={true}
            onChange={handleChange}
            content={value}
        />
    );
};

export const ReadOnlyTextEditor = () => {
    const [value, setValue] = useState(
        "<p>This is <strong>read only</strong> content</p>"
    );

    const handleChange = (selectedVal) => {
        setValue(selectedVal);
    };
    return (
        <RichTextEditor
            label="Test Text Editor"
            required={true}
            onChange={handleChange}
            content={value}
            readOnly
        />
    );
};

export const DisabledTextEditor = () => {
    const [value, setValue] = useState(
        "<p>This is <strong>disabled</strong> content</p>"
    );

    const handleChange = (selectedVal) => {
        setValue(selectedVal);
    };
    return (
        <RichTextEditor
            label="Test Text Editor"
            required={true}
            onChange={handleChange}
            content={value}
            disabled
        />
    );
};
TextEditor.storyName = "Rich Text Editor";
