import React, { useState } from "react";
import DateField from "./DateField";

export default {
    title: "DateField",
    component: DateField,
    argTypes: {
        label: { control: "text" },
        disabled: { control: "boolean" },
        value: { control: "text" },
    },
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
                {...args}
                value={value}
                handleDateChange={handleDateChange}
            />
        </div>
    );
};

DateFieldComponent.args = {
    label: "Status Date",
    disabled: false,
};

export const DateFieldComponentDisabled = (args) => {
    const handleDateChange = (e) => {
        console.log("Handle change triggered", e.target.value);
    };

    return (
        <div className="qpp-u-padding--16">
            <DateField {...args} handleDateChange={handleDateChange} />
        </div>
    );
};

DateFieldComponentDisabled.args = {
    label: "Status Date",
    disabled: true,
    value: "2023-10-01",
};
