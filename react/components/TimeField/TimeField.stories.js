import React, { useState } from "react";
import TimeField from "./TimeField";

export default {
    title: "TimeField",
    component: TimeField,
};
export const TimeFieldComponent = (args) => {
    const [value, setValue] = useState("");
    const handleTimeChange = (newValue, v) => {
        console.log("Time changed: newValue = ", newValue);
        setValue(newValue);
    };
    return (
        <div className="qpp-u-padding--16">
            <TimeField
                disabled={false}
                label="Result Time"
                handleTimeChange={handleTimeChange}
                value={value}
            />
        </div>
    );
};
