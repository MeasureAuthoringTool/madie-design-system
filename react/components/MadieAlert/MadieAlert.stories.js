import React from "react";
import MadieAlert from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default {
    title: "Madie Alert",
    component: MadieAlert,
    decorators: [
        withKnobs,
        (storyFn) => (
            <div style={{ padding: "120px", backgroundColor: "gray" }}>
                {storyFn()}
            </div>
        ),
    ],
};

export const MadieAlertWarning = () => (
    <MadieAlert
        type="warning"
        content="Your measure needs a CMS ID, you must first create and import your measure from MAT."
    />
);
MadieAlertWarning.storyName = "MadieAlertWarning";

export const MadieAlertInfo = () => (
    <MadieAlert
        type="info"
        content="Your measure needs a CMS ID, you must first create and import your measure from MAT."
    />
);
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

export const MadieAlertError = () => (
    <MadieAlert
        type="error"
        active={false}
        content="Please complete the CQL Editor process before continuing."
    />
);
MadieAlertError.storyName = "MadieAlertError";

export const MadieAlertSuccess = () => (
    <MadieAlert
        type="success"
        content="Your measure has been succesfully updated."
    />
);
MadieAlertSuccess.storyName = "MadieAlertSuccess";
