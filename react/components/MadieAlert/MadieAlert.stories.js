import React, { useState } from "react";
import MadieAlert from "./index";

export default {
    title: "Madie Alert",
    component: MadieAlert,
    decorators: [
        (storyFn) => (
            <div
                style={{ padding: "min(120px, 5vw)", backgroundColor: "gray" }}
            >
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

export const IndependentlyPositionedMinimizedAlert = () => {
    const [minimizedAlerts, setMinimizedAlerts] = useState({});
    const [errorCount, setErrorCount] = useState(0);

    return (
        <>
            <header
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    marginBottom: "16px",
                }}
            >
                <h2 style={{ margin: 0, lineHeight: 1.3 }}>Measure Details</h2>
                {Object.values(minimizedAlerts).some(Boolean) && (
                    <MinimizedAlert
                        errorCount={errorCount}
                        onClick={() => setMinimizedAlerts({})}
                    />
                )}
            </header>
            <MadieAlert
                type="warning"
                canClose={false}
                minimizedAlerts={minimizedAlerts}
                onMinimizedAlertsChange={(nextMinimizedAlerts, count) => {
                    setMinimizedAlerts(nextMinimizedAlerts);
                    setErrorCount(count);
                }}
                content={
                    <ul>
                        <li>Your measure needs a CMS ID.</li>
                        <li>Please complete the CQL Editor process.</li>
                    </ul>
                }
            />
        </>
    );
};
