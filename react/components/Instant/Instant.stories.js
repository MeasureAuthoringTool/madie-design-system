import React, { useState } from "react";
import Instant from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default {
    title: "Instant",
    component: Instant,
    decorators: [withKnobs],
};

export const InstantComponent = (args) => {
    const [value, setValue] = useState("");
    const handleDateTimeChange = (v) => {
        setValue(v)
    };
    return (
        <div className="qpp-u-padding--16">
            <div> Date string: {value} </div>
            <Instant
                disabled={false}
                id="status_date_time"
                label="Status Date/Time"
                handleDateTimeChange={handleDateTimeChange}
                dateTimeValue={value}
            />
        </div>
    );
};
