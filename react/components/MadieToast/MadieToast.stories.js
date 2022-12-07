import React, { useState } from "react";
import MadieToast from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default {
    title: "Madie Toast",
    component: MadieToast,
    decorators: [
        withKnobs,
        (storyFn) => (
            <div style={{ padding: "120px", backgroundColor: "gray" }}>
                {storyFn()}
            </div>
        ),
    ],
};

export const MadieToastWarning = () => (
    <MadieToast
        type="warning"
        content="Your measure needs a CMS ID, you must first create and import your measure from MAT."
    />
);
MadieToastWarning.storyName = "MadieToastWarning";

export const MadieToastInfo = () => (
    <MadieToast
        type="info"
        content="Your measure needs a CMS ID, you must first create and import your measure from MAT."
    />
);
MadieToastInfo.storyName = "MadieToastInfo";

export const MadieToastInfoList = () => (
    <MadieToast
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
MadieToastInfoList.storyName = "MadieToastInfoList";

export const MadieToastWithTitle = () => (
    <MadieToast
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
MadieToastWithTitle.storyName = "withTitle";

export const MadieToastError = () => (
    <MadieToast
        type="error"
        active={false}
        content="Please complete the CQL Editor process before continuing."
    />
);
MadieToastError.storyName = "MadieToastError";

export const MadieToastSuccess = () => (
    <MadieToast
        type="success"
        content="Your measure has been succesfully updated."
    />
);
MadieToastSuccess.storyName = "MadieToastSuccess";

export const SuccessToast = () => {
    const [toastOpen, setToastOpen] = useState(false);
    return (
        <div>
            <button
                onClick={() => setToastOpen(true)}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "calc(50% - 80px)",
                }}
            >
                Simulate Success
            </button>
            <MadieToast
                visible={toastOpen}
                type="success"
                content="Your measure has been succesfully updated."
                autoHideDuration={3000}
                onClose={() => setToastOpen(false)}
            />
        </div>
    );
};

export const InfoToast = () => {
    const [toastOpen, setToastOpen] = useState(false);
    return (
        <div>
            <button
                onClick={() => setToastOpen(true)}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "calc(50% - 80px)",
                }}
            >
                Simulate Info
            </button>
            <MadieToast
                visible={toastOpen}
                type="info"
                content="Information about your measure."
                autoHideDuration={3000}
                onClose={() => setToastOpen(false)}
            />
        </div>
    );
};

export const WarningToast = () => {
    const [toastOpen, setToastOpen] = useState(false);
    return (
        <div>
            <button
                onClick={() => setToastOpen(true)}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "calc(50% - 80px)",
                }}
            >
                Simulate Warning
            </button>
            <MadieToast
                visible={toastOpen}
                type="warning"
                content="There is a warning about your measure but you can continue."
                autoHideDuration={3000}
                onClose={() => setToastOpen(false)}
            />
        </div>
    );
};

export const ErrorToast = () => {
    const [toastOpen, setToastOpen] = useState(false);
    return (
        <div>
            <button
                onClick={() => setToastOpen(true)}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "calc(50% - 80px)",
                }}
            >
                Simulate Error
            </button>
            <MadieToast
                visible={toastOpen}
                type="error"
                content="There is something wrong with you measure. Please fix before moving forward."
                autoHideDuration={3000}
                onClose={() => setToastOpen(false)}
            />
        </div>
    );
};
