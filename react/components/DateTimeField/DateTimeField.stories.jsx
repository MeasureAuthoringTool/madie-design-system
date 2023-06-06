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
    const handlDateTimeChange = (e) => {
        console.log("Handle change triggered", e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className="qpp-u-padding--16">
            <DateTimeField
                label="Status Date/Time"
                handlDateTimeChange={handlDateTimeChange}
                dateTimeValue={value}
            />
        </div>
    );
};