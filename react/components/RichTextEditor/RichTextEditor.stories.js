import React, { useState } from "react";
import RichTextEditor from "./index";

export default {
    title: "RichTextEditor",
    component: RichTextEditor,
    decorators: [
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
            label="Test Text Editor"
            required
            onChange={handleChange}
            content={value}
            disabled={false}
        />
    );
};

TextEditor.storyName = "Rich Text Editor";

export const ReadOnlyTextEditor = () => {
    const [value, setValue] = useState(
        "<p>This is <strong>readonly</strong> content</p>",
    );

    const handleChange = (selectedVal) => {
        setValue(selectedVal);
    };

    return (
        <RichTextEditor
            label="Test Text Editor"
            required
            onChange={handleChange}
            content={value}
            disabled
        />
    );
};
