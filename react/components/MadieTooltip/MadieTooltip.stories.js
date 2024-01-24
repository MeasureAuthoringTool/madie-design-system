import React from "react";
import MadieTooltip from "./index";

const offsetDecorator = (storyFn) => (
    <div style={{ marginLeft: 120, marginTop: 25 }}>{storyFn()}</div>
);

export default {
    title: "MadieTooltip",
    component: MadieTooltip,
};

export const ExampleTooltip = () => (
    <div>
        <div>
            <MadieTooltip text="Input the new version #" />
        </div>
        <div style={{ marginLeft: 200 }}>
            <MadieTooltip color="#000" />
        </div>
        <div style={{ marginLeft: 350 }}>
            <MadieTooltip color="#000" />
        </div>
    </div>
);

ExampleTooltip.storyName = "Madie Tooltip example";
ExampleTooltip.decorators = [offsetDecorator];
