import React from "react";
import MadieToolTipIcon from "./index";

const offsetDecorator = (storyFn) => (
    <div style={{ margin: "80px" }}>{storyFn()}</div>
);

export default {
    title: "MadieToolTipIcon",
    component: MadieToolTipIcon,
};

export const ExampleTooltipIcon = () => (
    <div>
        <div>
            {`<TooltipIcon color="#0073C8"/>`}
            <MadieToolTipIcon />
        </div>
    </div>
);

ExampleTooltipIcon.storyName = "Madie Tooltip Icon example";
ExampleTooltipIcon.decorators = [offsetDecorator];
