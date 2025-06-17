import React, { useState } from "react";
import TimeField from "./TimeField";

export default {
    title: "TimeField",
    component: TimeField,
    argTypes: {
        disabled: { control: "boolean" },
        label: { control: "text" },
    },
};

const Template = (args) => {
    const [value, setValue] = useState("");

    const handleTimeChange = (newValue) => {
        console.log("Time changed: newValue = ", newValue);
        setValue(newValue);
    };

    return (
        <div className="qpp-u-padding--16" style={{ width: 300 }}>
            <TimeField
                {...args}
                value={value}
                handleTimeChange={handleTimeChange}
            />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    label: "Result Time",
};
