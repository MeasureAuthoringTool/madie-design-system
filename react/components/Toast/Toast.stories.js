import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Toast from './index'

export default {
    title: "Toast",
    component: Toast,
    decorators: [withKnobs],
};

export const SuccessToast = () => {
    const [toastOpen, setToastOpen] = useState(false);
    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#242424'}}>
            <button onClick={() => setToastOpen(true)} style={{ position: 'absolute', top: '50%', left: 'calc(50% - 80px)'}}>
                Simulate Success
            </button>
            <Toast
                toastKey='toast-key'
                testId="success-toast"
                toastType='success'
                open={toastOpen}
                message='An action has successfully been completed'
                onClose={() => setToastOpen(false)}
                autoHideDuration={3000}
            />
        </div>
    )
}

export const DangerToast = () => {
    const [toastOpen, setToastOpen] = useState(false);
    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#242424'}}>
            <button onClick={() => setToastOpen(true)} style={{ position: 'absolute', top: '50%', left: 'calc(50% - 80px)'}}>
                Simulate Danger
            </button>
            <Toast
                toastKey='toast-key'
                toastType='danger'
                testId="danger-toast"
                open={toastOpen}
                message='Something has gone wrong. Please try again'
                onClose={() => setToastOpen(false)}
                autoHideDuration={3000}
            />
        </div>
    )
}
