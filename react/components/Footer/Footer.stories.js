import React from "react";
import Footer from "./FooterUI";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

export default {
    title: "Footer",
    component: Footer,
    decorators: [withKnobs],
};

export const ExampleFooter = () => (
    <Footer
        isFullWidth={boolean("isFullWidth", false)}
        buildVersion={text("buildVersion", "BUILD VERSION")}
        isNewFooter={boolean("isNewFooter", false)}
        showHcdResearch={boolean("showHcdResearch", false)}
    />
);

ExampleFooter.storyName = "example Footer";
