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
    console.log('value is', value)
    const handleDateTimeChange = (e) => {
        console.log("Handle change triggered", e);
    };
    return (
        <div className="qpp-u-padding--16">
            <DateTimeField
                // disabled={true}
                label="Status Date/Time"
                handleDateTimeChange={handleDateTimeChange}
                dateTimeValue={value}
            />
        </div>
    );
};