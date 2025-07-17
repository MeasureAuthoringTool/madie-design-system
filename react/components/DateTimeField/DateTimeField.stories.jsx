import React, { useState } from "react";
import DateTimeField from "./DateTimeField";
import { withKnobs } from "@storybook/addon-knobs";

export default {
    title: "DateTimeField",
    component: DateTimeField,
    decorators: [withKnobs],
};

export const TimeDateFieldComponent = (args) => {
    const [value, setValue] = useState("");
    const handleDateTimeChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className="qpp-u-padding--16">
            <DateTimeField
                // disabled={true}
                id="status_date_time"
                label="Status Date/Time"
                handleDateTimeChange={handleDateTimeChange}
                dateTimeValue={value}
            />
        </div>
    );
};

export const TimeDateFieldComponentDisabled = (args) => {
    return (
        <div className="qpp-u-padding--16">
            <DateTimeField
                disabled={true}
                id="status_date_time"
                label="Status Date/Time"
                handleDateTimeChange={(e) => {}}
                dateTimeValue="2023-10-01T12:00:00Z"
            />
        </div>
    );
};

export const TimeDateFieldComponentDisabledNoValue = (args) => {
    return (
        <div className="qpp-u-padding--16">
            <DateTimeField
                disabled={true}
                id="status_date_time"
                label="Status Date/Time"
                handleDateTimeChange={(e) => {}}
                dateTimeValue={null}
            />
        </div>
    );
};

export const TimeDateFieldComponentReadOnly = (args) => {
    return (
        <div className="qpp-u-padding--16">
            <DateTimeField
                readOnly
                id="status_date_time"
                label="Status Date/Time"
                handleDateTimeChange={(e) => {}}
                dateTimeValue="2023-10-01T12:00:00Z"
            />
        </div>
    );
};
