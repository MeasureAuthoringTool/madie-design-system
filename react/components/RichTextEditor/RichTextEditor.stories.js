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
            disabled={false}
        />
    );
};

export const ReadOnlyTextEditor = () => {
    const [value, setValue] = useState(
        "<p>This is <strong>readonly</strong> content</p>"
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
            disabled={true}
        />
    );
};
TextEditor.storyName = "Rich Text Editor";
