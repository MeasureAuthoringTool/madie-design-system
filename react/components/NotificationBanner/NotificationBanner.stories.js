import React from "react";
import NotificationBanner from "./index";

export default {
    title: "NotificationBanner",
    component: NotificationBanner,
    args: {
        dismissable: false,
    },
};

export const ExampleNotificationBanner = (args) => (
    <NotificationBanner
        result={{
            content: "CONTENT",
            label: "Label",
            name: "name",
            color: "blue",
            dismissable: args.dismissable,
        }}
    />
);

ExampleNotificationBanner.storyName = "example NotificationBanner";
