import React, { useState } from "react";
import Instant from "./index";

export default {
    title: "Instant",
    component: Instant,
};

export const InstantComponent = (args) => {
    const [value, setValue] = useState("");
    const handleDateTimeChange = (v) => {
        setValue(v);
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
