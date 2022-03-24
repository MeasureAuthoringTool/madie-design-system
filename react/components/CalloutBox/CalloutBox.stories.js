import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import CalloutBox from "./index";

export default {
    title: "CalloutBox",
    component: CalloutBox,
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <div className="qpp-u-padding--12" style={{ maxWidth: "80ch" }}>
            <CalloutBox
                title="Call to Action Heading"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo et lacus lacinia tristique. Nulla dignissim ipsum sit amet posuere interdum."
                button={{
                    text: "Call to Action",
                    onClick: () => console.log("cta clicked"),
                }}
            />
        </div>
    );
};

export const WithHref = () => {
    return (
        <div className="qpp-u-padding--12" style={{ maxWidth: "80ch" }}>
            <CalloutBox
                title="Call to Action Heading"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo et lacus lacinia tristique. Nulla dignissim ipsum sit amet posuere interdum."
                button={{
                    text: "Call to Action",
                    href: "https://example.com",
                }}
            />
        </div>
    );
};

export const WithTextInput = () => {
    const [value, setValue] = useState("");
    return (
        <div className="qpp-u-padding--12" style={{ maxWidth: "80ch" }}>
            <CalloutBox
                title="Call to Action Heading"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo et lacus lacinia tristique. Nulla dignissim ipsum sit amet posuere interdum."
                input={{
                    placeholder: "Placeholder",
                    onChange: (e) => setValue(e.target.value),
                    value,
                }}
                button={{
                    text: "Call to Action",
                    onClick: () => {
                        console.log("cta clicked");
                        console.log("input value --- ", value);
                    },
                }}
            />
        </div>
    );
};

export const WithHeaderLevel = () => {
    return (
        <div className="qpp-u-padding--12" style={{ maxWidth: "80ch" }}>
            <CalloutBox
                title="H5 Heading"
                headerLevel={5}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                button={{
                    text: "Call to Action",
                    href: "https://example.com",
                }}
            />
        </div>
    );
};

export const WithButtonOverride = () => {
    const Button = () => <button>My custom button</button>;
    return (
        <div className="qpp-u-padding--12" style={{ maxWidth: "80ch" }}>
            <CalloutBox
                title="H5 Heading"
                headerLevel={5}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                button={<Button />}
            />
        </div>
    );
};
