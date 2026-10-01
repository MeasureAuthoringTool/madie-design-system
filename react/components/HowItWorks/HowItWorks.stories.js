import React, { useState } from "react";
import PropTypes from "prop-types";
import { withKnobs } from "@storybook/addon-knobs";
import HowItWorks from "./index";

export default {
    title: "HowItWorks",
    component: HowItWorks,
    decorators: [withKnobs],
};

const Wrapper = ({ children }) => (
    <div className="qpp-u-padding--16" style={{ width: 600 }}>
        {children}
    </div>
);

Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

const body = (
    <p>
        The CQL Editor is where you create and maintain your measure&apos;s
        Clinical Quality Language (CQL).
    </p>
);

export const Default = () => (
    <Wrapper>
        <HowItWorks>{body}</HowItWorks>
    </Wrapper>
);

Default.storyName = "left aligned (default)";

export const RightAligned = () => (
    <Wrapper>
        <HowItWorks align="right">{body}</HowItWorks>
    </Wrapper>
);

RightAligned.storyName = "right aligned";

export const Controlled = () => {
    const [open, setOpen] = useState(true);
    return (
        <Wrapper>
            <HowItWorks isOpen={open} onOpenChange={setOpen}>
                {body}
            </HowItWorks>
        </Wrapper>
    );
};

Controlled.storyName = "controlled (starts open)";
