import React, { useState } from "react";
import DateField from "./DateField";
import { withKnobs } from "@storybook/addon-knobs";

export default {
    title: "DateField",
    component: DateField,
    decorators: [withKnobs],
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
                disabled={false}
                label="Status Date"
                handleDateChange={handleDateChange}
                value={value}
            />
        </div>
    );
};
