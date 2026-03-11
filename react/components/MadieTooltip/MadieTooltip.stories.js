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
    <div style={{width: "14px"}}>
        <div styler={{width: 20, marginBottom: 20}}>
            <MadieTooltip title="Input the new version #" placement="left"/>
        </div>
        <div styler={{width: 20, marginBottom: 20}}>
            <MadieTooltip title="Input the new version #" placement="right"/>
        </div>
        <div styler={{width: 20, marginBottom: 20}}>
            <MadieTooltip title="Input the new version #" placement="bottom"/>
        </div>
    </div>
);

ExampleTooltip.storyName = "Madie Tooltip example";
ExampleTooltip.decorators = [offsetDecorator];
