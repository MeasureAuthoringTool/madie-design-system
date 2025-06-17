import React from "react";
import Breadcrumb from "./index";

export default {
    title: "Breadcrumb",
    component: Breadcrumb,
    args: {
        newBreadcrumb: true,
    },
    argTypes: {
        newBreadcrumb: {
            control: { type: "boolean" },
            description: "Use the new breadcrumb style",
        },
    },
};

const commonCrumbs = [
    {
        url: "/",
        category: "MainContent",
        label: "Home",
        title: "Home",
    },
    {
        url: "/",
        category: "MainContent",
        label: "Mips Overview",
        title: "Mips Overview",
    },
];

const Template = (args) => (
    <div className="qppds qpp-u-padding--16 qpp-u-fill--blue-80">
        <Breadcrumb {...args} />
    </div>
);

export const ExampleLightBreadcrumb = Template.bind({});
ExampleLightBreadcrumb.args = {
    crumbs: commonCrumbs,
};
ExampleLightBreadcrumb.storyName = "Light";

export const ExampleScreenreaderOnlyBreadcrumb = Template.bind({});
ExampleScreenreaderOnlyBreadcrumb.args = {
    crumbs: [
        {
            url: "/",
            category: "MainContent",
            label: "Home",
            title: "Home",
        },
        "Mips Overview",
    ],
};
ExampleScreenreaderOnlyBreadcrumb.storyName = "SR Only Breadcrumb";

export const ExampleDarkBreadcrumb = (args) => (
    <div className="qppds qpp-u-padding--16">
        <Breadcrumb {...args} />
    </div>
);
ExampleDarkBreadcrumb.args = {
    newBreadcrumb: true,
    dark: true,
    crumbs: commonCrumbs,
};
ExampleDarkBreadcrumb.storyName = "Dark";
