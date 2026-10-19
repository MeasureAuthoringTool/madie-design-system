import React from "react";
import Footer from "./FooterUI";

export default {
    title: "Footer",
    component: Footer,
    args: {
        isFullWidth: false,
        buildVersion: "BUILD VERSION",
        isNewFooter: false,
        showHcdResearch: false,
    },
};

export const ExampleFooter = (args) => (
    <Footer
        isFullWidth={args.isFullWidth}
        buildVersion={args.buildVersion}
        isNewFooter={args.isNewFooter}
        showHcdResearch={args.showHcdResearch}
    />
);

ExampleFooter.storyName = "example Footer";
