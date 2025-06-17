import React from "react";
import MadieAlert from "./index";

export default {
    title: "Madie Alert",
    component: MadieAlert,
    decorators: [
        (Story) => (
            <div style={{ padding: "120px", backgroundColor: "gray" }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["info", "warning", "error", "success"],
        },
        content: { control: "text" },
        active: { control: "boolean" },
    },
};

const Template = (args) => <MadieAlert {...args} />;

export const MadieAlertWarning = Template.bind({});
MadieAlertWarning.args = {
    type: "warning",
    content:
        "Your measure needs a CMS ID, you must first create and import your measure from MAT.",
};
MadieAlertWarning.storyName = "MadieAlertWarning";

export const MadieAlertInfo = Template.bind({});
MadieAlertInfo.args = {
    type: "info",
    content:
        "Your measure needs a CMS ID, you must first create and import your measure from MAT.",
};
MadieAlertInfo.storyName = "MadieAlertInfo";

export const MadieAlertInfoList = () => (
    <MadieAlert
        type="info"
        content={
            <ul>
                <li>test</li>
                <li>test</li>
                <li>okay</li>
            </ul>
        }
    />
);
MadieAlertInfoList.storyName = "MadieAlertInfoList";

export const MadieAlertWithTitle = () => (
    <MadieAlert
        type="info"
        content={
            <>
                <h3>Error:</h3>
                <ul>
                    <li>cause 1</li>
                    <li>cause 2</li>
                    <li>goblins in the machine</li>
                </ul>
            </>
        }
    />
);
MadieAlertWithTitle.storyName = "withTitle";

export const MadieAlertError = Template.bind({});
MadieAlertError.args = {
    type: "error",
    content: "Please complete the CQL Editor process before continuing.",
    active: false,
};
MadieAlertError.storyName = "MadieAlertError";

export const MadieAlertSuccess = Template.bind({});
MadieAlertSuccess.args = {
    type: "success",
    content: "Your measure has been succesfully updated.",
};
MadieAlertSuccess.storyName = "MadieAlertSuccess";
