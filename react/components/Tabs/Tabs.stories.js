import React, { useState } from "react";
import "./tabs.scss";
import Tabs from "./index";
import Tab from "./Tab";

export default {
    title: "Tabs",
    component: Tabs,
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["A", "B", "C", "D"],
        },
        size: {
            control: { type: "select" },
            options: ["standard", "large"],
        },
        orientation: {
            control: { type: "radio" },
            options: ["horizontal", "vertical"],
        },
    },
};

const Template = ({ type, size, orientation }) => {
    const [selected, setSelected] = useState(1);

    const handleChange = (event, value) => {
        setSelected(value);
    };

    const tabProps = {
        type,
        size,
        orientation,
    };

    const tabsOrientation =
        orientation === "vertical" ? "vertical" : "horizontal";

    return (
        <div
            style={{
                margin: "25px",
                width: orientation === "vertical" ? 200 : "fit-content",
            }}
        >
            <Tabs
                type={type}
                size={size}
                orientation={tabsOrientation}
                value={selected}
                onChange={handleChange}
            >
                <Tab
                    {...tabProps}
                    label="Item One"
                    value={1}
                    orientation={tabsOrientation}
                />
                <Tab
                    {...tabProps}
                    label="Item Two"
                    value={2}
                    orientation={tabsOrientation}
                />
                <Tab
                    {...tabProps}
                    label="Item Three"
                    value={3}
                    orientation={tabsOrientation}
                />
                <Tab
                    {...tabProps}
                    label="disabled"
                    value={4}
                    disabled
                    orientation={tabsOrientation}
                />
            </Tabs>
        </div>
    );
};

export const InteractiveTabs = Template.bind({});
InteractiveTabs.args = {
    type: "A",
    size: "standard",
    orientation: "horizontal",
};
