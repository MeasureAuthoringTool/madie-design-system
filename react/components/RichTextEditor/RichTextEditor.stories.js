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
            canEdit={true}
        />
    );
};

export const ReadOnlyTextEditor = () => {
    const [value, setValue] = useState(
        "<p>This is <strong>readonly</strong> contents</p>"
    );

    const handleChange = (selectedVal) => {
        setValue(selectedVal);
    };
    return (
        <RichTextEditor
            label={"Test Text Editor"}
            required={true}
            onChange={handleChange}
            content={value}
            canEdit={false}
        />
    );
};
TextEditor.storyName = "Rich Text Editor";
