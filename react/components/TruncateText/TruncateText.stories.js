import * as React from "react";
import TruncateText from "./index";

export default {
    title: "Truncate Text",
    component: TruncateText,
    argTypes: {
        text: { control: "text" },
        maxLength: { control: { type: "number", min: 0 } },
        dataTestId: { control: "text" },
        fontSize: { control: "text" },
    },
};

const Template = (args) => <TruncateText {...args} />;

export const FullText = Template.bind({});
FullText.args = {
    text: "Addressing Social Needs in the Inpatient Setting Part 4 of 4 Housing",
    maxLength: 120,
    dataTestId: "measure-comments",
};

export const TruncatedText = Template.bind({});
TruncatedText.args = {
    text: "Addressing Social Needs in the Inpatient Setting Part 4 of 4 Housing Domain Addressing Social Needs in the Inpatient Setting Part 4 of 4 Housing Domain",
    maxLength: 60,
    dataTestId: "measure-comments",
    fontSize: "1rem",
};
