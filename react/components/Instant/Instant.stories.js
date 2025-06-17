import React, { useState } from "react";
import Instant from "./index";

export default {
    title: "Instant",
    component: Instant,
    argTypes: {
        disabled: { control: "boolean" },
        id: { control: "text" },
        label: { control: "text" },
    },
};

export const InstantComponent = (args) => {
    const [value, setValue] = useState("");
    const handleDateTimeChange = (v) => {
        setValue(v);
    };

    return (
        <div className="qpp-u-padding--16">
            <div>Date string: {value}</div>
            <Instant
                {...args}
                handleDateTimeChange={handleDateTimeChange}
                dateTimeValue={value}
            />
        </div>
    );
};

InstantComponent.args = {
    disabled: false,
    id: "status_date_time",
    label: "Status Date/Time",
};
