import React, { useState } from "react";
import Toggle from "./Toggle";

export default {
    title: "Toggle",
    component: Toggle,
};

export const Default = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="qpp-u-padding--16">
            <Toggle
                checked={checked}
                id="default-toggle"
                label="Toggle"
                onChange={(event, nextChecked) => setChecked(nextChecked)}
            />
        </div>
    );
};

export const Disabled = () => (
    <div className="qpp-u-padding--16">
        <Toggle
            defaultChecked
            disabled
            id="disabled-toggle"
            label="Toggle"
        />
    </div>
);