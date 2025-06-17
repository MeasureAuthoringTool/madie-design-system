import React, { useState } from "react";
import Toast from "./index";

export default {
    title: "Toast",
    component: Toast,
    argTypes: {
        toastType: {
            control: {
                type: "select",
                options: ["success", "warning", "info", "danger"],
            },
        },
        message: { control: "text" },
        autoHideDuration: { control: "number" },
    },
};

const Template = (args) => {
    const [toastOpen, setToastOpen] = useState(false);

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "#242424",
                position: "relative",
            }}
        >
            <button
                onClick={() => setToastOpen(true)}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "8px 16px",
                    cursor: "pointer",
                }}
            >
                Show Toast
            </button>
            <Toast
                {...args}
                toastKey="toast-key"
                testId={`${args.toastType}-toast`}
                open={toastOpen}
                onClose={() => setToastOpen(false)}
            />
        </div>
    );
};

export const SuccessToast = Template.bind({});
SuccessToast.args = {
    toastType: "success",
    message: "An action has successfully been completed",
    autoHideDuration: 3000,
};

export const WarningToast = Template.bind({});
WarningToast.args = {
    toastType: "warning",
    message: "Something has gone wrong. Consider fixing before continuing",
    autoHideDuration: 3000,
};

export const InfoToast = Template.bind({});
InfoToast.args = {
    toastType: "info",
    message: "Some useful information",
    autoHideDuration: 3000,
};

export const DangerToast = Template.bind({});
DangerToast.args = {
    toastType: "danger",
    message: "Something has gone wrong. Please try again",
    autoHideDuration: 3000,
};
