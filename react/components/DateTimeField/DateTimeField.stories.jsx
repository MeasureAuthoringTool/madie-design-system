import React, { useState } from "react";
import DateTimeField from "./DateTimeField";

export default {
    title: "DateTimeField",
    component: DateTimeField,
    argTypes: {
        label: { control: "text" },
        disabled: { control: "boolean" },
        dateTimeValue: { control: "text" },
        id: { control: "text" },
    },
};

export const TimeDateFieldComponent = (args) => {
    const [value, setValue] = useState(args.dateTimeValue || "");

    const handleDateTimeChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="qpp-u-padding--16">
            <DateTimeField
                {...args}
                dateTimeValue={value}
                handleDateTimeChange={handleDateTimeChange}
            />
        </div>
    );
};

TimeDateFieldComponent.args = {
    label: "Status Date/Time",
    disabled: false,
    id: "status_date_time",
    dateTimeValue: "",
};

export const TimeDateFieldComponentDisabled = (args) => (
    <div className="qpp-u-padding--16">
        <DateTimeField {...args} handleDateTimeChange={() => {}} />
    </div>
);

TimeDateFieldComponentDisabled.args = {
    label: "Status Date/Time",
    disabled: true,
    id: "status_date_time",
    dateTimeValue: "2023-10-01T12:00:00Z",
};
