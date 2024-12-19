import * as React from "react";
import {withKnobs} from "@storybook/addon-knobs";
import TruncateText from "./index";

export default {
    title: "Truncate Text",
    component: TruncateText,
    decorators: [withKnobs],
};

export const FullText = () => <TruncateText text="Addressing Social Needs in the Inpatient Setting Part 4 of 4 Housing" maxLength={120} dataTestId={"measure-comments"} />;
export const TruncatedText = () => <TruncateText text="Addressing Social Needs in the Inpatient Setting Part 4 of 4 Housing Domain Addressing Social Needs in the Inpatient Setting Part 4 of 4 Housing Domain" maxLength={60} dataTestId={"measure-comments"} />;
