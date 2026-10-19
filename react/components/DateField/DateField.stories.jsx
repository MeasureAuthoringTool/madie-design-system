import React, { useState } from "react";
import DateField from "./DateField";

export default {
    title: "DateField",
    component: DateField,
};
export const DateFieldComponent = (args) => {
    const [value, setValue] = useState("");
    const handleDateChange = (e) => {
        console.log("Handle change triggered", e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className="qpp-u-padding--16">
            <DateField
                label="Status Date"
                handleDateChange={handleDateChange}
                value={value}
            />
        </div>
    );
};

export const DateFieldComponentDisabled = (args) => {
    const handleDateChange = (e) => {
        console.log("Handle change triggered", e.target.value);
    };
    return (
        <div className="qpp-u-padding--16">
            <DateField
                disabled
                label="Status Date"
                handleDateChange={handleDateChange}
                value="2023-10-01"
            />
        </div>
    );
};

export const DateFieldComponentReadOnly = (args) => {
    const handleDateChange = (e) => {
        console.log("Handle change triggered", e.target.value);
    };
    return (
        <div className="qpp-u-padding--16">
            <DateField
                readOnly
                label="Status Date"
                handleDateChange={handleDateChange}
                value="2023-10-01"
            />
        </div>
    );
};
