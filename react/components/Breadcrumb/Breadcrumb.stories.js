import React from "react";
import Breadcrumb from "./index";

export default {
    title: "Breadcrumb",
    component: Breadcrumb,
    args: {
        newBreadcrumb: true,
    },
};

export const ExampleLightBreadcrumb = (args) => (
    <div className="qppds qpp-u-padding--16 qpp-u-fill--blue-80">
        <Breadcrumb
            newBreadcrumb={args.newBreadcrumb}
            crumbs={[
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
            ]}
        />
    </div>
);

ExampleLightBreadcrumb.storyName = "Light";

export const ExampleScreenreaderOnlyBreadcrumb = (args) => (
    <div className="qppds qpp-u-padding--16 qpp-u-fill--blue-80">
        <Breadcrumb
            newBreadcrumb={args.newBreadcrumb}
            crumbs={[
                {
                    url: "/",
                    category: "MainContent",
                    label: "Home",
                    title: "Home",
                },
                "Mips Overview",
            ]}
        />
    </div>
);
ExampleScreenreaderOnlyBreadcrumb.storyName = "SR Only Breadcrumb";

export const ExampleDarkBreadcrumb = (args) => (
    <div className="qppds qpp-u-padding--16">
        <Breadcrumb
            newBreadcrumb={args.newBreadcrumb}
            dark
            crumbs={[
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
            ]}
        />
    </div>
);

ExampleDarkBreadcrumb.storyName = "Dark";
