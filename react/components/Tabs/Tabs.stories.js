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

/**
 * @param {{
 *   type: "A" | "B" | "C" | "D",
 *   size: "standard" | "large",
 *   orientation: "horizontal" | "vertical"
 * }} props
 */
const Template = ({ type, size, orientation }) => {
    const [selected, setSelected] = useState(1);
    const handleChange = (_, value) => setSelected(value);

    const tabProps = { type, size, orientation };

    return (
        <div
            style={{
                margin: "25px",
                width: orientation === "vertical" ? 200 : "fit-content",
            }}
        >
            <Tabs {...tabProps} value={selected} onChange={handleChange}>
                <Tab {...tabProps} label="Item One" value={1} />
                <Tab {...tabProps} label="Item Two" value={2} />
                <Tab {...tabProps} label="Item Three" value={3} />
                <Tab {...tabProps} label="disabled" value={4} disabled />
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
