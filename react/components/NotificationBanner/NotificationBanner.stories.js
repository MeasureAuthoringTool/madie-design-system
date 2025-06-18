import React from "react";
import NotificationBanner from "./index";

export default {
    title: "NotificationBanner",
    component: NotificationBanner,
    args: {
        result: {
            content: "CONTENT",
            label: "Label",
            name: "name",
            color: "blue",
            dismissable: false,
        },
    },
    argTypes: {
        result: {
            control: "object",
        },
        "result.dismissable": {
            control: "boolean",
        },
    },
};

const Template = (args) => <NotificationBanner {...args} />;

export const ExampleNotificationBanner = Template.bind({});
ExampleNotificationBanner.storyName = "example NotificationBanner";
